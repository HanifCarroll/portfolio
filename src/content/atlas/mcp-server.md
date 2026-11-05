---
title: "MCP server for your product"
section: ai
summary: "Lets AI assistants and agents use your product directly, with the user's permission."
---

## What it is

The Model Context Protocol (MCP) is a standard way for AI apps like ChatGPT, Claude, Cursor and Codex to call outside tools. An MCP server for your product exposes a small set of actions and data, such as "search my orders" or "create a booking," that a user's assistant can call on their behalf. Remote MCP servers usually sign users in with OAuth, so the assistant acts with that user's permissions and nothing more.

## When you need it

- Your users already work inside AI assistants and want to use your product from there.
- You'd like agents to be a new way people find and use your product, next to the web app and API.
- You have an API, but it's too broad or low-level for a model to use well.

Design the tools for a model, not a programmer. A few well-named tools that each finish a real task work better than mirroring every API endpoint. Treat every tool call as untrusted input, and give write actions clear confirmations.

## Popular choices

- **MCP TypeScript SDK / Python SDK**: The official SDKs for building servers and clients.
- **FastMCP**: A higher-level Python framework that turns decorated functions into MCP tools.
- **Cloudflare Agents SDK**: Hosts remote MCP servers on Cloudflare Workers, with OAuth and per-user state built in.
- **Better Auth MCP and OAuth provider plugins**: Add the OAuth flow MCP clients expect to an app that already uses Better Auth.
- **MCP Inspector**: The official tool for calling and debugging your server's tools by hand.

## What to tell your agent

> Add a remote MCP server to this app using [the MCP TypeScript SDK]. Expose these tools: [search_bookings, create_booking, cancel_booking], each with a clear description and a [Zod](/atlas/schema-validation/) input schema. Require OAuth sign-in so every call runs as the signed-in user, and check permissions inside each tool. Write tests that call each tool, including a call from a user who doesn't own the data.
