# Project Video Source

This is the source of truth for the Acquire overview video. The video should explain the problem, solution, and result to a nontechnical viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Acquire

Repository: not public in the portfolio source

Local repo: `/Users/hanifcarroll/projects/tools/acquire`

Portfolio page source: `src/content/case-studies/acquire.mdx`

Project metadata: `src/lib/projects/acquire.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `41-42s`

Video type: plain overview video

Story mode: Plain overview

## Plain Story

Problem: opportunity tracking was split across job boards, inboxes, notes, drafts, browser tabs, and follow-up lists.

Solution: one local command center shows status, blockers, and the next action for each opportunity.

Result: every pursuit has a clearer next action, approval state, history, and evidence trail.

## One-Line Job

Acquire turns scattered opportunity tracking into one governed local workflow for sourcing, review, applications, outreach, evidence, and next actions.

## Viewer Takeaway

This is a working operating system for a messy business workflow, not a generic productivity dashboard.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Work search
- Opportunity
- Source
- Review
- Pursuit
- Approval
- Evidence
- Blocker
- Next action
- Local command center

Do not show:

- `Rust`
- `SQLite`
- `SwiftUI`
- `launchd`
- `JSONL`
- `Playwriter`
- `Codex`
- CLI commands
- Database names
- Prompt template names
- Test counts
- Local file paths

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                                         | What it supports in plain language                                                                                                       |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/acquire.mdx:39-48`                                   | Acquire is a local acquisition operating system built because the opportunity workflow was split across tools.                           |
| `src/content/case-studies/acquire.mdx:51-62`                                   | The system keeps the source of truth local, separates judgment from workflow ownership, and uses approval gates.                         |
| `src/content/case-studies/acquire.mdx:65-68`                                   | The public product surface is the native command center, especially the Pursuits workspace.                                              |
| `src/content/case-studies/acquire.mdx:71-90`                                   | The work includes source monitoring, application workflow, answer reuse, typed app projections, daemon-owned execution, and blockers.    |
| `src/content/case-studies/acquire.mdx:105-108`                                 | The broader value is mapping a business workflow, making the source of truth explicit, and adding accountable automation.                |
| `src/lib/projects/acquire.json:28-44`                                          | Metadata confirms the constraints, problem, solution, and result framing.                                                                |
| `/Users/hanifcarroll/projects/tools/acquire/README.md:1-6`                     | The local repo describes Acquire as acquisition CRM, source monitoring, and bounded automation backed by local state and approval gates. |
| `/Users/hanifcarroll/projects/tools/acquire/README.md:72-95`                   | Scheduled source passes and browser-backed imports are governed by the daemon and import contracts.                                      |
| `/Users/hanifcarroll/projects/tools/acquire/docs/ui.md:35-41`                  | The command-center UI has Today, Opportunity Reviews, Pursuits, Sources, and Settings surfaces.                                          |
| `/Users/hanifcarroll/projects/tools/acquire/docs/ui.md:43-69`                  | Pursuits owns review, approved actions, questions, materials, submission evidence, completed history, and blockers.                      |
| `/Users/hanifcarroll/projects/tools/acquire/docs/application-workflow.md:1-28` | Application submission is a governed final step with discovery, reusable answers, approval, snapshot comparison, and drift recovery.     |
| `/Users/hanifcarroll/projects/tools/acquire/macos/README.md:1-6`               | The native app is a thin command center while the installed CLI remains the workflow source of truth.                                    |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                    | Source path, URL, or command                                                                                | Safe to show?                                    | On-screen? |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------- |
| Problem              | Work-search activity split across job boards, LinkedIn, Upwork, recruiters, notes, browser tabs, emails, and follow-up lists.  | `src/lib/projects/acquire.json:32-35`                                                                       | Yes, as plain text                               | Yes        |
| Input                | Opportunities and source runs enter the local workflow.                                                                        | `src/content/case-studies/acquire.mdx:71-74`                                                                | Yes, as synthetic labels                         | Yes        |
| Product action       | Reviews, approvals, materials, answer review, and submission snapshots keep actions governed.                                  | `src/content/case-studies/acquire.mdx:23-30`, `src/content/case-studies/acquire.mdx:76-89`                  | Yes, as plain labels                             | Yes        |
| Durable output       | Pursuits keep materials, questions, answers, evidence, status, blockers, and history together.                                 | `src/content/case-studies/acquire.mdx:65-68`, `/Users/hanifcarroll/projects/tools/acquire/docs/ui.md:35-41` | Yes, from public screenshot and synthetic labels | Yes        |
| Saved record         | The local system stores opportunities, source runs, application packets, evidence events, worker jobs, schedules, and reports. | `src/content/case-studies/acquire.mdx:13-35`                                                                | Mention generally, not with private rows         | No         |
| Guardrail or warning | Submission changes invalidate approval and return the pursuit to review.                                                       | `/Users/hanifcarroll/projects/tools/acquire/docs/application-workflow.md:18-28`                             | Yes, as a plain approval-gate concept            | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshots, render, ffprobe, thumbnail, and feedback are required for this video.          | `docs/project-videos/capture-and-production-workflow.md`                                                    | Yes                                              | No         |
| Reviewer path        | Portfolio case study plus local repo docs explain the product surface and workflow contracts.                                  | `src/content/case-studies/acquire.mdx`, `/Users/hanifcarroll/projects/tools/acquire/docs/ui.md`             | Yes                                              | No         |

## Selected Story

1. Opportunities were spread across too many tools.
2. The split workflow made the next action hard to trust.
3. Acquire shows the workflow, status, and next action in one local command center.
4. The product keeps judgment and approval before automation.
5. Each pursuit keeps its materials, answers, status, blockers, and evidence together.
6. The project matters because it turns a messy operating workflow into a business system.

## Scene Cards

### Scene 1: Problem

Purpose: show why the app exists.

Viewer should understand: opportunities were spread across too many disconnected tools.

Visual source: native scattered cards over a textured command-center frame.

On-screen text:

```text
Opportunities were spread across too many tools.
Notes, drafts, and follow-ups were split apart.
```

Narration: none.

Duration: `6.5s`

Proof shown: problem from case study and metadata.

Asset path: built natively in HyperFrames.

Motion notes: cards enter from different directions; background grid drifts slowly.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 2: Cost

Purpose: make the problem concrete.

Viewer should understand: the main cost was not knowing what was ready, approved, or blocked.

Visual source: question cards and a broken next-action rail.

On-screen text:

```text
The next step was unclear.
What is worth acting on? What is approved? What is blocked?
```

Narration: none.

Duration: `6.5s`

Proof shown: case-study operating question and metadata problem.

Asset path: built natively in HyperFrames.

Motion notes: question cards stagger in while the rail reveals in segments.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

### Scene 3: Solution

Purpose: introduce the product in one plain sentence.

Viewer should understand: Acquire makes status and next action visible.

Visual source: public Pursuits screenshot.

On-screen text:

```text
Acquire shows the whole workflow.
Each opportunity has a status and next step.
```

Narration: none.

Duration: `6.5s`

Proof shown: public native product surface from the case study.

Asset path: `hyperframes/assets/acquire-pursuits.png`.

Motion notes: screenshot slides in with a quiet scale settle. Keep the copy quiet so the product surface carries the scene.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 4: How It Works

Purpose: explain the governing idea without stack terms.

Viewer should understand: automation is allowed after judgment and approval.

Visual source: governed workflow rail.

On-screen text:

```text
Acquire puts judgment before automation.
Review first, approve next, then let the workflow run.
```

Narration: none.

Duration: `6.5s`

Proof shown: approval gates and application-workflow invariants.

Asset path: built natively in HyperFrames.

Motion notes: gate cards assemble along a rail; approval marker locks before the run card appears.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

### Scene 5: Result

Purpose: explain the outcome.

Viewer should understand: a pursuit keeps state, evidence, and blockers inspectable.

Visual source: public Pursuits screenshot crop plus synthetic evidence cards.

On-screen text:

```text
Each pursuit keeps its history.
Materials, answers, status, blockers, and run evidence stay inspectable.
```

Narration: none.

Duration: `6.5s`

Proof shown: case-study Pursuits surface and UI docs.

Asset path: `hyperframes/assets/acquire-pursuits.png`.

Motion notes: crop holds steady; evidence chips enter after the headline.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

### Scene 6: Why It Matters

Purpose: close with portfolio value.

Viewer should understand: Acquire shows a reusable business-systems pattern.

Visual source: final command-center frame with workflow map.

On-screen text:

```text
This is business-systems engineering in miniature.
Map the workflow, set gates, make next actions obvious.
```

Narration: none.

Duration: `6.5s`

Proof shown: case-study why-it-matters section.

Asset path: built natively in HyperFrames with public screenshot in background.

Motion notes: map converges into a final next-action marker.

Reading-speed check: `15` words over `6.5s` = `138 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Acquire
Clear next actions, with evidence.
```

Duration: `3s`

Motion notes: hold the final scene, bring in the end card, then use a short soft fade.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                                       | Word count | Duration | WPM |
| ----- | ---------------------------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Opportunities were spread across too many tools. Notes, drafts, and follow-ups were split apart.           |         13 |     6.5s | 120 |
| 2     | The next step was unclear. What is worth acting on? What is approved? What is blocked?                     |         14 |     6.5s | 129 |
| 3     | Acquire shows the whole workflow. Each opportunity has a status and next step.                             |         13 |     6.5s | 120 |
| 4     | Acquire puts judgment before automation. Review first, approve next, then let the workflow run.            |         14 |     6.5s | 129 |
| 5     | Each pursuit keeps its history. Materials, answers, status, blockers, and run evidence stay inspectable.   |         14 |     6.5s | 129 |
| 6     | This is business-systems engineering in miniature. Map the workflow, set gates, make next actions obvious. |         15 |     6.5s | 138 |
| End   | Acquire. Clear next actions, with evidence.                                                                |          6 |       3s | 120 |

Allowed short labels:

- The problem
- The cost
- The solution
- How it works
- The result
- Why it matters
- Sources
- Reviews
- Pursuits
- Approval
- Evidence
- Next action
- Opportunity
- Materials
- Answers
- Status
- Blockers
- Run evidence
- Notes
- Drafts
- Follow-ups
- Inbox
- Source
- Context
- Timing
- Replies
- Review
- Approve
- Run
- Workflow
- Gates
- Worth acting on
- Approved input
- Bounded work
- Attached proof
- Prepared
- Approved
- Ready or blocked
- Last event

## Asset Manifest

| Asset                       | Purpose                                                                          | Source                                                  | Redaction needed?               | Final path                                                                           |
| --------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| Acquire Pursuits screenshot | Product proof, command-center surface, result scene crop, final frame background | `src/assets/img/projects/acquire-pursuits.png`          | Already public case-study asset | `assets/redacted/acquire-pursuits.png` and `hyperframes/assets/acquire-pursuits.png` |
| Scattered workflow cards    | Problem and cost scenes                                                          | Case study problem section and metadata problem field   | No private data                 | Build natively in HyperFrames                                                        |
| Approval workflow rail      | How-it-works scene                                                               | Case study approval gates and application workflow docs | No private data                 | Build natively in HyperFrames                                                        |
| Evidence/status cards       | Result scene                                                                     | Case study Pursuits surface and UI docs                 | No private data                 | Build natively in HyperFrames                                                        |

## Privacy Check

Hide:

- Local runtime database rows
- Real applications and submissions
- Real resumes and generated materials
- Outreach drafts and company-specific answers
- Profile data, emails, handles, phone numbers, and account identifiers
- Browser profiles, tokens, cookies, and local secret paths

Safe to show:

- Public portfolio screenshot from `src/assets/img/projects/acquire-pursuits.png`
- Public project name
- Plain workflow labels
- Synthetic cards, rails, markers, and proof labels created for this video

Synthetic data used:

- All cards outside the public screenshot are synthetic labels only.

Redaction notes:

- No local runtime data was captured.
- HyperFrames uses only the copied public screenshot and generated graphics.

## HyperFrames Handoff

Composition duration: `42s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Scattered opportunity pieces.
2. Unclear next-step questions.
3. One local command center with product surface visible.
4. Judgment and approval before automation.
5. Pursuit history and evidence stay together.
6. Business-systems value statement.
7. Ending beat with project name and short result line.

Assets to copy into `hyperframes/assets/`:

- `assets/redacted/acquire-pursuits.png`

Required transitions:

- Use medium-energy push slides for related points.
- Use a blur crossfade for the move into the result scene.
- Keep the outgoing scene visible until the transition starts.
- Avoid jump cuts.
- Hold the ending beat for `2.5-3s` before the final fade.

Thumbnail frame:

- Scene 3 after the product surface appears, with the headline `Acquire shows the whole workflow.`

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
