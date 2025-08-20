---
title: "I Hate Creating Content, So I Built a Robot to Do It For Me"
date: "2025-08-19"
---

Let's be honest: creating content for social media can be a grind.

As a technical product partner, my passion is designing and building elegant digital products. My days are filled with solving complex problems for clients, and the last thing I want to do is stare at a blank screen trying to figure out what to post.

I was struggling with consistency and coming up with new content ideas. At the same time, I had a goldmine of valuable content sitting untapped: hours of transcripts from my coaching sessions. The insights were all there, buried in raw text.

The manual process of mining those transcripts was tedious and time-consuming. It felt like a distraction from my real work. So, I decided to solve the problem the way I know best: I built a system to do it for me.

In less than a day, I created an AI-powered command-line interface (CLI) tool that automates my entire content creation workflow. It transforms a single transcript into a week's worth of insightful, platform-specific social media posts. What used to be hours of drudgery is now a focused, 15-minute weekly review.

This post is the story of how I built that system. It’s not just about the code; it’s about a philosophy of using technology to solve real-world business problems, showcasing how I approach challenges for my clients and myself.

## The Philosophy: Content Intelligence, Not AI Content Farming

My goal was never to have an AI generate generic, soulless content. The world has enough of that. The key was to build a "content intelligence" system that preserves and amplifies **my own voice and expertise**.

This system isn't writing _for_ me; it's automating the process I would have done manually. It’s a multi-stage pipeline that ensures my unique perspective is present from start to finish. It formats my ideas in a way that’s genuinely helpful to my audience.

The strategic core of this intelligence is a framework of **five distinct post types**, which AI helped me refine:

-   **Problem**: Builds empathy by highlighting a common pain point.
-   **Proof**: Builds credibility by showing concrete results.
-   **Framework**: Builds authority by teaching a systematic method.
-   **Contrarian Take**: Builds thought leadership by challenging conventional wisdom.
-   **Mental Model**: Builds a teaching reputation by explaining fundamental concepts.

This framework ensures my content is varied, valuable, and consistently demonstrates different facets of my expertise.

## The Architecture: A 5-Stage Content Pipeline

To turn this philosophy into a reality, I designed a simple but powerful 5-stage pipeline. Each stage is a distinct module in the application, creating a clean, manageable workflow with a human-in-the-loop at critical checkpoints.

1.  **Transcript Processing**: The system ingests raw transcripts from Notion, uses AI to clean them up, and then extracts a set of structured, high-potential insights.
2.  **Insight Review**: This is the first human checkpoint. I quickly review the AI-extracted insights, approving the ones that align with my experience and rejecting any that miss the mark.
3.  **Post Generation**: Approved insights are fed into a more sophisticated AI prompt, which generates platform-specific posts for LinkedIn and X.
4.  **Post Review**: The second human checkpoint. I review the generated drafts, make any final edits, and approve them for scheduling.
5.  **Post Scheduling**: Finally, all approved posts are sent directly to the **[Postiz API](https://postiz.com)** to be scheduled, avoiding any manual copy-pasting.

That's the theory. To show you how this all comes together in practice, I recorded a short video that walks through the entire workflow—from processing a raw transcript to scheduling the final posts. You can see how the human-in-the-loop review stages work and how quickly the system operates.

<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 3rem 0 6rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/w0ICSv55nxo" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

Now that you’ve seen the system in action, let's take a look under the hood at a few of the key technical decisions that brought it to life.

## A Look Under the Hood: Key Decisions & The Human Touch

While this is a technical tool, I want to keep the focus on how it solves problems, which is exactly how I approach my client work. Here are a few key decisions that made the system work so well.

### The Brains: Notion, Gemini, and a No-Hallucination Rule

The entire system uses **Notion** as the central database for all transcripts, insights, and posts. This was a natural choice, as my transcripts were already stored there.

The real magic, however, is in the prompting. To generate high-quality posts, the system doesn't just use the small, extracted insight. It feeds the **entire original transcript** back to the Google Gemini model for full context.

This is a critical step to prevent AI "hallucinations"—where the model might invent metrics or outcomes that weren't in the original conversation. The result is content that is 100% faithful to the source material.

### The Engine: Why I Chose a Functional Paradigm

I built the application in TypeScript using the **Bun** runtime for its speed and built-in support that simplifies development.

More importantly, I chose to write it in a **functional programming style**. I believe this paradigm is easier for AI to reason about and work with compared to traditional object-oriented code. It leads to cleaner, more predictable logic, which was perfect for this kind of stateless, data-transformation pipeline.

### The Human Touch: A User-Obsessed CLI

As a UX professional, I can't help but obsess over the user experience, even in my own internal tools.

This passion led to the creation of a detailed, interactive **Date/Time Picker** for the scheduling module. Instead of forcing me to type in a specific date string, it provides smart suggestions and a user-friendly interface to select the perfect posting time. It’s a small detail, but it’s a reflection of my belief that good design should be present in every interaction.

## The Inevitable Bug: A 45-Minute Detour

No project is complete without a bit of head-scratching. While integrating the self-hosted Postiz scheduling tool, I hit a wall. My requests were failing, even though I was following the API documentation.

After about 45 minutes of digging, I found the culprit: the API endpoint in the documentation said `/public/v1`, but my instance required `/api`. It was a tiny discrepancy, but a great reminder that even the most elegant systems require hands-on problem-solving to bring them to life.

## The Result: More Time for What Matters

I'm now integrating this tool into my weekly workflow. My plan is to take one transcript each week and run it through the entire pipeline—processing, reviewing, editing, and scheduling—in a single, focused 15-minute session.

While I don't have long-term metrics yet, the immediate result is clear: I've transformed a task I genuinely dislike into an efficient, automated system that I'm excited to use. I anticipate it will dramatically increase my posting consistency and audience engagement, creating new opportunities without the creative drain.

This approach—identifying inefficiencies and building elegant solutions—is exactly how I approach client projects. More importantly, I've built a solution that allows me to spend less time on content logistics and more time doing what I love: building great products and solving complex problems for my clients.

If you're facing a complex workflow challenge and need an elegant, effective solution, I'd love to chat. **[Let's connect.](https://cal.com/hanifcarroll/build-my-idea)**
