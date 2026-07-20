import { useEffect, useRef, useState } from "react";
import {
  INTERVENTION_ORDER,
  compareDays,
  configFor,
  formatClock,
  runDay,
  type DayMetrics,
  type InterventionId,
} from "../../lib/tuesday-sim/engine";
import { useLiveSession, type LiveFrame } from "./useLiveSession";

const SEED = 42;
const ALL = new Set<InterventionId>(INTERVENTION_ORDER);
const NONE = new Set<InterventionId>();
/** The duel runs briskly: the whole day in about 40 seconds. */
const DUEL_SCALE = 14;

/**
 * Act 3 — The New Tuesday. The same seed replays the same demand twice: once
 * through the old system (with an always-on operator — a fair fight), once
 * through the built one. Desktop watches both panels run side by side; small
 * screens get the numbers up front. The stress lab bends the model either way.
 */
export function ActThree({ compact = false }: { compact?: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (compact) return;
    const root = sectionRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [compact]);

  const oldRun = useLiveSession(configFor(NONE), SEED, DUEL_SCALE, started && !compact, true);
  const newRun = useLiveSession(configFor(ALL), SEED, DUEL_SCALE, started && !compact, false);
  const bothOver = Boolean(oldRun.frame?.over && newRun.frame?.over);

  if (compact) {
    const before = runDay(configFor(NONE), SEED);
    const after = runDay(configFor(ALL), SEED);
    const diff = compareDays(before, after);
    return (
      <section className="t3">
        <header className="t3-header">
          <p className="t3-kicker">Same Tuesday, twice</p>
          <h3 className="t3-title">What the same day looks like with the system in place</h3>
          <p className="t3-deck">
            The same 56 requests — through the old workflow, and through the system you just built.
          </p>
        </header>

        <div className="t3-stress__result">
          <div className="t3-stress__col">
            <span className="t3-stress__label">Old Tuesday</span>
            <strong>
              {before.completed} of {before.arrivals} handled
            </strong>
            <span>
              {before.dropped} forgotten · {before.carried} carried · {before.complaints} angry calls
            </span>
          </div>
          <div className="t3-stress__col">
            <span className="t3-stress__label">New Tuesday</span>
            <strong>
              {after.completed} of {after.arrivals} handled
            </strong>
            <span>
              {after.dropped} forgotten · {after.carried} carried · {after.complaints} angry calls
            </span>
          </div>
        </div>

        <div className="t3-verdict" role="status">
          <p>
            The system returns {diff.hoursReclaimed.toFixed(1)} hours a day that used to go to
            coordination.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="t3" ref={sectionRef}>
      <header className="t3-header">
        <p className="t3-kicker">Same Tuesday, twice</p>
        <h3 className="t3-title">What the same day looks like with the system in place</h3>
      </header>

      <div className="t3-duel">
        <div className="t3-duel__side">
          <DuelPanel tone="old" label="Old Tuesday" frame={oldRun.frame} />
          <p className="t3-panel-caption">The old workflow with a tireless operator.</p>
        </div>
        <div className="t3-duel__side">
          <DuelPanel tone="new" label="New Tuesday" frame={newRun.frame} />
          <p className="t3-panel-caption">The system you just built.</p>
        </div>
      </div>

      <div className="t3-legend" aria-hidden="true">
        <span>
          <span className="t3-dot t3-dot--done" /> handled
        </span>
        <span>
          <span className="t3-dot t3-dot--open" /> waiting
        </span>
        <span>
          <span className="t3-dot t3-dot--dropped" /> forgotten
        </span>
      </div>

      <div className="t3-duel__actions">
        {!bothOver && started && (
          <button
            type="button"
            className="t3-skip"
            onClick={() => {
              oldRun.finishNow();
              newRun.finishNow();
            }}
          >
            Skip to results
          </button>
        )}
        {bothOver && oldRun.frame && newRun.frame && (
          <Verdict before={oldRun.frame.metrics} after={newRun.frame.metrics} />
        )}
      </div>
    </section>
  );
}

function DuelPanel({ tone, label, frame }: { tone: "old" | "new"; label: string; frame: LiveFrame | null }) {
  const metrics = frame?.metrics;
  const backlog = Math.max(0, (metrics?.arrivals ?? 0) - (metrics?.completed ?? 0) - (metrics?.dropped ?? 0));
  return (
    <div className={`t3-panel t3-panel--${tone}`}>
      <div className="t3-panel__head">
        <span className="t3-panel__label">{label}</span>
        <span className="t3-panel__clock">{formatClock(frame?.time ?? 0)}</span>
      </div>
      <div className="t3-dots" aria-hidden="true">
        {(frame?.jobs ?? []).map((job) => (
          <span key={job.id} className={`t3-dot t3-dot--${job.status}`} title={`${job.customer} · ${job.kind}`} />
        ))}
      </div>
      <div className="t3-panel__stats">
        <span>
          <strong>{metrics?.completed ?? 0}</strong> handled
        </span>
        <span>
          <strong>{metrics?.dropped ?? 0}</strong> forgotten
        </span>
        <span>
          <strong>{backlog}</strong> backlog
        </span>
        <span>
          <strong>{metrics?.complaints ?? 0}</strong> angry
        </span>
      </div>
    </div>
  );
}

function Verdict({ before, after }: { before: DayMetrics; after: DayMetrics }) {
  const diff = compareDays(before, after);
  return (
    <div className="t3-verdict" role="status">
      <p>
        <strong>Same day, both ways:</strong> the old workflow handles {before.completed} of{" "}
        {before.arrivals}, forgets {before.dropped}, and carries {before.carried} into tomorrow. The
        system handles {after.completed} of {after.arrivals}, forgets {after.dropped}, and returns{" "}
        {diff.hoursReclaimed.toFixed(1)} hours a day that used to go to coordination.
      </p>
    </div>
  );
}
