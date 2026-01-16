---
title: "Browser Automation for AI Agents: Playwriter vs Agent-Browser vs Claude in Chrome"
description: "A hands-on comparison of three browser automation tools for AI agents. Benchmarks, code examples, and recommendations for different use cases."
pubDate: 2026-01-16
tags: ["ai", "browser-automation", "tools", "comparison", "playwright"]
---

I spent an afternoon testing three browser automation tools to see which one is best for AI agent work. Here's what I found.

The tools:
- **Playwriter** - MCP-based, connects to your existing Chrome via extension
- **Agent-Browser** - Vercel's CLI tool, launches fresh Chromium
- **Claude in Chrome** - MCP extension for Chrome automation

All three let AI agents control web browsers. But they have different strengths, and the right choice depends on your use case.

## TL;DR

| Category | Winner | Notes |
|----------|--------|-------|
| **Raw Speed** | Agent-Browser | Fastest CLI execution |
| **In-Conversation UX** | Playwriter | Rich MCP integration, visual labels |
| **Simplicity** | Agent-Browser | Just CLI commands |
| **Visual Debugging** | Playwriter | Vimium-style labeled screenshots |
| **Reliability** | Playwriter / Agent-Browser | Claude in Chrome had some issues |
| **Auth/Session Access** | Playwriter / Claude in Chrome | Use your real browser |

## The Test Suite

I ran six tests on each tool:

1. **Navigation speed** - Navigate to 3 different sites
2. **Multi-step workflow** - HN → click story → extract data → go back
3. **Form interaction** - Wikipedia search
4. **Screenshot capabilities** - Visual output quality
5. **Error handling** - Click non-existent element

Let's look at the results.

## Test 1: Navigation Speed

I navigated to Wikipedia, GitHub, and Hacker News with each tool.

| Tool | Wikipedia | GitHub | HN | Total |
|------|-----------|--------|-----|-------|
| Playwriter | 1121ms | 1858ms | 1116ms | **4095ms** |
| Agent-Browser | 1208ms | 493ms | 261ms | **~1962ms** |
| Claude in Chrome | ~5s | ~5s | ~5s | **~17s** |

**What's going on?** Agent-Browser wins on raw speed. But notice Claude in Chrome's ~5s per call—that's MCP protocol overhead, not browser speed. Each tool call has to go through the MCP layer, adding latency.

For single operations, this doesn't matter much. For multi-step workflows, it compounds.

## Test 2: Multi-Step Workflow

A real-world test: Navigate to Hacker News, click the first story, extract the title, and go back.

| Tool | Total Time | Tool Calls |
|------|------------|------------|
| Playwriter | ~2.0s | 4 |
| Agent-Browser | ~1.6s | 5 CLI commands |
| Claude in Chrome | ~18s | 5 |

Agent-Browser is fastest. Playwriter is close behind. Claude in Chrome's per-call overhead compounds across the workflow.

## Test 3: Form Interaction

Can each tool fill out Wikipedia's search form and submit it?

| Tool | Success | Notes |
|------|---------|-------|
| Playwriter | Yes | Handled selector ambiguity gracefully |
| Agent-Browser | Yes | Simple `fill` + `press Enter` worked |
| Claude in Chrome | Partial | Form filled but submit didn't work |

Interesting finding: Claude in Chrome filled the search box, but pressing Enter didn't trigger the search. This could be a focus or event handling issue. For the blog post, the key insight is that Playwriter and Agent-Browser were more reliable for form interactions.

## Test 4: Screenshot Capabilities

This is where the tools diverge significantly.

**Playwriter** has a killer feature: `screenshotWithAccessibilityLabels`. It overlays Vimium-style labels (e17, e40, etc.) on every interactive element. You can see exactly what to click.

**Agent-Browser** takes plain screenshots. Functional, but no visual aids.

**Claude in Chrome** errored during screenshot tests with "Detached while handling command."

For AI agents that need to "see" the page and decide what to click, Playwriter's labeled screenshots are uniquely powerful.

## Test 5: Error Handling

What happens when you try to click a non-existent element?

| Tool | Error Quality | Helpful Hint |
|------|---------------|--------------|
| Playwriter | "Timeout 3000ms exceeded, waiting for locator..." | Shows call log |
| Agent-Browser | "Element not found or not visible" | "Run 'snapshot' to see current page elements" |
| Claude in Chrome | "No element found with reference" | "element may have been removed" |

All three handle errors gracefully. Agent-Browser's suggestion to run `snapshot` is particularly helpful.

## Feature Comparison

Here's the full feature matrix:

| Feature | Playwriter | Agent-Browser | Claude in Chrome |
|---------|-----------|---------------|------------------|
| **Interface** | MCP | CLI | MCP |
| **Browser** | User's Chrome | Fresh Chromium | User's Chrome |
| **Auth/Cookies** | Your session | Clean slate | Your session |
| **Accessibility Snapshot** | Rich, searchable | YAML format | Flat tree |
| **Screenshot + Labels** | Vimium-style | Plain only | Had errors |
| **Natural Language Find** | No | No | Yes (needs API key) |
| **GIF Recording** | No | No | Yes |
| **CDP/Debugger Access** | Full | No | No |
| **Network Interception** | Yes | No | Read-only |
| **Good for Scripts/CI** | Needs MCP | Perfect | Needs MCP |

## When to Use Each

### Use Playwriter when:
- You need visual debugging with labeled screenshots
- You want to intercept network requests
- You need CDP access (debugger, CSS inspection)
- Working in an MCP-enabled AI conversation
- You need your logged-in browser session

### Use Agent-Browser when:
- Writing automation scripts
- CI/CD pipelines
- Maximum speed matters
- No MCP setup available
- Simple, straightforward automation

### Use Claude in Chrome when:
- You need GIF recording for demos
- Natural language element finding (with API key)
- Quick ad-hoc browser tasks
- You want a simpler API than Playwriter

## Setup

All three are easy to install:

```bash
# Playwriter - requires browser extension + MCP server
npx playwriter

# Agent-Browser
bun add -g agent-browser
agent-browser install  # Downloads Chromium

# Claude in Chrome - install the browser extension
# Then connect via MCP
```

## My Recommendation

**For AI agent development**, Playwriter wins. The labeled screenshots are a game-changer for visual debugging, and the CDP access gives you deep browser control when you need it.

**For automation scripts**, Agent-Browser is the better choice. It's fast, simple, and doesn't require MCP infrastructure.

**Claude in Chrome** is approachable but had reliability issues in my testing. The GIF recording feature is nice for demos, but I'd wait for it to mature before relying on it for production workflows.

The good news: all three tools work, and you can use them together. I have Playwriter for in-conversation debugging and Agent-Browser for scripts. They complement each other well.

## Methodology

These tests were run on a MacBook Pro (M-series) with a stable internet connection. Times are approximate and will vary based on network conditions and page complexity.

I used Claude Code to orchestrate the tests, which adds some overhead to all measurements. The relative comparisons should be accurate even if absolute numbers vary in your environment.
