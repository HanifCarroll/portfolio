import { useCallback, useEffect, useRef, useState } from "react";
import type { DayMetrics } from "../../lib/tuesday-sim/engine";
import { trackTuesdayEvent } from "./analytics";
import { ActOne } from "./ActOne";
import { ActTwo } from "./ActTwo";
import { ActThree } from "./ActThree";
import { Mirror } from "./Mirror";
import { Hud, Interstitial, Intro } from "./chrome";

type Mode = "experience" | "reader";

const READER_ANCHORS: Record<string, string> = {
  "tuesday-act-1": "tuesday-reader-old",
  "tuesday-act-2": "tuesday-reader-build",
  "tuesday-act-3": "tuesday-reader-new",
  "tuesday-mirror": "tuesday-reader-mirror",
};

/**
 * One Tuesday, twice — the interactive case study. The component owns the
 * mode (immersive vs. reader), the act machine, and the hand-offs between
 * acts. The full prose version lives in the page itself for readers,
 * crawlers, reduced-motion users, and small screens.
 */
export default function TuesdayExperience() {
  const [mode, setMode] = useState<Mode>("experience");
  const [compact, setCompact] = useState(
    () =>
      window.matchMedia("(max-width: 900px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [actLabel, setActLabel] = useState("Meridian Facility Services");
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  const [dayOne, setDayOne] = useState<DayMetrics | null>(null);
  const [dayOneDone, setDayOneDone] = useState(false);
  const [interstitial, setInterstitial] = useState(false);
  const buildTrackedRef = useRef(false);

  // The experience loads by default on desktop and after an explicit launch
  // from the prose page on smaller screens. Reduced-motion visitors get the
  // condensed, lower-motion version in either path.
  useEffect(() => {
    const small = window.matchMedia("(max-width: 900px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateCompact = () => setCompact(small.matches || reduced.matches);
    small.addEventListener("change", updateCompact);
    reduced.addEventListener("change", updateCompact);
    return () => {
      small.removeEventListener("change", updateCompact);
      reduced.removeEventListener("change", updateCompact);
    };
  }, []);

  useEffect(() => {
    trackTuesdayEvent("interactive_case_study_launched", {
      experience_mode: compact ? "compact" : "full",
    });
  }, []);

  // While the experience is live, hide both the prose and the global fixed
  // header. The experience HUD becomes the single navigation surface.
  useEffect(() => {
    const live = mode === "experience";
    const siteHeader = document.getElementById("siteHeader");
    document.body.classList.toggle("tuesday-live", live);
    if (live) {
      siteHeader?.setAttribute("aria-hidden", "true");
      siteHeader?.setAttribute("inert", "");
    } else {
      siteHeader?.removeAttribute("aria-hidden");
      siteHeader?.removeAttribute("inert");
    }
    return () => {
      document.body.classList.remove("tuesday-live");
      siteHeader?.removeAttribute("aria-hidden");
      siteHeader?.removeAttribute("inert");
    };
  }, [mode]);

  // Track which act owns the viewport (drives the HUD label and Act 1's clock).
  useEffect(() => {
    if (mode !== "experience") return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-tuesday-act]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setVisibleSection(el.id);
            setActLabel(el.dataset.tuesdayAct ?? "");
            if (el.id === "tuesday-act-2" && !buildTrackedRef.current) {
              buildTrackedRef.current = true;
              trackTuesdayEvent("interactive_case_study_build_reached");
            }
          }
        }
      },
      // A band across the viewport's middle: fires for sections of any
      // height, including Act 2's many-screen scroll track.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [mode]);

  const scrollToId = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleStart = useCallback(() => {
    // Land with the pin fully engaged: section top at the viewport top, a
    // pixel into the track so the sticky stage is stuck, not still arriving.
    const el = document.getElementById("tuesday-act-1");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY + 2,
        behavior: "smooth",
      });
    trackTuesdayEvent("interactive_case_study_started", {
      experience_mode: compact ? "compact" : "full",
    });
  }, [compact]);

  const handleDayEnd = useCallback((metrics: DayMetrics) => {
    setDayOne(metrics);
    setDayOneDone(true);
    setInterstitial(true);
    trackTuesdayEvent("interactive_case_study_day_completed", {
      handled: metrics.completed,
      forgotten: metrics.dropped,
    });
  }, []);

  // The prose page's launch band fires this event; switch surfaces at the top.
  useEffect(() => {
    const handler = () => {
      setMode("experience");
      window.scrollTo({ top: 0, behavior: "auto" });
      trackTuesdayEvent("interactive_case_study_relaunched");
    };
    window.addEventListener("tuesday:launch", handler);
    return () => window.removeEventListener("tuesday:launch", handler);
  }, []);

  const read = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    const sectionAtCenter = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tuesday-act]"),
    ).find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
    });
    const sourceSection = sectionAtCenter?.id ?? visibleSection;
    const targetId = sourceSection ? READER_ANCHORS[sourceSection] : "tuesday-reader";
    setInterstitial(false);
    setMode("reader");
    trackTuesdayEvent("interactive_case_study_reader_opened", {
      source_act: sourceSection ?? "intro",
    });
    const placeReader = () => {
      const target = document.getElementById(targetId) ?? document.getElementById("tuesday-reader");
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 112;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
      target.focus({ preventScroll: true });
    };
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(placeReader);
    });
    window.setTimeout(placeReader, 150);
    window.setTimeout(placeReader, 450);
  }, [visibleSection]);

  if (mode === "reader") return null;

  const actOneActive = visibleSection === "tuesday-act-1" && !dayOneDone;

  return (
    <div className="t-root">
      <Hud act={actLabel} onRead={read} />

      <Intro onStart={handleStart} onRead={read} />

      <section
        id="tuesday-act-1"
        className="t-section"
        data-tuesday-act="Act I — The Old Tuesday"
        aria-label="Act 1: the old Tuesday"
      >
        <div className="t1-track">
          <div className="t1-pin">
            <ActOne
              active={actOneActive}
              onDayEnd={handleDayEnd}
              onSkip={() => trackTuesdayEvent("interactive_case_study_day_skipped")}
              compact={compact}
            />
          </div>
        </div>
      </section>

      <div id="tuesday-act-2" data-tuesday-act="Act II — The Build">
        <ActTwo compact={compact} />
      </div>

      <div id="tuesday-act-3" data-tuesday-act="Act III — The New Tuesday">
        <ActThree compact={compact} />
      </div>

      <div id="tuesday-mirror" data-tuesday-act="The Mirror">
        <Mirror />
      </div>

      {interstitial && dayOne && (
        <Interstitial
          metrics={dayOne}
          onContinue={() => {
            setInterstitial(false);
            scrollToId("tuesday-act-2");
          }}
        />
      )}
    </div>
  );
}
