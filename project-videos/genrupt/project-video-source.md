# Project Video Source

This is the source of truth for the Genrupt overview video. The video should explain the problem, solution, and result to a nontechnical portfolio viewer while still showing concrete product proof. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Genrupt

Repository: private client project

Local repo: not used for this video

Portfolio page source: `src/content/case-studies/genrupt.mdx`

Project metadata: `src/lib/projects/genrupt.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `45s`

Video type: flagship AI systems video

Story mode: Plain overview

## Plain Story

Problem: Genrupt had AI image and video generation working, but paid seller teams needed more than generation screens.

Solution: the work moved Genrupt into a seller workflow platform with subscriptions, credits, safer long-running jobs, and a permissioned agent surface.

Result: the platform became commercially operable and helped support the first 100 paying customers.

## One-Line Job

Genrupt turns AI media generation into a commercial Amazon seller workflow platform with paid-team foundations, recoverable jobs, and safe agent access.

## Viewer Takeaway

This is production AI systems work that made a fast-moving product commercially operable for seller teams.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- AI media
- Seller teams
- Paid accounts
- Subscriptions
- Credits
- Billing
- Long-running jobs
- Recovery
- Agent access
- Allowed workflows
- Product foundation
- First 100 paying customers

Do not show:

- Stack names
- Schema names
- API endpoints
- Route names
- Tool IDs
- Command output
- Test counts
- Database table names
- Secret or local file paths
- Raw provider names unless they appear inside a source screenshot and are masked or kept unreadable

Technical proof can stay in this document as backing evidence, but it should not appear as main on-screen copy.

## Source Review Notes

| Source                                       | What it supports in plain language                                                                                                                                |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/genrupt.mdx:39-42` | Genrupt moved from a working AI media MVP into a production platform with subscriptions, credits, background jobs, seller workflows, and safer agent use.         |
| `src/content/case-studies/genrupt.mdx:46-51` | The product was expanding into Amazon seller workflows, which made billing, accounting, reliable background work, and recovery paths more important.              |
| `src/content/case-studies/genrupt.mdx:55-62` | The approach focused on seller-team operations and treating agents as a real product surface.                                                                     |
| `src/content/case-studies/genrupt.mdx:66-74` | The solution connected projects, accounts, billing, and workflow surfaces for paid seller teams.                                                                  |
| `src/content/case-studies/genrupt.mdx:78-89` | The work included billing, credits, recoverable long-running workflows, and permissioned agent access.                                                            |
| `src/content/case-studies/genrupt.mdx:93-99` | The result connected commercial infrastructure, AI workflow reliability, and agent access into one foundation that helped support the first 100 paying customers. |
| `src/lib/projects/genrupt.json:35-44`        | Metadata confirms the paid-team foundation, background jobs, agent access, seller workflows, and core constraints.                                                |
| `src/lib/projects/genrupt.json:51-65`        | Metadata confirms the product work and outcomes in plain result language.                                                                                         |

## Proof Inventory

| Proof type           | Exact proof                                                                                                | Source path, URL, or command                                                                                                      | Safe to show?                            | On-screen? |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| Problem              | AI media MVP needed production foundations for paid seller teams.                                          | `src/content/case-studies/genrupt.mdx:39-51`                                                                                      | Yes, as plain text                       | Yes        |
| Input                | Seller projects and Amazon workflow surfaces enter the product.                                            | `src/assets/img/projects/genrupt/product-surface-projects-grid.png`                                                               | Yes after account redaction              | Yes        |
| Product action       | Subscriptions, credits, and billing support paid teams.                                                    | `src/assets/img/projects/genrupt/subscriptions-pricing.png`; `src/assets/img/projects/genrupt/commercial-readiness-dashboard.png` | Yes after account redaction              | Yes        |
| Product action       | Allowed agent workflows run through a safer product surface.                                               | `src/assets/img/projects/genrupt/agent-access.png`                                                                                | Yes after provider labels are masked     | Yes        |
| Product action       | Seller workflows include A+ setup and market analysis.                                                     | `src/assets/img/projects/genrupt/aplus-project-setup.png`; `src/assets/img/projects/genrupt/market-analysis.png`                  | Yes after account redaction where needed | Yes        |
| Durable output       | The platform foundation supports paid accounts and recoverable workflows.                                  | `src/content/case-studies/genrupt.mdx:93-99`; `src/lib/projects/genrupt.json:59-65`                                               | Yes, as native result cards              | Yes        |
| Saved record         | Account overview, credits, generated assets, projects, and subscription state.                             | `src/assets/img/projects/genrupt/commercial-readiness-dashboard.png`                                                              | Yes after account redaction              | Yes        |
| Guardrail or warning | Agent-facing workflows stay narrow, permissioned, and recoverable.                                         | `src/lib/projects/genrupt.json:41-57`                                                                                             | Yes, as plain labels                     | Yes        |
| Verification         | HyperFrames lint, validate, inspect, snapshot, render, ffprobe, poster, preview, and project build checks. | `docs/project-videos/capture-and-production-workflow.md`                                                                          | Yes                                      | No         |
| Reviewer path        | Portfolio case study and project metadata explain the work.                                                | `src/content/case-studies/genrupt.mdx`; `src/lib/projects/genrupt.json`                                                           | Yes                                      | No         |

## Selected Story

1. AI media was working, but paid seller teams needed more than generation screens.
2. Each new workflow raised the stakes for billing, credits, retries, and recovery.
3. The work turned Genrupt into a seller workflow platform with one shared foundation.
4. Paid teams could subscribe, buy credits, and track usage.
5. Agents could run allowed workflows through a safer surface.
6. Seller workflows became product surfaces, and the platform supported the first 100 paying customers.

## Scene Cards

### Scene 1: Problem

Purpose: show why the work had to move beyond a demo-stage generator.

Viewer should understand: AI media was working, but seller teams needed a real platform around it.

Visual source: redacted Genrupt projects surface plus native product cards.

On-screen text:

```text
AI media was working.
Paid seller teams needed more than generation screens.
```

Narration: none.

Duration: `6.5s`

Proof shown: case study summary and project grid surface.

Asset path: `hyperframes/assets/product-surface-projects-grid.png`

Motion notes: product surface settles in, then platform cards assemble over it.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 2: Cost

Purpose: make the risk concrete.

Viewer should understand: adding seller workflows made commercial and operational state harder to trust.

Visual source: native risk rail with billing, credits, retries, and recovery nodes.

On-screen text:

```text
Each new workflow raised the stakes.
Billing, credits, retries, and recovery had to hold together.
```

Narration: none.

Duration: `6.5s`

Proof shown: project constraints and problem/context sections.

Asset path: built natively in HyperFrames.

Motion notes: nodes lock into a rail, then warning bands draw behind them.

Reading-speed check: `15` words over `6.5s` = `138 WPM`.

### Scene 3: Solution

Purpose: introduce the product shift in one sentence.

Viewer should understand: the product became one seller workflow platform.

Visual source: redacted project grid and dashboard proof surfaces.

On-screen text:

```text
I helped turn Genrupt into a seller workflow platform.
Projects, billing, and jobs shared one foundation.
```

Narration: none.

Duration: `7s`

Proof shown: case study solution section and public product surfaces.

Asset path: `hyperframes/assets/product-surface-projects-grid.png`; `hyperframes/assets/commercial-readiness-dashboard.png`

Motion notes: two proof surfaces slide into a layered platform frame.

Reading-speed check: `16` words over `7s` = `137 WPM`.

### Scene 4: Commercial Foundation

Purpose: show the paid-team foundation without naming implementation details.

Viewer should understand: subscriptions, credits, billing, and usage state supported paid accounts.

Visual source: redacted pricing and dashboard/account surfaces.

On-screen text:

```text
Paid teams could subscribe, buy credits, and track usage.
```

Narration: none.

Duration: `7s`

Proof shown: subscriptions, credit accounting, billing, and account overview.

Asset path: `hyperframes/assets/subscriptions-pricing.png`; `hyperframes/assets/commercial-readiness-dashboard.png`

Motion notes: pricing surface holds while native credit and billing cards lock in.

Reading-speed check: `9` words over `7s` = `77 WPM`.

### Scene 5: Agent Access

Purpose: explain the agent surface in plain terms.

Viewer should understand: agent workflows were allowed, narrow, and safer to run.

Visual source: redacted Agent Access screenshot with native allowed-workflow cards.

On-screen text:

```text
Agents could run allowed workflows without seeing the whole app.
```

Narration: none.

Duration: `7s`

Proof shown: permissioned agent surface and recoverable workflow constraints.

Asset path: `hyperframes/assets/agent-access.png`

Motion notes: central access surface appears first, then allowed workflow cards connect to it.

Reading-speed check: `10` words over `7s` = `86 WPM`.

### Scene 6: Result

Purpose: close the story with the outcome.

Viewer should understand: the product became commercially operable and supported real customers.

Visual source: collage of seller workflow screens and native result card.

On-screen text:

```text
Seller workflows became product surfaces.
The platform supported the first 100 paying customers.
```

Narration: none.

Duration: `8s`

Proof shown: A+ setup, market analysis, dashboard, and result section.

Asset path: `hyperframes/assets/aplus-project-setup.png`; `hyperframes/assets/market-analysis.png`; `hyperframes/assets/commercial-readiness-dashboard.png`

Motion notes: workflow screenshots settle into a proof strip, then the 100-customer result card appears and holds.

Reading-speed check: `13` words over `8s` = `98 WPM`.

## Ending Beat

Purpose: give the video a clean stopping point.

On-screen text:

```text
Genrupt
AI workflows became commercially operable.
```

Duration: `3s`

Motion notes: hold the final product collage, bring in the end card, then use a short soft fade.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                                      | Word count | Duration | WPM |
| ----- | --------------------------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | AI media was working. Paid seller teams needed more than generation screens.                              |         12 |     6.5s | 111 |
| 2     | Each new workflow raised the stakes. Billing, credits, retries, and recovery had to hold together.        |         15 |     6.5s | 138 |
| 3     | I helped turn Genrupt into a seller workflow platform. Projects, billing, and jobs shared one foundation. |         16 |       7s | 137 |
| 4     | Paid teams could subscribe, buy credits, and track usage.                                                 |          9 |       7s |  77 |
| 5     | Agents could run allowed workflows without seeing the whole app.                                          |         10 |       7s |  86 |
| 6     | Seller workflows became product surfaces. The platform supported the first 100 paying customers.          |         13 |       8s |  98 |
| End   | Genrupt. AI workflows became commercially operable.                                                       |          6 |       3s | 120 |

Allowed short labels:

- The problem
- The stakes
- The solution
- Commercial foundation
- Agent access
- The result
- Paid accounts
- Credits
- Billing
- Jobs
- Status
- Result
- Allowed workflows
- Seller workflows
- 100 paying customers

## Asset Manifest

| Asset                     | Purpose                                           | Source                                                               | Redaction needed?            | Final path                                                                                                       |
| ------------------------- | ------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Projects surface          | Problem and solution proof                        | `src/assets/img/projects/genrupt/product-surface-projects-grid.png`  | Mask account footer          | `assets/redacted/product-surface-projects-grid.png` and `hyperframes/assets/product-surface-projects-grid.png`   |
| Dashboard/account surface | Solution, commercial foundation, and result proof | `src/assets/img/projects/genrupt/commercial-readiness-dashboard.png` | Mask account name and footer | `assets/redacted/commercial-readiness-dashboard.png` and `hyperframes/assets/commercial-readiness-dashboard.png` |
| Pricing surface           | Commercial foundation proof                       | `src/assets/img/projects/genrupt/subscriptions-pricing.png`          | Mask account footer          | `assets/redacted/subscriptions-pricing.png` and `hyperframes/assets/subscriptions-pricing.png`                   |
| Agent Access surface      | Agent access proof                                | `src/assets/img/projects/genrupt/agent-access.png`                   | Mask provider labels         | `assets/redacted/agent-access.png` and `hyperframes/assets/agent-access.png`                                     |
| A+ setup surface          | Seller workflow proof                             | `src/assets/img/projects/genrupt/aplus-project-setup.png`            | No private data identified   | `assets/selected/aplus-project-setup.png` and `hyperframes/assets/aplus-project-setup.png`                       |
| Market analysis surface   | Seller workflow proof                             | `src/assets/img/projects/genrupt/market-analysis.png`                | Mask account footer          | `assets/redacted/market-analysis.png` and `hyperframes/assets/market-analysis.png`                               |

## HyperFrames Handoff

Composition duration: `45s`

Aspect ratio: `16:9`, `1920x1080`

Scenes to build:

1. AI media MVP needed a platform.
2. Billing, credits, retries, and recovery risk.
3. Seller workflow platform with shared foundation.
4. Commercial foundation for paid teams.
5. Agent access for allowed workflows.
6. Seller workflows plus first 100 paying customers.
7. Ending beat with project name and short result line.

Required transitions:

- Push slides between adjacent story points.
- Blur crossfades for the solution reveal and final wind-down.
- No jump cuts.

Thumbnail frame:

- Scene 3 after the layered proof surfaces appear, with the headline `I helped turn Genrupt into a seller workflow platform.`

## Privacy Check

Hide:

- Account names
- Profile photos
- Private account footer data
- Provider labels when they are not necessary to the plain story
- Routes, IDs, operation internals, command output, and local file paths
- Tokens, cookies, secrets, and environment details

Safe to show:

- Public project name
- Public portfolio screenshots after redaction
- Plain product labels like paid accounts, credits, billing, jobs, status, result, and allowed workflows
- The first-100-customers outcome already stated in the portfolio case study
