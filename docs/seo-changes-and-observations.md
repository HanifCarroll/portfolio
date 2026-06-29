# SEO Changes and Observations

This file tracks Search Console observations, SEO decisions, and follow-up checks for hanifcarroll.com.

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
