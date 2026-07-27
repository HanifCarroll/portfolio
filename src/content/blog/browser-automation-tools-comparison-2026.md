---
title: "Browser Automation for AI Agents: Chrome vs Playwriter vs Agent-Browser"
seoTitle: "Chrome vs Playwriter vs Agent-Browser: 2026 Test"
description: "A dated, reproducible comparison of the ChatGPT Chrome Extension, Playwriter, and Vercel agent-browser for agent workflows, authenticated sessions, scripts, and CI."
pubDate: 2026-01-16
updatedDate: 2026-07-27
tags: ["ai", "browser-automation", "tools", "comparison", "playwright"]
ctaVariant: systemsBuild
---

I reran this comparison on July 27, 2026. The original article included Claude in Chrome, but I can't test Claude now. This refresh compares the current ChatGPT Chrome Extension, Playwriter, and Vercel's agent-browser on a real Wikipedia search.

The direct recommendation:

- Use **the ChatGPT Chrome Extension** for a conversational agent task that needs the Chrome tabs and signed-in session you already use.
- Use **agent-browser** for repeatable scripts and continuous integration (CI) jobs where an isolated browser, shell commands, and batch execution are the point.
- Use **Playwriter** when you need programmable Playwright and Chrome DevTools access against your real Chrome session.

## Decision table

| Decision                         | ChatGPT Chrome Extension                                                                                    | Playwriter                                                                                                                 | agent-browser                                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Speed in this run**            | 1.95s for the successful path                                                                               | 9.96s after session creation; 7.61s was loading Wikipedia                                                                  | 3.49s command-line wall time from a fresh named session; 2.37s was browser launch and navigation                          |
| **Reliability in this run**      | Completed once with no recovery                                                                             | Completed once after Playwriter restarted its browser connection; the narrower page layout required one extra search click | Completed once from a clean isolated session; the missing target returned a clear element-not-found error                 |
| **Session access**               | Works in the existing Chrome profile and signed-in tabs                                                     | Attaches to the user's Chrome by default; separate background and cloud modes also exist                                   | Starts isolated; reusing a Chrome profile, saved session, or Chrome DevTools connection is opt-in                         |
| **Scripting and CI**             | Poor fit: it is a conversational ChatGPT/Codex surface, not a standalone test runner                        | Good when Playwright or Chrome DevTools depth matters, but the real-Chrome path adds an extension and browser connection   | Best fit: native command line, named isolated sessions, background operation, JSON output, allowlists, and batch commands |
| **Agent and voice workflow fit** | Best conversational fit inside ChatGPT or Codex; closest fit for voice control, which this run did not test | Needs an agent to generate and run Playwright code through its command line or agent integration                           | Needs an agent or script to issue command-line requests; it can support a voice system but is not a voice interface       |
| **Inspection and screenshots**   | Compact page-structure snapshot plus a clean plain screenshot                                               | Accessibility snapshot and a plain screenshot; the attached tab also showed the Playwriter toolbar                         | Accessibility snapshot plus a clean plain screenshot; its CLI also supports numbered annotated screenshots                |

Chrome and Playwriter report controller elapsed time, while agent-browser was measured at the shell around each command. In this run, Playwriter spent most of its time loading Wikipedia, and agent-browser spent most of its time starting the browser and opening the page.

## What I tested

Each tool performed the same read-only task on the [English Wikipedia Main Page](https://en.wikipedia.org/wiki/Main_Page):

1. Open Wikipedia and confirm its URL and title.
2. Inspect the available search interface.
3. Search for `Browser automation`.
4. Verify that Wikipedia resolves the query to its `Headless browser` article and confirm the page heading.
5. Capture a viewport screenshot.
6. Check for an intentionally missing control without causing a page side effect.

Playwriter's attached tab used a narrower page layout, where Search appeared first as a link, so it needed one extra click to reveal the form. The tools reached the same article, but their page layouts and interfaces were not identical.

Chrome and Playwriter checked the missing control with a locator-count preflight and returned zero without clicking. agent-browser used a one-second default timeout and returned its normal element-not-found error for `#missing-action`.

## Versions and commands

The test ran on an Apple Silicon Mac with macOS 27.0.

Playwriter and agent-browser run through command-line interfaces (CLIs); the Chrome Extension runs inside ChatGPT or Codex. Both CLI executables were installed in Bun's user-level bin directory.

| Tool                     | Tested version                      | Browser in the run                 | Tested interface                                                                                                                                               |
| ------------------------ | ----------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ChatGPT Chrome Extension | bundled plugin build `26.721.41059` | Chrome `150.0.0.0`                 | `@Chrome`, then `chrome.tabs.new()`, `tab.goto()`, `tab.playwright.domSnapshot()`, locators, and `tab.screenshot()`                                            |
| Playwriter               | CLI `0.4.0`                         | Chrome `150.0.0.0`                 | `/Users/hanifcarroll/.bun/bin/playwriter`, isolated session `8`, `snapshot()`, Playwright locators, and screenshot helpers                                     |
| agent-browser            | CLI `0.33.0`                        | Chrome for Testing `148.0.7778.97` | `/Users/hanifcarroll/.bun/bin/agent-browser`, named session `portfolio-comparison-20260727-wikipedia`, a Wikipedia domain allowlist, locators, and screenshots |

Before the experiment, agent-browser was already installed at `0.27.0`. I updated that existing installation to `0.33.0` and left it installed. Playwriter's refresh resolved to the same `0.4.0` version.

The relevant setup and health commands were:

```bash
/Users/hanifcarroll/.bun/bin/playwriter skill
/Users/hanifcarroll/.bun/bin/playwriter session new

/Users/hanifcarroll/.bun/bin/agent-browser skills get core --full
/Users/hanifcarroll/.bun/bin/agent-browser doctor --offline --quick
/Users/hanifcarroll/.bun/bin/agent-browser \
  --session portfolio-comparison-20260727-wikipedia \
  --allowed-domains en.wikipedia.org \
  open https://en.wikipedia.org/wiki/Main_Page
```

The Chrome lane used the bundled controller rather than a shell command. OpenAI's [Chrome Extension documentation](https://learn.chatgpt.com/docs/chrome-extension) describes its website approvals, existing-session access, and direct `@Chrome` invocation. Playwriter's [official product documentation](https://playwriter.dev/) covers its extension, command line, Playwright and Chrome DevTools interfaces, and background mode. The [agent-browser repository and documentation](https://github.com/vercel-labs/agent-browser#readme) document its command line, batch execution, annotated screenshots, isolated sessions, and optional authentication paths.

## Results

| Phase                   |   ChatGPT Chrome Extension |                Playwriter |                           agent-browser |
| ----------------------- | -------------------------: | ------------------------: | --------------------------------------: |
| Navigate / start        |                      706ms |                     7.61s |                                   2.37s |
| Inspect / expose search |                      113ms |                     323ms |                                   130ms |
| Fill                    |                       61ms |                      25ms |                                   200ms |
| Submit and verify       |                      1.01s |                     1.88s |                                   300ms |
| Plain screenshot        |                       67ms |                     121ms |                                   490ms |
| **Successful path**     |                  **1.95s** |                 **9.96s** |                               **3.49s** |
| Missing target          | 57ms, zero-count preflight | 6ms, zero-count preflight | 1.47s, expected element-not-found error |

All three opened Wikipedia, found and used its search interface, followed the redirect to the `Headless browser` article, verified the heading, and produced a readable screenshot.

### ChatGPT Chrome Extension

Across the initial and final inspections, the bundled extension exposed the search controls and destination heading in a concise page-structure snapshot:

```text
- search:
  - searchbox "Search Wikipedia"
  - button "Search"
- main:
  - heading "Headless browser" [level=1]
```

Its screenshot showed the desktop Wikipedia page without element labels or controller UI. This is the least setup when the work begins inside ChatGPT or Codex and the required state already lives in Chrome.

It is a conversational browser-control surface, so it is a poor replacement for a committed test suite or a shell script that must run unattended in CI.

### Playwriter

Playwriter completed the path in 9.96s after creating its isolated session. Wikipedia loaded in 7.61s, and the narrower layout required one click to expose the search form before Playwriter could fill it.

The plain screenshot included Playwriter's toolbar. Its separate accessibility-label screenshot helper also succeeded, and its snapshot included the toolbar controls. Those labels can help with spatial reasoning, while the plain screenshot makes the injected UI visible.

The first command could not restart Playwriter's browser connection because port `19988` was occupied. After Playwriter restarted that connection, it created session `8` and completed the page workflow without another recovery.

### agent-browser

agent-browser started a clean browser without loading saved session state. Launching the browser and opening Wikipedia took 2.37s; the full successful path took 3.49s.

Its accessibility snapshot exposed the search controls, and its screenshot showed a clean desktop Wikipedia page. The current CLI also supports `screenshot --annotate`, which adds numbered overlays mapped to snapshot references.

The intentional missing selector returned:

```text
Element not found: #missing-action. Verify the selector, role, or name is correct and the element exists in the DOM.
```

Updating with Bun left the new native binary without execute permission because the package's installation script was blocked. Granting execute permission to that binary restored the CLI, and `doctor --offline --quick` then reported zero failures.

## Session and authentication differences

The ChatGPT Chrome Extension and Playwriter operate against the user's Chrome, so they are the natural choices when the task depends on an already signed-in tab. That convenience also means the agent is working in a personal browser context, which makes website permissions and narrow task scope important.

agent-browser starts with a separate browser instance and separate cookies and storage. Its documentation supports several opt-in ways to reuse authentication, including Chrome profiles, saved sessions, state files, authentication vaults, and Chrome DevTools connections. I would keep the isolated default for CI and enable session reuse only for a named workflow that needs it.

## Reliability limits

This was one run per tool on one public website; it did not test authenticated sessions, long-running automation, Linux CI, parallel sessions, or voice.

For a signed-in conversational task, start with the ChatGPT Chrome Extension. For a durable script or CI job, start with agent-browser. For deep programmatic control of the real Chrome session, use Playwriter.

[See guarded browser automation in a working system.](/case-studies/linkedin-tools/)
