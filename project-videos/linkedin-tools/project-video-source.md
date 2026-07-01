# Project Video Source

This is the source of truth for the LinkedIn Tools systems/guardrails proof video. The video should explain the problem, solution, and result to a portfolio viewer while proving that the automation system is guarded, stateful, and reviewable. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: LinkedIn Tools

Repository: `https://github.com/HanifCarroll/linkedin-network-run`

Local repo: `/Users/hanifcarroll/projects/linkedin-tools`

Portfolio page source: `src/content/case-studies/linkedin-tools.mdx`

Project metadata: `src/lib/projects/linkedin-tools.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `45s`

Video type: systems/guardrails proof video

Story mode: Workflow proof

## Plain Story

Problem: browser automation is easy to demo but hard to trust when actions can affect real accounts.

Solution: LinkedIn Tools separates workflows into controller-owned rails with explicit action boundaries, review gates, and saved evidence.

Result: runs leave notes, blockers, review pages, and results that can be checked before and after automation acts.

## One-Line Job

LinkedIn Tools puts risky LinkedIn workflows behind controller-owned state, review gates, and evidence trails.

## Viewer Takeaway

This is a guarded automation system where workflow ownership and proof are part of the product.

## Language Rules

Use words a nontechnical portfolio viewer understands.

Say:

- Browser automation
- Workflow owner
- Controller
- Guardrail
- Review gate
- Evidence
- Audit
- Ledger
- Blocker
- Review UI
- Recommend-only

Do not show:

- Private LinkedIn messages
- Profile names, photos, or contact lists
- Browser profile paths
- Runtime database paths
- Tokens, cookies, credentials, or session IDs
- Live account state
- Test counts
- Full CLI commands
- Local filesystem paths

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                | What it supports in plain language                                                                                                       |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/linkedin-tools.mdx:39-49`   | The project is controller-led browser automation; the trust problem is action ownership, allowed behavior, evidence, and reconciliation. |
| `src/content/case-studies/linkedin-tools.mdx:53-64`   | Workflows have owners, action flags, and saved audit evidence.                                                                           |
| `src/content/case-studies/linkedin-tools.mdx:68-73`   | The review UI is safe to show because it uses isolated temporary state.                                                                  |
| `src/content/case-studies/linkedin-tools.mdx:77-96`   | The project has network, recruiter/agency, opportunity, comments, and review UI rails with separate responsibilities.                    |
| `src/content/case-studies/linkedin-tools.mdx:100-115` | The shipped value is state first, action ownership second, audit evidence, and explainable automation.                                   |
| `src/lib/projects/linkedin-tools.json:18-20`          | The public artifact cannot expose LinkedIn runtime state, browser artifacts, credentials, or live account data.                          |
| `src/lib/projects/linkedin-tools.json:22-34`          | Metadata confirms the problem, solution, and result framing.                                                                             |
| `src/lib/projects/linkedin-tools.json:36-39`          | Metadata confirms CLI namespaces, explicit action flags, and tests covering workflow contracts.                                          |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                          | Source path, URL, or command                                                                             | Safe to show?                       | On-screen? |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| Problem              | Browser automation was risky when scattered scripts could affect real LinkedIn account actions.                                      | `src/content/case-studies/linkedin-tools.mdx:46-49`                                                      | Yes, as plain text                  | Yes        |
| Input                | Networking, recruiter/agency outreach, opportunity research, and comment extraction enter separate workflow rails.                   | `src/content/case-studies/linkedin-tools.mdx:53-64`                                                      | Yes, as labels                      | Yes        |
| Product action       | Controller-owned states and action flags gate risky browser behavior.                                                                | `src/content/case-studies/linkedin-tools.mdx:58-63`                                                      | Yes, as guardrail labels            | Yes        |
| Durable output       | Runs write artifacts, audits, ledgers, queues, blockers, rankings, and review state.                                                 | `src/content/case-studies/linkedin-tools.mdx:62-64`                                                      | Yes, as synthetic evidence cards    | Yes        |
| Saved record         | Review UI reads app-owned SQLite and JSON state.                                                                                     | `src/content/case-studies/linkedin-tools.mdx:68-73`, `src/content/case-studies/linkedin-tools.mdx:94-96` | Yes, via isolated screenshot        | Yes        |
| Guardrail or warning | Network, recruiter/agency, and opportunity rails have different action boundaries; opportunity intelligence remains recommend-only.  | `src/content/case-studies/linkedin-tools.mdx:53-60`                                                      | Yes, as simple lane labels          | Yes        |
| Verification         | Tests cover source registry contracts, browser behavior, reconciliation, recruiter/agency state, migrations, and review UI surfaces. | `src/lib/projects/linkedin-tools.json:36-39`                                                             | Yes as backing proof; not main copy | No         |
| Reviewer path        | Portfolio case study and public GitHub repo provide inspectable repo context.                                                        | `src/content/case-studies/linkedin-tools.mdx:119-130`                                                    | Yes                                 | No         |

## Selected Story

1. Browser automation is easy to demo but hard to trust.
2. The hard question is ownership: which workflow can act, and what proof remains?
3. LinkedIn Tools puts workflows behind controller-owned state.
4. Each rail has a boundary: some actions are send-capable, some only recommend.
5. Runs leave notes, blockers, review pages, and results.
6. The system matters because automation runs where it can explain what happened.

## Scene Cards

### Scene 1: Problem

Purpose: show why this project exists.

Viewer should understand: browser automation is not trustworthy just because it can click.

Visual source: native browser-action cards, warning rail, and a muted UI surface.

On-screen text:

```text
Browser automation is easy to demo.
It is harder to trust.
```

Narration: none.

Duration: `7s`

Proof shown: case-study situation section.

Asset path: built natively in HyperFrames.

Motion notes: browser cards enter unevenly; warning line draws between them.

Reading-speed check: `10` words over `7s` = `86 WPM`.

### Scene 2: Cost

Purpose: make the trust problem concrete.

Viewer should understand: the risk is action ownership and evidence after uncertain browser behavior.

Visual source: ownership question cards and proof trail.

On-screen text:

```text
The question was ownership.
Which workflow can act, and what proof remains?
```

Narration: none.

Duration: `7s`

Proof shown: ownership, allowed action, evidence, and reconciliation framing from case study.

Asset path: built natively in HyperFrames.

Motion notes: question cards stagger in; proof trail draws left to right.

Reading-speed check: `12` words over `7s` = `103 WPM`.

### Scene 3: Solution

Purpose: introduce the product in plain language.

Viewer should understand: LinkedIn Tools adds review before risky actions.

Visual source: public isolated review UI screenshot.

On-screen text:

```text
LinkedIn Tools adds review before action.
The workflow must be approved first.
```

Narration: none.

Duration: `7s`

Proof shown: isolated review UI screenshot and controller-led framing.

Asset path: `hyperframes/assets/review-ui.png`.

Motion notes: screenshot settles into frame; guardrail chips enter after the headline.

Reading-speed check: `11` words over `7s` = `94 WPM`.

### Scene 4: How It Works

Purpose: explain the boundaries without exposing private data.

Viewer should understand: each workflow has a clear limit.

Visual source: guarded workflow rail.

On-screen text:

```text
Each workflow has a clear limit.
Some can send, some only suggest.
```

Narration: none.

Duration: `7s`

Proof shown: separate network, recruiter/agency, and opportunity responsibilities.

Asset path: built natively in HyperFrames.

Motion notes: lane cards lock one by one; recommend-only lane stays visually distinct.

Reading-speed check: `12` words over `7s` = `103 WPM`.

### Scene 5: Result

Purpose: show the durable proof trail.

Viewer should understand: after a run, the system leaves visible proof.

Visual source: evidence ledger cards and review UI crop.

On-screen text:

```text
Runs leave proof behind.
Notes, blockers, review pages, and results stay visible.
```

Narration: none.

Duration: `7s`

Proof shown: saved source runs, result cards, blockers, and review state.

Asset path: `hyperframes/assets/review-ui.png` plus native evidence cards.

Motion notes: evidence cards enter as a controlled stack; product crop holds steady.

Reading-speed check: `12` words over `7s` = `103 WPM`.

### Scene 6: Why It Matters

Purpose: close with the project value.

Viewer should understand: automation is easier to trust when it can explain itself.

Visual source: final system map backed by the review UI.

On-screen text:

```text
Automation is easier to trust.
The system can explain what happened.
```

Narration: none.

Duration: `7s`

Proof shown: final case-study value statement.

Asset path: `hyperframes/assets/review-ui.png`.

Motion notes: system map settles; end card enters after the value statement has held.

Reading-speed check: `11` words over `7s` = `94 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
LinkedIn Tools
Automation with review and proof.
```

Duration: `3s`

Motion notes: hold the final system map, bring in the end card, then use a short fade after the settled beat.

Reading-speed check: `7` words over `3s` = `140 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                              | Word count | Duration | WPM |
| ----- | --------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Browser automation is easy to demo. It is harder to trust.                        |         10 |       7s |  86 |
| 2     | The question was ownership. Which workflow can act, and what proof remains?       |         12 |       7s | 103 |
| 3     | LinkedIn Tools adds review before action. The workflow must be approved first.    |         11 |       7s |  94 |
| 4     | Each workflow has a clear limit. Some can send, some only suggest.                |         12 |       7s | 103 |
| 5     | Runs leave proof behind. Notes, blockers, review pages, and results stay visible. |         12 |       7s | 103 |
| 6     | Automation is easier to trust. The system can explain what happened.              |         11 |       7s |  94 |
| End   | LinkedIn Tools. Automation with review and proof.                                 |          7 |       3s | 140 |

Allowed short labels:

- Problem
- Ownership
- Controller
- Review gate
- Evidence
- Guardrail
- Network
- Recruiter
- Opportunity
- Recommend-only
- Artifacts
- Ledgers
- Audits
- Blockers
- Review pages
- Browser action
- Can change account state
- Must be close to the action
- Needed after the run
- Risky without ownership
- Owner
- Permission
- Proof
- State
- Gates
- Review
- send-capable
- draft-send
- Which workflow is responsible?
- What is allowed to act?
- What remains after the browser moves?
- Connection requests and follow-ups.
- Drafted outreach with guarded sends.
- Buyer-signal research and ranking.
- Captured run outputs
- Accepted and pending state
- Reconciliation reports
- Explicit stop states
- One place to inspect the workflow.
- Workflow memory before action.
- Permission close to risk.
- Proof after automation.

## Asset Manifest

| Asset                | Purpose                                                          | Source                                                 | Redaction needed?                                                                     | Final path                                                             |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Review UI screenshot | Product proof, solution scene, result crop, and final system map | `src/assets/img/projects/linkedin-tools-review-ui.png` | Already isolated temporary state according to case study; copied into redacted assets | `assets/redacted/review-ui.png` and `hyperframes/assets/review-ui.png` |
| Browser action cards | Problem and cost scenes                                          | Case-study problem framing                             | No private data                                                                       | Build natively in HyperFrames                                          |
| Guardrail rails      | How-it-works scene                                               | Case-study workflow boundaries                         | No private data                                                                       | Build natively in HyperFrames                                          |
| Evidence cards       | Result scene                                                     | Case-study audit evidence list                         | No private data                                                                       | Build natively in HyperFrames                                          |

## Privacy Check

Hide:

- Private LinkedIn messages
- Profile names, photos, contact lists, and handles
- Browser profiles, cookies, credentials, session IDs, and tokens
- Live account state and private runtime data
- Local state paths and database paths
- Real outreach drafts or send queues

Safe to show:

- Public project name
- Case-study language about workflow ownership and evidence
- Isolated temporary-state review UI screenshot
- Synthetic lane labels and evidence cards
- Public GitHub repository link in documentation only

Synthetic data used:

- Native HyperFrames cards use generic labels only.
- No real profile, company, message, or account data is used.

Redaction notes:

- `assets/redacted/review-ui.png` is copied from the public portfolio screenshot.
- The video does not use browser captures from local LinkedIn sessions.

## HyperFrames Handoff

Composition duration: `45s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Browser automation trust problem.
2. Ownership and proof trail question.
3. Controller-led review UI.
4. Guarded workflow rails.
5. Durable evidence stack.
6. Explainable automation value.
7. Ending beat with project name and one short result line.

Assets to copy into `hyperframes/assets/`:

- `assets/redacted/review-ui.png`

Required transitions:

- Push transitions between scene groups.
- Short blur/opacity settle where the review UI becomes the proof anchor.
- Keep motion visible but quiet enough for a general portfolio viewer.
- Hold the ending beat for `2.5-3s` before the final fade.

Required callouts:

- Guardrail chips: `State`, `Gates`, `Review`.
- Boundary labels: `send-capable`, `draft-send`, `recommend-only`.
- Evidence labels: `Artifacts`, `Ledgers`, `Audits`, `Blockers`, `Review pages`.

Thumbnail frame:

- Scene 3 after the review UI settles, with the headline `LinkedIn Tools puts workflows behind controllers.`

## Acceptance Checklist

- [ ] The video explains the problem, solution, and result.
- [ ] The video can be understood by a portfolio viewer without opening the case study.
- [ ] On-screen copy is pulled from the text lock above.
- [ ] Technical implementation details stay off-screen unless shown as a guardrail label.
- [ ] Each scene has one clear idea.
- [ ] Product screenshot remains legible.
- [ ] No private LinkedIn data is visible.
- [ ] The ending beat holds for `2.5-3s` and does not introduce a new idea.
- [ ] The final render is created with the normal HyperFrames CLI.
