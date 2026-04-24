#!/usr/bin/env bash
# Manual launcher for MFZ_PA. Use this when you want to start/attach the
# always-on session by hand instead of via systemd. Idempotent.
#
#   bash start.sh           # start (if not running) and attach
#   bash start.sh --detach  # start in background, do not attach

set -euo pipefail

SESSION="mfz-pa"
PA_HOME="/root/mfz-pa"
ENV_FILE="/etc/mfz-pa/env"

if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

if ! tmux has-session -t "$SESSION" 2>/dev/null; then
  tmux new-session -d -s "$SESSION" -c "$PA_HOME" \
    "claude --channels plugin:discord@claude-plugins-official; exec bash"
  echo "Started tmux session '$SESSION'."
else
  echo "tmux session '$SESSION' already running."
fi

if [[ "${1:-}" != "--detach" ]]; then
  exec tmux attach -t "$SESSION"
fi
