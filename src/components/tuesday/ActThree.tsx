import { useEffect, useRef, useState } from "react";
import type { Locale } from "../../i18n";
import { getTuesdayCopy } from "../../lib/tuesday-sim/copy";
import {
  INTERVENTION_ORDER,
  compareDays,
  configFor,
  formatClock,
  type DayMetrics,
  type InterventionId,
} from "../../lib/tuesday-sim/engine";
import { TUESDAY_RESULTS, TUESDAY_SEED } from "../../lib/tuesday-sim/story";
import { trackTuesdayEvent } from "./analytics";
import { useLiveSession, type LiveFrame } from "./useLiveSession";

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
export function ActThree({ compact = false, locale }: { compact?: boolean; locale: Locale }) {
  const copy = getTuesdayCopy(locale);
  const { actThree } = copy;
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
          trackTuesdayEvent("interactive_case_study_comparison_reached");
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [compact]);

  const oldRun = useLiveSession(
    configFor(NONE),
    TUESDAY_SEED,
    DUEL_SCALE,
    started && !compact,
    true,
  );
  const newRun = useLiveSession(
    configFor(ALL),
    TUESDAY_SEED,
    DUEL_SCALE,
    started && !compact,
    false,
  );
  const bothOver = Boolean(oldRun.frame?.over && newRun.frame?.over);

  if (compact) {
    const before = TUESDAY_RESULTS.before;
    const after = TUESDAY_RESULTS.after;
    const diff = compareDays(before, after);
    return (
      <section className="t3">
        <header className="t3-header">
          <p className="t3-kicker">{actThree.kicker}</p>
          <h3 className="t3-title">{actThree.title}</h3>
          <p className="t3-deck">{copy.sameRequests(before.arrivals)}</p>
        </header>

        <div className="t3-stress__result">
          <div className="t3-stress__col">
            <span className="t3-stress__label">{copy.old}</span>
            <strong>{copy.count(before.completed, before.arrivals)} {actThree.handled}</strong>
            <span>{actThree.counts(before)}</span>
          </div>
          <div className="t3-stress__col">
            <span className="t3-stress__label">{copy.new}</span>
            <strong>{copy.count(after.completed, after.arrivals)} {actThree.handled}</strong>
            <span>{actThree.counts(after)}</span>
          </div>
        </div>

        <div className="t3-verdict" role="status">
          <p>{actThree.savings(diff.hoursReclaimed)}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="t3" ref={sectionRef}>
      <header className="t3-header">
        <p className="t3-kicker">{actThree.kicker}</p>
        <h3 className="t3-title">{actThree.title}</h3>
        <p className="t3-deck">{actThree.demand}</p>
      </header>

      <div className="t3-duel">
        <div className="t3-duel__side">
          <DuelPanel tone="old" frame={oldRun.frame} locale={locale} />
          <p className="t3-panel-caption">{actThree.oldCaption}</p>
        </div>
        <div className="t3-duel__side">
          <DuelPanel tone="new" frame={newRun.frame} locale={locale} />
          <p className="t3-panel-caption">{actThree.newCaption}</p>
        </div>
      </div>

      <div className="t3-legend" aria-hidden="true">
        <span>
          <span className="t3-dot t3-dot--done" /> {actThree.handled}
        </span>
        <span>
          <span className="t3-dot t3-dot--open" /> {actThree.waiting}
        </span>
        <span>
          <span className="t3-dot t3-dot--dropped" /> {actThree.forgotten}
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
            {actThree.skip}
          </button>
        )}
        {bothOver && oldRun.frame && newRun.frame && (
          <Verdict before={oldRun.frame.metrics} after={newRun.frame.metrics} locale={locale} />
        )}
      </div>
    </section>
  );
}

function DuelPanel({
  tone,
  frame,
  locale,
}: {
  tone: "old" | "new";
  frame: LiveFrame | null;
  locale: Locale;
}) {
  const copy = getTuesdayCopy(locale);
  const { actOne, actThree } = copy;
  const metrics = frame?.metrics;
  const backlog = Math.max(
    0,
    (metrics?.arrivals ?? 0) - (metrics?.completed ?? 0) - (metrics?.dropped ?? 0),
  );
  return (
    <div className={`t3-panel t3-panel--${tone}`}>
      <div className="t3-panel__head">
        <span className="t3-panel__label">{copy[tone]}</span>
        <span className="t3-panel__clock">{formatClock(frame?.time ?? 0, locale)}</span>
      </div>
      <div className="t3-dots" aria-hidden="true">
        {(frame?.jobs ?? []).map((job) => (
          <span
            key={job.id}
            className={`t3-dot t3-dot--${job.status}`}
            title={`${job.customer} · ${actOne.kinds[job.kind]}`}
          />
        ))}
      </div>
      <div className="t3-panel__stats">
        <span>
          <strong>{metrics?.completed ?? 0}</strong> {actThree.handled}
        </span>
        <span>
          <strong>{metrics?.dropped ?? 0}</strong> {actThree.forgotten}
        </span>
        <span>
          <strong>{backlog}</strong> {actThree.backlog}
        </span>
        <span>
          <strong>{metrics?.complaints ?? 0}</strong> {actThree.angry}
        </span>
      </div>
    </div>
  );
}

function Verdict({ before, after, locale }: { before: DayMetrics; after: DayMetrics; locale: Locale }) {
  const { actThree } = getTuesdayCopy(locale);
  const diff = compareDays(before, after);
  return (
    <div className="t3-verdict" role="status">
      <p><strong>{actThree.verdict}</strong> {actThree.verdictDetail(before, after, diff.hoursReclaimed)}</p>
    </div>
  );
}
