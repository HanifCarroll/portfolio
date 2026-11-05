---
title: "UI component workshop"
section: repo
summary: "A place to build and check UI components in every state, outside the full app."
---

## What it is

A component workshop renders each UI component on its own, in each of its states: empty, loading, error, long text, many items. Each state is saved as a "story." You can look at it, test it and document it without clicking through the real app to reach it.

## When you need it

- A component has states that are hard to reach in the running app, like an error after a timeout.
- Your team, or your agent, keeps building near-copies of components that already exist.
- You want visual and accessibility checks on every component.

Agents benefit twice. A workshop gives them a fast loop for building a component in isolation. It also gives them a catalog of what already exists, so they reuse components instead of reinventing them.

## Popular choices

- **Storybook**: The standard. With the a11y and Vitest addons, each story also runs as an accessibility check and a test.
- **Ladle**: A lighter, faster alternative built on Vite that reads the same story format.
- **Histoire**: A Vite-based workshop aimed at Vue and Svelte.

## What to tell your agent

> Add Storybook to this project with the a11y and Vitest addons. Write stories for our existing components covering the default, loading, empty and error states. When you build a new component, write its stories first and develop it inside Storybook. Before creating a component, check Storybook for one that already does the job.
