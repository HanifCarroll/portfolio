import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let cleanupMotion: (() => void) | undefined;
let activeRoot: HTMLElement | undefined;

function mountMotion() {
  const root = document.querySelector<HTMLElement>("[data-motion-page]");
  if (!root || root === activeRoot) return;
  cleanupMotion?.();
  activeRoot = root;

  const media = gsap.matchMedia();
  media.add(
    { reduceMotion: "(prefers-reduced-motion: reduce)", desktop: "(min-width: 56.26rem)" },
    (context) => {
      const { reduceMotion, desktop } = context.conditions as {
        reduceMotion: boolean;
        desktop: boolean;
      };
      if (reduceMotion) return;

      const hero = root.querySelector<HTMLElement>(".hc-home-hero");
      if (hero) {
        const title = hero.querySelector<HTMLElement>(".hc-home-hero__title");
        const lead = hero.querySelector<HTMLElement>(".hc-home-hero__lead");
        const actions = hero.querySelectorAll<HTMLElement>(".hc-home-hero__actions > *");
        const portrait = hero.querySelector<HTMLElement>(".hc-home-hero__portrait");
        if (title) {
          gsap.from(title.children, {
            yPercent: 108,
            autoAlpha: 0,
            duration: desktop ? 0.88 : 0.68,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          });
        }
        gsap.from(lead, {
          y: 18,
          autoAlpha: 0,
          duration: 0.65,
          delay: 0.24,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
        });
        gsap.from(actions, {
          y: 16,
          autoAlpha: 0,
          duration: 0.58,
          delay: 0.34,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
        });
        gsap.from(portrait, {
          xPercent: desktop ? 5 : 0,
          y: desktop ? 0 : 18,
          scale: 1.025,
          autoAlpha: 0,
          duration: 0.9,
          delay: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      }

      root.querySelectorAll<HTMLElement>(".hc-section, .hc-section--compact").forEach((section) => {
        if (section.closest(".hc-proof-row")) return;
        const heading = section.querySelector<HTMLElement>("h2");
        const intro = section.querySelector<HTMLElement>(
          ".hc-section-intro, .hc-recognition__copy > p, .hc-about-preview__body > p",
        );
        const items = section.querySelectorAll<HTMLElement>(
          ".hc-service-mobile, .hc-method-item, .hc-testimonial, .hc-cta-panel__body, .hc-workflow-diagram",
        );
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: section, start: desktop ? "top 78%" : "top 88%", once: true },
          defaults: { ease: "power2.out" },
        });
        if (heading)
          timeline.from(heading, {
            y: 20,
            autoAlpha: 0,
            duration: 0.58,
            clearProps: "transform,opacity,visibility",
          });
        if (intro)
          timeline.from(
            intro,
            { y: 14, autoAlpha: 0, duration: 0.5, clearProps: "transform,opacity,visibility" },
            "-=0.34",
          );
        if (items.length)
          timeline.from(
            items,
            {
              y: desktop ? 26 : 16,
              autoAlpha: 0,
              duration: 0.56,
              stagger: 0.08,
              clearProps: "transform,opacity,visibility",
            },
            "-=0.26",
          );
      });

      root.querySelectorAll<HTMLElement>(".hc-proof-row").forEach((row) => {
        const copy = row.querySelector<HTMLElement>(".hc-proof-copy");
        const mediaElement = row.querySelector<HTMLElement>(".hc-proof-media");
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: row, start: desktop ? "top 72%" : "top 86%", once: true },
          defaults: { ease: "power3.out" },
        });
        timeline.from(copy, {
          x: desktop ? (row.classList.contains("hc-proof-row--dark") ? 34 : -34) : 0,
          y: desktop ? 0 : 20,
          autoAlpha: 0,
          duration: 0.72,
          clearProps: "transform,opacity,visibility",
        });
        timeline.from(
          mediaElement,
          {
            x: desktop ? (row.classList.contains("hc-proof-row--dark") ? -42 : 42) : 0,
            y: desktop ? 0 : 24,
            scale: 0.97,
            autoAlpha: 0,
            duration: 0.82,
            clearProps: "transform,opacity,visibility",
          },
          "-=0.54",
        );
        if (desktop && mediaElement)
          gsap.to(mediaElement, {
            yPercent: -3,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
      });

      const pageHero = root.querySelector<HTMLElement>(
        ".projects-index__hero-main, .content-page__hero, .hc-detail-hero, .case-study-detail__hero, .blog-post-hero, .tools-hero, .hc-now-page > header, .hc-about-hero",
      );
      if (pageHero && !pageHero.closest(".hc-home-hero")) {
        const heroParts = pageHero.querySelectorAll<HTMLElement>(
          "h1, .hc-lead, .projects-index__intro, .content-page__intro, .blog-post-hero__meta, .blog-post-hero__subtitle, .blog-post-hero__dek, .hc-actions, .hc-about-hero__portrait, .tools-prompt",
        );
        gsap.from(heroParts, {
          y: 24,
          autoAlpha: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        });
      }

      root
        .querySelectorAll<HTMLElement>(
          ".project-video-card, .content-page__entry, .case-study-detail__proof-snapshot-item, .case-study-detail__editorial-section, .tools-card, .hc-service-item, .hc-principle, .hc-faq-item, .hc-proof-card, .hc-deliverable, .hc-process-step, .ledger-section",
        )
        .forEach((item, index) => {
          if (item.closest(".hc-proof-row")) return;
          gsap.from(item, {
            y: desktop ? 30 : 18,
            autoAlpha: 0,
            duration: 0.62,
            delay: (index % 3) * 0.035,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: item, start: desktop ? "top 84%" : "top 91%", once: true },
          });
        });
    },
  );

  document.documentElement.dataset.motionEnhanced = "true";
  cleanupMotion = () => {
    media.revert();
    activeRoot = undefined;
    delete document.documentElement.dataset.motionEnhanced;
  };
}

document.addEventListener("astro:before-swap", () => cleanupMotion?.());
document.addEventListener("astro:page-load", mountMotion);
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", mountMotion, { once: true });
else mountMotion();
