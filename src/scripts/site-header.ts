import gsap from "gsap";

let cleanupHeader: (() => void) | undefined;

function mountHeader() {
  cleanupHeader?.();

  const siteHeader = document.querySelector<HTMLElement>("#siteHeader");
  const toggle = siteHeader?.querySelector<HTMLButtonElement>(".hc-mobile-nav__toggle");
  const panel = siteHeader?.querySelector<HTMLElement>(".hc-mobile-nav__panel");
  const links = panel?.querySelectorAll<HTMLElement>(
    ".hc-mobile-nav__link, .hc-mobile-nav__call-link",
  );
  const notesMenu = siteHeader?.querySelector<HTMLDetailsElement>("[data-notes-mobile-menu]");
  const notesSummary = notesMenu?.querySelector<HTMLElement>(":scope > summary");
  const notesPanel = notesMenu?.querySelector<HTMLElement>(":scope > .hc-notes-mobile-menu__panel");
  const notesContent = notesPanel?.querySelectorAll<HTMLElement>(
    ".hc-notes-toc-label, .hc-notes-mobile-toc > li",
  );
  const notesChapters = notesPanel?.querySelectorAll<HTMLDetailsElement>(
    ".hc-notes-mobile-section",
  );
  if (!siteHeader || !toggle || !panel || !links) return;

  const controller = new AbortController();
  const { signal } = controller;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let scheduledFrame = 0;
  let notesScrollFrame = 0;
  let isMounted = true;
  let isOpen = false;
  let isHeaderVisible = true;
  let notesClosePending = false;

  const notesTimeline = notesPanel && notesContent
    ? gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
        .to(notesPanel, {
          autoAlpha: 1,
          y: 0,
          duration: reduceMotion ? 0 : 0.42,
        })
        .to(
          notesContent,
          {
            y: 0,
            autoAlpha: 1,
            duration: reduceMotion ? 0 : 0.3,
            stagger: reduceMotion ? 0 : 0.035,
          },
          reduceMotion ? 0 : "-=0.16",
        )
    : undefined;

  const resetNotesPanel = () => {
    if (!notesPanel || !notesContent) return;
    notesTimeline?.pause(0);
    gsap.set(notesPanel, { autoAlpha: 0, y: reduceMotion ? 0 : -12 });
    gsap.set(notesContent, { y: reduceMotion ? 0 : 10, autoAlpha: 0 });
  };
  resetNotesPanel();

  const closeNotesMenu = (restoreFocus = false, afterClose?: () => void, immediate = false) => {
    if (!notesMenu?.open) {
      document.documentElement.classList.remove("hc-notes-menu-open");
      notesSummary?.setAttribute("aria-label", "Open table of contents");
      resetNotesPanel();
      afterClose?.();
      return;
    }
    notesClosePending = true;
    const finishClose = () => {
      notesClosePending = false;
      notesMenu.open = false;
      document.documentElement.classList.remove("hc-notes-menu-open");
      notesSummary?.setAttribute("aria-label", "Open table of contents");
      resetNotesPanel();
      if (restoreFocus) notesSummary?.focus({ preventScroll: true });
      afterClose?.();
    };
    if (immediate || reduceMotion || !notesTimeline || notesTimeline.progress() === 0) {
      finishClose();
      return;
    }
    notesTimeline.eventCallback("onReverseComplete", finishClose);
    notesTimeline.reverse();
  };

  const openNotesMenu = () => {
    if (!notesMenu?.open || !notesPanel || !notesTimeline) return;
    document.documentElement.classList.add("hc-notes-menu-open");
    notesTimeline.eventCallback("onReverseComplete", null);
    notesTimeline.play(0);
  };
  let lastScrollY = Math.max(0, window.scrollY);

  const setHeaderVisible = (visible: boolean) => {
    if (visible === isHeaderVisible) return;
    isHeaderVisible = visible;
    gsap.to(siteHeader, {
      yPercent: visible ? 0 : -115,
      autoAlpha: visible ? 1 : 0,
      duration: reduceMotion ? 0 : visible ? 0.42 : 0.3,
      ease: visible ? "power3.out" : "power2.in",
      overwrite: true,
    });
  };

  gsap.set(panel, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
  gsap.set(links, { y: reduceMotion ? 0 : 28, autoAlpha: 0 });

  const timeline = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } });
  timeline
    .to(panel, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: reduceMotion ? 0 : 0.55 })
    .to(
      links,
      {
        y: 0,
        autoAlpha: 1,
        stagger: reduceMotion ? 0 : 0.055,
        duration: reduceMotion ? 0 : 0.42,
        ease: "power3.out",
      },
      reduceMotion ? 0 : "-=0.2",
    );

  const setOpenState = (open: boolean, restoreFocus = true, afterClose?: () => void) => {
    if (open && notesMenu?.open) {
      closeNotesMenu(false, () => setOpenState(open, restoreFocus, afterClose));
      return;
    }
    isOpen = open;
    if (open) setHeaderVisible(true);
    if (!open && panel.contains(document.activeElement)) toggle.focus({ preventScroll: true });
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    panel.setAttribute("aria-hidden", String(!open));
    toggle.classList.toggle("is-open", open);
    siteHeader.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("hc-nav-open", open);

    if (open) {
      panel.removeAttribute("inert");
      timeline.play(0);
      timeline.eventCallback("onComplete", () => links[0]?.focus());
    } else {
      timeline.eventCallback("onComplete", null);
      const finishClose = () => {
        panel.setAttribute("inert", "");
        if (restoreFocus) toggle.focus();
        afterClose?.();
      };
      if (reduceMotion) {
        timeline.pause(0);
        gsap.set(panel, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
        gsap.set(links, { y: 0, autoAlpha: 0 });
        finishClose();
      } else {
        timeline.reverse().eventCallback("onReverseComplete", finishClose);
      }
    }
  };

  panel.setAttribute("inert", "");
  toggle.addEventListener("click", () => setOpenState(!isOpen), { signal });
  notesMenu?.addEventListener("toggle", () => {
    if (!notesMenu.open && notesClosePending) return;
    notesSummary?.setAttribute("aria-label", notesMenu.open ? "Close table of contents" : "Open table of contents");
    if (notesMenu.open) {
      if (isOpen) setOpenState(false, false, openNotesMenu);
      else openNotesMenu();
    } else {
      closeNotesMenu();
    }
  }, { signal });
  const scrollChapterIntoView = (chapter: HTMLDetailsElement) => {
    if (!notesPanel || !chapter.open) return;
    const panelRect = notesPanel.getBoundingClientRect();
    const panelPaddingTop = Number.parseFloat(getComputedStyle(notesPanel).paddingTop) || 0;
    const chapterTop = chapter.getBoundingClientRect().top - panelRect.top + notesPanel.scrollTop - panelPaddingTop;
    const maxScrollTop = notesPanel.scrollHeight - notesPanel.clientHeight;
    notesPanel.scrollTo({
      top: Math.max(0, Math.min(chapterTop, maxScrollTop)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  notesChapters?.forEach((chapter) => {
    chapter.addEventListener("toggle", () => {
      if (!chapter.open || !notesPanel) return;
      notesChapters.forEach((otherChapter) => {
        if (otherChapter !== chapter) otherChapter.open = false;
      });
      if (notesScrollFrame) cancelAnimationFrame(notesScrollFrame);
      notesScrollFrame = window.requestAnimationFrame(() => {
        notesScrollFrame = 0;
        if (isMounted) scrollChapterIntoView(chapter);
      });
    }, { signal });
  });
  notesSummary?.addEventListener("click", (event) => {
    if (isOpen) {
      event.preventDefault();
      setOpenState(false, false, () => {
        if (!notesMenu) return;
        notesMenu.open = true;
      });
    } else if (notesMenu?.open) {
      event.preventDefault();
      closeNotesMenu(true);
    }
  }, { signal });
  notesMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeNotesMenu(), { signal });
  });
  panel.addEventListener(
    "click",
    (event) => {
      if ((event.target as Element).closest("a")) setOpenState(false, false);
    },
    { signal },
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && notesMenu?.open) {
        event.preventDefault();
        closeNotesMenu(true);
        return;
      }
      if (!isOpen) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenState(false);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [toggle, ...Array.from(links)].filter(
        (item) => !item.hasAttribute("disabled"),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    { signal },
  );

  const updateHeaderSurface = () => {
    scheduledFrame = 0;
    const currentScrollY = Math.max(0, window.scrollY);
    const scrollDelta = currentScrollY - lastScrollY;

    if (!isOpen && !siteHeader.contains(document.activeElement)) {
      if (currentScrollY <= 32 || scrollDelta < -4) setHeaderVisible(true);
      else if (currentScrollY > 140 && scrollDelta > 4) setHeaderVisible(false);
    }
    lastScrollY = currentScrollY;

    if (isOpen) return;
    const headerBottom = siteHeader.getBoundingClientRect().bottom;
    const probeY = Math.min(window.innerHeight - 1, Math.ceil(headerBottom) + 1);
    const probeX = Math.max(0, Math.min(window.innerWidth - 1, Math.round(window.innerWidth / 2)));
    const surface = document.elementFromPoint(probeX, probeY)?.closest("[data-header-surface]");
    const surfaceType =
      window.innerWidth <= 640
        ? (surface?.getAttribute("data-header-surface-mobile") ??
          surface?.getAttribute("data-header-surface"))
        : surface?.getAttribute("data-header-surface");
    siteHeader.dataset.overSurface = surfaceType === "dark" ? "dark" : "light";
  };
  const scheduleHeaderUpdate = () => {
    if (scheduledFrame) return;
    scheduledFrame = window.requestAnimationFrame(updateHeaderSurface);
  };
  window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true, signal });
  siteHeader.addEventListener("focusin", () => setHeaderVisible(true), { signal });
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth >= 1024) {
        if (isOpen) setOpenState(false, false);
        closeNotesMenu(false, undefined, true);
      }
      scheduleHeaderUpdate();
    },
    { passive: true, signal },
  );
  updateHeaderSurface();

  cleanupHeader = () => {
    isMounted = false;
    controller.abort();
    if (scheduledFrame) cancelAnimationFrame(scheduledFrame);
    if (notesScrollFrame) cancelAnimationFrame(notesScrollFrame);
    timeline.kill();
    notesTimeline?.kill();
    document.body.classList.remove("hc-nav-open");
    document.documentElement.classList.remove("hc-notes-menu-open");
  };
}

document.addEventListener("astro:before-swap", () => cleanupHeader?.());
document.addEventListener("astro:page-load", mountHeader);
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", mountHeader, { once: true });
else mountHeader();
