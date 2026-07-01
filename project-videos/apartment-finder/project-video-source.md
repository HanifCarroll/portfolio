# Project Video Source

This is the source of truth for the Apartment Finder short AI proof demo. The video should show one transformation: messy listing evidence becomes a clearer washer decision. The composition must pull its on-screen copy, proof moments, timing, asset use, and privacy constraints from this document.

## Project

Project name: Apartment Finder

Repository: `https://github.com/HanifCarroll/apartment-finder`

Local repo: `/Users/hanifcarroll/projects/apartment-finder`

Portfolio page source: `src/content/case-studies/apartment-finder.mdx`

Project metadata: `src/lib/projects/apartment-finder.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `36s`

Video type: short AI proof demo

Story mode: Short demo

## Plain Story

Problem: apartment sites blur private in-unit washers and shared building laundry into the same search signal.

Solution: Apartment Finder scans listing details and photos, then keeps the evidence visible beside the decision.

Result: the user can compare likely in-unit, shared-building, and unclear results without opening every listing by hand.

## One-Line Job

Apartment Finder turns noisy rental listing data into an evidence-backed washer decision the user can review.

## Viewer Takeaway

This is an AI product workflow that turns messy listing information into a clearer apartment decision.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Apartment search
- Listing
- Photos
- Details
- Washer evidence
- AI review
- Confidence
- Source link
- Likely in-unit
- Shared building
- Unclear
- Clearer decision

Do not show:

- Real listing addresses
- Real listing URLs or IDs
- Contacts or profile details
- Raw cached photos
- Local cache paths
- `OpenAI`
- `TanStack Start`
- `JSONL`
- CLI commands
- Model names
- API endpoints
- Test counts

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                            | What it supports in plain language                                                                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/content/case-studies/apartment-finder.mdx:40-55`             | Listing sites blur private washers and shared laundry, and the product exists to inspect evidence instead of trusting the filter.                |
| `src/content/case-studies/apartment-finder.mdx:58-65`             | The product keeps listing facts, photo galleries, washer evidence, confidence, and source links visible for review.                              |
| `src/content/case-studies/apartment-finder.mdx:68-75`             | The public UI screenshot proves the product surface exists.                                                                                      |
| `src/content/case-studies/apartment-finder.mdx:79-93`             | The implementation extracts provider evidence, runs a staged classification path, and keeps UI and eval behavior aligned.                        |
| `src/content/case-studies/apartment-finder.mdx:97-110`            | The shipped proof includes the product surface, auditable model evidence, evaluation results, cost control, and public repo.                     |
| `src/lib/projects/apartment-finder.json:27-44`                    | Metadata confirms the constraints, product workflow, measured result, and evidence-backed product framing.                                       |
| `/Users/hanifcarroll/projects/apartment-finder/README.md:1-13`    | The repo describes the washer decision categories, provider extraction, vision classification, and audit outputs.                                |
| `/Users/hanifcarroll/projects/apartment-finder/README.md:85-96`   | The listing summary record keeps decisions, confidence, evidence, image counts, escalation indexes, and policy fields.                           |
| `/Users/hanifcarroll/projects/apartment-finder/README.md:318-334` | Search scans use staged listing classification and the web UI supports provider filters, raw URLs, scans, result filtering, and expandable rows. |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                                              | Source path, URL, or command                                                                                            | Safe to show?                                | On-screen? |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------- |
| Problem              | Rental platforms collapse private washers and shared laundry into one signal.                                                                            | `src/content/case-studies/apartment-finder.mdx:40-55`; `src/lib/projects/apartment-finder.json:27-34`                   | Yes, as plain text                           | Yes        |
| Input                | Listing details, photos, provider metadata, and raw search URLs enter the workflow.                                                                      | `src/content/case-studies/apartment-finder.mdx:46-65`; `/Users/hanifcarroll/projects/apartment-finder/README.md:52-96`  | Yes, as synthetic labels                     | Yes        |
| Product action       | The app discovers listings, scans photos and details, and keeps evidence reviewable.                                                                     | `src/content/case-studies/apartment-finder.mdx:58-65`; `src/lib/projects/apartment-finder.json:35-39`                   | Yes, through redacted UI and synthetic cards | Yes        |
| Durable output       | Each result has a washer decision and supporting evidence.                                                                                               | `/Users/hanifcarroll/projects/apartment-finder/README.md:85-96`; `src/content/case-studies/apartment-finder.mdx:97-103` | Yes, as synthetic decision cards             | Yes        |
| Saved record         | Audit outputs and fixture evals exist in the project, but the video should keep them off-screen.                                                         | `/Users/hanifcarroll/projects/apartment-finder/README.md:1-13`; `src/lib/projects/apartment-finder.json:40-44`          | Yes as backing proof, not visible            | No         |
| Guardrail or warning | If evidence is uncertain, the listing stays reviewable instead of pretending confidence.                                                                 | `src/content/case-studies/apartment-finder.mdx:58-65`; `/Users/hanifcarroll/projects/apartment-finder/README.md:85-96`  | Yes, as `Unclear` decision language          | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster/preview, project metadata check, build, and feedback are required for this video. | `docs/project-videos/capture-and-production-workflow.md`                                                                | Yes                                          | No         |
| Reviewer path        | The case study and public repo explain the product surface and evidence workflow.                                                                        | `src/content/case-studies/apartment-finder.mdx`; `https://github.com/HanifCarroll/apartment-finder`                     | Yes                                          | No         |

## Selected Story

1. Apartment search got noisy.
2. The important evidence lived across photos and details.
3. Apartment Finder reviews the listing evidence in one product surface.
4. The decision stays easy to check.
5. Results become easier to compare.
6. A messy search becomes a clearer decision.

## Scene Cards

### Scene 1: Problem

Purpose: show why the app exists.

Viewer should understand: the washer filter was not specific enough.

Visual source: synthetic listing cards and amenity tags.

On-screen text:

```text
Apartment search got noisy.
Listing sites mixed private washers with shared laundry.
```

Narration: none.

Duration: `5.5s`

Proof shown: problem from case study and metadata.

Asset path: built natively in HyperFrames.

Motion notes: listing cards scatter in, then the washer signal gets highlighted.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 2: Cost

Purpose: show why manual review was frustrating.

Viewer should understand: the answer was spread across photos and listing details.

Visual source: synthetic photo grid, details card, and question marker.

On-screen text:

```text
The answer lived in photos.
Filters could not answer it.
```

Narration: none.

Duration: `5.5s`

Proof shown: case-study objective and product direction.

Asset path: built natively in HyperFrames.

Motion notes: photo cards fan in, then a question marker lands over the uncertain evidence.

Reading-speed check: `13` words over `5.5s` = `142 WPM`.

### Scene 3: Solution

Purpose: introduce the product surface.

Viewer should understand: the app reviews listing details and photos together.

Visual source: redacted public UI screenshot.

On-screen text:

```text
Apartment Finder reviews the listing.
It reads details, photos, and washer clues together.
```

Narration: none.

Duration: `5.5s`

Proof shown: public product surface, redacted for listing safety.

Asset path: `hyperframes/assets/apartment-finder-ui-redacted.png`

Motion notes: product surface slides in and scanning cards attach to it.

Reading-speed check: `12` words over `5.5s` = `131 WPM`.

### Scene 4: AI Review

Purpose: make the AI workflow inspectable instead of magical.

Viewer should understand: the system shows why it made the call.

Visual source: evidence cards for photos, details, confidence, and source link.

On-screen text:

```text
The decision stays easy to check.
Evidence, confidence, and source links remain visible.
```

Narration: none.

Duration: `5.5s`

Proof shown: case-study model evidence and README listing summary shape.

Asset path: built natively in HyperFrames.

Motion notes: evidence cards connect into a decision rail.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 5: Result

Purpose: show the usable output.

Viewer should understand: listings can be compared by decision, not by guesswork.

Visual source: three synthetic decision cards.

On-screen text:

```text
The result is easier to compare.
Likely in-unit, shared building, or unclear.
```

Narration: none.

Duration: `5.5s`

Proof shown: decision categories from the repo and product result framing.

Asset path: built natively in HyperFrames.

Motion notes: decision cards sort into a clear comparison row.

Reading-speed check: `12` words over `5.5s` = `131 WPM`.

### Scene 6: Why It Matters

Purpose: close with the value.

Viewer should understand: the product turns a frustrating search into a clearer decision.

Visual source: final redacted product surface and evidence-to-decision map.

On-screen text:

```text
A messy search becomes a clearer decision.
Fewer tabs, better evidence, less guessing.
```

Narration: none.

Duration: `5.5s` plus `3s` ending beat.

Proof shown: case-study result and metadata framing.

Asset path: `hyperframes/assets/apartment-finder-ui-redacted.png`

Motion notes: final product surface settles, then end card appears and holds from `33s` to `36s`.

Reading-speed check: `12` words over `5.5s` = `131 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Apartment Finder
Messy listings to clear decisions.
```

Duration: `3s`

Motion notes: hold the final product frame, bring in a simple end card, then use a short soft fade after the held message.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                       | Word count | Duration | WPM |
| ----- | ------------------------------------------------------------------------------------------ | ---------: | -------: | --: |
| 1     | Apartment search got noisy. Listing sites mixed private washers with shared laundry.       |         11 |     5.5s | 120 |
| 2     | The answer lived in photos. Filters could not answer it.                                   |         10 |     5.5s | 109 |
| 3     | Apartment Finder reviews the listing. It reads details, photos, and washer clues together. |         12 |     5.5s | 131 |
| 4     | The decision stays easy to check. Evidence, confidence, and source links remain visible.   |         12 |     5.5s | 131 |
| 5     | The result is easier to compare. Likely in-unit, shared building, or unclear.              |         12 |     5.5s | 131 |
| 6     | A messy search becomes a clearer decision. Fewer tabs, better evidence, less guessing.     |         12 |     5.5s | 131 |
| End   | Apartment Finder. Messy listings to clear decisions.                                       |          6 |       3s | 120 |

Allowed short labels:

- Washer filter
- Shared laundry
- Listing photos
- Details
- AI review
- Evidence
- Confidence
- Source link
- Likely in-unit
- Shared building
- Unclear
- Compare

## Asset Manifest

| Asset                    | Purpose                       | Source                                                | Redaction needed?                                                  | Final path                                                                                                   |
| ------------------------ | ----------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Redacted product surface | Product proof, scenes 3 and 6 | `src/assets/img/projects/apartment-finder-ui.png`     | Yes. Listing titles, source URLs, IDs, and row details are masked. | `assets/redacted/apartment-finder-ui-redacted.png` and `hyperframes/assets/apartment-finder-ui-redacted.png` |
| Messy listing cards      | Problem scene                 | This source document and case-study problem section   | No private data                                                    | Build natively in HyperFrames                                                                                |
| Photo evidence cards     | Cost and AI review scenes     | This source document and case-study product direction | No private data                                                    | Build natively in HyperFrames                                                                                |
| Decision cards           | Result scene                  | README decision categories and case-study result      | No private data                                                    | Build natively in HyperFrames                                                                                |

## Privacy Check

Hide:

- Private addresses
- Listing URLs and IDs
- Source listing titles and row details
- Contact information
- Raw cached photos
- Runtime logs
- Local cache paths
- Tokens, cookies, and environment variables

Safe to show:

- Public project name
- Redacted public UI screenshot
- Synthetic listing rows
- Synthetic evidence and decision cards
- Plain project outcome language

The video must not use raw adjacent-repo cache images or live source listing pages.
