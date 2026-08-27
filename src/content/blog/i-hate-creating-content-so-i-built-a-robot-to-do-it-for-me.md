---
title: "I Hate Creating Content, So I Built a Robot to Do It For Me"
pubDate: "2025-08-19"
description: "How I automated my own content workflow with a functional AI pipeline that turns call transcripts into ready-to-schedule posts."
hidden: true
ctaVariant: systemsBuild
---

I was inconsistent on social because I hate writing posts. The raw material was already in Notion: hours of transcripts from my coaching sessions. Mining them by hand took time I did not want to spend.

In less than a day, I created an AI-powered command-line interface (CLI) that turns one transcript into a week's worth of platform-specific social media drafts. What used to take hours is now a focused, 15-minute weekly review.

The workflow later became a more focused product. [See the transcript-to-draft system.](/projects/vox-prismatic/)

## Preserve the source, automate the process

My goal was never to have AI generate generic content. The system had to start from things I had actually said.

The system isn't writing _for_ me; it automates the process I would have done manually. I still choose the insights, edit the drafts, and approve what gets scheduled.

The strategic core of this intelligence is a framework of **five distinct post types**, which AI helped me refine:

- **Problem**: a pain point from the transcript.
- **Evidence**: a concrete result from the transcript.
- **Framework**: a method I actually used.
- **Contrarian Take**: a claim that goes against the usual advice.
- **Mental Model**: a concept I want someone to reuse.

The five types stop every draft from taking the same shape.

## A five-stage content pipeline

I split the workflow into five stages, with a human checkpoint before generation and another before scheduling.

1.  **Transcript Processing**: The system ingests raw transcripts from Notion, uses AI to clean them up, and then extracts a set of structured, high-potential insights.
2.  **Insight Review**: This is the first human checkpoint. I quickly review the AI-extracted insights, approving the ones that align with my experience and rejecting any that miss the mark.
3.  **Post Generation**: Approved insights are fed into a more sophisticated AI prompt, which generates platform-specific posts for LinkedIn and X.
4.  **Post Review**: The second human checkpoint. I review the generated drafts, make any final edits, and approve them for scheduling.
5.  **Post Scheduling**: Finally, all approved posts are sent directly to the **[Postiz API](https://postiz.com)** to be scheduled, avoiding any manual copy-pasting.

This video shows the full workflow, from processing a raw transcript to scheduling the final posts.

<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 3rem 0 6rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/w0ICSv55nxo" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

## The decisions that shaped the tool

### Notion, Gemini, and a no-hallucination rule

The entire system uses **Notion** as the central database for all transcripts, insights, and posts. This was a natural choice, as my transcripts were already stored there.

The prompt does not use only the extracted insight. It feeds the **entire original transcript** back to Google Gemini for context.

This gives the model less room to invent metrics or outcomes that were not in the original conversation. I still review every draft against the source.

### Why I chose a functional style

I built the application in TypeScript using the **Bun** runtime.

More importantly, I chose to write it in a **functional programming style**. I believe this paradigm is easier for AI to reason about and work with compared to traditional object-oriented code. It leads to cleaner, more predictable logic, which was perfect for this kind of stateless, data-transformation pipeline.

### A date picker instead of another format to remember

The scheduling module uses an interactive **Date/Time Picker** with suggested slots. I choose a posting time instead of typing a date string in the right format.

## The 45-minute API detour

While integrating the self-hosted Postiz scheduling tool, my requests failed even though I was following the API documentation.

After about 45 minutes, I found the culprit: the API endpoint in the documentation said `/public/v1`, but my instance required `/api`.

## The result

I'm now integrating this tool into my weekly workflow. My plan is to take one transcript each week and run it through the entire pipeline—processing, reviewing, editing, and scheduling—in a single, focused 15-minute session.

I don't have long-term metrics yet. What I have is a 15-minute weekly pass: choose one transcript, review the extracted insights, edit the drafts, and schedule them. The open question is whether I run it every week.
