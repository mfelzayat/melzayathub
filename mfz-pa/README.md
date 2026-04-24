# MFZ_PA

Always-on Discord personal assistant powered by the [Claude Agent SDK] on a
claude.ai Pro/Max subscription — no API billing. Runs as a systemd service.

[Claude Agent SDK]: https://code.claude.com/docs/en/agent-sdk/overview

## Architecture

```
   Your phone / laptop
   (Discord client)
            │  DM / @mention
            ▼
      Discord servers ─► Discord bot application (you create this)
                                   │  bot token
                                   ▼
   ┌─────────────────────────────────────────────────────────────┐
   │  VPS (Linux, systemd)                                       │
   │                                                             │
   │   mfz-pa.service                                            │
   │     └─► node src/bot.mjs                                    │
   │           ├─ discord.js           (gateway + DMs)           │
   │           └─ @anthropic-ai/       (subprocess: claude CLI   │
   │              claude-agent-sdk      authed via subscription) │
   │                                                             │
   │   Checkout:  /opt/mfz-pa/                                   │
   │   Persona:   /opt/mfz-pa/CLAUDE.md                          │
   │   Sessions:  /opt/mfz-pa/state/sessions.json  (per user)    │
   │   Memory:    /opt/mfz-pa/memory/              (PA notes)    │
   │   Secrets:   /etc/mfz-pa/env   (chmod 600)                  │
   └─────────────────────────────────────────────────────────────┘
```

Key properties:

- **Always on**: plain Node service, no interactive Claude Code session.
- **Subscription-only billing**: authenticates via `CLAUDE_CODE_OAUTH_TOKEN`
  from `claude setup-token`. The bot refuses to start if `ANTHROPIC_API_KEY`
  is set.
- **Per-user memory**: each Discord user gets a persistent Agent SDK session
  (30-day TTL, capped at 500 users).
- **Allowlist-gated**: `ALLOWED_DISCORD_IDS` controls who the bot responds to.
- **Crash-resilient**: systemd auto-restarts with a 5-second backoff.
- **Graceful shutdown**: in-flight replies get up to 15 seconds to finish on
  restart/stop.

## Prerequisites

- Linux VPS (tested on Ubuntu 24.04).
- Node.js ≥ 20, npm.
- `claude` CLI installed and logged into a claude.ai subscription.
  - `curl -fsSL https://claude.ai/install.sh | bash` if it isn't already.
- A Discord application + bot token (Developer Portal → your app → Bot).
- systemd.

## One-time setup

### 1. Clone to `/opt/mfz-pa`

```bash
sudo git clone https://github.com/mfelzayat/mfz-pa.git /opt/mfz-pa
cd /opt/mfz-pa
sudo bash setup.sh
```

`setup.sh` installs npm deps, creates `/etc/mfz-pa/env` from `.env.example`,
creates `state/` and `memory/`, and installs the systemd unit.

### 2. Generate a subscription OAuth token

Interactive, one-time:

```bash
claude setup-token
```

It prints a token starting with `sk-ant-oat01-…`. Copy it.

### 3. Fill in the secrets

```bash
sudo nano /etc/mfz-pa/env
```

All three must be set:

| Variable | Value |
| --- | --- |
| `DISCORD_BOT_TOKEN` | From Discord Developer Portal. |
| `CLAUDE_CODE_OAUTH_TOKEN` | Output of step 2. |
| `ALLOWED_DISCORD_IDS` | Your Discord user ID (comma-separated for multiple). Enable Developer Mode → right-click your name → Copy User ID. |

### 4. Start the service

```bash
sudo systemctl enable --now mfz-pa.service
sudo journalctl -u mfz-pa.service -f
```

Expected log:

```
MFZ_PA online as YourBotName#1234 (id=...) — model=claude-sonnet-4-6
```

### 5. Invite the bot + DM it

- Discord Developer Portal → OAuth2 → URL Generator → check `bot`, pick the
  permissions you want (Administrator on a server you own is simplest).
- Open the generated URL, authorize it into your server.
- DM the bot. It should reply within a few seconds.

## Day-to-day operations

| What | Command |
| --- | --- |
| Status | `systemctl status mfz-pa.service` |
| Restart | `systemctl restart mfz-pa.service` |
| Stop | `systemctl stop mfz-pa.service` |
| Follow logs | `journalctl -u mfz-pa.service -f` |
| Update code | `cd /opt/mfz-pa && git pull && npm install && systemctl restart mfz-pa` |
| Edit persona | edit `/opt/mfz-pa/CLAUDE.md`, restart service |
| Rotate a secret | edit `/etc/mfz-pa/env`, restart service |
| Forget one user's history | edit `/opt/mfz-pa/state/sessions.json`, remove that key, restart |
| Forget everyone | `rm /opt/mfz-pa/state/sessions.json`, restart |
| Switch model | set `MFZ_PA_MODEL=claude-opus-4-7` in `/etc/mfz-pa/env`, restart |

## Caveats

- **Subscription quota**: every reply consumes quota from your Claude.ai
  subscription. Rate-limited users see `error: ...` until quota refills.
- **Full shell access via Discord**: `permissionMode` is `bypassPermissions`
  — the bot doesn't ask for approval before shell commands or file writes,
  since there's no human in the loop to approve. The allowlist is the only
  security boundary. Don't allowlist anyone you wouldn't hand SSH to.
- **Bot-to-bot limits**: the bot can read and moderate other bots' messages
  but cannot invoke their slash commands (Discord API restriction). For bots
  that expose HTTP/CLI APIs, use Bash directly.

## What's in this repo

| Path | Purpose |
| --- | --- |
| `src/bot.mjs` | The bot — discord.js glue + Agent SDK `query()`. |
| `CLAUDE.md` | System prompt / persona (fed to the Agent SDK on every call). |
| `package.json` | npm deps (`@anthropic-ai/claude-agent-sdk`, `discord.js`). |
| `setup.sh` | Idempotent bootstrap. |
| `systemd/mfz-pa.service` | systemd unit. |
| `.env.example` | Template for `/etc/mfz-pa/env`. |

## Roadmap

- Obsidian-as-memory (Git-bridged vault).
- Scheduled summary jobs writing into Obsidian.
- Pre-baked integrations with specific other bots the user runs.
- Optional user-facing approvals for destructive shell actions.
