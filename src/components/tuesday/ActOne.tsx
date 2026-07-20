import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { configFor, formatClock, type DayMetrics, type Job } from "../../lib/tuesday-sim/engine";
import { useLiveSession } from "./useLiveSession";

const SEED = 42;
/** Desktop: the 565-minute day runs about a minute. Compact: about half that. */
const TIME_SCALE = 9;
const TIME_SCALE_COMPACT = 18;

const CHANNEL_LABELS: Record<string, string> = {
  inbox: "Inbox",
  phone: "Phone",
  text: "Texts",
  walkin: "Walk-ins",
  sticky: "Sticky notes",
};

const ACTION_VERBS: Record<Job["kind"], string> = {
  quote: "Quoting",
  booking: "Booking",
  change: "Re-scheduling",
  issue: "Forwarding",
};

interface ActOneProps {
  active: boolean;
  onDayEnd: (metrics: DayMetrics) => void;
  /** Small screens: the day plays itself with a tireless operator — watch, don't tap. */
  compact?: boolean;
}

/**
 * Act 1 — The Old Tuesday. Desktop: the reader is the ops manager, clearing
 * requests one at a time. Compact: the always-on operator works the same day
 * and still falls behind. Either way, the day is unwinnable.
 */
export function ActOne({ active, onDayEnd, compact = false }: ActOneProps) {
  const config = useMemo(() => configFor(new Set()), []);
  const { frame, handle, finishNow } = useLiveSession(
    config,
    SEED,
    compact ? TIME_SCALE_COMPACT : TIME_SCALE,
    active,
    compact,
  );
  const [ghosts, setGhosts] = useState<Map<number, "dropped" | "complaint">>(new Map());
  const [started, setStarted] = useState(false);
  const endedRef = useRef(false);

  // Turn sim events into transient visual ghosts.
  useEffect(() => {
    if (!frame || frame.events.length === 0) return;
    const additions: Array<[number, "dropped" | "complaint"]> = [];
    for (const event of frame.events) {
      if (event.type === "dropped") additions.push([event.job.id, "dropped"]);
      else if (event.type === "complaint") additions.push([event.job.id, "complaint"]);
    }
    if (additions.length > 0) {
      setGhosts((previous) => {
        const next = new Map(previous);
        for (const [id, kind] of additions) next.set(id, kind);
        return next;
      });
      const ids = additions.map(([id]) => id);
      window.setTimeout(() => {
        setGhosts((previous) => {
          const next = new Map(previous);
          for (const id of ids) next.delete(id);
          return next;
        });
      }, 1600);
    }
  }, [frame]);

  // End of day: let the last frame land, then hand the metrics up.
  useEffect(() => {
    if (frame?.over && !endedRef.current) {
      endedRef.current = true;
      window.setTimeout(() => onDayEnd(frame.metrics), 1400);
    }
  }, [frame, onDayEnd]);

  const handleJobClick = (job: Job) => {
    if (job.status !== "open") return;
    setStarted(true);
    handle(job.id);
  };

  const operatorBusy = frame ? frame.time < frame.operatorBusyUntil : false;
  const backlog = frame
    ? frame.jobs.filter((j) => j.status === "open" || j.status === "handling").length
    : 0;
  const channels = Object.entries(CHANNEL_LABELS);
  const metrics = frame?.metrics;

  return (
    <div className="t1-stage" aria-label="Act 1: run the old Tuesday">
      <div className="t1-hud">
        <div className="t1-hud__clock" aria-label="Time of day">
          {formatClock(frame?.time ?? 0)}
        </div>
        <div className="t1-hud__stats">
          <span>Handled {metrics?.completed ?? 0}</span>
          <span className="t1-hud__bad">Forgotten {metrics?.dropped ?? 0}</span>
          <span className="t1-hud__bad">Angry calls {metrics?.complaints ?? 0}</span>
          <span>Backlog {backlog}</span>
        </div>
        {!compact && (
          <div className={`t1-hud__lock ${operatorBusy ? "is-busy" : ""}`}>
            {operatorBusy ? "You’re tied up…" : "You’re free — take a request"}
          </div>
        )}
        <button type="button" className="t1-hud__skip" onClick={finishNow}>
          Skip the day
        </button>
      </div>

      {!started && (
        <div className="t1-brief" role="note">
          <p>
            {compact ? (
              <>
                Requests come in through five places at once.{" "}
                <strong>Watch the operator fall behind.</strong> The day runs about 30 seconds —
                skip it in the top right.
              </>
            ) : (
              <>
                Requests come in through five places at once.{" "}
                <strong>Click one to deal with it.</strong> You can only handle one at a time. Get
                to 6:12&nbsp;PM — or skip the day in the top right.
              </>
            )}
          </p>
        </div>
      )}

      <div className="t1-channels">
        {channels.map(([id, label]) => {
          const jobs = (frame?.jobs ?? []).filter(
            (j) => j.channel === id && (j.status === "open" || j.status === "handling"),
          );
          const visible = jobs.slice(0, compact ? 3 : 5);
          const extra = jobs.length - visible.length;
          return (
            <div key={id} className="t1-channel">
              <div className="t1-channel__label">{label}</div>
              <div className="t1-channel__stack">
                {visible.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    time={frame?.time ?? 0}
                    ghost={ghosts.get(job.id)}
                    onClick={() => handleJobClick(job)}
                  />
                ))}
                {extra > 0 && <div className="t1-more">+{extra} more</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function JobCard({
  job,
  time,
  ghost,
  onClick,
}: {
  job: Job;
  time: number;
  ghost?: "dropped" | "complaint";
  onClick: () => void;
}) {
  const age = time - job.arrivedAt;
  const urgent = job.status === "open" && age > 180;
  const handling = job.status === "handling";
  const progress =
    handling && job.handlingDoneAt !== null
      ? Math.min(1, Math.max(0, 1 - (job.handlingDoneAt - time) / 18))
      : 0;

  const classes = ["t1-card"];
  if (urgent) classes.push("is-urgent");
  if (handling) classes.push("is-handling");
  if (ghost === "dropped") classes.push("is-dropped");
  if (ghost === "complaint") classes.push("is-complaint");

  return (
    <button type="button" className={classes.join(" ")} onClick={onClick} disabled={handling}>
      <span className="t1-card__customer">{job.customer}</span>
      <span className="t1-card__meta">
        <span className={`t1-chip t1-chip--${job.kind}`}>{job.kind}</span>
        {job.isDuplicate && <span className="t1-chip t1-chip--dup">duplicate?</span>}
        {ghost === "complaint" && <span className="t1-chip t1-chip--angry">angry call</span>}
      </span>
      {handling && (
        <span className="t1-card__progress" style={{ "--progress": progress } as CSSProperties}>
          {ACTION_VERBS[job.kind]}…
        </span>
      )}
    </button>
  );
}
