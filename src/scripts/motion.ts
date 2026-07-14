import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

let cleanupMotion: (() => void) | undefined;
let activeRoot: HTMLElement | undefined;

function mountMotion() {
  const root = document.querySelector<HTMLElement>("[data-motion-page]");
  if (!root || root === activeRoot) return;

  cleanupMotion?.();
  activeRoot = root;

  const media = gsap.matchMedia();
  const splits: SplitText[] = [];

  media.add(
    { reduceMotion: "(prefers-reduced-motion: reduce)", desktop: "(min-width: 56.26rem)" },
    (context) => {
      const { reduceMotion, desktop } = context.conditions as {
        reduceMotion: boolean;
        desktop: boolean;
      };

      if (reduceMotion) {
        gsap.set(root.querySelectorAll("[data-motion-intro-item], [data-motion-item]"), {
          clearProps: "all",
        });
        return;
      }

      const intro = root.querySelector<HTMLElement>("[data-motion-intro]");
      if (intro && !intro.classList.contains("hc-home-hero")) {
        const headline = intro.querySelector<HTMLElement>("[data-motion-headline]");
        const deck = intro.querySelector<HTMLElement>("[data-motion-deck]");
        const items = intro.querySelectorAll<HTMLElement>("[data-motion-intro-item]");
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (headline) {
          const split = new SplitText(headline, { type: "lines", linesClass: "hc-motion-line" });
          splits.push(split);
          timeline.from(split.lines, {
            yPercent: 112,
            autoAlpha: 0,
            duration: desktop ? 0.86 : 0.68,
            stagger: 0.08,
            clearProps: "transform,opacity,visibility",
          });
        }

        if (deck)
          timeline.from(
            deck,
            { y: 18, autoAlpha: 0, duration: 0.58, clearProps: "transform,opacity,visibility" },
            "-=0.48",
          );

        if (items.length)
          timeline.from(
            items,
            {
              y: 16,
              autoAlpha: 0,
              duration: 0.52,
              stagger: 0.07,
              clearProps: "transform,opacity,visibility",
            },
            "-=0.34",
          );
      }

      const homeHero = root.querySelector<HTMLElement>(".hc-home-hero");
      if (homeHero) {
        const title = homeHero.querySelector<HTMLElement>(".hc-home-hero__title");
        const lead = homeHero.querySelector<HTMLElement>(".hc-home-hero__lead");
        const actions = homeHero.querySelectorAll<HTMLElement>(".hc-home-hero__actions > *");
        const portrait = homeHero.querySelector<HTMLElement>(".hc-home-hero__portrait");
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (title)
          timeline.from(title.children, {
            yPercent: 108,
            autoAlpha: 0,
            duration: desktop ? 0.88 : 0.68,
            stagger: 0.08,
            clearProps: "transform,opacity,visibility",
          });

        timeline
          .from(
            lead,
            { y: 18, autoAlpha: 0, duration: 0.62, clearProps: "transform,opacity,visibility" },
            "-=0.44",
          )
          .from(
            actions,
            {
              y: 16,
              autoAlpha: 0,
              duration: 0.54,
              stagger: 0.08,
              clearProps: "transform,opacity,visibility",
            },
            "-=0.36",
          )
          .from(
            portrait,
            {
              xPercent: desktop ? 5 : 0,
              y: desktop ? 0 : 18,
              scale: 1.025,
              autoAlpha: 0,
              duration: 0.88,
              clearProps: "transform,opacity,visibility",
            },
            desktop ? 0.12 : "-=0.58",
          );
      }

      root.querySelectorAll<HTMLElement>("[data-motion-section]").forEach((section) => {
        if (section.closest(".hc-proof-row")) return;

        const label = section.querySelector<HTMLElement>("[data-motion-section-label]");
        const items = section.querySelectorAll<HTMLElement>("[data-motion-item]");
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: section, start: desktop ? "top 78%" : "top 88%", once: true },
          defaults: { ease: "power3.out" },
        });

        if (label)
          timeline.from(label, {
            y: 22,
            autoAlpha: 0,
            duration: 0.62,
            clearProps: "transform,opacity,visibility",
          });

        if (items.length)
          timeline.from(
            items,
            {
              y: desktop ? 32 : 20,
              autoAlpha: 0,
              duration: 0.66,
              stagger: 0.09,
              clearProps: "transform,opacity,visibility",
            },
            label ? "-=0.34" : 0,
          );
      });

      root.querySelectorAll<HTMLElement>(".hc-proof-row").forEach((row, index) => {
        const copy = row.querySelector<HTMLElement>(".hc-proof-copy");
        const artwork = row.querySelector<HTMLElement>(".hc-proof-media");
        const copyDirection = index % 2 === 0 ? -1 : 1;
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: row, start: desktop ? "top 72%" : "top 86%", once: true },
          defaults: { ease: "power3.out" },
        });

        timeline
          .from(copy, {
            x: desktop ? copyDirection * 34 : 0,
            y: desktop ? 0 : 20,
            autoAlpha: 0,
            duration: 0.72,
            clearProps: "transform,opacity,visibility",
          })
          .from(
            artwork,
            {
              x: desktop ? copyDirection * -42 : 0,
              y: desktop ? 0 : 24,
              scale: 0.965,
              autoAlpha: 0,
              duration: 0.82,
              clearProps: "transform,opacity,visibility",
            },
            "-=0.54",
          );

        if (desktop && artwork)
          gsap.to(artwork, {
            yPercent: -3,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
  );

  document.documentElement.dataset.motionEnhanced = "true";
  cleanupMotion = () => {
    media.revert();
    splits.forEach((split) => split.revert());
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    activeRoot = undefined;
    delete document.documentElement.dataset.motionEnhanced;
  };
}

document.addEventListener("astro:before-swap", () => cleanupMotion?.());
document.addEventListener("astro:page-load", mountMotion);

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", mountMotion, { once: true });
else mountMotion();
