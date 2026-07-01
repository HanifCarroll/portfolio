# Capture And Production Workflow

Goal: turn each portfolio project into a reusable proof asset by capturing real product moments, then composing them into a short HyperFrames video.

## Tool Roles

Use Browser Use for web products, portfolio pages, app flows, and repeatable browser captures. It should be the default for screenshots, scroll captures, page state checks, and browser-session footage.

Use Computer Use for native Mac apps, local desktop workflows, app-store views, terminal-adjacent UI, and anything that requires direct interaction with the visible operating system.

Use HyperFrames for the final composition: title cards, footage timing, captions, callouts, zooms, transitions, motion graphics, and final MP4 rendering.

Use scripted Playwright capture when a project needs repeatable screenshots or browser video from deterministic page states. Browser Use can still drive exploratory capture first.

## Folder Shape

Each video should have one project folder:

```text
project-videos/
  acquire/
    brief.md
    assets/
      raw/
      selected/
      redacted/
    hyperframes/
      DESIGN.md
      index.html
      output/
```

Keep raw capture separate from selected and redacted assets. HyperFrames should only use `selected/` or `redacted/` assets.

## Per-Project Brief

Write a short `brief.md` before capturing footage:

```text
# Project Video Brief

Project:
Video type:
Target duration:
Primary viewer:
Story mode:
One-sentence job:
Viewer takeaway:

Plain story:
- Problem:
- Solution:
- Result:

Scene arc:
1.
2.
3.
4.
5.
6.

Assets needed:
- Screenshot:
- UI clip:
- Artifact:
- Diagram/data point:

Privacy notes:
- Hide:
- Safe to show:
```

After the brief, copy `docs/project-videos/project-video-source-template.md` into the project folder as `project-video-source.md`. Fill that source document before editing HyperFrames. The source document locks the proof inventory, scene cards, on-screen text, assets, timing, privacy notes, and HyperFrames handoff.

## Audience And Story Gate

Choose the viewer and story mode before writing scene copy. Do not start from a title-card sequence or from the implementation details.

| Viewer                                     | Default story mode  | What the video should do                                         |
| ------------------------------------------ | ------------------- | ---------------------------------------------------------------- |
| Hiring manager or general portfolio viewer | Plain overview      | Explain the problem, solution, and result in everyday language.  |
| Technical reviewer                         | Evidence tour       | Show concrete inputs, outputs, guardrails, and inspection paths. |
| Product/customer viewer                    | Product walkthrough | Show the user path and outcome without repo or stack details.    |
| Social/thumbnail viewer                    | Short demo          | Show one clear transformation or product moment quickly.         |

Use the plain overview mode when the goal is broad understanding. Keep technical evidence in the source document as backing notes, but keep it off the screen unless the chosen viewer needs it.

## Story Structures

### Plain Overview

Use this for nontechnical viewers, hiring managers, and general portfolio traffic. The viewer should understand why the project exists, what it does, and what changed.

Default arc:

1. **Problem**: name the messy situation in plain language.
2. **Cost**: show the practical friction or question the user was stuck with.
3. **Solution**: name the product or workflow in one clear sentence.
4. **How it works**: show 3-4 simple actions with familiar words.
5. **Result**: show the saved state, artifact, or outcome.
6. **Why it matters**: close with the project value, not the tech stack.

Strong:

```text
Applications were scattered.
I built one local workflow.
Every application gets a clear record.
```

Weak:

```text
Capture. Review. Draft. Save. Track.
Chrome sends details to FastAPI.
Before: scattered. After: connected.
```

Plain overview videos should not make implementation terms the main message. Avoid stack names, schema names, API endpoint names, command output, and test counts unless the viewer is explicitly technical.

### Pilot Lessons

The Job Application Assistant pilot produced the reusable rules below:

- Create the intermediate `project-video-source.md` before writing composition HTML. The source document should decide the story, copy, reading speed, and asset use.
- If the video feels repetitive or vague, fix the source document first. Do not try to solve unclear story structure with more motion.
- For nontechnical viewers, lead with problem, cost, solution, result. Technical proof should support the story, not become the story.
- Use clear nouns from the workflow: job post, notes, draft, PDF, status, history, record. Avoid internal implementation nouns on screen.
- One scene should say one thing. Prefer one headline plus one short sentence.
- Product screenshots should prove the product exists, but the text should explain why the viewer is seeing them.
- Short action labels are useful only when they outline what the app does. A list like `Review. Draft. Export. Track.` works when the surrounding scene says why those steps matter.
- The final frame should state the value of the project, not introduce new technical evidence.
- Every overview video should reserve the final `2.5-3s` for a settled ending beat: either a held result/product frame or a simple end card with the project name and one short result line.

### Evidence Tour

Project videos should work as evidence tours, not slogan sequences or generic feature tours. The viewer should be able to name what the product does, what state enters the system, what state leaves it, and what proof exists that the workflow is real.

Use this structure when the target viewer is technical or when the video must prove implementation depth:

1. **Concrete job**: state the actual task the project performs in one sentence.
2. **Real input**: show the source state, such as a job page, issue, dataset, browser page, CLI command, or user request.
3. **Product actions**: show the specific actions the app performs. Use outcome labels, not vague verbs.
4. **Durable output**: show the saved file, exported PDF, dashboard row, ledger entry, report, diff, or generated artifact.
5. **Trust signal**: show tests, validation, warnings, guardrails, logs, redaction, or system boundaries.
6. **Reviewer path**: show where a technical reviewer can inspect the repo, commands, architecture notes, or generated artifacts.

Every scene should end on an inspectable state: a row, file, PDF, log line, test result, dashboard, diff, or explicit warning. Avoid abstract before/after claims unless the before and after are named concrete states.

Weak:

```text
Before: scattered
After: connected
```

Strong:

```text
Input: job page
Output: cover-letter PDF
Record: SQLite application row
```

Scene titles should describe outcomes rather than process labels. For example, use `Job page to saved record` instead of `Capture, review, draft, save, track`.

## Reading-Speed Rules

Treat text as something the viewer must read while also inspecting UI. Use caption pacing as the ceiling, then slow down for dense product shots.

- Target `100-140` words per minute for plain overview scenes.
- Target `140-160` words per minute for technical proof scenes.
- Treat `180` words per minute as the upper bound only for short, familiar questions or labels.
- Keep overlays to one headline plus one short sentence. Prefer labels over full narration.
- Add at least `0.5-1.0s` when the viewer must inspect a screenshot, terminal, chart, or moving UI.
- If a scene needs more than `16-18` words, split the idea or hold the frame longer.
- If the screen has dense UI, reduce the text instead of asking the viewer to read and inspect at the same time.

For a 35-40 second overview, six scenes of roughly `6-7s` each is a good default. Most scenes should have fewer than `15` must-read words.

## Capture Workflow

1. Open the project, docs, demo, or local app.
2. Identify the 3-6 proof moments worth showing.
3. Capture clean screenshots of stable states.
4. Capture short clips only where motion explains the workflow better than a still image.
5. Save raw assets under `assets/raw/`.
6. Select the best assets and copy them into `assets/selected/`.
7. Redact private data before any asset reaches HyperFrames.

Good proof moments include:

- Input entering the system
- Review or approval gate
- Automation/controller step
- Generated artifact
- Verification result
- Before/after state
- Ledger, manifest, receipt, or audit trail
- System boundary or handoff
- Guardrail, warning, or missing-data behavior

## Browser Use Capture Rail

Use this for web apps and browser-visible product flows.

1. Launch the relevant app or page.
2. Set a consistent viewport, usually desktop `1440x900` or video-native `1920x1080`.
3. Navigate to the exact state needed for the scene.
4. Capture screenshot, full-page screenshot, element screenshot, or short session footage.
5. Record the URL, viewport, login state, and any seed data needed to reproduce the state.
6. Repeat only for scenes that show distinct proof.

Use Browser Use first for:

- Palabruno
- Genrupt
- Acquire
- Job Application Assistant extension screens
- Casamo
- BA Eventos
- Apartment Finder
- Vox Prismatic
- Launch sites and portfolio scroll loops

## Computer Use Capture Rail

Use this when the proof is outside a browser automation-friendly surface.

1. Open the local app, native app, or desktop workflow.
2. Prepare the UI state manually or with a local command.
3. Capture the smallest useful screen area.
4. Avoid showing unrelated desktop content.
5. Save raw footage immediately with a descriptive filename.
6. Redact before composition.

Use Computer Use for:

- Codex Telegram Bridge native/menu bar moments
- Telegram or Discord routing views
- App Store or Google Play views
- Local-only tools with desktop output
- Any workflow where Browser Use cannot access the actual UI state

## Redaction Checklist

Before using captured assets in HyperFrames, check for:

- Names, emails, phone numbers, handles, and profile photos
- Client-sensitive data
- LinkedIn messages, connection lists, or private profiles
- Job applications, company-specific drafts, and personal employment data
- Gmail, WhatsApp, Telegram, Discord, and notification content
- API keys, tokens, cookies, session IDs, file paths with secrets, and environment variables
- Revenue, billing, or account data that is not already public

Prefer synthetic seed data for repeatable captures. If real data is necessary, crop tightly or mask it.

## HyperFrames Production Workflow

1. Create the project video folder and `DESIGN.md`.
2. Create `project-video-source.md` from the template and lock the proof inventory, scene cards, and on-screen text.
3. Choose the audience and story mode from `project-video-source.md`.
4. Define the plain overview, evidence tour, or walkthrough arc from that source.
5. Place redacted selected assets beside the composition.
6. Build static layouts first.
7. Add entrance animations and transitions.
8. Add captions or callouts only where they clarify the story.
9. Check reading load before rendering.
10. Add the ending beat: the final message settles, the last `2.5-3s` hold cleanly, and any fade happens only after that hold.
11. Run HyperFrames lint, validate, inspect, and snapshot checks.
12. Render the video with the normal HyperFrames CLI.
13. Verify the final MP4 duration, dimensions, and thumbnail.

Every video should produce:

- `final.mp4`
- `thumbnail.png`
- `brief.md`
- `project-video-source.md`
- `sources.md` or asset manifest
- HyperFrames source files

## Video Types

Plain overview videos should be 35-45 seconds and explain problem, solution, and result to a nontechnical viewer.

Flagship case-study evidence tours should be 45-75 seconds and include concrete job, input, product actions, durable output, trust signal, and reviewer path.

Workflow proof videos should be 35-60 seconds and focus on the core flow, guardrails, artifacts, and verification.

Short product demos should be 20-40 seconds and show the core user path.

Scroll loops should be 10-25 seconds and work as silent page embeds.

## Pilot Workflow

Start with one pilot before producing the full set.

Recommended pilot: `Job Application Assistant`.

Why: it has a clear input-to-output workflow, browser UI, local backend behavior, generated artifacts, and an inspectable ledger. It also forces the privacy/redaction rules early.

Pilot acceptance criteria:

- The video explains the project without needing the case-study page open.
- The footage shows real product behavior, not only title cards.
- No private data is visible.
- The HyperFrames source can be reused as a template for the next project.
- The final video has one thumbnail and one MP4 ready for portfolio use.

## Sources Reviewed

- [Playwright screenshots](https://playwright.dev/docs/screenshots)
- [Playwright video recording](https://playwright.dev/docs/videos)
- [Browser Use CLI](https://docs.browser-use.com/open-source/browser-use-cli)
- [Browser Use available tools](https://docs.browser-use.com/open-source/customize/tools/available)
- [HyperFrames introduction](https://hyperframes.heygen.com/introduction)
- [HyperFrames quickstart](https://hyperframes.heygen.com/quickstart)
- [Wistia explainer videos](https://wistia.com/learn/marketing/explainer-videos)
- [Vidyard demo videos](https://www.vidyard.com/blog/demo-videos/)
- [Atlassian/Loom product demonstration guide](https://www.atlassian.com/blog/loom/product-demonstration)
- [Section508 captions and transcripts](https://www.section508.gov/create/captions-transcripts/)
- [DCMP captioning key](https://dcmp.org/captioningkey/print)
- [NN/g UX portfolios](https://www.nngroup.com/articles/ux-design-portfolios/)
- [GitHub about READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [Vercel product tour](https://vercel.com/product-tour)
- [Linear customer requests](https://linear.app/changelog/2024-12-09-customer-requests)
- [Cursor blog](https://cursor.com/blog)
