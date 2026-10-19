# Development

## Project structure

The portfolio is an Astro 7 static site and blog using TypeScript, React components, and Tailwind CSS 4.

- `src/pages/` defines routes; `src/layouts/` and `src/components/` contain shared presentation.
- `src/styles/` contains shared tokens and page styles.
- `src/content/blog/` contains Markdown posts; `src/content/case-studies/` contains MDX case studies.
- `src/lib/projects/` contains project JSON; `src/lib/` contains supporting logic and types.
- `public/` contains static assets; `scripts/` contains validation and media utilities; `dist/` is generated build output.

## Commands and checks

`packageManager` specifies `bun@1.3.8`. The [README](../README.md) covers installation, Portless development at `https://portfolio.localhost`, direct Astro development, preview, project metadata checks, and deployment.

```sh
bun run build                   # Astro checks, static output, user-facing copy validation
bun run lint                    # Oxlint
bun run format:check            # Oxfmt
bun run check:projects          # metadata, case-study pairing, assets
bun run tuesday:test            # Bun simulation tests
node --test scripts/*.test.mjs  # Node utility tests
```

Tests use `*.test.ts` or `*.test.mjs` beside the related code; no coverage threshold is configured. Desktop/mobile layouts, keyboard access, and reduced motion are part of UI verification. Build and lint are review checks; the Husky pre-commit hook runs the build. TypeScript extends Astro's strict configuration, Oxfmt formats supported files, and existing components/design tokens provide shared presentation.

## Generated content and secrets

The retained standalone video projects have a [HyperFrames composition reference](project-videos/hyperframes-compositions.md) covering timing, structure, commands, and validation. [Capture provenance](project-videos/product-usage-scoring-routing-capture.md) preserves the routing video's original source URL, asset index, and captured brand summary. The shared video pipeline remains documented in [capture and production workflow](project-videos/capture-and-production-workflow.md).

`src/data/notes.generated.ts` is generated, not hand-edited. `bun run notes:sync` regenerates it from the vault source; `bun run notes:check` checks that it matches. `PORTFOLIO_NOTES_SOURCE` selects another source directory. The generator's default source is `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/hanif-md/projects/portfolio-knowledge-library`; [the generator](../scripts/sync-notes-content.mjs) defines the current source format and behavior.

Secrets stay out of Git and browser-exposed `PUBLIC_*` variables. The [README](../README.md) documents public analytics and verification IDs separately from secrets.

## Delivery

Pull requests describe the problem, resulting behavior, and verification, with relevant issues and screenshots for visual changes. Pushes to `main` trigger production deployment on Cloudflare Pages; other branches and pull requests create previews. A successful local build does not establish that deployment has completed. See [deployment configuration](../README.md#deployment).
