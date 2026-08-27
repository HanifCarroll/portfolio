# Project Video Source

This is the evidence record for the HablaBA project video. The composition must use the on-screen copy, proof moments, timing, and approved assets documented here. Generated HyperFrames HTML is disposable and must not become an evidence source.

## Project

Project name: HablaBA

Repository: `https://github.com/HanifCarroll/HablaBA`

Analyzed repository commit: `caf27a21ca42beb5458cf843b7750cac6a28c039`

Historical product-flow commit: `4d6dc45`

Archived research case study commit: `623514802f9e55d025fedf15129308081e600518`

Portfolio page source: `src/content/case-studies/language-exchange.mdx`

Project metadata: `src/lib/projects/language-exchange.json`

Primary viewer: Hiring manager or general portfolio viewer

Target duration: `30s`

Video type: Research-to-product walkthrough

Story family: `product-journey`

Timing profile: `short`

## Plain Story

Problem: profile-first apps and large events made focused language practice hard to arrange.

Research: a three-person group interview, an 11-response survey, and six usability sessions pointed toward smaller, exchange-first sessions.

Solution: HablaBA lets invited members compare a concrete session by language, neighborhood, time, format, and open seats, then coordinate in its private chat.

Result: the web product connects invitation, profiles, discovery, sessions, chat, and notifications.

## One-Line Job

HablaBA helps language learners in Buenos Aires find and coordinate small local practice sessions through exchange discovery and private chat.

## Viewer Takeaway

HablaBA turns local research into a product for finding and coordinating language exchanges.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Local practice
- Small exchanges
- Research
- Language
- Neighborhood
- Time
- Open seats
- Private chat
- Invitation
- Discovery
- Product

Do not show:

- Laravel, Inertia, Vue, Reverb, Redis, or PostgreSQL
- Rails, Flutter, React Native, or architecture history
- API endpoints, policies, queues, or WebSocket terminology
- Test counts, CI state, command output, or repository defects
- Adoption, retention, completed-meetup, revenue, or growth claims

Technical and historical proof stays in this document and `sources.md`.

## Source Review Notes

| Source                                                                                       | What it supports in plain language                                                                                      |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Archived portfolio case study at `6235148:src/content/projects/language-exchange.md:34-43`   | One three-person, 90-minute group interview and an 11-response survey informed the concept.                             |
| Archived portfolio case study at `6235148:src/content/projects/language-exchange.md:145-160` | Testing shifted identity toward real photos and kept the experience exchange-first and neighborhood-based.              |
| Archived portfolio case study at `6235148:src/content/projects/language-exchange.md:273-277` | Six usability sessions informed the move from prototype to MVP.                                                         |
| HablaBA `README.md:3-24` at `caf27a2`                                                        | The maintained web product includes invite-only access, profiles, exchange sessions, real-time chat, and notifications. |
| HablaBA `app/Http/Requests/StoreExchangeRequest.php:18-55` at `caf27a2`                      | Exchanges support one-to-one or groups of three to six with bounded duration.                                           |
| HablaBA `resources/js/pages/Explore.vue:36-158,189-219` at `caf27a2`                         | Members can explore sessions by type, language, neighborhood, date, availability, and popularity, with live updates.    |
| HablaBA `resources/js/pages/exchanges/Chat.vue:52-199` at `caf27a2`                          | Each exchange has real-time chat with optimistic sending and retry behavior.                                            |
| HablaBA `app/Http/Controllers/Web/ExchangeController.php:138-217,294-405` at `caf27a2`       | Joining, leaving, messaging, activity, and notification behavior connect discovery to coordination.                     |
| HablaBA `database/seeders/DevExchangeSeeder.php:30-360,435-542` at `caf27a2`                 | The public screenshots use seeded names, avatars, exchanges, counts, and conversations rather than live-user data.      |
| HablaBA `4d6dc45:docs/flows/Host Exchange.png`                                               | The early host wireflow mapped exchange definition, time and place, review, publish, and confirmation.                  |

## Proof Inventory

| Proof type     | Exact proof                                                                                    | Source path, URL, or command                                              | Safe to show?         | On-screen?                                                         |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------ |
| Problem        | Research identified friction with large events and profile-first language apps.                | Archived portfolio case study at `6235148`                                | Yes, as plain summary | Yes                                                                |
| Research       | One group interview, 11 survey responses, and six usability sessions shaped the product.       | Archived portfolio case study at `6235148:34-43,273-277`                  | Yes                   | Summarized; 11 responses and six sessions remain numeric on screen |
| Product model  | The experience is organized around a specific one-to-one or small-group exchange.              | `StoreExchangeRequest.php:18-55`; `Explore.vue:36-158`                    | Yes                   | Yes                                                                |
| Early artifact | A four-state wireflow covers defining, scheduling, reviewing, and publishing an exchange.      | `assets/selected/hablaba-host-exchange-flow.png`; source commit `4d6dc45` | Yes                   | Yes                                                                |
| Product action | Members compare language, neighborhood, time, format, and open seats.                          | `assets/redacted/hablaba-hero.png`; `Explore.vue`                         | Yes; seeded data      | Yes                                                                |
| Product action | Participants coordinate inside the exchange's private live chat.                               | `assets/redacted/hablaba-feature.png`; `Chat.vue`                         | Yes; seeded data      | Yes                                                                |
| Durable result | Invitation, profiles, discovery, sessions, chat, and notifications form one product loop.      | `README.md:3-24`; current routes and controllers                          | Yes, as plain labels  | Yes                                                                |
| Boundary       | The source supports a working product, not adoption, reliability, or a currently live service. | Repository audit at `caf27a2`; recorded in `sources.md`                   | Yes                   | The video calls it a product                                       |
| Verification   | The portfolio manifest and HyperFrames QA must pass before render.                             | `docs/project-videos/template-system.md`                                  | Yes                   | No                                                                 |

## Selected Story

1. Practice was hard to arrange despite having plenty to browse.
2. Research narrowed the idea toward small, concrete exchanges.
3. A member chooses an exchange by the details that make a meetup practical.
4. Participants coordinate inside one private chat tied to the session.
5. The product connects invitation, discovery, exchange details, and chat.
6. The held ending identifies HablaBA as local practice shaped by research.

## Scene Cards

### Scene 1: Problem

Purpose: establish why the product exists.

Viewer should understand: available profiles and large events did not solve the coordination job.

Visual source: native disconnected profile and event cards around a muted session rail.

On-screen text:

```text
Practice was hard to arrange.
Big events made focused practice harder.
```

Narration: none.

Duration: `5.5s`

Proof shown: archived research problem summary.

Asset path: built natively by the shared template.

Motion notes: disconnected choices assemble, then clear space for the research artifact.

Reading-speed check: `6` words over `5.5s` = `65 WPM`.

### Scene 2: Research

Purpose: show that the product model came from evidence rather than feature invention.

Viewer should understand: interviews, a survey, and usability testing pointed toward smaller exchanges.

Visual source: early host-exchange wireflow.

On-screen text:

```text
Research shaped the product.
One interview, 11 responses, and six usability sessions.
```

Narration: none.

Duration: `6s`

Proof shown: archived research case study plus the repository wireflow.

Asset path: `assets/selected/hablaba-host-exchange-flow.png`

Motion notes: the wireflow settles as a whole; do not crop away the define, schedule, review, and confirmation states.

Reading-speed check: `12` words over `6s` = `120 WPM`.

### Scene 3: Exchange Discovery

Purpose: show the central product action.

Viewer should understand: a member evaluates a session, not a person in a feed.

Visual source: current Explore UI captured against seeded data.

On-screen text:

```text
Choose the exchange.
Compare language, neighborhood, time, and seats.
```

Narration: none.

Duration: `5s`

Proof shown: repository Explore flow and seeded screenshot.

Asset path: `assets/redacted/hablaba-hero.png`

Motion notes: screenshot settles quickly; practical exchange details appear as compact labels.

Reading-speed check: `9` words over `5s` = `108 WPM`.

### Scene 4: Private Coordination

Purpose: show how interest becomes a concrete plan.

Viewer should understand: each exchange has one private place to coordinate.

Visual source: current exchange chat captured against seeded data.

On-screen text:

```text
Each exchange has a private chat.
Coordinate the plan live.
```

Narration: none.

Duration: `5s`

Proof shown: repository chat flow and seeded screenshot.

Asset path: `assets/redacted/hablaba-feature.png`

Motion notes: the chat rises into view, then stays still enough to inspect.

Reading-speed check: `10` words over `5s` = `120 WPM`.

### Scene 5: Result

Purpose: summarize the product outcome.

Viewer should understand: the core exchange workflow is connected without implying adoption.

Visual source: native loop rail with seeded Explore and chat surfaces.

On-screen text:

```text
Discovery, sessions, and chat stay connected.
```

Narration: none.

Duration: `5.5s`

Proof shown: current README, routes, controllers, and product surfaces.

Asset path: `assets/redacted/hablaba-hero.png`; `assets/redacted/hablaba-feature.png`

Motion notes: the loop locks and holds; no metric or growth claim appears.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 6: Ending Beat

Purpose: identify the product and end on the research-led value.

Viewer should understand: HablaBA is local practice shaped by research.

Visual source: settled Explore surface.

On-screen text:

```text
HablaBA
Local practice, shaped by research.
```

Narration: none.

Duration: `3s`

Proof shown: held conclusion, no new claim.

Asset path: `assets/redacted/hablaba-hero.png`

Motion notes: settle within the first half-second and hold cleanly.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

| Scene | Text                                                                                  | Word count | Duration | WPM |
| ----- | ------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Practice was hard to arrange. Big events made focused practice harder.                |         11 |     5.5s | 120 |
| 2     | Research shaped the product. One interview, 11 responses, and six usability sessions. |         12 |       6s | 120 |
| 3     | Choose the exchange. Compare language, neighborhood, time, and seats.                 |          9 |       5s | 108 |
| 4     | Each exchange has a private chat. Coordinate the plan live.                           |         10 |       5s | 120 |
| 5     | Discovery, sessions, and chat stay connected.                                         |          6 |     5.5s |  65 |
| End   | HablaBA. Local practice, shaped by research.                                          |          6 |       3s | 120 |

Allowed short labels:

- Large events
- Profile apps
- Group interview
- Survey
- Six usability sessions
- Small exchanges
- Language
- Neighborhood
- Time
- Open seats
- Private chat
- Invitation
- Profile
- Discovery
- Session
- Chat

## Asset Manifest

| Asset                            | Purpose                                    | Source                                                                            | Redaction needed?                                    | Final path                                       |
| -------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------ |
| `hablaba-host-exchange-flow.png` | Show the early exchange-first host journey | HablaBA commit `4d6dc45:docs/flows/Host Exchange.png`                             | No; public historical wireflow                       | `assets/selected/hablaba-host-exchange-flow.png` |
| `hablaba-hero.png`               | Show current exchange discovery            | `src/assets/img/projects/hablaba-hero.png`; traceable to current UI and seeder    | No private data; seeded demo identities              | `assets/redacted/hablaba-hero.png`               |
| `hablaba-feature.png`            | Show current private coordination chat     | `src/assets/img/projects/hablaba-feature.png`; traceable to current UI and seeder | No private data; seeded demo identities and messages | `assets/redacted/hablaba-feature.png`            |

## Privacy Check

Hide:

- Real production accounts, messages, emails, profile details, analytics, and notifications
- Tokens, credentials, cookies, environment values, and secret-bearing paths
- Any adoption, meetup, retention, reliability, or current-live-service claim not supported by evidence

Safe to show:

- The public historical host-exchange wireflow
- Current product UI captured against `DevExchangeSeeder.php`
- Seeded names, usernames, RandomUser avatar fixtures, exchange titles, counts, and conversations that map to that development seeder
- Public project name and plain product-flow labels

Synthetic data used: every identity and conversation visible in the selected Explore and chat captures is repository seed data, not live-user data.

Redaction notes: the files remain under the established `assets/redacted/` rail, but no pixel masking is required because their visible account state is traced to the public development seeder. The privacy contract hides real production identity and message data, not these seeded fixtures.

## Manifest Handoff

Composition duration: `30s`

Aspect ratio: `16:9`

Story family: `product-journey`

Timing profile: `short`

Theme: crisp editorial product surfaces, navy text, blue action accents, green coordination markers, and a path motif.

Scenes: problem, research, exchange discovery, private coordination, product result, held ending.

Approved manifest assets:

- `assets/selected/hablaba-host-exchange-flow.png`
- `assets/redacted/hablaba-hero.png`
- `assets/redacted/hablaba-feature.png`

Transitions: push and dissolve transitions only.

Motion: assemble the problem, settle research and screenshots, lock the result rail, settle the ending.

`posterAt`: a settled frame inside Scene 3 around `14s`.

Privacy: use the hide and safe lists above.

Generation: keep the repository-pinned model, template version, HyperFrames version, and `general-video` skill revision.

## Acceptance Checklist

- [x] The story explains the problem, research, product action, and honest result.
- [x] Every on-screen claim maps to an archived research record or the pinned HablaBA source.
- [x] No mobile, adoption, growth, reliability, or current-live-service claim appears in the video.
- [x] Each scene contains one idea and stays within the manifest word limit.
- [x] Selected identities and conversations are traced to seeded demo data.
- [x] `video.json` validates against the manifest schema.
- [x] Generated HyperFrames QA passes.
- [x] Every snapshot passes visual and privacy review.
- [x] The user approves the generated preview before final render.
