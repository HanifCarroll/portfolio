import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Current pages use sequenced intro entrances and scroll-triggered groups.
// GSAP owns responsive/reduced-motion teardown; navigation reloads the document.

const MOTION = {
  ease: "power3.out",
  breakpoint: "(min-width: 56.26rem)",
  pacing: {
    firstVisit: 1,
    repeatVisit: 0.6,
  },
  headline: {
    yPercent: 112,
    durationDesktop: 0.86,
    durationMobile: 0.68,
    stagger: 0.08,
  },
  intro: {
    deckY: 18,
    deckDuration: 0.58,
    deckOverlap: 0.48,
    itemY: 16,
    itemDuration: 0.52,
    itemStagger: 0.07,
    itemOverlap: 0.34,
    repeatHeadlineY: 22,
    repeatHeadlineDuration: 0.62,
  },
  group: {
    triggerStartDesktop: "top 78%",
    triggerStartMobile: "top 88%",
    itemYDesktop: 32,
    itemYMobile: 20,
    itemDuration: 0.66,
    itemStagger: 0.09,
  },
  refreshSettleDelay: 200,
} as const;

const SESSION_VISITED_KEY = "hc-motion-visited";

function isFirstVisit(): boolean {
  try {
    if (sessionStorage.getItem(SESSION_VISITED_KEY)) return false;
    sessionStorage.setItem(SESSION_VISITED_KEY, "1");
    return true;
  } catch {
    return true;
  }
}

function mountIntros(
  root: HTMLElement,
  splits: SplitText[],
  desktop: boolean,
  firstVisit: boolean,
) {
  const pace = firstVisit ? MOTION.pacing.firstVisit : MOTION.pacing.repeatVisit;

  root.querySelectorAll<HTMLElement>("[data-motion-intro]").forEach((intro) => {
    const headline = intro.querySelector<HTMLElement>('[data-motion="headline"]');
    const deck = intro.querySelector<HTMLElement>("[data-motion-deck]");
    const items = intro.querySelectorAll<HTMLElement>("[data-motion-intro-item]");
    const timeline = gsap.timeline({ defaults: { ease: MOTION.ease } });

    if (headline) {
      if (firstVisit) {
        const split = new SplitText(headline, { type: "lines", linesClass: "hc-motion-line" });
        splits.push(split);
        timeline.from(split.lines, {
          yPercent: MOTION.headline.yPercent,
          autoAlpha: 0,
          duration:
            (desktop ? MOTION.headline.durationDesktop : MOTION.headline.durationMobile) * pace,
          stagger: MOTION.headline.stagger * pace,
          clearProps: "transform,opacity,visibility",
        });
      } else {
        // Repeat visit this session: skip SplitText entirely, no re-splitting overhead.
        timeline.from(headline, {
          y: MOTION.intro.repeatHeadlineY,
          autoAlpha: 0,
          duration: MOTION.intro.repeatHeadlineDuration * pace,
          clearProps: "transform,opacity,visibility",
        });
      }
    }

    if (deck)
      timeline.from(
        deck,
        {
          y: MOTION.intro.deckY,
          autoAlpha: 0,
          duration: MOTION.intro.deckDuration * pace,
          clearProps: "transform,opacity,visibility",
        },
        headline ? `-=${MOTION.intro.deckOverlap * pace}` : 0,
      );

    if (items.length)
      timeline.from(
        items,
        {
          y: MOTION.intro.itemY,
          autoAlpha: 0,
          duration: MOTION.intro.itemDuration * pace,
          stagger: MOTION.intro.itemStagger * pace,
          clearProps: "transform,opacity,visibility",
        },
        deck || headline ? `-=${MOTION.intro.itemOverlap * pace}` : 0,
      );
  });
}

function mountGroups(root: HTMLElement, desktop: boolean) {
  root.querySelectorAll<HTMLElement>("[data-motion-group]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-motion-item]");
    if (!items.length) return;

    gsap.from(items, {
      y: desktop ? MOTION.group.itemYDesktop : MOTION.group.itemYMobile,
      autoAlpha: 0,
      duration: MOTION.group.itemDuration,
      stagger: MOTION.group.itemStagger,
      ease: MOTION.ease,
      clearProps: "transform,opacity,visibility",
      scrollTrigger: {
        trigger: group,
        start: desktop ? MOTION.group.triggerStartDesktop : MOTION.group.triggerStartMobile,
        once: true,
      },
    });
  });
}

/**
 * Keeps ScrollTrigger positions honest against late layout shifts (images loading,
 * anchor-link scroll landing) so a reveal whose trigger point has already been passed
 * fires immediately instead of leaving content invisible.
 */
function wireRefreshRobustness(root: HTMLElement): () => void {
  const refresh = () => ScrollTrigger.refresh();
  const controller = new AbortController();
  const { signal } = controller;
  const frame = requestAnimationFrame(refresh);
  const settleTimer = window.setTimeout(refresh, MOTION.refreshSettleDelay);

  window.addEventListener("load", refresh, { once: true, signal });
  window.addEventListener("hashchange", refresh, { signal });
  root
    .querySelectorAll<HTMLImageElement>("[data-motion-intro] img, [data-motion-group] img")
    .forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", refresh, { once: true, signal });
      img.addEventListener("error", refresh, { once: true, signal });
    });

  return () => {
    controller.abort();
    cancelAnimationFrame(frame);
    window.clearTimeout(settleTimer);
  };
}

function mountMotion() {
  const root = document.querySelector<HTMLElement>("[data-motion-page]");
  if (!root) return;

  const firstVisit = isFirstVisit();
  const media = gsap.matchMedia();

  media.add(
    { all: "all", reduceMotion: "(prefers-reduced-motion: reduce)", desktop: MOTION.breakpoint },
    (context) => {
      const { reduceMotion, desktop } = context.conditions as {
        reduceMotion: boolean;
        desktop: boolean;
      };

      if (reduceMotion) return;

      const splits: SplitText[] = [];

      mountIntros(root, splits, desktop, firstVisit);
      mountGroups(root, desktop);
      const stopRefresh = wireRefreshRobustness(root);

      return () => {
        stopRefresh();
        splits.forEach((split) => split.revert());
      };
    },
  );
}

mountMotion();
