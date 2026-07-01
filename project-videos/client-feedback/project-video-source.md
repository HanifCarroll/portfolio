# Project Video Source

This is the source of truth for the Client Feedback Evidence CLI video. The video should explain the evidence pipeline to a nontechnical viewer without exposing private feedback. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Client Feedback Evidence CLI

Repository: `https://github.com/HanifCarroll/client-feedback`

Local repo: not referenced in the video package

Portfolio page source: `src/content/case-studies/client-feedback.mdx`

Project metadata: `src/lib/projects/client-feedback.json`

Primary viewer: hiring manager or general portfolio viewer

Target duration: `31-32s`

Video type: evidence pipeline demo

Story mode: Plain overview with evidence-pipeline visuals

## Plain Story

Problem: useful client proof was scattered across chats, emails, audio notes, attachments, and screenshots.

Solution: one CLI pulls from source-specific rails and writes a local evidence packet.

Result: the packet can be reused later because the claim, source, and artifacts stay together.

## One-Line Job

Client Feedback Evidence CLI helps a solo operator turn scattered private feedback into a local evidence packet by collecting source artifacts, transcripts, and manifests together.

## Viewer Takeaway

This is a local evidence workflow that turns scattered feedback into reusable proof without putting private evidence in the public repo.

## Language Rules

Use words a nontechnical viewer understands.

Say:

- Feedback
- Chats
- Emails
- Voice notes
- Files
- Local packet
- Source
- Artifact
- Transcript
- Reusable proof

Do not show:

- private message text
- contact names
- email addresses
- recordings
- transcripts from real people
- local paths
- browser storage
- OAuth state
- tokens or cookies
- test counts as a main proof point

Technical proof can stay in this document as backing evidence, but the video should use plain workflow language.

## Source Review Notes

| Source                                                | What it supports in plain language                                                                                     |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/client-feedback.mdx:39-49`  | The project exists because useful proof was scattered across chats, audio notes, emails, attachments, and screenshots. |
| `src/content/case-studies/client-feedback.mdx:53-57`  | The durable interface is the workflow contract: commands in, local artifacts out.                                      |
| `src/content/case-studies/client-feedback.mdx:60-71`  | Evidence stays local by default, source rails are explicit, and ambiguous selections fail unless reviewed.             |
| `src/content/case-studies/client-feedback.mdx:75-90`  | The CLI mirrors collection steps and writes auditable files, attachments, transcripts, and stable output.              |
| `src/content/case-studies/client-feedback.mdx:94-109` | The important value is turning private, scattered feedback into repeatable evidence with visible boundaries.           |
| `src/lib/projects/client-feedback.json:19-36`         | Metadata confirms the privacy constraints, source rails, local artifacts, and tests around brittle parsing points.     |

## Proof Inventory

| Proof type           | Exact proof                                                                                                      | Source path, URL, or command                                                                        | Safe to show?                    | On-screen? |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| Problem              | Useful proof lived across chats, voice notes, emails, attachments, and screenshots.                              | `src/content/case-studies/client-feedback.mdx:46-49`                                                | Yes, as synthetic labels         | Yes        |
| Input                | WhatsApp, Gmail, audio notes, and attachments enter source-specific rails.                                       | `src/content/case-studies/client-feedback.mdx:39-42`, `src/lib/projects/client-feedback.json:24-31` | Yes, as source labels only       | Yes        |
| Product action       | The CLI pulls source artifacts into one local packet.                                                            | `src/content/case-studies/client-feedback.mdx:75-90`                                                | Yes, as synthetic workflow cards | Yes        |
| Durable output       | Pull runs write manifests, messages, evidence Markdown, attachments, audio, WAV files, and transcript artifacts. | `src/lib/projects/client-feedback.json:33-36`                                                       | Yes, as artifact labels          | Yes        |
| Guardrail or warning | Ambiguous selections require review before continuing.                                                           | `src/content/case-studies/client-feedback.mdx:69-70`                                                | Yes, as a simple review gate     | Optional   |
| Reviewer path        | Public repo and portfolio case study explain the workflow contracts.                                             | `https://github.com/HanifCarroll/client-feedback`, `src/content/case-studies/client-feedback.mdx`   | Yes                              | No         |

## Selected Story

1. Useful feedback was scattered.
2. Copying proof by hand made the source trail easy to lose.
3. The CLI builds a local packet instead of exposing private material.
4. Each source rail saves messages, files, audio, transcripts, and receipts together.
5. The packet can be reused later because claim, source, and artifact stay attached.
6. The project matters because scattered feedback becomes reusable proof.

## Scene Cards

### Scene 1: Problem

Purpose: show why the tool exists.

Viewer should understand: useful feedback was spread across too many places.

Visual source: synthetic redacted chat, email, audio, and file cards.

On-screen text:

```text
Useful feedback was scattered.
Chats, emails, voice notes, and files lived apart.
```

Narration: none.

Duration: `5.7s`

Proof shown: scattered-source problem from case study and metadata.

Asset path: built natively in HyperFrames.

Motion notes: redacted cards enter from different directions; source rail remains broken.

Reading-speed check: `12` words over `5.7s` = `126 WPM`.

### Scene 2: Cost

Purpose: make the practical cost clear.

Viewer should understand: manual copying breaks the source trail.

Visual source: broken trail and loose proof cards.

On-screen text:

```text
Copying proof by hand broke the trail.
Sources got lost.
```

Narration: none.

Duration: `5.5s`

Proof shown: case-study need to preserve the source behind a claim.

Asset path: built natively in HyperFrames.

Motion notes: trail segments disconnect while redaction bars stay visible.

Reading-speed check: `13` words over `5.5s` = `142 WPM`; acceptable because the sentence is short and familiar.

### Scene 3: Solution

Purpose: introduce the local packet.

Viewer should understand: private feedback stays local while the packet is assembled.

Visual source: public evidence-packet image plus simple packet labels.

On-screen text:

```text
I built a local proof packet.
Private feedback stays on the machine.
```

Narration: none.

Duration: `5.5s`

Proof shown: public packet image and case-study local-artifact workflow.

Asset path: `hyperframes/assets/client-feedback-evidence-packet.png`.

Motion notes: proof surface slides in and settles; packet chips enter after headline.

Reading-speed check: `11` words over `5.5s` = `120 WPM`.

### Scene 4: How It Works

Purpose: show the pipeline without exposing data.

Viewer should understand: source rails write durable artifacts together.

Visual source: source-to-packet rail with synthetic artifact cards.

On-screen text:

```text
The tool gathers each source.
Messages, files, audio, and transcripts stay together.
```

Narration: none.

Duration: `5.9s`

Proof shown: source-specific rails and local artifact outputs.

Asset path: built natively in HyperFrames.

Motion notes: source cards connect to the packet; artifact cards stagger in.

Reading-speed check: `13` words over `5.9s` = `132 WPM`.

### Scene 5: Result

Purpose: explain the reusable output.

Viewer should understand: the packet keeps the claim, source, and artifact attached.

Visual source: reusable proof packet with public packet image and synthetic proof cards.

On-screen text:

```text
The packet can be reused later.
Claim, source, and proof stay together.
```

Narration: none.

Duration: `5.6s`

Proof shown: repeatable evidence workflow from case study.

Asset path: `hyperframes/assets/client-feedback-evidence-packet.png`.

Motion notes: packet and proof cards lock together into a reviewable state.

Reading-speed check: `12` words over `5.6s` = `129 WPM`.

### Scene 6: Ending Beat

Purpose: close on the project name and one result line.

Viewer should understand: this is the named project and the reusable value.

Visual source: settled final packet frame.

On-screen text:

```text
Client Feedback Evidence
Scattered feedback becomes reusable proof.
```

Narration: none.

Duration: `3.3s`

Proof shown: final project identity and result line.

Asset path: built natively in HyperFrames.

Motion notes: final card lands quickly, then holds cleanly for 2.5-3 seconds before fade.

Reading-speed check: `8` words over `3.3s` = `145 WPM`; acceptable because the project name is familiar by the ending.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                 | Word count | Duration | WPM |
| ----- | ------------------------------------------------------------------------------------ | ---------: | -------: | --: |
| 1     | Useful feedback was scattered. Chats, emails, voice notes, and files lived apart.    |         12 |     5.7s | 126 |
| 2     | Copying proof by hand broke the trail. Sources got lost.                             |         10 |     5.5s | 109 |
| 3     | I built a local proof packet. Private feedback stays on the machine.                 |         11 |     5.5s | 120 |
| 4     | The tool gathers each source. Messages, files, audio, and transcripts stay together. |         12 |     5.9s | 122 |
| 5     | The packet can be reused later. Claim, source, and proof stay together.              |         12 |     5.6s | 129 |
| End   | Client Feedback Evidence. Scattered feedback becomes reusable proof.                 |          7 |     3.3s | 127 |

Allowed short labels:

- Chat
- Email
- Voice note
- File
- Source
- Review
- Local packet
- Messages
- Files
- Audio
- Transcript
- Evidence note
- File receipt
- Claim
- Proof
- Reusable proof

## Asset Manifest

| Asset                                        | Purpose                                                                                   | Source                                                        | Redaction needed?                                                               | Final path                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `client-feedback-evidence-packet.png`        | Public proof anchor for local packet outputs.                                             | `src/assets/img/projects/client-feedback-evidence-packet.png` | Already public/redacted; do not zoom into private data because none is present. | `hyperframes/assets/client-feedback-evidence-packet.png`        |
| `client-feedback-evidence-packet-result.png` | Local HyperFrames alias for the result scene to avoid duplicate-media discovery warnings. | `hyperframes/assets/client-feedback-evidence-packet.png`      | Same public/redacted asset.                                                     | `hyperframes/assets/client-feedback-evidence-packet-result.png` |

## Privacy Notes

No private feedback text, contact info, email addresses, profile photos, recordings, transcript text, local paths, browser storage, OAuth state, cookies, or tokens should appear in the rendered video or package assets.
