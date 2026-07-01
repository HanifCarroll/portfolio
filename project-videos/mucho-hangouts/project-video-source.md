# Project Video Source

This is the source of truth for the Mucho Hangouts engineering contribution clip. The video should explain the problem, contribution, and result in simple terms. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Mucho Hangouts

Repository: private client project

Local repo: not used for this clip

Portfolio page source: `src/content/case-studies/mucho-hangouts.mdx`

Project metadata: `src/lib/projects/mucho-hangouts.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `30s`

Video type: engineering contribution clip

Story mode: Short demo

## Plain Story

Problem: the social events product was live, but reliability and team velocity were becoming risks.

Solution: targeted engineering contribution stabilized product foundations, core social flows, and delivery patterns while roadmap work continued.

Result: messaging, notifications, and team delivery became more dependable.

## One-Line Job

Mucho Hangouts needed its live social product to become more reliable while the team kept shipping.

## Viewer Takeaway

This contribution stabilized core social workflows and left the team with clearer delivery patterns.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Live product
- Social events
- Messaging
- Notifications
- Product foundations
- Team patterns
- Code review
- Pairing
- Safer defaults
- Kept shipping

Do not show:

- The client field as a role title
- Stack names
- API endpoint names
- Schema names
- Test counts
- Command output
- Private team or client notes

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source | What it supports in plain language |
| --- | --- |
| `src/content/case-studies/mucho-hangouts.mdx:34-45` | The product was live, and reliability plus team velocity were becoming risks. |
| `src/content/case-studies/mucho-hangouts.mdx:48-62` | The work needed stronger product foundations and clearer development patterns without stopping the roadmap. |
| `src/content/case-studies/mucho-hangouts.mdx:73-80` | Messaging, notifications, code review, pairing, and technical direction were the main contribution areas. |
| `src/content/case-studies/mucho-hangouts.mdx:84-90` | The result improved reliability and team velocity without turning cleanup into a stalled rewrite. |
| `src/lib/projects/mucho-hangouts.json:17-43` | Metadata confirms the constraints, problem, solution, and result framing. |
| `src/assets/img/projects/mucho-hangouts-hero.png` | Public event-detail surface for proof of the product context. |
| `src/assets/img/projects/mucho-hangouts-feature.png` | Public share-modal and notification surface for proof of social workflow context. |

## Proof Inventory

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem | Live product with reliability and team-velocity risks | `src/content/case-studies/mucho-hangouts.mdx:34-45` | Yes, as simplified text | Yes |
| Input | Social events product surface with event detail and organizer actions | `src/assets/img/projects/mucho-hangouts-hero.png` | Yes, public portfolio asset | Yes |
| Product action | Messaging, notifications, and share flow context | `src/assets/img/projects/mucho-hangouts-feature.png` | Yes, public portfolio asset | Yes |
| Engineering contribution | Targeted foundation work, clearer flows, code review, and pairing | `src/content/case-studies/mucho-hangouts.mdx:55-80` | Yes, as simplified labels | Yes |
| Durable output | More dependable product and clearer delivery patterns | `src/content/case-studies/mucho-hangouts.mdx:84-90`; `src/lib/projects/mucho-hangouts.json:35-43` | Yes | Yes |
| Reviewer path | Portfolio case study and metadata explain the work | `src/content/case-studies/mucho-hangouts.mdx`; `src/lib/projects/mucho-hangouts.json` | Yes | No |

## Selected Story

1. The product was already live.
2. Reliability and team speed were becoming risks.
3. Targeted engineering tightened the foundations.
4. Messaging and notifications became steadier.
5. Code review and pairing made safer defaults repeatable.
6. The team kept shipping on a more dependable foundation.

## Scene Cards

### Scene 1: Problem

Purpose: show why the contribution mattered.

Viewer should understand: the live product needed more dependable foundations.

Visual source: public event-detail screenshot plus simple risk chips.

On-screen text:

```text
The product was live.
Reliability and team speed were becoming risks.
```

Narration: none.

Duration: `5.6s`

Proof shown: problem from case study and metadata.

Asset path: `hyperframes/assets/mucho-hangouts-hero.png`

Motion notes: screenshot settles while risk chips enter.

Reading-speed check: `10` words over `5.6s` = `107 WPM`.

### Scene 2: Contribution

Purpose: name the engineering contribution in plain language.

Viewer should understand: targeted foundation work made the product easier to extend.

Visual source: native foundation rail and product screenshot crop.

On-screen text:

```text
I tightened the foundations.
Core flows got clearer and easier to extend.
```

Narration: none.

Duration: `5.7s`

Proof shown: case-study product direction and metadata solution.

Asset path: `hyperframes/assets/mucho-hangouts-hero.png`

Motion notes: foundation cards connect into one rail.

Reading-speed check: `11` words over `5.7s` = `116 WPM`.

### Scene 3: Core Workflows

Purpose: show the specific product surface that needed stronger behavior.

Viewer should understand: messaging and notifications were core coordination flows.

Visual source: public share-modal screenshot and notification context.

On-screen text:

```text
Messaging and notifications got steadier.
Everyday coordination needed fewer fragile moments.
```

Narration: none.

Duration: `5.7s`

Proof shown: case-study work section and public product surface.

Asset path: `hyperframes/assets/mucho-hangouts-feature.png`

Motion notes: product surface holds while small workflow chips enter.

Reading-speed check: `10` words over `5.7s` = `105 WPM`.

### Scene 4: Team Patterns

Purpose: make the team contribution concrete.

Viewer should understand: the work left patterns the junior team could reuse.

Visual source: native review, pairing, and safer-default cards.

On-screen text:

```text
Senior judgment became repeatable.
Code review and pairing gave juniors safer defaults.
```

Narration: none.

Duration: `5.7s`

Proof shown: case-study team-mentoring section.

Asset path: native HyperFrames cards.

Motion notes: three cards enter in order and lock into a delivery strip.

Reading-speed check: `10` words over `5.7s` = `105 WPM`.

### Scene 5: Result

Purpose: close the story with the result.

Viewer should understand: reliability improved while delivery continued.

Visual source: public product surface plus result chips.

On-screen text:

```text
The team kept shipping.
The product became more dependable during cleanup.
```

Narration: none.

Duration: `5.9s`

Proof shown: case-study shipped rows and metadata result.

Asset path: `hyperframes/assets/mucho-hangouts-hero.png`

Motion notes: product screenshot returns with result chips.

Reading-speed check: `10` words over `5.9s` = `102 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Mucho Hangouts
Reliable social workflows, clearer delivery.
```

Duration: `3s`

Motion notes: hold the end card cleanly for `2.5-3s`; final fade happens after the card has settled.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| 1 | The product was live. Reliability and team speed were becoming risks. | 10 | 5.6s | 107 |
| 2 | I tightened the foundations. Core flows got clearer and easier to extend. | 11 | 5.7s | 116 |
| 3 | Messaging and notifications got steadier. Everyday coordination needed fewer fragile moments. | 10 | 5.7s | 105 |
| 4 | Senior judgment became repeatable. Code review and pairing gave juniors safer defaults. | 10 | 5.7s | 105 |
| 5 | The team kept shipping. The product became more dependable during cleanup. | 10 | 5.9s | 102 |
| End | Mucho Hangouts. Reliable social workflows, clearer delivery. | 6 | 3s | 120 |

Allowed short labels:

- Problem
- Contribution
- Core workflows
- Team patterns
- Result
- Live product
- Reliability
- Team speed
- Clearer flows
- Easier to extend
- Message
- Notify
- Share
- Review
- Pair
- Safer defaults
- Kept shipping
- More dependable

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
| Event detail screenshot | Product proof, problem frame, result frame, and poster frame | `src/assets/img/projects/mucho-hangouts-hero.png` | No; public portfolio asset | `assets/selected/mucho-hangouts-hero.png`; `hyperframes/assets/mucho-hangouts-hero.png` |
| Share modal screenshot | Core workflow proof for messaging, notifications, and share context | `src/assets/img/projects/mucho-hangouts-feature.png` | No; public portfolio asset | `assets/selected/mucho-hangouts-feature.png`; `hyperframes/assets/mucho-hangouts-feature.png` |
| Foundation rail | Contribution scene | Case-study product direction section | No private data | Build natively in HyperFrames |
| Team pattern cards | Team patterns scene | Case-study work and shipped rows | No private data | Build natively in HyperFrames |
| Result chips | Result scene | Case-study shipped rows and metadata result | No private data | Build natively in HyperFrames |

## Privacy Check

Hide:

- Runtime accounts and private user data
- Private team/client notes
- Credentials, tokens, cookies, local paths, and environment values
- Private messages or live conversations

Safe to show:

- Existing public portfolio screenshots
- Public project name
- Plain contribution and workflow labels
- Native cards and chips created for this video

Synthetic data used:

- All native cards and rails use synthetic labels only.

Redaction notes:

- No new live capture was performed.
- The HyperFrames composition uses only public portfolio assets and native graphics.

## HyperFrames Handoff

Composition duration: `30s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Live product problem with event-detail screenshot.
2. Engineering foundation contribution.
3. Messaging and notification workflow proof.
4. Team-pattern contribution through review and pairing.
5. Delivery and reliability result.
6. Ending beat with project name and short result line.

Assets to copy into `hyperframes/assets/`:

- `assets/selected/mucho-hangouts-hero.png`
- `assets/selected/mucho-hangouts-feature.png`

Required transitions:

- Quiet push and fade transitions between adjacent scenes.
- Keep product screenshots steady after entry.
- Hold the ending beat for `2.5-3s` before the final fade.

Required callouts:

- Short labels only: Problem, Contribution, Core workflows, Team patterns, Result.
- Native cards for risk, foundation, workflow, team-pattern, and result proof.

Thumbnail frame:

- Scene 2 after the foundation cards appear, with the headline `I tightened the foundations.`

## Acceptance Checklist

- [x] The video explains the problem, contribution, and result.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] The client field is not described as a role title.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] The ending beat holds for `2.5-3s` and does not introduce a new idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
