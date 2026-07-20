import type { InterventionId } from "../../lib/tuesday-sim/engine";

export interface Chapter {
  id: InterventionId;
  week: string;
  title: string;
  /** Paragraphs of the chapter card. */
  body: readonly string[];
  /** Variant for small screens, where the diorama is hidden. */
  bodyCompact?: readonly string[];
  applyLabel: string;
  /** Short caption shown on the world stage once applied. */
  stageNote: string;
}

export const CHAPTERS: readonly Chapter[] = [
  {
    id: "intake",
    week: "Week 1",
    title: "One front door",
    body: [
      "Every request goes into one intake form, no matter what channel it started in.",
      "Five buckets become one queue, and the customer gets an answer right away: got it, you’re in the system. That confirmation is what kills most of the duplicates."
    ],
    applyLabel: "Install the intake form",
    stageNote: "Duplicate requests: 12% to 2%."
  },
  {
    id: "record",
    week: "Week 3",
    title: "One record per job",
    body: [
      "The spreadsheet, the whiteboard, and the sticky notes become one job record. Everyone reads the same record, and nobody re-types anything.",
      "Watch the loose pieces on the map turn into one schema."
    ],
    bodyCompact: [
      "The spreadsheet, the whiteboard, and the sticky notes become one job record. Everyone reads the same record, and nobody re-types anything.",
      "Watch the numbers below as it lands."
    ],
    applyLabel: "Watch them crystallize",
    stageNote: "Misroutes: 18% to 8%. Wrong rows and stale copies stop existing."
  },
  {
    id: "dispatch",
    week: "Week 5",
    title: "Assignment rules",
    body: [
      "New jobs route to the right crew member by zone and skill.",
      "The dispatcher stops assigning work by memory and only handles the exceptions."
    ],
    applyLabel: "Turn on the routing rules",
    stageNote: "Jobs route in about 25 minutes, no human touches."
  },
  {
    id: "updates",
    week: "Week 7",
    title: "The customer hears first",
    body: [
      "Confirmations, arrival windows, and running-late notices go out automatically.",
      "Most of the angry calls were never about the job. They were about not knowing."
    ],
    applyLabel: "Switch on customer updates",
    stageNote: "Complaints fall by more than 80%."
  },
  {
    id: "triage",
    week: "Week 9",
    title: "AI reads the inbox",
    body: [
      "Incoming requests get classified, key fields extracted, replies drafted. A person confirms; the software does the typing.",
      "It gets one wrong here — watch it get corrected. Every automated decision stays one click away from a person."
    ],
    bodyCompact: [
      "Incoming requests get classified, key fields extracted, replies drafted. A person confirms; the software does the typing.",
      "It gets about one in twenty-five wrong — and every automated decision stays one click away from a person, so mistakes get corrected, not shipped."
    ],
    applyLabel: "Enable AI triage",
    stageNote: "Manual work: 18 minutes to 4. Most requests need none."
  },
  {
    id: "dashboard",
    week: "Week 11",
    title: "The weekly number",
    body: [
      "One screen shows the week: volume, response time, dropped balls.",
      "That number used to be invisible. Now it’s zero."
    ],
    applyLabel: "Open the dashboard",
    stageNote: "Nothing falls through quietly. Every stalled job has an owner and a timer."
  }
];

export interface MirrorStatement {
  text: string;
}

export const MIRROR_STATEMENTS: readonly MirrorStatement[] = [
  { text: "Requests reach us through more than two channels." },
  { text: "Finding the status of a job means asking a person." },
  { text: "The same information gets typed more than once." },
  { text: "A customer has been forgotten in the last month." },
  { text: "When one person is out, the work stalls." }
];

export const MIRROR_READOUTS = [
  {
    min: 0,
    max: 1,
    headline: "You’re running tight.",
    body: "Most businesses at this score already have a system, formal or not. This is the story to stay ahead of."
  },
  {
    min: 2,
    max: 3,
    headline: "You’re where Meridian was in week 0.",
    body: "The informal system still works, but it costs hours every day and the cracks are showing. This is the cheapest moment to fix it."
  },
  {
    min: 4,
    max: 5,
    headline: "You’re living the old Tuesday.",
    body: "None of what you saw needs new people. It takes one decision per week for about a quarter — the same sequence you just built."
  }
] as const;

export const COMPANY = {
  name: "Meridian Facility Services",
  size: "18 people",
  volume: "~45 jobs a week"
} as const;

export const CREW = ["Dee", "Marco", "Priya"] as const;
