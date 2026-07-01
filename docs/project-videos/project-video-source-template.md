# Project Video Source Template

Use this document before writing or editing a HyperFrames composition. It is the source of truth for what the video says, shows, and proves.

Copy this file into the project video folder as `project-video-source.md`.

## Project

Project name:

Repository:

Local repo:

Portfolio page source:

Project metadata:

Primary viewer:

Target duration:

Video type:

Story mode:

Choose one:

- Plain overview: for hiring managers, nontechnical viewers, and general portfolio traffic.
- Evidence tour: for technical reviewers who need concrete implementation proof.
- Product walkthrough: for showing a user path.
- Short demo: for one fast transformation or product moment.

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
| --- | --- |
|  |  |

## Proof Inventory

List only proof that can be shown or inspected. Technical proof can support the video without appearing on screen.

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem |  |  |  |  |
| Input |  |  |  |  |
| Product action |  |  |  |  |
| Durable output |  |  |  |  |
| Saved record |  |  |  |  |
| Guardrail or warning |  |  |  |  |
| Verification |  |  |  |  |
| Reviewer path |  |  |  |  |

## Selected Story

Write the final story in simple terms. This should be shorter than the video.

### Plain Overview Arc

Use this for hiring managers, nontechnical viewers, and general portfolio traffic.

```text
1. The old workflow was messy.
2. The mess created a practical cost.
3. The project brings the workflow into one place.
4. The product performs a few simple actions.
5. The result is a clear saved record or artifact.
6. The project matters because it turns a real workflow into a product.
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

For plain overview videos, use one headline plus one short sentence at most. For evidence tours, technical labels are allowed only when they are the point of the scene.

### Scene 1: Problem

Purpose:

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

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

### Scene 5: Result

Purpose:

Viewer should understand:

Visual source:

On-screen text:

Narration:

Duration:

Proof shown:

Asset path:

Motion notes:

Reading-speed check:

### Scene 6: Why It Matters

Purpose:

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

Reserve the final `2.5-3s` for a settled ending. This is not a new argument. It should give the viewer a clean place to stop.

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

Reading-speed check:

## Evidence-Tour Scene Names

If the chosen mode is evidence tour, rename the scenes to fit this structure:

1. Concrete job
2. Real input
3. Product actions
4. Durable output
5. Trust signal
6. Reviewer path

## On-Screen Text Lock

Final text that may appear in the video. Keep this section short and plain. The composition should not introduce new main copy that is not listed here.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| End | Project name plus one short result line. |  | 2.5-3s |  |
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |
| 6 |  |  |  |  |

Reading-speed targets:

- Plain overview: `100-140` WPM.
- Technical proof: `140-160` WPM.
- Upper bound: `180` WPM only for short, familiar questions or labels.

If a scene has more than `16-18` must-read words, split it or hold the frame longer.

Allowed short labels:

- [label]

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Privacy Check

Hide:

Safe to show:

Synthetic data used:

Redaction notes:

## HyperFrames Handoff

Composition duration:

Aspect ratio:

Scenes to build:

Assets to copy into `hyperframes/assets/`:

Required transitions:

Required callouts:

Thumbnail frame:

## Acceptance Checklist

- [ ] The video explains the problem, solution, and result.
- [ ] The video can be understood by the chosen viewer without opening the case study.
- [ ] On-screen copy is pulled from the text lock above.
- [ ] Technical implementation details stay off-screen unless the chosen story mode requires them.
- [ ] Each scene has one clear idea.
- [ ] Product screenshots remain legible.
- [ ] No private data is visible.
- [ ] The final render is created with the normal HyperFrames CLI.
