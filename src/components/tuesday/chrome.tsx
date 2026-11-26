import { useEffect, useState } from "react";
import { getDictionary, localizedPath, type Locale } from "../../i18n";
import { getTuesdayCopy, ONE_TUESDAY_PATH } from "../../lib/tuesday-sim/copy";
import { formatClock, type DayMetrics } from "../../lib/tuesday-sim/engine";
import { buttonClass, headerLinkClass } from "../../lib/ui";

/** Fixed chrome for the experience: where you are, and the exit to prose. */
export function Hud({ act, onRead, locale }: { act: string; onRead: () => void; locale: Locale }) {
  const copy = getTuesdayCopy(locale);
  const otherLocale = locale === "en" ? "es" : "en";
  return (
    <div className="t-hud">
      <span className="t-hud__brand">{copy.title}</span>
      <span className="t-hud__act" aria-live="polite">
        {act}
      </span>
      <span className="t-hud__actions">
        <a className={headerLinkClass} href={localizedPath(ONE_TUESDAY_PATH, otherLocale)} lang={otherLocale} hrefLang={otherLocale}>
          {getDictionary(otherLocale).locale.label}
        </a>
        <button type="button" className="t-hud__read" onClick={onRead}>
          {copy.chrome.read}
        </button>
      </span>
    </div>
  );
}

/** The opening screen. */
export function Intro({ onStart, onRead, locale }: { onStart: () => void; onRead: () => void; locale: Locale }) {
  const copy = getTuesdayCopy(locale);
  return (
    <section className="t-intro">
      <p className="t-intro__kicker">{copy.kicker}</p>
      <h1 className="t-intro__title">{copy.title}</h1>
      <p className="t-intro__deck">{copy.company}</p>
      <p className="t-intro__deck">{copy.chrome.intro}</p>
      <div className="t-intro__actions">
        <button type="button" className={buttonClass()} onClick={onStart}>
          {copy.chrome.start}
        </button>
      </div>
      <button type="button" className="t-intro__read" onClick={onRead}>
        {copy.chrome.preferReader}
      </button>
    </section>
  );
}

/** The collapse card between Act 1 and Act 2: the day's honest tally. */
export function Interstitial({
  metrics,
  locale,
  onContinue,
}: {
  metrics: DayMetrics;
  locale: Locale;
  onContinue: () => void;
}) {
  const { chrome } = getTuesdayCopy(locale);
  const [droppedText, complaintsText, carriedText] = chrome.counts(metrics);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`t-interstitial ${visible ? "is-visible" : ""}`}
      role="dialog"
      aria-label={chrome.end}
    >
      <p className="t-interstitial__clock">{formatClock(565, locale)}</p>
      <p className="t-interstitial__line">
        {chrome.handled[0]}<strong>{metrics.completed}</strong>{chrome.handled[1]}<strong>{metrics.arrivals}</strong>{chrome.handled[2]}
      </p>
      <p className="t-interstitial__line">
        <strong>{metrics.dropped}</strong>{droppedText}{" "}
        <strong>{metrics.complaints}</strong>{complaintsText}{" "}
        <strong>{metrics.carried}</strong>{carriedText}
      </p>
      <p className="t-interstitial__punch">{chrome.oldRun}</p>
      <p className="t-interstitial__line">{chrome.next}</p>
      <button type="button" className={buttonClass()} onClick={onContinue}>
        {chrome.continue}
      </button>
    </div>
  );
}
