---
name: project-video-ai-workflow-proof
version: 1.1.0
canvas: "#F9F9F7"
paper: "#FFFCF6"
ink: "#171512"
body: "#3A352F"
muted: "#696158"
accent: "#0066FF"
verified: "#1D6F58"
judgment: "#C7862F"
display-font: "EB Garamond"
body-font: "Inter"
mono-font: "IBM Plex Mono"
editorial-profile: "silent-proof-v1"
---

# Project Video AI Workflow Frame

## Concept

An editorial evidence cabinet becomes a production line. The video explains one practical idea: AI judgment becomes more useful when reliable software gives it a repeatable way to work.

## Brand contract

- Canvas: `#F9F9F7`; paper: `#FFFCF6`; ink: `#171512`; body: `#3A352F`; muted: `#696158`.
- Blue `#0066FF` marks the shared system. Green `#1D6F58` marks verified human review. Amber `#C7862F` marks the former manual burden or a judgment point.
- EB Garamond 700 carries the one sentence that must be read. Inter and IBM Plex Mono are supporting fonts, not invitations to add supporting copy.
- All three families use repository-local Fontsource WOFF2 files through the internal `Portfolio ...` family aliases; the receipt digests those exact bytes.
- Keep at least `92px` safe margins. Public 16:9 project media stays intact in a proof window and is never cropped.

## Editorial contract

This is a silent designed video, so on-screen text carries the story.

- One intent per scene.
- One primary sentence per scene, except for the two-word `Human review` gate and the final URL.
- Every renderer-created word must be declared in `editorial.json` with a canonical text role: `primary`, `supporting`, `orientation`, or `status`.
- Reading budget: `140 WPM`, measured after the last text entrance settles.
- The reading window ends when the outgoing transition begins to cover the scene, not at the nominal scene boundary.
- Every declared text element carries `data-text-start` and `data-text-duration`; its GSAP entrance reads those attributes, and editorial QA rejects any mismatch with `editorial.json`.
- Every scene needs at least `2s` of settled hold and `0.75s` of reading safety margin. The final scene may use `0.5s`.
- Decorative words, duplicate labels, status copy, file names, family names, and output counters are not allowed.
- Graphical bars, rules, cards, color, and motion can communicate structure without creating another reading task.

Run `npm run check:editorial` whenever copy, duration, or text animation timing changes.

## Visual language

Each scene has three layers:

1. A warm canvas, subtle grid, and nonverbal edge rails.
2. One visual proof mechanism: cards, a recipe diagram, a split system, real project footage, or synchronized frames.
3. One readable sentence with enough quiet space to finish it.

The frame should feel produced at rest, with no text included merely to make the composition feel busy.

## Motion

- Medium-energy editorial entrances use explicit, seek-safe `fromTo()` calls.
- The rhythm is `ASSEMBLE — SCATTER — ROUTE — SPLIT — PROOF CUTS — SYNC — HOLD`.
- Full-frame blue and paper wipes hide major scene swaps. The proof reel uses hard cuts.
- Motion may continue after the sentence settles only when it does not change or compete with the text.
- The final scene settles in under one second and holds cleanly.

## Constraints

- Silent-first: no narration, music, or effects.
- AI chooses source-backed story and evidence. Deterministic software applies the shared system. Human visual and privacy review remains visible and required.
- Do not imply GPT renders pixels or call the workflow fully automated.
- Do not claim all 21 projects were migrations. Nineteen prior compositions were migrated; two projects received first videos.
- Shared layout and motion are centralized. Project-specific evidence, copy, palettes, and privacy rules remain explicit inputs.
- No generic neon-on-dark treatment, gradient text, decorative blobs, missing assets, or cropped proof footage.
