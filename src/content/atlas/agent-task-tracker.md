---
title: "Agent task tracker"
section: agent
summary: "A task list agents can read and update themselves, so long-running work doesn't get lost between sessions."
---

## What it is

An agent task tracker stores the work to do as structured issues that agents can create, claim, update and close from the command line. Good ones track which tasks block which, so an agent can ask "what's ready to work on next?" instead of re-reading a long Markdown TODO file.

## When you need it

- Agents lose track of follow-up work when a session ends.
- Your TODO.md files grow, go stale and contradict each other.
- You run several agents and need them to pick up separate tasks without colliding.

The tracker also gives you somewhere to put requirements other than scattered chat prompts, which makes [review](/atlas/ai-code-review/) easier.

## Popular choices

- **Beads (`bd`)**: Steve Yegge's issue tracker for coding agents. It stores tasks in a dependency-aware graph so agents can manage long-running work without markdown TODO files.
- **GitHub Issues + `gh` CLI**: Agents already know the `gh` command, and issues stay visible to the rest of the team.
- **Linear**: Fast issue tracking with an MCP server and agent integrations.

## What to tell your agent

> Track work in [Beads / GitHub Issues]. When you find follow-up work you won't do now, file it as an issue instead of leaving a TODO comment. At the start of a session, pick the highest-priority unblocked task; at the end, update its status and note what's left.
