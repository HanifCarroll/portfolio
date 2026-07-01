# Project Video Source

This is the source of truth for the Casa Elaria fake-door validation loop video. The video should explain the product idea, storefront test, and demand signal in simple terms. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Casa Elaria

Repository: private/client validation build

Local repo: not required for this video

Portfolio page source: `src/content/case-studies/casa-elaria.mdx`

Project metadata: `src/lib/projects/casa-elaria.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `21s`

Video type: fake-door validation loop

Story mode: Short demo

## Plain Story

Problem: the founders had a promising beauty product idea, but inventory and development required real upfront spend.

Solution: a believable storefront let visitors browse, choose products, and reach the buying moment.

Result: checkout captured interest instead of payment, giving the founders demand signal before inventory.

## One-Line Job

Casa Elaria tested whether visitors would act like buyers before the founders spent on inventory.

## Viewer Takeaway

This is a focused validation build that turned a product idea into a demand signal.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Beauty product idea
- Inventory risk
- Storefront
- Browse
- Add to cart
- Checkout
- Email interest
- Demand signal
- Launch list

Do not show:

- `Next.js`
- `React`
- `Tailwind CSS`
- Analytics internals
- Payment provider names
- Test counts
- Command output
- Private emails
- Local file paths

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                            | What it supports in plain language                                                                  |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/casa-elaria.mdx:35-39`  | The project existed because Casa Elaria needed to test purchase intent before inventory spend.      |
| `src/content/case-studies/casa-elaria.mdx:47-53`  | The business objective was to measure intent honestly without taking payment or buying stock first. |
| `src/content/case-studies/casa-elaria.mdx:56-64`  | The useful MVP was a convincing buying moment, and the final step captured demand.                  |
| `src/content/case-studies/casa-elaria.mdx:77-85`  | The work used familiar ecommerce patterns and kept scope focused on learning.                       |
| `src/content/case-studies/casa-elaria.mdx:90-94`  | The test produced a clearer demand signal before inventory or a larger commerce build.              |
| `src/lib/projects/casa-elaria.json:15-20`         | Metadata confirms the problem, solution, and result framing.                                        |
| `src/assets/img/projects/casa-elaria-hero.png`    | Public storefront hero screenshot used as proof of the product idea surface.                        |
| `src/assets/img/projects/casa-elaria-feature.png` | Public product detail screenshot used as proof of the buy-path surface.                             |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                | Source path, URL, or command                                                                      | Safe to show?                           | On-screen? |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------- |
| Problem              | Beauty product idea carried inventory risk before demand was proven.                                                       | `src/lib/projects/casa-elaria.json:15-17`                                                         | Yes, as plain text                      | Yes        |
| Input                | Visitors entered a normal storefront and product page.                                                                     | `src/assets/img/projects/casa-elaria-hero.png`; `src/assets/img/projects/casa-elaria-feature.png` | Yes, public asset                       | Yes        |
| Product action       | Visitors could browse, choose, and reach the buying moment.                                                                | `src/content/case-studies/casa-elaria.mdx:77-81`                                                  | Yes, as plain labels                    | Yes        |
| Durable output       | The final step captured email interest instead of payment.                                                                 | `src/content/case-studies/casa-elaria.mdx:61-64`; `src/lib/projects/casa-elaria.json:18-20`       | Yes, as native card                     | Yes        |
| Saved record         | Launch-list interest gave founders a warmer audience.                                                                      | `src/content/case-studies/casa-elaria.mdx:17-21`                                                  | Mention generally, not with real emails | Yes        |
| Guardrail or warning | The test avoided taking payment before products were ready.                                                                | `src/content/case-studies/casa-elaria.mdx:47-53`                                                  | Yes                                     | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, and feedback are required for this video. | `docs/project-videos/capture-and-production-workflow.md`                                          | Yes                                     | No         |
| Reviewer path        | Portfolio case study and metadata explain the validation build.                                                            | `src/content/case-studies/casa-elaria.mdx`; `src/lib/projects/casa-elaria.json`                   | Yes                                     | No         |

## Selected Story

1. A beauty product idea needed proof before inventory.
2. The storefront let visitors behave like buyers.
3. Checkout captured launch-list interest instead of payment.
4. Product intent and emails became the demand signal.
5. The loop ended with demand before inventory.

## Scene Cards

### Scene 1: Product Idea

Purpose: show why the validation build existed.

Viewer should understand: the idea was promising, but inventory needed proof first.

Visual source: Casa Elaria storefront hero plus native risk cards.

On-screen text:

```text
A beauty idea needed proof.
Inventory came later.
```

Narration: none.

Duration: `5s`

Proof shown: case study summary and metadata problem.

Asset path: `hyperframes/assets/casa-elaria-hero.png`

Motion notes: hero image settles in while two validation cards enter.

Reading-speed check: `8` words over `5s` = `96 WPM`.

### Scene 2: Storefront Test

Purpose: show the believable ecommerce surface.

Viewer should understand: the test used a real-looking storefront instead of a survey.

Visual source: public product detail page.

On-screen text:

```text
The storefront looked real.
Visitors could browse, choose, and add to cart.
```

Narration: none.

Duration: `5s`

Proof shown: public Casa Elaria product page screenshot.

Asset path: `hyperframes/assets/casa-elaria-product-page.png`

Motion notes: product page slides in as the buy-path labels appear.

Reading-speed check: `11` words over `5s` = `132 WPM`.

### Scene 3: Fake-Door Moment

Purpose: explain the honest checkout behavior.

Viewer should understand: the buying moment captured interest without taking payment.

Visual source: product page plus native checkout and email-interest cards.

On-screen text:

```text
Checkout became the test.
No payment, just launch-list interest.
```

Narration: none.

Duration: `4s`

Proof shown: case study product direction and project metadata solution.

Asset path: `hyperframes/assets/casa-elaria-product-page.png`

Motion notes: checkout and email cards connect with a simple validation rail.

Reading-speed check: `9` words over `4s` = `135 WPM`.

### Scene 4: Demand Signal

Purpose: show the result of the fake-door loop.

Viewer should understand: the founders could compare interest before stocking products.

Visual source: native signal cards backed by the storefront.

On-screen text:

```text
The signal was simple.
Which products earned buyer intent?
```

Narration: none.

Duration: `4s`

Proof shown: shipped rows and metadata result.

Asset path: built natively in HyperFrames.

Motion notes: signal cards assemble into a short decision board.

Reading-speed check: `9` words over `4s` = `135 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Casa Elaria
Demand before inventory.
```

Duration: `3s`

Motion notes: hold the final product frame and end card for the full 3 seconds.

Reading-speed check: `5` words over `3s` = `100 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                        | Word count | Duration | WPM |
| ----- | --------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | A beauty idea needed proof. Inventory came later.                           |          8 |       5s |  96 |
| 2     | The storefront looked real. Visitors could browse, choose, and add to cart. |         11 |       5s | 132 |
| 3     | Checkout became the test. No payment, just launch-list interest.            |          9 |       4s | 135 |
| 4     | The signal was simple. Which products earned buyer intent?                  |          9 |       4s | 135 |
| End   | Casa Elaria. Demand before inventory.                                       |          5 |       3s | 100 |

Allowed short labels:

- Product idea
- Inventory risk
- Storefront test
- Browse
- Choose
- Cart intent
- Checkout
- Email interest
- Demand signal
- Product clicks
- Launch list
- Stock decision

## Asset Manifest

| Asset                    | Purpose                            | Source                                            | Redaction needed?              | Final path                                                                                           |
| ------------------------ | ---------------------------------- | ------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Casa Elaria hero         | Product idea and final frame proof | `src/assets/img/projects/casa-elaria-hero.png`    | Already public portfolio asset | `assets/selected/casa-elaria-hero.png` and `hyperframes/assets/casa-elaria-hero.png`                 |
| Casa Elaria product page | Storefront test and checkout proof | `src/assets/img/projects/casa-elaria-feature.png` | Already public portfolio asset | `assets/selected/casa-elaria-product-page.png` and `hyperframes/assets/casa-elaria-product-page.png` |
| Validation loop cards    | Explain fake-door flow and signal  | This source document and case study               | No private data                | Built natively in HyperFrames                                                                        |

## Privacy Check

Hide:

- Private analytics
- Real email addresses
- Accounts and billing details
- Tokens, cookies, and local paths
- Client-sensitive operating details not already public

Safe to show:

- Public Casa Elaria screenshots
- Public project name
- Plain ecommerce and validation labels
- Synthetic signal cards

Synthetic data used:

- Signal cards use labels only, with no real counts or customer details.

Redaction notes:

- The selected images are already public portfolio assets. The video does not show private analytics, email addresses, payment data, accounts, tokens, cookies, or local paths.

## HyperFrames Handoff

Composition duration: `21s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. Product idea and inventory risk.
2. Believable storefront test.
3. Fake-door checkout interest capture.
4. Demand signal decision board.
5. Ending beat with project name and result line.

Assets to copy into `hyperframes/assets/`:

- `assets/selected/casa-elaria-hero.png`
- `assets/selected/casa-elaria-product-page.png`
- `casa-elaria-final.png` as a render-safe alias of the public hero screenshot

Required transitions:

- Quiet push transitions between scenes.
- Keep the product screenshots legible.
- Hold the ending beat for the final `3s`.

Required callouts:

- Inventory risk
- Storefront test
- Email interest
- Demand signal

Thumbnail frame:

- Scene 2 after the product page appears, with the headline `The storefront looked real.`

## Acceptance Checklist

- [x] The video explains the product idea, storefront test, and demand signal.
- [x] The video can be understood by the chosen viewer without opening the case study.
- [x] On-screen copy is pulled from the text lock above.
- [x] Technical implementation details stay off-screen.
- [x] Each scene has one clear idea.
- [x] Product screenshots remain legible.
- [x] No private data is visible.
- [x] The final render is created with the normal HyperFrames CLI.
