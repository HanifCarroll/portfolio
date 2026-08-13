# SEO Changes and Observations

This file tracks Search Console observations, SEO decisions, and follow-up checks for hanifcarroll.com.

## 2026-08-13

### Contract Product Engineering Repositioning And Worksheet Retirement

- Repositioned the shared site shell from "technical consulting for businesses outgrowing their workflows" to "contract product engineer for B2B SaaS teams": footer tagline, mobile-nav note, and the closing-CTA default used across blog, case-study, tools, and 404 pages.
- Rewrote the homepage recognition section around a product-engineering pain (a feature or integration stuck behind a packed roadmap), removed the One Tuesday workflow diagnostic from the homepage, and reordered featured client proof to Genrupt then Palabruno.
- Simplified the HubSpot credential line to "HubSpot integrations are a core part of the offer" and removed the retired Inbound / Email Marketing / Revenue Operations / Reporting cert enumeration from the homepage and services FAQ.
- Retired the free `/resources/process-mapping-worksheet/` lead magnet and removed its page, stylesheet, assets, and every cross-link from the business-process-mapping and spreadsheet-vs-database blog posts and the Acquire and Desarmadero case studies. The retired URL now returns 404.
- Retagged case-study metadata (`service`, `client`, `cardLabel`, `role`) and track labels away from workflow/operations/consulting language, and reordered client-work curation to lead with Genrupt, Palabruno, and Mucho Hangouts.
- Rebranded One Tuesday from "Interactive workflow diagnostic" to "Interactive case study" across its page, components, SEO title/description, and related links.
- Rewrote `PRODUCT.md` and updated `DESIGN.md` to the contract-product-engineering register.
- After deployment, verify the live footer and closing CTAs, the homepage recognition and featured-project sections, the One Tuesday title/description in Search Console, and confirm `/resources/process-mapping-worksheet/` returns 404.

### Services Page Retirement And Single-Offer Homepage

- Collapsed the homepage "Two ways to work together" two-card section into a single offer ("One offer: contract product engineering") with a monthly-engagement default and a defined-project option, resolved on the fit call.
- Removed the `/services/` route and its stylesheet; added `/services/` and `/services/*` 301 redirects to `/`, and repointed the stale `/business-systems-audit/`, `/business-systems-build/`, and `/work-with-me/` redirects to `/` to avoid redirect chains.
- Rebuilt navigation: primary nav Home / Case Studies / Blog / About / Book a fit call; footer Now / Tools / Email. Removed the Services link from the header and footer.
- Repointed the blog/case-study closing-callout secondary link from `/services/` to `/case-studies/`.
- After deployment, verify `/services/` returns a one-hop 301 to `/`, the header and footer navigation, and Search Console for `/services/` URL consolidation into the homepage.

## 2026-07-29

### Newsletter Retirement And Blog Migration

- Retired the `A Working Theory` newsletter home, archive, signup flow, email delivery code, and newsletter-specific site navigation.
- Preserved the existing article at `/blog/reliable-ai-workflows/` and added one-hop permanent redirects from its former issue URL, the newsletter home, and the real archive.
- Removed the sample-only archive preview without a redirect because it was already `noindex, nofollow, noarchive` and was never a canonical public-content route.
- Verify the redirects, blog article, sitemap, RSS, and retired API endpoints after deployment. Watch Search Console for consolidation of the former issue URL into the blog route.

## 2026-07-27

### Process-Mapping Worksheet Organic-Discovery Test

- Started a controlled internal-distribution test for `/resources/process-mapping-worksheet/` using contextual links from the business process mapping example, the Business Systems Audit page, the services workflow principle, and the Desarmadero Operations and Acquire case studies.
- Added source-location analytics to each internal link and privacy-safe worksheet events for first input, distinct Section 4 and Section 7 milestones, print/save, completed-example clicks, Audit clicks, and valid draft restoration. Worksheet content and locally saved values are explicitly excluded from analytics.
- Created the live open GA4 exploration `Process-Mapping Worksheet Funnel` with the ordered path from worksheet view through first input, Section 7, print/save, Audit click, and fit-call click. It is expected to remain empty until the instrumented page is deployed and receives production traffic.
- The baseline begins after deployment and closes after the first of four complete weeks or 100 qualified worksheet page views. Compare worksheet starts, Section 7 reaches, print/save actions, Audit clicks, and downstream fit-call clicks by source.
- Keep the worksheet and completed example cross-linked. Do not add a broader process-mapping content cluster until Search Console shows relevant impressions or queries that justify it.
- After deployment, verify the live internal links and analytics events, then record the complete baseline and the keep/change/stop decision in this section.

### Business Process Mapping Example Post

- Added a review-ready `/blog/business-process-mapping-examples/` post targeting informational searches for business process mapping examples with one complete modeled service workflow, a current-state map, a focused current-to-improved comparison, and contextual links to One Tuesday, Desarmadero Operations, and the Business Systems Audit.
- Added a free, printable `/resources/process-mapping-worksheet/` linked from the article so readers can map one workflow, record its handoffs and delays, and choose a first change to test.
- Kept all evidence boundaries explicit: Meridian Facility Services and its workflow are fictional; the future state is a recommendation without measured results; One Tuesday remains a simulation; and Desarmadero supports the discovery-to-prototype method without implying deployment or operational impact.
- Added a concrete explanatory illustration of the current workflow, responsive labeled diagrams, and desktop/mobile previews of the completed worksheet. The final improved-workflow section uses one focused comparison instead of repeating the same flow in consecutive images.
- Before any future deployment, verify both live canonical URLs, article metadata and structured data, worksheet print behavior, responsive diagrams, internal links, blog index, RSS and sitemap inclusion, then establish a Search Console baseline before considering an indexing request.

### Codex Telegram Bridge Search-Snippet Test

- Changed `/case-studies/codex-telegram-bridge/` from a case-study-led search title to `Codex Telegram Bridge | Open-Source Remote Control Tool` and made the hero description identify it as an open-source Rust tool.
- Replaced the generic repository action with `View source on GitHub`; the existing repository action is already rendered in the initial hero, so the source path remains above the fold without adding a duplicate link.
- Baseline for the complete 2026-06-27 through 2026-07-24 Search Console window: 53 impressions, 0 clicks, 0% CTR, and average position 7.40 for the page; the exposed Codex Telegram query cluster had 16 impressions, 0 clicks, and positions 5.67–8.00.
- After deployment, verify the live title, description, canonical, initial-HTML GitHub link, and hero placement. Compare the next complete 28-day page and query window after four weeks; keep the experiment only if CTR or qualified clicks improve without a material ranking loss.

### Browser Automation Comparison Refresh

- Replaced the unavailable Claude-in-Chrome lane in `/blog/browser-automation-tools-comparison-2026/` with a dated Wikipedia search experiment covering the bundled ChatGPT Chrome Extension, Playwriter `0.4.0`, and agent-browser `0.33.0`.
- Updated the title, description, recommendation, decision table, timings, session/auth distinctions, primary documentation links, and `updatedDate`; replaced test-log jargon with plain descriptions while preserving the canonical route and systems-build CTA.
- Verified the production build, initial HTML recommendation/table, tool-specific metadata, and BlogPosting modification date.
- After deployment, verify the live title, description, article structured data, table rendering, internal case-study CTA, and Search Console impressions/clicks for the route after four to six weeks.

### Content-Automation Post Withdrawal

- Withdrew `i-hate-creating-content-so-i-built-a-robot-to-do-it-for-me` from its public route, the blog index, RSS, and the sitemap while retaining the source content.
- Removed the Vox Prismatic case study link to the withdrawn post so the case study does not send visitors to a retired URL.
- Verified the production build, the withdrawn route is not generated, and the post is absent from the blog index, RSS, and sitemap.
- After deployment, confirm the withdrawn URL returns 404 and inspect Search Console for its retirement.

## 2026-07-26

### Hanif Carroll Identity Consolidation

- Updated public schema, service-provider markup, footer, About and Now copy, and favicon references so public surfaces identify Hanif Carroll rather than HC Studio.
- Kept the historical HC Studio assets in the repository without serving them through the site shell.
- Verify the production homepage, About page, service pages, Now page, JSON-LD, and favicon after deployment.

## 2026-07-20

### Route Migration Redirects

- Added 25 direct permanent redirects for pages that moved during the July site restructuring: the `/projects/` index, 21 matching case studies, and three service pages with clear current equivalents.
- Kept `/launch/`, `/mvp-launch/`, `/fractional-product-engineering/`, and `/automation-ai-agents/` as 404s because those offers and positioning were intentionally retired.
- Verified the production build, the generated `dist/_redirects` file, all 25 redirect destinations in `dist`, and the absence of redirect chains.
- After deployment, verify representative live responses return one-hop 301s to the final HTTPS URLs, then watch Search Console for old-URL consolidation into the new case-study and service URLs.

### One Tuesday, Twice Interactive Workflow Diagnostic

- Added `/case-studies/one-tuesday/`, a written diagnostic for a fictional 18-person service company. The optional experience includes a playable operations day, a scroll-driven system build, and a comparison that gives both workflows the same demand. The page explains that its numbers come from the simulation and its stated assumptions.
- Kept the prose, model inputs, and stress test in the initial HTML for search engines and no-JavaScript readers. Desktop visitors now enter the React experience by default; small screens retain the prose-first view and can launch the compact interaction on demand.
- Wired the diagnostic into site discovery without placing it alongside client proof: a separately labeled homepage feature, a closing card on the case-study index, and related links from the Genrupt and Desarmadero operations case studies. The route uses its hero as the social preview image and tracks the launch, major completion points, reader handoff, diagnostic answers, and calls to action.
- Extended project validation so `customPage` metadata must point to a real static route instead of only bypassing the MDX check.
- After deployment, verify the social preview, initial page weight, analytics events, reader-to-experience handoff, and desktop/mobile interaction flow. Recapture the hero and feature screenshots if the experience changes materially.

## 2026-07-16

### Blog Positioning Cleanup

- Kept the three articles most closely aligned with workflow automation and dependable business systems visible on the blog, in RSS, and in the sitemap.
- Withdrew four developer-focused articles from public routes and discovery surfaces while retaining their source content: `ai-makes-open-source-more-important-not-less`, `choosing-a-backend-in-2026`, `dont-let-the-llm-decide-what-a-word-is`, and `expensive-tokens-reward-good-architecture`.
- Verified the withdrawn routes are not generated, return 404 in the production preview, and are absent from RSS and the sitemap.
- After deployment, confirm the four withdrawn URLs return 404, inspect Search Console for their retirement, and verify the three retained articles remain discoverable.

## 2026-07-15

### A Working Theory Issue Pages And Archive

- Kept `/newsletter/` as the focused signup page, replaced its coming-soon state with the latest real issue, and added direct links to that issue and the complete archive.
- Added `/newsletter/archive/` as the reverse-chronological real-issue library and `/newsletter/issues/reliable-ai-workflows/` as the first canonical issue page with Article structured data, approved descriptive images, captions, topic metadata, and an in-context subscribe form.
- Added `/newsletter/archive-preview/` as a filled-state design surface with five clearly labeled sample entries. The route is `noindex, nofollow, noarchive`; samples are excluded from the real archive and do not have canonical issue pages.
- Chose a separate archive plus latest-issue proof on the signup page: current Buttondown, Mailchimp, MailerLite, Ghost, and Google guidance supports letting curious visitors sample recent work without turning the primary signup surface into an unbounded archive, while each real issue retains a crawlable URL.
- After deployment, verify the public issue and image URLs, canonical and robots metadata, sitemap membership, archive-to-issue links, signup forms, and mobile reading layout. Request indexing only for the real archive and issue URL, never the preview route.

## 2026-07-14

### A Working Theory Newsletter Page

- Added `/newsletter/` as the portfolio home for A Working Theory, with distinct title, description, canonical URL, Open Graph metadata, WebPage structured data, and a sitemap entry.
- Added the approved 1200 × 630 newsletter thumbnail and a quiet footer link so the page has a durable social preview and an internal discovery path without changing the primary navigation.
- Connected both subscribe calls to the verified Beehiiv publication at `hanifcarroll.beehiiv.com`; the portfolio page uses an explicit handoff because the Beehiiv account does not yet have an embeddable subscribe form.
- After deployment, verify the live route, canonical and social metadata, footer link, sitemap entry, and end-to-end Beehiiv signup handoff.

## 2026-07-12

### Technical Consulting Site Cutover

- Repositioned the homepage and shared site shell around technical consulting for founder-led businesses, using the approved Audit → Build → Ongoing engagement path and proof labels `Client work` and `Independent work`.
- Added `/services/`, `/services/business-systems-audit/`, `/services/business-systems-build/`, and `/services/ongoing-technical-partnership/` with distinct titles, descriptions, canonical URLs, proof, FAQs, and internal links.
- Removed the obsolete employment, MVP, and prior offer routes without redirects: `/work-with-me/`, `/mvp-launch/`, `/launch/`, `/automation-ai-agents/`, `/contract-product-engineer-one-pager/`, `/business-systems-audit/`, `/business-systems-build/`, and `/fractional-product-engineering/`.
- Removed the public resume and contract-product-engineer PDFs, and removed their source references so the site no longer presents employment-first conversion paths.
- Applied the HC Studio identity and current visual system across the shared header, footer, homepage, services pages, about page, project archive, and case-study surfaces.
- After deployment, verify the four service routes and their canonical metadata, confirm retired routes and PDFs return 404 without redirecting, inspect the generated sitemap, and review Search Console for newly indexed service pages and retired URL reports.

## 2026-07-10

### HablaBA Case Study And Video Refresh

- Reworked the existing `/projects/language-exchange/` page in place so the stable canonical URL now presents the product as HablaBA instead of the generic `Language Exchange Platform` title.
- Audited the public HablaBA repository at commit `caf27a21ca42beb5458cf843b7750cac6a28c039` and restored the earlier research record from portfolio commit `623514802f9e55d025fedf15129308081e600518`.
- Corrected the maintained stack to Laravel 12, Inertia 2, Vue 3, TypeScript, Reverb, PostgreSQL, Redis, and Docker. The architecture history now records the separate React Native/Expo and Flutter clients while keeping them distinct from the current maintained web surface.
- Added the original host-exchange wireflow plus distinct seeded Explore and private-chat proof. The public story explicitly describes a working beta, not a currently live service or a measured adoption result.
- Rebuilt the HablaBA HyperFrames source through the shared manifest pipeline. After human visual approval, rendered and promoted the 30-second overview, 12-second preview, responsive posters, and generation receipt at high quality.
- Fixed the video wrapper so unrelated HyperFrames skill-update notices do not block generation when the installed `general-video` hash still matches the repository pin, then reviewed and adopted the Figma-guidance-only `general-video` revision `67f3dae100541eed`.
- Verified with project metadata checks, 12 project-video tests, HyperFrames manifest/QA checks, lint, Astro check/build, built HTML and sitemap inspection, desktop/mobile browser QA, CTA navigation, and `git diff --check`.
- After deployment, verify the live title, canonical URL, social metadata, research wireflow, seeded product screens, project card, and final approved video assets.

## 2026-07-09

### Online Store Conversion Review Case Study

- Added `/projects/online-store-conversion-review/` as an anonymized, plain-language case study for an online skincare store review.
- Grounded the page in the current report: 5 findings, 7 fixes in order, 4 screenshot examples, 13 source links, 11 follow-up questions, and desktop/mobile speed results.
- Kept the report URL, owner name, private store data, and unverified sales claims out of the public page.
- Added the case study to the project archive only; homepage curation remains unchanged until there is approved client feedback or measured results from implemented changes.
- After deployment, verify the live route, archive card, sitemap entry, social preview image, and public copy.

### Health Services AI Search Case Study Plain-Language Pass

- Reviewed the current private audit project and updated `/projects/health-ai-search-audit/` so the public case study describes the work as a practical health-services AI-search audit, not as a technical implementation note.
- Kept the final evidence facts visible: 74 search-result rows, 33 browser-checked rows, 12 final retest rows, the remaining ChatGPT/Gemini gaps, and the private report with 9 action cards.
- Replaced public-facing workbook and portal wording with private action report wording, and kept homepage placement unchanged because this still proves delivery and evidence quality rather than client implementation or measured post-fix impact.
- Updated the archive-card title, description, detail-page framing, and generated preview image to lead with the user-facing story: where the health-services business appears in AI search, where it is missed, and what to fix next.
- After deployment, verify the live public portfolio page keeps the plain-language framing and does not expose protected URLs, credentials, or client-sensitive report details.

## 2026-07-08

### Health Services AI Search Audit Case Study Draft

- Added `/projects/health-ai-search-audit/` as a public-safe, anonymized case-study draft for health-services AI-search visibility audit work.
- Kept homepage curation unchanged while the protected Netlify workbook and evidence packet are still in progress; the page is available through the project archive instead.
- Added `docs/case-study-drafts/health-ai-search-audit.md` with update hooks and homepage-promotion criteria for when final workbook, prompt, source, and implementation evidence lands.
- Verified with `bun run check:projects`, `bun run format:check`, `git diff --check`, `bun run lint`, `bun run build`, built HTML inspection, and a public-safety grep for client names, thread IDs, local paths, and protected-password text.
- After deployment, verify the live project page, sitemap entry, and public-safe copy before requesting indexing.

### Health Services AI Search Evidence Packet Update

- Updated `/projects/health-ai-search-audit/` with the finalized evidence-packet counts: 74 total result rows, 33 Chrome-observed rows, and 12 new Chrome-observed rows from the final retest.
- Noted that Chrome-observed rows now cover every earlier manual follow-up prompt/platform pair, while retained manual rows are historical placeholders.
- Kept homepage curation unchanged; protected workbook delivery/update and any client outcome remain future update triggers.
- Verified with `bun run check:projects`, `bun run format:check`, `git diff --check`, `bun run lint`, `bun run build`, built HTML inspection, and a public-safety grep for client names, thread IDs, local paths, and protected-password text.
- After deployment, verify the live project page still uses public-safe anonymized copy and does not expose protected workbook credentials or client-sensitive details.

### Protected Audit Portal Review

- Reviewed the current protected audit repo and updated `/projects/health-ai-search-audit/` from "workbook update" framing to "protected Netlify action portal" framing.
- Added public-safe delivery details: generated static pages for overview, first fixes, next improvements, results, monthly testing, and appendix; 9 implementation task cards; Netlify Edge Function auth; signed `HttpOnly` session; and noindex/nofollow/noarchive headers.
- Kept homepage curation unchanged because this is delivery proof, not client implementation or measured post-fix impact.
- Verified the audit portal locally with its own `npm run build`, and verified the live protected response returns `HTTP/2 401` plus `X-Robots-Tag: noindex, nofollow, noarchive`.
- After deployment, verify the live public portfolio page keeps this anonymized and does not expose protected URLs, credentials, or client-sensitive report details.

## 2026-07-05

### Project Video Poster Loading

- Added responsive WebP poster variants for all project videos at 480w, 960w, and 1440w.
- Updated `/projects/` video cards to use the WebP poster `srcset`, prioritize only the lead poster image, and avoid loading video posters or preview metadata before interaction.
- Updated project detail videos to use WebP posters and `preload="none"`.
- Verified with `bun run check:projects`, `bun run format:check`, `git diff --check`, `bun run build`, built HTML inspection, and local Playwright request checks for `/projects/` and `/projects/palabruno/`.
- After deployment, verify the live `/projects/` page no longer streams PNG posters or preview MP4s on initial load.

### Agent Tools Catalog Cleanup

- Removed the placeholder `/tools/` catalog card for `next tools`.
- Verified with `bun run check:projects`, `bun run format:check`, `git diff --check`, and `bun run build`.
- After deployment, verify the live `/tools/` page no longer shows the `next tools` card.

## 2026-07-04

### Agent Tools Catalog Page

- Rebuilt `/tools/` as a catalog-first Agent Tools Library page with a prompt handoff panel, best-first-install cards, job filters, search, and a broader tool grid.
- Kept the shared site header and aligned the catalog hero typography with the rest of the site.
- Simplified tool cards to category, tool name, one sentence, and a single repository affordance; restored the older copy prompt text.
- Verified with `bun run check:projects`, `bun run format:check`, `git diff --check`, and `bun run build`.
- After deployment, verify the live `/tools/` page, prompt-copy interaction, filter/search behavior, and repository links.

## 2026-06-30

### Workflow Tool Repo Split

- Replaced the `/tools/` `cli-tools` entry with standalone `macos-automation-cli` and `granola-notes-cli` entries after splitting the old monorepo.
- Updated the `/tools/` lede to mention meeting-note retrieval explicitly.
- After deployment, verify the live `/tools/` page and confirm the new GitHub repository links resolve.

## 2026-06-29

### Workflow Tools And Case Study Copy Polish

- Demoted `/tools/` from the global navigation, renamed the page to `Workflow tools`, and linked it from `/projects/` under Smaller builds and studies.
- Revised the new case-study copy and metadata for Job Application Assistant, LinkedIn Tools, Codex Telegram Bridge, Agent Recall, and Client Feedback to read less like generated portfolio copy while preserving the technical proof.
- Updated `/work-with-me/` hero copy and aligned the offer cards so the card rows line up across desktop columns.
- Verified with `bun run check:projects`, `git diff --check`, `bun run build`, and browser smoke checks for `/projects/`, `/tools/`, `/work-with-me/`, and the five revised project pages.

## 2026-06-28

### Project Archive And Tools Expansion

- Added public case-study routes for `/projects/job-application-assistant/`, `/projects/linkedin-tools/`, `/projects/codex-telegram-bridge/`, `/projects/agent-recall/`, and `/projects/client-feedback/`.
- Added each new case study to project metadata, experiment ordering, project image mapping, repository CTAs, the project archive, and sitemap-generating content.
- Updated `/tools/` to mention `chatgpt-share-export`, `Folder Image Viewer`, and `Task Time Tracker`.
- GitHub visibility was verified in the project threads for the listed repositories, including newly public repos where needed.
- After deployment, verify the live case-study pages, repository CTAs, `/projects/`, `/tools/`, and sitemap entries, then request indexing for the pages that should become discoverable quickly.

### Business Systems Positioning And Offers

- Updated the homepage and `/work-with-me/` around business systems, custom software, workflow automation, and AI operations.
- Added `/business-systems-audit/` and `/business-systems-build/` offer pages using the shared service-offer template.
- Updated service-offer CTAs so each offer can use a more specific call label.
- After deployment, verify the live homepage, `/work-with-me/`, `/business-systems-audit/`, `/business-systems-build/`, and relevant service CTAs.

### Social Preview Card

- Replaced the default Open Graph/Twitter fallback image from the square headshot at `/img/avatar2.jpg` to a dedicated 1200x630 social card at `/img/social-card.jpg`.
- Designed and exported the card in Pencil with the headshot on the left and the requested identity text on the right.
- Added explicit default `og:image:width` and `og:image:height` values so crawlers can identify the image as a landscape share card.
- After deployment, test a fresh share scrape. WhatsApp may keep showing the prior cached preview until its URL cache refreshes.

### Homepage Hero Copy And CTA Refresh

- Updated the homepage hero to position Hanif as a full-stack product engineer building products, internal tools, automations, and AI workflows for growing teams.
- Changed the primary homepage hero CTA to `View resume` linking to `/Hanif-Carroll-Resume.pdf`, with `See case studies` kept as the secondary CTA.
- Verified with `bun run build` and confirmed the generated `dist/index.html` contains the updated hero copy, resume CTA, and case-studies CTA.
- After deployment, verify the live homepage hero and resume CTA.

### Resume PDF Replacement

- Replaced the public resume PDF at `/Hanif-Carroll-Resume.pdf` from the iCloud Downloads resume while preserving the stable public URL.
- Verified the copied asset by SHA-256: `cac4fff0d0712ca6c04c36c3f26959262a32616b983a0fd39014d10c1f02b950`.
- After deployment, re-check the live PDF hash and keep the resume PDF in the next Search Console page-row review.

## 2026-06-22

### Resume PDF Replacement

- Replaced the public resume PDF at `/Hanif-Carroll-Resume.pdf` from the iCloud Downloads resume while preserving the stable public URL.
- Verified the copied asset by SHA-256: `ed007e23c99e0ccc0adacc525bc03e17c0b09a69c7ce287476218353a8c4d393`.
- After deployment, re-check the live PDF hash and keep the resume PDF in the next Search Console page-row review.

### Product Engineer Positioning Refresh

- Updated the homepage hero around `Hanif Carroll | Product Engineer`, founder/team AI product launches, and 8+ years of web/mobile product experience.
- Rewrote the Palabruno, Genrupt, and Casamo homepage summaries with clearer outcomes and added a scannable `What I Work With` tech stack section.
- Expanded `/projects/palabruno/`, `/projects/genrupt/`, and `/projects/casamo/` around Problem / Context, Approach, Solution, Results / Impact, Tech Stack, and Visuals.
- Aligned `/about/` and the contact CTA with contract/project work through HC Studio.
- Verified with `bun run check:projects` and `bun run build`.
- After deployment, verify production HTML for `/`, `/about/`, `/projects/palabruno/`, `/projects/genrupt/`, and `/projects/casamo/`, then watch Search Console for homepage, Palabruno, Genrupt, and Casamo query movement.

## 2026-06-21

### Analytics Access Repair

- Reauthorized `gws` OAuth for `hanifcarroll@gmail.com` and added GA4/Search Console read scopes.
- Enabled the Google Analytics Data API on the OAuth project so GA4 API reads can run from local tooling.
- Verified live GA4 and Search Console API reads for 2026-06-14 through 2026-06-20 against 2026-06-07 through 2026-06-13.
- GA4 moved from 22 to 165 sessions, 17 to 160 users, 24 to 224 page views, 93 to 672 events, and 7 to 92 engaged sessions.
- Search Console moved from 8 clicks / 233 impressions to 6 clicks / 268 impressions. CTR moved from 3.43% to 2.24%, and average position held roughly flat at 17.0 to 16.8.
- Current top page rows: Genrupt 6 clicks / 59 impressions / 1.3 average position; homepage 0 clicks / 22 impressions / 4.5 average position; resume PDF 0 clicks / 190 impressions / 22.8 average position; `/launch/` 0 clicks / 4 impressions / 4.0 average position; Mucho Hangouts 0 clicks / 4 impressions / 6.0 average position.

## 2026-06-18

### Service Offer Page Split

- Split the mixed `/launch/` offer page into `/work-with-me/`, `/mvp-launch/`, and `/fractional-product-engineering/`.
- Kept `/launch/` as a 301 redirect to `/work-with-me/` so old links resolve without keeping the mixed page as the public destination.
- Retargeted service callout CTAs and `/automation-ai-agents/` toward the specific MVP or fractional offer pages.
- After deployment, verify the three new service URLs in production, confirm sitemap inclusion, and watch Search Console for `/launch/` redirect consolidation.

### Desarmadero Operations Prototype Case Study

- Added `/projects/desarmadero-operations-prototype/` as a forward-deployed product engineering case study for the anonymized auto-dismantling yard prototype.
- Kept the homepage case-study trio unchanged and added the new page to the `/projects/` Client work archive.
- Included direct demo and repository links, plus the public demo password, so the case study connects the portfolio page to the clickable prototype and source artifacts.
- Verified project metadata with `bun run check:projects` and production output with `bun run build`.
- After deployment, verify the live page, confirm it appears in the sitemap, and request indexing if the forward-deployed proof page should be discoverable quickly.

## 2026-05-27

### Blog Post Added

- Added `/blog/expensive-tokens-reward-good-architecture/` as a builder-facing post about AI token prices, model routing, and architecture as cost control.
- Verified the post metadata with the local Astro content schema and production build.
- After deployment, confirm the post appears in RSS and the sitemap, then request indexing if it should be discoverable quickly.

## 2026-05-18

### Casamo Case Study

- Added `/projects/casamo/` as a new case-study page and replaced Mucho Hangouts with Casamo in the homepage case-study trio.
- Generated a new Casamo project image and kept Mucho Hangouts available in the full case-study archive.
- Verified project metadata and production build locally. Recheck production HTML and request indexing after deployment.

### Performance Refresh

- Date range checked: 2026-05-07 through 2026-05-17. Weekly Search Console comparison used 2026-05-07 through 2026-05-13 against 2026-04-30 through 2026-05-06.
- Search Console property: `sc-domain:hanifcarroll.com`; GA4 property: `properties/484617236`.
- Search Console weekly web results: clicks moved from 0 to 1, impressions moved from 18 to 22, CTR moved from 0% to 4.5%, and weighted average position moved from 4.6 to 7.1.
- Search Console page rows: homepage moved from 0 clicks / 7 impressions to 1 click / 9 impressions, Genrupt moved from 7 to 14 impressions but average position fell from 3.0 to 8.9, `/launch/` moved from 1 to 4 impressions, resume PDF fell from 5 to 2 impressions, and Mucho Hangouts stayed at 3 impressions.
- Since the last check window, 2026-05-07 through 2026-05-17, GSC page totals were homepage 1 click / 23 impressions, Genrupt 18 impressions, `/launch/` 7 impressions, resume PDF 6 impressions, and Mucho Hangouts 5 impressions.
- Query visibility is still sparse. The only exposed query row was `genrupt`, with 4 impressions, 0 clicks, and average position 2.5.
- GA4 totals for 2026-05-07 through 2026-05-17: 49 sessions, 47 users, 56 page views, 209 events, 18 engaged sessions, 36.7% engagement rate, 64s average session duration, and 0 key events. The previous 2026-04-30 through 2026-05-06 window had 34 sessions, 31 users, 39 page views, 138 events, 12 engaged sessions, 35.3% engagement rate, 117s average session duration, and 0 key events.
- Channel notes: Direct moved from 22 to 34 sessions and 4 to 13 engaged sessions; Organic Social moved from 7 to 10 sessions but 6 to 4 engaged sessions; Organic Search moved from 5 to 4 sessions and 2 to 0 engaged sessions; Referral appeared with 1 engaged session.
- Event notes: GA4 recorded default engagement events plus 2 `click` events and 1 `file_download`; key events remained 0.
- Interpretation: visibility and total traffic are moving up, including the first Search Console click in this follow-up period, but organic search quality is not yet improving and the sample is still too small for keyword conclusions.

## 2026-05-08

### Positioning Cleanup

- Refocused the public offer language around MVP launches for nontechnical founders and fractional product engineering for founder-led teams.
- Updated homepage title/description/JSON-LD, shared header tagline, `/launch/`, `/projects/`, the one-pager route, service callouts, author/about copy, project-track labels, and selected project service metadata.
- Demoted AI/workflow-heavy work into supporting proof language instead of standalone service categories.
- Redirected `/automation-ai-agents/` to `/launch/#fractional`.

### Launch Page Metadata Polish

- De-slopified `/launch/` offer copy and tightened the meta description so MVP launches and fractional product engineering read as two separate offers.
- Verified with `bun run check:projects`, `bun run build`, and a 390px browser smoke for `/launch/`.
- After deployment, verify production `/launch/` metadata and watch Search Console for launch-page query movement in 3 to 6 weeks.

### Follow-Up Checks

- After deployment, verify production HTML for `/`, `/launch/`, `/projects/`, `/one-pager/`, and `/automation-ai-agents/`.
- Re-check Search Console in 3 to 6 weeks for homepage, launch page, Palabruno, Genrupt, and resume PDF query movement after the offer-language change.

## 2026-05-10

### Resume PDF Replacement

- Replaced the public resume PDF at `/Hanif_Carroll_Fullstack_AI_Engineer.pdf` from the newest iCloud Downloads resume while preserving the stable public URL.
- Verified the copied asset by SHA-256 and ran `bun run build`.
- After deployment, re-check the live PDF hash and keep the resume PDF in the next Search Console page-row review.

## 2026-04-29

### Search Console Baseline

- Property used: `sc-domain:hanifcarroll.com`.
- Last 90 days: 7 clicks, 160 impressions, 4.37% CTR, average position 5.9.
- Query signals worth acting on:
  - `genrupt`: 2 clicks, 7 impressions, average position 2.1.
  - `hanif ai`: 0 clicks, 9 impressions, average position 5.9.
  - `mucho hangouts`: 0 clicks, 10 impressions, average position 7.0.
- Page signals worth acting on:
  - `/`: 4 clicks, 87 impressions, average position 5.2.
  - `/projects/genrupt/`: 2 clicks, 54 impressions, average position 5.7.
  - `/Hanif_Carroll_Fullstack_AI_Engineer.pdf`: 1 click, 31 impressions, average position 8.3.
  - `/projects/mucho-hangouts/`: 0 clicks, 22 impressions, average position 6.1.

### Changes Shipped

- Reframed the homepage title around `AI Product Engineer`, `MVPs`, and `Automation` while keeping the page copy aligned with the founder-facing positioning.
- Updated the homepage meta description to state the concrete offer: focused MVPs, workflow automation, useful AI systems, and no agency overhead.
- Added homepage `Person` and `WebSite` JSON-LD structured data.
- Added project-level SEO title and description fields so case studies can have search-oriented metadata without changing visible project titles.
- Updated Genrupt metadata around `AI Creative Ops for Amazon Sellers`.
- Updated Mucho Hangouts metadata around `Social Events Platform`.
- Added short extractable answer blocks at the top of the Genrupt and Mucho Hangouts case studies.
- Added `CreativeWork` JSON-LD to case study pages.

### Follow-Up Checks

- Re-check Search Console after 3 to 6 weeks, especially `hanif ai`, `genrupt`, and `mucho hangouts`.
- If the resume PDF keeps earning impressions for commercial positioning queries, decide whether to keep it indexable or make the HTML pages stronger and de-emphasize the PDF.
- Do not start a broad SEO content push until the pages Google is already testing have cleaner search appearance data.

### Indexing Requests

- Verified production HTML after deploy for `/`, `/projects/genrupt/`, and `/projects/mucho-hangouts/`.
- Requested indexing in Google Search Console for all three URLs.
- Search Console accepted each request with: URL was added to a priority crawl queue.

## 2026-05-03

### Search Console Refresh

- GSC inspection shows `/`, `/projects/genrupt/`, and `/projects/mucho-hangouts/` are `Submitted and indexed`.
- Google last crawled `/projects/genrupt/` on 2026-04-30 01:09, `/` on 2026-04-30 01:10, and `/projects/mucho-hangouts/` on 2026-04-30 01:30.
- Last 7 days:
  - `genrupt`: 0 clicks, 2 impressions, average position 2.0.
  - `/`: 0 clicks, 6 impressions, average position 5.0.
  - `/projects/genrupt/`: 0 clicks, 3 impressions, average position 2.0.
  - `/projects/mucho-hangouts/`: 0 clicks, 2 impressions, average position 5.0.
- Last 28 days:
  - `/`: 1 click, 13 impressions, 7.69% CTR, average position 4.5.
  - `/projects/genrupt/`: 0 clicks, 16 impressions, average position 3.1.
  - `/projects/mucho-hangouts/`: 0 clicks, 7 impressions, average position 6.7.
  - `genrupt`: 0 clicks, 4 impressions, average position 1.5.
  - `mucho hangouts`: 0 clicks, 3 impressions, average position 8.3.
- Last 90 days changed from the 2026-04-29 baseline:
  - `/`: 4 clicks, 90 impressions, average position 5.2, up from 87 impressions.
  - `/projects/genrupt/`: 2 clicks, 57 impressions, average position 5.5, up from 54 impressions and position 5.7.
  - `/projects/mucho-hangouts/`: 0 clicks, 24 impressions, average position 6.0, up from 22 impressions and position 6.1.
  - Resume PDF: 1 click, 37 impressions, average position 7.5, up from 31 impressions and position 8.3.

### GA4 Refresh

- Date range: 2026-04-29 through 2026-05-03.
- 20 sessions, 18 users, 26 page views, 7 engaged sessions, 0 conversions.
- Previous comparable window, 2026-04-24 through 2026-04-28: 34 sessions, 29 users, 42 page views, 4 engaged sessions, 0 conversions.
- Channel mix:
  - Direct: 14 sessions, 12 users, 14 page views, 4 engaged sessions.
  - Organic Social: 4 sessions, 4 users, 4 page views, 2 engaged sessions.
  - Organic Search: 2 sessions, 2 users, 8 page views, 1 engaged session.
- Organic search sessions:
  - `google / organic` landed on `/`: 1 session, 7 page views, 1 engaged session.
  - `bing / organic` landed on `/blog/choosing-a-backend-in-2026/`: 1 session, 1 page view, 0 engaged sessions.
- Event names recorded in the window: `page_view`, `session_start`, `first_visit`, `user_engagement`, and `scroll`. No `book_call_clicked` events appeared.

### Interpretation

- The implementation and indexing steps worked: Google recrawled the three priority URLs on 2026-04-30 and still reports them indexed.
- Search Console has too little new search volume to judge CTR impact yet.
- The resume PDF continues to gain impressions and should stay on the watch list because it may compete with the homepage for professional positioning queries.
- GA4 is still too low-volume for conversion conclusions, but organic search produced one deeper homepage session after the changes.

## 2026-05-04

### Changes Shipped

- Reframed the homepage and shared header around `Product Engineer, Full Stack + AI` plus `Founder-led SaaS from idea to launch`.
- Added a homepage proof strip, recruiter evidence links, and earlier path selection before case-study rows.
- Reordered visible proof toward Palabruno, Genrupt, and Mucho Hangouts, with Desarmadero moved to supporting project proof.
- Fixed RSS item links from `/undefined/` to `/blog/{slug}/`.
- Filtered `/hero-lab/` and `/automation-ai-agents/` out of the generated sitemap, and marked `/hero-lab/` noindex.
- Added project-detail proof snapshots, early live/repository actions, blog `BlogPosting` JSON-LD, RSS alternate metadata, and shared skip-link/focus accessibility hooks.

### Verification

- `bun run check:projects` passed and caught no remaining project JSON, case-study, or asset-path drift.
- `bun run build` passed.
- Generated `dist/rss.xml` contains blog URLs, and generated `dist/sitemap-0.xml` no longer lists `/hero-lab/` or `/automation-ai-agents/`.

### Follow-Up Checks

- After deployment and cache propagation, verify production HTML for `/`, `/projects/palabruno/`, `/projects/`, and `/rss.xml`.
- Re-check Search Console in 3 to 6 weeks for homepage, resume PDF, Palabruno, Genrupt, and Mucho Hangouts query movement.

## 2026-05-07

### Weekly Performance Refresh

- Date range compared: 2026-04-30 through 2026-05-06 against 2026-04-23 through 2026-04-29.
- Search Console property: `sc-domain:hanifcarroll.com`; GA4 property: `properties/484617236`.
- Search Console web results: 0 clicks in both windows; impressions increased from 12 to 18; CTR stayed at 0%; weighted average position moved from 2.8 to 4.6.
- Search query visibility remained too sparse for keyword conclusions. The only exposed query row was `genrupt`, with 2 impressions in both windows and average position improving from 2.0 to 1.5.
- Search Console page rows: homepage impressions increased from 3 to 7, Genrupt moved from 8 to 7, resume PDF moved from 1 to 5, Mucho Hangouts moved from 0 to 3, and `/launch/` moved from 0 to 1.
- GA4 totals: sessions moved from 45 to 34, total users from 37 to 31, page views from 55 to 39, and event count from 168 to 138.
- GA4 engagement improved despite lower volume: engaged sessions moved from 7 to 12, engagement rate from 15.6% to 35.3%, and average session duration from 61s to 117s.
- Channel notes: Direct sessions fell from 30 to 22; Organic Search moved from 6 to 5 sessions but improved from 0 to 2 engaged sessions; Organic Social moved from 8 to 7 sessions and improved from 3 to 6 engaged sessions.
- Key events remained 0 in both windows. The event report showed default engagement events plus `click`, but no conversion/key-event signal fired.
- Interpretation: search impressions are up but still too small to judge SEO impact, while traffic quality improved in GA4. Re-check next week after the May homepage edits have a full clean comparison window.

## 2026-06-29

### Copy Change

- Replaced the service offer work-sample eyebrow from `Proof` to `Selected Work`.
- Reworded the service offer work-sample headings from `Relevant ... proof` to project-oriented headings.

### Verification

- `bun run build` passed.
- `bun run check:projects` passed.
- `git diff --check` passed.
- `git diff --check` passed.
- Built service offer pages show the updated work-sample labels and no longer render the old `Relevant ... proof` headings.

## 2026-06-30

### Blog Post

- Added `/blog/ai-makes-open-source-more-important-not-less/` as a new indexable blog post about AI making reliable open-source building blocks more valuable.
- Renamed the public blog surface from `Notes` to `Blog` and made each blog index entry a full clickable link without the `Read note` CTA.

### Verification

- `bun run build` passed.
- `git diff --check` passed for the changed blog, layout, head, CSS, and SEO log files.
- Built HTML includes the post title, canonical URL, meta description, `BlogPosting` JSON-LD, Blog index entry, RSS item, and sitemap URL.
- Built blog index renders full-entry links and no longer renders the `Read note` CTA.

## 2026-07-01

### Homepage Simplification

- Removed the homepage tech-stack section, homepage project metadata labels, and the homepage Point of View snippet.
- Deleted the `/point-of-view/` page source and removed internal links to that route from shared layout navigation and the About page.

### Verification

- `bun run build` passed and generated 41 pages, with `/point-of-view/` absent from the route list.
- Built output no longer includes `dist/point-of-view/index.html`.

## 2026-07-04

### Navigation

- Restored `/tools/` to the shared header navigation so the tools library is discoverable from desktop and mobile menus.
- Updated the `/tools/` page title and meta/hero description around the agent tools library framing.
- Removed non-agent-facing entries from `/tools/` and rewrote the remaining descriptions to emphasize agent workflow benefits.
- Removed `codex-telegram-bridge` and `transcribe-audio` from `/tools/`, added `site-capture` and `social-read`, and verified Apartment Finder remains available as a project case study.
- Added a second `/tools/` hero paragraph plus a copyable prompt for visitors to ask their own agent which tools fit their work.
- Restyled the copyable `/tools/` prompt as a markdown-style code block and fixed the copy button width across copied-state label changes.
- Removed the nested prompt-card treatment and moved the copy action to a fixed-size icon button inside the code block.
- Added the `Here's a prompt to get you started:` sentence and animated the copy icon into a checkmark after successful copy.
- Added line breaks to the copyable prompt so the code block and copied text are easier to scan.
- Removed the final `If none fit, say so.` line from the copyable prompt.

### Verification

- `bun run build` passed.
- `git diff --check` passed.
- Browser single-code-block/copy-icon/checkmark-animation/line-break check passed against the built `/tools/` page with Playwright and local Chrome.

## 2026-07-13

### Genrupt Milestone

- Updated the Genrupt case study, supporting site copy, project metadata, and embedded project video from the first 100 to the first 200 paying customers.

### Verification

- `bun run check:projects`, `bun run videos:validate`, video QA, and `bun run build` passed.
- The rendered 47-second overview video shows `200 first paying customers` in the result scene.

## 2026-07-16

### Homepage Structure

- Added a Genrupt result inside the hero so the homepage establishes concrete client proof without separating it from the positioning and primary actions.
- Replaced the detailed service comparison matrix with three concise engagement paths, keeping commercial context and links to the full service pages.
- Reduced the working-together section from four steps to three so it reinforces the delivery method after the case studies without repeating the service explanation.
- Updated the canonical homepage copy deck to match the implemented structure and current 200-customer Genrupt milestone.

### Verification

- `bun run check:projects` passed.
- `bun run build` passed with 0 errors, warnings, or hints and generated 43 pages.
- Desktop and 390px mobile browser reviews confirmed the new proof, service, project, and method sequence without layout overflow.

### Homepage Conversion Path

- Changed the homepage and shared calls to action to describe the real next step as a 30-minute Business Systems Audit fit call rather than the audit itself.
- Reframed the hero around finding and fixing difficult workflows before choosing software, and added the audit starting price beside the first conversion point.
- Made the Business Systems Audit the recommended starting point, added a second booking opportunity after the service paths, and kept Build and Ongoing Partnership as later paths once the workflow is clear.
- Reduced homepage proof from four projects to two consulting examples, replaced conceptual paper-system images with real product artifacts, kept one founder testimonial, added concise audit objection handling, and removed the repeated About section.

### Verification

- `bun run check:projects`, `bun run lint`, `bun run build`, and `git diff --check` passed.
- Desktop and 390px mobile browser reviews confirmed the revised hero, Audit-first service hierarchy, mid-page booking CTA, real project artifacts, founder testimonial, process, and FAQ with no horizontal overflow.
- Verified the new mid-page CTA resolves to the live 30-minute Business Systems Audit Fit Call on Cal.com.
