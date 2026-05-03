# SEO Changes and Observations

This file tracks Search Console observations, SEO decisions, and follow-up checks for hanifcarroll.com.

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
