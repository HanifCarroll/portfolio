---
title: "Agent and MCP security scanner"
section: ai
summary: "Checks AI agents, MCP servers and skills for prompt injection, tool poisoning and leaked secrets."
---

## What it is

Agents read untrusted text (web pages, emails, documents, tool descriptions) and then act with real permissions. An agent security scanner looks for the ways that goes wrong: hidden instructions in tool descriptions, MCP servers that changed after you approved them, exposed credentials, and paths where private data could flow out to an attacker.

## When you need it

- You install MCP servers or agent skills written by other people.
- Your agent reads external content and also has access to private data or the ability to send messages.
- You ship an AI feature and want to test it against prompt injection before attackers do.

The risky combination is private data, untrusted content and a way to send data out, all in one agent. Scanners help, but the stronger fix is to avoid giving one agent all three. [More on what you're really installing with a skill](/blog/what-are-you-really-installing-when-you-install-a-skill/).

## Popular choices

- **Agent Scan** (Snyk, formerly Invariant Labs' MCP-Scan): Security scanner for AI agents, MCP servers, and agent skills. It flags prompt injection, tool poisoning, exposed credentials, and risky data flows.
- **Promptfoo red-teaming**: Generates attacks against your own LLM app, including prompt injection and data leaks, and reports what got through.
- **garak**: NVIDIA's open-source LLM vulnerability scanner, which probes models for jailbreaks, leaks and other failures.

## What to tell your agent

> Run [Agent Scan] on the MCP servers and skills this project uses and summarize anything it flags. Then list every tool our agent can call, and mark which ones read untrusted content, touch private data, or can send data outside. Propose changes so no single agent run has all three.
