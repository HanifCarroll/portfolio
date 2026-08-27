# Project Video Source

This is the source of truth for the Casamo product walkthrough. The video must follow the current product story: qualified choices with visible evidence, not one universal winner.

## Project

Project name: Casamo

Local repo: `/Users/hanifcarroll/projects/casamo`

Portfolio page source: `src/content/case-studies/casamo.mdx`

Project metadata: `src/lib/projects/casamo.json`

Primary viewer: nontechnical portfolio viewer or product/customer viewer

Target duration: `42s`

## Plain Story

Problem: remote workers booking furnished stays for several weeks cannot rely on marketplace labels alone.

Solution: Casamo searches Airbnb and Booking.com or checks 2–10 exact listing links, then tests each stay against the traveler's must-haves.

Result: only qualified stays reach the shortlist. Each requirement keeps its support, contradiction, gap, or host question visible.

## One-Line Job

Casamo checks long-stay listings against explicit requirements and returns qualified choices with visible evidence.

## Language Rules

Use:

- Long stay
- Must-haves
- Exact listings
- Qualified choices
- Supporting evidence
- Needs confirmation
- Contradicted
- Not evaluated
- Host questions

Do not use:

- Top pick
- Recommended stay
- Runner-up
- Backups
- Best stay
- Universal winner
- Retired stack names
- API or background-job terminology

## Source Review Notes

| Source                                               | What it supports                                                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/casamo.mdx`                | Current intake, qualification rule, evidence states, host questions, saved reports, plans, and failure-credit behavior. |
| `src/lib/projects/casamo.json`                       | Current positioning, solution, results, stack, and delivery highlights.                                                 |
| `src/assets/img/projects/casamo-stay-scan.png`       | Search-both-sites and compare-exact-links intake.                                                                       |
| `src/assets/img/projects/casamo-ranked-report.png`   | Qualified choices, audit coverage, and equal comparison space.                                                          |
| `src/assets/img/projects/casamo-evidence-detail.png` | Requirement statuses and the source material behind them.                                                               |

## Proof Inventory

| Proof type     | Exact proof                                                                            | On-screen? |
| -------------- | -------------------------------------------------------------------------------------- | ---------- |
| Problem        | Marketplace filters do not prove whether a stay meets long-term requirements.          | Yes        |
| Intake         | Travelers can search Airbnb and Booking.com or compare 2–10 exact listing links.       | Yes        |
| Qualification  | A listing stays off the shortlist when it fails a required priority.                   | Yes        |
| Output         | When enough stays qualify, Casamo returns 6–10 choices and gives each one equal space. | Yes        |
| Evidence       | Requirements link to photos, amenities, listing details, or reviews.                   | Yes        |
| Honest limit   | Unresolved details remain visible as host questions.                                   | Yes        |
| Product access | One free eligible scan leads to one-time or monthly plans.                             | No         |

## Selected Story

1. Marketplace filters cannot prove a long stay.
2. Travelers can search both sites or compare exact listings.
3. Only stays that pass every must-have reach the shortlist.
4. Each requirement keeps the evidence behind its status.
5. Unknown details remain open as host questions.
6. The result is a set of qualified choices, not a universal winner.

## Scene Cards

### Scene 1: Problem

On-screen text: `Marketplace filters cannot prove a long stay.`

Duration: `7s`

Asset: `assets/selected/casamo-stay-scan.png`

### Scene 2: Intake

On-screen text: `Search both sites or compare exact listings.`

Duration: `7s`

Asset: `assets/selected/casamo-stay-scan.png`

### Scene 3: Qualification

On-screen text: `Only qualified stays make the shortlist.`

Duration: `8s`

Asset: `assets/selected/casamo-ranked-report.png`

### Scene 4: Evidence

On-screen text: `Each requirement keeps its supporting evidence.`

Duration: `8s`

Asset: `assets/selected/casamo-evidence-detail.png`

### Scene 5: Honest Limits

On-screen text: `Unknown details stay open as host questions.`

Duration: `7s`

Asset: `assets/selected/casamo-evidence-detail.png`

### Scene 6: Result

Eyebrow: `Casamo`

On-screen text: `Qualified choices, without a universal winner.`

Duration: `5s`

Asset: `assets/selected/casamo-ranked-report.png`

## On-Screen Text Lock

| Scene | Text                                                   | Words | Duration |
| ----- | ------------------------------------------------------ | ----: | -------: |
| 1     | Marketplace filters cannot prove a long stay.          |     7 |       7s |
| 2     | Search both sites or compare exact listings.           |     7 |       7s |
| 3     | Only qualified stays make the shortlist.               |     6 |       8s |
| 4     | Each requirement keeps its supporting evidence.        |     6 |       8s |
| 5     | Unknown details stay open as host questions.           |     7 |       7s |
| 6     | Casamo. Qualified choices, without a universal winner. |     7 |       5s |

## Asset Manifest

| Asset                        | Purpose                           | Source                                               | Safe to show?                        |
| ---------------------------- | --------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| `casamo-stay-scan.png`       | Current intake proof              | `src/assets/img/projects/casamo-stay-scan.png`       | Yes, published demonstration surface |
| `casamo-ranked-report.png`   | Current qualified-shortlist proof | `src/assets/img/projects/casamo-ranked-report.png`   | Yes, published demonstration surface |
| `casamo-evidence-detail.png` | Current evidence-detail proof     | `src/assets/img/projects/casamo-evidence-detail.png` | Yes, published demonstration surface |

## Privacy Check

No private data is shown. The selected images are published portfolio proofs with demonstration data.

## HyperFrames Handoff

Composition duration: `42s`

Aspect ratio: `1920x1080`

Poster frame: `31.5s`, when the evidence detail has settled.

Required transitions: push slides for adjacent steps, dissolves for evidence/result reveals, and a soft final hold.

## Acceptance Checklist

- [x] The video matches the current case study and metadata.
- [x] No stale top-pick, winner, runner-up, or backup claim remains.
- [x] Every on-screen claim has a listed source.
- [x] Technical implementation details stay off-screen.
- [x] The selected images contain no private data.
