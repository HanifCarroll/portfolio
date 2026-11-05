---
title: "Component and end-to-end tests"
section: tests
summary: "Tests the UI in a real browser, from single components up to full user journeys."
---

## What it is

Browser tests run your UI in a real browser engine instead of a simulated DOM. They come in two sizes:

- **Component tests** mount one component with the props, data and network responses you choose. They're fast and make unusual states easy to create.
- **End-to-end (E2E) tests** start the whole stack (browser, app, server, database) and click through a real user journey.

## When you need it

- Bugs show up in the browser that unit tests never catch.
- You want to check loading, empty, error and huge-list states without seeding a database for each one. Use component tests.
- A few flows must never break: signup, checkout, the main task your users came for. Use E2E tests.

A sensible split: unit tests for business logic, component tests for meaningful UI features, and a small set of E2E tests for critical journeys. E2E tests are slow and brittle, so don't use them for everything.

## Popular choices

- **Vitest Browser Mode**: Component tests in a real browser, with the same imports and mocks as your unit tests.
- **Playwright**: The standard for E2E tests. Runs Chromium, Firefox and WebKit, records traces, and has built-in screenshot comparison.
- **Storybook test runner**: Turns each [Storybook](/atlas/ui-component-workshop/) story into a component test.
- **MSW (Mock Service Worker)**: Mocks network responses at the request level, so the same mocks work in unit, component and E2E tests.
- **Cloudflare Vitest integration**: Runs tests inside the real Workers runtime, with local versions of D1, KV, Durable Objects and queues.
- **PGlite**: Postgres running in-process, for fast tests against a real database without Docker.
- **Testcontainers**: Starts real Postgres, Redis, Kafka and other services in throwaway Docker containers for tests.

## What to tell your agent

> Set up three test layers: Vitest for business logic, Vitest Browser Mode for UI components (using MSW for network responses), and Playwright for [signup, checkout and the main dashboard flow]. Cover loading, empty and error states in component tests. Add commands for each layer to AGENTS.md, and run all three in CI.
