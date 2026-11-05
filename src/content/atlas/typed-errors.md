---
title: "Typed errors and effects"
section: code
summary: "Makes the ways a function can fail part of its type, so callers have to handle them."
---

## What it is

In most TypeScript code, any function can throw anything, and the type system doesn't know. Typed error libraries return failures as values instead. The function's type says what it returns on success and which errors it can produce. Effect goes further and also tracks dependencies, retries, timeouts and concurrency in the type.

## When you need it

- You have `try/catch` blocks everywhere and still miss errors.
- A failure in one place surfaces somewhere unrelated as `undefined is not a function`.
- Your code calls flaky services and needs retries, timeouts and cancellation done the same way each time.

Agents work best when the compiler tells them what they forgot. If an error type is missing from a handler, the build fails, and the agent fixes it without you noticing the gap.

## Popular choices

- **Effect**: TypeScript library for typed errors, dependency injection, concurrency, retries, and schema validation. Powerful, with a real learning curve.
- **Effect language service**: A TypeScript plugin that adds Effect-specific diagnostics to your editor and type check, catching mistakes like unhandled errors or missing services.
- **neverthrow**: A small `Result` type for typed errors and nothing else. Easy to adopt in part of a codebase.

## What to tell your agent

> Use [Effect / neverthrow] for error handling in [the service layer]. Model each expected failure as a named error type, return it instead of throwing, and handle every error case at the boundary where we turn it into a user-facing response. Only throw for bugs that should crash.
