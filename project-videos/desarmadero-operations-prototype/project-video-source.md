# Project Video Source

This is the source of truth for the Desarmadero Operations Prototype overview video. The video should explain the problem, prototype, and result to a nontechnical viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Desarmadero Operations Prototype

Repository: `https://github.com/HanifCarroll/desarmadero`

Local repo: public repository; this video uses portfolio case-study assets only

Portfolio page source: `src/content/case-studies/desarmadero-operations-prototype.mdx`

Project metadata: `src/lib/projects/desarmadero-operations-prototype.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `45s`

Video type: discovery-to-prototype case-study video

Story mode: Plain overview

## Plain Story

Problem: the yard operation was spread across paper budget sheets, WhatsApp, Excel, and memory.

Solution: one discovery call became a PRD, functional spec, and role-based clickable prototype.

Result: the client could validate the operating model through a working app before committing to the full scope.

## One-Line Job

Desarmadero Operations Prototype turns one discovery call about a yard operation into a clickable product model the client can validate before the full build.

## Viewer Takeaway

This is forward-deployed product engineering: understand the real workflow, build a working model, and make the next scope decision clearer.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Discovery call
- Paper sheets
- Messages
- Spreadsheet
- Yard map
- Counter sale
- Cash desk
- Assignment
- Dismantler
- Clickable prototype
- Working model
- Scope decision

Do not show:

- Framework names
- Database names
- ORM names
- API endpoints
- Passwords or credentials
- Discovery transcript details
- Local paths
- Test counts
- Command output

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source | What it supports in plain language |
| --- | --- |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:35-39` | One discovery call became a clickable operations prototype, PRD, spec, and live demo. |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:41-45` | The old operating model depended on paper sheets, messages, spreadsheets, memory, and a 301-position yard. |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:47-54` | The work started from the real operating model and built a prototype before quoting the full system. |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:57-63` | The prototype follows seller, cash desk, dismantle manager, and dismantler workflow surfaces. |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:66-77` | Payment gates work, the yard map replaces memory, and roles shape focused product surfaces. |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:80-99` | The public work sample includes discovery artifacts, PRD, functional spec, live demo, seeded fake data, and screenshots. |
| `src/content/case-studies/desarmadero-operations-prototype.mdx:102-106` | The prototype made the scope conversation clearer because the client could react to a working model. |
| `src/lib/projects/desarmadero-operations-prototype.json:29-43` | Metadata confirms the constraints, problem, solution, result, and modeled roles. |

## Proof Inventory

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem | Operating model spread across paper budget sheets, WhatsApp, Excel, memory, and a 301-position yard. | `src/content/case-studies/desarmadero-operations-prototype.mdx:41-45`; `src/lib/projects/desarmadero-operations-prototype.json:29-33` | Yes, as plain text | Yes |
| Input | One discovery call and spoken business workflow. | `src/content/case-studies/desarmadero-operations-prototype.mdx:35-39` | Yes, as generalized text | Yes |
| Product action | Seller records the sale, cash desk confirms payment, manager assigns work, dismantler sees orders. | `src/content/case-studies/desarmadero-operations-prototype.mdx:57-58` | Yes, as role labels | Yes |
| Durable output | Clickable prototype, PRD, functional spec, live demo, seeded demo, and screenshots. | `src/content/case-studies/desarmadero-operations-prototype.mdx:80-99` | Yes, as artifact cards | Yes |
| Saved record | Counter-sales screen includes customer, vehicle, parts, and live order summary. | `src/assets/img/projects/desarmadero-operations-ventas.png`; case-study alt text | Yes, public anonymized screenshot | Yes |
| Guardrail or warning | Payment gates dismantler work until cash desk records deposit or full payment. | `src/content/case-studies/desarmadero-operations-prototype.mdx:66-69` | Yes, as simple payment gate concept | Optional |
| Verification | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, feedback, project metadata check, and build are required for this video. | `docs/project-videos/capture-and-production-workflow.md` | Yes | No |
| Reviewer path | Portfolio case study and public repo expose the anonymized work sample. | `src/content/case-studies/desarmadero-operations-prototype.mdx:92-99` | Yes | No |

## Selected Story

1. The yard operation was spread across paper, messages, spreadsheets, and memory.
2. Every handoff had to stay aligned across sale, payment, assignment, and yard location.
3. One discovery call became a clickable prototype.
4. The prototype follows how the yard actually works by role.
5. The yard map makes 301 locations searchable by plate.
6. The client could validate the operating model before the full scope conversation.

## Scene Cards

### Scene 1: Problem

Purpose: show why the prototype was needed.

Viewer should understand: the operation existed, but the system lived across fragile places.

Visual source: native discovery cards over an operational grid.

On-screen text:

```text
The yard ran on paper and memory.
Sales, payments, sheets, messages, and locations lived apart.
```

Narration: none.

Duration: `6.5s`

Proof shown: case-study situation and metadata constraints.

Asset path: built natively in HyperFrames.

Motion notes: paper/message/spreadsheet cards enter from different zones; grid drifts slowly.

Reading-speed check: `15` words over `6.5s` = `138 WPM`.

### Scene 2: Cost

Purpose: make the operating cost concrete.

Viewer should understand: the challenge was keeping handoffs aligned.

Visual source: native handoff rail.

On-screen text:

```text
Every handoff had to stay aligned.
Sale, payment, assignment, and yard location.
```

Narration: none.

Duration: `6.5s`

Proof shown: case-study workflow and role notes.

Asset path: built natively in HyperFrames.

Motion notes: connected role cards assemble along a rail; one warning marker resolves into alignment.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 3: Solution

Purpose: introduce the discovery-to-prototype move.

Viewer should understand: the prototype was a product-thinking artifact, not just a screen mockup.

Visual source: public counter-sales screenshot plus artifact cards.

On-screen text:

```text
One discovery call became a prototype.
The client could click through the real operation.
```

Narration: none.

Duration: `6.5s`

Proof shown: public counter-sales prototype screen and case-study summary.

Asset path: `hyperframes/assets/desarmadero-operations-ventas.png`

Motion notes: screenshot settles large while PRD/spec/demo cards lock beside it.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

### Scene 4: How It Works

Purpose: explain the prototype surface without technical terms.

Viewer should understand: each role sees the part of the operation they own.

Visual source: native role-surface rail plus cropped counter-sales screenshot.

On-screen text:

```text
The workflow follows the yard.
Seller, cash desk, manager, and dismantler each see their part.
```

Narration: none.

Duration: `6.5s`

Proof shown: modeled roles and prototype surface from case study and metadata.

Asset path: `hyperframes/assets/desarmadero-operations-ventas.png`

Motion notes: four role cards enter in order; payment gate locks before work assignment appears.

Reading-speed check: `15` words over `6.5s` = `138 WPM`.

### Scene 5: Result

Purpose: show the clearest product result.

Viewer should understand: the yard map turns memory into searchable state.

Visual source: public yard-map screenshot.

On-screen text:

```text
The map replaced memory.
301 yard positions became searchable by plate.
```

Narration: none.

Duration: `6.5s`

Proof shown: public yard-map screen and case-study proof note.

Asset path: `hyperframes/assets/desarmadero-operations-mapa.png`

Motion notes: map screenshot lands full, plate-search callout and 301 marker enter on top.

Reading-speed check: `11` words over `6.5s` = `102 WPM`.

### Scene 6: Why It Matters

Purpose: close with the value of the prototype.

Viewer should understand: the working model improved the next scope conversation.

Visual source: native decision board with prototype screenshot ghosted behind it.

On-screen text:

```text
The result was clearer scope.
The client reacted to a working model, not abstract requirements.
```

Narration: none.

Duration: `9.5s`, including the settled ending beat.

Proof shown: case-study alignment and why-it-matters sections.

Asset path: built natively in HyperFrames, with screenshot texture.

Motion notes: decision cards settle, then the end card appears and holds.

Reading-speed check: `15` words over first `6.5s` = `138 WPM`; ending beat uses `8` words over `3s` = `160 WPM`.

## Ending Beat

Reserve the final `2.5-3s` for a settled ending. This is not a new argument. It should give the viewer a clean place to stop.

End-card text:

```text
Desarmadero Operations Prototype
One call became a clickable model.
```

Duration: `3s`

Motion notes: end card fades in around `41.6s`, holds cleanly, then fades out after the hold.

Reading-speed check: `8` words over `3s` = `160 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this section short and plain. The composition should not introduce new main copy that is not listed here.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| 1 | The yard ran on paper and memory. Sales, payments, sheets, messages, and locations lived apart. | 15 | 6.5s | 138 |
| 2 | Every handoff had to stay aligned. Sale, payment, assignment, and yard location. | 12 | 6.5s | 111 |
| 3 | One discovery call became a prototype. The client could click through the real operation. | 14 | 6.5s | 129 |
| 4 | The workflow follows the yard. Seller, cash desk, manager, and dismantler each see their part. | 15 | 6.5s | 138 |
| 5 | The map replaced memory. 301 yard positions became searchable by plate. | 11 | 6.5s | 102 |
| 6 | The result was clearer scope. The client reacted to a working model, not abstract requirements. | 15 | 6.5s | 138 |
| End | Desarmadero Operations Prototype. One call became a clickable model. | 8 | 3s | 160 |

Reading-speed targets:

- Plain overview: `100-140` WPM.
- Upper bound: `180` WPM only for short, familiar questions or labels.

Allowed short labels:

- Discovery call
- PRD
- Functional spec
- Live demo
- Seller
- Cash desk
- Manager
- Dismantler
- Payment gate
- 301 positions
- Plate search
- Working model

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
| `desarmadero-operations-ventas.png` | Show the clickable counter-sales prototype and order summary. | `src/assets/img/projects/desarmadero-operations-ventas.png` | Already public/anonymized; copied into redacted folder. | `project-videos/desarmadero-operations-prototype/hyperframes/assets/desarmadero-operations-ventas.png` |
| `desarmadero-operations-mapa.png` | Show the yard map and plate search proof. | `src/assets/img/projects/desarmadero-operations-mapa.png` | Already public/anonymized; copied into redacted folder. | `project-videos/desarmadero-operations-prototype/hyperframes/assets/desarmadero-operations-mapa.png` |

## Privacy Check

Hide: discovery transcript contents, private client details, credentials, raw repository internals, local file paths, account state, tokens, cookies, and private data rows.

Safe to show: public anonymized screenshots, public project name, plain role labels, and synthetic/native HyperFrames proof cards.

Synthetic data used: native proof cards and labels are built for the video; no new private runtime data is introduced.

Redaction notes: the two screenshots already appear in the public portfolio case study. They were copied through `assets/redacted/` before being used by HyperFrames.

## HyperFrames Handoff

Composition duration: `45s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build: six plain-overview scenes plus a settled ending beat inside scene 6.

Assets to copy into `hyperframes/assets/`:

- `desarmadero-operations-ventas.png`
- `desarmadero-operations-mapa.png`

Required transitions:

- Push slide between scenes 1-4.
- Blur crossfade into the result scene.
- Gentle push into the final value scene.

Required callouts:

- Discovery artifacts: discovery call, PRD, functional spec, live demo.
- Workflow roles: seller, cash desk, manager, dismantler.
- Result callouts: 301 positions, plate search, working model.

Thumbnail frame: scene 5 map/result frame around `28.5s`.

## Acceptance Checklist

- [x] The video explains the problem, solution, and result.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
