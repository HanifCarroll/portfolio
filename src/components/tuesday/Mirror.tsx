import { useRef, useState } from "react";
import { BOOK_CALL_URL, EMAIL_URL } from "../../consts";
import { trackTuesdayEvent } from "./analytics";
import { MIRROR_READOUTS, MIRROR_STATEMENTS } from "./content";

/**
 * The Mirror — the case study turns around and faces the reader. Five honest
 * questions, a calibrated read-out, and one clear next step. No hype: the
 * read-outs are written to be true at every score.
 */
export function Mirror() {
  const [answers, setAnswers] = useState<Map<number, boolean>>(new Map());
  const completionTrackedRef = useRef(false);
  const score = [...answers.values()].filter(Boolean).length;
  const answeredAll = answers.size === MIRROR_STATEMENTS.length;
  const readout =
    MIRROR_READOUTS.find((r) => score >= r.min && score <= r.max) ?? MIRROR_READOUTS[0];

  const setAnswer = (index: number, value: boolean) =>
    setAnswers((previous) => {
      const next = new Map(previous);
      next.set(index, value);
      if (next.size === MIRROR_STATEMENTS.length && !completionTrackedRef.current) {
        completionTrackedRef.current = true;
        const completedScore = [...next.values()].filter(Boolean).length;
        const scoreBand = completedScore <= 1 ? "0_1" : completedScore <= 3 ? "2_3" : "4_5";
        trackTuesdayEvent("interactive_case_study_mirror_completed", { score_band: scoreBand });
      }
      return next;
    });

  return (
    <section className="t4" aria-label="How does your operation compare">
      <p className="t4-kicker">The mirror</p>
      <h3 className="t4-title">How much of that Tuesday is yours?</h3>
      <div className="t4-statements">
        {MIRROR_STATEMENTS.map((statement, index) => {
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
                  Yes
                </button>
                <button
                  type="button"
                  className={`t4-choice ${value === false ? "is-on" : ""}`}
                  aria-pressed={value === false}
                  onClick={() => setAnswer(index, false)}
                >
                  No
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {answeredAll && (
        <div className="t4-readout" role="status">
          <p className="t4-readout__score">
            {score} of {MIRROR_STATEMENTS.length}
          </p>
          <h4>{readout.headline}</h4>
          <p>{readout.body}</p>
        </div>
      )}

      <div className="t4-cta">
        <p className="t4-cta__line">
          If any of that sounds like your week, tell me what’s getting harder to run.
        </p>
        <div className="t4-cta__actions">
          <a
            className="hc-button"
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="book_call_clicked"
            data-track-location="one_tuesday_mirror"
          >
            Book a 30-minute audit fit call
          </a>
          <a
            className="t4-cta__secondary"
            href={EMAIL_URL}
            data-track-event="email_clicked"
            data-track-location="one_tuesday_mirror"
          >
            Or email me your Tuesday
          </a>
        </div>
      </div>
    </section>
  );
}
