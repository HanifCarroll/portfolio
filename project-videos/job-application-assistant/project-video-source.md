# Project Video Source

This is the source of truth for the Job Application Assistant overview video. The video should explain the problem, solution, and result to a nontechnical viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Job Application Assistant

Repository: `https://github.com/HanifCarroll/job-application-assistant`

Local repo: `/Users/hanifcarroll/projects/job-application-assistant`

Portfolio page source: `src/content/case-studies/job-application-assistant.mdx`

Project metadata: `src/lib/projects/job-application-assistant.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `40-41s`

Video type: plain overview video

## Plain Story

Problem: applying to jobs created too many loose pieces.

Solution: one local assistant keeps the job, draft, PDF, and history together.

Result: each application is easier to review, save, and follow up on.

## One-Line Job

Job Application Assistant turns a job posting into a reviewed draft, saved PDF, and application record.

## Viewer Takeaway

This is a small product that makes a real job-search workflow more organized.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Job post
- Notes
- Draft
- PDF
- Application history
- Local workflow
- Review before sending
- Saved record

Do not show:

- `OpportunitySnapshot`
- `Codex`
- `FastAPI`
- `SQLite`
- `Strict JSON`
- `warnings[]`
- `caused_by[]`
- API endpoints
- Test counts
- Command output

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                                     | What it supports in plain language                                                                            |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/job-application-assistant.mdx:20-33`             | The problem: the workflow had too many loose pieces across job boards, drafts, PDFs, and application history. |
| `src/content/case-studies/job-application-assistant.mdx:54-68`             | The user can review the job details before drafting.                                                          |
| `src/content/case-studies/job-application-assistant.mdx:80-97`             | The product connects drafting, saved PDFs, and application tracking.                                          |
| `src/content/case-studies/job-application-assistant.mdx:111-123`           | The result: every draft stays tied to the job, proof, PDF, and history.                                       |
| `src/lib/projects/job-application-assistant.json:32-54`                    | Metadata confirms the problem, solution, and result.                                                          |
| `/Users/hanifcarroll/projects/job-application-assistant/README.md:29-41`   | The full local workflow exists end to end.                                                                    |
| `/Users/hanifcarroll/projects/job-application-assistant/README.md:225-260` | Application history and PDF export are real product features.                                                 |
| `/Users/hanifcarroll/projects/job-application-assistant/scripts/check`     | Current verification passed, but the video should not make this a main scene.                                 |

Current verification, run on `2026-06-30` from `/Users/hanifcarroll/projects/job-application-assistant`:

```text
./scripts/check
Success: no issues found in 40 source files
72 passed, 5 warnings
```

## Scene Cards

### Scene 1: The Problem

Purpose: show why the app exists.

Viewer should understand: applying to jobs created scattered pieces.

Visual source: simple scattered cards over the product surface.

On-screen text:

```text
Applications were scattered.
Job posts, notes, drafts, PDFs, and follow-ups lived apart.
```

Duration: `6s`

Reading-speed check: `13` words over `6s` = `130 WPM`.

### Scene 2: The Cost

Purpose: make the problem concrete.

Viewer should understand: it was hard to know what had been drafted, saved, or sent.

Visual source: same cards with missing links.

On-screen text:

```text
It was easy to lose the thread.
What did I send? Did I already apply?
```

Duration: `6.5s`

Reading-speed check: `19` words over `6.5s` = `175 WPM`. This is acceptable because the questions are short and familiar.

### Scene 3: The Solution

Purpose: introduce the product in one plain sentence.

Viewer should understand: the assistant brings the workflow into one local place.

Visual source: full product surface.

On-screen text:

```text
I built one local workflow.
Review the job. Draft the letter. Save the record.
```

Duration: `6.5s`

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 4: How It Works

Purpose: outline the app actions without technical language.

Viewer should understand: the app reviews details, drafts, exports, and tracks.

Visual source: four connected product action cards.

On-screen text:

```text
The app keeps each step connected.
Review. Draft. Export. Track.
```

Duration: `6s`

Reading-speed check: `10` words over `6s` = `100 WPM`.

### Scene 5: The Result

Purpose: explain the outcome.

Viewer should understand: each application now has a clear saved record.

Visual source: dashboard crop and PDF card.

On-screen text:

```text
Every application gets a clear record.
Draft, PDF, status, and history stay together.
```

Duration: `6.5s`

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 6: Why It Matters

Purpose: close with the value to the viewer.

Viewer should understand: the project is about a real workflow, not a generic writing demo.

Visual source: full product surface with final summary.

On-screen text:

```text
This is more than a cover-letter writer.
It turns a messy workflow into a product.
```

Duration: `6.5s`

Reading-speed check: `15` words over `6.5s` = `138 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Job Application Assistant
Clear application records.
```

Duration: `3s`

Motion notes: hold the final product surface, bring in the end card, then use a short soft fade.

Reading-speed check: `8` words over `3s` = `160 WPM`; acceptable because the project name is already known and the result line is five familiar words.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                     | Word count | Duration | WPM |
| ----- | ---------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Applications were scattered. Job posts, notes, drafts, PDFs, and follow-ups lived apart. |         13 |       6s | 130 |
| 2     | It was easy to lose the thread. What did I send? Did I already apply?                    |         13 |     6.5s | 120 |
| 3     | I built one local workflow. Review the job. Draft the letter. Save the record.           |         13 |     6.5s | 120 |
| 4     | The app keeps each step connected. Review. Draft. Export. Track.                         |         10 |       6s | 100 |
| 5     | Every application gets a clear record. Draft, PDF, status, and history stay together.    |         13 |     6.5s | 120 |
| 6     | This is more than a cover-letter writer. It turns a messy workflow into a product.       |         15 |     6.5s | 138 |
| End   | Job Application Assistant. Clear application records.                                    |          6 |       3s | 120 |

Allowed short labels:

- The problem
- The cost
- The solution
- How it works
- The result
- Why it matters
- Job post
- Notes
- Draft
- PDF
- Follow-up
- Review
- Save
- Export
- Track
- Status
- History

## Asset Manifest

| Asset                      | Purpose                                                           | Source                                                         | Redaction needed?               | Final path                                                                         |
| -------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------- |
| Product surface screenshot | Product proof, scene 3 full surface, scene 5 dashboard/PDF result | Synthetic HTML rendered from `assets/raw/product-surface.html` | Already synthetic and safe      | `assets/redacted/product-surface.png` and `hyperframes/assets/product-surface.png` |
| Scattered cards            | Problem and cost scenes                                           | This document and case study problem section                   | No private data                 | Build natively in HyperFrames                                                      |
| Connected steps            | How-it-works scene                                                | This document and case study feature list                      | No private data                 | Build natively in HyperFrames                                                      |
| PDF card                   | Result scene                                                      | README PDF behavior                                            | Use synthetic company name only | Build natively in HyperFrames                                                      |

## Privacy Check

Hide:

- Real job applications
- Real companies from runtime data
- Private cover letters
- Emails, phone numbers, handles, and profile photos
- Runtime database paths, tokens, cookies, and local secret paths
- Personal context source files

Safe to show:

- Synthetic role/company data from the product screenshot
- Public project name
- Plain feature names like job post, draft, PDF, status, and history
- A synthetic PDF card

Synthetic data used:

- Company: `Acme Systems`
- Role: `Senior Full Stack Engineer`
- Source: `https://www.dice.com/job-detail/sample`
- Dashboard rows are synthetic examples.

## HyperFrames Handoff

Composition duration: `41s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Scattered application pieces.
2. Questions caused by the scattered workflow.
3. One local workflow with product surface visible.
4. Four simple connected steps.
5. Saved record with dashboard crop and PDF card.
6. Final value statement over the product surface.
7. Ending beat with project name and short result line.

Assets to copy into `hyperframes/assets/`:

- `assets/redacted/product-surface.png`

Required transitions:

- Simple push and blur transitions.
- Keep motion quiet so the copy is easy to read.
- Hold the ending beat for `2.5-3s` before the final fade.

Thumbnail frame:

- Scene 3 after product surface appears, with the headline `I built one local workflow.`

## Acceptance Checklist

- [ ] The video explains problem, solution, and result.
- [ ] The video can be understood by a nontechnical viewer.
- [ ] On-screen copy is pulled from the text lock above.
- [ ] Technical implementation details stay off-screen.
- [ ] Each scene has one clear idea.
- [ ] The ending beat holds for `2.5-3s` and does not introduce a new idea.
- [ ] Product screenshot remains legible.
- [ ] No private data is visible.
- [ ] The final render is created with the normal HyperFrames CLI.
