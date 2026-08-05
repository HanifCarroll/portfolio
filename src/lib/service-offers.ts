import type { ImageMetadata } from "astro";
import { getProjectImage } from "./project-images";
import { getProject } from "./projects";
import { testimonials, type Testimonial } from "./testimonials";

export type ServiceOfferKey = "systemsBuild" | "ongoing";
export type ServiceOfferSection =
  | "fit"
  | "deliverables"
  | "proof"
  | "working"
  | "commercial"
  | "faq";

export interface ServiceOfferProof {
  label: "Client work" | "Independent work";
  title: string;
  heading: string;
  body: string;
  href: string;
  image: ImageMetadata;
  imageAlt: string;
  imageClass?: string;
}

export interface ServiceOffer {
  key: ServiceOfferKey;
  slug: string;
  path: string;
  label: string;
  metaTitle: string;
  description: string;
  heroTitle: string;
  heroBody: string;
  commercialNote: string;
  chooserHeading: string;
  chooserSummary: string;
  chooserCta: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  summary: Array<{ label: string; body: string }>;
  sectionOrder: ServiceOfferSection[];
  fitHeading: string;
  fitBody: string;
  fitSignals: string[];
  deliverablesHeading: string;
  deliverables: Array<{ title: string; body: string }>;
  scopeHeading: string;
  includedHeading: string;
  included: string[];
  boundary: string;
  processHeading: string;
  process: Array<{ title: string; body: string }>;
  responsibilities: string[];
  pricingHeading: string;
  pricingBody: string;
  proof: ServiceOfferProof[];
  testimonial: Testimonial;
  ownershipHeading: string;
  ownershipBody: string;
  faqs: Array<{ title: string; body: string }>;
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


const genruptBuildProof: ServiceOfferProof = {
  label: "Client work",
  title: "Genrupt",
  heading: "Building the systems an AI platform needed for paying teams.",
  body: "I helped build subscriptions, credit accounting, reliable background jobs, and agent access. Those systems helped Genrupt support its first 200 paying customers.",
  href: "/case-studies/genrupt/",
  image: proofImage("genrupt"),
  imageAlt: "Genrupt commercial readiness dashboard showing product and billing systems.",
  imageClass: "object-left-top",
};

const palabrunoBuildExample: ServiceOfferProof = {
  label: "Client work",
  title: "Palabruno",
  heading: "An early product idea became a launched reading product.",
  body: "I built the iOS, Android, and web product around AI reading features, teacher workflows, and payments, then helped move it through launch.",
  href: "/case-studies/palabruno/",
  image: proofImage("palabruno", "hero"),
  imageAlt: "Spanish reading materials and learner interface from Palabruno.",
  imageClass: "object-left-top",
};

const muchoProof: ServiceOfferProof = {
  label: "Client work",
  title: "Mucho Hangouts",
  heading: "Improving a live product while the team kept shipping.",
  body: "I helped improve messaging, notifications, delivery patterns, and team practices while the product remained active and priorities continued to change.",
  href: "/case-studies/mucho-hangouts/",
  image: proofImage("mucho-hangouts"),
  imageAlt: "Mucho Hangouts product interface for social events and group discovery.",
};

export const serviceOffers: Record<ServiceOfferKey, ServiceOffer> = {
  systemsBuild: {
    key: "systemsBuild",
    slug: "business-systems-build",
    path: "/services/business-systems-build/",
    label: "Business Systems Build",
    metaTitle: "Business Systems Build | Hanif Carroll",
    description:
      "Design and build an internal tool, automation, dashboard, integration, or AI-assisted workflow around the way your team operates.",
    heroTitle: "Build the system your team needs.",
    heroBody:
      "I turn a clear workflow problem into a working internal tool, automation, dashboard, integration, or AI-assisted workflow. We define the first useful version, build it around the people who will use it, and leave your team with the software, documentation, and decisions behind it.",
    commercialNote: "Priced after we define the scope",
    chooserHeading: "Build the tool your team needs.",
    chooserSummary:
      "I design and build the internal tool, automation, dashboard, integration, or AI-assisted workflow around the people who need to use it.",
    chooserCta: "Explore the Business Systems Build",
    primaryCta: "Start a scoping conversation",
    secondaryCta: "Compare all services",
    secondaryHref: "/services/",
    summary: [
      {
        label: "Best for",
        body: "The workflow, users, and first release are clear enough to scope.",
      },
      {
        label: "You receive",
        body: "Working software, integrations, documentation, and a clear handoff.",
      },
      {
        label: "Pricing",
        body: "Price and schedule are confirmed after the first release is defined.",
      },
    ],
    sectionOrder: ["fit", "deliverables", "proof", "working", "commercial", "faq"],
    fitHeading: "You understand the workflow well enough to decide what should be built.",
    fitBody:
      "You should be able to identify who will use or manage the system, what it needs to produce, the important business rules, and what belongs in the first version. You don't need a finished specification, but the workflow needs to be clear enough to define and price the build.",
    fitSignals: [
      "Your team agrees on the workflow and the problem that needs to be fixed.",
      "You can identify the people who will use or manage the system.",
      "Existing software can't support the workflow without repeated manual effort or unreliable handoffs.",
      "The first useful version can be separated from later improvements.",
    ],
    deliverablesHeading: "What you'll receive from the build.",
    deliverables: [
      {
        title: "Working software",
        body: "A usable first version built around the agreed users, workflow, business rules, and result.",
      },
      {
        title: "Clear status and next steps",
        body: "The people responsible for the workflow can see its important statuses, decisions, approvals, failures, and next actions.",
      },
      {
        title: "Connections to existing tools",
        body: "When the scope requires it, the system connects to the software and data your team already uses instead of creating another disconnected process.",
      },
      {
        title: "Documentation and handoff",
        body: "Your team receives setup information, operating guidance, and the reasoning behind important product and technical decisions.",
      },
    ],
    scopeHeading: "Each build centers on one workflow and a defined first release.",
    includedHeading: "A build may include",
    included: [
      "An internal operational tool",
      "Workflow automation",
      "A reporting or decision dashboard",
      "An integration between existing systems",
      "An AI-assisted review, extraction, or decision workflow",
      "A focused product surface around a recurring business process",
    ],
    boundary:
      "The agreed first release, integrations, users, and handoff requirements are written into the scope before implementation begins. Additional workflows, major adjacent systems, and ongoing improvements are scoped separately.",
    processHeading: "How the build works.",
    process: [
      {
        title: "Confirm the first release",
        body: "After the scoping conversation, if the workflow is clear enough to build, I turn the confirmed workflow and existing requirements into a written first-release scope. We agree on the users, workflow, required features, integrations, risks, review points, ownership, and what can wait before implementation begins.",
      },
      {
        title: "Design the system",
        body: "I map the screens, data, permissions, decisions, and failure states the system needs. You review the product decisions that would be costly to change after implementation.",
      },
      {
        title: "Build and review",
        body: "I build the system in usable pieces and review them with the people who will use or manage it. Feedback stays tied to the agreed workflow and first-release scope.",
      },
      {
        title: "Put it into use",
        body: "The first release is complete when the agreed workflow is usable, the required setup and documentation are delivered, and your team understands the system and handoff. I separate later improvements from that completed release so they don't expand the agreed scope.",
      },
    ],
    responsibilities: [
      "One person who can make scope and priority decisions",
      "Access to the people who will use or manage the system",
      "Access to the tools, data, and technical accounts required by the scope",
      "Timely review of product decisions and usable versions",
      "Clear notice when a business rule, dependency, or priority changes",
    ],
    pricingHeading: "I confirm the price and schedule before the build begins.",
    pricingBody:
      "I confirm the price, schedule, milestones, and responsibilities after the workflow and first release are clear. If they aren't clear yet, we'll use a scoping conversation to decide the right next step.",
    proof: [genruptBuildProof, palabrunoBuildExample],
    testimonial: testimonials.monicaLondono,
    ownershipHeading: "Your business keeps the system and the decisions behind it.",
    ownershipBody:
      "You keep the software, designs, documentation, setup information, and notes behind important decisions. I explain how the system fits the workflow, where its boundaries are, and what your team should know before changing it.",
    faqs: [
      {
        title: "What happens after the scoping conversation?",
        body: "If the workflow and first release are clear enough to build, I write the scope, price, schedule, milestones, and responsibilities for review before implementation begins. If important questions are still open, we'll settle them in a scoping conversation first.",
      },
      {
        title: "Can a build start before the workflow is fully mapped?",
        body: "Yes, when the workflow, users, desired result, and first release are already clear enough to scope. If important questions are still open, a focused review can settle them before implementation begins.",
      },
      {
        title: "Do you have to replace the tools we already use?",
        body: "No. I look at the tools and data you already have. The build may improve them, connect them, automate steps between them, or replace only the part that no longer fits.",
      },
      {
        title: "What happens after the first release?",
        body: "Your team can take over, we can scope another build, or an Ongoing Technical Partnership can cover connected priorities that need continued attention.",
      },
    ],
    finalHeading: "Have a workflow that's ready to become software?",
    finalBody:
      "Tell me who uses it, what needs to change, and what a useful first version should make possible. I'll let you know whether there's enough clarity to scope the build.",
  },
  ongoing: {
    key: "ongoing",
    slug: "ongoing-technical-partnership",
    path: "/services/ongoing-technical-partnership/",
    label: "Ongoing Technical Partnership",
    metaTitle: "Ongoing Technical Partnership | Hanif Carroll",
    description:
      "Ongoing technical support for existing systems, smaller tools and automations, integrations, reliability, reporting, and technical decisions.",
    heroTitle: "Ongoing support for the systems behind your business.",
    heroBody:
      "I work with your team on an agreed set of technical priorities. That can include improving existing systems, building smaller tools and automations, adding integrations, fixing reliability problems, and helping you make decisions as new needs come up.",
    commercialNote: "Monthly partnership scoped around priorities and available time",
    chooserHeading: "Ongoing help for the systems you rely on.",
    chooserSummary:
      "I work with your team on an agreed set of technical priorities. That can include improving existing systems, building smaller tools and automations, adding integrations, fixing reliability problems, and helping you make decisions as new needs come up.",
    chooserCta: "Explore the Ongoing Technical Partnership",
    primaryCta: "Book a fit call",
    secondaryCta: "Compare all services",
    secondaryHref: "/services/",
    summary: [
      {
        label: "Best for",
        body: "Several connected technical needs keep coming up in the same part of the business.",
      },
      {
        label: "You receive",
        body: "Ongoing decisions and improvements from someone who already knows the systems.",
      },
      {
        label: "Pricing",
        body: "A monthly partnership scoped around priorities and available time.",
      },
    ],
    sectionOrder: ["fit", "deliverables", "proof", "working", "commercial", "faq"],
    fitHeading: "The same part of the business keeps needing technical help.",
    fitBody:
      "The partnership covers one part of the business where systems need regular attention. Because I keep the business and technical context between priorities, your team doesn't have to explain the same systems from the beginning each time.",
    fitSignals: [
      "Existing systems need regular improvements as the business changes.",
      "Smaller tools, automations, integrations, or reports need to be built over time.",
      "Reliability problems are interrupting a workflow your team depends on.",
      "Software, vendor, or AI decisions require technical judgment and business context.",
      "Your team wants one person who can understand the need, recommend a direction, and implement the agreed change.",
    ],
    deliverablesHeading: "What ongoing support can cover.",
    deliverables: [
      {
        title: "Improve existing systems",
        body: "Update tools and workflows as your team, customers, data, or business rules change.",
      },
      {
        title: "Build smaller tools and automations",
        body: "Handle focused needs that belong to the agreed area of the business without turning each one into a separate standalone project.",
      },
      {
        title: "Add integrations and reporting",
        body: "Connect systems, reduce repeated data entry, and make important status or results easier to see.",
      },
      {
        title: "Fix reliability problems",
        body: "Investigate failures, strengthen the parts of the system causing trouble, and document what your team should watch.",
      },
      {
        title: "Support technical decisions",
        body: "Evaluate software, vendors, architecture choices, and possible uses of AI, then follow through when implementation belongs inside the partnership.",
      },
    ],
    scopeHeading: "We agree which part of the business the partnership covers.",
    includedHeading: "Examples of an agreed area",
    included: [
      "Customer intake, approvals, and fulfillment",
      "Internal reporting and decision support",
      "Sales operations and follow-up",
      "Content or marketing operations",
      "Product administration and customer support systems",
    ],
    boundary:
      "Priorities can change as new information comes up, as long as they stay within the agreed part of the business and available time. Work in another part of the business, a larger standalone system, or a fixed delivery deadline is scoped separately.",
    processHeading: "How the partnership operates.",
    process: [
      {
        title: "Agree what the partnership covers",
        body: "We define the part of the business the partnership covers, the systems involved, the person who sets priorities, and the time available.",
      },
      {
        title: "Set the current priorities",
        body: "We keep a shared list of improvements, problems, decisions, and smaller builds. Your team sets the order with my input on effort, risk, and dependencies.",
      },
      {
        title: "Make and review changes",
        body: "I investigate, recommend, design, and build within the agreed priorities. The people affected review changes before they become part of the workflow.",
      },
      {
        title: "Keep the context with the systems",
        body: "We update priorities as the business changes. Decisions and documentation stay with the systems they affect, so each next step starts from what we've already learned.",
      },
    ],
    responsibilities: [
      "One person who can set priorities and make timely decisions",
      "Access to the people, systems, and accounts involved",
      "Clear business context when a rule, customer need, or priority changes",
      "Timely feedback from the people affected by a change",
      "Agreement on which priorities fit within the available time",
    ],
    pricingHeading: "How the partnership is scoped and priced.",
    pricingBody:
      "We confirm which part of the business the partnership covers, the starting priorities, available time, monthly price, initial term, payment timing, and responsibilities before it begins.",
    proof: [
      {
        ...genruptBuildProof,
        heading: "Improving billing and reliability as the platform grew.",
        body: "I helped build subscriptions, credit accounting, background jobs, and agent access while Genrupt moved from early product development to supporting its first 200 paying customers.",
      },
      muchoProof,
    ],
    testimonial: testimonials.markisZarate,
    ownershipHeading: "Your team keeps the systems, decisions, and documentation.",
    ownershipBody:
      "Your team keeps every tool, automation, integration, update, and the documentation and decisions behind it. If the partnership ends, I prepare a clear handoff for any active priority or unfinished change, so the business doesn't depend on information that only I have.",
    faqs: [
      {
        title: "What happens if the partnership ends?",
        body: "Your team keeps every tool, automation, integration, update, and the documentation and decisions behind it. I prepare a clear handoff for any active priority or unfinished change, so the business doesn't depend on information that only I have.",
      },
      {
        title: "Can the partnership begin before the workflow is fully mapped?",
        body: "Yes, when the systems, business area, and first priorities are already clear enough to define. If they aren't, a focused workflow review can create that starting point.",
      },
      {
        title: "Is this advisory or implementation?",
        body: "It can include both. I can evaluate options, recommend a direction, change existing systems, and build smaller tools or automations within the agreed priorities.",
      },
      {
        title: "How is this different from a Business Systems Build?",
        body: "The partnership covers a continuing set of connected priorities. A Business Systems Build has one defined first release, price, and delivery scope. A larger standalone system that comes up during the partnership is scoped as a build.",
      },
    ],
    finalHeading: "Need ongoing technical help from someone who knows your systems?",
    finalBody:
      "Tell me which part of the business needs support, which systems are involved, and what keeps coming up. We'll use the first call to see whether a monthly partnership fits.",
  },
};

export const serviceOfferList: ServiceOffer[] = [
  serviceOffers.systemsBuild,
  serviceOffers.ongoing,
];

export const getServiceOfferBySlug = (slug: string) =>
  serviceOfferList.find((offer) => offer.slug === slug);
