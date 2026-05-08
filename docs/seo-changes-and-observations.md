# SEO Changes and Observations

This file tracks Search Console observations, SEO decisions, and follow-up checks for hanifcarroll.com.

## 2026-05-08

### Positioning Cleanup

- Refocused the public offer language around MVP launches for nontechnical founders and fractional product engineering for founder-led teams.
- Updated homepage title/description/JSON-LD, shared header tagline, `/launch/`, `/projects/`, the one-pager route, service callouts, author/about copy, project-track labels, and selected project service metadata.
- Demoted AI/workflow-heavy work into supporting proof language instead of standalone service categories.
- Redirected `/automation-ai-agents/` to `/launch/#fractional`.

### Follow-Up Checks

- After deployment, verify production HTML for `/`, `/launch/`, `/projects/`, `/one-pager/`, and `/automation-ai-agents/`.
- Re-check Search Console in 3 to 6 weeks for homepage, launch page, Palabruno, Genrupt, and resume PDF query movement after the offer-language change.

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
