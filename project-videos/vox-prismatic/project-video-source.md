# Project Video Source

This is the source of truth for the Vox Prismatic short workflow demo. The video should explain the problem, workflow, and useful result to a nontechnical viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Vox Prismatic

Repository: `https://github.com/HanifCarroll/vox-prismatic`

Local repo: not present in `/Users/hanifcarroll/projects` during this production pass

Portfolio page source: `src/content/case-studies/vox-prismatic.mdx`

Project metadata: `src/lib/projects/vox-prismatic.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `33s`

Video type: short workflow demo

Story mode: Short demo with plain overview language

## Plain Story

Problem: useful ideas were buried in long transcripts.

Solution: one workflow extracts moments, drafts posts, supports hook review, and keeps publishing human-led.

Result: raw material becomes reviewable, scheduled output instead of disappearing in a transcript.

## One-Line Job

Vox Prismatic turns long transcripts into reviewable post drafts and a human-led scheduling workflow.

## Viewer Takeaway

This is a content operations workflow that turns long inputs into posts someone can review, shape, and schedule.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Long transcripts
- Useful ideas
- Drafts
- Review
- Hooks
- Scheduling
- Posts
- Human-led publishing
- Workflow
- Content operations

Do not show:

- `Laravel`
- `Vue`
- `PostgreSQL`
- AI provider names
- Schema names
- API endpoints
- Test counts
- Command output
- Local file paths

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source | What it supports in plain language |
| --- | --- |
| `src/content/case-studies/vox-prismatic.mdx:34-44` | The summary and problem: long-form transcripts became reviewable content operations, and useful ideas were buried in long transcripts. |
| `src/content/case-studies/vox-prismatic.mdx:48-62` | The goal: extract useful moments, preserve voice, and make AI processing operational through review and scheduling controls. |
| `src/content/case-studies/vox-prismatic.mdx:73-80` | The work: chunk transcripts, extract candidate insights, draft posts, add hooks, scheduling, and progress updates. |
| `src/content/case-studies/vox-prismatic.mdx:84-99` | The shipped result: a controllable system for extracting, drafting, reviewing, and scheduling content. |
| `src/lib/projects/vox-prismatic.json:24-40` | Metadata confirms the constraints, problem, solution, and result framing. |

## Proof Inventory

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem | Content teams can lose useful ideas inside long transcripts. | `src/content/case-studies/vox-prismatic.mdx:41-44`; `src/lib/projects/vox-prismatic.json:28-31` | Yes, as plain text | Yes |
| Input | Long transcripts enter the product workflow. | `src/content/case-studies/vox-prismatic.mdx:73-80` | Yes, as native synthetic transcript cards | Yes |
| Product action | The product extracts candidate insights and creates reviewable post drafts. | `src/content/case-studies/vox-prismatic.mdx:73-80`; `src/lib/projects/vox-prismatic.json:32-36` | Yes | Yes |
| Product action | The hook workbench lets someone preview and choose hooks before using them. | `src/assets/img/projects/vox-prismatic-feature.png` | Yes, after cropping | Yes |
| Durable output | Reviewable posts can move toward scheduling while keeping a human in control. | `src/content/case-studies/vox-prismatic.mdx:34-38`; `src/lib/projects/vox-prismatic.json:37-40` | Yes | Yes |
| Saved record | The public product surface shows pending posts and scheduling controls. | `src/assets/img/projects/vox-prismatic-hero.png` | Yes, after cropping out account footer text | Yes |
| Guardrail or warning | Publishing stays human-led instead of auto-posting blind. | `src/content/case-studies/vox-prismatic.mdx:18-20`; `src/lib/projects/vox-prismatic.json:24-27` | Yes, as plain copy | Yes |
| Verification | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, project metadata check, build, and feedback are required for this video. | `docs/project-videos/capture-and-production-workflow.md` | Yes | No |

## Selected Story

1. Long transcripts buried useful ideas.
2. Manual post drafting was slow because voice still needed judgment.
3. Vox Prismatic turns transcripts into reviewable drafts.
4. The workflow extracts ideas, shapes posts, reviews hooks, and schedules selected output.
5. The result is a content operations loop, not a blind auto-poster.
6. Vox Prismatic creates reviewable posts from long transcripts.

## Scene Cards

### Scene 1: Problem

Purpose: show why the product exists.

Viewer should understand: long transcripts made useful ideas hard to find.

Visual source: native transcript cards and product frame.

On-screen text:

```text
Long transcripts buried good ideas.
Useful moments stayed hard to find.
```

Narration: none.

Duration: `5.5s`

Proof shown: case-study About section and metadata problem field.

Asset path: built natively in HyperFrames.

Motion notes: transcript cards enter as long stacked strips; useful moments get marked with short highlight chips.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 2: Cost

Purpose: make the manual bottleneck concrete.

Viewer should understand: turning transcript material into posts was slow because voice and judgment mattered.

Visual source: native draft cards and voice-control labels.

On-screen text:

```text
Drafting posts by hand was slow.
Keeping the voice right took judgment.
```

Narration: none.

Duration: `5.5s`

Proof shown: case-study About and Business Objective sections.

Asset path: built natively in HyperFrames.

Motion notes: draft cards slide into a review lane; one card stays pending until the approval marker appears.

Reading-speed check: `12` words over `5.5s` = `131 WPM`.

### Scene 3: Solution

Purpose: introduce the product workflow in one sentence.

Viewer should understand: Vox Prismatic turns transcripts into reviewable drafts and keeps publishing human-led.

Visual source: cropped public posts workspace screenshot.

On-screen text:

```text
Vox Prismatic turns transcripts into reviewable drafts.
People approve before anything is scheduled.
```

Narration: none.

Duration: `6s`

Proof shown: public product surface and source text about review before publishing.

Asset path: `hyperframes/assets/vox-prismatic-posts-crop.png`

Motion notes: product surface slides in, then human-led approval chips settle over the edge.

Reading-speed check: `13` words over `6s` = `130 WPM`.

### Scene 4: Workflow

Purpose: show the core workflow steps without technical language.

Viewer should understand: the product has clear steps from source material to schedule-ready posts.

Visual source: cropped public hook workbench screenshot and native workflow rail.

On-screen text:

```text
The workflow moves in clear steps.
Extract ideas, shape posts, review hooks, schedule.
```

Narration: none.

Duration: `6.5s`

Proof shown: hook workbench screenshot and case-study work section.

Asset path: `hyperframes/assets/vox-prismatic-hook-workbench.png`

Motion notes: hook workbench appears as proof; four workflow steps lock onto a rail.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 5: Useful Result

Purpose: explain the output.

Viewer should understand: the result is a content operations loop where long inputs become reviewable posts.

Visual source: cropped posts workspace screenshot plus native result cards.

On-screen text:

```text
The result is a content operations loop.
Long inputs become posts someone can trust.
```

Narration: none.

Duration: `6.5s`

Proof shown: source text about extracting, drafting, reviewing, and scheduling.

Asset path: `hyperframes/assets/vox-prismatic-posts-crop.png`

Motion notes: result cards assemble over the product surface; scheduled output card holds steady.

Reading-speed check: `14` words over `6.5s` = `129 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Vox Prismatic
Reviewable posts from long transcripts.
```

Duration: `3s`

Motion notes: hold the final product surface, bring in the end card, then use a short soft fade.

Reading-speed check: `7` words over `3s` = `140 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| 1 | Long transcripts buried good ideas. Useful moments stayed hard to find. | 11 | 5.5s | 120 |
| 2 | Drafting posts by hand was slow. Keeping the voice right took judgment. | 12 | 5.5s | 131 |
| 3 | Vox Prismatic turns transcripts into reviewable drafts. People approve before anything is scheduled. | 13 | 6s | 130 |
| 4 | The workflow moves in clear steps. Extract ideas, shape posts, review hooks, schedule. | 13 | 6.5s | 120 |
| 5 | The result is a content operations loop. Long inputs become posts someone can trust. | 14 | 6.5s | 129 |
| End | Vox Prismatic. Reviewable posts from long transcripts. | 7 | 3s | 140 |

Allowed short labels:

- Problem
- Manual bottleneck
- Product workflow
- Workflow steps
- Useful result
- Long transcript
- Candidate insight
- Draft post
- Review
- Hook workbench
- Schedule
- Pending
- Approved
- Human-led
- Reviewable
- Extract
- Shape
- Choose
- Schedule

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
| Cropped posts workspace | Product proof, solution scene, result scene, final frame background | `src/assets/img/projects/vox-prismatic-hero.png` | Yes; crop removes sidebar account footer text and private email | `assets/redacted/vox-prismatic-posts-crop.png`; HyperFrames aliases: `vox-prismatic-posts-crop.png`, `vox-prismatic-posts-result.png` |
| Cropped hook workbench | Workflow proof and hook-review scene | `src/assets/img/projects/vox-prismatic-feature.png` | Yes; crop focuses the modal and avoids irrelevant background/account context | `assets/redacted/vox-prismatic-hook-workbench.png` and `hyperframes/assets/vox-prismatic-hook-workbench.png` |
| Transcript cards | Problem and input scenes | Case-study About and Work sections | No private data | Build natively in HyperFrames |
| Workflow rail | Workflow scene | Case-study Product Direction and The Work sections | No private data | Build natively in HyperFrames |
| Result cards | Result scene | Case-study What Shipped and metadata result fields | No private data | Build natively in HyperFrames |

## Privacy Check

Hide:

- Account footer text
- Private email
- Runtime account data
- Unpublished transcript data
- Tokens, cookies, local paths, and environment values
- Provider-specific implementation details

Safe to show:

- Cropped public portfolio screenshots
- Public project name
- Plain workflow labels
- Synthetic native cards created for the video

Synthetic data used:

- Transcript, insight, draft, review, and schedule cards are native HyperFrames labels only.

Redaction notes:

- `vox-prismatic-posts-crop.png` crops out the original screenshot sidebar account footer.
- The video does not use the full uncropped hero screenshot.
- The hook workbench screenshot is cropped to the product modal and does not show account footer text.
- `vox-prismatic-posts-result.png` is a HyperFrames-local alias of the cropped posts screenshot so repeated proof surfaces use separate media paths.

## HyperFrames Handoff

Composition duration: `33s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Long transcripts bury useful ideas.
2. Manual drafting and voice control create the bottleneck.
3. Vox Prismatic turns transcripts into reviewable drafts.
4. The workflow extracts ideas, shapes posts, reviews hooks, and schedules.
5. Long inputs become trustworthy reviewable posts.
6. Ending beat with project name and short result line.

Assets to copy into `hyperframes/assets/`:

- `assets/redacted/vox-prismatic-posts-crop.png`
- `assets/redacted/vox-prismatic-hook-workbench.png`
- HyperFrames-local alias `vox-prismatic-posts-result.png`

Required transitions:

- Use medium-energy push slides between related points.
- Use a blur crossfade for the move into the useful result scene.
- Hold outgoing content until the transition starts.
- Avoid jump cuts.
- Hold the ending beat for `2.5-3s` before the final fade.

Thumbnail frame:

- Scene 3 after the posts workspace appears, with the headline `Vox Prismatic turns transcripts into reviewable drafts.`

## Acceptance Checklist

- [x] The video explains problem, workflow, and useful result.
- [x] The video can be understood by a nontechnical viewer.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] The ending beat holds for `2.5-3s` and does not introduce a new idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
