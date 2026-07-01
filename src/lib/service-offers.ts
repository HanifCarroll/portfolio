import type { ImageMetadata } from "astro";
import { getProjectImage } from "./project-images";
import { getProject } from "./projects";

export type ServiceOfferKey = "audit" | "systemsBuild" | "mvp" | "fractional";

export interface ServiceOfferProof {
  label: string;
  title: string;
  body: string;
  href: string;
  image: ImageMetadata;
  imageAlt: string;
  imageClass?: string;
}

export interface ServiceOffer {
  key: ServiceOfferKey;
  path: string;
  label: string;
  title: string;
  metaTitle: string;
  description: string;
  heroTitle: string;
  heroBody: string;
  price: string;
  chooserSummary: string;
  chooserCta: string;
  ctaLabel?: string;
  fitHeading: string;
  fitBody: string;
  fitSignals: string[];
  outcomesHeading: string;
  outcomes: Array<{
    title: string;
    body: string;
  }>;
  processHeading: string;
  process: Array<{
    title: string;
    body: string;
  }>;
  proofHeading: string;
  proof: ServiceOfferProof[];
  faqs: Array<{
    title: string;
    body: string;
  }>;
  finalHeading: string;
  finalBody: string;
}

const proofImage = (slug: string, imageKey: "hero" | "feature" = "feature") => {
  const project = getProject(slug);

  if (!project) {
    throw new Error(`Missing project metadata for service proof "${slug}".`);
  }

  return getProjectImage(project, imageKey);
};

export const serviceOffers: Record<ServiceOfferKey, ServiceOffer> = {
  audit: {
    key: "audit",
    path: "/business-systems-audit/",
    label: "Business Systems Audit",
    title: "Business Systems Audit",
    metaTitle: "Business Systems Audit",
    description:
      "A paid diagnostic for growing businesses that need to map operational bottlenecks, identify where custom software, automation, or AI should help, and define the first buildable system.",
    heroTitle: "Find the operating bottleneck before you build.",
    heroBody:
      "I map how the business actually runs, identify the manual work and system gaps slowing it down, and turn that into a clear first build plan for custom software, automation, or AI.",
    price: "Starts at $2,500",
    chooserSummary:
      "For founders and operators whose business has outgrown spreadsheets, inboxes, manual handoffs, or stitched-together tools.",
    chooserCta: "Explore the audit",
    ctaLabel: "Book a Business Systems Audit",
    fitHeading: "For growing businesses where the work is moving, but the system is not.",
    fitBody:
      "This works best when the business already has demand, customers, or repeatable work, but the operating model is becoming harder to run as volume increases.",
    fitSignals: [
      "Manual work is piling up across spreadsheets, inboxes, forms, or disconnected tools.",
      "Important handoffs, approvals, reporting, or customer workflows are hard to see clearly.",
      "You know software or AI could help, but you are not sure what should be built first.",
    ],
    outcomesHeading: "What you leave with",
    outcomes: [
      {
        title: "An operating map",
        body: "A clear view of the workflow, actors, tools, data, handoffs, and failure points that shape how the business currently runs.",
      },
      {
        title: "A prioritized build plan",
        body: "A practical recommendation for the first internal tool, automation, dashboard, or AI workflow worth building.",
      },
      {
        title: "A scoping path",
        body: "Enough detail to decide whether the next move is a focused build, fractional execution support, or a smaller operational change.",
      },
    ],
    processHeading: "How the audit works",
    process: [
      {
        title: "Map the system",
        body: "We trace the workflow from intake to outcome, including the people, tools, documents, and decisions involved.",
      },
      {
        title: "Diagnose the leverage",
        body: "I identify the bottlenecks, repeated manual work, risky handoffs, and places where software, automation, or AI can help.",
      },
      {
        title: "Scope the first build",
        body: "You get a concrete first-system recommendation with the outcome, constraints, build shape, and next-step plan.",
      },
    ],
    proofHeading: "Relevant systems projects",
    proof: [
      {
        label: "Operating system",
        title: "Acquire",
        body: "A local-first acquisition operating system turned sourcing, review, application prep, outreach, and submission into one governed workflow.",
        href: "/projects/acquire/",
        image: proofImage("acquire"),
        imageAlt:
          "Acquire macOS command center showing the Pursuits workflow for submitted applications.",
        imageClass: "object-left-top",
      },
      {
        label: "Operations prototype",
        title: "Desarmadero Operations",
        body: "One discovery call became a clickable operations prototype, PRD, functional spec, live demo, and clearer scope conversation.",
        href: "/projects/desarmadero-operations-prototype/",
        image: proofImage("desarmadero-operations-prototype", "hero"),
        imageAlt:
          "Desarmadero operations prototype showing the counter-sales workflow and live order summary.",
        imageClass: "object-left-top",
      },
    ],
    faqs: [
      {
        title: "Do I need to know what to build?",
        body: "No. The audit is meant for the stage where the operational pain is clear, but the right software shape is not yet obvious.",
      },
      {
        title: "What happens after the audit?",
        body: "You can use the plan internally, hire someone else, or continue into a focused systems build or fractional product engineering phase.",
      },
      {
        title: "Is this only for AI projects?",
        body: "No. AI is useful when it fits the workflow. The audit starts with the operating constraint, then chooses the right tool.",
      },
    ],
    finalHeading: "Want to find the first system worth building?",
    finalBody: "Use the call to decide whether a Business Systems Audit is the right first step.",
  },
  systemsBuild: {
    key: "systemsBuild",
    path: "/business-systems-build/",
    label: "Business Systems Build",
    title: "Business Systems Build",
    metaTitle: "Business Systems Build",
    description:
      "Focused implementation of internal tools, workflow automation, dashboards, and AI operations systems for growing businesses with a clear operational constraint.",
    heroTitle: "Build the operating system your team actually needs.",
    heroBody:
      "I design and build the internal tools, automations, dashboards, and AI workflows that replace brittle manual processes once the business constraint is clear.",
    price: "Scoped after audit",
    chooserSummary:
      "For teams that already know the bottleneck and need the internal tool, automation, dashboard, or AI workflow built.",
    chooserCta: "Explore systems build",
    ctaLabel: "Book a Build Scoping Call",
    fitHeading: "For teams ready to turn a diagnosed workflow into software.",
    fitBody:
      "This works best after a Business Systems Audit or a similar discovery process has already clarified the workflow, users, constraints, and desired operating outcome.",
    fitSignals: [
      "The workflow is understood well enough to scope a first useful version.",
      "The team needs a custom internal tool, automation, dashboard, or AI-assisted process.",
      "The build needs product judgment, implementation, and handoff clarity from one senior builder.",
    ],
    outcomesHeading: "What the build produces",
    outcomes: [
      {
        title: "A working system",
        body: "A usable first version of the tool, workflow, dashboard, or automation tied to the operating problem.",
      },
      {
        title: "Clear adoption path",
        body: "The system is shaped around the people who need to run it, not just the technical implementation.",
      },
      {
        title: "Maintainable handoff",
        body: "The work is documented enough for the business to operate, extend, or continue with fractional support.",
      },
    ],
    processHeading: "How the build works",
    process: [
      {
        title: "Confirm the scope",
        body: "We turn the diagnosed constraint into the smallest useful build that can improve the workflow.",
      },
      {
        title: "Design and implement",
        body: "I handle the product and engineering loop directly, including UX, data model, integrations, automation, and AI where useful.",
      },
      {
        title: "Launch into operations",
        body: "The system is shipped with the context, documentation, and next-step recommendations needed to keep improving it.",
      },
    ],
    proofHeading: "Relevant build projects",
    proof: [
      {
        label: "Operating system",
        title: "Acquire",
        body: "A governed workflow brought sourcing, review, prep, outreach, and submission into one local-first application system.",
        href: "/projects/acquire/",
        image: proofImage("acquire"),
        imageAlt:
          "Acquire macOS command center showing the Pursuits workflow for submitted applications.",
        imageClass: "object-left-top",
      },
      {
        label: "Product platform",
        title: "Genrupt",
        body: "An AI creative platform gained subscriptions, credit billing, agent access, and background jobs for production use.",
        href: "/projects/genrupt/",
        image: proofImage("genrupt"),
        imageAlt:
          "E-commerce creative operations desk with packages, notes, and product materials.",
        imageClass: "object-left-top",
      },
    ],
    faqs: [
      {
        title: "Can the build start without an audit?",
        body: "Yes, if the workflow and constraint are already clear enough to scope responsibly.",
      },
      {
        title: "Is this a no-code automation service?",
        body: "No. I use the simplest tool that fits, but the work is product engineering: custom software, integrations, automation, and AI workflows when they are useful.",
      },
      {
        title: "What happens after the first build?",
        body: "The next step depends on adoption and operational value. That may be handoff, iteration, or fractional product engineering.",
      },
    ],
    finalHeading: "Have a diagnosed workflow ready to build?",
    finalBody: "Use the call to decide whether this is ready for a focused Business Systems Build.",
  },
  mvp: {
    key: "mvp",
    path: "/mvp-launch/",
    label: "MVP Launch",
    title: "4-Week MVP Launch",
    metaTitle: "4-Week MVP Launch",
    description:
      "A focused product build for nontechnical founders who need a usable first version, clear scope, UX, implementation, and launch support from one senior product engineer.",
    heroTitle: "Get the first useful version live.",
    heroBody:
      "I help nontechnical founders turn rough product ideas into focused web and mobile MVPs: scope, UX, build, launch support, and enough handoff clarity to keep moving after v1.",
    price: "Starts at $10,000",
    chooserSummary:
      "For nontechnical founders with a product idea that needs to become a usable first version.",
    chooserCta: "Explore MVP launch",
    fitHeading: "For founders who need the first real version, not a long requirements document.",
    fitBody:
      "This works best when the idea is specific enough to test, but still needs product judgment, UX decisions, and implementation discipline before it can become software.",
    fitSignals: [
      "You have a rough product idea, workflow, or prototype that needs a shippable shape.",
      "You need one person who can scope, design, build, and explain the tradeoffs.",
      "You want a real first version in front of users without building a team first.",
    ],
    outcomesHeading: "What you leave with",
    outcomes: [
      {
        title: "A cut scope",
        body: "The first version is narrowed to the smallest useful product that can create signal.",
      },
      {
        title: "A usable product",
        body: "The build is real enough for users, demos, sales conversations, or internal workflow validation.",
      },
      {
        title: "A path after launch",
        body: "You leave with the next product decisions, not just a codebase handed over without context.",
      },
    ],
    processHeading: "How the launch works",
    process: [
      {
        title: "Shape the version",
        body: "We turn the rough idea into a buildable scope, user flow, and launch target.",
      },
      {
        title: "Build in one lane",
        body: "I handle the product and implementation loop directly so decisions do not get lost between handoffs.",
      },
      {
        title: "Launch with context",
        body: "We package what shipped, what changed, and what should be validated next.",
      },
    ],
    proofHeading: "Relevant launch projects",
    proof: [
      {
        label: "Founder MVP",
        title: "Palabruno",
        body: "A nontechnical founder moved from product idea to mobile subscriptions, web payments, and teacher workflows.",
        href: "/projects/palabruno/",
        image: proofImage("palabruno"),
        imageAlt: "Spanish reading materials with vocabulary, grammar, and pronunciation cards.",
      },
      {
        label: "Decision MVP",
        title: "Casamo",
        body: "A travel decision product became a focused first version for remote workers comparing long-term stays.",
        href: "/projects/casamo/",
        image: proofImage("casamo"),
        imageAlt:
          "Casamo homepage showing the stay search form and audit priorities over a furnished apartment.",
        imageClass: "object-left-top",
      },
    ],
    faqs: [
      {
        title: "What if the first version should be smaller?",
        body: "Good. The launch is meant to find the smallest useful version, not defend the largest initial idea.",
      },
      {
        title: "Do I need a finished spec before we talk?",
        body: "No. Bring the rough version: a workflow, idea, prototype, customer problem, or current product constraint.",
      },
      {
        title: "What happens after the launch?",
        body: "We use the shipped version to decide the next move. That may be iteration, handoff, or a fractional support phase.",
      },
    ],
    finalHeading: "Have a rough product idea?",
    finalBody:
      "Use the call to decide whether this should become a 4-week launch, a smaller first step, or something to park.",
  },
  fractional: {
    key: "fractional",
    path: "/fractional-product-engineering/",
    label: "Fractional Product Engineering",
    title: "Fractional Product Engineering",
    metaTitle: "Fractional Product Engineering",
    description:
      "Fractional product engineering for founder-led teams that need ongoing senior product judgment, architecture decisions, UX execution, and shipping help after the operating constraint is clear.",
    heroTitle: "Ongoing product engineering once the constraint is clear.",
    heroBody:
      "I work with founder-led teams that need senior product and engineering judgment around known constraints: architecture calls, UX decisions, implementation, AI workflows, and delivery follow-through.",
    price: "Fractional retainers",
    chooserSummary:
      "For teams that need ongoing senior product engineering support after the system, product, or workflow constraint is clear.",
    chooserCta: "Explore fractional engineering",
    ctaLabel: "Book a Fit Call",
    fitHeading: "For teams that need continued senior execution after the direction is clear.",
    fitBody:
      "This is for teams that already have a product, customers, or a serious operating constraint, but need someone senior enough to keep making product and technical calls while still shipping.",
    fitSignals: [
      "The core constraint is known, but the team needs senior execution to keep moving.",
      "You need one senior builder who can make architecture calls and ship.",
      "You have active product work where weekly judgment matters more than a one-time handoff.",
    ],
    outcomesHeading: "Where the support helps",
    outcomes: [
      {
        title: "Clearer decisions",
        body: "Product, UX, and architecture tradeoffs get named directly so the team can move.",
      },
      {
        title: "Shipped improvements",
        body: "The work stays close to implementation, not just advisory notes or strategy docs.",
      },
      {
        title: "Less delivery drag",
        body: "Ambiguous product work gets turned into scoped, buildable, testable steps.",
      },
    ],
    processHeading: "How the retainer works",
    process: [
      {
        title: "Find the constraint",
        body: "We start with the current bottleneck: product clarity, UX, architecture, team process, or implementation.",
      },
      {
        title: "Ship against it",
        body: "I help make the call, write the code where useful, and keep the work moving through review and release.",
      },
      {
        title: "Leave the system stronger",
        body: "The goal is not dependency. The product, code, and team context should get easier to operate.",
      },
    ],
    proofHeading: "Relevant product engineering projects",
    proof: [
      {
        label: "AI product platform",
        title: "Genrupt",
        body: "Commercial and reliability foundations helped move an AI creative platform beyond demo-stage workflows.",
        href: "/projects/genrupt/",
        image: proofImage("genrupt"),
        imageAlt:
          "E-commerce creative operations desk with packages, notes, and product materials.",
        imageClass: "object-left-top",
      },
      {
        label: "Fractional CTO",
        title: "Mucho Hangouts",
        body: "Fractional product and technical support helped stabilize foundations while the team kept shipping.",
        href: "/projects/mucho-hangouts/",
        image: proofImage("mucho-hangouts"),
        imageAlt: "Mucho Hangouts product interface for social events and group discovery.",
      },
    ],
    faqs: [
      {
        title: "Is this advisory or implementation?",
        body: "Both when useful. The value is senior judgment that stays close enough to the product and code to change the outcome.",
      },
      {
        title: "What size team is this for?",
        body: "Founder-led teams, small product teams, and operator-led businesses where a full-time senior hire is not the right first move.",
      },
      {
        title: "What if the need is only short-term?",
        body: "Then we define a tighter sprint or first phase. Fractional work should match the actual constraint, not become a default commitment.",
      },
    ],
    finalHeading: "Need senior product engineering support?",
    finalBody:
      "Use the call to decide whether fractional support, a focused systems build, or a smaller diagnostic pass is the right first move.",
  },
};

export const serviceOfferList: ServiceOffer[] = [
  serviceOffers.audit,
  serviceOffers.systemsBuild,
  serviceOffers.fractional,
];
