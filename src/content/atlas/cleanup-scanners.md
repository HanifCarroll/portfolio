---
title: "Duplication and dead-code scanners"
section: agents
summary: "Finds copy-pasted logic and unused code, giving cleanup work a concrete list."
---

## What it is

Duplication scanners find blocks of code that are the same or nearly the same. Dead-code scanners find files, exports, dependencies and types that nothing uses. Together they turn "clean up the codebase" into a specific list of findings an agent can work through.

## When you need it

- Agents keep adding parallel versions of logic that already exists.
- The codebase grows with every feature and never shrinks.
- You're inheriting a project that was built quickly with AI.

Scanners find duplicated text, not duplicated meaning. Two differently written versions of the same business rule slip past them. Pair a scan with an explicit consolidation task: "make [this rule] live in one place."

## Popular choices

- **Knip**: Finds unused files, exports and dependencies in JavaScript and TypeScript projects.
- **jscpd**: Copy-paste detector for 150+ languages.
- **ast-grep**: Searches for structural patterns, useful for finding the same logic written slightly differently.

## What to tell your agent

> Run [Knip] and [jscpd] and summarize the findings. Delete unused code and dependencies. For each real duplicate, consolidate into one implementation, keep any differences that actually matter, migrate the callers and remove the old copies. Do it in small commits and run the tests after each one.
