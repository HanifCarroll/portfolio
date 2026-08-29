---
title: "Browser Automation for AI Agents: ChatGPT Chrome vs Playwriter vs Agent-Browser"
seoTitle: "ChatGPT Chrome vs Playwriter vs Agent-Browser: 2026 Test"
description: "Compare the ChatGPT Chrome Extension, Playwriter, and Vercel agent-browser for signed-in browser work, scripts, and AI-assisted tasks."
pubDate: 2026-01-16
updatedDate: 2026-07-27
tags: ["ai", "browser-automation", "tools", "comparison", "playwright"]
ctaVariant: systemsBuild
---

I reran this comparison on July 27, 2026. The original article included Claude in Chrome, but I can't test Claude now. This refresh compares the current ChatGPT Chrome Extension, Playwriter, and Vercel's agent-browser on a real Wikipedia search.

The direct recommendation:

- Use **the ChatGPT Chrome Extension** for tasks inside a conversation that need the tabs and sign-ins already in Chrome.
- Use **agent-browser** for repeatable scripts that must run on their own in a separate browser.
- Use **Playwriter** when an agent needs deeper control over the Chrome session you are already using.

## Decision table

| Decision                          | ChatGPT Chrome Extension                                             | Playwriter                                                                                              | agent-browser                                                                             |
| --------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Time for the full task**        | 1.95s                                                                | 9.96s; 7.61s was waiting for Wikipedia to load                                                          | 3.49s; 2.37s was starting its browser and opening Wikipedia                               |
| **Did it finish?**                | Yes                                                                  | Yes                                                                                                     | Yes                                                                                       |
| **Signed-in sites**               | Uses your existing Chrome tabs and sign-ins                          | Uses your Chrome by default; it can also run in a separate or cloud browser                             | Uses a separate browser by default; reusing a Chrome profile or saved sign-in is optional |
| **Scripts that run on their own** | Poor fit: built for conversation, not scripts that run by themselves | Good when a script needs detailed control over Chrome; requires an extension and a connection to Chrome | Best fit: designed for scripts, separate browsers, and running several steps together     |
| **How the agent uses it**         | Directly inside ChatGPT or Codex                                     | By writing and running code that controls Chrome                                                        | By sending browser commands from a script or terminal                                     |
| **What it reads and captures**    | Page text and controls, plus a screenshot                            | Page text and controls, plus a screenshot that includes the Playwriter toolbar                          | Page text and controls, plus a screenshot; it can also add numbered labels                |

The tools measured time differently. Chrome and Playwriter timed their own actions, while I timed agent-browser from the command line. Playwriter spent most of its run waiting for Wikipedia to load. agent-browser spent most of its run starting its browser and opening the page.

## What I tested

Each tool performed the same task on the [English Wikipedia Main Page](https://en.wikipedia.org/wiki/Main_Page) without changing the site:

1. Open Wikipedia and confirm its URL and title.
2. Find the search box.
3. Search for `Browser automation`.
4. Confirm that Wikipedia opens its `Headless browser` article.
5. Take a screenshot of the visible page.
6. Ask the tool to find a button that does not exist, without clicking anything else.

Playwriter used a narrower page layout where Search appeared first as a link, so it needed one extra click to reveal the form. All three tools still reached the same article.

For the missing button, Chrome and Playwriter reported that it was not there without clicking anything. agent-browser waited one second, then returned its usual `element not found` message.

## Versions tested

The test ran on an Apple Silicon Mac with macOS 27.0.

Playwriter and agent-browser ran from the command line. The Chrome Extension ran inside ChatGPT or Codex.

| Tool                     | Tested version                      | Browser in the run                 | How I ran it                                                                                                                                   |
| ------------------------ | ----------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ChatGPT Chrome Extension | bundled plugin build `26.721.41059` | Chrome `150.0.0.0`                 | `@Chrome`, then `chrome.tabs.new()`, `tab.goto()`, `tab.playwright.domSnapshot()`, locators, and `tab.screenshot()`                            |
| Playwriter               | `0.4.0`                             | Chrome `150.0.0.0`                 | `$HOME/.bun/bin/playwriter`, session `8`, `snapshot()`, Playwright controls, and screenshot tools                                              |
| agent-browser            | `0.33.0`                            | Chrome for Testing `148.0.7778.97` | `$HOME/.bun/bin/agent-browser`, session `portfolio-comparison-20260727-wikipedia`, limited to Wikipedia, with browser controls and screenshots |

The Chrome test used the bundled extension rather than a terminal command. OpenAI's [Chrome Extension documentation](https://learn.chatgpt.com/docs/chrome-extension) explains site permissions, access to existing Chrome tabs, and how to call `@Chrome`. Playwriter's [official product documentation](https://playwriter.dev/) covers its extension, command line, detailed Chrome controls, and option to use a separate browser. The [agent-browser repository and documentation](https://github.com/vercel-labs/agent-browser#readme) document its command line, running several steps together, numbered screenshots, separate sessions, and ways to reuse sign-ins.

## Results

| Step                 | ChatGPT Chrome Extension |        Playwriter |                    agent-browser |
| -------------------- | -----------------------: | ----------------: | -------------------------------: |
| Open Wikipedia       |                    706ms |             7.61s |                            2.37s |
| Find or open search  |                    113ms |             323ms |                            130ms |
| Enter the search     |                     61ms |              25ms |                            200ms |
| Search and confirm   |                    1.01s |             1.88s |                            300ms |
| Take the screenshot  |                     67ms |             121ms |                            490ms |
| **Full task**        |                **1.95s** |         **9.96s** |                        **3.49s** |
| Missing button check |       57ms, zero matches | 6ms, zero matches | 1.47s, `element not found` error |

All three opened Wikipedia, used its search box, opened the `Headless browser` article, confirmed the heading, and produced a readable screenshot.

### ChatGPT Chrome Extension

The extension showed the search box and final heading in a compact text outline of the page:

```text
- search:
  - searchbox "Search Wikipedia"
  - button "Search"
- main:
  - heading "Headless browser" [level=1]
```

Its screenshot showed the desktop Wikipedia page without extra labels or tool controls. This takes the least setup when the task begins inside ChatGPT or Codex and needs tabs or sign-ins already in Chrome.

It is designed for browser tasks inside a conversation, so it is a poor fit for automated tests or scripts that must run without a person.

### Playwriter

Playwriter completed the task in 9.96s after opening a separate browser session. Wikipedia took 7.61s to load, and the narrower layout required one click to reveal the search form.

The screenshot included Playwriter's toolbar. Its labeled-screenshot option also worked, and the text outline included the toolbar controls. The labels can help an agent understand where controls are, but the tool's own interface becomes part of the page it sees.

Playwriter first found its local browser connection already in use. It restarted that connection and then completed the task without another problem.

### agent-browser

agent-browser opened a separate browser with no saved sign-in. Starting that browser and opening Wikipedia took 2.37s; the full task took 3.49s.

Its text outline showed the search controls, and its screenshot showed Wikipedia without added tool controls. It can also add numbered labels that match items in the text outline.

When I asked it to find the missing button, it returned:

<blockquote class="error-output">
  <p>Element not found: #missing-action. Verify the selector, role, or name is correct and the element exists in the DOM.</p>
</blockquote>

The update needed one manual fix on this Mac. The Bun package installer skipped part of the setup, so agent-browser would not open. I made the installed file runnable, and its health check then found no problems.

## Using your existing sign-ins

The ChatGPT Chrome Extension and Playwriter use your existing Chrome, so they are the natural choices when a task depends on an already signed-in tab. That is convenient, but it also gives the agent access to the tabs you use. Site permissions and a narrowly defined task matter.

agent-browser opens a separate browser and does not share your sign-ins by default. You can choose to reuse a Chrome profile or saved sign-in when a task needs one. For scripts that run on their own, I would keep the separate browser.

[See guarded browser automation in a working system.](/projects/linkedin-tools/)

## What I use now

I used to use Playwriter for every browser task. Now I almost always use the ChatGPT Chrome Extension. I call `@Chrome` from the conversation, which lets the agent work in the Chrome tabs and signed-in session I already have open.
