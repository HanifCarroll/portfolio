# Project Video Source

This is the source of truth for the Maximo Interiorismo visual site loop. The video should show the launched portfolio surface, keep text minimal, and make the story clear: design portfolio, cleaner presentation, inquiry path.

## Project

Project name: Maximo Interiorismo

Repository: not public in the portfolio source

Local repo: not required for this video

Portfolio page source: `src/content/case-studies/maximo-interiorismo.mdx`

Project metadata: `src/lib/projects/maximo-interiorismo.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `18s`

Video type: visual site scroll loop

Story mode: Short demo

## Plain Story

Problem: the designer's high-end interior work was underrepresented online.

Solution: the site gave the work a restrained, premium presentation with project imagery in the foreground.

Result: prospects could review the portfolio more cleanly and move toward an inquiry conversation.

## One-Line Job

Maximo Interiorismo helps an interior designer present premium work online by turning scattered visual proof into a cleaner portfolio and inquiry path.

## Viewer Takeaway

This is a launch-site build that turns strong interior work into a credible public portfolio.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Portfolio site
- Public home
- Interior work
- Project presentation
- Review
- Inquiry path
- Consultation

Do not show:

- Stack names
- Build tools
- Command output
- Test counts
- Local paths
- Private client details

## Source Review Notes

| Source                                             | What it supports in plain language                                                            |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `src/content/case-studies/maximo-interiorismo.mdx` | The site made the designer look as established online as he already was in person.            |
| `src/content/case-studies/maximo-interiorismo.mdx` | The design kept the interior work in the foreground instead of burying it under generic copy. |
| `src/content/case-studies/maximo-interiorismo.mdx` | The site gave prospects a cleaner way to inspect the work before reaching out.                |
| `src/lib/projects/maximo-interiorismo.json`        | Metadata confirms the credibility, cleaner presentation, and consultation-path framing.       |
| `src/assets/img/projects/maximo-hero.png`          | Public hero screenshot shows the branded portfolio opening.                                   |
| `src/assets/img/projects/maximo-feature.png`       | Public feature screenshot shows project presentation and navigation.                          |

## Proof Inventory

| Proof type      | Exact proof                                                                                 | Source path, URL, or command                                                                     | Safe to show?           | On-screen?           |
| --------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------- | -------------------- |
| Problem         | The designer needed a stronger public home for high-end interior work.                      | `src/content/case-studies/maximo-interiorismo.mdx`                                               | Yes, as simplified text | Yes                  |
| Product surface | Branded hero and project detail screenshots.                                                | `src/assets/img/projects/maximo-hero.png`; `src/assets/img/projects/maximo-feature.png`          | Yes, public assets      | Yes                  |
| Product action  | Prospects can review projects through a clean portfolio presentation.                       | `src/content/case-studies/maximo-interiorismo.mdx`; `src/assets/img/projects/maximo-feature.png` | Yes                     | Yes                  |
| Durable output  | The designer has a credible, shareable portfolio site.                                      | `src/lib/projects/maximo-interiorismo.json`                                                      | Yes                     | Yes                  |
| Inquiry path    | Navigation and case-study copy support the path from review to conversation.                | `src/content/case-studies/maximo-interiorismo.mdx`; `src/lib/projects/maximo-interiorismo.json`  | Yes                     | Yes, as plain labels |
| Verification    | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, build checks, and feedback. | `docs/project-videos/capture-and-production-workflow.md`                                         | Yes                     | No                   |

## Selected Story

1. The designer needed a stronger public home.
2. The site lets the interior work lead.
3. The presentation moves review toward inquiry.
4. The final frame holds the project name and result line.

## Scene Cards

### Scene 1: Design Portfolio

Purpose: open on the branded public site.

Viewer should understand: the designer now has a stronger portfolio home.

Visual source: Maximo hero screenshot.

On-screen text:

```text
A stronger public home.
```

Narration: none.

Duration: `4.4s`

Proof shown: public hero screenshot and project metadata.

Asset path: `hyperframes/assets/maximo-hero.png`

Motion notes: full-bleed hero image enters with a slow push; text lands quietly over the image.

Reading-speed check: `4` words over `4.4s` = `55 WPM`.

### Scene 2: Cleaner Presentation

Purpose: show the portfolio work carrying the pitch.

Viewer should understand: the site presentation keeps the interior work first.

Visual source: Maximo project detail screenshot.

On-screen text:

```text
The work stays first.
```

Narration: none.

Duration: `4.3s`

Proof shown: public feature screenshot and case-study product-direction notes.

Asset path: `hyperframes/assets/maximo-feature-presentation.png`

Motion notes: framed screenshot scrolls gently to create the site-loop feel.

Reading-speed check: `4` words over `4.3s` = `56 WPM`.

### Scene 3: Inquiry Path

Purpose: connect project review with the next step.

Viewer should understand: the site makes the path from review to inquiry clearer.

Visual source: Maximo project detail screenshot with navigation and proof labels.

On-screen text:

```text
Review leads to inquiry.
```

Narration: none.

Duration: `4.3s`

Proof shown: portfolio navigation and case-study consultation-path framing.

Asset path: `hyperframes/assets/maximo-feature-inquiry.png`

Motion notes: navigation and inquiry labels enter as small proof chips over the site surface.

Reading-speed check: `4` words over `4.3s` = `56 WPM`.

## Ending Beat

Purpose: give the loop a clean final hold.

On-screen text:

```text
Maximo Interiorismo
Portfolio to consultation.
```

Duration: `5s`, with the final `3s` held without new motion.

Motion notes: logo and result line enter, then hold cleanly.

Reading-speed check: `5` words over `5s` = `60 WPM`.

## On-Screen Text Lock

| Scene | Text                                            | Word count | Duration | WPM |
| ----- | ----------------------------------------------- | ---------: | -------: | --: |
| 1     | A stronger public home.                         |          4 |     4.4s |  55 |
| 2     | The work stays first.                           |          4 |     4.3s |  56 |
| 3     | Review leads to inquiry.                        |          4 |     4.3s |  56 |
| End   | Maximo Interiorismo. Portfolio to consultation. |          5 |       5s |  60 |

Allowed short labels:

- Project presentation
- Portfolio review
- Inquiry path
- Consultation

## Asset Manifest

| Asset                     | Purpose                                       | Source                                       | Redaction needed? | Final path                                                                                                                 |
| ------------------------- | --------------------------------------------- | -------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Maximo hero screenshot    | Opening proof surface                         | `src/assets/img/projects/maximo-hero.png`    | No; public asset  | `assets/selected/maximo-hero.png`; `hyperframes/assets/maximo-hero.png`                                                    |
| Maximo feature screenshot | Portfolio presentation and inquiry path proof | `src/assets/img/projects/maximo-feature.png` | No; public asset  | `assets/selected/maximo-feature.png`; HyperFrames aliases: `maximo-feature-presentation.png`, `maximo-feature-inquiry.png` |
| Maximo logo               | Ending beat brand mark                        | `public/logos/maximo.png`                    | No; public asset  | `assets/selected/maximo-logo.png`; `hyperframes/assets/maximo-logo.png`                                                    |

## Privacy Check

Hide: no private material is used.

Safe to show: public site screenshots, public logo, public project name, and plain portfolio-result copy.

Synthetic data used: none.

Redaction notes: no redaction required.

## HyperFrames Handoff

Composition duration: `18s`

Aspect ratio: `1920x1080`

Scenes to build:

1. Design portfolio
2. Cleaner presentation
3. Inquiry path
4. Ending beat

Assets to copy into `hyperframes/assets/`:

- `maximo-hero.png`
- `maximo-feature-presentation.png`
- `maximo-feature-inquiry.png`
- `maximo-logo.png`

Required transitions: calm blur crossfades between scenes.

Required callouts: small labels only; no technical implementation copy.

Thumbnail frame: ending beat or scene 2 framed screenshot.

## Acceptance Checklist

- [x] The loop shows the real public site surface.
- [x] The loop can be understood without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] Public screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
