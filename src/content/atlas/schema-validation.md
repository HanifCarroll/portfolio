---
title: "Runtime schema validation"
section: application
summary: "Checks that data coming into your app has the shape you expect, at the moment it arrives."
---

## What it is

Types disappear when your code runs. A schema validator checks real data against a schema at runtime: an API response, a form submission, a webhook, an LLM's JSON output. In TypeScript, the same schema also produces the static type, so you only describe the shape once.

## When you need it

- Data crosses a trust boundary: user input, third-party APIs, files, environment variables, model output.
- You've had a bug where a field you assumed was present was `undefined`.
- You're writing `typeof x === "object" && "id" in x` checks by hand.

Agents tend to scatter defensive checks everywhere. A good rule for them is: validate once at the boundary, then pass typed values inward and trust them.

## Popular choices

- **Zod**: TypeScript-first schema validation. You define a schema once to validate data at runtime and infer its TypeScript type. The most common choice, and LLM SDKs accept Zod schemas for structured output.
- **Valibot**: A modular alternative with a much smaller bundle size. Good for frontends.
- **Effect Schema**: Part of Effect. Encodes as well as decodes, and fits apps already built on Effect.
- **Pydantic**: The standard for Python.

## What to tell your agent

> Use [Zod] to validate every piece of data that enters the app: request bodies, query params, environment variables, third-party API responses and LLM output. Define each schema once next to the code that owns the boundary and infer types from it. Don't repeat validation for values that have already been parsed.
