#!/usr/bin/env bash
# MFZ_PA bootstrap — idempotent. Run as root on the VPS.
#
#   bash setup.sh
#
# What this does (and does NOT do):
#   - Installs Bun (required by the Claude Code Discord plugin) if missing.
#   - Sets a global git identity if not already set (interactive prompt).
#   - Generates an ed25519 SSH key if missing (interactive prompt).
#   - Upgrades Claude Code to the latest version on npm.
#   - Verifies the `--channels` flag is supported.
#   - Creates /root/mfz-pa working directory and copies CLAUDE.md into it.
#   - Installs the systemd unit at /etc/systemd/system/mfz-pa.service.
#   - Creates /etc/mfz-pa/env (chmod 600) for the Discord bot token.
#
# What you still do MANUALLY after this script:
#   1. Create a Discord application + bot in the Discord Developer Portal,
#      copy the bot token into /etc/mfz-pa/env.
#   2. Open an interactive Claude Code session in /root/mfz-pa and run
#      `/plugin install discord@claude-plugins-official`.
#   3. Pair the bot with your Discord user (DM the bot, follow the prompts).
#   4. Add yourself to the access list with `/discord:access`.
#   5. `systemctl enable --now mfz-pa.service` to start the always-on session.
#
# See README.md for the full walkthrough.

set -euo pipefail

# --- guards -------------------------------------------------------------------

if [[ $EUID -ne 0 ]]; then
  echo "This script needs to run as root (sudo bash setup.sh)." >&2
  exit 1
fi

if ! grep -qi "ubuntu" /etc/os-release; then
  echo "Warning: tested on Ubuntu 24.04. Continuing anyway in 3s." >&2
  sleep 3
fi

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PA_HOME="/root/mfz-pa"
ENV_DIR="/etc/mfz-pa"
ENV_FILE="${ENV_DIR}/env"
UNIT_FILE="/etc/systemd/system/mfz-pa.service"

say()  { printf "\033[1;36m[mfz-pa]\033[0m %s\n" "$*"; }
warn() { printf "\033[1;33m[mfz-pa]\033[0m %s\n" "$*"; }
fail() { printf "\033[1;31m[mfz-pa]\033[0m %s\n" "$*" >&2; exit 1; }

# --- 1. Bun -------------------------------------------------------------------

if command -v bun >/dev/null 2>&1; then
  say "bun already installed: $(bun --version)"
else
  say "Installing bun…"
  curl -fsSL https://bun.sh/install | bash
  # Make bun visible for the rest of this script.
  export BUN_INSTALL="$HOME/.bun"
  export PATH="$BUN_INSTALL/bin:$PATH"
  if ! command -v bun >/dev/null 2>&1; then
    fail "bun install failed; check the output above."
  fi
  # Symlink into /usr/local/bin so systemd / non-login shells find it.
  ln -sf "$BUN_INSTALL/bin/bun" /usr/local/bin/bun
  say "bun installed: $(bun --version)"
fi

# --- 2. git identity ----------------------------------------------------------

if ! git config --global user.name >/dev/null 2>&1; then
  read -rp "Git global user.name (e.g. Mohamed Felzayat): " GIT_NAME
  git config --global user.name "$GIT_NAME"
fi
if ! git config --global user.email >/dev/null 2>&1; then
  read -rp "Git global user.email: " GIT_EMAIL
  git config --global user.email "$GIT_EMAIL"
fi
say "git identity: $(git config --global user.name) <$(git config --global user.email)>"

# --- 3. SSH key (optional, for pushing notes/code from the bot) ---------------

if [[ ! -f /root/.ssh/id_ed25519 ]]; then
  read -rp "Generate an ed25519 SSH key for this VPS? [y/N] " ans
  if [[ "${ans,,}" == "y" ]]; then
    ssh-keygen -t ed25519 -N "" -f /root/.ssh/id_ed25519 -C "mfz-pa@$(hostname)"
    say "SSH public key (add to GitHub if you want the bot to push):"
    cat /root/.ssh/id_ed25519.pub
  fi
else
  say "SSH key already present at /root/.ssh/id_ed25519"
fi

# --- 4. Claude Code upgrade ---------------------------------------------------

say "Upgrading Claude Code to latest…"
npm install -g @anthropic-ai/claude-code@latest
CC_VERSION="$(claude --version 2>/dev/null || echo unknown)"
say "Claude Code version: ${CC_VERSION}"

if ! claude --help 2>&1 | grep -q -- "--channels"; then
  warn "claude --help does not show --channels yet. Channels may live under a"
  warn "subcommand in this version. We will still write the systemd unit so it"
  warn "calls 'claude --channels …' — adjust ExecStart in $UNIT_FILE if needed."
fi

# --- 5. Working directory -----------------------------------------------------

mkdir -p "$PA_HOME" "$PA_HOME/memory"
if [[ ! -f "$PA_HOME/CLAUDE.md" ]]; then
  cp "$REPO_DIR/CLAUDE.md" "$PA_HOME/CLAUDE.md"
  say "Copied CLAUDE.md persona to $PA_HOME/CLAUDE.md"
else
  say "$PA_HOME/CLAUDE.md already exists — leaving as-is. To refresh from this"
  say "repo run: cp $REPO_DIR/CLAUDE.md $PA_HOME/CLAUDE.md"
fi

# --- 6. Secrets file ----------------------------------------------------------

mkdir -p "$ENV_DIR"
chmod 700 "$ENV_DIR"
if [[ ! -f "$ENV_FILE" ]]; then
  cat > "$ENV_FILE" <<'EOF'
# MFZ_PA secrets — loaded by the systemd unit.
# Fill in the Discord bot token after you create the app in the Developer Portal.
DISCORD_BOT_TOKEN=
EOF
  chmod 600 "$ENV_FILE"
  say "Created secrets template at $ENV_FILE — fill in DISCORD_BOT_TOKEN."
else
  say "$ENV_FILE already exists — not overwriting."
fi

# --- 7. systemd unit ----------------------------------------------------------

install -m 644 "$REPO_DIR/systemd/mfz-pa.service" "$UNIT_FILE"
systemctl daemon-reload
say "Installed systemd unit at $UNIT_FILE (not started yet)."

# --- 8. Done ------------------------------------------------------------------

cat <<EOF

Bootstrap complete. Next steps (manual):

  1. Create a Discord app at https://discord.com/developers/applications
       - Bot tab: Reset Token, copy it.
       - Bot tab: enable "Message Content Intent".
       - OAuth2 > URL Generator: scopes = bot + applications.commands.
         Bot Permissions = Administrator (or pick narrower perms).
         Open the generated URL to invite the bot to your server.

  2. Put the token in $ENV_FILE :
       nano $ENV_FILE      # set DISCORD_BOT_TOKEN=...

  3. Install the Discord plugin in Claude Code (interactive):
       cd $PA_HOME
       claude
       # then inside the session:
       /plugin install discord@claude-plugins-official
       # follow its prompts; pair via DM; add yourself with /discord:access

  4. Start the always-on service:
       systemctl enable --now mfz-pa.service
       systemctl status mfz-pa.service
       tmux attach -t mfz-pa     # to see the live session; Ctrl-b d to detach

EOF
