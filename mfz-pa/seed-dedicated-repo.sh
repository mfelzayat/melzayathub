#!/usr/bin/env bash
# One-shot: copy this folder's contents into your dedicated
# github.com/mfelzayat/mfz-pa repo and push the initial commit.
#
# Run this from your laptop (not the VPS), from the root of the
# melzayathub checkout:
#
#     bash mfz-pa/seed-dedicated-repo.sh
#
# Prerequisites:
#   - You have push access to https://github.com/mfelzayat/mfz-pa.git.
#   - Nothing has been committed to the dedicated repo yet (it's empty).
#
# What it does:
#   1. Clones the dedicated repo to a temporary directory.
#   2. Copies everything under mfz-pa/ (except this script) into it,
#      at the root of the repo (flat layout).
#   3. Commits with a single "Initial commit" message.
#   4. Pushes to origin/main.
#
# If the dedicated repo is not empty, this script bails out rather than
# overwriting existing work.

set -euo pipefail

REMOTE="git@github.com:mfelzayat/mfz-pa.git"
# Fallback to HTTPS if SSH isn't set up — swap as needed.
# REMOTE="https://github.com/mfelzayat/mfz-pa.git"

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP_DIR="$(mktemp -d -t mfz-pa-seed.XXXXXX)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Cloning $REMOTE into $TMP_DIR…"
git clone "$REMOTE" "$TMP_DIR"

cd "$TMP_DIR"
if [[ -n "$(git log --oneline 2>/dev/null)" ]]; then
  echo "Error: $REMOTE already has commits. Aborting to avoid overwriting work." >&2
  echo "Inspect manually at $TMP_DIR and decide what to do." >&2
  trap - EXIT
  exit 1
fi

echo "Copying files from $SRC_DIR…"
# Copy everything except this script itself.
shopt -s dotglob
for entry in "$SRC_DIR"/*; do
  name="$(basename "$entry")"
  [[ "$name" == "seed-dedicated-repo.sh" ]] && continue
  cp -r "$entry" "$TMP_DIR/"
done
shopt -u dotglob

git add -A
git commit -m "Initial commit: Discord PA via Claude Agent SDK"
git branch -M main
git push -u origin main

echo
echo "Seeded $REMOTE successfully."
echo "On the VPS, deploy with:"
echo "  sudo git clone $REMOTE /opt/mfz-pa"
echo "  cd /opt/mfz-pa && sudo bash setup.sh"
