# Health Services AI-Search Audit Case Study Draft Notes

## Work Item

Draft a public-safe portfolio case study for a health-services AI-search audit now that the final evidence packet is complete and the protected Netlify action portal has been reviewed.

## Desired Outcome

- Public case-study route: `/projects/health-ai-search-audit/`
- Public framing: `Helping a Health Services Startup Show Up in AI Search`
- Site placement now: project archive only
- Site placement later: homepage only if follow-up, screenshot, implementation, or before/after evidence creates a stronger signal than the current homepage case studies

## Acceptance Criteria

- The case study is honest that the evidence packet and protected action portal are delivery proof, while client outcomes are separate.
- The public copy avoids passwords, protected URLs, private client details, and unverified impact claims.
- The story emphasizes reusable systems: public-source inspection, search-question tests, evidence packets, implementation cards, private report delivery, and update hooks.
- The project can be promoted later with small edits to metadata, MDX, and homepage curation.

## Homepage Placement Recommendation

Do not place it on the homepage yet.

It belongs in `/projects/` now because it is useful proof of diagnostic AI-search work. Homepage placement should still wait because the strongest homepage signals are not the raw evidence counts or protected portal mechanics; they are implementation and outcome proof.

- There is a public-safe screenshot or redacted portal artifact that is stronger than the generated preview.
- There is a concrete follow-up result: client used the private report, approved implementation tasks, requested implementation help, or gave a quote.
- There is a before/after signal from implemented fixes, such as richer AI citations, corrected schema coverage, cleaner crawl behavior, or a measured answer-visibility improvement.

If it becomes homepage-worthy, add `health-ai-search-audit` to `HOMEPAGE_CASE_STUDY_SLUGS` in `src/lib/project-curation.ts` and add the matching card copy to `caseStudyBySlug` in `src/pages/index.astro`. The likely placement would be the fourth case-study row or the first item in `additionalWork`, depending on whether the final proof is stronger than the current Desarmadero Operations row.

## Final Evidence Counts

- `results.csv`: 74 total result rows.
- Chrome-observed rows: 33.
- Final retest additions: 12 new Chrome-observed rows.
- New final retest coverage: ChatGPT Search 7 rows, Gemini 2 rows, Google AI Mode / AI Overview 3 rows.
- Manual-gap status: Chrome-observed rows now cover every old `manual_observation_needed` prompt/platform pair; retained manual rows are historical placeholders.
- Key findings: ChatGPT still misses generic Spanish Buenos Aires home blood-test intent; Gemini still misses Spanish Medellin sexual-health intent; Google and ChatGPT now cite the company for several Medellin, brand, and entity gaps.

## Protected Portal Review

- The audit project now builds a generated static Netlify action portal, not only a standalone workbook.
- Portal sections reviewed: overview, first fixes, next improvements, results, monthly testing, and appendix.
- The source imports the final evidence packet and exposes 9 implementation task cards.
- The deployed response is protected and returns `HTTP/2 401` with `X-Robots-Tag: noindex, nofollow, noarchive`.
- Do not publish the protected URL or credentials in the portfolio.

## Update Hooks

Update `src/lib/projects/health-ai-search-audit.json` and `src/content/case-studies/health-ai-search-audit.mdx` after there is a real client/implementation outcome:

- Replace the generated preview image if there is a stronger public-safe portal screenshot.
- Add a short result section if the Thursday follow-up produced a concrete next step.
- Add before/after visibility or implementation metrics only if recommendations are actually implemented and rechecked.
- Keep the public title anonymized unless the founder explicitly approves naming the company.

## Risk Notes

- Do not overclaim client impact before implementation or follow-up results exist.
- Do not expose the private report password, private GitHub repo details, or sensitive health-service specifics.
- Treat AI-answer mentions as sampled observations, not a durable ranking guarantee.

## Verification Plan

- `bun run check:projects`
- `bun run format:check`
- `git diff --check`
- `bun run lint`
- `bun run build`
