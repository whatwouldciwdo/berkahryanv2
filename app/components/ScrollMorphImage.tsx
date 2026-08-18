"use client";

import React, { useRef, useEffect, useId } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollMorphImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  variant?: 1 | 2 | 3;
  className?: string;
  style?: React.CSSProperties;
}

const clipVariants = {
  1: {
    viewBox: "0 0 500 750",
    initial: "M 0 0 L 500 0 C 500 599.6 500 677.1 500 750 L 0 750 C 0 205 0 105 0 0 Z",
    to: "M 0 0 L 500 0 C 331 608 485 551 500 750 L 0 750 C 120 281 7 296 0 0 Z",
  },
  2: {
    viewBox: "0 0 500 750",
    initial: "M 50 0 L 500 1 C 397.3 110.7 380.7 235.5 450 375.5 C 519.3 515.5 519.3 640.7 450 751 L 0 751 C 100.7 624.7 120.7 499.5 60 375.5 C -0.7 251.5 -4 126.3 50 0 Z",
    to: "M 0 0 L 450 1 C 508 97 508 221.8 450 375.5 C 392 529.2 408.7 654.3 500 751 L 50 751 C -6.7 600.3 -3.3 475.2 60 375.5 C 123.3 275.8 103.3 150.7 0 0 Z",
  },
  3: {
    viewBox: "0 0 500 750",
    initial: "M 0 50 L 500 0 C 470 200 470 550 500 700 L 0 750 C 30 550 30 200 0 50 Z",
    to: "M 0 0 L 470 50 C 530 250 380 500 500 750 L 30 700 C -30 500 120 250 0 0 Z",
  },
};

export default function ScrollMorphImage({
  src,
  alt,
  width = 500,
  height = 750,
  aspectRatio = "3/4",
  variant = 1,
  className = "",
  style = {},
}: ScrollMorphImageProps) {
  const clipId = useId().replace(/:/g, "_");
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
  }, [variant]);

  const clip = clipVariants[variant] || clipVariants[1];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        borderRadius: "20px",
        ...style,
      }}
      className={`scroll-morph-img-wrap ${className}`}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={clip.viewBox}
        preserveAspectRatio="none"
        aria-label={alt}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <title>{alt}</title>
        <defs>
          <clipPath id={clipId}>
            <path
              ref={pathRef}
              d={clip.initial}
              data-path-to={clip.to}
              vectorEffect="non-scaling-stroke"
              className="path-anim"
            />
          </clipPath>
        </defs>
        <image
          clipPath={`url(#${clipId})`}
          href={src}
          x="0"
          y="0"
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%" }}
        />
      </svg>
    </div>
  );
}
