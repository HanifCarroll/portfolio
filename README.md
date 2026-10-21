## Hanif Carroll – Astro Portfolio

This repo hosts the Astro-based portfolio and blog for Hanif Carroll, forward deployed engineer.
It replaces the previous Next.js build while keeping the existing project JSON data and public assets.

### Tech Stack

- [Astro 7](https://astro.build) with static output
- [Tailwind CSS 4](https://tailwindcss.com) via the official `@tailwindcss/vite` plugin
- Markdown content collections for the blog
- Project data sourced from JSON files in `src/lib/projects/`

### Project Structure

- `src/pages/` defines routes; `src/layouts/` and `src/components/` contain shared presentation.
- `src/styles/` contains shared tokens and page styles. [DESIGN.md](DESIGN.md) documents the design system.
- `src/content/blog/` contains Markdown posts; `src/content/case-studies/` contains MDX case studies.
- `src/lib/projects/` contains project JSON; `src/lib/` contains supporting logic and types.
- `public/` contains static assets; `scripts/` contains validation utilities; `dist/` is generated build output.

### Getting Started

`packageManager` specifies `bun@1.3.8`.

```bash
bun install
bun dev
```

The dev server runs through Portless at [https://portfolio.localhost](https://portfolio.localhost).
Use `bun run dev:direct` for the raw Astro server on [http://localhost:4321](http://localhost:4321).

### Commands

- `bun dev` – start the local dev server through Portless
- `bun run dev:direct` – start the raw Astro dev server
- `bun run check:projects` – validate project JSON, case-study pairing, and referenced local assets
- `bun run build` – type-check and build the static site to `dist/`
- `bun run preview` – preview the production build locally
- `bun run lint` / `bun run format:check` – Oxlint and Oxfmt
- `bun run tuesday:test` – Bun simulation tests
- `node --test scripts/*.test.mjs` – Node utility tests

Tests use `*.test.ts` or `*.test.mjs` beside the related code; no coverage threshold is configured. Desktop/mobile layouts, keyboard access, and reduced motion are part of UI verification. The Husky pre-commit hook runs the build. TypeScript extends Astro's strict configuration.

Secrets stay out of Git and browser-exposed `PUBLIC_*` variables.

### Analytics & Verification Env Vars

Set these in your hosting environment (and optionally local `.env`). The site uses one direct GA4 installation plus Microsoft Clarity; Google Tag Manager is not required.

- `PUBLIC_GA_MEASUREMENT_ID` – GA4 web stream measurement ID (example: `G-ABC123XYZ9`)
- `PUBLIC_CLARITY_PROJECT_ID` – Microsoft Clarity project ID used in the Clarity snippet
- `PUBLIC_GSC_VERIFICATION` – Google Search Console verification token for `<meta name="google-site-verification" />`

The existing `book_call_clicked`, `resume_downloaded`, and `email_clicked` events include the `event_location` parameter. In GA4, register `event_location` as an event-scoped custom dimension, then mark `book_call_clicked` and `resume_downloaded` as key events. Page views remain GA4's automatic measurement; do not add a second manual page-view event unless DebugView shows that Astro navigation is being missed.

### Content & Data

- Notes live in `src/data/notes.ts`; edit them directly.
- Blog posts live in `src/content/blog/*.md` (frontmatter uses `title`, `description`, `pubDate`, optional `tags` and `coverImage`).
- Project case studies are defined in JSON under `src/lib/projects/` and surfaced through `src/lib/project-cards.ts`.
- Public images remain in `public/` and are referenced directly by the JSON files and templates.

### Deployment

The site is deployed as a static Astro site on Cloudflare Pages. In the Cloudflare Pages project, use:

- Production branch: `main`
- Build command: `bun install --frozen-lockfile && bun run build`
- Build output directory: `dist`

The Pages project is connected to this GitHub repository. Pushes to `main` trigger a production deployment automatically; pushes to other branches and pull requests create preview deployments. No manual upload or separate CI workflow is required.
