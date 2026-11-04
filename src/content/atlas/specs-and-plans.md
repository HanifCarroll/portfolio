---
title: "Specs and execution plans"
section: agents
summary: "Written requirements and a living plan, so agents build the right thing and long work survives across sessions."
---

## What it is

A spec describes what you're building and what "done" means: the behavior, the edge cases and how to check it. An execution plan breaks the work into milestones and records progress, decisions and surprises as the work goes. Both live in the repo, so any agent or person can pick up where the last one stopped.

## When you need it

- You gave an agent a one-line request and it made a dozen decisions you didn't want.
- A feature takes more than one session, and each new session starts from zero.
- Several people or agents work on the same feature.

"Add auth to the API" is not a spec. Saying which roles can reach which endpoints, what happens when a token expires and how to test it is. A plan can change as you learn. Approved doesn't mean frozen.

## Popular choices

- **GitHub Spec Kit**: Splits the work into project principles, feature spec, technical plan and tasks, with steps to clarify and check them before coding.
- **OpenSpec**: A lighter spec workflow that keeps proposed changes and current specs in the repo.
- **PLANS.md**: OpenAI's pattern for a self-contained execution plan with purpose, milestones, checks, progress and decisions.
- **Interview first**: Have the agent ask you questions until the idea is clear before it writes the spec. Matt Pocock's "grill me" skill does this.

## What to tell your agent

> Before writing code, interview me about [the feature] until you can write a spec covering behavior, edge cases and acceptance checks. Save it to `specs/[feature].md`. Then write an execution plan in `plans/[feature].md` with milestones and how to check each one. Update the plan's progress and decisions as you work.
