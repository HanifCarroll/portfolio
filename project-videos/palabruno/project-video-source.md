# Project Video Source

This is the source of truth for the Palabruno overview video. The video should explain the problem, solution, and result to a nontechnical viewer. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Palabruno

Repository: private/local client project

Local repo: `/Users/hanifcarroll/projects/palabruno`

Portfolio page source: `src/content/case-studies/palabruno.mdx`

Project metadata: `src/lib/projects/palabruno.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `39-40s`

Video type: plain overview video

Story mode: Plain overview

## Plain Story

Problem: the founder had a strong Spanish-reading idea, but the launchable MVP shape and first buyer path needed product judgment.

Solution: the product was narrowed into two connected surfaces: a mobile reader for learners and a web workspace for teachers.

Result: Palabruno launched with iOS, Android, web, payments, store assets, launch docs, and a clearer teacher-led buyer path.

## One-Line Job

Palabruno helps Spanish learners and teachers turn reading practice into a launch-ready product by connecting a mobile reader with a teacher workspace.

## Viewer Takeaway

This is a product build that turns a founder idea into a live learner-and-teacher product with a clearer first market.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Founder idea
- First buyer
- Spanish reader
- Teacher workspace
- Create readings
- Students
- Groups
- Share material
- iOS, Android, and web
- Payments
- Store assets
- Handoff docs

Do not show:

- `Expo`
- `TanStack Start`
- `Supabase`
- `RevenueCat`
- `Stripe`
- `OpenAI`
- `ReaderArtifactV2`
- `TapPolicyEngine`
- API endpoints
- Test counts
- Command output

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                                                    | What it supports in plain language                                                                                                |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/palabruno.mdx`                                  | The project took a nontechnical founder's idea from concept to launch across mobile and web.                                      |
| `src/content/case-studies/palabruno.mdx`                                  | The harder question was what the first commercial version should include and who it should serve first.                           |
| `src/content/case-studies/palabruno.mdx`                                  | Teachers were the clearer first buyer because they could create readings, send them to students, and bring students into the app. |
| `src/content/case-studies/palabruno.mdx`                                  | The solution split the MVP into a mobile reader and teacher web workspace.                                                        |
| `src/content/case-studies/palabruno.mdx`                                  | The launch included payments, store assets, legal pages, release docs, public-site copy, and founder handoff.                     |
| `src/lib/projects/palabruno.json`                                         | Metadata confirms the live iOS, Android, and web surfaces, teacher workflows, AI reading features, payments, and launch support.  |
| `/Users/hanifcarroll/projects/palabruno/docs/current-state.md`            | Current state confirms the shipped mobile app, live web app, App Store, Google Play, and public web URLs.                         |
| `/Users/hanifcarroll/projects/palabruno/docs/PRD.md`                      | Original product requirements support the teacher-led commercial engine and learner reading flow.                                 |
| `/Users/hanifcarroll/projects/palabruno/apps/mobile/lib/design-system.ts` | Brand colors for the video palette: warm canvas, ink text, burnt-orange brand, soft warm surfaces, and restrained dark accents.   |

## Proof Inventory

| Proof type     | Exact proof                                                          | Source path, URL, or command                                                                                     | Safe to show?                                                     | On-screen?              |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------- |
| Problem        | Case study states the founder idea needed MVP and buyer-path shaping | `src/content/case-studies/palabruno.mdx`                                                                         | Yes                                                               | Yes, as simplified text |
| Input          | Founder idea and Spanish reading concept                             | `src/content/case-studies/palabruno.mdx`; `/Users/hanifcarroll/projects/palabruno/docs/PRD.md`                   | Yes                                                               | Yes, as simplified text |
| Product action | Teacher creates readings from lesson material                        | `src/assets/img/projects/palabruno-teacher-create-reading.png`                                                   | Yes, public/synthetic asset                                       | Yes                     |
| Product action | Teacher manages students and groups                                  | `src/assets/img/projects/palabruno-teacher-students.png`; `src/assets/img/projects/palabruno-teacher-groups.png` | Yes, public/synthetic asset; composition avoids emphasizing names | Yes                     |
| Durable output | Teacher shares reading material and can review share history         | `src/assets/img/projects/palabruno-teacher-recent-shares.png`                                                    | Yes, public/synthetic asset; composition crops lightly            | Optional                |
| Launch surface | iOS, Android, web, payments, store pages, handoff notes              | `src/lib/projects/palabruno.json`; `/Users/hanifcarroll/projects/palabruno/docs/current-state.md`                | Yes                                                               | Yes, as native cards    |
| Reviewer path  | Portfolio case study and local app docs                              | `src/content/case-studies/palabruno.mdx`; `/Users/hanifcarroll/projects/palabruno/docs/current-state.md`         | Yes                                                               | No                      |

## Selected Story

1. A founder had a strong Spanish-reading idea.
2. The practical question was what to launch first.
3. Teachers became the clearest first buyer.
4. Palabruno became a mobile reader plus teacher workspace.
5. Teachers can create readings, manage classes, and share material.
6. The founder left with a product he could test in market.

## Scene Cards

### Scene 1: Problem

Purpose: show why the project needed product judgment, not only implementation.

Viewer should understand: the founder idea was strong, but launch shape was the hard part.

Visual source: project composite plus native idea cards.

On-screen text:

```text
A founder had a strong idea.
The harder question was what to launch first.
```

Narration: none

Duration: `6s`

Proof shown: simplified problem from case study and metadata.

Asset path: `hyperframes/assets/palabruno-founder-idea-launch.png`

Motion notes: warm opening, image reveal, idea cards slide in.

Reading-speed check: `14` words over `6s` = `140 WPM`.

### Scene 2: Cost

Purpose: identify the first commercial buyer path.

Viewer should understand: teachers had a repeated reason to use and pay for the product.

Visual source: teacher workspace screenshots and buyer-path cards.

On-screen text:

```text
A student reader helped learners.
Teachers were the clearer first buyer.
```

Narration: none

Duration: `6s`

Proof shown: case study and original PRD both support learner reader plus teacher-led commercial engine.

Asset path: `hyperframes/assets/palabruno-teacher-library.png`

Motion notes: two audience cards connect into the teacher workspace.

Reading-speed check: `11` words over `6s` = `110 WPM`.

### Scene 3: Solution

Purpose: introduce the actual product shape.

Viewer should understand: the MVP became two connected surfaces.

Visual source: composite mobile/web product screenshot.

On-screen text:

```text
I shaped Palabruno into two connected surfaces.
Mobile for learners. Web for teachers.
```

Narration: none

Duration: `6.5s`

Proof shown: portfolio case study and project metadata list mobile reader and teacher web workspace.

Asset path: `hyperframes/assets/palabruno-founder-idea-launch.png`

Motion notes: product composite lands as the hero proof.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 4: How It Works

Purpose: show teacher workflow in familiar words.

Viewer should understand: teachers can create, organize, and share reading material.

Visual source: teacher create-reading, groups, and recent-share screenshots.

On-screen text:

```text
Teachers create readings, manage students, organize groups, and share lesson material.
```

Narration: none

Duration: `6s`

Proof shown: public teacher workspace screenshots and case-study teacher screen notes.

Asset path: `hyperframes/assets/palabruno-teacher-create-reading.png`; `hyperframes/assets/palabruno-teacher-groups.png`; `hyperframes/assets/palabruno-teacher-recent-shares.png`

Motion notes: three product surfaces enter as a horizontal proof strip.

Reading-speed check: `11` words over `6s` = `110 WPM`.

### Scene 5: Result

Purpose: summarize what shipped.

Viewer should understand: the launch included product, payments, stores, and owner handoff.

Visual source: native launch-surface cards backed by metadata and current-state docs.

On-screen text:

```text
The launch included mobile apps, web, payments, store pages, and handoff notes.
```

Narration: none

Duration: `6.5s`

Proof shown: metadata outcomes and current-state live surfaces.

Asset path: native HyperFrames cards

Motion notes: launch cards assemble into one row with a product screenshot behind them.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 6: Why It Matters

Purpose: close with founder value and market test.

Viewer should understand: the project turned an idea into something ready for real teacher testing.

Visual source: final product composite with simple value statement.

On-screen text:

```text
Ready for real teacher testing.
```

Narration: none

Duration: `6s`

Proof shown: case-study result and metadata outcomes.

Asset path: `hyperframes/assets/palabruno-founder-idea-launch.png`

Motion notes: final statement and product surface hold long enough for thumbnail inspection.

Reading-speed check: `5` words over `6s` = `50 WPM`; the slower pace is intentional because the final product composite needs time to be inspected.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Palabruno
Ready for teacher testing.
```

Duration: `3s`

Motion notes: hold the final product composite, bring in the end card, then use a short soft fade.

Reading-speed check: `5` words over `3s` = `100 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                   | Word count | Duration | WPM |
| ----- | -------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | A founder had a strong idea. The harder question was what to launch first.             |         14 |       6s | 140 |
| 2     | A student reader helped learners. Teachers were the clearer first buyer.               |         11 |       6s | 110 |
| 3     | I shaped Palabruno into two connected surfaces. Mobile for learners. Web for teachers. |         13 |     6.5s | 120 |
| 4     | Teachers create readings, manage students, organize groups, and share lesson material. |         11 |       6s | 110 |
| 5     | The launch included mobile apps, web, payments, store pages, and handoff notes.        |         11 |     6.5s | 102 |
| 6     | Ready for real teacher testing.                                                        |          5 |       6s |  50 |
| End   | Palabruno. Ready for teacher testing.                                                  |          5 |       3s | 100 |

Allowed short labels:

- Problem
- First buyer
- Product shape
- Teacher workflow
- Launch surface
- Market test
- Learners
- Teachers
- Mobile reader
- Web workspace
- Create readings
- Students
- Groups
- Share material
- iOS
- Android
- Web
- Payments
- Store assets
- Handoff docs

## Asset Manifest

| Asset                  | Purpose                                             | Source                                                         | Redaction needed?                                              | Final path                                                                                                                                                                 |
| ---------------------- | --------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product composite      | Product proof and thumbnail frame                   | `src/assets/img/projects/palabruno-founder-idea-launch.png`    | No; public case-study asset                                    | `assets/selected/palabruno-founder-idea-launch.png`; HyperFrames aliases: `palabruno-product-problem.png`, `palabruno-product-solution.png`, `palabruno-product-final.png` |
| Teacher create reading | Scene 4 product action and scene 5 background proof | `src/assets/img/projects/palabruno-teacher-create-reading.png` | No; crop sidebar emphasis in composition                       | `assets/selected/palabruno-teacher-create-reading.png`; `hyperframes/assets/palabruno-teacher-create-reading.png`; alias: `palabruno-teacher-create-launch.png`            |
| Teacher library        | Scene 2 teacher workspace proof                     | `src/assets/img/projects/palabruno-teacher-library.png`        | No; crop/sidebar de-emphasis in composition                    | `assets/selected/palabruno-teacher-library.png`; `hyperframes/assets/palabruno-teacher-library.png`                                                                        |
| Teacher groups         | Scene 4 class organization proof                    | `src/assets/img/projects/palabruno-teacher-groups.png`         | No; synthetic/public example                                   | `assets/selected/palabruno-teacher-groups.png`; `hyperframes/assets/palabruno-teacher-groups.png`                                                                          |
| Recent shares          | Scene 4 sharing proof                               | `src/assets/img/projects/palabruno-teacher-recent-shares.png`  | No; synthetic/public example; do not zoom into recipient names | `assets/selected/palabruno-teacher-recent-shares.png`; `hyperframes/assets/palabruno-teacher-recent-shares.png`                                                            |

## Privacy Check

Hide:

- Runtime account data
- Real student contact details
- Billing/account details
- Tokens, cookies, local paths, and environment values
- Private founder/client notes

Safe to show:

- Public portfolio screenshots
- Synthetic teacher workspace examples
- Public project name
- Plain feature and launch-surface labels

Synthetic data used:

- Existing public screenshots appear to use synthetic teacher, student, reading, and date examples.

Redaction notes:

- Use public portfolio screenshots only.
- Crop or de-emphasize sidebar/account footer areas where possible.
- Do not enlarge table rows containing student names or recipients.

## HyperFrames Handoff

Composition duration: `40s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Founder idea and launch-shape question.
2. Learner reader versus teacher buyer path.
3. Two connected surfaces.
4. Teacher workflow proof strip.
5. Launch surface cards.
6. Product ready for real teacher testing.
7. Ending beat with project name and short result line.

Assets to copy into `hyperframes/assets/`:

- `assets/selected/palabruno-founder-idea-launch.png`
- `assets/selected/palabruno-teacher-create-reading.png`
- `assets/selected/palabruno-teacher-library.png`
- `assets/selected/palabruno-teacher-groups.png`
- `assets/selected/palabruno-teacher-recent-shares.png`
- HyperFrames-local aliases of repeated screenshots to avoid duplicate media discovery warnings.

Required transitions:

- Primary: push slide for adjacent story points.
- Accent: blur crossfade for solution reveal and final wind-down.
- No jump cuts.
- Hold the ending beat for `2.5-3s` before the final fade.

Required callouts:

- Short labels only: Problem, First buyer, Product shape, Teacher workflow, Launch surface, Market test.
- Native launch cards for iOS, Android, web, payments, store pages, and handoff notes.

Thumbnail frame:

- Scene 3 after the product composite appears, with the headline `I shaped Palabruno into two connected surfaces.`

## Acceptance Checklist

- [x] The video explains the problem, solution, and result.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen unless the chosen story mode requires them.
- [x] Each scene has one clear idea.
- [x] The ending beat holds for `2.5-3s` and does not introduce a new idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
