# Project Video Source

This is the source of truth for the Desarmadero Latorre walkthrough loop. The video should show a simple catalog workflow: stock questions move from phone-first checks to search, part context, and clearer contact.

## Project

Project name: Desarmadero Latorre

Repository: not public in the portfolio source

Local repo: portfolio case study only

Portfolio page source: `src/content/case-studies/desarmadero-latorre.mdx`

Project metadata: `src/lib/projects/desarmadero-latorre.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `21s`

Video type: catalog/workflow walkthrough loop

Story mode: Short product walkthrough

## Plain Story

Problem: customers had to call or visit to check whether a part or vehicle was available.

Solution: a searchable online catalog exposed inventory by make, model, and year.

Result: customers could search first, inspect useful listing context, and contact the shop with a clearer question.

## One-Line Job

Desarmadero Latorre helps auto-parts customers check stock before calling by turning inventory into a searchable digital catalog.

## Viewer Takeaway

This is a practical workflow improvement that turns a phone-heavy stock check into a clearer search-to-contact path.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Stock
- Catalog
- Search
- Make
- Model
- Year
- Listing
- Photos
- Vehicle details
- Contact
- Clearer question
- Digital stockroom

Do not show:

- Webflow implementation details
- CMS internals
- Private inventory admin data
- Customer information
- Local file paths
- Command output

## Source Review Notes

| Source | What it supports in plain language |
| --- | --- |
| `src/lib/projects/desarmadero-latorre.json:4-21` | The project turned phone-heavy sales into a searchable 24/7 digital catalog. |
| `src/content/case-studies/desarmadero-latorre.mdx:34-45` | The business had changing auto-parts inventory and customers depended on calls or visits. |
| `src/content/case-studies/desarmadero-latorre.mdx:54-80` | The product centered on search by make, model, and year plus a direct inquiry path. |
| `src/content/case-studies/desarmadero-latorre.mdx:84-99` | The shipped result made the workflow less dependent on repetitive phone checks. |
| `src/assets/img/projects/desarmadero-feature.png` | Public catalog screenshot showing search filters, result cards, photos, year, and details buttons. |
| `src/assets/img/projects/desarmadero-parts-stockroom-photo.png` | Public stockroom photo showing the parts inventory context. |

## Proof Inventory

| Proof type | Exact proof | Source path, URL, or command | Safe to show? | On-screen? |
| --- | --- | --- | --- | --- |
| Problem | Customers had to call or visit to check stock. | `src/lib/projects/desarmadero-latorre.json:19` | Yes, as plain text | Yes |
| Input | Make, model, and year search filters. | `src/assets/img/projects/desarmadero-feature.png` | Yes, public screenshot | Yes |
| Product action | Customer searches the catalog before contacting the shop. | `src/content/case-studies/desarmadero-latorre.mdx:56-57` | Yes | Yes |
| Listing context | Vehicle photos, year, and details buttons. | `src/assets/img/projects/desarmadero-feature.png` | Yes, public screenshot | Yes |
| Durable output | The business gained an always-on digital stockroom. | `src/lib/projects/desarmadero-latorre.json:21` | Yes | Yes |
| Guardrail or warning | Staff workflow stayed lightweight for changing inventory. | `src/lib/projects/desarmadero-latorre.json:16-20` | Yes, as backing note | No |
| Verification | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, project check, build, and feedback. | `docs/project-videos/capture-and-production-workflow.md` | Yes | No |
| Reviewer path | Portfolio case study explains the business workflow and shipped surface. | `src/content/case-studies/desarmadero-latorre.mdx` | Yes | No |

## Selected Story

1. Stock checks started by phone.
2. The catalog made inventory searchable.
3. Listings gave customers useful part context.
4. The workflow became search, inspect, then contact.
5. The business gained a searchable digital stockroom.

## Scene Cards

### Scene 1: Phone-First Stock Checks

Purpose: show the old workflow friction.

Viewer should understand: staff had to answer repeated availability questions.

Visual source: public stockroom photo plus native phone/question cards.

On-screen text:

```text
Stock checks started by phone.
Staff repeated availability checks.
```

Narration: none.

Duration: `4.4s`

Proof shown: case-study problem and public stockroom photo.

Asset path: `hyperframes/assets/parts-stockroom.png`.

Motion notes: photo lands as the business context; call cards stack over it.

Reading-speed check: `8` words over `4.4s` = `109 WPM`.

### Scene 2: Searchable Catalog Surface

Purpose: introduce the customer-facing product surface.

Viewer should understand: buyers can search by make and model before contacting the shop.

Visual source: public catalog screenshot with search panel emphasis.

On-screen text:

```text
The catalog made stock searchable.
Make and model come first.
```

Narration: none.

Duration: `4.4s`

Proof shown: catalog screenshot and case-study product direction.

Asset path: `hyperframes/assets/desarmadero-catalog.png`.

Motion notes: screenshot slides in; search fields and button receive native callouts.

Reading-speed check: `10` words over `4.4s` = `136 WPM`.

### Scene 3: Part Information

Purpose: show the useful listing context.

Viewer should understand: the catalog result is not just a name; it includes visual and vehicle context.

Visual source: public catalog result cards plus native chips.

On-screen text:

```text
Listings carry context.
Photos, year, and vehicle details.
```

Narration: none.

Duration: `4.4s`

Proof shown: catalog result cards with photos, year, and details actions.

Asset path: `hyperframes/assets/desarmadero-catalog.png`.

Motion notes: listing cards float forward; context chips assemble beside them.

Reading-speed check: `7` words over `4.4s` = `95 WPM`.

### Scene 4: Clearer Workflow

Purpose: show the before-contact workflow in one clear path.

Viewer should understand: customers search, inspect, then contact with a specific question.

Visual source: native workflow rail over the catalog screenshot.

On-screen text:

```text
The workflow got clearer.
Search, inspect, then contact.
```

Narration: none.

Duration: `4.8s`

Proof shown: case-study result and direct inquiry path.

Asset path: `hyperframes/assets/desarmadero-catalog.png`.

Motion notes: three-step rail builds from left to right; contact card appears last.

Reading-speed check: `7` words over `4.8s` = `88 WPM`.

## Ending Beat

Purpose: give the loop a clean settled end.

On-screen text:

```text
Desarmadero Latorre
A searchable digital stockroom.
```

Duration: `3s`

Motion notes: hold product surface and end card without introducing a new argument.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text | Word count | Duration | WPM |
| --- | --- | ---: | ---: | ---: |
| 1 | Stock checks started by phone. Staff repeated availability checks. | 8 | 4.4s | 109 |
| 2 | The catalog made stock searchable. Make and model come first. | 10 | 4.4s | 136 |
| 3 | Listings carry context. Photos, year, and vehicle details. | 7 | 4.4s | 95 |
| 4 | The workflow got clearer. Search, inspect, then contact. | 7 | 4.8s | 88 |
| End | Desarmadero Latorre. A searchable digital stockroom. | 6 | 3s | 120 |

Allowed short labels:

- Phone
- Stock check
- Search
- Make
- Model
- Year
- Photos
- Details
- Inspect
- Contact
- Specific question

## Asset Manifest

| Asset | Purpose | Source | Redaction needed? | Final path |
| --- | --- | --- | --- | --- |
| Catalog screenshot | Search surface, listing cards, part context, end frame | `src/assets/img/projects/desarmadero-feature.png` | Already public | `assets/selected/desarmadero-catalog.png`; `hyperframes/assets/desarmadero-catalog.png` |
| Stockroom photo | Business context for phone-heavy inventory checks | `src/assets/img/projects/desarmadero-parts-stockroom-photo.png` | Already public | `assets/selected/parts-stockroom.png`; `hyperframes/assets/parts-stockroom.png` |
| Workflow rail | Search-to-contact explanation | Built natively in HyperFrames | No private data | `hyperframes/index.html` |

## Privacy Check

Hide:

- Private inventory admin views
- Customer details
- Account data
- Tokens, cookies, and local paths

Safe to show:

- Public catalog screenshot
- Public stockroom photo
- Public project name
- Synthetic workflow labels

Synthetic data used:

- Native callout cards and workflow labels only.

Redaction notes:

- The selected images are already public portfolio assets. No private customer records, admin screens, or account data are used.

## HyperFrames Handoff

Composition duration: `21s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Phone-first stock checks
2. Searchable catalog surface
3. Part information
4. Clearer workflow
5. Ending beat

Assets to copy into `hyperframes/assets/`:

- `desarmadero-catalog.png`
- `parts-stockroom.png`

Required transitions:

- Push slide between the workflow beats.
- Gentle blur crossfade into the ending beat.

Required callouts:

- Search panel emphasis.
- Listing context chips.
- Search, inspect, contact workflow rail.

Thumbnail frame: `18.5s`, settled end card over catalog surface.

## Acceptance Checklist

- [x] The video explains the problem, solution, and result.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Each scene has one clear idea.
- [x] The catalog screenshot remains legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
