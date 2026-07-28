import {
  INTERVENTION_ORDER,
  configFor,
  runDay,
  type InterventionId,
  type StressConfig,
} from "./engine";

export const TUESDAY_SEED = 42;

export const TUESDAY_COMPANY = {
  name: "Meridian Facility Services",
  description: "a fictional 18-person service company handling about 45 field jobs a week",
  dayContext: "Bookings, changes, quote requests, and issues arrive throughout each day.",
} as const;

export interface TuesdayChapter {
  id: InterventionId;
  week: string;
  title: string;
  body: readonly string[];
  bodyCompact?: readonly string[];
  stageNote: string;
}

export const TUESDAY_CHAPTERS: readonly TuesdayChapter[] = [
  {
    id: "intake",
    week: "Week 1",
    title: "One front door",
    body: [
      "Every request goes into one intake form, no matter what channel it started in.",
      "Five buckets become one queue, and the customer gets an answer right away: got it, you’re in the system. That confirmation removes most of the modeled duplicate requests.",
    ],
    stageNote: "Modeled duplicate rate: 12% to 2%.",
  },
  {
    id: "record",
    week: "Week 3",
    title: "One record per job",
    body: [
      "The spreadsheet, the whiteboard, and the sticky notes become one job record. Everyone reads the same record, and nobody re-types anything.",
      "Watch the loose pieces on the map turn into one shared record.",
    ],
    bodyCompact: [
      "The spreadsheet, the whiteboard, and the sticky notes become one job record. Everyone reads the same record, and nobody re-types anything.",
      "Watch the modeled numbers below as it lands.",
    ],
    stageNote: "Modeled misroute rate: 18% to 8%.",
  },
  {
    id: "dispatch",
    week: "Week 5",
    title: "Assignment rules",
    body: [
      "New jobs route to the right crew member by zone and skill.",
      "The dispatcher stops assigning work by memory and handles the exceptions.",
    ],
    stageNote: "The model routes jobs in about 25 minutes without manual coordination.",
  },
  {
    id: "updates",
    week: "Week 7",
    title: "The customer hears first",
    body: [
      "Confirmations, arrival windows, and running-late notices go out automatically.",
      "In the model, most angry calls come from customers not knowing what is happening.",
    ],
    stageNote: "Modeled complaints fall by more than 80%.",
  },
  {
    id: "triage",
    week: "Week 9",
    title: "AI reads the inbox",
    body: [
      "Incoming requests get classified, key fields extracted, and replies drafted. A person confirms; the software does the typing.",
      "The model includes classification mistakes, so every automated decision stays one click away from a person.",
    ],
    bodyCompact: [
      "Incoming requests get classified, key fields extracted, and replies drafted. A person confirms; the software does the typing.",
      "The model misroutes about one in twenty-five requests, so mistakes stay visible and correctable.",
    ],
    stageNote: "Modeled manual handling: 18 minutes to 4 minutes per request.",
  },
  {
    id: "dashboard",
    week: "Week 11",
    title: "The weekly number",
    body: [
      "One screen shows the week: volume, response time, and stalled work.",
      "Dropped requests used to be invisible. The modeled dashboard makes every stalled job visible.",
    ],
    stageNote: "Every modeled stalled job has an owner and a timer.",
  },
];

export const TUESDAY_MIRROR_STATEMENTS = [
  "Requests reach you through more than two channels.",
  "Finding the status of a job means asking a person.",
  "The same information gets typed more than once.",
  "A customer has been forgotten in the last month.",
  "When one person is out, requests stop moving.",
] as const;

export const TUESDAY_MIRROR_READOUTS = [
  {
    min: 0,
    max: 1,
    headline: "Your workflow has fewer warning signs.",
    body: "The answers suggest that coordination is not the first problem to investigate. Keep the pattern in view as the business changes.",
  },
  {
    min: 2,
    max: 3,
    headline: "A workflow review may be useful.",
    body: "Several handoffs depend on memory or repeated work. A short audit can show whether process, tooling, or capacity is the real constraint.",
  },
  {
    min: 4,
    max: 5,
    headline: "Your answers point to operational risk.",
    body: "These patterns can lead to missed requests and fragile handoffs. The right response may be a process change, software, more capacity, or a combination; the next step is to inspect the real workflow.",
  },
] as const;

export const TUESDAY_CREW = ["Dee", "Marco", "Priya"] as const;

const ALL_INTERVENTIONS = new Set<InterventionId>(INTERVENTION_ORDER);
const NO_INTERVENTIONS = new Set<InterventionId>();
const COMBINED_STRESS: StressConfig = {
  loadMultiplier: 2,
  staffOutage: true,
  apiDown: true,
};

export const TUESDAY_RESULTS = {
  before: runDay(configFor(NO_INTERVENTIONS), TUESDAY_SEED),
  after: runDay(configFor(ALL_INTERVENTIONS), TUESDAY_SEED),
  stressedBefore: runDay(configFor(NO_INTERVENTIONS, COMBINED_STRESS), TUESDAY_SEED),
  stressedAfter: runDay(configFor(ALL_INTERVENTIONS, COMBINED_STRESS), TUESDAY_SEED),
} as const;
