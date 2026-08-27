---
title: "Stop Reviewing AI Code. Give It Tools to Verify Its Own Work."
pubDate: "2026-01-22"
description: "The shift from reviewing AI-generated code to giving AI agents the feedback loops they need to catch their own mistakes."
ctaVariant: systemsBuild
---

The reframe that changed how I work with Claude Code:

**Your job isn't to review AI's code. Your job is to give AI the tools to verify its own work.**

## Change the feedback loop

Think about how you'd onboard a new developer. You wouldn't stand over their shoulder reviewing every keystroke. You'd make sure they have access to:

- The test suite
- The linter and type checker
- Staging environments
- Logging and monitoring
- The ability to run the app and see what happens

Then you'd review their design decisions and test coverage—not their semicolons.

AI agents need the same thing. The faster they can verify their own work, the faster they can iterate to a working solution.

## Debugging a broken scraper

Yesterday I was working with Claude Code on a web scraper that imports events from Meetup. The import was "working"—no errors—but producing garbage data. Every event had `venue: null`.

Without logs, this is what I'd have to do:

1. Ask Claude what might be wrong
2. Get a list of possibilities
3. Manually add console.logs
4. Run it again
5. Read the output
6. Report back to Claude
7. Repeat

That's a lot of back-and-forth where I'm the bottleneck.

Instead, I had Claude set up file-based logging that writes to `logs/server.log`. Now Claude can:

```bash
tail -f logs/server.log
```

And see exactly what's happening in real-time.

With logs accessible, Claude diagnosed the issue in one shot: the scraper was trying to intercept GraphQL responses (which contain venue data), but Meetup had changed something and the interception wasn't working. It was falling back to DOM scraping, which doesn't have venue information.

The fix? Add a venue enrichment step that fetches individual event pages. Claude found the issue, understood the root cause, and implemented the fix—all because it could see what was actually happening.

## Verification tools

Logs are one feedback loop. These are the others I'm building out:

[Compare three browser automation options](/blog/browser-automation-tools-comparison-2026/) if you need to choose how an agent will inspect and use a browser.

| Tool                   | What it answers             |
| ---------------------- | --------------------------- |
| **Logs**               | "What happened?"            |
| **Browser automation** | "What does the user see?"   |
| **Type checking**      | "Is it structurally valid?" |
| **Tests**              | "Does it still work?"       |
| **DevTools/Profiling** | "Is it fast enough?"        |

Each of these is a feedback loop that lets AI verify its own work without waiting for you to manually check.

Each loop is one less time I have to paste output back into the chat.

## What this means in practice

When I start a session with Claude Code now, I think about:

1. **What does "working" look like?** (Define success conditions)
2. **How will Claude know if it's working?** (Give it verification tools)
3. **What's the fastest feedback loop?** (Reduce cycle time)

For the Meetup scraper, "working" meant events with venue data. The verification tool was logs. The feedback loop was `tail -f logs/server.log`.

Claude could run the scraper, see the logs, understand the problem, and fix it—without me being the messenger.

## Review decisions, not keystrokes

This is where I think AI-assisted development is heading. We're moving from:

> "Write code, then I'll review it"

To:

> "Here are the tools to verify your work. Here's what success looks like. Go."

I still review architecture decisions, test coverage, and security. I do not review every semicolon or log-line name.

## What I still need to learn

I'm still figuring out the right patterns here. Some open questions:

- What other feedback loops should AI agents have access to?
- How do you balance autonomy with guardrails?
- When does this approach break down?
