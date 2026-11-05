---
title: "State machine / statechart"
section: code
summary: "Writes complex logic as explicit states and transitions instead of scattered flags."
---

## What it is

A state machine lists every state something can be in and every event that moves it between states. A checkout might be `browsing`, `entering details`, `paying`, `paid` or `failed`. A statechart adds nesting and parallel states for more complex flows. Impossible combinations, like loading and errored at the same time, can't happen.

## When you need it

- You're juggling booleans like `isLoading`, `isError`, `hasSubmitted` and they get out of sync.
- A multi-step flow (onboarding, checkout, upload, a voice call) has bugs only on unusual paths.
- You need to explain the logic to someone who doesn't read code.

Agents tend to add another flag each time they fix a bug. A state machine forces each fix to be a named state or transition, which keeps the logic readable and testable.

## Popular choices

- **XState**: Library for state machines and statecharts that makes complex app logic explicit and easy to visualize. Comes with a visual editor.
- **Zag**: Ready-made UI component logic (menus, dialogs, comboboxes) built as state machines. Works with any framework.
- **Plain reducers**: For small cases, a reducer with a `status` union type gets most of the benefit with no library.

## What to tell your agent

> Model [the checkout flow] as an [XState] state machine. List every state and event explicitly, put side effects in actions or actors instead of components, and write a test for each transition, including the failure paths. Generate a diagram of the machine so I can review it.
