---
name: Hanif Carroll Portfolio
description: A minimalist, editorial, typography-first portfolio for Hanif Carroll, freelance software engineer.
colors:
  canvas: "#ffffff"
  ink: "#282828"
  muted-ink: "#504945"
  accent-gold: "#f8d651"
  accent-ink: "#725a00"
typography:
  page-title:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "clamp(3rem, 7vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.045em"
  article-title:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  section-heading:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
  item-title:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.18
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.12em"
rounded:
  control: "8px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.control}"
    padding: "12px 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.muted-ink}"
  text-link:
    textColor: "{colors.ink}"
    underline: "{colors.accent-ink}"
    underlineHover: "{colors.accent-gold}"
---

# Design System: Hanif Carroll Portfolio

## Overview

The site is minimalist, editorial, and typography-first. The homepage (`src/pages/index.astro`, `src/styles/home.css`) is the source of truth, and every other page follows it: a white canvas, serif headings, sans body text, generous space, and nothing drawn around the content.

**Key characteristics:**

- Type and whitespace carry the hierarchy. There are no cards, bands, rules, or shadows to lean on.
- Few type styles: page title, section heading, item title, body, and meta.
- One primary action per decision, as a solid ink button, with an underlined text link beside it.
- Every page ends on the ink block: the dark closing where a page shows one, and the dark footer always.

## Colors

- **Canvas** (`#ffffff`): the page background.
- **Ink** (`#282828`): headings, primary text, the primary button, and the closing block and footer.
- **Muted ink** (`#504945`): supporting copy, decks, and meta.
- **Accent ink** (`#725a00`, dark gold): the resting underline of text links on white, and the current-page mark in the header. The yellow is about 1.4:1 on white, so it can't mark anything at rest.
- **Accent** (`#f8d651`, yellow): the hover and focus underline on white, the resting underline on the ink block, selection, and the skip link.

Don't add colours. The Build Atlas agent prompt and inline code are the only tinted surfaces (see Exceptions).

## Typography

EB Garamond (`font-editorial`; 400, 400 italic, 600, 700 are loaded) sets page titles, section headings, item titles, and pull quotes, always at weight 400. Helvetica Neue (`font-sans`) sets everything else. Long-form article bodies (blog posts, case-study narratives, Atlas entries) read in EB Garamond. Monospace is for code only.

| Style           | Use                                          | Class in `src/lib/ui.ts` |
| --------------- | -------------------------------------------- | ------------------------ |
| Page title      | The h1 of an index or marketing page         | `pageTitleClass`         |
| Article title   | The h1 of a post, case study, or Atlas entry | `articleTitleClass`      |
| Section heading | h2                                           | `sectionHeadingClass`    |
| Item title      | Card, row, and list titles                   | `itemTitleClass`         |
| Deck and body   | 18 to 20px sans, muted ink                   | `deckClass`              |
| Meta            | 16px tracked uppercase, used sparingly       | `metaClass`              |

**Rules:**

- **No periods at the end of headings** (h1 to h4, card and row titles), whether they are sentences or fragments. Question marks stay. A content title that needs its period in metadata keeps it there; `headingText` drops it where the title renders as a heading.
- **A 16px floor.** No text is smaller than 16px except code and legal text. Body is 18 to 20px on marketing pages.
- **A readable measure.** Body runs about 36 to 44rem. Long-form articles keep a 44rem column; the article title and deck may run wider, to 56rem.
- Text links are ink with a 2px underline: dark gold at rest and yellow on hover on white, yellow at rest on the ink block. A linked title takes the yellow underline on hover (`titleHoverClass`).

## Layout

- Page content sits in `shellClass` (`mx-auto w-full max-w-page px-6 md:px-12`), the same box as the header and footer rows, so content edges line up with "Hanif Carroll" and the footer at every width. Don't centre a narrower column inside the page.
- Sections are separated by `clamp(6rem, 12vw, 10rem)` of space, and items inside a section by 2 to 5.5rem.
- Project images sit directly on the canvas with no frame, radius, or shadow.

## No boxes and no dividers

Page content has no card borders, card backgrounds, shadows, tinted bands, rounded panels, or pills, and no hairlines between sections, rows, or list items. Whitespace separates things. If two things blur together, add space or change the type, not a line.

### Exceptions

- **Buttons** are solid ink with an 8px radius.
- **Form controls** keep a border: the Atlas search field needs one to read as a field.
- **Tables** in articles and on One Tuesday keep one quiet rule per row, because a table is unreadable without them.
- **The Atlas agent prompt** is text to copy, so it keeps a quiet tint (no border), like a code block. Inline code in case studies keeps its tint too.
- **Charts and diagrams** inside article content keep their own fills.
- **One Tuesday's live simulation** (`tuesday.css`) is a bespoke interactive piece with its own panels. Its reader page follows this system.
- **Overlays** (the image lightbox, the video modal, the definition tooltip) sit above the page, so they keep their surface and shadow.

## Site chrome

- **Header:** sticky on every page, with the name on the left, the links, and the solid ink `Book a call` button. It has no bottom border; the translucent white and blur keep it readable when content scrolls under it. The current page is marked with a thin dark-gold rule. Below 64rem the links move into the menu.
- **Closing:** `PageClosingCta.astro` is one ink block: a centred serif question, a line of body, a white button, and a yellow-underlined link. Pages pass their own copy and tracking location.
- **Footer:** ink on every page. After the closing it reads as part of the same block. On pages that turn the closing off it stands alone with more padding, so it doesn't look clipped.
- **In-article closing:** `ServiceCallout.astro` ends blog posts and case studies with a section heading, a deck, the ink button, and a text link, with no box.

## Motion

One physics vocabulary everywhere: CSS interactions and GSAP choreography share the same curves, so hovers and entrances feel like one system.

- **Easing:** `--hc-ease-out` (`cubic-bezier(0.215, 0.61, 0.355, 1)`, equals GSAP `power3.out`) for almost everything; `--hc-ease-in-out` for large surface state changes.
- **Duration:** `--hc-dur-fast` (160ms) for colour and opacity hovers, `--hc-dur-base` (240ms) for transforms, `--hc-dur-slow` (420ms) for panels and accordions.
- **Choreography** lives in the `MOTION` config at the top of `src/scripts/motion.ts`; markup opts in through `data-motion-*` attributes only.
- No raw `ms` values or generic `ease` in stylesheets, and no page-specific selectors in motion code.
- The full entrance plays once per session; later navigations get a shorter one.
- Scroll reveals must fail visible: reduced-motion users get the complete static layout.

## Do's and Don'ts

- **Do** start from the homepage and the classes in `src/lib/ui.ts` before writing a new style.
- **Do** keep keyboard access, visible focus (an ink outline on white), reduced-motion behaviour, and WCAG 2.2 AA contrast.
- **Do** show real work: screenshots, outcomes, and working details.
- **Don't** add a border, background, shadow, radius, or rule to page content to create hierarchy.
- **Don't** end a heading with a period.
- **Don't** set text below 16px, or add a font, weight, or colour.
- **Don't** use consulting-funnel framing, AI-agency hype, or glossy generated imagery.

## Implementation

The site is moving to Tailwind during the redesign. New and redesigned markup uses Tailwind utilities built on the theme tokens; route stylesheets keep only what utilities can't express cleanly.

### Sources of truth

- The `@theme` block at the top of `src/styles/global.css` owns the core tokens: colors (`canvas`, `ink`, `ink-muted`, `rule`, `accent`, `accent-ink`), fonts (`sans`, `editorial`, `mono`), the text scale, and container widths (`reading` 44rem, `measure` 52rem, `page` 75rem, `wide` 85rem). Utilities read them directly: `text-ink`, `bg-canvas`, `font-editorial`, `max-w-page`.
- `src/styles/design-tokens.css` aliases those tokens as `--hc-*` variables for the stylesheets that haven't been converted yet, and owns the tokens that have no utility yet (spacing, motion durations, and the panel tokens the One Tuesday simulation uses).
- `src/styles/global.css` also owns element defaults (inside `@layer base`, so utilities can override them), the mobile navigation panel, the body scroll lock for open dialogs, and view transitions. The shared type styles, the page box, and the button and link styles live in `src/lib/ui.ts` as class strings.
- Shared structure lives in components: `Header.astro` (the site header on every page), `BaseLayout.astro` (footer and closing CTA), `EssayPage.astro` (long-form single-column pages such as Now and How I work), and `ArchiveProjectRow.astro`.

### Layout

- Every page has the same sticky site header and ink footer.
- The Projects archive lists each group under a section heading, with its projects in a two-column grid like the homepage's.
- Case-study heroes and project images share transparent 8:5 device frames and show the whole frame without cropping.
- Notes keeps a sticky table of contents beside the entries on desktop; on mobile the contents move into the header. Build Atlas does the same with its entry list and search.

### Styling rules

1. Use theme utilities (`text-ink`, `text-ink-muted`, `font-editorial`) instead of raw hex values or arbitrary `var(--hc-*)` values in new markup.
2. Keep route CSS for states and content utilities can't express cleanly: slider states, CMS or Markdown content, and pseudo-element patterns. Don't add layout or typography to route CSS for redesigned pages.
3. Unlayered CSS beats Tailwind utilities. Put element defaults in `@layer base`, and remove legacy rules a converted page no longer needs instead of fighting them with `!important`.
4. Extend an existing shared component before creating a visually equivalent one.
5. Respect reduced-motion preferences. Navigation and page transitions may enhance orientation, but content and controls must remain usable with motion disabled.
6. Validate every durable layout change at desktop, tablet, and mobile widths. `scripts/check-site-layout.mjs` checks the header, footer and horizontal overflow on the main routes.

### Route stylesheet ownership

| File          | Owner                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `home.css`    | The homepage: centered hero, full-width editorial sections, and the lifting video modal                      |
| `notes.css`   | Expanding table-of-contents entries and the mobile Contents menu                                             |
| `tuesday.css` | The One Tuesday simulation: scroll-pinned acts, stage layout, and keyframes (its reader page uses utilities) |
