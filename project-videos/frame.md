---
name: portfolio-project-proof
version: 1.0.0
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
3. Foreground: scene number, family label, rule, registration marks, and compact evidence labels.

The frame should feel produced at rest: two focal points and roughly eight visible elements, without covering the proof surface.

## Story Families

### System proof

Operating problem -> concrete state -> intervention -> evidence or guardrail -> durable result -> held conclusion.

### Product journey

User problem -> entry or setup -> core action -> decision or output -> shipped result -> held value.

### Visual showcase

Need or opportunity -> visual introduction -> work or gallery -> inquiry or validation action -> held result.

## Timing Profiles

- `standard`: five story scenes plus a 3-second ending, normally `40-45s`.
- `short`: four or five story scenes plus a 3-second ending, normally `30-36s`.
- `loop`: three or four story scenes plus a 3-second ending, normally `16.5-24s`.

## Motion

- Medium-energy editorial pacing is the default.
- Push transitions carry related ideas; scale dissolves mark a topic or proof shift.
- Entrances use explicit `fromTo()` tweens with varied direction, scale, opacity, duration, and ease.
- One ambient motion runs during each scene's breathe phase: grid drift, panel float, screenshot settle, rail pulse, or slow image scroll.
- The final scene settles within the first half-second and holds through the end. It introduces no new argument.

## Constraints

- No narration, music, or sound effects unless a future manifest version explicitly adds them.
- No private runtime data, secrets, client-sensitive content, real account state, or unapproved claims.
- No stack names, commands, schema names, or test counts as the main message for general portfolio viewers.
- No flat title-card-only sequences. Every non-ending scene must show an asset, inspectable artifact, workflow structure, or evidence label.
- No generic neon-on-dark styling, decorative blobs, or project palettes invented inside template code.
