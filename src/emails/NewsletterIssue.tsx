import * as React from "react";
import { Heading, Img, Link, Text } from "@react-email/components";
import { PublicationLayout } from "./PublicationLayout";

export type NewsletterBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

interface NewsletterIssueProps {
  title: string;
  preview: string;
  blocks: NewsletterBlock[];
}

export function NewsletterIssue({ title, preview, blocks }: NewsletterIssueProps) {
  return (
    <PublicationLayout
      preview={preview}
      footer={
        <Text style={unsubscribe}>
          Don’t want these notes?{" "}
          <Link href="{{{RESEND_UNSUBSCRIBE_URL}}}" style={link}>
            Unsubscribe
          </Link>
          .
        </Text>
      }
    >
      <Heading style={heading}>{title}</Heading>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <Heading as="h2" key={index} style={sectionHeading}>
              {block.text}
            </Heading>
          );
        }
        if (block.type === "image") {
          return (
            <div key={index} style={imageBlock}>
              <Img src={block.src} alt={block.alt} width="564" style={image} />
              {block.caption ? <Text style={caption}>{block.caption}</Text> : null}
            </div>
          );
        }
        return (
          <Text key={index} style={copy}>
            {block.text}
          </Text>
        );
      })}
    </PublicationLayout>
  );
}

NewsletterIssue.PreviewProps = {
  title: "Reliable AI Workflows Are Learned Through Failure",
  preview:
    "I let an AI workflow keep producing videos before I had decided whether the first one was worth repeating.",
  blocks: [
    {
      type: "paragraph",
      text: "I let an AI video workflow keep producing work before I had decided whether the first result was worth repeating.",
    },
    {
      type: "paragraph",
      text: "It started with a twenty-one-minute recording I wanted to turn into short clips. The tools could identify possible moments, add captions, and prepare files for different platforms, so the process kept moving.",
    },
    {
      type: "paragraph",
      text: "By the time I stopped it, it had produced five captioned videos and twenty sets of files for different platforms. There was plenty of finished-looking work to review and no agreed example to judge it against.",
    },
    {
      type: "paragraph",
      text: "Nothing had been published. The files were preserved and held. But the workflow had already spent time multiplying an idea that I hadn’t accepted yet.",
    },
    {
      type: "paragraph",
      text: "The tools had done what the procedure allowed them to do. The failure was in the order of decisions.",
    },
    {
      type: "image",
      src: "https://www.hanifcarroll.com/images/newsletter/reliable-ai-workflows/production-before-approval.webp",
      alt: "One source recording expands into five finished video clips and many downstream packages before any representative output is approved.",
      caption:
        "The workflow multiplied finished-looking outputs before one example had been approved.",
    },
    { type: "heading", text: "Move approval before production" },
    {
      type: "paragraph",
      text: "The workflow should have stopped after one complete video. I needed to decide whether the story worked, whether the pacing felt right, whether the captions were readable, and whether the overall treatment was worth repeating. Only then did it make sense to produce the remaining clips or prepare anything for multiple platforms.",
    },
    {
      type: "paragraph",
      text: "The replacement procedure is much simpler.",
    },
    {
      type: "paragraph",
      text: "AI reviews the complete recording and recommends a small set of self-contained stories. I choose the stories and name one pilot. The system produces that pilot and stops. I review the exact finished video. If I approve it, its general editing and caption style becomes the starting point for the remaining clips. If I don’t, we revise one video instead of revising a batch.",
    },
    {
      type: "paragraph",
      text: "I couldn’t have written that procedure perfectly at the beginning because I hadn’t yet felt the cost of putting the approval too late.",
    },
    { type: "heading", text: "Context and procedure solve different problems" },
    {
      type: "paragraph",
      text: "I’ve been thinking about two parts of agent performance that I can directly improve: context and procedure. They aren’t the only reasons a system can fail, but they’re the parts I keep changing as I learn a task.",
    },
    {
      type: "paragraph",
      text: "Context is what the agent can see: the source material, goals, previous decisions, examples, constraints, and current state that should inform what it does.",
    },
    {
      type: "paragraph",
      text: "Procedure is the order in which the work happens: what the agent can do, what it must return, what gets checked, where the process stops, and which decisions still belong to a person.",
    },
    {
      type: "paragraph",
      text: "In the video workflow, more context wouldn’t have fixed the main problem. The system could have understood the recording perfectly and still produced too much before I had made the decision that mattered.",
    },
    {
      type: "paragraph",
      text: "The first procedure treated a review as something that happened after production. The failed run showed that approval had to control production. That is a different kind of correction from adding more instructions to a prompt.",
    },
    {
      type: "paragraph",
      text: "The difficulty is that you often can’t see the right order before you’ve done the task enough times.",
    },
    { type: "heading", text: "Find the first material failure" },
    {
      type: "paragraph",
      text: "At the beginning, you give the AI the best procedure you have, run it, and inspect what happens. Some parts work. Other parts fail in ways you didn’t anticipate. A failed run can show that the model lacked context, but it can also show that the task was too large, a decision came too late, or a stop condition didn’t exist.",
    },
    {
      type: "paragraph",
      text: "I’m experimenting with a simple way to review these runs. Before testing, define what a pass looks like for each stage that matters. Then, if a run fails in several ways, record the earliest stage that made the dependent work unreliable or premature.",
    },
    {
      type: "paragraph",
      text: "In this case, the first material failure happened when the process moved beyond one representative video without an approval. The later files weren’t separate mysteries to diagnose. They were consequences of the same missing gate.",
    },
    {
      type: "image",
      src: "https://www.hanifcarroll.com/images/newsletter/reliable-ai-workflows/pilot-approval-gate.webp",
      alt: "One pilot video reaches a human approval gate while the remaining clips and platform packages wait behind it.",
      caption: "One approved pilot becomes the gate for repeated production.",
    },
    {
      type: "paragraph",
      text: "Then change one part of the procedure. Add the missing source. Split one step into two. Make the model return something you can verify. Move a decision back to a person. Add a stop condition.",
    },
    { type: "heading", text: "Add one gate, then test again" },
    {
      type: "paragraph",
      text: "This is still a working theory. I don’t think every failure should become another rule, and I don’t think every bad result means the procedure needs another gate. A process can become too rigid when it tries to anticipate every exception.",
    },
    {
      type: "paragraph",
      text: "What I want to know is whether the failure exposed something stable about the task. For this workflow, it did: one approved example should come before repeated production.",
    },
    {
      type: "paragraph",
      text: "When an AI-assisted process disappoints you, do you change the prompt, or do you change the procedure around it?",
    },
  ],
};

export default NewsletterIssue;

const heading = {
  margin: "0 0 28px",
  fontFamily: "Georgia, serif",
  fontSize: "34px",
  fontWeight: "400",
  lineHeight: "1.12",
  letterSpacing: "-0.5px",
};
const copy = {
  margin: "0 0 20px",
  fontFamily: "Georgia, serif",
  fontSize: "17px",
  lineHeight: "1.72",
};
const sectionHeading = {
  margin: "34px 0 16px",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "21px",
  fontWeight: "700",
  lineHeight: "1.3",
};
const imageBlock = { margin: "30px 0" };
const image = { display: "block", width: "100%", height: "auto", borderRadius: "4px" };
const caption = {
  margin: "9px 0 0",
  color: "#667180",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "12px",
  lineHeight: "1.5",
};
const unsubscribe = { margin: "18px 0 0", color: "#667180", fontSize: "12px", lineHeight: "1.6" };
const link = { color: "#485463", textDecoration: "underline" };
