# Design QA

## 2026-09-03 — Blog article header refinement

- Source: `/var/folders/2v/y7ts92ps7z97w36bl883y8jh0000gn/T/codex-clipboard-2ef7897d-0e5f-40ac-9d1a-6a0c3129dead.png` (1650 x 1180 px; supplied design reference)
- Implementation: `src/pages/blog/[slug].astro` and `src/styles/blog.css`
- Comparison evidence: `tmp/design-qa/source-vs-implementation-desktop.png` (2880 x 1024 px side by side), plus desktop, tablet, and mobile captures in `tmp/design-qa/`
- Tested viewports: 1440 x 1024, 768 x 1024, and 390 x 844 CSS px
- Tested density: browser-reported DPR 2 on the initial desktop capture and DPR 1 after viewport emulation
- Tested states: initial article view; desktop table-of-contents rail; tablet and mobile collapsed contents; mobile expanded contents; author and call-to-action transition

### Comparison and findings

- The implementation carries over the selected visual language: no Blog eyebrow, medium-weight editorial H1 and H2 headings, a semibold author name, a centered hero, and a quieter active table-of-contents state without a marker line.
- The reference is a composed visual direction rather than a literal page capture: it omits some opening article copy and includes a rounded presentation canvas. The implementation preserves the real article structure and site shell while matching its hierarchy and tone.
- Desktop, tablet, and mobile layouts have no horizontal overflow. The desktop rail switches to the native disclosure-based contents control below the desktop breakpoint.
- The mobile contents control opens and exposes all section links. Its focus indicator remains visible for keyboard users.
- Browser console errors and warnings: none on the desktop article check.
- Remaining P0, P1, and P2 issues: none. The reference uses a more exaggerated editorial scale; the shipped scale is intentionally more restrained because the earlier oversized headline was the problem being corrected.

### History

- Removed the Blog eyebrow and its unused styles.
- Reduced article H1 and H2 weights from 600 to 500 and kept the author name semibold.
- Removed decorative outlines, table-of-contents divider/marker lines, and the divider above the author block. The divider before the commercial CTA remains.

final result: passed

## Previous full-site pass

- Tested templates: homepage, services index and detail, projects index and detail, about, blog index and post, now, and tools
- Tested viewports: 1440 x 1000, 820 x 900, and 390 x 844
- Tested states: page entrance, scroll reveals, Astro navigation, sticky header surface changes, and full-screen mobile navigation

## Findings

No actionable P0, P1, or P2 issues remain.

- Layout: every representative route has `documentElement.scrollWidth === window.innerWidth` at all three viewports. The workflow diagram now reflows vertically on narrow screens instead of widening the document.
- Responsive hero: the consultant portrait remains side by side with the copy on desktop and switches to a compact 16:9 crop on tablet and 3:2 crop on mobile.
- Project proof: homepage rows alternate copy and artwork on desktop. The second and fourth illustrations now use the wide media track, and all four paper-system assets have transparent backgrounds.
- Visual system: near-white canvas, light editorial surfaces, restrained gold evidence markers, soft artifact shadows, and spacing replace the previous collection of borders and horizontal rules across shared templates.
- Motion: GSAP entrance, reveal, and subtle parallax effects run after Astro page transitions. Reduced-motion users receive the complete layout without animated movement.
- Navigation: the tablet/mobile menu is a focus-contained full-screen panel with an animated open and close sequence. It closes on navigation, unlocks the document, and remounts after a client-side route change.
- Accessibility: semantic headings, landmarks, descriptive image alternatives, keyboard escape and focus management, visible focus states, and reduced-motion behavior remain intact.
- Runtime: the production build reports zero errors, warnings, or hints across 39 generated pages.

## Issues Caught During QA

1. The workflow diagram caused horizontal scrolling on tablet and mobile; its responsive layout now stacks within a bounded width.
2. The generated project art included opaque backgrounds; each source is now an RGBA image with transparent edge pixels.
3. The projects index heading inherited dark text on its dark hero; the final theme rule now explicitly uses the editorial text token.
4. Hero line animation briefly clipped authored line spans; the motion code now animates the existing spans without wrapping or splitting them.

final result: passed
