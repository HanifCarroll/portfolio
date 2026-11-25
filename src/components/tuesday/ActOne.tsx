import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { Locale } from "../../i18n";
import { getTuesdayCopy } from "../../lib/tuesday-sim/copy";
import { configFor, formatClock, type DayMetrics, type Job } from "../../lib/tuesday-sim/engine";
import { TUESDAY_SEED } from "../../lib/tuesday-sim/story";
import { useLiveSession } from "./useLiveSession";

/** Desktop: the 565-minute day runs about a minute. Compact: about half that. */
const TIME_SCALE = 9;
const TIME_SCALE_COMPACT = 18;

interface ActOneProps {
  locale: Locale;
  active: boolean;
  onDayEnd: (metrics: DayMetrics) => void;
  onSkip: () => void;
  /** Small screens: the day plays itself with a tireless operator — watch, don't tap. */
  compact?: boolean;
}

/**
 * Act 1 — The Old Tuesday. Desktop: the reader is the ops manager, clearing
 * requests one at a time. Compact: the always-on operator works the same day
 * and still falls behind. Either way, the day is unwinnable.
 */
export function ActOne({ locale, active, onDayEnd, onSkip, compact = false }: ActOneProps) {
  const { actOne } = getTuesdayCopy(locale);
  const config = useMemo(() => configFor(new Set()), []);
  const { frame, handle, finishNow } = useLiveSession(
    config,
    TUESDAY_SEED,
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
  const channels = Object.entries(actOne.channels);
  const metrics = frame?.metrics;

  return (
    <div className="t1-stage" aria-label={actOne.stage}>
      <div className="t1-hud">
        <div className="t1-hud__clock" aria-label={actOne.time}>
          {formatClock(frame?.time ?? 0, locale)}
        </div>
        <div className="t1-hud__stats">
          <span>{actOne.handled} {metrics?.completed ?? 0}</span>
          <span className="t1-hud__bad">{actOne.forgotten} {metrics?.dropped ?? 0}</span>
          <span className="t1-hud__bad">{actOne.angry} {metrics?.complaints ?? 0}</span>
          <span>{actOne.backlog} {backlog}</span>
        </div>
        {!compact && (
          <div className={`t1-hud__lock ${operatorBusy ? "is-busy" : ""}`}>
            {operatorBusy ? actOne.busy : actOne.free}
          </div>
        )}
        <button
          type="button"
          className="t1-hud__skip"
          onClick={() => {
            onSkip();
            finishNow();
          }}
        >
          {actOne.skip}
        </button>
      </div>

      {!started && (
        <div className="t1-brief" role="note">
          <p>
            {actOne.demand}{" "}
            <strong>{compact ? actOne.compactAction : actOne.action}</strong>{" "}
            {compact ? actOne.compactNote : actOne.note}
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
                    locale={locale}
                    time={frame?.time ?? 0}
                    ghost={ghosts.get(job.id)}
                    onClick={() => handleJobClick(job)}
                  />
                ))}
                {extra > 0 && <div className="t1-more">{actOne.extra(extra)}</div>}
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
  locale,
  time,
  ghost,
  onClick,
}: {
  job: Job;
  locale: Locale;
  time: number;
  ghost?: "dropped" | "complaint";
  onClick: () => void;
}) {
  const { actOne } = getTuesdayCopy(locale);
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
        <span className={`t1-chip t1-chip--${job.kind}`}>{actOne.kinds[job.kind]}</span>
        {job.isDuplicate && <span className="t1-chip t1-chip--dup">{actOne.duplicate}</span>}
        {ghost === "complaint" && <span className="t1-chip t1-chip--angry">{actOne.complaint}</span>}
      </span>
      {handling && (
        <span className="t1-card__progress" style={{ "--progress": progress } as CSSProperties}>
          {actOne.actions[job.kind]}…
        </span>
      )}
    </button>
  );
}
