# Design QA

- Tested templates: homepage, services index and detail, projects index and detail, about, blog index and post, now, and tools
- Tested viewports: 1440 x 1000, 820 x 900, and 390 x 844
- Tested states: page entrance, scroll reveals, Astro navigation, sticky header surface changes, and full-screen mobile navigation

## Findings

No actionable P0, P1, or P2 issues remain.

- Layout: every representative route has `documentElement.scrollWidth === window.innerWidth` at all three viewports. The workflow diagram now reflows vertically on narrow screens instead of widening the document.
- Responsive hero: the consultant portrait remains side by side with the copy on desktop and switches to a compact 16:9 crop on tablet and 3:2 crop on mobile.
- Project proof: homepage rows alternate copy and artwork on desktop. The second and fourth illustrations now use the wide media track, and all four paper-system assets have transparent backgrounds.
- Visual system: near-white canvas, navy editorial surfaces, yellow proof markers, soft artifact shadows, and spacing replace the previous collection of borders and horizontal rules across shared templates.
- Motion: GSAP entrance, reveal, and subtle parallax effects run after Astro page transitions. Reduced-motion users receive the complete layout without animated movement.
- Navigation: the tablet/mobile menu is a focus-contained full-screen panel with an animated open and close sequence. It closes on navigation, unlocks the document, and remounts after a client-side route change.
- Accessibility: semantic headings, landmarks, descriptive image alternatives, keyboard escape and focus management, visible focus states, and reduced-motion behavior remain intact.
- Runtime: the production build reports zero errors, warnings, or hints across 39 generated pages.

## Issues Caught During QA

1. The workflow diagram caused horizontal scrolling on tablet and mobile; its responsive layout now stacks within a bounded width.
2. The generated project art included opaque backgrounds; each source is now an RGBA image with transparent edge pixels.
3. The projects index heading inherited dark text on its navy hero; the final theme rule now explicitly uses the proof-text token.
4. Hero line animation briefly clipped authored line spans; the motion code now animates the existing spans without wrapping or splitting them.

final result: passed
