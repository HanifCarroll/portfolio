---
title: "Agent instructions file (AGENTS.md)"
section: agents
summary: "A file in your repo that tells coding agents how the project works and how to check their work."
---

## What it is

`AGENTS.md` (or `CLAUDE.md` for Claude Code) is a Markdown file at the root of your repo that coding agents read at the start of every session. It holds what a new developer would need on day one: how to run, test and type-check the project, where things live, the conventions to follow, and mistakes to avoid. Larger repos add more files in subfolders, scoped to that area.

## When you need it

- An agent keeps getting the same thing wrong, like running the wrong test command or putting files in the wrong place.
- Agents reinvent helpers that already exist because they don't know where to look.
- You start every session by re-explaining the project.

Keep it short and current. Put stable facts and commands here, and move long procedures into [skills](/atlas/agent-skills/) that load only when needed. A rule the agent must never break is better enforced by a [lint rule or check](/atlas/architecture-checks/) than by a sentence in this file.

## Popular choices

- **AGENTS.md**: The shared convention read by Codex, Cursor, opencode, Amp and many others.
- **CLAUDE.md**: Claude Code's equivalent. Many repos keep one file and link the other to it.
- **Kiro steering files**: Separate `product.md`, `tech.md` and `structure.md` files, loaded in every session.
- **Reference: [opencode's AGENTS.md](https://github.com/anomalyco/opencode/blob/dev/AGENTS.md)**: Example of a large, well-maintained instructions file.

## What to tell your agent

> Write an AGENTS.md for this repo. Include the exact commands to install, run, test, lint and type-check; a short map of where things live; the shared helpers and components to reuse; and the conventions we follow. Keep it under [150] lines. Whenever I correct you on something that will come up again, propose an addition to this file.
