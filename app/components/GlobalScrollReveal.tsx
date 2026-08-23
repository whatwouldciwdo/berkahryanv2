"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SECTION_SELECTOR = [
  ":scope > section",
  ":scope > header",
  ":scope > div > section",
  ":scope > div > header",
  ":scope > main > section",
  ":scope > main > header",
].join(", ");

const CONTENT_SELECTOR = [
  ":scope > div > header",
  ":scope > div > h1",
  ":scope > div > h2",
  ":scope > div > p",
  ":scope > div > article",
  ":scope > div > ul",
  ":scope > div > ol",
  ":scope > div > form",
  ":scope > div > div",
  ":scope > article",
  ":scope > ul",
  ":scope > ol",
  ":scope > form",
].join(", ");

export default function GlobalScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pageRoot = document.querySelector<HTMLElement>("[data-page-content]");
    if (!pageRoot) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(
      pageRoot.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    ).filter((section) => section.dataset.scrollReveal !== "off");

    if (reduceMotion) {
      gsap.set([pageRoot, ...sections], { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        pageRoot,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.55, ease: "power2.out", clearProps: "all" },
      );

      sections.forEach((section) => {
        const explicitContent = Array.from(
          section.querySelectorAll<HTMLElement>("[data-scroll-reveal-item]"),
        );
        const genericContent = Array.from(
          section.querySelectorAll<HTMLElement>(CONTENT_SELECTOR),
        ).filter((item) => !item.closest('[data-scroll-reveal="off"]'));
        const content = explicitContent.length > 0 ? explicitContent : genericContent;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            once: true,
          },
        });

        timeline.fromTo(
          section,
          { autoAlpha: 0, y: 46 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
          },
        );

        if (content.length > 0) {
          timeline.fromTo(
            content,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            "-=0.58",
          );
        }
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, pageRoot);

    return () => context.revert();
  }, [pathname]);

  return null;
}