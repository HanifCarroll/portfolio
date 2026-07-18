import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Attribute-driven motion primitives. No page-specific selectors below this line —
 * everything is wired from data-motion-* attributes in markup.
 *
 * data-motion-page                Mount root (on <main>). One per page.
 *
 * data-motion-intro               Entrance container. Its headline, deck, and intro-items
 *                                  play once as a single sequenced timeline on page load
 *                                  (not scroll-triggered).
 *   data-motion="headline"          Line reveal. Splits single-text-node headlines with
 *                                    SplitText (reverted on cleanup). Headlines that already
 *                                    carry an aria-label plus authored child <span>s animate
 *                                    those spans directly instead, so the accessible name
 *                                    stays intact (see the homepage hero h1).
 *   data-motion-deck                The intro's supporting paragraph. Single fade/rise,
 *                                    sequenced right after the headline.
 *   data-motion-intro-item          Any other intro element. Staggered in after the deck.
 *   data-motion-intro-item="media"  Variant for hero media (portraits, large imagery):
 *                                    slides in from the side with a slight settle-down scale
 *                                    on desktop, a simple rise on mobile.
 *
 * data-motion="reveal"            Standalone single-element fade/rise on its own
 *                                  ScrollTrigger. Nested inside a data-motion-group it
 *                                  instead becomes that group's leading label, sequenced
 *                                  first within the group's own timeline/trigger.
 *
 * data-motion-group               Scroll-triggered container for data-motion-item children.
 *   data-motion-item                 Staggered member of the group.
 *   data-motion-from="left|right"    Optional, on the group. Switches the first two items to
 *                                     a horizontal two-up reveal (copy / media proof rows):
 *                                     the first item enters from the given side, the second
 *                                     from the opposite side. Falls back to vertical stagger
 *                                     on mobile.
 *
 * data-motion="parallax"          Desktop-only continuous scroll-scrub parallax. Independent
 *                                  of entrance/reveal timing; can combine with data-motion-item
 *                                  on the same element.
 *
 * data-motion="sequence"          Scroll-triggered assembly for diagram-style content.
 *   data-motion-step                Children play strictly in DOM order. Values:
 *                                    (none) rise/fade · "draw" scaleX from the left ·
 *                                    "draw-down" / "draw-up" scaleY along the flow axis,
 *                                    so connector arrows read as being drawn in.
 *   data-motion-pulse               After assembly, this element gets a brief scale pulse —
 *                                    the diagram's focal point (e.g. the bottleneck node).
 *
 * Every duration/stagger/offset lives in MOTION below so CSS and JS physics stay aligned
 * and so pacing changes happen in one place.
 */

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
    mediaXPercent: 5,
    mediaYMobile: 18,
    mediaScale: 1.025,
    mediaDuration: 0.88,
    mediaPositionDesktop: 0.12,
    mediaOverlapMobile: 0.58,
  },
  reveal: {
    y: 22,
    duration: 0.62,
    triggerStartDesktop: "top 78%",
    triggerStartMobile: "top 88%",
  },
  group: {
    triggerStartDesktop: "top 78%",
    triggerStartMobile: "top 88%",
    labelOverlap: 0.34,
    itemYDesktop: 32,
    itemYMobile: 20,
    itemDuration: 0.66,
    itemStagger: 0.09,
  },
  groupFrom: {
    triggerStartDesktop: "top 72%",
    triggerStartMobile: "top 86%",
    overlap: 0.54,
    primaryOffset: 34,
    primaryYMobile: 20,
    primaryDuration: 0.72,
    secondaryOffset: 42,
    secondaryYMobile: 24,
    secondaryDuration: 0.82,
    secondaryScale: 0.965,
  },
  parallax: {
    yPercent: -3,
    scrub: 0.8,
  },
  sequence: {
    triggerStartDesktop: "top 72%",
    triggerStartMobile: "top 85%",
    stepDuration: 0.34,
    stepY: 14,
    overlap: 0.16,
    pulseScale: 1.03,
    pulseDuration: 0.32,
    pulseRepeats: 3,
    pulseDelay: 0.25,
  },
  refreshSettleDelay: 200,
} as const;

const ALL_MOTION_SELECTOR =
  '[data-motion="headline"], [data-motion-deck], [data-motion-intro-item], [data-motion-item], [data-motion="reveal"], [data-motion="parallax"], [data-motion-step]';

const ANIMATED_SCOPE_SELECTOR =
  '[data-motion-intro], [data-motion-group], [data-motion="reveal"], [data-motion="parallax"], [data-motion="sequence"]';

const SESSION_VISITED_KEY = "hc-motion-visited";

let cleanupMotion: (() => void) | undefined;
let activeRoot: HTMLElement | undefined;

function isFirstVisit(): boolean {
  try {
    if (sessionStorage.getItem(SESSION_VISITED_KEY)) return false;
    sessionStorage.setItem(SESSION_VISITED_KEY, "1");
    return true;
  } catch {
    return true;
  }
}

function isPreAuthoredHeadline(el: HTMLElement): boolean {
  return el.hasAttribute("aria-label") && el.children.length > 0;
}

/** Shared by intro and standalone headlines: authored spans win, otherwise SplitText lines. */
function headlineTargets(el: HTMLElement, splits: SplitText[]): Element[] {
  if (isPreAuthoredHeadline(el)) return Array.from(el.children);
  const split = new SplitText(el, { type: "lines", linesClass: "hc-motion-line" });
  splits.push(split);
  return split.lines;
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
    const allItems = Array.from(intro.querySelectorAll<HTMLElement>("[data-motion-intro-item]"));
    const items = allItems.filter((el) => el.getAttribute("data-motion-intro-item") !== "media");
    const mediaItems = allItems.filter(
      (el) => el.getAttribute("data-motion-intro-item") === "media",
    );
    const timeline = gsap.timeline({ defaults: { ease: MOTION.ease } });

    if (headline) {
      if (firstVisit) {
        timeline.from(headlineTargets(headline, splits), {
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
          y: MOTION.reveal.y,
          autoAlpha: 0,
          duration: MOTION.reveal.duration * pace,
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

    if (mediaItems.length)
      timeline.from(
        mediaItems,
        {
          xPercent: desktop ? MOTION.intro.mediaXPercent : 0,
          y: desktop ? 0 : MOTION.intro.mediaYMobile,
          scale: MOTION.intro.mediaScale,
          autoAlpha: 0,
          duration: MOTION.intro.mediaDuration * pace,
          clearProps: "transform,opacity,visibility",
        },
        desktop ? MOTION.intro.mediaPositionDesktop : `-=${MOTION.intro.mediaOverlapMobile * pace}`,
      );
  });
}

/** data-motion="headline" found outside any intro: standalone scroll-triggered line reveal. */
function mountStandaloneHeadlines(root: HTMLElement, splits: SplitText[], desktop: boolean) {
  Array.from(root.querySelectorAll<HTMLElement>('[data-motion="headline"]'))
    .filter((el) => !el.closest("[data-motion-intro]"))
    .forEach((el) => {
      gsap.from(headlineTargets(el, splits), {
        yPercent: MOTION.headline.yPercent,
        autoAlpha: 0,
        duration: desktop ? MOTION.headline.durationDesktop : MOTION.headline.durationMobile,
        stagger: MOTION.headline.stagger,
        ease: MOTION.ease,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
          trigger: el,
          start: desktop ? MOTION.reveal.triggerStartDesktop : MOTION.reveal.triggerStartMobile,
          once: true,
        },
      });
    });
}

/** data-motion="reveal" found outside any group/intro: standalone single-element fade/rise. */
function mountStandaloneReveals(root: HTMLElement, desktop: boolean) {
  Array.from(root.querySelectorAll<HTMLElement>('[data-motion="reveal"]'))
    .filter((el) => !el.closest("[data-motion-group]") && !el.closest("[data-motion-intro]"))
    .forEach((el) => {
      gsap.from(el, {
        y: MOTION.reveal.y,
        autoAlpha: 0,
        duration: MOTION.reveal.duration,
        ease: MOTION.ease,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
          trigger: el,
          start: desktop ? MOTION.reveal.triggerStartDesktop : MOTION.reveal.triggerStartMobile,
          once: true,
        },
      });
    });
}

function mountGroups(root: HTMLElement, desktop: boolean) {
  root.querySelectorAll<HTMLElement>("[data-motion-group]").forEach((group) => {
    const label = group.querySelector<HTMLElement>('[data-motion="reveal"]');
    const items = Array.from(group.querySelectorAll<HTMLElement>("[data-motion-item]"));
    if (!label && items.length === 0) return; // nothing to animate — no inert trigger

    const from = group.getAttribute("data-motion-from") as "left" | "right" | null;
    const useFromDirection = Boolean(from) && items.length > 0;
    const triggerStart = from
      ? desktop
        ? MOTION.groupFrom.triggerStartDesktop
        : MOTION.groupFrom.triggerStartMobile
      : desktop
        ? MOTION.group.triggerStartDesktop
        : MOTION.group.triggerStartMobile;

    const timeline = gsap.timeline({
      defaults: { ease: MOTION.ease },
      scrollTrigger: { trigger: group, start: triggerStart, once: true },
    });

    if (label)
      timeline.from(label, {
        y: MOTION.reveal.y,
        autoAlpha: 0,
        duration: MOTION.reveal.duration,
        clearProps: "transform,opacity,visibility",
      });

    if (useFromDirection) {
      const direction = from === "right" ? 1 : -1;
      const [primary, secondary] = items;

      if (primary)
        timeline.from(
          primary,
          {
            x: desktop ? direction * MOTION.groupFrom.primaryOffset : 0,
            y: desktop ? 0 : MOTION.groupFrom.primaryYMobile,
            autoAlpha: 0,
            duration: MOTION.groupFrom.primaryDuration,
            clearProps: "transform,opacity,visibility",
          },
          label ? `-=${MOTION.group.labelOverlap}` : 0,
        );

      if (secondary)
        timeline.from(
          secondary,
          {
            x: desktop ? direction * -MOTION.groupFrom.secondaryOffset : 0,
            y: desktop ? 0 : MOTION.groupFrom.secondaryYMobile,
            scale: MOTION.groupFrom.secondaryScale,
            autoAlpha: 0,
            duration: MOTION.groupFrom.secondaryDuration,
            clearProps: "transform,opacity,visibility",
          },
          `-=${MOTION.groupFrom.overlap}`,
        );
    } else if (items.length) {
      timeline.from(
        items,
        {
          y: desktop ? MOTION.group.itemYDesktop : MOTION.group.itemYMobile,
          autoAlpha: 0,
          duration: MOTION.group.itemDuration,
          stagger: MOTION.group.itemStagger,
          clearProps: "transform,opacity,visibility",
        },
        label ? `-=${MOTION.group.labelOverlap}` : 0,
      );
    }
  });
}

/** Desktop-only continuous scroll-scrub parallax; independent of entrance/reveal. */
function mountParallax(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-motion="parallax"]').forEach((el) => {
    gsap.to(el, {
      yPercent: MOTION.parallax.yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: MOTION.parallax.scrub,
      },
    });
  });
}

/**
 * data-motion="sequence": children marked data-motion-step assemble in DOM order —
 * connectors draw along their axis, nodes rise — then the data-motion-pulse element
 * gets a short attention pulse. Built for workflow-style diagrams.
 */
function mountSequences(root: HTMLElement, desktop: boolean) {
  root.querySelectorAll<HTMLElement>('[data-motion="sequence"]').forEach((seq) => {
    const steps = Array.from(seq.querySelectorAll<HTMLElement>("[data-motion-step]"));
    if (!steps.length) return;

    const timeline = gsap.timeline({
      defaults: { ease: MOTION.ease },
      scrollTrigger: {
        trigger: seq,
        start: desktop ? MOTION.sequence.triggerStartDesktop : MOTION.sequence.triggerStartMobile,
        once: true,
      },
    });

    steps.forEach((step, index) => {
      const kind = step.getAttribute("data-motion-step");
      const from: gsap.TweenVars =
        kind === "draw"
          ? { scaleX: 0, transformOrigin: "left center", autoAlpha: 0 }
          : kind === "draw-down"
            ? { scaleY: 0, transformOrigin: "center top", autoAlpha: 0 }
            : kind === "draw-up"
              ? { scaleY: 0, transformOrigin: "center bottom", autoAlpha: 0 }
              : { y: MOTION.sequence.stepY, autoAlpha: 0 };

      timeline.from(
        step,
        {
          ...from,
          duration: MOTION.sequence.stepDuration,
          clearProps: "transform,opacity,visibility",
        },
        index === 0 ? 0 : `-=${MOTION.sequence.overlap}`,
      );
    });

    const pulse = seq.querySelector<HTMLElement>("[data-motion-pulse]");
    if (pulse)
      timeline.to(
        pulse,
        {
          scale: MOTION.sequence.pulseScale,
          duration: MOTION.sequence.pulseDuration,
          repeat: MOTION.sequence.pulseRepeats,
          yoyo: true,
          ease: "power1.inOut",
          clearProps: "transform",
        },
        `+=${MOTION.sequence.pulseDelay}`,
      );
  });
}

/**
 * Keeps ScrollTrigger positions honest against late layout shifts (images loading,
 * anchor-link scroll landing) so a reveal whose trigger point has already been passed
 * fires immediately instead of leaving content invisible.
 */
function wireRefreshRobustness(root: HTMLElement): () => void {
  const refresh = () => ScrollTrigger.refresh();
  const teardown: Array<() => void> = [];

  requestAnimationFrame(refresh);

  if (document.readyState !== "complete") {
    window.addEventListener("load", refresh, { once: true });
    teardown.push(() => window.removeEventListener("load", refresh));
  }

  window.addEventListener("hashchange", refresh);
  teardown.push(() => window.removeEventListener("hashchange", refresh));

  const settleTimer = window.setTimeout(refresh, MOTION.refreshSettleDelay);
  teardown.push(() => window.clearTimeout(settleTimer));

  const images = new Set<HTMLImageElement>();
  root.querySelectorAll<HTMLElement>(ANIMATED_SCOPE_SELECTOR).forEach((scope) => {
    if (scope instanceof HTMLImageElement) images.add(scope);
    scope.querySelectorAll<HTMLImageElement>("img").forEach((img) => images.add(img));
  });
  images.forEach((img) => {
    if (img.complete) return;
    img.addEventListener("load", refresh, { once: true });
    img.addEventListener("error", refresh, { once: true });
  });

  return () => teardown.forEach((fn) => fn());
}

function mountMotion() {
  const root = document.querySelector<HTMLElement>("[data-motion-page]");
  if (!root || root === activeRoot) return;

  cleanupMotion?.();
  activeRoot = root;

  const firstVisit = isFirstVisit();
  const media = gsap.matchMedia();

  media.add(
    { reduceMotion: "(prefers-reduced-motion: reduce)", desktop: MOTION.breakpoint },
    (context) => {
      const { reduceMotion, desktop } = context.conditions as {
        reduceMotion: boolean;
        desktop: boolean;
      };

      if (reduceMotion) {
        gsap.set(root.querySelectorAll(ALL_MOTION_SELECTOR), { clearProps: "all" });
        return;
      }

      const splits: SplitText[] = [];

      mountIntros(root, splits, desktop, firstVisit);
      mountStandaloneHeadlines(root, splits, desktop);
      mountStandaloneReveals(root, desktop);
      mountGroups(root, desktop);
      mountSequences(root, desktop);
      if (desktop) mountParallax(root);

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        splits.forEach((split) => split.revert());
      };
    },
  );

  const stopRefreshRobustness = wireRefreshRobustness(root);

  document.documentElement.dataset.motionEnhanced = "true";
  cleanupMotion = () => {
    stopRefreshRobustness();
    media.revert();
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
