---
name: Hanif Carroll Portfolio
description: An inspectable, proof-led portfolio for Hanif Carroll, AI Product & GTM Engineer for B2B SaaS teams.
colors:
  accent-gold: "#f8d651"
  accent-gold-hover: "color-mix(in srgb, #f8d651 88%, #725a00)"
  accent-text: "#282828"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-warm: "color-mix(in srgb, #f8d651 5%, #ffffff)"
  ink: "#282828"
  muted-ink: "#504945"
  border: "#e0e2dc"
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
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    borderColor: "{colors.accent-text}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
---

# Design System: Hanif Carroll Portfolio

## Overview

**Creative North Star: "The Inspectable System"**

The site should feel like a well-run operating system made visible: calm at first glance, specific on inspection, and structured around the decisions a client needs to make. The hierarchy comes from typography, proportion, spacing, and real evidence rather than a stack of decorative cards.

The visual system pairs a white canvas with light editorial surfaces and a deliberately scarce gold accent. It rejects generic developer portfolios, resume framing, AI-agency futurism, glossy generated imagery, full-site dark premium-tech styling, and excess cards or dividers.

**Key Characteristics:**

- Proof-led and product-engineering focused, leading with the client's engineering problem and inspectable proof rather than promotion.
- Spacious, direct, and easy to scan without feeling sparse.
- Flat by default, with elevation reserved for controls, navigation, and real artifacts.
- One obvious primary action per decision surface.
- Responsive layouts that preserve reading comfort and content priority.

## Colors

The palette is restrained: a white canvas, warm charcoal ink, and a restrained gold accent reserved for directional cues, focus, and meaningful emphasis. Gold is not a button fill.

### Primary

- **CTA Gold** (`#f8d651`): The single primary accent. Use it for focus indicators, selection, and small directional details—not large control fills.
- **CTA Gold Hover** (`color-mix(in srgb, #f8d651 88%, #725a00)`): Available for compact gold details; do not introduce a second competing accent.

### Neutral

- **Editorial Charcoal** (`#282828`): Site text and the limited contrast color for embedded demos or status panels.
- **Canvas** (`#ffffff`): Default page background.
- **Surface White** (`#ffffff`): Controls and bounded surfaces when separation is necessary.
- **Ink** (`#282828`): Headings and primary text on light surfaces.
- **Muted Ink** (`#504945`): Supporting copy and metadata on light surfaces.
- **Border** (`#e0e2dc`): Quiet structural borders used only where spacing cannot communicate the grouping.

### Named Rules

**The Gold Means Action Rule.** CTA Gold marks direction, focus, and meaningful selection; primary controls stay light so gold remains scarce.

**The Editorial Surface Rule.** Editorial charcoal is reserved for embedded demos or status panels; site chrome and page surfaces stay light.

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
- **Label** (600, `0.875rem`, normal tracking): Metadata, navigation, and compact interface labels; uppercase is reserved for genuinely categorical evidence labels.

### Named Rules

**The Read Before Display Rule.** Long-form pages use the Article Title scale, and body copy controls the reading measure; display typography must not dominate the article.

**The Shared Editorial Column Rule.** Set the 75ch measure on the shared header and main-content wrappers at body-text scale. Let the title, deck, article, and author section fill that same physical column; do not apply `ch` directly to the title.

## Elevation

The system is flat by default. Depth comes first from color and spacing, then from compact structural shadows on navigation, interactive controls, or real proof artifacts. Large editorial sections and blog CTAs remain borderless and shadowless when the tonal shift already separates them.

### Shadow Vocabulary

- **Control Rest** (`0 1px 3px rgba(40, 40, 40, 0.06)`): Subtle affordance for compact controls.
- **Control Hover** (`0 3px 8px rgba(40, 40, 40, 0.12)`): Short interaction response, paired with a small upward translation.
- **Navigation** (`0 8px 12px rgba(40, 40, 40, 0.1)`): Separates persistent navigation from the page.
- **Artifact** (`0 16px 36px rgba(40, 40, 40, 0.13)`): Reserved for screenshots and real work products that should read as physical evidence.

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

- **Shape:** Compact editorial control with an approximately `8px` radius and a minimum height of `44px`; never a pill.
- **Primary:** Surface White fill, charcoal text, quiet border, compact padding, and no decorative arrow.
- **Hover / Focus:** Warm the light surface and darken the border without lift or shadow theatrics; use a visible gold focus outline.
- **Secondary:** Surface White with Ink text and a quiet border; keep the same compact geometry and light hover treatment.
- **Text Link:** Bold charcoal text with an arrow and a restrained gold directional detail.

### Cards / Containers

- **Corner Style:** `12px` only when a bounded card is a real grouping; editorial bands and blog CTAs may remain square.
- **Background:** Canvas and Surface White for the site; Editorial Charcoal is reserved for embedded demos or status panels.
- **Shadow Strategy:** Flat by default; use Artifact shadow for screenshots and Control shadow for compact affordances.
- **Border:** `1px` Border only when adjacency makes the grouping ambiguous.
- **Internal Padding:** Use the `24px`, `32px`, `48px`, and `96px` scale steps according to content density and viewport.

### Navigation

- **Desktop:** Light canvas container, charcoal links, compact semibold labels, and a restrained gold directional cue on the call action.
- **States:** Preserve visible hover and current-page contrast without decorative underlines or extra badges.
- **Mobile:** Use a clear circular menu control and a single-column panel with comfortable touch targets.

### Article Header

- Place linked blog metadata, the Article Title, and the deck in a single left-aligned flow on Canvas.
- Use spacing, not a horizontal rule, to transition into the article body.
- Let the title, deck, article, and author section fill the same 75ch editorial column.

### Editorial Closing CTA

- Use a full-width light editorial band with no dark site chrome, card, border, corner radius, or shadow.
- Case-study endings use the white page surface; spacing and typography provide separation from the article.
- Use a two-column editorial layout on desktop and one column below `900px`.
- Connect the proof just shown to a concrete buyer priority, state the next step clearly, and offer email as the lower-commitment alternative when project links already appear above.
- Present one compact light primary action and one contextual text link without decorative arrows; reserve gold for focus and meaningful emphasis.

### Proof Artifacts

- Real screenshots and work products may use a `10px` radius and the Artifact shadow.
- Keep captions and outcomes close to the evidence they explain.

## Do's and Don'ts

### Do:

- **Do** reserve `#f8d651` CTA Gold for directional cues, focus, and meaningful selection states; keep controls light.
- **Do** keep CTA controls compact, square-ish, and editorial: no decorative arrows, oversized yellow fills, full pills, dark fills, or theatrical lift/shadows.
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
