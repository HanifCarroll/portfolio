## Hanif Carroll – Astro Portfolio

This repo hosts the Astro-based portfolio and blog for the “SaaS in 2 Weeks” offering.  
It replaces the previous Next.js build while keeping the existing project JSON data and public assets.

### Tech Stack
- [Astro 5](https://astro.build) with static output
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Markdown content collections for the blog
- Project data sourced from JSON files in `src/lib/projects/`

### Getting Started
```bash
bun install
bun dev
```
The dev server runs on [http://localhost:4321](http://localhost:4321) by default.

### Commands
- `bun dev` – start the local dev server
- `bun run build` – type-check and build the static site to `dist/`
- `bun run preview` – preview the production build locally

### Analytics & Verification Env Vars
Set these in your hosting environment (and optionally local `.env`):

- `PUBLIC_GTM_CONTAINER_ID` – Google Tag Manager container ID (example: `GTM-ABC1234`)
- `PUBLIC_GA_MEASUREMENT_ID` – GA4 web stream measurement ID (example: `G-ABC123XYZ9`)
- `PUBLIC_CLARITY_PROJECT_ID` – Microsoft Clarity project ID used in the Clarity snippet
- `PUBLIC_GSC_VERIFICATION` – Google Search Console verification token for `<meta name="google-site-verification" />`

### Content & Data
- Blog posts live in `src/content/blog/*.md` (frontmatter uses `title`, `description`, `pubDate`, optional `tags` and `coverImage`).
- Project case studies are defined in JSON under `src/lib/projects/` and surfaced through `src/lib/project-cards.ts`.
- Public images remain in `public/` and are referenced directly by the JSON files and templates.

### Deployment
The project outputs static HTML, so it can be deployed to any static host (e.g. Vercel, Netlify, Cloudflare Pages). Run `bun run build` and upload the `dist/` directory.
