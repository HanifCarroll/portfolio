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

### Project hero frames

Add a slug to `scripts/frame-device.json`. Set `device` to `phone`, `laptop`, or `laptop+phone`, and set `input` to a raw screenshot relative to `src/assets/img/projects/`. For `laptop+phone`, `input` is the desktop screenshot and `phone` is the mobile screenshot. Use real UI and leave inline case-study images alone.

The renderer draws the status bar on every phone. For a public website, set `safariDomain` to show the address and bottom toolbar, and capture the site at 390×700 CSS pixels to fit between them. For a native screenshot with its own status bar, set `phoneTopCrop` to the number of source pixels to remove from the top.

Run `node scripts/frame-device.mjs <slug>` to generate `src/assets/img/projects/framed/<slug>.png`. Point both `images.hero` and `images.feature` at that PNG, and give any other case-study images their own keys. Every frame uses the same transparent 1440×900 canvas and fits the entire screenshot without stretching it.

### Contact form

The `/contact/` form sends one plain-text email through Cloudflare Email Sending, in two pieces:

- `functions/api/contact.ts` is a Pages Function. It validates the form (rules in `src/lib/contact.ts`), drops honeypot spam, and hands the subject, body, and reply-to address to the mailer through a service binding named `MAILER`.
- `workers/contact-mailer/` is the `portfolio-contact-mailer` Worker. It holds the `send_email` binding and sets the sender and recipient from its own `wrangler.toml` vars. It has no public URL and is reachable only through the binding.

The Pages build doesn't deploy the mailer. Deploy it with `bunx wrangler deploy` from `workers/contact-mailer/`. The Pages project needs a service binding named `MAILER` that points at `portfolio-contact-mailer`, set for both Production and Preview. Run the tests with `bun run contact:test`.

### Deployment

The site is deployed as a static Astro site on Cloudflare Pages. In the Cloudflare Pages project, use:

- Production branch: `main`
- Build command: `bun install --frozen-lockfile && bun run build`
- Build output directory: `dist`

The Pages project is connected to this GitHub repository. Pushes to `main` trigger a production deployment automatically; pushes to other branches and pull requests create preview deployments. No manual upload or separate CI workflow is required.
