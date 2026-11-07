---
title: "Formal specs and verification"
section: tests
summary: "Writes down how a flow must behave, then has a checker search every path for a broken rule."
---

## What it is

A formal spec describes a system as states and the steps between them, plus rules that must always hold: "a paid order never goes back to pending," "a balance never goes negative." A checker then explores the possible sequences of steps and reports the exact path that breaks a rule. Tests only check the paths someone wrote down. A model checker looks at all of them, up to the limits you set.

It works at two levels. A high-level spec models the flow, such as a signup, a checkout or a sync protocol, with no code. Code-level contracts annotate real functions with what they require and guarantee, and a prover checks the implementation against them.

## When you need it

- Your app has an implicit state machine spread across handlers, jobs and webhooks, and nobody can say every path it can take. See [State machine](/atlas/state-machines/).
- Bugs come from ordering: retries, two users at once, a webhook arriving before the redirect.
- A rule matters enough that "the tests pass" isn't enough, as with money, permissions or data that can't be lost.

Agents pair well with specs. The spec is short enough for a human to review, and the checker gives the agent a precise failing trace to iterate against. It tends to catch different bugs than agent-written unit tests do. It also works on existing projects: you can model one flow at a time.

## Popular choices

- **Quint**: A specification language based on TLA+, with typed, programmer-friendly syntax, a REPL, a random simulator and a model checker. Good for modeling app flows before or alongside the code.
- **TLA+**: The established specification language and model checker for concurrent and distributed systems. Quint builds on it.
- **LemmaScript**: Contracts for TypeScript written as comments (`requires`, `ensures`, `invariant`), checked with Dafny. It sits below Quint and verifies the actual functions.

## What to tell your agent

> Model [the checkout and payment webhook flow] as a [Quint] spec. List every state and action, and write invariants for the rules that must always hold, such as [an order is never charged twice]. Run the simulator and the model checker, and when a check fails, show me the trace and fix the spec or the code. Then add [LemmaScript] contracts to [the pricing functions] and check them in the build.
