# HyperFrames Compositions

This reference covers the retained standalone compositions alongside the shared manifest pipeline described in [the template system](template-system.md).

| Composition                                  | Location                                                                                  | HyperFrames version in local scripts |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------ |
| LinkedIn project-video workflow reel         | [social-videos/project-video-ai-workflow](../../social-videos/project-video-ai-workflow/) | `0.7.46`                             |
| Product Usage Scoring & Routing launch video | [videos/product-usage-scoring-routing](../../videos/product-usage-scoring-routing/)       | `0.7.109`                            |

## Structure and timing

`index.html` defines the root composition and timeline. `compositions/` holds sub-compositions referenced through `data-composition-src="compositions/file.html"`. `meta.json` records the project ID and name; `transcript.json` contains a word-level transcript when generated.

Every timed element has `data-start`, `data-duration`, and `data-track-index`, plus `class="clip"` for framework visibility control. GSAP timelines are paused and registered by composition ID:

```js
window.__timelines = window.__timelines || {};
window.__timelines["composition-id"] = gsap.timeline({ paused: true });
```

Video elements are muted, with a separate `<audio>` element for the audio track. Render logic is deterministic: no `Date.now()`, `Math.random()`, or network fetches in compositions.

## Commands and validation

Run commands from the relevant composition directory so its scripts select the intended HyperFrames version:

```sh
npm run dev      # long-running preview server
npm run check    # lint, validate, inspect; also editorial checks where configured
npm run render   # render to MP4
npm run publish  # publish and obtain a shareable link, when publication is requested
```

The preview server remains running for an interactive preview; it is not a one-shot check. Composition HTML changes require the full `npm run check` gate, with errors fixed and inspect warnings reviewed before rendering. `npx hyperframes lint --verbose` includes informational findings; `npx hyperframes lint --json` provides machine-readable findings for CI.

The workflow reel has additional snapshot, editorial-timing, render-receipt, and human publication-review requirements in [its README](../../social-videos/project-video-ai-workflow/README.md). The routing video's [brief](../../videos/product-usage-scoring-routing/BRIEF.md), [storyboard](../../videos/product-usage-scoring-routing/STORYBOARD.md), [script](../../videos/product-usage-scoring-routing/SCRIPT.md), and [frame direction](../../videos/product-usage-scoring-routing/frame.md) retain its creative contract. Its captured source and asset index are documented in [capture provenance](product-usage-scoring-routing-capture.md).

## Framework reference

`npx hyperframes docs <topic>` provides local CLI reference without requiring network access. Topics include `data-attributes`, `gsap`, `compositions`, `rendering`, `examples`, and `troubleshooting`. The full documentation index is [HyperFrames llms.txt](https://hyperframes.heygen.com/llms.txt). Framework-specific references cover timeline registration, timing-attribute semantics, shader-compatible CSS, and Tailwind v4 support.
