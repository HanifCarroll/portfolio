# Project Video Brief

Project: Codex Telegram Bridge

Video type: product demo video

Target duration: `44s`

Primary viewer: hiring manager or general portfolio viewer

Story mode: plain product demo

One-sentence job: Codex Telegram Bridge lets a remote Telegram or Discord message continue the right Codex thread while local state owns presence, routing, approvals, and delivery.

Viewer takeaway: This is a controlled remote continuation product, not an open-ended chat automation channel.

Plain story:

- Problem: Codex can keep working while I am away, but prompts and approvals can stay pinned to the desktop.
- Solution: a local Rust bridge gates remote mode, delivers safe updates, and stores reply routes locally.
- Result: remote replies and approvals return to the right Codex thread without exposing private ids, tokens, or local runtime state.

Scene arc:

1. Codex can keep working after I step away.
2. Remote control needs a clear ownership boundary.
3. The bridge opens and closes remote mode explicitly.
4. Replies route through local state back to the originating thread.
5. Approvals return to the same thread and are recorded locally.
6. The result is remote control with local ownership.

Assets needed:

- Screenshot: public terminal-style command surface.
- UI clip: none; use synthetic safe route and approval diagrams.
- Artifact: local route table and delivery log represented as safe labels only.
- Diagram/data point: message -> route -> Codex thread flow.

Privacy notes:

- Hide: bot tokens, raw thread ids, local paths, private messages, real Telegram or Discord handles, runtime state, and local database rows.
- Safe to show: the public terminal screenshot, public command names, synthetic route labels, and plain product diagrams.
