---
title: "Custom lint rules and architecture checks"
section: repo
summary: "Turns your team's rules into checks that fail the build, with error messages that tell the agent how to fix it."
---

## What it is

Linters and type checkers catch general mistakes. Custom rules catch yours: "UI code can't import the database layer," "use our `fetchJson` helper instead of calling `fetch` directly," "no file over 500 lines." Architecture checks enforce which modules may depend on which. The error message tells the agent what to do instead.

## When you need it

- You keep writing the same review comment.
- An agent keeps going around a shared helper or crossing a boundary you care about.
- You have a rule in AGENTS.md that agents still break sometimes.

There are three ways to enforce a rule. You can ask in a prompt. You can catch it in review. Or the build can fail when it's broken. Only the last one works every time. A rule that fails the build turns your taste into a property of the repo.

## Popular choices

- **ESLint / Oxlint / Biome**: JavaScript and TypeScript linters. ESLint has the largest ecosystem for custom rules. Oxlint and Biome are much faster.
- **ast-grep**: Write structural search-and-replace rules as code patterns, in many languages, without building a full lint plugin.
- **dependency-cruiser**: Defines and checks which folders and packages may import which.
- **Language-level boundaries**: Separate packages, crates or modules with restricted visibility make some wrong designs fail to compile.

## What to tell your agent

> Turn these rules into automated checks: [UI code cannot import from `db/`; use `lib/http` instead of raw `fetch`]. Use [dependency-cruiser for import boundaries and ast-grep or a custom lint rule for the rest]. Each error message should say what to do instead. Fix existing violations or list them as explicit exceptions, and add the checks to CI.
