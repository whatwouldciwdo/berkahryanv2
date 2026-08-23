"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollMorphSeparatorProps {
  position?: "up" | "down";
  fillColor?: string;
  variant?: 1 | 2 | 3 | 4;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const variants = {
  up: {
    1: {
      initial: "M 0 0 C 37 0 70 0 100 0 L 0 0 Z",
      to: "M 0 0 C 35 21 70 0 100 0 L 0 0 Z",
    },
    2: {
      initial: "M 0 0 C 40 0 60 0 100 0 L 0 0 Z",
      to: "M 0 0 C 40 12 60 12 100 0 L 0 0 Z",
    },
    3: {
      initial: "M 0 0 C 23 0 35 0 50 0 C 65 0 74 0 100 0 L 0 0 Z",
      to: "M 0 0 C 17 20 35.2 2 50 2 C 65.2 2 83 20 100 0 L 0 0 Z",
    },
    4: {
      initial: "M 0 0 C 30 0 70 0 100 0 L 0 0 Z",
      to: "M 0 0 C 20 16 80 16 100 0 L 0 0 Z",
    },
  },
  down: {
    1: {
      initial: "M 0 0 C 18 1 61 9 100 0 L 100 10 H 0 Z",
      to: "M 0 0 C 29 6 78 17 100 0 L 100 10 H 0 Z",
    },
    2: {
      initial: "M 0 0 C 40 0 60 0 100 0 L 100 10 H 0 Z",
      to: "M 0 0 C 25 13 75 13 100 0 L 100 10 H 0 Z",
    },
    3: {
      initial: "M 24 0 C 33 0 30 0 49 0 C 64 0 65 0.1 74 0 C 83 0 82 0 100 0 L 100 10 L 0 10 L 0 0 C 11 0 15 0.1 24 0 Z",
      to: "M 24 0 C 33 0 37 10 49 10 C 61 10 65 0.1 74 0 C 83 0 90 10 100 0 L 100 10 L 0 10 L 0 0 C 9 7 15 0.1 24 0 Z",
    },
    4: {
      initial: "M 0 0 C 25 0 75 0 100 0 L 100 10 H 0 Z",
      to: "M 0 0 C 35 15 65 15 100 0 L 100 10 H 0 Z",
    },
  },
};

export default function ScrollMorphSeparator({
  position = "up",
  fillColor = "currentColor",
  variant = 1,
  height = "80px",
  className = "",
  style = {},
}: ScrollMorphSeparatorProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const svgEl = svgRef.current;
    const pathEl = pathRef.current;
    if (!svgEl || !pathEl) return;

    const dataPathTo = pathEl.getAttribute("data-path-to");
    if (!dataPathTo) return;

    const ctx = gsap.context(() => {
      gsap.to(pathEl, {
        scrollTrigger: {
          trigger: svgEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
        ease: "none",
        attr: { d: dataPathTo },
      });
    }, svgEl);

    return () => ctx.revert();
  }, [position, variant]);

  const pathConfig = variants[position][variant] || variants[position][1];

  return (
    <div
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        position: "relative",
        overflow: "hidden",
        pointerEvents: "none",
        lineHeight: 0,
        ...style,
      }}
      className={`scroll-morph-separator ${className}`}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          ref={pathRef}
          d={pathConfig.initial}
          data-path-to={pathConfig.to}
          fill={fillColor}
          vectorEffect="non-scaling-stroke"
          className="path-anim"
        />
      </svg>
    </div>
  );
}
