---
title: "Agent skills"
section: agents
summary: "Packaged procedures and know-how that an agent loads only when a task needs them."
---

## What it is

A skill is a folder with a `SKILL.md` file and optional scripts, templates and examples. Its description tells the agent when to use it. When a task matches, the agent loads the full instructions; otherwise they cost almost nothing. Skills hold procedures, like "how we write a migration" or "how we review a PR," that don't belong in the always-loaded [AGENTS.md](/atlas/agent-instructions-file/).

## When you need it

- Your AGENTS.md is getting long with step-by-step procedures.
- You repeat the same multi-step workflow across projects.
- You want agents to do a task your way, not the way a generic prompt would.

Write the description like routing logic: when to use it, when not to, and what it produces. Test a new skill in a fresh session, since one that only works in the conversation where you built it isn't finished. Downloaded skills carry someone else's assumptions, so read them before installing. [More on that](/blog/what-are-you-really-installing-when-you-install-a-skill/).

## Popular choices

- **Write your own**: List the tasks you actually do and write a skill for each. This usually beats a catalog.
- **Matt Pocock's skills**: Popular open-source engineering skills, including spec interviews and architecture review.
- **Compound Engineering plugin (Every)**: A full plan, work, review and capture-lessons workflow packaged as skills and commands.
- **Anthropic and OpenAI skill catalogs**: Official example skills for documents, spreadsheets, design and more.

## What to tell your agent

> Turn [the way we just did this release] into a skill. Write a description that says when to use it and when not to, put the steps and any templates inside the skill folder, and include one worked example. Then test it in a fresh session on a similar task and fix whatever it gets wrong.
