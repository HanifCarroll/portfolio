import { useEffect, useState } from "react";
import { formatClock, type DayMetrics } from "../../lib/tuesday-sim/engine";
import { COMPANY } from "./content";

/** Fixed chrome for the experience: where you are, and the exit to prose. */
export function Hud({ act, onRead }: { act: string; onRead: () => void }) {
  return (
    <div className="t-hud">
      <span className="t-hud__brand">One Tuesday, twice</span>
      <span className="t-hud__act" aria-live="polite">
        {act}
      </span>
      <span className="t-hud__actions">
        <button type="button" className="t-hud__read" onClick={onRead}>
          Read the story
        </button>
      </span>
    </div>
  );
}

/** The opening screen. */
export function Intro({ onStart, onRead }: { onStart: () => void; onRead: () => void }) {
  return (
    <section className="t-intro">
      <p className="t-intro__kicker">Interactive workflow diagnostic</p>
      <h1 className="t-intro__title">One Tuesday, twice.</h1>
      <p className="t-intro__deck">
        {COMPANY.name} is a fictional composite: {COMPANY.size}, {COMPANY.weeklyWork},{" "}
        {COMPANY.requestContext}.
      </p>
      <p className="t-intro__deck">
        You’ll run one of its Tuesdays twice — first with requests scattered across five inboxes and
        one person’s memory, then with a system you’ll build yourself, one change at a time.
      </p>
      <div className="t-intro__actions">
        <button type="button" className="hc-button" onClick={onStart}>
          Clock in
        </button>
      </div>
      <button type="button" className="t-intro__read" onClick={onRead}>
        Prefer prose? Read the story instead
      </button>
    </section>
  );
}

/** The collapse card between Act 1 and Act 2: the day's honest tally. */
export function Interstitial({
  metrics,
  onContinue,
}: {
  metrics: DayMetrics;
  onContinue: () => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`t-interstitial ${visible ? "is-visible" : ""}`}
      role="dialog"
      aria-label="End of the day"
    >
      <p className="t-interstitial__clock">{formatClock(metrics ? 565 : 0)}</p>
      <p className="t-interstitial__line">
        You handled <strong>{metrics.completed}</strong> of <strong>{metrics.arrivals}</strong>{" "}
        requests.
      </p>
      <p className="t-interstitial__line">
        <strong>{metrics.dropped}</strong> were forgotten. <strong>{metrics.complaints}</strong>{" "}
        customers called angry. <strong>{metrics.carried}</strong> roll into tomorrow.
      </p>
      <p className="t-interstitial__punch">That was your run through the old workflow.</p>
      <p className="t-interstitial__line">
        Next, build the modeled system. The final comparison gives both versions the same demand and
        a tireless operator so the workflow is the only difference.
      </p>
      <button type="button" className="hc-button" onClick={onContinue}>
        See what changed
      </button>
    </div>
  );
}
