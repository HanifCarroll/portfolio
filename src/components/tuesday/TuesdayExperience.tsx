import { useCallback, useEffect, useRef, useState } from "react";
import type { DayMetrics } from "../../lib/tuesday-sim/engine";
import { ActOne } from "./ActOne";
import { ActTwo } from "./ActTwo";
import { ActThree } from "./ActThree";
import { Mirror } from "./Mirror";
import { Hud, Interstitial, Intro } from "./chrome";

type Mode = "boot" | "experience" | "reader";

/**
 * One Tuesday, twice — the interactive case study. The component owns the
 * mode (immersive vs. reader), the act machine, and the hand-offs between
 * acts. The full prose version lives in the page itself for readers,
 * crawlers, reduced-motion users, and small screens.
 */
export default function TuesdayExperience() {
  const [mode, setMode] = useState<Mode>("boot");
  const [compact, setCompact] = useState(false);
  const [actLabel, setActLabel] = useState("Meridian Facility Services");
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  const [dayOne, setDayOne] = useState<DayMetrics | null>(null);
  const [dayOneDone, setDayOneDone] = useState(false);
  const [interstitial, setInterstitial] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // First visit decides the default surface: immersive where it can breathe,
  // prose where motion or screen size would fight the reader. Small screens
  // that launch anyway get the condensed cut (auto-played day, no diorama).
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 900px)").matches;
    setCompact(small);
    setMode(reduced || small ? "reader" : "experience");
  }, []);

  // While the experience is live, the page hides its prose self.
  useEffect(() => {
    document.body.classList.toggle("tuesday-live", mode === "experience");
    return () => document.body.classList.remove("tuesday-live");
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
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 2, behavior: "smooth" });
  }, []);

  const handleDayEnd = useCallback((metrics: DayMetrics) => {
    setDayOne(metrics);
    setDayOneDone(true);
    setInterstitial(true);
  }, []);

  // The prose page's launch band fires this event; switch surfaces at the top.
  useEffect(() => {
    const handler = () => {
      setMode("experience");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("tuesday:launch", handler);
    return () => window.removeEventListener("tuesday:launch", handler);
  }, []);

  const read = useCallback(() => {
    setInterstitial(false);
    setMode("reader");
  }, []);

  if (mode === "boot") return null;
  if (mode === "reader") return null;

  const actOneActive = visibleSection === "tuesday-act-1" && !dayOneDone;

  return (
    <div className="t-root" ref={rootRef}>
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
            <ActOne active={actOneActive} onDayEnd={handleDayEnd} compact={compact} />
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
