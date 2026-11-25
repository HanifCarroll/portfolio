import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { Locale } from "../../i18n";
import { getTuesdayCopy } from "../../lib/tuesday-sim/copy";
import { configFor, runDay, type DayMetrics, type InterventionId } from "../../lib/tuesday-sim/engine";
import { getTuesdayStory, TUESDAY_CREW, TUESDAY_RESULTS, TUESDAY_SEED } from "../../lib/tuesday-sim/story";

/**
 * Act 2 — The Build. A scrollytelling track: each chapter scrolls in, applies
 * one intervention, and the system map on the right physically reorganizes —
 * channels collapse into a front door, loose cards crystallize into the
 * record, edges light up. The metrics strip recomputes from the model.
 */
export function ActTwo({ compact = false, locale }: { compact?: boolean; locale: Locale }) {
  const { actTwo } = getTuesdayCopy(locale);
  const { chapters } = getTuesdayStory(locale);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [applied, setApplied] = useState<ReadonlySet<InterventionId>>(new Set());
  const [justApplied, setJustApplied] = useState<InterventionId | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // A sentinel band per chapter: the centered band is the active chapter.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const sentinels = Array.from(root.querySelectorAll<HTMLElement>("[data-sentinel]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.sentinel));
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    sentinels.forEach((sentinel) => observer.observe(sentinel));
    return () => observer.disconnect();
  }, []);

  // The applied set mirrors scroll position in both directions: scrolling
  // down builds the system, scrolling back up unbuilds it. CSS transitions
  // run the reversal.
  useEffect(() => {
    const next = new Set<InterventionId>(chapters.slice(0, activeIndex + 1).map((c) => c.id));
    setApplied((previous) => {
      const unchanged = next.size === previous.size && [...next].every((id) => previous.has(id));
      if (unchanged) return previous;
      if (activeIndex >= 0) setJustApplied(chapters[activeIndex].id);
      return next;
    });
  }, [activeIndex, chapters]);

  useEffect(() => {
    if (!justApplied) return;
    const timeout = window.setTimeout(() => setJustApplied(null), 2400);
    return () => window.clearTimeout(timeout);
  }, [justApplied]);

  const current = useMemo(() => runDay(configFor(applied), TUESDAY_SEED), [applied]);
  const chapter = activeIndex >= 0 ? chapters[activeIndex] : null;

  const appliedClasses = chapters.map((c) => (applied.has(c.id) ? `sm-on--${c.id}` : "")).join(" ");

  // Small screens skip the pinned scroll track entirely: the chapters read
  // as a normal page, with the final numbers at the end.
  if (compact) {
    return (
      <section className="t2 t2--static">
        <div className="t2-card t2-card--intro">
          <p className="t2-card__week">{actTwo.weeks}</p>
          <h3 className="t2-card__title">{actTwo.title}</h3>
          <p className="t2-card__body">{actTwo.compactIntro}</p>
        </div>
        {chapters.map((chapter) => (
          <div className="t2-card" key={chapter.id}>
            <p className="t2-card__week">{chapter.week}</p>
            <h3 className="t2-card__title">{chapter.title}</h3>
            {(chapter.bodyCompact ?? chapter.body).map((paragraph) => (
              <p key={paragraph} className="t2-card__body">
                {paragraph}
              </p>
            ))}
            <p className="t2-card__note is-visible">{chapter.stageNote}</p>
          </div>
        ))}
        <Metrics after={TUESDAY_RESULTS.after} locale={locale} />
      </section>
    );
  }

  return (
    <section
      className="t2"
      ref={sectionRef}
      style={{ "--chapter-count": chapters.length } as CSSProperties}
    >
      <div className="t2-sticky">
        <div className="t2-layout">
          <div className="t2-copy">
            {chapter ? (
              <div className="t2-card" key={chapter.id}>
                <p className="t2-card__week">{chapter.week}</p>
                <h3 className="t2-card__title">{chapter.title}</h3>
                {chapter.body.map(
                  (paragraph) => (
                    <p key={paragraph} className="t2-card__body">
                      {paragraph}
                    </p>
                  ),
                )}
                <p className={`t2-card__note ${applied.has(chapter.id) ? "is-visible" : ""}`}>
                  {chapter.stageNote}
                </p>
              </div>
            ) : (
              <div className="t2-card t2-card--intro">
                <p className="t2-card__week">{actTwo.weeks}</p>
                <h3 className="t2-card__title">{actTwo.title}</h3>
                <p className="t2-card__body">{actTwo.intro}</p>
              </div>
            )}
            <div className="t2-progress" aria-hidden="true">
              {chapters.map((c, i) => (
                <span
                  key={c.id}
                  className={`t2-dot ${applied.has(c.id) ? "is-done" : ""} ${i === activeIndex ? "is-current" : ""}`}
                />
              ))}
            </div>
          </div>

          <div
            className={`t2-map ${appliedClasses} ${justApplied ? `sm-just--${justApplied}` : ""}`}
            aria-hidden="true"
          >
            <SystemMap locale={locale} />
          </div>

          <Metrics after={current} locale={locale} />
        </div>
      </div>

      {chapters.map((c, i) => (
        <div key={c.id} className="t2-sentinel" data-sentinel={i} aria-hidden="true" />
      ))}
    </section>
  );
}

function Metrics({ after, locale }: { after: DayMetrics; locale: Locale }) {
  const { actTwo, minutesShort, hoursShort } = getTuesdayCopy(locale);
  const before = TUESDAY_RESULTS.before;
  return (
    <div className="t2-metrics" role="status">
      <Metric label={actTwo.handled} before={before.completed} after={after.completed} />
      <Metric label={actTwo.forgotten} before={before.dropped} after={after.dropped} good="down" />
      <Metric label={actTwo.angry} before={before.complaints} after={after.complaints} good="down" />
      <Metric label={actTwo.average} before={minutesShort(before.avgWaitMinutes)} after={minutesShort(after.avgWaitMinutes)} good="down" />
      <Metric label={actTwo.coordination} before={hoursShort(before.manualMinutes)} after={hoursShort(after.manualMinutes)} good="down" />
    </div>
  );
}

function Metric({
  label,
  before,
  after,
  good = "up",
}: {
  label: string;
  before: number | string;
  after: number | string;
  good?: "up" | "down";
}) {
  const improved = before !== after;
  return (
    <span className={`t2-metric ${improved ? "is-improved" : ""} ${improved ? `is-${good}` : ""}`}>
      <span className="t2-metric__label">{label}</span>
      <span className="t2-metric__values">
        {improved ? (
          <>
            <s>{before}</s> <strong>{after}</strong>
          </>
        ) : (
          <strong>{after}</strong>
        )}
      </span>
    </span>
  );
}

/**
 * The diorama. Every element is positioned absolutely and transformed by CSS
 * classes derived from the applied set — the map itself is the state.
 */
function SystemMap({ locale }: { locale: Locale }) {
  const { actTwo } = getTuesdayCopy(locale);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const customersRef = useRef<HTMLDivElement | null>(null);
  // The customer edge ends where the chip actually is, measured in map
  // coordinates — not at a guessed viewBox position that drifts with aspect.
  const [customerEnd, setCustomerEnd] = useState({ x: 85, y: 87 });
  const looseCards = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        // Deterministic scatter: same layout on every load.
        x: [18, 34, 52, 66, 24, 44, 60, 74][i],
        y: [22, 58, 30, 64, 74, 18, 52, 38][i],
        r: [-7, 5, -4, 8, -9, 3, -5, 6][i],
      })),
    [],
  );

  useEffect(() => {
    const measure = () => {
      const map = mapRef.current;
      const chip = customersRef.current;
      if (!map || !chip) return;
      const mapBox = map.getBoundingClientRect();
      const chipBox = chip.getBoundingClientRect();
      setCustomerEnd({
        x: ((chipBox.left - mapBox.left) / mapBox.width) * 100 - 0.5,
        y: ((chipBox.top + chipBox.height / 2 - mapBox.top) / mapBox.height) * 100,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sm" ref={mapRef}>
      <div className="sm-noise">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className="sm-noise__dot"
            style={
              { left: `${(i * 53 + 17) % 92}%`, top: `${(i * 37 + 11) % 88}%` } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="sm-channels">
        {actTwo.channels.map((label, i) => (
          <span key={label} className={`sm-chip sm-channel sm-channel--${i}`}>
            {label}
          </span>
        ))}
      </div>
      <div className="sm-frontdoor">
        <span className="sm-node__label">{actTwo.intake}</span>
        <span className="sm-node__sub">{actTwo.queue}</span>
      </div>

      <div className="sm-loose">
        {looseCards.map((card) => (
          <span
            key={card.id}
            className={`sm-loose__card sm-loose__card--${card.id}`}
            style={
              { "--x": `${card.x}%`, "--y": `${card.y}%`, "--r": `${card.r}deg` } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="sm-record">
        <span className="sm-node__label">{actTwo.record}</span>
        <span className="sm-record__grid">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} />
          ))}
        </span>
        <span className="sm-node__sub">{actTwo.shared}</span>
      </div>

      <svg className="sm-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="sm-edge sm-edge--crew-0" d="M 76 40 C 82 38, 84 28, 88 26" />
        <path className="sm-edge sm-edge--crew-1" d="M 76 44 C 82 44, 84 48, 88 48" />
        <path className="sm-edge sm-edge--crew-2" d="M 76 48 C 82 50, 84 66, 88 68" />
        <path
          className="sm-edge sm-edge--customer"
          d={`M 59 58 C 64 ${customerEnd.y - 16}, ${customerEnd.x - 16} ${customerEnd.y - 6}, ${customerEnd.x} ${customerEnd.y}`}
        />
      </svg>

      <div className="sm-crew">
        {TUESDAY_CREW.map((name, i) => (
          <span key={name} className={`sm-chip sm-crew__member sm-crew__member--${i}`}>
            {name}
          </span>
        ))}
      </div>
      <div className="sm-customers" ref={customersRef}>
        <span className="sm-node__label">{actTwo.customers}</span>
        <span className="sm-node__sub">{actTwo.updates}</span>
      </div>

      <div className="sm-ai">
        <span className="sm-node__label">{actTwo.triage}</span>
        <span className="sm-ai__card">
          <span className="sm-chip">{actTwo.exampleKind}</span>
          <span className="sm-chip">{actTwo.exampleTime}</span>
        </span>
      </div>

      <div className="sm-dash">
        <span className="sm-node__label">{actTwo.dashboard}</span>
        <span className="sm-dash__bars">
          <span style={{ height: "40%" }} />
          <span style={{ height: "65%" }} />
          <span style={{ height: "55%" }} />
          <span style={{ height: "80%" }} />
          <span style={{ height: "72%" }} />
        </span>
        <span className="sm-dash__zero">{actTwo.dashboardCount}</span>
      </div>
    </div>
  );
}
