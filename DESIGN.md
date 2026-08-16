---
name: Hanif Carroll Portfolio
description: An inspectable, proof-led portfolio for Hanif Carroll, contract product engineer for B2B SaaS teams.
colors:
  accent-yellow: "#f8d651"
  accent-yellow-hover: "#f2b63d"
  accent-ink: "#10253f"
  proof-navy: "#10253f"
  proof-white: "#f5f8fc"
  canvas: "#ffffff"
  surface: "#ffffff"
  ink: "#282828"
  muted-ink: "#504945"
  border: "#e0e2dc"
  supporting-blue: "#2e5fd1"
typography:
  display:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 5.25vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  article-title:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.45
rounded:
  control: "8px"
  artifact: "10px"
  surface: "12px"
  pill: "36px"
spacing:
  1: "4px"
  2: "8px"
  3: "16px"
  4: "24px"
  5: "32px"
  6: "48px"
  7: "64px"
  8: "96px"
  9: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-yellow-hover}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
    height: "52px"
  proof-surface:
    backgroundColor: "{colors.proof-navy}"
    textColor: "{colors.proof-white}"
    rounded: "{rounded.surface}"
    padding: "48px"
---

# Design System: Hanif Carroll Portfolio

## Overview

**Creative North Star: "The Inspectable System"**

The site should feel like a well-run operating system made visible: calm at first glance, specific on inspection, and structured around the decisions a client needs to make. The hierarchy comes from typography, proportion, spacing, and real evidence rather than a stack of decorative cards.

The visual system pairs a white canvas with dark navy proof surfaces and a deliberately scarce yellow accent. It rejects generic developer portfolios, resume framing, AI-agency futurism, glossy generated imagery, full-site dark premium-tech styling, and excess cards or dividers.

**Key Characteristics:**

- Proof-led and product-engineering focused, leading with the client's engineering problem and inspectable proof rather than promotion.
- Spacious, direct, and easy to scan without feeling sparse.
- Flat by default, with elevation reserved for controls, navigation, and real artifacts.
- One obvious primary action per decision surface.
- Responsive layouts that preserve reading comfort and content priority.

## Colors

The palette is restrained: a white canvas, warm charcoal ink, navy proof surfaces, and a yellow accent reserved for actions and meaningful emphasis.

### Primary

- **CTA Yellow** (`#f8d651`): The single primary accent. Use it for primary CTA backgrounds, focus indicators, selection, and small directional details.
- **CTA Yellow Hover** (`#f2b63d`): The warmer interaction state for CTA Yellow; do not introduce a second competing CTA color.

### Secondary

- **Supporting Blue** (`#2e5fd1`): A supporting informational or link color. It must not replace CTA Yellow as the action accent.

### Neutral

- **Proof Navy** (`#10253f`): Navigation, footer, proof bands, and high-contrast editorial callouts.
- **Proof White** (`#f5f8fc`): Primary text on Proof Navy.
- **Canvas** (`#ffffff`): Default page background.
- **Surface White** (`#ffffff`): Controls and bounded surfaces when separation is necessary.
- **Ink** (`#282828`): Headings and primary text on light surfaces.
- **Muted Ink** (`#504945`): Supporting copy and metadata on light surfaces.
- **Border** (`#e0e2dc`): Quiet structural borders used only where spacing cannot communicate the grouping.

### Named Rules

**The Yellow Means Action Rule.** CTA Yellow is the accent and should remain scarce enough that the primary action is immediately obvious.

**The Proof Surface Rule.** Navy carries evidence, navigation, and closing arguments; it is not a default background for the whole site.

## Typography

**Display Font:** Helvetica Neue (with Helvetica, Arial, sans-serif fallbacks)

**Body Font:** Helvetica Neue (with Helvetica, Arial, sans-serif fallbacks)
**Label/Mono Font:** SFMono-Regular (with Consolas and Liberation Mono fallbacks) for technical artifacts only

**Character:** A single sans-serif family keeps the site direct and operational. Hierarchy comes from size, weight, measure, and spacing, while technical monospace is reserved for literal system evidence.

### Hierarchy

- **Display** (700, `clamp(3rem, 7vw, 6.75rem)`, 1.08): Rare campaign or landing-page statements; never article titles.
- **Headline** (700, `clamp(2.35rem, 5.25vw, 5.25rem)`, 1.08): Major page and section statements with a controlled measure.
- **Article Title** (700, `clamp(2rem, 4vw, 3rem)`, 1.02): Blog H1s filling the shared 75ch editorial column, with no title-specific character limit.
- **Title** (700, `2rem–2.5rem`, 1.2): Section and component headings.
- **Body** (400, `1.125rem`, 1.65): Long-form and explanatory text, normally capped at 65–76ch.
- **Label** (600, `0.875rem`, normal tracking): Metadata, navigation, and compact interface labels; uppercase is reserved for genuinely categorical proof labels.

### Named Rules

**The Read Before Display Rule.** Long-form pages use the Article Title scale, and body copy controls the reading measure; display typography must not dominate the article.

**The Shared Editorial Column Rule.** Set the 75ch measure on the shared header and main-content wrappers at body-text scale. Let the title, deck, article, and author section fill that same physical column; do not apply `ch` directly to the title.

## Elevation

The system is flat by default. Depth comes first from color and spacing, then from compact structural shadows on navigation, interactive controls, or real proof artifacts. Large editorial sections and blog CTAs remain borderless and shadowless when the tonal shift already separates them.

### Shadow Vocabulary

- **Control Rest** (`0 1px 3px rgba(21, 34, 53, 0.06)`): Subtle affordance for compact controls.
- **Control Hover** (`0 3px 8px rgba(21, 34, 53, 0.12)`): Short interaction response, paired with a small upward translation.
- **Navigation** (`0 8px 12px rgba(16, 37, 63, 0.1)`): Separates persistent navigation from the page.
- **Artifact** (`0 16px 36px rgba(21, 34, 53, 0.13)`): Reserved for screenshots and real work products that should read as physical evidence.

### Named Rules

**The Flat-by-Default Rule.** If color, spacing, or content hierarchy already establishes the boundary, do not add a border or shadow.

## Motion

One physics vocabulary everywhere: CSS interactions and GSAP choreography share the same curves, so hovers and entrances feel like one system.

### Tokens

- **Easing:** `--hc-ease-out` (`cubic-bezier(0.215, 0.61, 0.355, 1)`, equals GSAP `power3.out`) for almost everything; `--hc-ease-in-out` for large surface state changes.
- **Duration:** `--hc-dur-fast` (160ms) for color/opacity hovers, `--hc-dur-base` (240ms) for transform/shadow hovers, `--hc-dur-slow` (420ms) for panels and accordions.
- **Choreography** lives in the `MOTION` config at the top of `src/scripts/motion.ts`; markup opts in via `data-motion-*` attributes only (see the API comment in that file). Primitives: intro (headline/deck/items), reveal, group with staggered items, directional two-up rows, parallax media, and diagram sequences.

### Named Rules

**The One Physics Rule.** No raw `ms` values or generic `ease` in stylesheets, and no page-specific selectors in motion code — new pages get motion by adding attributes, not by writing new tweens.

**The First-Visit Rule.** The full entrance choreography plays once per session; client-side navigations get a shortened, subtler entrance so browsing feels fast.

**The Never-Invisible Rule.** Scroll reveals must fail visible: reduced-motion users get the complete static layout, and triggers refresh after late image loads so content is never stranded at opacity 0.

## Components

Components should feel direct and confident, with restrained shape and unmistakable states.

### Buttons

- **Shape:** Full pill for CTA controls (`36px` radius) with a minimum height of `52px`.
- **Primary:** CTA Yellow background, Accent Ink text, `8px 24px` padding, bold label, and a directional arrow when the action advances the user.
- **Hover / Focus:** Shift to CTA Yellow Hover and translate upward by `2px`; use a `3px` CTA Yellow focus outline with a `3px` offset.
- **Secondary:** Surface White with Ink text and a quiet border; on hover, invert to Ink with Surface White text.
- **Text Link:** Bold Ink text with an arrow. On navy surfaces, use Proof White text and a CTA Yellow arrow.

### Cards / Containers

- **Corner Style:** `12px` only when a bounded card is a real grouping; editorial bands and blog CTAs may remain square.
- **Background:** Canvas for the page, Surface White for necessary bounded groups, and Proof Navy for evidence or closing arguments.
- **Shadow Strategy:** Flat by default; use Artifact shadow for screenshots and Control shadow for compact affordances.
- **Border:** `1px` Border only when adjacency makes the grouping ambiguous.
- **Internal Padding:** Use the `24px`, `32px`, `48px`, and `96px` scale steps according to content density and viewport.

### Navigation

- **Desktop:** Proof Navy container, Proof White links, compact semibold labels, pill geometry, and one CTA Yellow action.
- **States:** Preserve visible hover and current-page contrast without decorative underlines or extra badges.
- **Mobile:** Use a clear circular menu control and a single-column panel with comfortable touch targets.

### Article Header

- Place linked blog metadata, the Article Title, and the deck in a single left-aligned flow on Canvas.
- Use spacing, not a horizontal rule, to transition into the article body.
- Let the title, deck, article, and author section fill the same 75ch editorial column.

### Blog Closing CTA

- Use a full-width Proof Navy band within the blog layout, with no white card, border, corner radius, or shadow.
- Use a two-column editorial layout on desktop and one column below `900px`.
- Present one CTA Yellow primary action and one contextual text link; do not add a third competing action.

### Proof Artifacts

- Real screenshots and work products may use a `10px` radius and the Artifact shadow.
- Keep captions and outcomes close to the evidence they explain.

## Do's and Don'ts

### Do:

- **Do** reserve `#f8d651` CTA Yellow for the primary action and meaningful focus or selection states.
- **Do** use spacing and typographic hierarchy before reaching for borders, rules, or cards.
- **Do** show real artifacts, outcomes, constraints, and working details as evidence.
- **Do** use one shared 75ch editorial column for blog metadata, title, deck, article, and author content.
- **Do** preserve keyboard access, visible focus, reduced-motion behavior, and WCAG 2.2 AA contrast.

### Don't:

- **Don't** build a generic developer or creative portfolio organized around personal taste instead of client problems.
- **Don't** use employment or resume framing that makes the site read like a job application.
- **Don't** use AI agency hype, futuristic claims, or unsupported promises.
- **Don't** use glossy generated imagery in place of real artifacts and evidence.
- **Don't** use full-site dark premium-tech styling that obscures reading and proof.
- **Don't** use excess cards, dividers, horizontal rules, or decorative containers to manufacture hierarchy.
- **Don't** constrain blog titles with a character-based `max-width` or scale them beyond the Article Title token.
- **Don't** use Supporting Blue as a competing CTA accent; CTA Yellow owns primary actions.
