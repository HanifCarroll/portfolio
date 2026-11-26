import { useRef, useState } from "react";
import { BOOK_CALL_URL, EMAIL_URL } from "../../consts";
import type { Locale } from "../../i18n";
import { getTuesdayCopy } from "../../lib/tuesday-sim/copy";
import { getTuesdayStory } from "../../lib/tuesday-sim/story";
import { trackTuesdayEvent } from "./analytics";
import { buttonClass } from "../../lib/ui";

/**
 * The Mirror — the case study turns around and faces the reader. Five honest
 * questions, a calibrated read-out, and one clear next step. No hype: the
 * read-outs are written to be true at every score.
 */
export function Mirror({ locale }: { locale: Locale }) {
  const copy = getTuesdayCopy(locale);
  const { statements, readouts } = getTuesdayStory(locale);
  const [answers, setAnswers] = useState<Map<number, boolean>>(new Map());
  const completionTrackedRef = useRef(false);
  const score = [...answers.values()].filter(Boolean).length;
  const answeredAll = answers.size === statements.length;
  const readout = readouts.find((r) => score >= r.min && score <= r.max) ?? readouts[0];

  const setAnswer = (index: number, value: boolean) =>
    setAnswers((previous) => {
      const next = new Map(previous);
      next.set(index, value);
      if (next.size === statements.length && !completionTrackedRef.current) {
        completionTrackedRef.current = true;
        const completedScore = [...next.values()].filter(Boolean).length;
        const scoreBand = completedScore <= 1 ? "0_1" : completedScore <= 3 ? "2_3" : "4_5";
        trackTuesdayEvent("interactive_case_study_mirror_completed", { score_band: scoreBand });
      }
      return next;
    });

  return (
    <section className="t4" aria-label={copy.mirror.label}>
      <p className="t4-kicker">{copy.mirror.heading}</p>
      <h3 className="t4-title">{copy.mirror.question}</h3>
      <div className="t4-statements">
        {statements.map((statement, index) => {
          const value = answers.get(index);
          return (
            <div key={statement} className="t4-statement">
              <p>{statement}</p>
              <div className="t4-statement__buttons" role="group" aria-label={statement}>
                <button
                  type="button"
                  className={`t4-choice ${value === true ? "is-on" : ""}`}
                  aria-pressed={value === true}
                  onClick={() => setAnswer(index, true)}
                >
                  {copy.yes}
                </button>
                <button
                  type="button"
                  className={`t4-choice ${value === false ? "is-on" : ""}`}
                  aria-pressed={value === false}
                  onClick={() => setAnswer(index, false)}
                >
                  {copy.no}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {answeredAll && (
        <div className="t4-readout" role="status">
          <p className="t4-readout__score">
            {copy.count(score, statements.length)}
          </p>
          <h4>{readout.headline}</h4>
          <p>{readout.body}</p>
        </div>
      )}

      <div className="t4-cta">
        <p className="t4-cta__line">{copy.mirror.closing}</p>
        <div className="t4-cta__actions">
          <a
            className={buttonClass()}
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="book_call_clicked"
            data-track-location="one_tuesday_mirror"
          >
            {copy.booking}
          </a>
          <a
            className="t4-cta__secondary"
            href={EMAIL_URL}
            data-track-event="email_clicked"
            data-track-location="one_tuesday_mirror"
          >
            {copy.mirror.email}
          </a>
        </div>
      </div>
    </section>
  );
}
