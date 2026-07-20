/**
 * Tuesday simulation engine — the model underneath the whole case study.
 *
 * Pure TypeScript, no I/O, seeded RNG: a run with the same seed produces the
 * same day on every machine. Two ways to drive it:
 *
 *   - `runDay(config, seed)` fast-forwards a full workday synchronously and
 *     returns aggregate metrics (used for replays, stress tests, and the
 *     numbers shown in the UI).
 *   - `createSession(...)` exposes the same model one tick at a time so the
 *     React layer can play a day in real time and let the reader handle jobs
 *     by hand (Act 1) or watch the system handle them (Act 3).
 *
 * The company is fictional; the model is real. Every parameter below is
 * documented in `ASSUMPTIONS`, which the UI surfaces in the inspect drawer.
 */
import { createRng, pick } from "./rng";

export type InterventionId = "intake" | "record" | "dispatch" | "updates" | "triage" | "dashboard";

export const INTERVENTION_ORDER: readonly InterventionId[] = [
  "intake",
  "record",
  "dispatch",
  "updates",
  "triage",
  "dashboard",
];

export type Channel = "inbox" | "phone" | "text" | "walkin" | "sticky" | "frontdoor";
export type JobKind = "quote" | "booking" | "change" | "issue";
export type JobStatus = "open" | "handling" | "done" | "dropped";

export interface Job {
  id: number;
  channel: Channel;
  kind: JobKind;
  customer: string;
  arrivedAt: number;
  status: JobStatus;
  completedAt: number | null;
  /** Sim-minute at which a manually-handled job finishes. */
  handlingDoneAt: number | null;
  isDuplicate: boolean;
  misrouted: boolean;
}

export type SimEvent =
  | { type: "arrival"; job: Job }
  | { type: "duplicate"; job: Job }
  | { type: "dropped"; job: Job }
  | { type: "complaint"; job: Job; reason: "dropped" | "late" | "misrouted" }
  | { type: "completed"; job: Job; by: "operator" | "system" }
  | { type: "day-end" };

export interface StressConfig {
  /** Multiplies the arrival rate (1 = normal load, 2 = double volume). */
  loadMultiplier: number;
  /** A dispatcher is out: everything manual takes longer. */
  staffOutage: boolean;
  /** One tool's API is down: automations and AI triage are offline. */
  apiDown: boolean;
}

export const NO_STRESS: StressConfig = { loadMultiplier: 1, staffOutage: false, apiDown: false };

export interface SimConfig {
  /** Mean arrivals per hour before rush windows. */
  arrivalPerHour: number;
  /** Intake channels a request can land in. */
  channels: readonly Channel[];
  /** Minutes of focused human effort to fully process one job. */
  handleMinutes: number;
  /** Chance a handled job still goes wrong and bounces back as a complaint. */
  misrouteRate: number;
  /** Chance an arrival is a duplicate of an existing open job. */
  duplicateRate: number;
  /** A job left open longer than this is forgotten entirely. */
  dropAfterMinutes: number;
  /** Chance a dropped or badly-late job produces an angry customer. */
  complaintRate: number;
  /** When true, the system routes and completes jobs without human effort. */
  autoResolve: boolean;
  /** Minutes after arrival when an auto-resolved job completes. */
  autoMinutes: number;
  /**
   * Jobs the crew can action in a day even with perfect coordination. The
   * software removes the coordination bottleneck, not the physical one:
   * past this, work queues visibly instead of vanishing for free.
   */
  autoDailyCapacity: number;
}

export interface DayMetrics {
  arrivals: number;
  completed: number;
  dropped: number;
  duplicates: number;
  complaints: number;
  backlogPeak: number;
  /** Requests still open when the day ends — tomorrow's pile. */
  carried: number;
  /** Mean minutes from arrival to completion (completed jobs only). */
  avgWaitMinutes: number;
  /** Total minutes of focused human effort the day consumed. */
  manualMinutes: number;
}

export const DAY_START_MINUTE = 8 * 60 + 47; // 8:47 AM
export const DAY_LENGTH_MINUTES = 565; // ends 6:12 PM

const CUSTOMERS = [
  "Alvarez Dental",
  "Brightline Gym",
  "Cortez Bakery",
  "Dr. Osei’s office",
  "Fairview School",
  "Goldman Law",
  "Harbor Vet Clinic",
  "Ironworks CrossFit",
  "Juniper Café",
  "Kline Realty",
  "Lakeside Dental",
  "Mira Salon",
  "Northgate Church",
  "Orchid Spa",
  "Peak Physical Therapy",
  "Quincy Books",
  "Riverwalk Hotel",
  "Sol Yoga",
  "Twine Florist",
  "Uptown Barbershop",
] as const;

const JOB_KINDS: readonly JobKind[] = ["quote", "booking", "change", "issue"];
const LEGACY_CHANNELS: readonly Channel[] = ["inbox", "phone", "text", "walkin", "sticky"];

/**
 * The configuration is the story: each intervention changes the numbers the
 * day runs on. `stress` then bends those numbers the way a bad week would.
 */
export function configFor(
  interventions: ReadonlySet<InterventionId>,
  stress: StressConfig = NO_STRESS,
): SimConfig {
  const has = (id: InterventionId) => interventions.has(id);
  const automationsLive = !stress.apiDown;

  const config: SimConfig = {
    arrivalPerHour: 5,
    channels: has("intake") ? ["frontdoor"] : LEGACY_CHANNELS,
    handleMinutes: 18,
    misrouteRate: 0.18,
    duplicateRate: has("intake") ? 0.02 : 0.12,
    dropAfterMinutes: 240,
    complaintRate: 0.5,
    autoResolve: false,
    autoMinutes: 25,
    autoDailyCapacity: 65,
  };

  if (has("record")) {
    config.misrouteRate = 0.08;
    config.dropAfterMinutes = 480;
  }
  if (has("dispatch") && automationsLive) {
    config.autoResolve = true;
  }
  if (has("updates") && automationsLive) {
    config.complaintRate = 0.08;
  }
  if (has("triage") && automationsLive) {
    config.handleMinutes = 4;
    config.misrouteRate = 0.04;
    config.autoMinutes = 14;
  }
  if (has("dashboard")) {
    config.dropAfterMinutes = 10_000; // nothing falls through quietly anymore
  }
  if (!automationsLive && has("dispatch")) {
    // The tools are down, but the single front door and the record remain:
    // manual work is still faster than the old way.
    config.handleMinutes = Math.min(config.handleMinutes, 12);
  }
  if (stress.staffOutage) {
    config.handleMinutes *= 1.8;
    config.autoMinutes *= 1.5;
    config.autoDailyCapacity = Math.round(config.autoDailyCapacity * 0.7);
  }
  config.arrivalPerHour *= stress.loadMultiplier;
  return config;
}

/** Demand is not flat: the morning rush and the after-lunch rush hit harder. */
function rushMultiplier(simMinuteOfDay: number): number {
  const absolute = DAY_START_MINUTE + simMinuteOfDay;
  const hour = Math.floor(absolute / 60);
  if (hour === 9 || hour === 13) return 1.6;
  if (hour === 17) return 0.7; // the day winds down — for everyone else
  return 1;
}

export interface Session {
  readonly config: SimConfig;
  /** Sim minutes elapsed since 8:47 AM. */
  readonly time: number;
  readonly jobs: readonly Job[];
  readonly events: readonly SimEvent[];
  readonly metrics: DayMetrics;
  readonly over: boolean;
  /** Advance the world one sim-minute. */
  step(): void;
  /**
   * Operator handles a job by hand. Takes `handleMinutes` of focus; the
   * operator can only focus on one job at a time. Returns false if the job
   * is not open or the operator is busy.
   */
  handleJob(jobId: number): boolean;
  /** True while the operator is mid-job. */
  readonly operatorBusyUntil: number;
}

export function createSession(config: SimConfig, seed = 42): Session {
  // Two independent streams: the arrivalRng decides WHO shows up and when,
  // the worldRng decides what goes wrong. Arrivals therefore stay identical
  // across configs for a seed — the same Tuesday, however you run it.
  const arrivalRng = createRng(seed);
  const worldRng = createRng(seed * 2654435761 + 1);
  const jobs: Job[] = [];
  let events: SimEvent[] = [];
  let time = 0;
  let nextJobId = 1;
  let operatorBusyUntil = 0;
  let dropped = 0;
  let duplicates = 0;
  let complaints = 0;
  let completed = 0;
  let backlogPeak = 0;
  let waitSum = 0;
  let manualMinutes = 0;
  let arrivalCount = 0;
  let autoCompletedToday = 0;
  let over = false;

  const completeJob = (job: Job, by: "operator" | "system") => {
    job.status = "done";
    job.completedAt = time;
    completed += 1;
    waitSum += time - job.arrivedAt;
    events.push({ type: "completed", job, by });
    const wait = time - job.arrivedAt;
    if (job.misrouted) {
      if (worldRng() < 0.65) {
        complaints += 1;
        events.push({ type: "complaint", job, reason: "misrouted" });
      }
    } else if (wait > 120 && worldRng() < config.complaintRate * 0.5) {
      complaints += 1;
      events.push({ type: "complaint", job, reason: "late" });
    }
  };

  const session: Session = {
    config,
    get time() {
      return time;
    },
    get jobs() {
      return jobs;
    },
    get events() {
      return events;
    },
    get over() {
      return over;
    },
    get operatorBusyUntil() {
      return operatorBusyUntil;
    },
    get metrics() {
      return {
        arrivals: arrivalCount,
        completed,
        dropped,
        duplicates,
        complaints,
        backlogPeak,
        carried: jobs.filter((j) => j.status === "open" || j.status === "handling").length,
        avgWaitMinutes: completed > 0 ? waitSum / completed : 0,
        manualMinutes,
      };
    },

    step() {
      if (over) return;
      events = [];

      // Arrivals: per-minute Bernoulli with rush windows; occasionally two
      // land in the same minute when the phones are hot. All arrival draws
      // come from the dedicated stream so demand is seed-stable.
      const p = (config.arrivalPerHour / 60) * rushMultiplier(time);
      const arrivalsNow = arrivalRng() < p ? (arrivalRng() < p * 0.35 ? 2 : 1) : 0;
      for (let i = 0; i < arrivalsNow; i += 1) {
        const openJobs = jobs.filter((j) => j.status === "open");
        // Always consume the draw, flag only when a duplicate is possible:
        // keeps the arrival stream byte-identical across configs.
        const dupRoll = arrivalRng();
        const isDuplicate = openJobs.length > 0 && dupRoll < config.duplicateRate;
        const job: Job = {
          id: nextJobId,
          channel: pick(arrivalRng, config.channels),
          kind: pick(arrivalRng, JOB_KINDS),
          customer: pick(arrivalRng, CUSTOMERS),
          arrivedAt: time,
          status: "open",
          completedAt: null,
          handlingDoneAt: null,
          isDuplicate,
          misrouted: false,
        };
        nextJobId += 1;
        arrivalCount += 1;
        jobs.push(job);
        events.push({ type: "arrival", job });
        if (isDuplicate) {
          duplicates += 1;
          events.push({ type: "duplicate", job });
        }
      }

      // Auto-resolution: the system finishes jobs on schedule, no human
      // time — up to the crew's real daily capacity. Past the cap, work
      // queues visibly instead of vanishing for free.
      if (config.autoResolve && autoCompletedToday < config.autoDailyCapacity) {
        for (const job of jobs) {
          if (autoCompletedToday >= config.autoDailyCapacity) break;
          if (job.status === "open" && time - job.arrivedAt >= config.autoMinutes) {
            if (worldRng() < config.misrouteRate) job.misrouted = true;
            autoCompletedToday += 1;
            completeJob(job, "system");
          }
        }
      }

      // Operator focus: a manual job finishes on its own clock, stamped when
      // the operator started it — not on a shared timer the next job resets.
      const handling = jobs.find((j) => j.status === "handling");
      if (handling && handling.handlingDoneAt !== null && time >= handling.handlingDoneAt) {
        if (worldRng() < config.misrouteRate) handling.misrouted = true;
        completeJob(handling, "operator");
      }

      // Jobs nobody reached in time fall through the cracks.
      for (const job of jobs) {
        if (job.status === "open" && time - job.arrivedAt >= config.dropAfterMinutes) {
          job.status = "dropped";
          dropped += 1;
          events.push({ type: "dropped", job });
          if (worldRng() < config.complaintRate) {
            complaints += 1;
            events.push({ type: "complaint", job, reason: "dropped" });
          }
        }
      }

      const backlog = jobs.filter((j) => j.status === "open" || j.status === "handling").length;
      backlogPeak = Math.max(backlogPeak, backlog);

      time += 1;
      if (time >= DAY_LENGTH_MINUTES) {
        over = true;
        events.push({ type: "day-end" });
        // Anything still open at 6:12 PM is tomorrow's problem — count it as
        // backlog carried, not dropped, so the number stays honest.
      }
    },

    handleJob(jobId: number): boolean {
      const job = jobs.find((j) => j.id === jobId);
      if (!job || job.status !== "open" || time < operatorBusyUntil) return false;
      job.status = "handling";
      job.handlingDoneAt = time + config.handleMinutes;
      operatorBusyUntil = job.handlingDoneAt;
      manualMinutes += config.handleMinutes;
      return true;
    },
  };

  return session;
}

/** Fast-forward one full workday and return its metrics. Deterministic per seed. */
export function runDay(config: SimConfig, seed = 42): DayMetrics {
  const session = createSession(config, seed);
  // In a batch run there is no live operator: manual work is done by an
  // always-on operator who starts the oldest open job whenever free.
  while (!session.over) {
    session.step();
    if (!session.config.autoResolve && session.time >= session.operatorBusyUntil) {
      const oldest = session.jobs.find((j) => j.status === "open");
      if (oldest) session.handleJob(oldest.id);
    }
  }
  return session.metrics;
}

/** The comparison the whole piece builds toward. */
export function compareDays(before: DayMetrics, after: DayMetrics) {
  return {
    hoursReclaimed: Math.max(0, before.manualMinutes - after.manualMinutes) / 60,
    droppedDelta: before.dropped - after.dropped,
    waitDeltaMinutes: before.avgWaitMinutes - after.avgWaitMinutes,
    complaintDelta: before.complaints - after.complaints,
  };
}

export interface Assumption {
  parameter: string;
  value: string;
  basis: string;
}

/** Plain-language model documentation, surfaced in the UI's inspect drawer. */
export const ASSUMPTIONS: readonly Assumption[] = [
  {
    parameter: "Demand",
    value: "~5 requests/hour, ~47/day",
    basis:
      "Composite of service businesses at 15–25 staff: calls, texts, emails, and walk-ins across a 9.5-hour day.",
  },
  {
    parameter: "Rush windows",
    value: "×1.6 at 9 AM and 1 PM",
    basis: "Request volume clusters after open and after lunch; evenings taper to ×0.7.",
  },
  {
    parameter: "Manual handling",
    value: "18 min/request",
    basis:
      "Read the message, find the spreadsheet, re-key the details, message the right person, confirm back.",
  },
  {
    parameter: "Misroute rate",
    value: "18% before, 4% after",
    basis:
      "Wrong person, stale spreadsheet row, or a detail lost in re-keying. Drops when the record is typed and single.",
  },
  {
    parameter: "Duplicate requests",
    value: "12% before, 2% after",
    basis:
      "The same request arrives by text and email and phone because nobody confirms receipt. A form with a confirmation kills most duplicates.",
  },
  {
    parameter: "Forgotten after",
    value: "4 hours untouched",
    basis:
      "An untracked request older than half a day is effectively lost: buried thread, fallen sticky note.",
  },
  {
    parameter: "Auto-dispatch",
    value: "jobs route in ~25 min, 14 with triage",
    basis:
      "Assignment rules match zone and skill; AI triage extracts fields so routing starts from clean data.",
  },
  {
    parameter: "Crew capacity",
    value: "~65 requests/day",
    basis:
      "The software removes the coordination bottleneck, not the physical one. Past this, work queues visibly instead of vanishing for free.",
  },
  {
    parameter: "The company",
    value: "Meridian Facility Services, 18 people",
    basis:
      "Meridian is a fictional company built from real engagements, not a real client. The names are invented.",
  },
];

/** Formats a sim-minute offset as a clock time, e.g. 8:47 AM. */
export function formatClock(simMinute: number): string {
  const absolute = DAY_START_MINUTE + simMinute;
  const hour24 = Math.floor(absolute / 60) % 24;
  const minute = absolute % 60;
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const suffix = hour24 < 12 ? "AM" : "PM";
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}
