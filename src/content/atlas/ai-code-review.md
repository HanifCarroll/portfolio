---
title: "AI code review"
section: guardrails
summary: "A separate agent that reviews changes against the spec and your standards before a human does."
---

## What it is

An AI reviewer reads a diff with fresh eyes and reports problems: missed requirements, bugs, security holes, weak tests, code that ignores existing helpers. It runs as a separate session or service from the agent that wrote the code, so it isn't anchored to the author's reasoning.

## When you need it

- Agents produce more code than you can read line by line.
- You work solo and have no colleague to catch what you missed.
- Reviews keep finding the same kinds of problems.

Check two things separately. Does the change do what the spec asked, nothing missing and nothing extra? And is the code itself good? Treat the author's summary as unverified claims to check against the code. For risky changes, give reviewers distinct jobs (security, data integrity, tests) instead of running several general reviewers that repeat each other.

## Popular choices

- **Claude Code GitHub Action / Codex GitHub Action**: Run the same coding agents as reviewers on pull requests.
- **CodeRabbit**: Hosted PR reviewer with line comments and summaries.
- **PR-Agent (Qodo)**: Open-source PR review and description tool you can self-host.
- **A review skill or `REVIEW.md`**: Your own rubric, used by a fresh agent session before you open the PR.

## What to tell your agent

> After implementing, start a fresh review without your own notes. Give the reviewer the spec, AGENTS.md and the diff. It should report, separately: requirements that are missing or added without being asked for, and code-quality problems with file and line. Treat the implementation summary as claims to check. Then fix the accepted findings yourself and rerun the checks.
