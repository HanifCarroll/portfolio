# Project Video Source

This is the source of truth for the Redwriter Comics visual portfolio scroll loop. The video should communicate the problem, professional review surface, and commission path in a short silent embed.

## Project

Project name: Redwriter Comics

Repository: portfolio source only

Local repo: `/Users/hanifcarroll/projects/portfolio`

Portfolio page source: `src/content/case-studies/redwriter-comics.mdx`

Project metadata: `src/lib/projects/redwriter-comics.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `16-17s`

Video type: visual portfolio scroll loop

Story mode: Short demo

## Plain Story

Problem: the artist's public work was scattered across social surfaces and files.

Solution: Redwriter Comics became one clean portfolio hub organized around editorial review.

Result: editors, publishers, and commissioners could review the work and move toward inquiry without asking for links first.

## One-Line Job

Redwriter Comics helps a professional comic artist turn scattered artwork into one review-ready portfolio and commission path.

## Viewer Takeaway

This is a visual launch-site build that turns scattered comic work into a professional review surface.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Artwork
- Portfolio hub
- Review surface
- Editors
- Publishers
- Commission path
- Inquiry

Do not show:

- `WordPress Custom Theme`
- CMS/admin views
- Stack names
- Test output
- Command output
- Local file paths

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source | What it supports in plain language |
| --- | --- |
| `src/content/case-studies/redwriter-comics.mdx:35-45` | The work was impressive, but the presentation was fragmented and made professional review harder. |
| `src/content/case-studies/redwriter-comics.mdx:48-50` | The business objective was to make commission conversations easier through one professional home. |
| `src/content/case-studies/redwriter-comics.mdx:55-62` | The galleries were organized around how editors inspect sequential art, covers, and character work. |
| `src/content/case-studies/redwriter-comics.mdx:76-82` | The site connected portfolio review with a direct path to reach out for professional work. |
| `src/content/case-studies/redwriter-comics.mdx:86-89` | The shipped result was a professional review surface for editors, publishers, and commissions. |
| `src/lib/projects/redwriter-comics.json:15-20` | Metadata confirms the constraint, problem, solution, and result framing. |

## Proof Inventory

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem | Artwork and social proof were scattered before the portfolio hub. | `src/content/case-studies/redwriter-comics.mdx:35-45` | Yes, as plain text and synthetic artwork cards | Yes |
| Product surface | Redwriter Comics public hero and portfolio surface. | `src/assets/img/projects/redwriter-hero.png`; `src/assets/img/projects/redwriter-feature.png` | Yes, public portfolio assets | Yes |
| Product action | Galleries organized for editorial scan and comparison. | `src/content/case-studies/redwriter-comics.mdx:55-62` | Yes, as short labels | Yes |
| Durable output | One professional review surface for editors, publishers, and commissions. | `src/content/case-studies/redwriter-comics.mdx:86-89` | Yes | Yes |
| Commission path | Review could move to inquiry without asking for links or files first. | `src/content/case-studies/redwriter-comics.mdx:76-82`; `src/lib/projects/redwriter-comics.json:20` | Yes | Yes |
| Verification | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, project checks, build, and feedback. | `docs/project-videos/capture-and-production-workflow.md` | Yes | No |

## Selected Story

1. Artwork was scattered.
2. One portfolio hub made review easier.
3. Review could turn into commission conversations.
4. Redwriter Comics is ready for portfolio review and commissions.

## Scene Cards

### Scene 1: Scattered Artwork

Purpose: show why the site existed.

Viewer should understand: the artist had strong work, but it needed one review path.

Visual source: public Redwriter feature artwork split into synthetic scattered portfolio sheets.

On-screen text:

```text
Artwork was scattered.
Editors needed one review path.
```

Narration: none

Duration: `4.5s`

Proof shown: case-study problem and metadata constraint.

Asset path: `hyperframes/assets/redwriter-feature.png`

Motion notes: artwork sheets drift in from different directions over a red editorial canvas.

Reading-speed check: `8` words over `4.5s` = `107 WPM`.

### Scene 2: Professional Review Surface

Purpose: show the solution surface.

Viewer should understand: the portfolio hub made the work easier to review.

Visual source: Redwriter hero and portfolio feature screenshots inside a browser-like review frame.

On-screen text:

```text
One portfolio hub made review easier.
```

Narration: none

Duration: `4.5s`

Proof shown: public project surface and case-study product direction.

Asset path: `hyperframes/assets/redwriter-hero.png`; `hyperframes/assets/redwriter-feature.png`

Motion notes: the site surface settles, then the artwork panel scrolls slightly.

Reading-speed check: `6` words over `4.5s` = `80 WPM`.

### Scene 3: Commission Path

Purpose: show the result.

Viewer should understand: a clear review surface makes inquiry easier.

Visual source: portfolio-to-review-to-connect path built natively with public assets.

On-screen text:

```text
Review could turn into commission conversations.
```

Narration: none

Duration: `4.5s`

Proof shown: case-study work and result sections.

Asset path: `hyperframes/assets/redwriter-feature.png`; `hyperframes/assets/redwriter-logo.webp`

Motion notes: three path cards connect from artwork to review to connect.

Reading-speed check: `6` words over `4.5s` = `80 WPM`.

### Scene 4: Ending Beat

Purpose: give the loop a clean stopping point.

Viewer should understand: Redwriter Comics is a review-ready commission portfolio.

Visual source: public logo over the Redwriter hero surface.

On-screen text:

```text
Redwriter Comics
Portfolio review, ready for commissions.
```

Narration: none

Duration: `3s`

Proof shown: project result.

Asset path: `hyperframes/assets/redwriter-logo.webp`; `hyperframes/assets/redwriter-hero.png`

Motion notes: logo and result line appear quickly, then hold without introducing a new idea.

Reading-speed check: `8` words over `3s` = `160 WPM`; acceptable because the project name is known and the result line is short.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Redwriter Comics
Portfolio review, ready for commissions.
```

Duration: `3s`

Motion notes: hold the final project frame for `3s`; no new proof appears during the hold.

Reading-speed check: `8` words over `3s` = `160 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| 1 | Artwork was scattered. Editors needed one review path. | 8 | 4.5s | 107 |
| 2 | One portfolio hub made review easier. | 6 | 4.5s | 80 |
| 3 | Review could turn into commission conversations. | 6 | 4.5s | 80 |
| End | Redwriter Comics. Portfolio review, ready for commissions. | 8 | 3s | 160 |

Allowed short labels:

- Artwork
- Portfolio
- Review
- Connect
- Sequential
- Covers
- Character
- Editors
- Publishers
- Commission path

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
| Redwriter hero | Brand/site proof and ending frame | `src/assets/img/projects/redwriter-hero.png` | No; public portfolio asset | `assets/selected/redwriter-hero.png`; `hyperframes/assets/redwriter-hero.png` |
| Redwriter feature | Artwork review surface and scattered sheets | `src/assets/img/projects/redwriter-feature.png` | No; public portfolio asset | `assets/selected/redwriter-feature.png`; `hyperframes/assets/redwriter-feature.png` |
| Redwriter logo | Ending mark and path card | `public/logos/redwriter.webp` | No; public logo | `assets/selected/redwriter-logo.webp`; `hyperframes/assets/redwriter-logo.webp` |

The HyperFrames composition also keeps local aliases of repeated public screenshots in `hyperframes/assets/` so the renderer does not report duplicate-media discovery warnings.

## Privacy Check

Hide:

- Private client notes and correspondence
- CMS/admin surfaces
- Account data
- Tokens, cookies, local paths, and environment values

Safe to show:

- Public portfolio screenshots
- Public Redwriter logo
- Public project name
- Plain portfolio-review labels created in HyperFrames

Synthetic data used:

- Path labels and review cards are synthetic; public screenshots carry the visual proof.

Redaction notes:

- No private CMS, runtime, account, or client communication data was captured.

## HyperFrames Handoff

Composition duration: `16.5s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Scattered artwork pieces.
2. Professional portfolio review surface.
3. Path from review to inquiry.
4. Ending beat with project name and result line.

Assets to copy into `hyperframes/assets/`:

- `assets/selected/redwriter-hero.png`
- `assets/selected/redwriter-feature.png`
- `assets/selected/redwriter-logo.webp`

Required transitions:

- Use brisk push transitions between story beats.
- Keep the portfolio surface legible.
- Hold the ending beat for `3s`.

Required callouts:

- Short labels only: Artwork, Portfolio, Review, Connect.

Thumbnail frame:

- Scene 2 after the portfolio surface appears, with the headline `One portfolio hub made review easier.`

## Acceptance Checklist

- [x] The video explains scattered artwork, professional review surface, and commission path.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
