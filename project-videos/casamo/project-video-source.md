# Project Video Source

This is the source of truth for the Casamo product walkthrough video. The video should explain the problem, decision support workflow, and result to a nontechnical viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Casamo

Repository: private founder-owned product

Local repo: `/Users/hanifcarroll/projects/casamo`

Portfolio page source: `src/content/case-studies/casamo.mdx`

Project metadata: `src/lib/projects/casamo.json`

Primary viewer: nontechnical portfolio viewer or product/customer viewer

Target duration: `41-42s`

Video type: product walkthrough video

Story mode: Product walkthrough

## Plain Story

Problem: remote workers booking 2-8 week furnished stays face a high-trust decision with low-trust marketplace data.

Solution: Casamo scans candidate listings against photos, amenities, reviews, missing proof, and trip must-haves.

Result: the traveler gets one recommended stay, two backups, visible evidence, concerns, and the host questions to ask before booking.

## One-Line Job

Casamo helps remote workers choose long-stay accommodations by checking listing evidence and returning a ranked stay report.

## Viewer Takeaway

This is a founder-owned product that turns a noisy stay search into a bookable shortlist with evidence, tradeoffs, and host questions.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Remote workers
- Long-stay bookings
- Marketplace filters
- Photos
- Amenities
- Reviews
- Missing proof
- Host questions
- Recommended stay
- Backups
- Trip Scan Pass
- Saved reports

Do not show:

- `TanStack Start`
- `PostgreSQL`
- `Redis`
- `BullMQ`
- `Stripe`
- `Better Auth`
- `OpenAI`
- `Playwright`
- `Browserbase`
- `PostHog`
- API endpoints
- Background job names
- Test counts
- Command output
- Client language

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                 | What it supports in plain language                                                                                                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/content/case-studies/casamo.mdx:36-43`            | Casamo is for remote workers booking furnished stays for weeks at a time, and it turns noisy marketplace search into a ranked report.                                          |
| `src/content/case-studies/casamo.mdx:47-55`            | The useful wedge is smaller than broad travel planning: check a shortlist across marketplaces and show which stays have enough evidence to trust.                              |
| `src/content/case-studies/casamo.mdx:59-70`            | Casamo leads with evidence and makes the report decision-first, with a paid Trip Scan Pass as the first commercial wedge.                                                      |
| `src/content/case-studies/casamo.mdx:73-85`            | The workflow collects trip needs, checks Airbnb and Booking.com options, saves reports, and preserves claims, evidence, concerns, and host questions.                          |
| `src/content/case-studies/casamo.mdx:91-96`            | Casamo is live as a focused MVP with automated scans, saved reports, payments, usage limits, analytics, and a clearer path from search to a stay worth checking with the host. |
| `src/lib/projects/casamo.json:32-58`                   | Metadata confirms the problem, solution, commercial loop, report contents, and founder-style product path.                                                                     |
| `src/assets/img/projects/casamo-homepage-viewport.jpg` | Public portfolio screenshot shows the stay-search form and audit priorities.                                                                                                   |
| `https://casamo.app/`                                  | Public current homepage describes trip needs, photo/amenity/review scans, a shortlist, and host questions.                                                                     |
| `https://casamo.app/sample-report`                     | Public sample report shows supported evidence, details needing confirmation, host questions, and backup options.                                                               |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                      | Source path, URL, or command                                                  | Safe to show?                         | On-screen? |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------- | ---------- |
| Problem              | Marketplace filters can claim Wi-Fi, workspace, kitchen, or laundry without proving long-stay fit.                               | `src/content/case-studies/casamo.mdx`; `src/lib/projects/casamo.json`         | Yes, as simplified text               | Yes        |
| Input                | Destination, dates, guests, budget, and must-haves enter the scan.                                                               | `src/assets/img/projects/casamo-homepage-viewport.jpg`; `https://casamo.app/` | Yes, public product surface           | Yes        |
| Product action       | Casamo checks photos, listing details, amenities, reviews, missing proof, and host questions.                                    | `src/content/case-studies/casamo.mdx`; `https://casamo.app/sample-report`     | Yes, as public sample-report concepts | Yes        |
| Durable output       | The report returns one recommended stay and two backups.                                                                         | `src/lib/projects/casamo.json`; public OG report preview                      | Yes, public sample preview            | Yes        |
| Saved record         | Reports save so the traveler can return while deciding.                                                                          | `src/content/case-studies/casamo.mdx`; `src/lib/projects/casamo.json`         | Yes, as simple label                  | Yes        |
| Guardrail or warning | Missing proof and host questions stay visible instead of being hidden.                                                           | `src/content/case-studies/casamo.mdx`; `https://casamo.app/sample-report`     | Yes                                   | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, project checks, build, and feedback are required for this video. | `docs/project-videos/capture-and-production-workflow.md`                      | Yes                                   | No         |
| Reviewer path        | Portfolio case study and metadata explain the founder-owned product path.                                                        | `src/content/case-studies/casamo.mdx`; `src/lib/projects/casamo.json`         | Yes                                   | No         |

## Selected Story

1. Long-stay bookings are hard to trust when filters do not prove the stay.
2. Remote workers need evidence before they pay.
3. Casamo collects destination, dates, budget, and must-haves.
4. Casamo keeps the audit checkable by preserving signals, concerns, missing proof, and host questions.
5. The report gives one recommended stay, two backups, and a clear host question.
6. Casamo is a focused founder-owned product with paid scans, saved reports, and auditable recommendations.

## Scene Cards

### Scene 1: Problem

Purpose: show why the product exists.

Viewer should understand: long-stay bookings require more trust than marketplace labels provide.

Visual source: public Casamo homepage screenshot and native filter cards.

On-screen text:

```text
Long-stay bookings are hard to trust.
Marketplace filters do not prove the stay.
```

Narration: none

Duration: `6.5s`

Proof shown: problem from case study and metadata.

Asset path: `hyperframes/assets/casamo-homepage-viewport.jpg`

Motion notes: screenshot enters as the proof anchor; filter cards appear as unproven claims.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 2: Decision Support

Purpose: make the decision support need concrete.

Viewer should understand: the buyer needs evidence before paying for weeks of living and working.

Visual source: public sample report apartment image plus evidence cards.

On-screen text:

```text
Remote workers need evidence before paying.
Photos, amenities, reviews, and gaps matter.
```

Narration: none

Duration: `6.5s`

Proof shown: case-study explanation and sample-report evidence categories.

Asset path: `hyperframes/assets/casamo-report-studio.webp`

Motion notes: apartment proof image settles; evidence cards assemble around it.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 3: Intake

Purpose: show the start of the product workflow.

Viewer should understand: Casamo starts from trip needs, not a generic search page.

Visual source: public portfolio homepage screenshot cropped around the form.

On-screen text:

```text
Casamo scans a shortlist for practical fit.
Enter destination, dates, budget, and must-haves.
```

Narration: none

Duration: `6.5s`

Proof shown: homepage product surface and case-study intake description.

Asset path: `hyperframes/assets/casamo-homepage-intake.jpg`

Motion notes: form window enters with trip-need chips and a scan rail.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 4: Audit Workflow

Purpose: explain what makes the recommendation trustworthy.

Viewer should understand: the report keeps evidence, concerns, missing proof, and host questions visible.

Visual source: native report cards backed by public sample-report language.

On-screen text:

```text
The audit keeps the decision checkable.
Strong signals, concerns, missing proof, and host questions stay visible.
```

Narration: none

Duration: `6.5s`

Proof shown: sample report and case-study report workflow.

Asset path: native HyperFrames cards plus `hyperframes/assets/casamo-report-studio.webp`

Motion notes: status cards and host-question card assemble after the report image.

Reading-speed check: `16` words over `6.5s` = `148 WPM`.

### Scene 5: Result

Purpose: show the decision output.

Viewer should understand: the user gets a ranked result and a clear next question.

Visual source: public Casamo OG/sample report preview.

On-screen text:

```text
One recommended stay. Two backups.
The next question to ask the host is clear.
```

Narration: none

Duration: `6.5s`

Proof shown: report preview with top pick, runner-up, backup, and supported evidence labels.

Asset path: `hyperframes/assets/casamo-shortlist-result.png`

Motion notes: report preview lands as the payoff; result chips enter after it settles.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

### Scene 6: Product State

Purpose: close with the founder-owned product result.

Viewer should understand: Casamo is not client work; it is a focused product with a paid scan loop and saved report.

Visual source: native product-state cards backed by case study and metadata.

On-screen text:

```text
Casamo is a focused founder-owned product.
Paid scans, saved reports, and auditable recommendations.
```

Narration: none

Duration: `6.5s`

Proof shown: case-study result, metadata delivery highlights, and public pricing language.

Asset path: `hyperframes/assets/casamo-end-result.png`

Motion notes: paid scan and saved report cards assemble, then the end card holds for 3 seconds.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Casamo
Noisy search to bookable shortlist.
```

Duration: `3s`

Motion notes: hold the final product surface, bring in the end card, then use a short soft fade after the hold.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                                              | Word count | Duration | WPM |
| ----- | ----------------------------------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Long-stay bookings are hard to trust. Marketplace filters do not prove the stay.                                  |         13 |     6.5s | 120 |
| 2     | Remote workers need evidence before paying. Photos, amenities, reviews, and gaps matter.                          |         12 |     6.5s | 111 |
| 3     | Casamo scans a shortlist for practical fit. Enter destination, dates, budget, and must-haves.                     |         13 |     6.5s | 120 |
| 4     | The audit keeps the decision checkable. Strong signals, concerns, missing proof, and host questions stay visible. |         16 |     6.5s | 148 |
| 5     | One recommended stay. Two backups. The next question to ask the host is clear.                                    |         14 |     6.5s | 129 |
| 6     | Casamo is a focused founder-owned product. Paid scans, saved reports, and auditable recommendations.              |         14 |     6.5s | 129 |
| End   | Casamo. Noisy search to bookable shortlist.                                                                       |          6 |       3s | 120 |

Allowed short labels:

- Problem
- Evidence
- Intake
- Audit
- Result
- Product loop
- Wi-Fi
- Workspace
- Kitchen
- Photos
- Amenities
- Reviews
- Missing proof
- Host questions
- Top pick
- Backups
- Trip Scan Pass
- Saved report

## Asset Manifest

| Asset                          | Purpose                                | Source                                                                           | Redaction needed?              | Final path                                                              |
| ------------------------------ | -------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------- |
| `casamo-homepage-viewport.jpg` | Homepage and intake proof surface      | `src/assets/img/projects/casamo-homepage-viewport.jpg`                           | No, public portfolio asset     | `project-videos/casamo/hyperframes/assets/casamo-homepage-viewport.jpg` |
| `casamo-homepage-intake.jpg`   | Local alias for intake scene           | `src/assets/img/projects/casamo-homepage-viewport.jpg`                           | No, public portfolio asset     | `project-videos/casamo/hyperframes/assets/casamo-homepage-intake.jpg`   |
| `casamo-homepage-final.jpg`    | Local alias for final product surface  | `src/assets/img/projects/casamo-homepage-viewport.jpg`                           | No, public portfolio asset     | `project-videos/casamo/hyperframes/assets/casamo-homepage-final.jpg`    |
| `casamo-stay-audit-og.png`     | Public report preview proof            | `https://casamo.app/images/og/casamo-stay-audit.png`                             | No, public product image       | `project-videos/casamo/hyperframes/assets/casamo-stay-audit-og.png`     |
| `casamo-shortlist-result.png`  | Local alias for result scene           | `https://casamo.app/images/og/casamo-stay-audit.png`                             | No, public product image       | `project-videos/casamo/hyperframes/assets/casamo-shortlist-result.png`  |
| `casamo-end-result.png`        | Local alias for end scene              | `https://casamo.app/images/og/casamo-stay-audit.png`                             | No, public product image       | `project-videos/casamo/hyperframes/assets/casamo-end-result.png`        |
| `casamo-report-studio.webp`    | Public sample apartment evidence image | `https://casamo.app/images/home/sample-report/recommended-courtyard-studio.webp` | No, public sample-report image | `project-videos/casamo/hyperframes/assets/casamo-report-studio.webp`    |
| `casamo-report-audit.webp`     | Local alias for audit scene            | `https://casamo.app/images/home/sample-report/recommended-courtyard-studio.webp` | No, public sample-report image | `project-videos/casamo/hyperframes/assets/casamo-report-audit.webp`     |

## Privacy Check

Hide:

- Private accounts
- Customer data
- Payment details
- Analytics
- Background jobs
- Tokens or local paths
- Non-public listing data

Safe to show:

- Public portfolio image
- Public sample-report image
- Public OG report preview
- Public Casamo name
- Public Trip Scan Pass framing
- Simple workflow labels

Synthetic data used: native HyperFrames cards use plain labels for the audit and shortlist states instead of private runtime data.

Redaction notes: no private data was captured. The selected assets are already public product or portfolio assets.

## HyperFrames Handoff

Composition duration: `42s`

Aspect ratio: `1920x1080`

Scenes to build:

1. Problem
2. Decision Support
3. Intake
4. Audit Workflow
5. Result
6. Product State with ending beat

Assets to copy into `hyperframes/assets/`:

- `casamo-homepage-viewport.jpg`
- `casamo-homepage-intake.jpg`
- `casamo-homepage-final.jpg`
- `casamo-stay-audit-og.png`
- `casamo-shortlist-result.png`
- `casamo-end-result.png`
- `casamo-report-studio.webp`
- `casamo-report-audit.webp`

Required transitions:

- Push slide for adjacent steps
- Blur crossfade for audit and result reveals
- Soft final fade after the end-card hold

Required callouts:

- Evidence cards
- Trip need chips
- Audit status cards
- Result chips
- Product loop cards

Thumbnail frame: `34.8s`, after the final scene is visible but before the end card.

## Acceptance Checklist

- [x] The video explains the problem, solution, and result.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
