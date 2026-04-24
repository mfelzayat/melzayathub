#!/usr/bin/env bash
# MFZ_PA bootstrap — idempotent. Run from the repo checkout (usually /opt/mfz-pa).
#
#   sudo bash setup.sh
#
# Installs npm deps, creates /etc/mfz-pa/env from .env.example if missing,
# creates state/ and memory/ dirs, installs the systemd unit.
# Does NOT start the service — see README.md for the remaining manual steps.

set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "This script needs to run as root (sudo bash setup.sh)." >&2
  exit 1
fi

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_DIR="/etc/mfz-pa"
ENV_FILE="${ENV_DIR}/env"
UNIT_FILE="/etc/systemd/system/mfz-pa.service"
EXPECTED_PATH="/opt/mfz-pa"

say() { printf "\033[1;36m[mfz-pa]\033[0m %s\n" "$*"; }
warn() { printf "\033[1;33m[mfz-pa]\033[0m %s\n" "$*"; }

if [[ "$REPO_DIR" != "$EXPECTED_PATH" ]]; then
  warn "Repo is at $REPO_DIR — the shipped systemd unit expects $EXPECTED_PATH."
  warn "Either move the checkout there, or edit WorkingDirectory/ExecStart/MFZ_PA_HOME in"
  warn "$REPO_DIR/systemd/mfz-pa.service to match your path."
fi

say "Installing npm dependencies…"
npm --prefix "$REPO_DIR" install --engine-strict --no-audit --no-fund --loglevel=error

mkdir -p "$REPO_DIR/state" "$REPO_DIR/memory"
mkdir -p "$ENV_DIR"
chmod 700 "$ENV_DIR"

if [[ ! -f "$ENV_FILE" ]]; then
  install -m 600 "$REPO_DIR/.env.example" "$ENV_FILE"
  say "Created secrets template at $ENV_FILE — fill it in before starting the service."
else
  say "$ENV_FILE already exists — left as-is."
fi

install -m 644 "$REPO_DIR/systemd/mfz-pa.service" "$UNIT_FILE"
systemctl daemon-reload
say "Installed systemd unit at $UNIT_FILE (not started)."

cat <<EOF

Bootstrap complete. Remaining manual steps (see README.md > "One-time setup"):

  1. claude setup-token          # generate a long-lived subscription OAuth token
  2. sudo nano $ENV_FILE         # paste the tokens + your Discord user ID
  3. sudo systemctl enable --now mfz-pa.service
  4. sudo journalctl -u mfz-pa.service -f

EOF
