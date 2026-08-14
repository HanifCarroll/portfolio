# Asset Descriptions

One line per file. Read this instead of opening every image individually.

To find a specific brand or icon, **grep this file for the brand name in the description text** (e.g. `grep -i 'autodesk' asset-descriptions.md`). The Gemini Vision captions identify what's actually in each file — that's the agent's selector.

The `logo-<hash>.svg` filename prefix is a cheap structural hint (DOM said this SVG was inside a `<header>`, home-link `<a>`, or had an aria-label matching the page brand). It is NOT a content claim — many `logo-*` files are nav icons or decorative shapes. Trust the captions, not the filename prefix.

- svgs/logo-b071e249-2.svg — This is a black, minimalist line-art icon depicting an open inbox tray.
- svgs/logo-b071e249.svg — This is a black, outline-style icon of an inbox tray.
- svgs/logo-c2b0b3b6.svg — This black hamburger menu icon consists of three horizontal bars with rounded ends centered against a white background.
- svgs/logo-e8d1091a.svg — This is a black, rounded "X" close icon centered on a white background.
- svgs/svg-46f21512-2.svg — This is a black, minimalist icon featuring three horizontal rows, each containing a horizontal bar and a perpendicular "T" shape in an alternating pattern.
- svgs/svg-46f21512.svg — This black icon consists of three rows of horizontal lines paired with vertical strokes, resembling a stylized filter or settings menu symbol.
- svgs/svg-ae3f6975.svg — This is a black, minimalist magnifying glass icon.
- svgs/svg-b37effb1-2.svg — This black-and-white icon depicts a stylized building with a central rectangular tower and two smaller side sections.
- svgs/svg-b37effb1.svg — This is a black, minimalist line-art icon depicting a stylized building with three vertical sections of varying heights, each containing horizontal bars representing windows.
- svgs/svg-b480eaad.svg — This is a black, outline-style filter icon.
- svgs/svg-dcc90dd0-2.svg — This icon is a black, circular-bordered information symbol containing a central dot and a vertical line.
- svgs/svg-dcc90dd0.svg — This is a black information icon featuring a lowercase "i" inside a circle on a transparent background.
- svgs/svg-ffdad4ee-2.svg — This is a black, minimalist icon shaped like a stylized letter "S" with circles at both ends.
- svgs/svg-ffdad4ee.svg — This black, minimalist icon depicts a winding path or connector shape with two circular terminals at opposite ends.

## Project-Owned Assets

Case-study screenshots and the live capture curated as the primary visual source of truth for the
Product Usage Scoring & Routing video. These four live in `videos/product-usage-scoring-routing/assets/`
and are the approved project-owned visuals for their beats (per BRIEF.md).

- assets/queue.png — Case-study screenshot of the weekly Sales & CS action queue (bar / work-queue view). Visual for the inspectable action-queue beat.
- assets/decision-packet.png — Case-study screenshot of the decision packet (scoring/routing rationale). Visual for the inspectable-decision beat.
- assets/policy.png — Case-study screenshot of the routing/rating policy view. Visual for the policy-transparency beat.
- assets/live-full-page.png — Full-page capture of the live demo (pusr-web-preview). Whole-interface brand and layout reference, including the queue, decision-packet, and policy surfaces in situ.
