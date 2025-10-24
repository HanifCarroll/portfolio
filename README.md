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
pnpm install
pnpm dev
```
The dev server runs on [http://localhost:4321](http://localhost:4321) by default.

### Commands
- `pnpm dev` – start the local dev server
- `pnpm build` – type-check and build the static site to `dist/`
- `pnpm preview` – preview the production build locally

### Content & Data
- Blog posts live in `src/content/blog/*.md` (frontmatter uses `title`, `description`, `pubDate`, optional `tags` and `coverImage`).
- Project case studies are defined in JSON under `src/lib/projects/` and surfaced through `src/lib/project-cards.ts`.
- Public images remain in `public/` and are referenced directly by the JSON files and templates.

### Deployment
The project outputs static HTML, so it can be deployed to any static host (e.g. Vercel, Netlify, Cloudflare Pages). Run `pnpm build` and upload the `dist/` directory.
