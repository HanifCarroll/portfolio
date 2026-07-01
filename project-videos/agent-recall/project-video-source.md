# Project Video Source

This is the source of truth for the Agent Recall technical proof video. The video should prove the workflow in simple terms: problem, input, action, durable output, proof, and result. The composition must pull its on-screen copy, proof moments, timing, and asset use from this document.

## Project

Project name: Agent Recall

Repository: `https://github.com/HanifCarroll/agent-recall`

Local repo: not available in this worktree

Portfolio page source: `src/content/case-studies/agent-recall.mdx`

Project metadata: `src/lib/projects/agent-recall.json`

Primary viewer: technical reviewer or hiring manager checking implementation depth

Target duration: `42s`

Video type: technical proof video

Story mode: Evidence tour

## Plain Story

Problem: useful agent decisions, commands, blockers, and facts were buried in local transcript archives.

Solution: Agent Recall keeps raw archives local, builds a disposable SQLite FTS5 index, and extracts receipt-backed memory records.

Result: prior agent work becomes searchable, inspectable, and reusable without turning private transcript archives into loose summaries.

## One-Line Job

Agent Recall helps agents and humans reuse prior agent work by turning local transcript archives into searchable memory records with source receipts.

## Viewer Takeaway

Agents need memory they can inspect and reuse, not unverifiable summaries.

## Language Rules

Use words a technical reviewer understands without exposing private data.

Say:

- Agent memory
- Local session archives
- Source of truth
- Disposable index
- Redaction
- Parser
- Search rows
- Memory records
- Receipts
- File and line proof
- Freshness
- Doctor
- Watcher
- Public repo

Do not show:

- Private transcript text
- Private memory contents
- Private `.codex` archive contents
- Secret-bearing command output
- Tokens, cookies, API keys, or environment values
- Private local paths beyond already-public portfolio-safe examples
- Raw private JSONL blobs

## Source Review Notes

| Source                                                                                                                | What it supports in plain language                                                                                   |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `src/content/case-studies/agent-recall.mdx:41-48`                                                                     | Agent Recall exists because useful agent history gets buried in local session archives.                              |
| `src/content/case-studies/agent-recall.mdx:56-68`                                                                     | Raw archives stay the source of truth, while the SQLite index can be rebuilt.                                        |
| `src/content/case-studies/agent-recall.mdx:63-68`                                                                     | Search and memory commands expose source labels, event kinds, file paths, line numbers, snippets, and JSON output.   |
| `src/content/case-studies/agent-recall.mdx:77-85`                                                                     | The public CLI screenshot is safe proof of search receipts, memory objects, doctor checks, and local source labels.  |
| `src/content/case-studies/agent-recall.mdx:91-108`                                                                    | The system includes parsers, SQLite retrieval, agent-facing commands, watcher operations, and local redaction.       |
| `src/content/case-studies/agent-recall.mdx:113-119`                                                                   | The repo includes tests for search receipts, watcher behavior, memory extraction, resources, and redaction fixtures. |
| `src/lib/projects/agent-recall.json:20-36`                                                                            | Metadata confirms the problem, solution, and result framing.                                                         |
| `gh repo view HanifCarroll/agent-recall --json nameWithOwner,url,description,isPrivate,primaryLanguage,latestRelease` | The repository is public, Rust-based, and has a public release.                                                      |

## Proof Inventory

| Proof type           | Exact proof                                                                                                                       | Source path, URL, or command                                                                  | Safe to show?                                             | On-screen? |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------- |
| Problem              | Useful agent history is buried in local archives and loose memory is not enough without receipts.                                 | `src/content/case-studies/agent-recall.mdx:41-48`                                             | Yes, as plain text                                        | Yes        |
| Input                | Codex, OMP, Pi, and Claude session archives remain local source files.                                                            | `src/lib/projects/agent-recall.json:24-31`                                                    | Yes, as source labels                                     | Yes        |
| Product action       | The tool redacts common secrets, parses high-signal events, and writes a disposable search index.                                 | `src/content/case-studies/agent-recall.mdx:91-101`                                            | Yes, as synthetic labels                                  | Yes        |
| Durable output       | Search results and memory records point back to source labels, session keys, file paths, line numbers, snippets, and JSON output. | `src/content/case-studies/agent-recall.mdx:63-68`                                             | Yes, as synthetic receipt cards and the public screenshot | Yes        |
| Saved record         | Memory objects have stable ids, evidence counts, resource URIs, and delta cursors.                                                | `src/lib/projects/agent-recall.json:28-35`                                                    | Yes, summarized                                           | Yes        |
| Guardrail or warning | The watcher and doctor report stale, blocked, pending, or healthy states instead of hiding freshness problems.                    | `src/content/case-studies/agent-recall.mdx:67-68`, `src/lib/projects/agent-recall.json:28-31` | Yes, as labels                                            | Yes        |
| Verification         | The case study lists CLI, ranking, redaction, parser, memory extraction, watcher, LaunchAgent, and resource tests.                | `src/content/case-studies/agent-recall.mdx:113-119`                                           | Yes, summarized                                           | No         |
| Reviewer path        | Public GitHub repo plus portfolio case study and public CLI screenshot.                                                           | `https://github.com/HanifCarroll/agent-recall`, `src/content/case-studies/agent-recall.mdx`   | Yes                                                       | Yes        |

## Selected Story

1. Agents need memory they can inspect and reuse.
2. The real input is local session archives, not a pasted transcript blob.
3. Agent Recall redacts, parses, and indexes the high-signal events.
4. The durable output is search results and memory records with receipts.
5. Freshness checks show whether recall is current, stale, blocked, or waiting.
6. Prior work becomes reusable because a reviewer can inspect the trail.

## Scene Cards

### Scene 1: Problem

Purpose: state the technical problem in plain terms.

Viewer should understand: agent memory has to be reusable and inspectable.

Visual source: synthetic archive cards and a source-to-memory question.

On-screen text:

```text
Agents need memory they can inspect and reuse.
Not raw transcript piles.
```

Narration: none.

Duration: `6.5s`

Proof shown: problem framing from the case study.

Asset path: built natively in HyperFrames.

Motion notes: archive cards enter from the left; receipt cards resolve on the right.

Reading-speed check: `11` words over `6.5s` = `102 WPM`.

### Scene 2: Real Input

Purpose: identify the source of truth.

Viewer should understand: raw local archives remain the input.

Visual source: synthetic local archive stack with source labels.

On-screen text:

```text
Input: local session archives.
Codex, OMP, Pi, and Claude remain source files.
```

Narration: none.

Duration: `6.5s`

Proof shown: supported transcript roots and local-first source contract.

Asset path: built natively in HyperFrames.

Motion notes: source cards feed a local-source rail.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 3: Product Action

Purpose: show what the tool does.

Viewer should understand: the product transforms archives into an index without replacing the archives.

Visual source: parser pipeline plus public CLI screenshot crop.

On-screen text:

```text
Agent Recall builds a local index.
Redact secrets, parse events, write search rows.
```

Narration: none.

Duration: `6.5s`

Proof shown: parser, redaction, and SQLite retrieval notes.

Asset path: `hyperframes/assets/agent-recall-cli.png`.

Motion notes: three pipeline cards assemble before the screenshot lands.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 4: Durable Output

Purpose: show the inspectable output.

Viewer should understand: memories are records with receipts.

Visual source: synthetic memory object, receipt rows, and line-proof chips.

On-screen text:

```text
Output: memories with receipts.
Each record points back to source, file, and line.
```

Narration: none.

Duration: `6.5s`

Proof shown: memory objects, source labels, file paths, line numbers, snippets, and JSON output.

Asset path: built natively in HyperFrames.

Motion notes: memory card enters first, then receipt rows attach underneath.

Reading-speed check: `13` words over `6.5s` = `120 WPM`.

### Scene 5: Proof

Purpose: show the trust signal.

Viewer should understand: the tool exposes freshness and health instead of hiding stale recall.

Visual source: public CLI screenshot plus freshness status cards.

On-screen text:

```text
Freshness is visible.
Doctor and watcher states show fresh, stale, blocked, or waiting.
```

Narration: none.

Duration: `6.5s`

Proof shown: doctor, watcher, freshness, and index-health notes.

Asset path: `hyperframes/assets/agent-recall-cli.png`.

Motion notes: screenshot holds steady; status chips light up one by one.

Reading-speed check: `12` words over `6.5s` = `111 WPM`.

### Scene 6: Result

Purpose: close the proof tour with the reviewer path.

Viewer should understand: prior work becomes reusable because receipts survive.

Visual source: public repo card, case-study card, test/receipt chips, and final result line.

On-screen text:

```text
Result: prior work becomes reusable.
A reviewer can inspect the trail.
```

Narration: none.

Duration: `6.5s`

Proof shown: public repo, case study, tests, JSON output, and screenshot-backed behavior.

Asset path: built natively in HyperFrames.

Motion notes: proof cards assemble into a reviewer path; end card settles over the final frame.

Reading-speed check: `10` words over `6.5s` = `92 WPM`.

## Ending Beat

Reserve the final `3s` for a settled ending. The final card appears over the last result scene and holds without introducing a new argument.

End-card text:

```text
Agent Recall
Inspectable memory for agent work.
```

Duration: `3s`

Motion notes: hold the final proof path, bring in the end card, then use a short soft fade after the hold.

Reading-speed check: `6` words over `3s` = `120 WPM`.

## On-Screen Text Lock

Final text that may appear in the video. Keep this wording unchanged unless this source document is edited first.

| Scene | Text                                                                                    | Word count | Duration | WPM |
| ----- | --------------------------------------------------------------------------------------- | ---------: | -------: | --: |
| 1     | Agents need memory they can inspect and reuse. Not raw transcript piles.                |         11 |     6.5s | 102 |
| 2     | Input: local session archives. Codex, OMP, Pi, and Claude remain source files.          |         12 |     6.5s | 111 |
| 3     | Agent Recall builds a local index. Redact secrets, parse events, write search rows.     |         12 |     6.5s | 111 |
| 4     | Output: memories with receipts. Each record points back to source, file, and line.      |         13 |     6.5s | 120 |
| 5     | Freshness is visible. Doctor and watcher states show fresh, stale, blocked, or waiting. |         12 |     6.5s | 111 |
| 6     | Result: prior work becomes reusable. A reviewer can inspect the trail.                  |         10 |     6.5s |  92 |
| End   | Agent Recall. Inspectable memory for agent work.                                        |          6 |       3s | 120 |

Allowed short labels:

- Problem
- Input
- Action
- Output
- Proof
- Result
- Local archives
- Redact
- Parse
- Index
- Receipts
- Memory object
- Source file
- Line proof
- Fresh
- Stale
- Blocked
- Waiting
- Public repo
- Case study
- Tests

## Asset Manifest

| Asset                     | Purpose                                                                    | Source                                         | Redaction needed?                  | Final path                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `agent-recall-cli.png`    | Public proof surface for CLI search, memories, receipts, and doctor output | `src/assets/img/projects/agent-recall-cli.png` | No; already public portfolio asset | `assets/selected/agent-recall-cli.png`, `assets/redacted/agent-recall-cli.png`, `hyperframes/assets/agent-recall-cli.png` |
| `agent-recall-action.png` | HyperFrames render alias for the action scene screenshot                   | `src/assets/img/projects/agent-recall-cli.png` | No; same public asset              | `hyperframes/assets/agent-recall-action.png`                                                                              |
| `agent-recall-proof.png`  | HyperFrames render alias for the proof scene screenshot                    | `src/assets/img/projects/agent-recall-cli.png` | No; same public asset              | `hyperframes/assets/agent-recall-proof.png`                                                                               |
