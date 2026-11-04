---
title: "Git hooks and CI gates"
section: agents
summary: "Runs your checks automatically before commits and merges, so broken work can't slip through."
---

## What it is

Git hooks run scripts at moments like commit and push: a pre-commit hook might format, lint and type-check the changed files. CI runs the full suite (tests, builds, [architecture checks](/atlas/architecture-checks/), [evals](/atlas/llm-evals/)) on every pull request and blocks the merge if something fails. Many coding agents also have their own hooks that run after each edit or before they stop.

## When you need it

- An agent says "done" and the build is broken.
- Checks exist but only run when someone remembers.
- You want to let agents work longer without watching each step.

Hooks give the agent fast feedback while it works. CI is the gate it can't skip. Make both fast enough that nobody is tempted to turn them off.

## Popular choices

- **Husky + lint-staged**: The common JavaScript setup for git hooks that only check staged files.
- **Lefthook**: Fast, language-agnostic hook manager that runs commands in parallel.
- **pre-commit / prek**: The Python-ecosystem hook framework with a large library of hooks, and prek, a faster drop-in rewrite.
- **GitHub Actions**: The default CI for GitHub repos.
- **Agent hooks**: Claude Code, Codex and others can run commands after edits or before finishing.

## What to tell your agent

> Add a pre-commit hook with [Lefthook / Husky] that formats, lints and type-checks changed files. Add a CI workflow that runs the full test suite, build and any custom checks on every pull request, and make it required for merging. Keep the pre-commit hook under [10] seconds.
