---
title: "LLM SDK"
section: ai
summary: "One API for calling different AI models, with tool calling and structured output built in."
---

## What it is

An LLM SDK sits between your code and model providers like OpenAI, Anthropic and Google. It gives you one way to send prompts, stream responses, call tools, get structured JSON back and build agent loops, whichever model is underneath.

## When you need it

- Your product calls an LLM.
- You want to switch models, or compare them, without rewriting your code.
- You need structured output validated against a schema, or a model that calls your functions.

Calling each provider's API directly works for a prototype. It gets painful as soon as you need streaming, retries, tool calls and a second provider.

## Popular choices

- **Vercel AI SDK**: Open-source TypeScript toolkit with one API across LLM providers. It covers text generation, structured output, tool calling, agents, and chat UI hooks.
- **OpenAI Agents SDK**: OpenAI's framework for agents with tools, handoffs between agents, guardrails and tracing. Available for TypeScript and Python.
- **Mastra**: TypeScript agent framework with workflows, memory, RAG and evals built in.
- **LiteLLM**: Python SDK and proxy server that puts 100+ providers behind the OpenAI API format. Useful as a central gateway for cost tracking and rate limits.

## What to tell your agent

> Use the [Vercel AI SDK] for all model calls. Keep the model choice in one config value so we can switch providers. Use structured output with a [Zod](/atlas/schema-validation/) schema whenever we need data back instead of prose, and handle model errors and timeouts explicitly.
