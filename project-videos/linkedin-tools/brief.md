# Project Video Brief

Project: LinkedIn Tools

Video type: Systems/guardrails proof video

Target duration: 45 seconds

Primary viewer: Hiring manager or general portfolio viewer

Story mode: Workflow proof

One-sentence job: LinkedIn Tools puts risky LinkedIn workflows behind controller-owned state, review gates, and evidence trails.

Viewer takeaway: This is a guarded automation system where workflow ownership and proof are part of the product.

Plain story:

- Problem: browser automation is easy to demo but hard to trust when actions can affect real accounts.
- Solution: separate LinkedIn workflows into controller-owned rails with explicit action boundaries, review gates, and saved evidence.
- Result: runs leave artifacts, ledgers, audits, blockers, and review pages that can be inspected before and after automation acts.

Scene arc:

1. Problem: browser automation is easy to show, harder to trust.
2. Cost: every risky action needs a clear owner and proof trail.
3. Solution: LinkedIn Tools puts workflows behind controllers.
4. How it works: each rail has a boundary and a different permission level.
5. Result: runs leave evidence that can be reviewed later.
6. Why it matters: automation runs where the system can explain what happened.

Reading-speed constraint:

- Use one headline plus one short sentence at most.
- Keep each scene below 16 must-read words.
- Hold each scene for roughly 6.8-7 seconds.
- Keep implementation terms off-screen unless they are part of a guardrail label.

Assets needed:

- Screenshot: public isolated review UI from `src/assets/img/projects/linkedin-tools-review-ui.png`.
- UI clip: not needed; motion is built in HyperFrames around a static safe screenshot.
- Artifact: native evidence cards for artifacts, ledgers, audits, blockers, and review pages.
- Diagram/data point: guarded workflow rails, not a private runtime state view.

Privacy notes:

- Hide: private LinkedIn runtime data, browser profiles, cookies, account state, messages, contact lists, profile photos, credentials, tokens, and local state paths.
- Safe to show: public case-study copy, isolated temporary-state review UI screenshot, plain workflow labels, and synthetic guardrail/evidence graphics.
