---
title: "App framework"
section: code
summary: "The foundation that handles routing, rendering and server code for a web or mobile app."
---

## What it is

An app framework gives you the structure of an application: pages and routes, server-side rendering, data loading, forms and API endpoints. You write the features. The framework handles the plumbing that every app needs.

## When you need it

- You're starting a new web or mobile app.
- Your current app is a pile of hand-wired pages and you keep rebuilding routing and data loading.

With agents, a well-known framework matters more than before. Agents have seen far more code for popular frameworks, so they make fewer mistakes with them, and their conventions tell the agent where things go.

## Popular choices

- **SvelteKit**: Svelte's full-stack app framework with routing, SSR, and server endpoints. Little boilerplate and fast pages.
- **Next.js**: The most widely used React framework. Agents know it best, which counts for a lot.
- **TanStack Start**: Full-stack React framework built on TanStack Router, with type-safe routes end to end.
- **Astro**: Built for content-heavy sites. Ships no JavaScript by default and lets you add interactive pieces where needed.
- **Expo / React Native**: React Native builds native iOS and Android apps from React. Expo adds tooling, prebuilt native modules, and cloud builds (EAS).

## What to tell your agent

> Set up a new [SvelteKit] app with TypeScript in strict mode. Use the framework's own conventions for routing, data loading and forms instead of adding libraries for them. Write an AGENTS.md section that lists the commands to run the dev server, tests and type checks.
