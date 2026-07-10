# Expanded production prompt: Project Video AI Workflow

## Goal

Create a `45.5s`, `1080x1080`, silent LinkedIn proof reel explaining a practical AI workflow: AI makes source-backed editorial decisions, deterministic software applies a reusable video system, and a human approves visual/privacy safety.

The reel must feel like an editorial evidence cabinet becoming a production line. Follow `frame.md`, `STORYBOARD.md`, and `editorial.json` exactly.

## Style

- Warm canvas `#F9F9F7`, paper `#FFFCF6`, ink `#171512`, muted `#696158`.
- Shared-system blue `#0066FF`, verified green `#1D6F58`, judgment amber `#C7862F`.
- EB Garamond 700 for the scene sentence; Inter and IBM Plex Mono only where the text lock permits.
- At least `92px` safe margins.
- One readable sentence and one visual proof mechanism per scene.
- Use rules, bars, empty interface cards, color, and motion for structure. Do not add decorative labels or metadata.

## Editorial timing

- `silent-proof-v1`: `140 WPM` after the last text entrance settles.
- Minimum settled hold: `2s`.
- Minimum safety margin: `0.75s`; final scene `0.5s`.
- Every renderer-created word must match a typed text element in `editorial.json`; allowed roles are `primary`, `supporting`, `orientation`, and `status`.
- End each reading window when its outgoing cover wipe starts, not when the nominal scene duration ends.
- Run `npm run check:editorial` after every copy or timing change.

## Rhythm

`ASSEMBLE — SCATTER — ROUTE — SPLIT — PROOF CUTS — SYNC — HOLD`

- Use explicit, seek-safe `fromTo()` entrances.
- Blue/paper cover wipes hide major scene swaps.
- Do not animate layout dimensions or use randomness/network requests.
- Motion that continues after text settles must remain secondary.

## Scene direction

### 01 — 0.0-4.0s

Six abstract project cards assemble into an orderly field. The only message is `21 projects. One video system.`

### 02 — 4.0-10.0s

Six separate file-like cards scatter across the frame. They contain graphical bars, not file names or project labels. The sentence states the maintenance cost.

### 03 — 10.0-16.5s

One abstract recipe card routes through three graphical lanes. No field names or family labels appear. The sentence explains recipe plus engine.

### 04 — 16.5-24.5s

Amber and blue cards enter from opposite sides and meet at a center lock. Their contents are graphical. A green `Human review` strip appears after the split lands.

### 05 — 24.5-35.5s

Six intact public project clips hard-cut through one shared 16:9 frame. Keep only `Six projects. One shared system.` and a graphical progress bar.

### 06 — 35.5-40.5s

A shared switch moves once; three distinct graphical frames receive the same blue outline. The sentence resolves the original maintenance problem.

### 07 — 40.5-45.5s

The final statement settles in under one second and holds. Only the practical result and `hanifcarroll.com` remain.

## Verification

1. Run `npm run check`.
2. Run `npm run snapshot` and inspect every saved frame plus all six proof cuts.
3. Compare visible copy against `editorial.json`.
4. Render only after the visual/privacy review.
5. Probe the final MP4 for `1080x1080`, 30fps, H.264, `yuv420p`, `45.5s`, and no audio.
