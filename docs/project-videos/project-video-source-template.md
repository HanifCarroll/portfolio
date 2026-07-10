# Project Video Source Template

Use this document before writing or editing `video.json`. It is the evidence record for what the video may say, show, and prove. The manifest is the renderer input; generated HyperFrames HTML is disposable.

Copy this file into the project video folder as `project-video-source.md`, complete the review, then transfer the approved story and assets into `video.json`.

## Project

Project name:

Repository:

Local repo:

Portfolio page source:

Project metadata:

Primary viewer:

Target duration:

Video type:

Story family:

Choose one:

- `system-proof`: operating problem, concrete state, intervention, evidence or guardrail, durable result, held conclusion.
- `product-journey`: user problem, entry or setup, core action, decision or output, shipped value, held conclusion.
- `visual-showcase`: need or opportunity, visual introduction, work or gallery, inquiry or validation path, held result.

Timing profile: `standard`, `short`, or `loop`

Editorial profile: `silent-proof-v1`

## Plain Story

Fill this even for technical videos. If this section is unclear, the video will drift.

Problem:

Solution:

Result:

## One-Line Job

Write the plain-English job this project performs.

```text
[Project] helps [specific user] do [specific task] by [plain mechanism].
```

## Viewer Takeaway

Write the one thing the viewer should remember after watching.

```text
This is a [kind of product/workflow] that turns [messy input/problem] into [clear output/result].
```

## Language Rules

Use words the chosen viewer understands.

Say:

- [plain workflow words]

Do not show:

- [technical or private terms]

For plain overview videos, keep stack names, schema names, API endpoint names, command output, and test counts off-screen. They can stay in the source notes as backing evidence.

## Source Review Notes

Map source evidence to plain-language claims. The video should pull from this table instead of inventing structure inside the composition.

| Source | What it supports in plain language |
| ------ | ---------------------------------- |
|        |                                    |

## Proof Inventory

List only proof that can be shown or inspected. Technical proof can support the video without appearing on screen.

| Proof type           | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| -------------------- | ----------- | ---------------------------- | ------------- | ---------- |
| Problem              |             |                              |               |            |
| Input                |             |                              |               |            |
| Product action       |             |                              |               |            |
| Durable output       |             |                              |               |            |
| Saved record         |             |                              |               |            |
| Guardrail or warning |             |                              |               |            |
| Verification         |             |                              |               |            |
| Reviewer path        |             |                              |               |            |

## Selected Story

Write the final story in simple terms. This should be shorter than the video.

### Plain Overview Arc

Use this for hiring managers, nontechnical viewers, and general portfolio traffic.

```text
1. The old workflow was messy.
2. The mess created a practical cost.
3. The project brings the workflow into one place.
4. The product performs a few simple actions.
5. The result is a clear saved record, artifact, or outcome that explains why the project matters.
```

### Evidence Tour Arc

Use this only when the viewer needs technical proof.

```text
1. A real input enters the system.
2. The product performs the important actions.
3. The workflow produces a durable output.
4. The system leaves proof that it worked.
5. A reviewer can inspect the work.
```

## Scene Cards

Keep each scene focused on one idea. If a scene needs more than one idea, split it.

The final manifest must contain four to six total scenes, including the ending. Use only the story scenes the chosen family needs; visual showcases and loops often need fewer than five.

Default to one `primary` headline. Add an eyebrow, body, label, or stat only when it earns a canonical role: `supporting`, `orientation`, or `status`. For evidence tours, technical labels are allowed only when they are the point of the scene.

### Scene 1: Problem

Purpose:

Manifest intent (not rendered):

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

### Scene 2: Cost

Purpose:

Manifest intent (not rendered):

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

### Scene 3: Solution

Purpose:

Manifest intent (not rendered):

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

### Scene 4: How It Works

Purpose:

Manifest intent (not rendered):

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

### Scene 5: Result And Value

Purpose:

Manifest intent (not rendered):

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

## Ending Beat

Reserve at least `3s` for a settled ending and extend it when the explicit project name and result need more reading time. This is not a new argument. It should give the viewer a clean place to stop.

Use either:

- A final product/result frame held without new motion.
- A simple end card with the project name and one plain result line.

End-card text:

```text
[Project name]
[One short result line, ideally 5-8 words.]
```

Duration:

Motion notes:

Reading-speed check:

## Evidence-Tour Scene Names

If the chosen mode is evidence tour, rename the five story scenes to fit this structure:

1. Concrete job
2. Real input
3. Product actions
4. Evidence or guardrail
5. Durable output and reviewer path

## On-Screen Text Lock

Final text that may appear in the video. Keep this section short and plain. Manifest scene copy should not introduce a new main claim that is not listed here.

| Scene | Manifest path | Role | Explicit rendered text | Words | Text settled | Reading window end | Settled hold | Read time | Margin |
| ----- | ------------- | ---- | ---------------------- | ----: | -----------: | -----------------: | -----------: | --------: | -----: |
| End   |               |      |                        |       |              |                    |              |           |        |
| 1     |               |      |                        |       |              |                    |              |           |        |
| 2     |               |      |                        |       |              |                    |              |           |        |
| 3     |               |      |                        |       |              |                    |              |           |        |
| 4     |               |      |                        |       |              |                    |              |           |        |
| 5     |               |      |                        |       |              |                    |              |           |        |

Executable reading check for `silent-proof-v1`:

- Pin the canonical standard as `silent-designed-video-v1` and the tokenizer as `whitespace-v1`.
- Count `eyebrow`, `headline`, `body`, every label title and body, every stat value and label, and declared words inside logos or screenshots. Use `assetText` when the scene depends on reading words inside an image. Do not count non-rendered `intent` or `assetAlt`.
- For `whitespace-v1`, trim each rendered field, split on one or more whitespace characters, and remove empty or punctuation-only tokens. Punctuation attached to a word stays attached; numbers, URLs, handles, contractions, and hyphenated terms count as one token.
- Use `140 WPM`: `requiredReadingTime = viewerFacingWordCount / (140 / 60)`.
- Normal copy settles at `1.1s`; ending copy settles at `0.5s`; a label cascade can settle later.
- End the reading window at the outgoing transition start, or at scene end when there is no outgoing transition.
- `usableSettledHold = readingWindowEnd - textSettledAt`; `readingMargin = usableSettledHold - requiredReadingTime`.
- Require at least `2s` of settled hold and `0.75s` margin for story scenes. Require `0.5s` margin for the ending.

If the check fails, remove nonessential copy, shorten the remaining copy, or extend the hold within the timing profile.

Allowed short labels:

- [label]

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Required readable text and role | Final path |
| ----- | ------- | ------ | ----------------- | ------------------------------- | ---------- |
|       |         |        |                   |                                 |            |

## Privacy Check

Hide:

Safe to show:

Synthetic data used:

Redaction notes:

## Manifest Handoff

Composition duration:

Aspect ratio:

Story family: `system-proof`, `product-journey`, or `visual-showcase`

Timing profile: `standard`, `short`, or `loop`

Editorial profile: `silent-proof-v1`

Theme colors, fonts, and motif:

Scenes to encode in `video.json`:

Approved manifest asset paths:

Required transitions:

Required motion and text roles (`primary`, `supporting`, `orientation`, or `status`):

`posterAt` frame:

Privacy `hide` and `safe` lists:

Source paths to include:

Generation model, template version, and HyperFrames version:

## Acceptance Checklist

- [ ] The video explains the problem, solution, and result.
- [ ] The video can be understood by the chosen viewer without opening the case study.
- [ ] On-screen copy is pulled from the text lock above.
- [ ] Technical implementation details stay off-screen unless the chosen story mode requires them.
- [ ] Each scene has a concise non-rendered `intent` and one clear idea.
- [ ] Every viewer-facing word is explicit in the text lock and passes the post-settle reading check.
- [ ] Product screenshots remain legible.
- [ ] No private data is visible.
- [ ] `video.json` validates against `video-manifest.schema.json`.
- [ ] Generated snapshots have passed visual and privacy review.
- [ ] After user approval, the final render is created through `bun run videos:render -- <slug> --approve-visuals`.
