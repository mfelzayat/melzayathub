// MFZ_PA — Discord bot bridging discord.js to the Claude Agent SDK.
// Auth uses a Claude.ai subscription OAuth token; the Anthropic API is never hit.

import { Client, Events, GatewayIntentBits, Partials } from "discord.js";
import { query } from "@anthropic-ai/claude-agent-sdk";
import fs from "node:fs/promises";
import path from "node:path";

const HOME = process.env.MFZ_PA_HOME ?? process.cwd();
const STATE_DIR = path.join(HOME, "state");
const SESSIONS_FILE = path.join(STATE_DIR, "sessions.json");
const PERSONA_FILE = path.join(HOME, "CLAUDE.md");

const MODEL = process.env.MFZ_PA_MODEL ?? "claude-sonnet-4-6";
const ALLOWED_IDS = (process.env.ALLOWED_DISCORD_IDS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const ALLOWED_TOOLS = ["Read", "Write", "Edit", "Bash", "Glob", "Grep", "WebFetch", "WebSearch"];

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const SESSION_CAP = 500;
const SAVE_DEBOUNCE_MS = 2000;
const TYPING_INTERVAL_MS = 8000;
const DISCORD_CHUNK_SIZE = 1900;
const SHUTDOWN_GRACE_MS = 15000;

const MENTION_RE = /<@!?\d+>/g;

if (!process.env.DISCORD_BOT_TOKEN) {
  console.error("fatal: DISCORD_BOT_TOKEN is not set");
  process.exit(1);
}
if (!process.env.CLAUDE_CODE_OAUTH_TOKEN) {
  console.error("fatal: CLAUDE_CODE_OAUTH_TOKEN is not set (run `claude setup-token`)");
  process.exit(1);
}
if (process.env.ANTHROPIC_API_KEY) {
  // Would override subscription OAuth and trigger metered billing.
  console.warn("ANTHROPIC_API_KEY is set — unsetting to preserve subscription billing");
  delete process.env.ANTHROPIC_API_KEY;
}

const systemPrompt = await fs.readFile(PERSONA_FILE, "utf8");

async function loadSessions() {
  try {
    return JSON.parse(await fs.readFile(SESSIONS_FILE, "utf8"));
  } catch (err) {
    if (err.code !== "ENOENT") console.warn("sessions.json load warning:", err.message);
    return {};
  }
}

function pruneSessions(sessions) {
  const now = Date.now();
  const entries = Object.entries(sessions).filter(([, v]) => now - (v.lastSeen ?? 0) < SESSION_TTL_MS);
  entries.sort(([, a], [, b]) => (b.lastSeen ?? 0) - (a.lastSeen ?? 0));
  return Object.fromEntries(entries.slice(0, SESSION_CAP));
}

let sessions = pruneSessions(await loadSessions());
let saveTimer = null;
let savePending = null;

function scheduleSave() {
  if (saveTimer) return savePending;
  savePending = new Promise((resolve) => {
    saveTimer = setTimeout(async () => {
      saveTimer = null;
      try {
        await fs.mkdir(STATE_DIR, { recursive: true });
        await fs.writeFile(SESSIONS_FILE, JSON.stringify(sessions, null, 2));
      } catch (err) {
        console.error("sessions.json write failed:", err);
      } finally {
        resolve();
      }
    }, SAVE_DEBOUNCE_MS);
  });
  return savePending;
}

async function flushSave() {
  if (!saveTimer) return;
  clearTimeout(saveTimer);
  saveTimer = null;
  try {
    await fs.mkdir(STATE_DIR, { recursive: true });
    await fs.writeFile(SESSIONS_FILE, JSON.stringify(sessions, null, 2));
  } catch (err) {
    console.error("sessions.json flush failed:", err);
  }
}

// Split a long reply so Discord's 2000-char limit doesn't cut mid-codeblock or mid-paragraph.
function splitForDiscord(text) {
  if (text.length <= DISCORD_CHUNK_SIZE) return [text];

  const parts = [];
  let remaining = text;
  let openFence = null;

  while (remaining.length > DISCORD_CHUNK_SIZE) {
    let cut = remaining.lastIndexOf("\n\n", DISCORD_CHUNK_SIZE);
    if (cut < DISCORD_CHUNK_SIZE / 2) cut = remaining.lastIndexOf("\n", DISCORD_CHUNK_SIZE);
    if (cut < DISCORD_CHUNK_SIZE / 2) cut = remaining.lastIndexOf(" ", DISCORD_CHUNK_SIZE);
    if (cut <= 0) cut = DISCORD_CHUNK_SIZE;

    let chunk = remaining.slice(0, cut);
    remaining = remaining.slice(cut).replace(/^\s+/, "");

    if (openFence) chunk = `${openFence}\n${chunk}`;

    const fences = chunk.match(/```[^\n]*/g) ?? [];
    if (fences.length % 2 === 1) {
      openFence = fences[fences.length - 1];
      chunk += "\n```";
    } else {
      openFence = null;
    }

    parts.push(chunk);
  }

  if (remaining.length > 0) {
    parts.push(openFence ? `${openFence}\n${remaining}` : remaining);
  }

  return parts;
}

const inflight = new Set();
let shuttingDown = false;

async function askClaude(discordUserId, userMessage, abortSignal) {
  const entry = sessions[discordUserId];
  const resumeId = entry?.sessionId;
  let finalText = "";
  let capturedSessionId = null;

  for await (const msg of query({
    prompt: userMessage,
    options: {
      model: MODEL,
      systemPrompt,
      resume: resumeId,
      settingSources: [],
      allowedTools: ALLOWED_TOOLS,
      permissionMode: "bypassPermissions",
      cwd: HOME,
      abortSignal,
    },
  })) {
    if (msg.type === "system" && msg.subtype === "init" && msg.session_id) {
      capturedSessionId = msg.session_id;
    }
    if (msg.type === "result" && msg.result) {
      finalText = msg.result;
    }
  }

  sessions[discordUserId] = {
    sessionId: capturedSessionId ?? resumeId ?? null,
    lastSeen: Date.now(),
  };
  scheduleSave();

  return finalText.trim() || "(no reply)";
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  // DMs can arrive on uncached channels.
  partials: [Partials.Channel, Partials.Message, Partials.User],
});

client.once(Events.ClientReady, (c) => {
  console.log(`MFZ_PA online as ${c.user.tag} (id=${c.user.id}) — model=${MODEL}`);
  if (ALLOWED_IDS.length === 0) {
    console.warn("ALLOWED_DISCORD_IDS is empty — the bot will ignore every message.");
  }
});

client.on(Events.MessageCreate, async (message) => {
  if (shuttingDown) return;
  if (message.author.bot) return;

  const isDM = message.channel.isDMBased?.() ?? false;
  const mentionsMe = client.user && message.mentions.has(client.user);
  if (!isDM && !mentionsMe) return;

  if (ALLOWED_IDS.length && !ALLOWED_IDS.includes(message.author.id)) {
    console.log(`ignored ${message.author.tag} (${message.author.id}) — not allowlisted`);
    return;
  }

  const cleaned = message.content.replace(MENTION_RE, "").trim();
  if (!cleaned) return;

  const controller = new AbortController();
  const typingTimer = setInterval(() => {
    message.channel.sendTyping().catch(() => {});
  }, TYPING_INTERVAL_MS);
  message.channel.sendTyping().catch(() => {});

  const job = (async () => {
    try {
      const reply = await askClaude(message.author.id, cleaned, controller.signal);
      for (const part of splitForDiscord(reply)) {
        await message.reply({ content: part, allowedMentions: { repliedUser: false } });
      }
    } catch (err) {
      console.error("reply failed:", err);
      try {
        await message.reply(`error: ${err.message ?? err}`);
      } catch {}
    } finally {
      clearInterval(typingTimer);
    }
  })();

  const tracked = Object.assign(job, { abort: () => controller.abort() });
  inflight.add(tracked);
  job.finally(() => inflight.delete(tracked));
});

async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`${signal} — shutting down (${inflight.size} in flight)`);

  const deadline = Date.now() + SHUTDOWN_GRACE_MS;
  while (inflight.size > 0 && Date.now() < deadline) {
    await Promise.race([
      Promise.allSettled([...inflight]),
      new Promise((r) => setTimeout(r, deadline - Date.now())),
    ]);
  }
  // Anything still running gets aborted.
  for (const job of inflight) job.abort?.();

  await flushSave();
  try {
    await client.destroy();
  } catch {}
  process.exit(0);
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("unhandledRejection", (err) => console.error("unhandledRejection:", err));

await client.login(process.env.DISCORD_BOT_TOKEN);
