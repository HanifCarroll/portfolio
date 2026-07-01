# Sources

## Source Material

- Portfolio case study: `src/content/case-studies/job-application-assistant.mdx`
- Project metadata: `src/lib/projects/job-application-assistant.json`
- App repo: `/Users/hanifcarroll/projects/job-application-assistant`
- App README: `/Users/hanifcarroll/projects/job-application-assistant/README.md`
- App check result: `./scripts/check` passed with mypy, pytest, extension JavaScript syntax checks, JSON validation, and `git diff --check`.

## Production Research

- [Wistia explainer videos](https://wistia.com/learn/marketing/explainer-videos): problem, solution, how-it-works, and action structure.
- [Vidyard demo videos](https://www.vidyard.com/blog/demo-videos/): product demos should show the product doing the job and avoid overloading the viewer.
- [Atlassian/Loom product demonstration guide](https://www.atlassian.com/blog/loom/product-demonstration): product videos should be concise, audience-specific, and benefit-led.
- [Section508 captions and transcripts](https://www.section508.gov/create/captions-transcripts/): pacing guidance used to keep on-screen text readable.
- [DCMP captioning key](https://dcmp.org/captioningkey/print): caption reading-speed ranges used as the practical text-speed baseline.
- [NN/g UX portfolios](https://www.nngroup.com/articles/ux-design-portfolios/): portfolio reviewers need scannable evidence of role, constraints, process, and outcome.
- [GitHub about READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes): reviewer path should point to inspectable repo context.
- [Vercel product tour](https://vercel.com/product-tour): reference for action-by-action workflow storytelling.
- [Linear customer requests](https://linear.app/changelog/2024-12-09-customer-requests): reference for using one anchor workflow to explain multiple product capabilities.
- [Cursor blog](https://cursor.com/blog): reference for showing working demos and validation artifacts instead of abstract claims.

## Captured Assets

- `assets/raw/product-surface.html`: synthetic, safe UI capture source based on the extension side panel and dashboard surfaces.
- `assets/raw/render_product_surface.py`: deterministic Pillow renderer used after Chrome headless capture hung in this environment.
- `assets/redacted/product-surface.png`: generated synthetic product-surface screenshot.
- `hyperframes/assets/product-surface.png`: root-contained copy used by the HyperFrames CLI renderer.

## Redaction Notes

No private runtime database, real applications, generated cover letters, email addresses, phone numbers, profile photos, tokens, cookies, or local secret paths are used in the HyperFrames composition.
