---
name: portfolio-project-proof
version: 2.0.0
canvas: manifest.theme.canvas
surface: manifest.theme.surface
ink: manifest.theme.ink
accent: manifest.theme.accent
display-font: manifest.theme.fontDisplay
body-font: manifest.theme.fontBody
mono-font: manifest.theme.fontMono
---

# Portfolio Project Video Frame

## Concept

Treat every case study as a labeled proof artifact in an editorial evidence cabinet. Real product screens, reports, maps, and public-safe artifacts carry the proof. Motion shows how a messy input becomes an inspectable result.

## Brand Contract

Each `video.json` manifest owns the exact palette and font choices for its project. The shared engine owns hierarchy, scale, density, safe margins, scene structure, and motion.

- Canvas, surfaces, borders, accents, and deep proof panels use the manifest tokens directly. Text selects the first accessible token from the declared project palette when an accent would fail contrast.
- Display, body, and mono fonts come from the manifest. Their primary family must be one of the nine locally bundled families: Archivo Black, EB Garamond, IBM Plex Mono, Inter, JetBrains Mono, League Gothic, Montserrat, Oswald, or Space Mono. Only a generic `serif`, `sans-serif`, or `monospace` fallback may follow it. The generator copies the required Fontsource WOFF2 files with local GSAP into each generated project; no CDN is required.
- Headline scale: `72-108px`; body: `28-36px`; labels: `18-22px`.
- Title-safe padding: at least `92px` on every edge.
- Light canvases use visible `2-3px` borders and full-strength accent hits.
- Screenshots remain the focal proof and must be readable after their entrance settles.

## Shared Visual Language

Every scene contains three depth layers:

1. Background: tinted canvas, subtle grid, two edge panels, and one family-specific geometric motif.
2. Midground: one primary proof surface plus the scene copy.
3. Foreground: a nonverbal rule, registration marks, and only the compact labels explicitly declared in the manifest.

The frame should feel produced at rest: two focal points and enough structure to orient the viewer, without covering the proof surface. Graphical chrome carries atmosphere; it does not add vocabulary.

## Silent Editorial Profile

Every manifest uses `editorialProfile: "silent-proof-v1"`. The manifest is the complete source of viewer-facing language. Graphical chrome stays nonverbal; the renderer does not add scene numbers, story-family names, scene-kind labels, proof-header copy, fallback workflow words, or end-card titles.

The profile pins the canonical `silent-designed-video-v1` editorial standard and `whitespace-v1` tokenizer. The tokenizer trims each rendered field, splits on one or more whitespace characters, removes empty and punctuation-only tokens, and leaves punctuation attached to words. Numbers, URLs, handles, contractions, and hyphenated terms count as one token.

- `intent` records the non-rendered job of the scene.
- `textRoles` declares the role of every copy field; the required headline is the single `primary` block.
- `eyebrow`, `body`, `labels`, and `stat` are optional. Keep one only when it earns `supporting`, `orientation`, or `status`.
- Allowed roles are `primary`, `supporting`, `orientation`, and `status`. Labels and stats carry their role inline.
- `assetText` declares and counts readable logo or screenshot words when the scene depends on them; dedicated readable logos are always declared.
- Readability is calculated at `140 WPM` after text settles. Normal copy settles at `1.1s`; ending copy at `0.5s`; label cascades extend the settled time when they finish later. The reading window ends when the outgoing transition starts, or at scene end for the final scene.
- Every scene needs at least `2s` of settled hold and `0.75s` of reading safety margin. Endings use a `0.5s` safety margin.

## Story Families

### System proof

Operating problem -> concrete state -> intervention -> evidence or guardrail -> durable result -> held conclusion.

### Product journey

User problem -> entry or setup -> core action -> decision or output -> shipped result -> held value.

### Visual showcase

Need or opportunity -> visual introduction -> work or gallery -> inquiry or validation action -> held result.

## Timing Profiles

- `standard`: five story scenes plus a held ending, normally `40-48s`.
- `short`: four or five story scenes plus a held ending, normally `30-36s`.
- `loop`: three or four story scenes plus a held ending, normally `18-24s`.

## Motion

- Medium-energy editorial pacing is the default.
- Push transitions carry related ideas; scale dissolves mark a topic or proof shift.
- Entrances use explicit `fromTo()` tweens with varied direction, scale, opacity, duration, and ease.
- One ambient motion runs during each scene's breathe phase: grid drift, panel float, screenshot settle, rail pulse, or slow image scroll.
- The final scene settles within the first half-second and holds through the end. Its duration is at least `3s` and extends when its explicit project orientation and conclusion need more reading time. It introduces no new argument.

## Constraints

- No narration, music, or sound effects unless a future manifest version explicitly adds them.
- No private runtime data, secrets, client-sensitive content, real account state, or unapproved claims.
- No stack names, commands, schema names, or test counts as the main message for general portfolio viewers.
- No flat title-card-only sequences. Every non-ending scene must show an asset, inspectable artifact, workflow structure, or evidence label.
- No generic neon-on-dark styling, decorative blobs, or project palettes invented inside template code.
