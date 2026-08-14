---
version: alpha
name: Product Usage Scoring & Routing — Frame (video / frame layer)
description: >
  Video-first companion to Product Usage Scoring & Routing's product tokens. The unit is the frame
  (1920×1080). Atoms are identical and sacred — the light-gray canvas (#F6F7F9), white surfaces
  (#FFFFFF), ink text (#1E2430), secondary (#576071), border (#E3E6EB), a single saturated cobalt
  (#2F5BD9) as the only accent, cobalt-strong (#2447AD) and cobalt-soft (#EAF0FD) for hover/select,
  the staged Inter family (display/numerals/chrome + body), flat white cards (#E3E6EB 1px borders /
  6px radii) with NO shadows, restrained 6px radius chrome, and the cobalt progress bar.
  Composition + frame scale rewritten. Motion out of scope.
unit: the frame — 1920×1080 primary; 9:16 and 1:1 documented
principle: atoms are sacred · composition is free · numbers come from the script

colors:
  bg: "#F6F7F9"
  primary: "#2F5BD9"
  text: "#1E2430"
  text-muted: "#576071"
  text-light: "#576071"
  accent-light: "rgba(47,91,217,0.08)"
  accent-medium: "rgba(47,91,217,0.15)"
  border: "#E3E6EB"
  card-bg: "#FFFFFF"
  positive: "#1F7A43"
  negative: "#B42318"

radii:
  pill: "6px"
  card-lg: "6px"
  card-md: "6px"
  card-sm: "6px"
  bar: "6px"
  circle: "50%"

typography:
  # — reading ramp (Inter body + Inter chrome) —
  body:    { fontFamily: "Inter", cqw: 0.85, weight: 400, lineHeight: 1.6, color: "text-muted" }
  h4-eyebrow:{ fontFamily: "Inter", cqw: 0.8, weight: 600, tracking: "0.08em", upper: true, color: "primary" }
  tag:     { fontFamily: "Inter", px: 12, weight: 500, color: "primary" }
  counter: { fontFamily: "Inter", px: 13, weight: 500, tracking: "0.05em", color: "text-muted" }
  # — display / numerical ramp (Inter, near-black headings / cobalt numerals) —
  h3:      { fontFamily: "Inter", cqw: 1.25, weight: 500, lineHeight: 1.3, tracking: "-0.02em", color: "text" }
  stat-num:{ fontFamily: "Inter", cqw: 1.9, weight: 700, lineHeight: 1.0, color: "primary" }
  blockquote:{ fontFamily: "Inter", cqw: 2.4, weight: 500, lineHeight: 1.35, color: "text" }
  h2:      { fontFamily: "Inter", cqw: 2.6, weight: 600, lineHeight: 1.1, tracking: "-0.02em", color: "text" }
  metric-value:{ fontFamily: "Inter", cqw: 3.0, weight: 700, lineHeight: 1.0, color: "primary" }
  h1:      { fontFamily: "Inter", cqw: 4.2, weight: 700, lineHeight: 1.08, tracking: "-0.02em", color: "text" }
  quote-mark:{ fontFamily: "Inter", cqw: 8.0, weight: 700, lineHeight: 0.5, color: "primary", opacity: 0.15 }

spacing:
  pad-x: "5cqw"
  pad-y-top: "5cqw"
  gap-cards: "1.4cqw"
  accent-line: "60px × 4px"

components:
  card-tinted:
    backgroundColor: "{colors.card-bg}"
    border: "1.5px solid {colors.border}"
    rounded: "{radii.card-lg}"
    shadow: "none"
    description: "Universal content card. Never solid-colored, never opaque-bordered, NO shadow."
  metric-card:
    backgroundColor: "{colors.card-bg}"
    border: "1.5px solid {colors.border}"
    rounded: "{radii.card-lg}"
    typography: "{typography.metric-value} ({colors.primary}) + {typography.metric-label} + {typography.metric-desc}"
    description: "+ optional inline ↑/↓ change chip ({colors.positive}/{colors.negative} text, no fill)."
  tag-pill:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.primary}"
    rounded: "{radii.pill}"
    typography: "{typography.tag}"
    description: "Top-right of the slide-header."
  cta-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{radii.pill}"
    typography: "Inter 600"
    shadow: "none"
    description: "The one solid element."
  accent-line:
    backgroundColor: "{colors.primary}"
    size: "60×4, 2px radius"
    description: "Above cover titles / eyebrow separators."
  bar-track:
    backgroundColor: "{colors.accent-light}"
    fill: "{colors.primary} (display:block so width resolves)"
    rounded: "{radii.bar}"
    description: "28px track; fill carries the value."
  step-circle:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "50%"
    size: "56px"
    description: "Sequential steps fade opacity 1.0→0.85→0.7→0.55."
  split-highlight:
    backgroundColor: "{colors.accent-light}"
    borderLeft: "4px solid {colors.primary}"
    rounded: "{radii.card-md}"
    description: "Inline pull-quote callout."
  slide-header:
    typography: "{typography.h4-eyebrow} (cobalt) left, tag-pill right; {typography.h2} below"
    description: "Top band of every content frame."
  atmosphere:
    elements: "clipped diagonal cobalt-tint panel, 3×3 cobalt dot grid, concentric closing rings"
    description: "Cover/closing only. Never on content frames."
  progress-bar:
    backgroundColor: "{colors.primary}"
    size: "3px tall, bottom edge, width grows with index"
    description: "Persistent progress strip."
---

# Product Usage Scoring & Routing — Frame (video / frame layer)

## Overview

Product Usage Scoring & Routing at frame scale is a **consulting-grade system: restraint with one
strong commitment.** A light-gray canvas (`#F6F7F9`) and white surfaces carry a single saturated
cobalt (`#2F5BD9`) that holds every accent — eyebrow, metric, CTA, chart fill, progress bar. No
secondary brand accent; the register is a B2B SaaS consulting briefing: measured, data-dense
without crowding, executive-readable at distance. The palette mirrors the product tokens exactly —
canvas `#F6F7F9`, surface `#FFFFFF`, ink `#1E2430`, secondary `#576071`, border `#E3E6EB`, cobalt
`#2F5BD9`, cobalt-strong `#2447AD`, cobalt-soft `#EAF0FD`.

The voice is a single staged family in two fixed roles: **Inter** (display, every numeral, all
chrome — eyebrows uppercase 0.08em) and **Inter** (body, muted secondary gray, line 1.6). Headlines
are ink near-black (`#1E2430`); cobalt is reserved for accent moments. Depth is **flat and
restrained** — white cards on the light-gray canvas with `#E3E6EB` 1px borders and **6px radii**,
never shadowed. The lack of shadows is the premium signal.

**Key characteristics at frame scale:**

- **Light-gray (`#F6F7F9`) ground**, white (`#FFFFFF`) surfaces, on every frame; **single cobalt** (`#2F5BD9`) as the only accent.
- **Inter staged locally** (assets/fonts/inter-latin-{400,500,600,700}-normal.woff2) for display, numerals, chrome, and body — ink near-black (`#1E2430`) headings, cobalt (`#2F5BD9`) numerals.
- **Flat cards** — white fill, `#E3E6EB` 1px border, **6px radius**, **no shadow**.
- **Restrained 6px radii** (tag pills, CTA, bars) — one solid cobalt CTA; cobalt **progress bar**.
- **Cobalt-strong `#2447AD`** for hover/active chrome; **cobalt-soft `#EAF0FD`** for selected rows and soft fills.
- **Atmosphere** (diagonal panel, dot grid, concentric rings) on cover/closing only.

## The Frame

### Frame Craft Bar

Three eyeball tests gate every frame before any structural check:

- **Squint** — one **near-black headline or cobalt numeral** dominates at 3–6× its neighbor.
- **Silence** — content frames read **balanced, not crowded**; the **dashboard is the one dense exception**.
- **Restraint** — a **single cobalt accent** carries everything; headlines stay ink near-black (never cobalt); no shadows (flat cards do the lift); positive/negative inline-text only.
- **Reference** — aim at an **investment-research / McKinsey quarterly briefing**; failure looks like a **heavy-outlined, multi-color dashboard**.

- **Primary:** 1920×1080 (16:9). Display authored in **`cqw`** (`px ÷ 1920 × 100 = cqw`).
- **Vertical:** 1080×1920 (9:16). **Square:** 1080×1080 (1:1).
- **Safe area:** `pad-x` 5cqw; bottom reserves room for the counter + progress bar.

**The container law (load-bearing).** Every frame ground sets `container-type: size`; ALL
frame-relative units are `cqw`/`cqh` against it — never `vw`. Card radii stay px (6px); the
pill radius stays 6px; borders stay 1–1.5px.

## Colors

Tokens identical to the source. `{colors.bg}` light-gray (`#F6F7F9`) is the universal ground;
`{colors.primary}` cobalt (`#2F5BD9`) is the **only** accent — every eyebrow, numeral, CTA, chart
fill, progress bar, and the 4px highlight left-rule. Cobalt-strong `#2447AD` is reserved for
hover/active chrome (never for resting fills); cobalt-soft `#EAF0FD` fills selected rows and soft
fills. Headlines are `{colors.text}` ink (`#1E2430`, never cobalt); body is `{colors.text-muted}`
secondary (`#576071`). Cards fill `{colors.card-bg}` white (`#FFFFFF`) with `{colors.border}`
(`#E3E6EB`) 1px borders. `{colors.positive}` (`#1F7A43`)/`{colors.negative}` (`#B42318`) appear
**only inline** on directional change chips — never as fills. **No second accent color.**

## Typography

Two ramps, both on the single locally-staged **Inter** family (assets/fonts). The **reading ramp**
(Inter body 0.85cqw secondary; Inter eyebrow uppercase 0.08em cobalt) carries copy + chrome; the
**display/numerical ramp** (Inter `h3` 1.25cqw → `h1` 4.2cqw ink near-black; numerals
`stat-num`/`metric-value` in cobalt) carries headings and figures. Weight distinguishes the ramps:
400–500 for body/chrome, 600–700 for display and numerals.

- **Legibility floor:** any load-bearing line ≥ **1.4cqw**; px chrome (tag/counter) is colophon only.
- **Fit-to-measure:** size the headline to its length. Cap the block at **≤ 78cqw**; ≤3 words → `h1`; 4–6 → `h2`; 7+ → `h3`. Cobalt numerals scale `metric-value`→`stat-num` by card size.
- **Headlines ink near-black (`#1E2430`), −0.02em**; **eyebrows cobalt, uppercase, 0.08em**; **numerals cobalt 600–700**; **body Inter 400 secondary, line 1.6**. No italic, no uppercase body, no cobalt headline.

## Depth & Surface

Flat — no offset, no shadows. Depth from:

- **White cards on light-gray canvas** — white `#FFFFFF` fills with `#E3E6EB` 1px borders and **6px radius** separate surfaces without lifting.
- **Cobalt-soft fills** — `#EAF0FD` (cobalt-soft) on selected rows and soft fills reads as priority without shadow.
- **Border-left accent** — the 4px cobalt rule on split-highlight blocks pulls a callout forward.
- **Rounded corners** — the 6px radius is consistent with the product; keep it everywhere.

**Ceiling:** zero box-shadow on content; no opaque cobalt borders; no harsh outlines. The lack of
shadows is the premium signal.

## Shapes

- **6px** — tag pills, CTA, nav buttons, cards, bar tracks + fills (restrained, mirrors the product `--radius: 6px`).
- **50%** — step circles, nav circles, dots, closing rings.

## Components

- **card-tinted / metric-card** — the universal flat white content cards (`#FFFFFF` + `#E3E6EB` 1px border, 6px radius, **no shadow**).
- **tag-pill / cta-button / accent-line** — the cobalt chrome + the one solid CTA + the 60×4 rule (6px radii).
- **bar-track / step-circle / split-highlight** — cobalt data + sequence + callout patterns.
- **slide-header** (eyebrow + tag pill) — the structural rhythm; **atmosphere** (diagonal/dots/rings) on cover/closing only; **progress-bar** on every frame.

## Frame Treatments

> Recipe: ground · container · composes · focal · chrome · accent · silence · Fixed/Free · density.
> Atmosphere only on cover/closing; content frames carry the slide-header rhythm.

### 1 · Cover (identity · move: diagonal accent · left)

**Ground** light-gray (`#F6F7F9`) + the clipped diagonal cobalt-tint panel (right ~36%) + a 3×3 cobalt dot grid.
**Composes** accent-line, meta, h1, body sub. **Focal** a 2-line Inter `h1` ink near-black, left,
under a cobalt accent-line + meta. **Chrome** counter + progress bar. **Accent** the cobalt line +
diagonal panel. **Silence** the diagonal panel holds the right third. **Fixed** ink near-black h1, cobalt
accents, atmosphere here only. **Free** title, meta. **Density** low.

### 2 · Dashboard (data · move: 3-up metric grid · the dense frame)

**Ground** light-gray (`#F6F7F9`), `pad-x`. **Composes** slide-header (eyebrow + tag-pill), h2, 3× metric flat card.
**Focal** a row of flat white cards — cobalt `metric-value` + Inter label + secondary desc + optional
green/red change chip. **Chrome** eyebrow left, tag-pill right; progress bar. **Accent** the cobalt
numerals. **Silence** tight — the density exception. **Fixed** white cards, `#E3E6EB` borders, no shadow,
cobalt numerals. **Free** figures (from script), labels. **Density** dense-exception.

### 3 · Bar Ranking (data · move: cobalt bars · left)

**Ground** light-gray (`#F6F7F9`), `pad-x`. **Composes** eyebrow, h2, bar-track rows. **Focal** 3–5 labeled
cobalt-fill bars on cobalt-8% tracks with cobalt percentages. **Chrome** eyebrow; progress bar.
**Accent** the cobalt fills + figures. **Silence** moderate. **Fixed** 6px tracks, cobalt fills.
**Free** rows, values (from script). **Density** standard.

### 4 · Pull Quote (quote · move: concentric rings · centered)

**Ground** light-gray (`#F6F7F9`), centered, with faint concentric closing-rings behind. **Composes** quote-mark,
blockquote, cite. **Focal** an Inter `blockquote` ink near-black under a 15%-opacity cobalt
quote-mark; an uppercase cobalt-muted cite beneath. **Accent** the faint rings + quote-mark. **Silence**
~55%. **Fixed** ink near-black quote, soft rings. **Free** quote, cite. **Density** low.

### 5 · Split + Highlight (content · move: asymmetric split · left)

**Ground** light-gray (`#F6F7F9`), two columns. **Composes** eyebrow, h2, body, split-highlight block. **Focal** an
Inter body column beside a cobalt-soft (`#EAF0FD`) highlight block (4px cobalt left rule) carrying an inline pull
quote. **Accent** the highlight's left rule. **Silence** generous gutter. **Fixed** cobalt-soft highlight,
4px cobalt rule. **Free** body, callout. **Density** standard.

### 6 · Closing / CTA (closer · move: centered rings + CTA)

**Ground** light-gray (`#F6F7F9`) + concentric closing-rings. **Composes** accent-line, h1, body, cta-button. **Focal**
an Inter `h1` ink near-black, centered, with the one solid cobalt `cta-button` (6px radius) below. **Accent**
the CTA + rings. **Silence** ~60%. **Fixed** one CTA, ink near-black h1, soft rings. **Free** sign-off, CTA
label. **Density** low.

## Composition Rules

### Do

- Start every frame on **light-gray (`#F6F7F9`)**; let **cobalt (`#2F5BD9`) carry every accent** (eyebrow, numeral, CTA, bar, progress).
- Set headlines **ink near-black (`#1E2430`), −0.02em**; eyebrows **cobalt uppercase 0.08em**; numerals **cobalt 600–700**.
- Use **flat white cards** (`#FFFFFF` fill, `#E3E6EB` 1px border, 6px radius, no shadow); body Inter 400 secondary (`#576071`), line 1.6.
- Keep all chrome **6px radii**; one solid cobalt CTA per closing frame.
- Reserve **atmosphere** (diagonal panel, dots, rings) for cover/closing; content frames keep the slide-header rhythm.
- Lean left on cover/dashboard/split, centered on quote/closer.

### Don't

- No second accent color; no cobalt headlines.
- No drop shadows on content; no opaque cobalt borders; no harsh outlines.
- No square corners (save the progress bar); no font substitutes (Inter only, staged locally); no uppercase body.
- Don't use the green/red change chips as general accents — directional comparisons only.
- Don't fill space with heavier borders — add substance; don't blow a headline edge-to-edge.

## Aspect-Ratio Behavior

| Treatment         | 16:9                       | 9:16                           | 1:1                      |
| ----------------- | -------------------------- | ------------------------------ | ------------------------ |
| Cover             | title left, diagonal right | title top, diagonal band below | title upper, dots corner |
| Dashboard         | 3 cards across             | 3 stacked                      | 2×2                      |
| Bar Ranking       | 3–5 bars                   | 3–5 bars (tighter)             | 3 bars                   |
| Pull Quote        | centered, rings behind     | centered, taller               | centered                 |
| Split + Highlight | side-by-side               | stacked                        | stacked                  |
| Closing / CTA     | centered + CTA             | centered + CTA                 | centered + CTA           |

`pad-x` holds on the short edge; re-step display above the 1.4cqw floor. The diagonal cover panel
becomes a top/bottom band on 9:16. Numerals stay Latin Arabic digits in CJK builds.

## Approved Entities

No real customers, logos, or vendors are defined in the source — render any such mark as a
placeholder. The three case-study screenshots (`assets/queue.png`, `assets/decision-packet.png`,
`assets/policy.png`) and the live full-page capture (`assets/live-full-page.png`) are the approved
project-owned visual assets for their beats. Figures, metrics, and quotes are content; the system
supplies light-gray + white + cobalt + grays.

## Numerals & Claims (hard rule)

Never invent figures, financials, percentages, or dates at frame scale. Render slots as `— figure —`,
`{metric}`, `+NN%`, `↑ —`. Metric cards, bar values, and stat cells especially carry placeholders
until the script supplies them. Directional chips require a real comparison from the script.

## Pre-Render Self-Audit

- **Squint** — one ink near-black headline or cobalt numeral dominates per frame.
- **Silence** — content frames balanced, not crowded; only the dashboard runs dense.
- **Single accent** — cobalt only; headlines ink near-black; positive/negative inline only.
- **Type** — Inter headings −0.02em ink near-black, cobalt eyebrows 0.08em + numerals; Inter body secondary line 1.6; ≥1.4cqw floor. All Inter, staged locally.
- **Depth** — flat white cards (no shadow), 6px radii, `#E3E6EB` borders; no square content corners.
- **Anchor** — left on cover/dashboard/split, centered on quote/closer; atmosphere on cover/closing only.
- **Fabrication** — every numeral traces to the script, else placeholder.

## Known Gaps

- **Motion intentionally out of scope.** frame.md specifies composition only; the source's 500ms translateX transitions + bar-fill animations are deck mechanics.
- **Single staged family.** Only Inter is staged locally (assets/fonts/inter-latin-{400,500,600,700}-normal.woff2); the original preset's Space Grotesk display ramp is replaced by Inter 600–700 for a monochromatic consulting feel. No CDN/Google Fonts; every glyph comes from the staged files. The product itself uses the system sans-serif stack (`--font`), so video glyphs diverge intentionally — but stay within the staged Inter pack.
- **9:16 / 1:1 are guidance**; verify the floor and that the diagonal panel reflows to a band.
- Diagonal panel (clip-path), dot grid, concentric rings, and bars are CSS-only; no external imagery is required.
