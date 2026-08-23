"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FleetUnitImageProps {
  images: string[];
  alt: string;
}

export default function FleetUnitImage({ images, alt }: FleetUnitImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      style={{
        position: "relative",
        width: "290px",
        height: "165px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: "transparent",
      }}
      className="fleet-unit-img-wrap"
    >
      {images.map((img, idx) => {
        const isSany = img.toLowerCase().includes("sany") || img.includes("STC250C5");
        const isForklift = img.toLowerCase().includes("forklift");
        const isRoughter = img.toLowerCase().includes("roughter");
        const isCrawler = img.toLowerCase().includes("crawler");
        const isCutout = img.includes("cutout") || img.includes("zoomlion") || img.includes("unic") || img.endsWith(".png");
        const scaleFactor = isSany ? 1.38 : isForklift ? 1.28 : isRoughter ? 1.25 : isCrawler ? 1.25 : isCutout ? 1.22 : 1;

        return (
          <div
            key={img + idx}
            style={{
              position: "absolute",
              inset: 0,
              opacity: idx === currentIndex ? 1 : 0,
              transform: idx === currentIndex ? `scale(${scaleFactor})` : `scale(${scaleFactor * 0.94})`,
              transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
              pointerEvents: idx === currentIndex ? "auto" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={img}
              alt={`${alt} - Foto ${idx + 1}`}
              fill
              sizes="340px"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 14px 28px rgba(94, 86, 83, 0.22))",
                transition: "transform 0.35s ease, filter 0.35s ease",
              }}
              className={`fleet-unit-img ${isSany ? "fleet-unit-sany" : ""}`}
            />
          </div>
        );
      })}

      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "-4px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "5px",
            zIndex: 5,
          }}
        >
          {images.map((_, dotIdx) => (
            <span
              key={dotIdx}
              style={{
                width: dotIdx === currentIndex ? "16px" : "6px",
                height: "4px",
                borderRadius: "2px",
                background: dotIdx === currentIndex ? "var(--dark-slate)" : "rgba(94, 86, 83, 0.3)",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
