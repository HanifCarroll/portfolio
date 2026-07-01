# Project Video Source

This is the source of truth for the BA Eventos short product demo. The video should explain one search experience to a nontechnical viewer: scattered event information goes in, one plain question is asked, and a useful grounded result comes back.

## Project

Project name: BA Eventos

Repository: not public in the portfolio source

Local repo: not required for this video

Portfolio page source: `src/content/case-studies/ba-eventos.mdx`

Project metadata: `src/lib/projects/ba-eventos.json`

Primary viewer: nontechnical portfolio viewer

Target duration: `32s`

Video type: short product demo

Story mode: Short demo

## Plain Story

Problem: Buenos Aires event information is scattered across social posts, ticketing pages, venue sites, and chats.

Solution: BA Eventos gives visitors one plain-language search surface backed by a cleaned event and venue catalog.

Result: the answer returns real event options with category, venue, time, price, and links.

## One-Line Job

BA Eventos helps people find Buenos Aires plans by turning scattered local event data into one grounded search experience.

## Viewer Takeaway

This is an AI discovery product that turns scattered local event information into a useful plan.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Event
- Venue
- Tonight
- Category
- Time
- Price
- Link
- Search
- Catalog
- Grounded answer
- Useful plan

Do not show:

- `TanStack Start`
- `React`
- `TypeScript`
- `Claude`
- `OpenAI Embeddings`
- `pgvector`
- `Supabase`
- `Trigger.dev`
- API endpoints
- Database names
- Model names
- Command output
- Test counts

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                           | What it supports in plain language                                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/ba-eventos.mdx`        | Event information was scattered across Instagram, Facebook, Eventbrite, Passline, venue sites, and WhatsApp groups. |
| `src/content/case-studies/ba-eventos.mdx`        | The product is a working discovery experience over messy local data, not just a chat interface.                     |
| `src/content/case-studies/ba-eventos.mdx`        | Users ask natural questions around mood, neighborhood, timing, and social context.                                  |
| `src/content/case-studies/ba-eventos.mdx`        | The product uses semantic search and structured filters to keep answers tied to real records.                       |
| `src/content/case-studies/ba-eventos.mdx`        | The shipped catalog includes 800+ events and 190+ venues.                                                           |
| `src/lib/projects/ba-eventos.json`               | Metadata confirms the problem, solution, live URL, result, and product screenshots.                                 |
| `src/assets/img/projects/ba-eventos-hero.png`    | Public product surface with suggested event-search questions.                                                       |
| `src/assets/img/projects/ba-eventos-feature.png` | Public product surface with a search question, answer, and event result cards.                                      |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                       | Source path, URL, or command                                                  | Safe to show?                                                      | On-screen? |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------- |
| Problem              | Events are scattered across social posts, ticketing pages, venue sites, and chats.                                                | `src/content/case-studies/ba-eventos.mdx`; `src/lib/projects/ba-eventos.json` | Yes, as plain text and synthetic cards                             | Yes        |
| Input                | A visitor asks, "What's happening tonight?"                                                                                       | `src/assets/img/projects/ba-eventos-feature.png`                              | Yes, public case-study screenshot after sidebar identity redaction | Yes        |
| Product action       | BA Eventos searches real event and venue records.                                                                                 | `src/content/case-studies/ba-eventos.mdx`; `src/lib/projects/ba-eventos.json` | Yes, as plain labels and screenshot context                        | Yes        |
| Durable output       | The answer shows categories, event names, venues, times, prices, and links.                                                       | `src/assets/img/projects/ba-eventos-feature.png`                              | Yes, public case-study screenshot after sidebar identity redaction | Yes        |
| Saved record         | The catalog launched with 800+ events and 190+ venues.                                                                            | `src/content/case-studies/ba-eventos.mdx`; `src/lib/projects/ba-eventos.json` | Yes                                                                | Yes        |
| Guardrail or warning | Answers stay tied to real records instead of unsupported recommendations.                                                         | `src/content/case-studies/ba-eventos.mdx`; `src/lib/projects/ba-eventos.json` | Yes, as "grounded answer" copy                                     | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, feedback, project check, and build are required. | `docs/project-videos/capture-and-production-workflow.md`                      | Yes                                                                | No         |
| Reviewer path        | Portfolio case study and project metadata explain the product direction and shipped proof.                                        | `src/content/case-studies/ba-eventos.mdx`; `src/lib/projects/ba-eventos.json` | Yes                                                                | No         |

## Selected Story

1. Buenos Aires event information was scattered across too many places.
2. A visitor asks one simple question.
3. BA Eventos searches real records, not generic web text.
4. The answer becomes a usable plan with event details.
5. The catalog keeps hundreds of events and venues organized.
6. The final result is one grounded search experience.

## Scene Cards

### Scene 1: Problem

Purpose: show why the product exists.

Viewer should understand: event information was scattered across multiple places.

Visual source: native source cards over the BA Eventos product surface.

On-screen text:

```text
Buenos Aires plans were scattered.
Posts and event sites lived apart.
```

Narration: none.

Duration: `5.6s`

Proof shown: case-study problem and project metadata.

Asset path: `hyperframes/assets/ba-eventos-hero.png`

Motion notes: source cards enter from different directions while the product surface sits behind them.

Reading-speed check: `14` words over `5.6s` = `150 WPM`.

### Scene 2: Search

Purpose: show the user action.

Viewer should understand: the product accepts a plain-language event question.

Visual source: public hero screenshot and native query bubble.

On-screen text:

```text
A visitor asks one plain question.
What's happening tonight?
```

Narration: none.

Duration: `5.6s`

Proof shown: public screenshot includes the same question pattern.

Asset path: `hyperframes/assets/ba-eventos-hero.png`

Motion notes: query bubble slides in and the search input gets a soft highlight.

Reading-speed check: `8` words over `5.6s` = `86 WPM`.

### Scene 3: Grounded Search

Purpose: explain why the answer can be trusted.

Viewer should understand: the answer is tied to real event and venue records.

Visual source: public feature screenshot with answer visible.

On-screen text:

```text
BA Eventos searches real event records.
Events and venues stay attached to the answer.
```

Narration: none.

Duration: `6s`

Proof shown: screenshot answer and metadata around grounded event records.

Asset path: `hyperframes/assets/ba-eventos-feature.png`

Motion notes: feature screenshot lands, then record chips reveal.

Reading-speed check: `12` words over `6s` = `120 WPM`.

### Scene 4: Useful Result

Purpose: show the useful output.

Viewer should understand: the response gives enough details to choose a plan.

Visual source: public feature screenshot with result cards visible.

On-screen text:

```text
The answer becomes a usable plan.
Categories, times, venues, prices, and links are visible.
```

Narration: none.

Duration: `6.1s`

Proof shown: visible answer and event cards in the public screenshot.

Asset path: `hyperframes/assets/ba-eventos-feature.png`

Motion notes: answer area and event cards get subtle highlights.

Reading-speed check: `14` words over `6.1s` = `138 WPM`.

### Scene 5: Catalog

Purpose: connect the search result to the product operating layer.

Viewer should understand: the catalog has enough organized data to support useful search.

Visual source: native stat cards over the product surface.

On-screen text:

```text
The event list can keep improving.
800+ events and 190+ venues stay organized.
```

Narration: none.

Duration: `5.7s`

Proof shown: case-study shipped rows and project metadata.

Asset path: `hyperframes/assets/ba-eventos-feature.png`

Motion notes: stat cards assemble, then settle before the end card appears.

Reading-speed check: `12` words over `5.7s` = `126 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
BA Eventos
One grounded search.
```

Duration: `3s`

Motion notes: hold the final product surface, bring in the end card, then use a short soft fade after the card has settled.

Reading-speed check: `5` words over `3s` = `100 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                        | Word count | Duration | WPM |
| ----- | ------------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Buenos Aires plans were scattered. Posts and event sites lived apart.                       |         10 |     5.6s | 107 |
| 2     | A visitor asks one plain question. What's happening tonight?                                |          8 |     5.6s |  86 |
| 3     | BA Eventos searches real event records. Events and venues stay attached to the answer.      |         13 |       6s | 130 |
| 4     | The answer becomes a usable plan. Categories, times, venues, prices, and links are visible. |         14 |     6.1s | 138 |
| 5     | The event list can keep improving. 800+ events and 190+ venues stay organized.              |         13 |     5.7s | 137 |
| End   | BA Eventos. One grounded search.                                                            |          5 |       3s | 100 |

Allowed short labels:

- The problem
- One question
- Grounded search
- Useful result
- Catalog
- Instagram
- Ticketing pages
- Venue sites
- Chats
- Events
- Venues
- Time
- Price
- Link
- Category
- Real records
- 800+ events
- 190+ venues
- One grounded search

## Asset Manifest

| Asset                         | Purpose                           | Source                                           | Redaction needed?                | Final path                                                                               |
| ----------------------------- | --------------------------------- | ------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------- |
| BA Eventos hero screenshot    | Search prompt and product context | `src/assets/img/projects/ba-eventos-hero.png`    | Cover signed-in sidebar identity | `assets/redacted/ba-eventos-hero.png` and `hyperframes/assets/ba-eventos-hero.png`       |
| BA Eventos feature screenshot | Search answer and result cards    | `src/assets/img/projects/ba-eventos-feature.png` | Cover signed-in sidebar identity | `assets/redacted/ba-eventos-feature.png` and `hyperframes/assets/ba-eventos-feature.png` |
| Source cards                  | Problem scene                     | Case-study source list                           | No private data                  | Built natively in HyperFrames                                                            |
| Record chips                  | Grounding scene                   | Case-study grounded answer framing               | No private data                  | Built natively in HyperFrames                                                            |
| Catalog stat cards            | Result/catalog scene              | Case-study shipped rows and metadata             | No private data                  | Built natively in HyperFrames                                                            |

## Privacy Check

Hide:

- Signed-in sidebar identity
- Account/session details
- Tokens, cookies, local paths, and environment details
- Any private admin records that are not already in the public screenshots

Safe to show:

- Public BA Eventos screenshots after sidebar identity redaction
- Public project name
- Plain workflow labels
- Public catalog counts from the case study
- Synthetic cards, highlights, and proof labels created for this video

Synthetic data used:

- The source cards and proof chips are labels only.
- No private runtime records were captured.

Redaction notes:

- The selected source screenshots are copied from the public portfolio assets.
- The HyperFrames assets use redacted copies with the signed-in sidebar identity covered.

## HyperFrames Handoff

Composition duration: `32s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Scattered event sources.
2. One plain search question.
3. Search tied to real records.
4. Useful event result.
5. Organized catalog proof.
6. Ending beat with project name and result line.

Assets to copy into `hyperframes/assets/`:

- `assets/redacted/ba-eventos-hero.png`
- `assets/redacted/ba-eventos-feature.png`

Required transitions:

- Use quiet push transitions for the first two handoffs.
- Use a gentle fade/scale into the result scenes.
- Keep the screenshot readable whenever it is the proof surface.
- Hold the ending beat for `2.5-3s` before the final fade.

Thumbnail frame:

- Scene 4 after the result screenshot and highlights appear, with the headline `The answer becomes a usable plan.`

## Acceptance Checklist

- [ ] The video explains scattered event information, one search experience, and a useful result.
- [ ] The video can be understood by a nontechnical viewer.
- [ ] On-screen copy is pulled from the text lock above.
- [ ] Technical implementation details stay off-screen.
- [ ] Each scene has one clear idea.
- [ ] The ending beat holds for `2.5-3s` and does not introduce a new idea.
- [ ] Product screenshot remains legible.
- [ ] Signed-in sidebar identity is hidden in HyperFrames assets.
- [ ] The final render is created with the normal HyperFrames CLI.
