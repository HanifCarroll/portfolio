# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 7 static portfolio and blog, using TypeScript, React components, and Tailwind CSS 4.

- `src/pages/` defines routes; `src/layouts/` and `src/components/` provide shared presentation.
- `src/styles/` contains shared tokens and page styles.
- `src/content/blog/` holds Markdown posts; `src/content/case-studies/` holds MDX case studies.
- `src/lib/projects/` contains project JSON; `src/lib/` contains supporting logic and types.
- `public/` holds static assets; `scripts/` contains validation and media utilities. Builds go to `dist/`.

## Build, Test, and Development Commands

Use Bun (`packageManager` specifies `bun@1.3.8`).

- `bun install` — install dependencies.
- `bun dev` — run through Portless at `https://portfolio.localhost`.
- `bun run dev:direct` — start Astro directly on localhost.
- `bun run build` — run Astro checks, generate the site, and validate user-facing copy.
- `bun run preview` — serve the production build locally.
- `bun run lint` and `bun run format:check` — check with Oxlint and Oxfmt.
- `bun run check:projects` — validate project metadata, case-study pairing, and assets.

## Coding Style & Naming Conventions

Follow adjacent code; use two-space indentation in formatted TypeScript and JSON. Run Oxfmt for supported files; avoid unrelated formatting changes. TypeScript extends Astro’s strict configuration. Use PascalCase component names, kebab-case route/content filenames, and camelCase functions and variables. Reuse existing components and design tokens.

## Testing Guidelines

Run `bun run tuesday:test` for Bun simulation tests and `node --test scripts/*.test.mjs` for Node utility tests. Name tests `*.test.ts` or `*.test.mjs` beside related code. No coverage threshold is configured. Add focused regression checks for changed logic. For UI changes, check desktop/mobile layouts, keyboard access, and reduced motion. Run build and lint before review; the Husky pre-commit hook runs the build.

## Commit & Pull Request Guidelines

Recent commits use short imperative subjects, such as “Stabilize testimonial slider transitions.” Keep changes focused. PRs should explain the problem, resulting behavior, and verification; link relevant issues and include screenshots for visual changes. Pushes to `main` trigger production deployment on Cloudflare Pages.

## Content & Configuration

Do not hand-edit `src/data/notes.generated.ts`; use `notes:sync` and `notes:check` with the vault source or `PORTFOLIO_NOTES_SOURCE`. Keep secrets out of Git and browser-exposed `PUBLIC_*` variables.
