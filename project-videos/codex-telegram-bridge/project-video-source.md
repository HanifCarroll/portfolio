# Project Video Source

This is the source of truth for the Codex Telegram Bridge product demo video. The video should explain the problem, the bridge, and the result in plain language. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Codex Telegram Bridge

Repository: `https://github.com/HanifCarroll/codex-telegram-bridge`

Local repo: not required for this video; portfolio sources and public assets are enough.

Portfolio page source: `src/content/case-studies/codex-telegram-bridge.mdx`

Project metadata: `src/lib/projects/codex-telegram-bridge.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `44s`

Video type: product demo video

Story mode: Plain product demo

## Plain Story

Problem: Codex can keep working while I am away, but prompts and approvals can stay pinned to the desktop.

Solution: Codex Telegram Bridge opens remote mode explicitly, delivers safe chat updates, and stores reply routes locally.

Result: remote replies and approvals go back to the right Codex thread while private ids, tokens, and runtime state stay off-screen.

## One-Line Job

Codex Telegram Bridge helps a remote Codex user continue the right thread from Telegram or Discord by using local presence, routing, approvals, and delivery state.

## Viewer Takeaway

This is a controlled remote continuation product that turns a waiting desktop prompt into a safe routed reply.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Codex thread
- Waiting prompt
- Remote mode
- Telegram or Discord
- Local bridge
- Route
- Approval
- Same thread
- Local state

Do not show:

- Bot tokens
- Raw thread ids
- Real Telegram or Discord handles
- Private messages
- Local runtime state
- Local file paths
- Database rows
- API payloads
- WebSocket details
- Test output

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                       | What it supports in plain language                                                                                                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/codex-telegram-bridge.mdx:45-55`   | Codex can keep working while the desktop app is unattended, so remote control needs presence, routing, approvals, and clean stop behavior.                          |
| `src/content/case-studies/codex-telegram-bridge.mdx:60-68`   | Remote delivery is explicitly gated by `/away` and `/back`, and local state owns routing back to Codex.                                                             |
| `src/content/case-studies/codex-telegram-bridge.mdx:82-98`   | The public surface includes setup, remote mode, daemon management, transport setup, project selection, waiting threads, replies, approvals, and secret-safe output. |
| `src/content/case-studies/codex-telegram-bridge.mdx:111-125` | The result is a controlled local operating layer around agent work, with public docs, CI, release workflow, and tests.                                              |
| `src/lib/projects/codex-telegram-bridge.json:32-50`          | Metadata confirms the product constraints, problem, solution, delivery highlights, and result.                                                                      |
| `src/assets/img/projects/codex-telegram-bridge-terminal.png` | Public terminal-style command surface that is safe to show.                                                                                                         |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                        | Source path, URL, or command                                                                                          | Safe to show?                   | On-screen? |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| Problem              | Waiting prompts and approvals can remain on the desktop while Codex keeps working.                                                 | `src/content/case-studies/codex-telegram-bridge.mdx:45-55`                                                            | Yes, as plain text              | Yes        |
| Input                | Remote Telegram or Discord reply to a bridge message.                                                                              | `src/content/case-studies/codex-telegram-bridge.mdx:86-90`                                                            | Yes, with synthetic labels only | Yes        |
| Product action       | `/away` and `/back` explicitly open and close remote delivery.                                                                     | `src/content/case-studies/codex-telegram-bridge.mdx:60-64`; public terminal image                                     | Yes                             | Yes        |
| Product action       | Local route state maps a chat reply back to the originating Codex thread.                                                          | `src/content/case-studies/codex-telegram-bridge.mdx:64-68`, `:89-94`                                                  | Yes, as safe diagram            | Yes        |
| Durable output       | The same Codex thread resumes after a reply or approval.                                                                           | `src/lib/projects/codex-telegram-bridge.json:40-50`                                                                   | Yes, with synthetic labels only | Yes        |
| Guardrail or warning | Remote mode is gated by presence and does not expose raw thread ids or tokens.                                                     | `src/lib/projects/codex-telegram-bridge.json:32-42`, `src/content/case-studies/codex-telegram-bridge.mdx:98-102`      | Yes, as plain text              | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, portfolio checks, build, and feedback are required for this video. | `docs/project-videos/capture-and-production-workflow.md`                                                              | Yes                             | No         |
| Reviewer path        | Portfolio case study and public GitHub repo explain the shipped CLI, daemon, transports, docs, CI, and tests.                      | `src/content/case-studies/codex-telegram-bridge.mdx:125-128`; `https://github.com/HanifCarroll/codex-telegram-bridge` | Yes                             | No         |

## Selected Story

1. Codex can keep working after I step away.
2. Remote control needs a clear ownership boundary.
3. Codex Telegram Bridge opens and closes remote mode explicitly.
4. A remote reply carries a safe route back through local state.
5. Approvals return to the same Codex thread and are recorded locally.
6. The result is remote Codex control with local ownership.

## Scene Cards

### Scene 1: Problem

Purpose: show why the bridge exists.

Viewer should understand: Codex can continue working while a prompt waits on the desktop.

Visual source: public terminal screenshot plus a synthetic waiting prompt card.

On-screen text:

```text
Codex kept working after I stepped away.
Prompts could sit on the desktop.
```

Narration: none.

Duration: `6.5s`

Proof shown: problem from case study and metadata.

Asset path: `hyperframes/assets/codex-telegram-bridge-terminal.png`

Motion notes: terminal proof settles first, then the waiting prompt card appears.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 2: Ownership

Purpose: name the product boundary.

Viewer should understand: chat can help only if local ownership stays clear.

Visual source: presence gate with present and away states.

On-screen text:

```text
Remote control needed ownership.
Chat should not become open automation.
```

Narration: none.

Duration: `6.5s`

Proof shown: remote-mode and presence-gate constraints.

Asset path: built natively in HyperFrames.

Motion notes: gate cards assemble around a locked center rail.

Reading-speed check: `10` words over `6.5s` = `92 WPM`.

### Scene 3: Bridge

Purpose: introduce the product in one plain sentence.

Viewer should understand: the bridge opens remote delivery explicitly and closes it when the user returns.

Visual source: public terminal screenshot with command chips.

On-screen text:

```text
I built a local bridge.
/away opens remote mode. /back closes it.
```

Narration: none.

Duration: `7s`

Proof shown: public command surface and case-study remote flow.

Asset path: `hyperframes/assets/codex-telegram-bridge-terminal.png`

Motion notes: screenshot reveals with command chips for `/away` and `/back`.

Reading-speed check: `13` words over `7s` = `111 WPM`.

### Scene 4: Route

Purpose: show how a remote message routes back to the right thread without private ids.

Viewer should understand: chat messages carry safe routing, while local state maps them back.

Visual source: synthetic Telegram/Discord message, route handle, local route table, and Codex thread diagram.

On-screen text:

```text
Replies route back through local state.
The chat carries a safe route, not private ids.
```

Narration: none.

Duration: `7s`

Proof shown: route mapping from case study and metadata.

Asset path: built natively in HyperFrames.

Motion notes: message card enters, route table locks, Codex thread card lights up.

Reading-speed check: `14` words over `7s` = `120 WPM`.

### Scene 5: Approval

Purpose: show the approval path and result.

Viewer should understand: a remote approval returns to the same thread and is recorded by the daemon.

Visual source: synthetic approval message with Approve/Deny buttons, local daemon record, and resumed thread card.

On-screen text:

```text
Approvals return to the same thread.
Approve or deny in chat; the daemon records the action.
```

Narration: none.

Duration: `7s`

Proof shown: approval callback routes and daemon-owned delivery.

Asset path: built natively in HyperFrames.

Motion notes: approval buttons appear, the accepted path pulses, then the thread resumes.

Reading-speed check: `16` words over `7s` = `137 WPM`.

### Scene 6: Result

Purpose: close with the product value.

Viewer should understand: the bridge makes remote Codex useful without giving chat ownership of the system.

Visual source: local ownership map.

On-screen text:

```text
Remote Codex stays controlled.
Presence, routing, approvals, and delivery stay local.
```

Narration: none.

Duration: `7s`

Proof shown: result and why-it-matters sections from the case study.

Asset path: built natively in HyperFrames.

Motion notes: ownership map enters, then the final end card holds for a settled `2.8s`.

Reading-speed check: `11` words over `7s` = `94 WPM`.

## Ending Beat

Reserve the final `2.5-3s` for a settled ending. This is not a new argument.

End-card text:

```text
Codex Telegram Bridge
Remote replies stay locally owned.
```

Duration: `2.8s`

Motion notes: hold the final ownership map, bring in the end card, then use a short soft fade after the hold.

Reading-speed check: `8` words over `2.8s` = `171 WPM`. This is acceptable because it is the project name plus one short result line.

## On-Screen Text Lock

Final text that may appear in the video. Keep this section short and plain. The composition should not introduce new main copy that is not listed here.

| Scene | Text                                                                                         | Word count | Duration | WPM |
| ----- | -------------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Codex kept working after I stepped away. Prompts could sit on the desktop.                   |         13 |     6.5s | 120 |
| 2     | Remote control needed ownership. Chat should not become open automation.                     |         10 |     6.5s |  92 |
| 3     | I built a local bridge. /away opens remote mode. /back closes it.                            |         13 |       7s | 111 |
| 4     | Replies route back through local state. The chat carries a safe route, not private ids.      |         14 |       7s | 120 |
| 5     | Approvals return to the same thread. Approve or deny in chat; the daemon records the action. |         16 |       7s | 137 |
| 6     | Remote Codex stays controlled. Presence, routing, approvals, and delivery stay local.        |         11 |       7s |  94 |
| End   | Codex Telegram Bridge. Remote replies stay locally owned.                                    |          8 |     2.8s | 171 |

Reading-speed targets:

- Plain overview/product demo: `100-140` WPM.
- Upper bound: `180` WPM only for short, familiar questions or labels.

Allowed short labels:

- Desktop prompt
- Remote mode
- Local bridge
- Telegram
- Discord
- Safe route
- Local state
- Same Codex thread
- Approve
- Deny
- Recorded action

## Asset Manifest

| Asset                                | Purpose                                 | Source                                                       | Redaction needed?                | Final path                                                                                   |
| ------------------------------------ | --------------------------------------- | ------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------- |
| `codex-telegram-bridge-terminal.png` | Public command surface and proof anchor | `src/assets/img/projects/codex-telegram-bridge-terminal.png` | No; already public and synthetic | `project-videos/codex-telegram-bridge/hyperframes/assets/codex-telegram-bridge-terminal.png` |

## Privacy Check

Hide:

- Bot tokens
- Raw thread ids
- Real Telegram or Discord handles
- Private messages
- Local runtime state
- Local file paths
- Database rows
- API payloads

Safe to show:

- Public command names
- Public terminal screenshot
- Synthetic route labels
- Synthetic approval labels
- Plain local-state diagram

Synthetic data used:

- All chat, route, approval, daemon, and thread visuals are synthetic safe labels.

Redaction notes:

- No live Telegram, Discord, Codex thread, or local state screenshot is used. The only copied image is the public terminal-style command surface already used in the portfolio case study.

## HyperFrames Handoff

Composition duration: `44s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Problem
2. Ownership
3. Bridge
4. Route
5. Approval
6. Result plus end card

Assets to copy into `hyperframes/assets/`:

- `codex-telegram-bridge-terminal.png`

Required transitions:

- Push transitions for related handoffs.
- One blur crossfade before the route scene.
- Gentle push into the final result scene.

Required callouts:

- Remote mode open/close.
- Safe route.
- Same Codex thread.
- Recorded action.

Thumbnail frame:

- Final end card at roughly `41.2s`.

## Acceptance Checklist

- [x] The video explains the problem, bridge, and result.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen unless needed to explain the product boundary.
- [x] Each scene has one clear idea.
- [x] Product screenshot remains legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
