---
title: "LLM tracing and prompt management"
section: ai
summary: "Records every model call, with its prompt, output, cost and latency, so you can debug AI features."
---

## What it is

LLM tracing records each step of an AI feature: the prompt sent, the model's reply, tool calls, retrieved documents, tokens used, cost and time taken. Steps are grouped into a trace, so you can see a whole agent run from start to finish. Most tools also store prompts outside your code, with versions, so you can change and compare them.

## When you need it

- A user reports a bad answer and you can't see what the model was given.
- An agent run takes too long or costs too much and you don't know which step is to blame.
- You're changing prompts and want to know whether things got better or worse.

Regular [telemetry](/atlas/telemetry/) tells you a request was slow. LLM tracing tells you why the model said what it said.

## Popular choices

- **Langfuse**: Open-source LLM engineering platform for tracing, prompt management, evals, and datasets. It's built on OpenTelemetry and can be self-hosted or used as a cloud service.
- **Arize Phoenix**: Open-source tracing and evaluation, also built on OpenTelemetry. Runs locally with one command.
- **LangSmith**: LangChain's hosted platform. Works without LangChain, but fits best with it.
- **Braintrust**: Hosted platform focused on evals and prompt experiments, with tracing.

## What to tell your agent

> Add LLM tracing with [Langfuse]. Trace every model call, tool call and retrieval step, and group the steps of one user request into a single trace. Tag traces with the user ID and feature name. Make sure API keys and sensitive user data are not sent in traces.
