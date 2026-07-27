---
title: "Browser Automation for AI Agents: Chrome vs Playwriter vs Agent-Browser"
seoTitle: "Chrome vs Playwriter vs Agent-Browser: 2026 Test"
description: "A dated, reproducible comparison of the ChatGPT Chrome controller, Playwriter, and Vercel agent-browser for agent workflows, authenticated sessions, scripts, and CI."
pubDate: 2026-01-16
updatedDate: 2026-07-27
tags: ["ai", "browser-automation", "tools", "comparison", "playwright"]
ctaVariant: systemsBuild
---

I reran this comparison on July 27, 2026. The original article included Claude in Chrome, but I can't test Claude now. This refresh replaces those old results with the current ChatGPT/Codex Chrome controller and retests Playwriter and Vercel's agent-browser.

The direct recommendation:

- Use **the ChatGPT Chrome controller** for a conversational agent task that needs the Chrome tabs and signed-in session you already use. It is also the closest fit for voice control, although I did not test voice latency or spoken error recovery.
- Use **agent-browser** for repeatable scripts and continuous integration (CI) jobs where an isolated browser, shell commands, and batch execution are the point.
- Use **Playwriter** when you need programmable Playwright and Chrome DevTools access against your real Chrome session.

One local fixture cannot prove production reliability, and the interfaces expose different clocks. The results below are a reproducible compatibility check, not a universal browser benchmark.

## Decision table

| Decision                         | ChatGPT Chrome controller                                                                                       | Playwriter                                                                                                                      | agent-browser                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Speed in this run**            | 973ms for the successful browser-operation path                                                                 | 344ms for the successful browser-operation path after session creation                                                          | 2.04s command-line wall time from a fresh named session; 1.79s was browser launch and the warm steps totaled about 250ms  |
| **Reliability in this run**      | Completed once with no recovery                                                                                 | Completed once after the command line was allowed to restart its occupied local relay                                           | Completed once after the requested update and a clean doctor check                                                        |
| **Session access**               | Works in the existing Chrome profile and signed-in tabs                                                         | Attaches to the user's Chrome by default; separate background and cloud modes also exist                                        | Starts isolated; reusing a Chrome profile, saved session, or Chrome DevTools connection is opt-in                         |
| **Scripting and CI**             | Poor fit: it is a conversational ChatGPT/Codex surface, not a standalone test runner                            | Good when Playwright or Chrome DevTools depth matters, but the real-Chrome path adds an extension and relay                     | Best fit: native command line, named isolated sessions, background operation, JSON output, allowlists, and batch commands |
| **Agent and voice workflow fit** | Best conversational fit inside ChatGPT or Codex; closest fit for voice control, which I did not test separately | Needs an agent to generate and run Playwright code through its command line or agent integration                                | Needs an agent or script to issue command-line requests; it can support a voice system but is not a voice interface       |
| **Inspection and screenshots**   | Compact page-structure snapshot plus a clean plain screenshot                                                   | Accessibility snapshot, plain screenshot, and colored accessibility labels; the attached tab also showed the Playwriter toolbar | Accessibility snapshot plus plain or numbered annotated screenshots                                                       |

The speed figures are not directly rankable. Chrome and Playwriter measured elapsed time inside their controller calls, while agent-browser was measured at the shell around each command. The timings show where the delay came from: agent-browser's fresh browser launch dominated its run, while its warm commands were fast.

## What I tested

I served one deterministic HTML page on `http://127.0.0.1:8765/`. It had a heading, a labeled text input, a submit button, and a live status region. Each tool had the same bounded job:

1. Open the fixture and confirm its URL and title.
2. Inspect the heading, input, button, and initial `Waiting` status.
3. Fill the input with `Codex`.
4. Submit and verify `Hello, Codex`.
5. Capture a full-page screenshot.
6. Resolve an intentionally missing control without causing a page side effect.

The final phase followed each interface's supported behavior. Chrome and Playwriter require a locator-count preflight, so both returned a count of zero without clicking. agent-browser was run with a one-second default timeout and returned its normal element-not-found error for `#missing-action`. Those outcomes test the same missing-target condition, but they are not the same API.

No authenticated site, third-party form, cookie, local storage, password, private session, or external write was involved.

## Versions and commands

The test ran on an Apple Silicon Mac with macOS 27.0.

Playwriter and agent-browser run through command-line interfaces (CLIs); the Chrome controller runs inside ChatGPT or Codex. Both CLI executables were installed in Bun's user-level bin directory at `$HOME/.bun/bin`.

| Tool                      | Tested version                      | Browser in the run                 | Tested interface                                                                                                                                    |
| ------------------------- | ----------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ChatGPT Chrome controller | bundled plugin build `26.721.41059` | Chrome `150.0.0.0`                 | `@Chrome`, then `chrome.tabs.new()`, `tab.goto()`, `tab.playwright.domSnapshot()`, locators, and `tab.screenshot()`                                 |
| Playwriter                | CLI `0.4.0`                         | Chrome `150.0.0.0`                 | `$HOME/.bun/bin/playwriter`, isolated session `7`, `snapshot()`, Playwright locators, and screenshot helpers                                        |
| agent-browser             | CLI `0.33.0`                        | Chrome for Testing `148.0.7778.97` | `$HOME/.bun/bin/agent-browser`, named session `portfolio-comparison-20260727-rerun`, localhost allowlist, semantic locators, batch, and screenshots |

Before the experiment, agent-browser was already installed at `0.27.0`. I updated that existing installation to `0.33.0` as part of this refresh and left it installed. Playwriter's required refresh resolved to the same `0.4.0` version.

The relevant setup and health commands were:

```bash
playwriter skill
playwriter session new

agent-browser skills get core --full
agent-browser doctor --offline --quick
agent-browser \
  --session portfolio-comparison-20260727-rerun \
  --allowed-domains 127.0.0.1 \
  open http://127.0.0.1:8765/
```

The Chrome lane used the bundled controller rather than a shell command. OpenAI's [Chrome extension documentation](https://learn.chatgpt.com/docs/chrome-extension) describes its website approvals, existing-session access, and direct `@Chrome` invocation. Playwriter's [official product documentation](https://playwriter.dev/) covers its extension, command line, Playwright and Chrome DevTools interfaces, and background mode. The [agent-browser repository and documentation](https://github.com/vercel-labs/agent-browser#readme) document its command line, batch execution, annotated screenshots, isolated sessions, and optional authentication paths.

## Results

| Phase               |  ChatGPT Chrome controller |                Playwriter |                           agent-browser |
| ------------------- | -------------------------: | ------------------------: | --------------------------------------: |
| Navigate / start    |                      418ms |                     186ms |                                   1.79s |
| Inspect             |                       50ms |                      18ms |                                    50ms |
| Fill                |                       48ms |                      24ms |                                    60ms |
| Submit and verify   |                      348ms |                      36ms |                                    60ms |
| Plain screenshot    |                      109ms |                      80ms |                                    80ms |
| **Successful path** |                  **973ms** |                 **344ms** |                               **2.04s** |
| Missing target      | 24ms, zero-count preflight | 4ms, zero-count preflight | 1.28s, expected element-not-found error |

All three opened the page, exposed enough structure to identify the correct controls, filled the field, submitted the form, verified the result, and produced a readable screenshot.

### ChatGPT Chrome controller

The bundled controller exposed this concise page-structure snapshot:

```text
- main:
  - heading "Browser Automation Comparison Fixture" [level=1]
  - textbox "Agent name"
  - button "Generate greeting"
  - status: Waiting
```

Its full-page screenshot was clean and did not add element labels or controller UI. This is the least setup when the work already begins inside ChatGPT or Codex and the required state lives in Chrome.

The tradeoff is equally clear: this is a conversational browser-control surface. It is a poor replacement for a committed test suite or a shell script that must run unattended in CI.

### Playwriter

Playwriter returned a similarly useful accessibility snapshot and completed the successful path fastest on its internal clock. Its separate `screenshotWithAccessibilityLabels()` check succeeded in 214ms and added four colored labels: the fixture's input and button plus the two controls in Playwriter's injected toolbar.

That toolbar also appeared in the plain screenshot. The labels are useful for spatial reasoning, but this run shows why screenshot inspection still matters: the controller's own UI can become part of the captured page.

The first sandboxed command-line call could not restart an already occupied relay on port `19988`. Once the process had permission to restart its own relay, Playwriter created session `7` and the page workflow completed without another failure. That result came from environment permissions, while the page actions themselves succeeded; the extension and local relay are still real moving parts.

### agent-browser

agent-browser started a clean browser in the background without loading saved session state. Its fresh launch took 1.79s; the inspection, form, verification, and screenshot commands that followed took about 250ms in total.

The current CLI closes a stale gap in the old article: `screenshot --annotate` produced a numbered overlay for the heading, input, and button, and those labels mapped back to the snapshot references. The old description of agent-browser screenshots as plain-only is now wrong.

The intentional missing selector returned:

```text
Element not found: #missing-action. Verify the selector, role, or name is correct and the element exists in the DOM.
```

The update itself also exposed a packaging edge on this machine. Bun installed `0.33.0` but blocked the package's installation script and left the new native binary without execute permission. Fixing that exact binary permission restored the CLI, and `doctor --offline --quick` then reported zero failures. Other package managers and installations may not reproduce that condition.

## Session and authentication differences

The Chrome controller and Playwriter operate against the user's Chrome, so they are the natural choices when the task depends on an already signed-in tab. That convenience also means the agent is working in a personal browser context, which makes website permissions and narrow task scope important.

agent-browser's default is the opposite: a separate browser instance with separate cookies and storage. Its documentation supports several opt-in ways to reuse authentication, including Chrome profiles, saved sessions, state files, authentication vaults, and Chrome DevTools connections. None of those were enabled in this test. I would keep the isolated default for CI and turn on session reuse only for a named workflow that needs it.

## Reliability limits

This experiment establishes current compatibility, not a reliability rate. It ran once per tool against a small static localhost page on one machine. It did not test:

- a long-running workflow or repeated trials;
- OAuth, two-factor authentication, CAPTCHA, or anti-bot systems;
- a heavy single-page application, popups, downloads, or multiple tabs;
- network interception, debugger features, video recording, or cloud browsers;
- CI on Linux, container startup, or parallel sessions;
- voice latency or error recovery through a spoken interface.

The recommendation would change if the job changed. For a signed-in, conversational task, start with the ChatGPT Chrome controller. For a durable script or CI job, start with agent-browser. For deep programmatic control of the real Chrome session, use Playwriter.

[See guarded browser automation in a working system.](/case-studies/linkedin-tools/)
