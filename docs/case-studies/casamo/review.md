# Casamo case study review

Reviewed September 9, 2026. Audience: a hiring manager or technical lead considering Hanif for AI product engineering. The local rewrite and screenshot replacements are ready for editorial review; this is not a published release.

## Format assessment

The existing format is a sound starting point: a named product, live link, role, compact stack, clear sections, and expandable screenshots. It explains the traveler problem well. The weakness is the material selected for those sections. It repeats the product promise while leaving most engineering judgment implicit.

On desktop, the long title and large old iMac image delay the role and project facts. The revised title names furnished stays and the digital nomad audience, and the introduction now states ownership before the image. The new hero shows the product's output. Existing layout components are sufficient; no shared template redesign is needed.

The original screenshots sit together after the narrative. A hiring reader must remember the earlier claim and connect it to the image. The rewrite puts intake, comparison, and evidence captures beside the behavior they explain, using full-width images and the existing enlargement controls. Mobile screenshots still require enlargement to read desktop interface details; this is checked as part of page verification.

### Original section summary test

| Section | Its argument | Editorial action |
| --- | --- | --- |
| A long stay needs more than marketplace filters | Travelers need evidence beyond amenity tags. | Keep the problem, shorten the setup, and state ownership. |
| Make the must-haves explicit before search | Required criteria control eligibility; findings need sources. | Expand with the real review-to-photo sequencing problem and the distinction between required and preferred criteria. |
| From trip brief to saved report | Search supports two entry paths, background work, and plans. | Keep the entry paths with intake; explain durability where it matters; mention plans once. |
| A working product with uncertainty left visible | Accounts, plans, qualification, and evidence are shipped. | Remove the repeated feature list; use recorded production outcomes. |
| The product from intake to listing detail | Screens illustrate the flow. | Replace all old captures and distribute them through the story. |

The original 20-second pitch describes what Casamo does. The revised pitch adds why Hanif's work is relevant: he owns a live product that turns uncertain source material into inspectable decisions, recovers long-running work, and exposes the same operations to authenticated AI clients.

## Factual corrections and additions

| Topic | Finding | Treatment in rewrite |
| --- | --- | --- |
| Shortlist size | New destination scans use a minimum of 5 and desired maximum of 10. Historical snapshots can retain 6. | Replace 6–10 with the current 5–10 target; do not present it as a guaranteed result count. |
| Underfilled searches | Current qualification specification and decision-stage implementation retain qualifying results in a limited report and restore credit. Zero matches is a separate outcome. | Explain both outcomes. |
| Required vs preferred | Required evidence blocks qualification; preferences rank options. Photo-resolvable questions must reach the photo stage before final rejection. | Use this as a concrete engineering decision. |
| Report experience | Live sample exposes list, map, comparison, source details, host questions, and review citations. | Describe and capture current behavior. |
| Reconsidering requirements | Existing criteria can be changed and evaluated against retained evidence without a new search. | Add saved-evidence reranking. |
| Production execution | Workers, D1, R2, Workflows, Queues, snapshotted execution contracts, durable operations, and idempotent credit handling are implemented. | Explain their user-facing purpose rather than enumerate infrastructure alone. |
| Data growth | Later discovery waves retained completed candidates in active work. The fix trims the active candidate set while retaining evidence separately. | Add a bounded production incident; omit unsupported capacity claims. |
| MCP | September 8 compatibility records supersede the September 5 record's self-service limitation. Actual Claude Code and Codex clients passed production authorization/read/annotation/revocation checks. | Name those clients and the tested operations; do not claim every chat client works. |
| Plans | Live homepage still offers one free search, a One-Day Pass, and subscriptions. | Retain availability, omit changing prices and repeated sales copy. |
| Results | A dated September 5 acceptance run records 262 discovered listings, 48 broad audits, 28 finalist checks, 10 displayed choices, nine minutes, one debit, and sent completion email. | Identify it as one acceptance run, not a general speed benchmark or customer outcome. |

Some operational documents lag the current implementation. In particular, `docs/ops/scan-outcomes.md` still says insufficient results publish no shortlist, while the canonical qualification specification and current `scan-worker/src/decision/stages.ts` retain limited results. The rewrite follows the current specification and implementation. The older production MCP closeout similarly predates self-service acceptance.

No new paid scan, account mutation, billing action, or client connection was needed for this review. This pass checked the public UI and repository evidence; it did not independently rerun the historical acceptance tests. Revenue, active-user, conversion, time-saved, and successful-booking claims are omitted because this review did not establish them.

## Rewrite outline

1. **Research for a stay you will live and work in.** Problem, current product, ownership, access, and intake screenshot.
2. **Keep requirements, preferences, and evidence distinct.** Qualification, the photo-stage bug, comparison, retained-evidence reranking, limited results, and source detail.
3. **Make a long search recoverable.** Durable execution, retries, credit accounting, and the active-data growth fix.
4. **Give AI clients the same account and credit rules.** Shared commands, user consent, scopes, revocation, and actual supported-client evidence.
5. **What I verified in production.** A dated acceptance result, public sample access, and the limits of marketplace evidence.

## Screenshot replacement record

All four replacement files are real PNG browser captures of production pages on September 9. No source text, prices, statuses, or images were fabricated or edited. The report screens come from the public saved sample, not a fresh scan. Its displayed 267 searched listings and ten stays are a different run from the September 5 acceptance example.

| File | Source | Use |
| --- | --- | --- |
| `src/assets/img/projects/casamo/shortlist-desktop.png` | `https://casamo.app/sample-trip?view=list&filter=all` | Hero and project image. |
| `src/assets/img/projects/casamo/intake-desktop.png` | `https://casamo.app/trips/new` | Current form and importance controls. The right-hand photo is decorative. |
| `src/assets/img/projects/casamo/comparison-desktop.png` | `https://casamo.app/sample-trip?view=compare&filter=all` | Priorities compared across properties. |
| `src/assets/img/projects/casamo/evidence-desktop.png` | `https://casamo.app/sample-trip/listings/sample-listing-1?view=list&filter=all` | Listed vs reviewed evidence, nearby times, and host question. |

The homepage Casamo card also used the old hero and Rails/PostgreSQL/Solid Queue tags. Its image, description, and stack were updated to match this case study; other project entries were left unchanged.

The old hero still showed a waitlist. The old walkthrough uses the previous screenshots and its source describes 6–10 results. Its overview/preview metadata was removed from the Casamo project so it cannot contradict the refreshed page. The video and historical assets are retained; producing a replacement video is separate work.

## Evidence references

Product repository root: `/Users/hanifcarroll/projects/casamo`.

- [Current scan policy](/Users/hanifcarroll/projects/casamo/config/scan-pipeline.json): five-property minimum and ten-property output target.
- [Qualification specification](/Users/hanifcarroll/projects/casamo/openspec/specs/qualified-choice-eligibility-ranking/spec.md): required/preferred rules, photo deferral, limited reports, and reranking.
- [Eligibility evaluator](/Users/hanifcarroll/projects/casamo/shared/decision/evaluator.ts): intermediate blockers and deferred checks.
- [Decision-stage implementation](/Users/hanifcarroll/projects/casamo/scan-worker/src/decision/stages.ts): limited results and credit restoration.
- [Candidate-loss investigation](/Users/hanifcarroll/projects/casamo/docs/solutions/workflow-issues/trace-candidate-loss-before-increasing-scan-limits.md): production failure sequence and diagnosis.
- [Retained-evidence incident](/Users/hanifcarroll/projects/casamo/docs/solutions/performance-issues/bound-retained-evidence-across-adaptive-waves.md): growth, correction, and limitations of memory-related measurements.
- [Execution contracts](/Users/hanifcarroll/projects/casamo/docs/architecture/scan-execution-contracts.md) and [workflow architecture](/Users/hanifcarroll/projects/casamo/docs/architecture/scan-workflow.md): stage persistence, policy snapshots, retries, and queues.
- [Billing specification](/Users/hanifcarroll/projects/casamo/openspec/specs/scan-pass-and-billing/spec.md): plans, durable identities, and one refund per scan.
- [Production acceptance record](/Users/hanifcarroll/projects/casamo/docs/architecture/agent-native-production-evidence.md): the September 5 qualifying browser scan, report, debit, and delivery receipts.
- [September 8 client compatibility record](/Users/hanifcarroll/projects/casamo/docs/architecture/mcp-client-compatibility.md): actual supported-client production results and limitations.
- [Live public sample](https://casamo.app/sample-trip), [intake](https://casamo.app/trips/new), and [connection guide](https://casamo.app/help/mcp): current public product surfaces.

## Verification

Final build passed: 71 Astro files checked with zero errors/warnings, 36 pages built, and rendered-copy validation passed. Lint, all 23 project metadata checks, and whitespace validation passed.

Browser checks passed at 1440×1000 and 390×844: all four images loaded, no horizontal document overflow, and the old video was absent. Keyboard Enter opened image enlargement; Escape closed it and returned focus to its trigger. Reduced-motion rendering showed the introduction immediately. The built preview uses fresh optimized image assets. Desktop and mobile preview captures are saved beside this review.

Local preview: http://127.0.0.1:4322/projects/casamo/. The portfolio changes remain local and unpublished.


## Sample excerpt correction

The September 9 follow-up found that the sample's 117 saved full-review translations did not cover its citation excerpts. Casamo commit `b4ce37ca` adds 15 bundled English excerpt translations and uses them in the shared shortlist, comparison, and detail surfaces. The frozen report and original evidence remain unchanged; comparison evidence and the detail's View original action retain the source text. Missing source-language labels can use the saved translation metadata.

The public Worker build succeeded and the deployed sample was checked in the browser. The exact original review opened from the translated priority. Local desktop/mobile checks, 1,336 automated tests, type checks, the production build, and all 31 OpenSpec validations passed. Svelte analysis found no issues. The three report screenshots were recaptured from production after that deployment; the intake screenshot remains from the earlier September 9 capture.

The selected title is “Casamo: Finding and comparing furnished stays for digital nomads.” The portfolio was rebuilt with the fresh images; desktop/mobile previews showed the new title without horizontal overflow. The portfolio remains local and unpublished.


## Sample cover replacement

Replaced InspireBA's promotional “Descubrilo” cover with its saved dining-area photo (gallery photo 11). Casamo commit `d3405630` selects that existing photo without reordering the gallery or changing citation indices. The public deployment succeeded; desktop and mobile covers were checked, and the shortlist and comparison screenshots were recaptured from production. The app's 1,337 tests, type checks, build, and specification validation passed. The portfolio preview was rebuilt and remains unpublished.
