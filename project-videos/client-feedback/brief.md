# Project Video Brief

Project: Client Feedback Evidence CLI

Video type: Evidence pipeline demo

Target duration: 31-32 seconds

Primary viewer: Hiring manager or general portfolio viewer

Story mode: Plain overview with evidence-pipeline visuals

One-sentence job: Client Feedback Evidence CLI turns scattered private feedback sources into a local, reusable evidence packet.

Viewer takeaway: This is a local workflow that keeps the proof, source, and artifact together without exposing private feedback.

Plain story:

- Problem: useful client proof was scattered across chats, emails, audio notes, and files.
- Solution: one CLI pulls from source-specific rails and writes a local evidence packet.
- Result: the packet can be reused later because the claim, source, and artifacts stay together.

Scene arc:

1. Problem: feedback was scattered.
2. Cost: copying proof by hand broke the trail.
3. Solution: a local evidence packet keeps private material on the machine.
4. How it works: each source is pulled into saved messages, files, audio, and transcripts.
5. Result: the packet can be reused later.
6. Ending beat: project name plus the result line.

Reading-speed constraint:

- Use one headline plus one short sentence at most.
- Keep scenes around 10-13 words and hold each for roughly 5.5-6 seconds.
- Keep command details secondary to the plain evidence-pipeline story.
- Hold the final project/result card for 2.5-3 seconds before fade.

Assets needed:

- Screenshot: public, redacted evidence-packet image from the portfolio case study.
- UI clip: not needed; motion is built in HyperFrames around static proof and native cards.
- Artifact: synthetic packet cards for `run.json`, `messages.json`, `evidence.md`, attachments, audio, and transcripts.
- Diagram/data point: simple input-to-packet rail, not technical architecture.

Privacy notes:

- Hide: private feedback text, contact names, emails, profile photos, recordings, transcripts, raw evidence folders, local paths, browser storage, tokens, and OAuth state.
- Safe to show: public project name, source labels, synthetic redacted message cards, local artifact labels, and the existing public packet image.
