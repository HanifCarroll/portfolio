---
title: "LLM evals"
section: ai
summary: "Automated tests for AI features, which score outputs against examples and criteria."
---

## What it is

An eval is a test for a non-deterministic system. You collect a set of inputs, often from real usage, then score the outputs. Scores can come from code (does the JSON parse, is the answer in the source), from a model acting as judge (is this answer faithful to the document), or from human review.

## When you need it

- You're about to change a prompt, model or retrieval setup and don't know if it'll make things worse.
- "It seemed fine when I tried it" is the only quality check on your AI feature.
- You're building RAG or an agent and need to know where it fails: retrieval, reasoning or tool use.

Evals are to AI features what tests are to code. Without them, every prompt change is a guess.

## Popular choices

- **DeepEval**: Pytest-style framework for evaluating LLM apps. Its metrics cover RAG retrieval, hallucination, tool use, agent task completion, and multi-turn conversations.
- **Promptfoo**: Config-driven evals from the command line, comparing prompts and models side by side. Also does red-teaming for security.
- **Langfuse / Braintrust**: Run evals on datasets alongside your [traces](/atlas/llm-tracing/), so production failures can become test cases.
- **Autoevals**: Braintrust's open-source library of ready-made scorers.

## What to tell your agent

> Set up evals for [the support assistant] using [DeepEval / Promptfoo]. Build a dataset of 30–50 real examples, including known failures. Score [faithfulness to the source, answer relevance and correct tool use]. Add a command that runs the evals, and run it before any change to prompts, models or retrieval.
