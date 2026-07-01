# Project Video Source

This is the source of truth for the Language Exchange Platform MVP walkthrough clip. The video should explain the problem, product flow, and result to a general portfolio viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Language Exchange Platform

Product surface name: HablaBA

Repository: `https://github.com/HanifCarroll/HablaBA`

Local repo: not required for this clip; the portfolio case study and public assets provide the proof surface.

Portfolio page source: `src/content/case-studies/language-exchange.mdx`

Project metadata: `src/lib/projects/language-exchange.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `30s`

Video type: MVP walkthrough clip

Story mode: Product walkthrough

## Plain Story

Problem: language learners wanted focused practice with real people, but existing products often felt like dating apps, endless profile browsing, or large events.

Solution: HablaBA centered the MVP on small-group exchanges, neighborhood discovery, and real-time coordination.

Result: the product connected onboarding, discovery, group chat, and cross-platform coordination closely enough to test local practice behavior.

## One-Line Job

Language Exchange Platform helps local language learners find and coordinate small practice exchanges through neighborhood discovery and group chat.

## Viewer Takeaway

This is a working MVP that turns a messy local practice problem into a testable product loop.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Local practice
- Small groups
- Neighborhood
- Exchange
- Open seats
- Group chat
- Coordinate
- Web and mobile
- MVP loop

Do not show:

- `Laravel`
- `Vue`
- `Flutter`
- `PostgreSQL`
- `Redis`
- `Tailwind CSS`
- Backend names
- API endpoints
- Test counts
- Command output

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source | What it supports in plain language |
| --- | --- |
| `src/content/case-studies/language-exchange.mdx:35-41` | HablaBA started from a local language-learning problem where profile browsing and large events made real conversation hard. |
| `src/content/case-studies/language-exchange.mdx:48-55` | The useful product shape was small, local, social, and manageable. |
| `src/content/case-studies/language-exchange.mdx:58-65` | The product direction centered practice over profiles and kept web and mobile connected to one backend. |
| `src/content/case-studies/language-exchange.mdx:79-84` | The MVP covered the loop from entering the product to finding and coordinating language practice. |
| `src/content/case-studies/language-exchange.mdx:89-94` | The result was a working MVP for testing practice behavior and coordination constraints. |
| `src/lib/projects/language-exchange.json:4-31` | Metadata confirms the small-group practice, neighborhood discovery, group chat, and cross-platform coordination framing. |
| `src/assets/img/projects/hablaba-hero.png` | Public product surface for exchange discovery. |
| `src/assets/img/projects/hablaba-feature.png` | Public product surface for group chat and coordination. |

## Proof Inventory

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem | Existing exchange products felt like profile browsing, dating apps, or large events. | `src/content/case-studies/language-exchange.mdx:35-41`; `src/lib/projects/language-exchange.json:24-31` | Yes, as plain text | Yes |
| Input | A learner looking for real local practice. | `src/content/case-studies/language-exchange.mdx:48-55` | Yes, as simplified text | Yes |
| Product action | Explore nearby exchanges with language, neighborhood, time, group type, and open seats. | `src/assets/img/projects/hablaba-hero.png` | Yes, public/synthetic asset | Yes |
| Product action | Coordinate with other learners in group chat. | `src/assets/img/projects/hablaba-feature.png` | Yes, public/synthetic asset | Yes |
| Durable output | MVP loop connects onboarding, discovery, chat, and coordination. | `src/content/case-studies/language-exchange.mdx:79-94` | Yes, as native labels | Yes |
| Verification | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, and feedback are required for this video. | `docs/project-videos/capture-and-production-workflow.md` | Yes | No |
| Reviewer path | Portfolio case study and project metadata explain the product problem, direction, and result. | `src/content/case-studies/language-exchange.mdx`; `src/lib/projects/language-exchange.json` | Yes | No |

## Selected Story

1. Language practice was hard to make real.
2. HablaBA centers small local exchanges instead of profile browsing.
3. A learner can explore exchanges by neighborhood, language, time, and seats.
4. The group chat lets people coordinate topics, timing, and practice.
5. The MVP connects discovery, chat, and coordination across web and mobile.
6. The ending beat frames the project as local practice ready to test.

## Scene Cards

### Scene 1: Problem

Purpose: show why the product exists.

Viewer should understand: practice products often got in the way of real conversation.

Visual source: native scattered profile/event cards around a muted product frame.

On-screen text:

```text
Practice was hard to make real.
Big events and profile swiping got in the way.
```

Narration: none.

Duration: `5.5s`

Proof shown: problem from case study and metadata.

Asset path: built natively in HyperFrames.

Motion notes: cards enter as disconnected choices, then dim behind the first product frame.

Reading-speed check: `14` words over `5.5s` = `153 WPM`; acceptable because the words are short and familiar.

### Scene 2: Solution

Purpose: introduce the product shape.

Viewer should understand: HablaBA focuses the MVP on small local exchanges.

Visual source: exchange discovery screenshot.

On-screen text:

```text
HablaBA centers the exchange.
Find small groups by neighborhood and language.
```

Narration: none.

Duration: `5.5s`

Proof shown: project direction and public discovery surface.

Asset path: `hyperframes/assets/hablaba-hero.png`

Motion notes: screenshot slides in and settles; copy stays short so the viewer can inspect the product.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 3: Product Flow

Purpose: show the first action in the MVP loop.

Viewer should understand: a learner can choose a nearby exchange based on practical details.

Visual source: exchange card crop plus native detail chips.

On-screen text:

```text
Explore a nearby exchange.
See time, place, language, and open seats.
```

Narration: none.

Duration: `5.5s`

Proof shown: discovery screenshot and small-group metadata.

Asset path: `hyperframes/assets/hablaba-hero.png`

Motion notes: selected exchange card scales forward; detail chips assemble beside it.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 4: Product Flow

Purpose: show coordination after discovery.

Viewer should understand: group chat makes the practice plan concrete.

Visual source: group chat screenshot.

On-screen text:

```text
Join the group chat.
People coordinate topics, timing, and practice together.
```

Narration: none.

Duration: `5.5s`

Proof shown: public group-chat product surface.

Asset path: `hyperframes/assets/hablaba-feature.png`

Motion notes: chat surface rises in, with message bubbles emphasized by subtle native callouts.

Reading-speed check: `10` words over `5.5s` = `109 WPM`.

### Scene 5: Result

Purpose: summarize what the MVP proves.

Viewer should understand: the product loop connects discovery and coordination across surfaces.

Visual source: native cross-platform loop rail plus both product screenshots.

On-screen text:

```text
The MVP connects the loop.
Discovery, chat, and coordination work across web and mobile.
```

Narration: none.

Duration: `5s`

Proof shown: case-study result and metadata.

Asset path: `hyperframes/assets/hablaba-hero.png`; `hyperframes/assets/hablaba-feature.png`

Motion notes: loop rail locks; two screenshots hold in the background.

Reading-speed check: `13` words over `5s` = `156 WPM`; acceptable for a short result line with familiar nouns.

### Scene 6: Ending Beat

Purpose: give the video a clean stopping point.

Viewer should understand: this is a testable MVP for local language practice.

Visual source: settled final card over the product loop.

On-screen text:

```text
Language Exchange Platform
Local practice, ready to test.
```

Narration: none.

Duration: `3s`

Proof shown: final value statement.

Asset path: built natively in HyperFrames.

Motion notes: end card appears quickly, then holds for a clean 2.5-3 second ending beat.

Reading-speed check: `8` words over `3s` = `160 WPM`; acceptable because the project name is already known and the result line is short.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| 1 | Practice was hard to make real. Big events and profile swiping got in the way. | 14 | 5.5s | 153 |
| 2 | HablaBA centers the exchange. Find small groups by neighborhood and language. | 11 | 5.5s | 120 |
| 3 | Explore a nearby exchange. See time, place, language, and open seats. | 11 | 5.5s | 120 |
| 4 | Join the group chat. People coordinate topics, timing, and practice together. | 10 | 5.5s | 109 |
| 5 | The MVP connects the loop. Discovery, chat, and coordination work across web and mobile. | 13 | 5s | 156 |
| End | Language Exchange Platform. Local practice, ready to test. | 8 | 3s | 160 |

Allowed short labels:

- Dating-app feel
- Big events
- Small groups
- Neighborhood
- Language
- Open seats
- Explore
- Join
- Chat
- Coordinate
- Web
- Mobile
- Ready to test

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
| `hablaba-hero.png` | Discovery and exchange selection proof surface | `src/assets/img/projects/hablaba-hero.png` | No; public portfolio asset with synthetic examples | `project-videos/language-exchange/hyperframes/assets/hablaba-hero.png` |
| `hablaba-feature.png` | Group chat and coordination proof surface | `src/assets/img/projects/hablaba-feature.png` | No; public portfolio asset with synthetic examples | `project-videos/language-exchange/hyperframes/assets/hablaba-feature.png` |
| `hablaba-discovery.png`, `hablaba-exchange-focus.png`, `hablaba-loop-discovery.png` | HyperFrames-safe aliases for repeated discovery screenshot use | `src/assets/img/projects/hablaba-hero.png` | No; same public/synthetic asset | `project-videos/language-exchange/hyperframes/assets/` |
| `hablaba-chat.png`, `hablaba-loop-chat.png` | HyperFrames-safe aliases for repeated group-chat screenshot use | `src/assets/img/projects/hablaba-feature.png` | No; same public/synthetic asset | `project-videos/language-exchange/hyperframes/assets/` |
