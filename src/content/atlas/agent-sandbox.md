---
title: "Agent sandbox"
section: agent
summary: "Limits what an agent can touch on your machine and network, so it can work unattended safely."
---

## What it is

A sandbox restricts which files an agent can write, which network addresses it can reach and which commands it can run. It can be built into the agent, run in a container, or run in a disposable cloud VM. Inside the boundary, the agent works without asking permission at every step.

## When you need it

- You're clicking "approve" on every command and have stopped reading them.
- You want agents to run for hours or overnight.
- The agent works on client code, sensitive data or anything connected to production.

Approval prompts protect less than they seem, because people approve on autopilot. A hard boundary that doesn't depend on attention is safer and faster. Give development agents development credentials, never production ones.

## Popular choices

- **Built-in sandboxes**: Codex and Claude Code both include OS-level sandboxing that limits file writes and network access.
- **Dev containers / Docker**: Run the agent inside a container with only the project mounted.
- **E2B**: Disposable cloud sandboxes for running agents and AI-generated code.
- **Cloud agents**: Codex cloud, Claude Code on the web, Cursor background agents and similar tools run each task in an isolated remote environment.

## What to tell your agent

> Set up a [dev container] for this project that the agent can work in: only the repo mounted, network limited to [package registries and our staging API], and only development credentials available. Document how to start it in AGENTS.md.
