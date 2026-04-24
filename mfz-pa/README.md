# MFZ_PA — always-on Discord PA on Hostinger VPS

`MFZ_PA` is a personal assistant built on top of **Claude Code** + the
**official Anthropic Discord plugin** ("Claude Code Channels"). It runs as a
24/7 tmux session under systemd on a Hostinger VPS, signed in with the
claude.ai subscription (no API key, no per-token billing).

## Architecture in one picture

```
   Your phone / laptop
   (Discord client)
            │  DM / @mention
            ▼
      Discord servers ────────► Discord bot application (you create this)
                                          │  bot token
                                          ▼
   ┌────────────────────────────────────────────────────────────────────┐
   │  Hostinger VPS (Ubuntu 24.04, root, srv1378757)                    │
   │                                                                    │
   │   systemd unit: mfz-pa.service                                     │
   │     └─► tmux session "mfz-pa"                                      │
   │           └─► claude --channels plugin:discord@claude-plugins-…    │
   │                  ├─ MCP server (bun) talks to Discord gateway      │
   │                  └─ Claude Code session (CLAUDE.md = persona)      │
   │                                                                    │
   │   Working dir:  /root/mfz-pa/                                      │
   │   Secrets:      /etc/mfz-pa/env  (chmod 600, DISCORD_BOT_TOKEN)    │
   │   Auth:         /root/.claude/.credentials.json (claude.ai OAuth)  │
   └────────────────────────────────────────────────────────────────────┘
```

## What's in this folder

| File                         | Purpose                                       |
| ---------------------------- | --------------------------------------------- |
| `CLAUDE.md`                  | The PA persona Claude Code reads on startup. |
| `setup.sh`                   | Idempotent bootstrap. Run once on the VPS.    |
| `start.sh`                   | Manual launcher (alternative to systemd).     |
| `systemd/mfz-pa.service`     | Always-on systemd unit.                       |
| `.gitignore`                 | Keeps secrets and runtime state out of git.   |

## Prerequisites (already verified on your VPS)

- Ubuntu 24.04, root user, 26 GB free, 7.8 GiB RAM.
- Claude Code installed and signed in via claude.ai OAuth.
- `tmux 3.4`, `git 2.43`, `node v20.20`, `systemd 255`.
- Marketplace `claude-plugins-official` already registered in `~/.claude/plugins`.

## One-time setup on the VPS

### 1. Run the bootstrap

Copy this whole folder to the VPS (via `scp` or just `git clone` this repo
and `cd melzayathub/mfz-pa`), then:

```bash
sudo bash setup.sh
```

This installs **bun**, sets your git identity (interactive), optionally
generates an SSH key, upgrades **Claude Code** to latest, copies `CLAUDE.md`
to `/root/mfz-pa/`, creates `/etc/mfz-pa/env` for secrets, and installs the
systemd unit.

### 2. Create the Discord application

1. Go to <https://discord.com/developers/applications> → **New Application**
   → name it (e.g. "MFZ_PA").
2. **Bot** tab → **Reset Token** → copy the token. This is the secret.
3. **Bot** tab → enable **Message Content Intent** (required so the bot can
   read message text in DMs and channels).
4. **OAuth2 → URL Generator**:
   - Scopes: `bot` and `applications.commands`
   - Bot Permissions: pick what you need. **Administrator** is the broadest;
     only do that on a server you own.
5. Open the generated URL in your browser and invite the bot to your server.

### 3. Save the token on the VPS

```bash
sudo nano /etc/mfz-pa/env
# set:  DISCORD_BOT_TOKEN=<paste the token>
```

### 4. Install the Discord plugin inside Claude Code

The Channels plugin is installed via the in-session `/plugin` command, not
via a CLI flag.

```bash
cd /root/mfz-pa
claude
```

Inside the Claude Code session:

```
/plugin install discord@claude-plugins-official
```

Follow its prompts — it will ask for the bot token (paste it from
`/etc/mfz-pa/env`) and walk you through DM-based pairing with your Discord
account. After pairing, grant your Discord user access:

```
/discord:access add <your-discord-user-id>
```

(You can find your Discord user ID by enabling Developer Mode in Discord
settings, then right-clicking your name → "Copy User ID".)

Test: send a DM to the bot. It should reply.

### 5. Make it always-on

Exit the interactive Claude Code session, then:

```bash
systemctl enable --now mfz-pa.service
systemctl status mfz-pa.service --no-pager
```

The unit launches a detached tmux session called `mfz-pa` running
`claude --channels plugin:discord@claude-plugins-official`. Attach with:

```bash
tmux attach -t mfz-pa
```

`Ctrl-b d` detaches. The session keeps running.

## Day-to-day operations

| What                    | Command                                              |
| ----------------------- | ---------------------------------------------------- |
| Check status            | `systemctl status mfz-pa.service`                    |
| Restart the bot         | `systemctl restart mfz-pa.service`                   |
| Stop the bot            | `systemctl stop mfz-pa.service`                      |
| Tail the systemd log    | `journalctl -u mfz-pa.service -f`                    |
| Watch live              | `tmux attach -t mfz-pa`  (`Ctrl-b d` to detach)      |
| Edit the persona        | `nano /root/mfz-pa/CLAUDE.md` then restart service   |
| Rotate the bot token    | edit `/etc/mfz-pa/env`, restart service              |
| Upgrade Claude Code     | `npm i -g @anthropic-ai/claude-code@latest`, restart |

## Updating the persona

`CLAUDE.md` lives in two places:

- **Source of truth**: `mfz-pa/CLAUDE.md` in this git repo (versioned).
- **Live copy**: `/root/mfz-pa/CLAUDE.md` on the VPS (what Claude actually reads).

When you change the persona, edit it in this repo, push, then on the VPS:

```bash
cd /path/to/melzayathub && git pull
cp mfz-pa/CLAUDE.md /root/mfz-pa/CLAUDE.md
systemctl restart mfz-pa.service
```

## Caveats

- **Claude Code Channels is research preview.** Expect rough edges and
  occasional breaking changes when you upgrade Claude Code.
- **Auth is your claude.ai subscription.** Do not set `ANTHROPIC_API_KEY` in
  the environment — that would override OAuth and start metered billing.
- **Bot-to-bot Discord limits**: your PA can read other bots' messages and
  moderate them, but cannot invoke their slash commands. Workaround: call
  their HTTP/CLI APIs directly from the shell.
- **Single CC session.** This setup dedicates one Claude Code session
  exclusively to the bot. Run a separate `claude` invocation in a different
  directory for any coding work, so they don't interfere.

## What's deferred

- Obsidian-as-memory integration (Git-bridged vault).
- Long-term memory in SQLite + scheduled summary writes to Obsidian.
- Pre-baked tools for managing specific other bots in the server.

These will land in follow-up PRs.
