# Sources

## Repository Audit

- Repository: `https://github.com/HanifCarroll/HablaBA`
- Analyzed commit: `caf27a21ca42beb5458cf843b7750cac6a28c039`
- Current README: `https://github.com/HanifCarroll/HablaBA/blob/caf27a21ca42beb5458cf843b7750cac6a28c039/README.md`
- Development history: 164 commits; product work from July 27 to October 13, 2025, followed by a README-only update on June 17, 2026.
- Architecture history: Rails API at `e15a994`; imported web and API histories at `6961585` and `57abd27`; Laravel/Inertia/Vue consolidation from `c58fc6` through `2e6fefd`.

Current source files reviewed at `caf27a2`:

- `README.md:3-24`
- `app/Http/Controllers/Auth/RegisteredUserController.php:64-113`
- `app/Http/Requests/StoreExchangeRequest.php:18-55`
- `app/Http/Controllers/Web/ExchangeController.php:83-405`
- `resources/js/pages/profile/Setup.vue:38-70,141-269`
- `resources/js/pages/Explore.vue:36-158,189-219`
- `resources/js/pages/exchanges/Chat.vue:52-199`
- `database/seeders/DevExchangeSeeder.php:30-360,435-542`
- `docker-compose.prod.yml:1-149`

These sources support invite-only registration, profile setup, one-to-one and small-group exchanges, filtered discovery, private real-time chat, in-app and browser notifications, and a containerized web deployment shape.

## Archived Research Record

- Portfolio commit: `623514802f9e55d025fedf15129308081e600518`
- Historical file: `src/content/projects/language-exchange.md`
- GitHub permalink: `https://github.com/HanifCarroll/portfolio/blob/623514802f9e55d025fedf15129308081e600518/src/content/projects/language-exchange.md`
- Lines `34-43`: one three-person, 90-minute group interview and an 11-response survey.
- Lines `145-160`: real-photo, exchange-first, and neighborhood decisions.
- Lines `173-196`: prototype feedback on the exchange-first model, navigation, labels, identity, and trust.
- Lines `273-277`: six usability sessions before the MVP build.

The current case study uses the research counts and decisions above. It does not reuse the archived market-size, business-impact, or planned-success claims because no current primary evidence verifies them.

## Historical Product Artifact

- HablaBA commit: `4d6dc45`
- Original path: `docs/flows/Host Exchange.png`
- Selected copy: `assets/selected/hablaba-host-exchange-flow.png`
- SHA-256: `82ed92a1f7c549420dd32b82d733bc3ec6bcd8adc20747b8c307802878b5100f`

The wireflow shows the early exchange-first host journey: define an exchange, choose time and place, review and publish, then confirm.

## Current Portfolio Sources

- Case study: `src/content/case-studies/language-exchange.mdx`
- Project metadata: `src/lib/projects/language-exchange.json`
- Public discovery asset: `src/assets/img/projects/hablaba-hero.png`
- Public coordination asset: `src/assets/img/projects/hablaba-feature.png`
- Public historical flow asset: `src/assets/img/projects/hablaba-host-exchange-flow.png`

## Screenshot Provenance

- `assets/selected/hablaba-hero.png` and `assets/redacted/hablaba-hero.png` are copies of the public Explore capture.
- `assets/selected/hablaba-feature.png` and `assets/redacted/hablaba-feature.png` are copies of the public exchange-chat capture.
- Visible usernames, avatars, exchange titles, neighborhoods, participant counts, and chat content match `database/seeders/DevExchangeSeeder.php:30-360,435-542` at `caf27a2`.
- The captures therefore show the real product UI with seeded development fixtures, not live-user accounts or messages.

## Claim Boundary

The audit found a buildable frontend and substantial product scope, but the repository's current CI, type check, formatting, lint, one backend test, and live deployment are not clean. The current source also contains untested exchange-lifecycle defects. The public story therefore says `working beta` and does not claim production readiness, reliability, current availability, adoption, retention, completed meetups, revenue, or growth.

Independent audit results used only to constrain claims:

- `pnpm install --frozen-lockfile`: passed.
- `pnpm run build`: passed.
- Pest with PHP 8.3 and PostgreSQL: 51 passed, 1 failed.
- `vue-tsc --noEmit`: failed.
- Prettier and ESLint: failed.
- Latest GitHub test and linter workflows: failed.
- `hablaba.app`: not currently healthy.

These results do not appear as positive proof in the video.

## Portfolio Video Production

- Workflow: `docs/project-videos/capture-and-production-workflow.md`
- Template contract: `docs/project-videos/template-system.md`
- Source template: `docs/project-videos/project-video-source-template.md`
- Shared frame: `project-videos/frame.md`
- Manifest: `project-videos/language-exchange/video.json`

The generated composition must come from the shared manifest pipeline. Do not edit generated HTML or public video files by hand.
