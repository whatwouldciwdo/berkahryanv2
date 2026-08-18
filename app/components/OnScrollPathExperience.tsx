"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OnScrollPathExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = containerRef.current;
    if (!root) return;

    const paths = Array.from(root.querySelectorAll<SVGPathElement>("path.path-anim"));
    if (paths.length === 0) return;

    const ctx = gsap.context(() => {
      paths.forEach((el) => {
        const svgEl = el.closest("svg");
        const pathTo = el.dataset.pathTo;
        if (!svgEl || !pathTo) return;

        gsap.timeline({
          scrollTrigger: {
            trigger: svgEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }).to(el, {
          ease: "none",
          attr: { d: pathTo },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="on-scroll-path-wrapper">
      {/* ── 1. FULL-BLEED INDUSTRIAL PHOTO STRIP WITH DYNAMIC TOP/BOTTOM LIQUID MASKS ── */}
      <div
        className="content__bg content__bg--bottom"
        style={{
          backgroundImage: "url(/crane_rigging_site.jpg)",
        }}
      >
        {/* Top inverted curve mask */}
        <svg
          className="separator separator--up"
          width="100%"
          height="100%"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <title>Top Curve Separator</title>
          <path
            className="separator__path path-anim"
            data-path-to="M 0 0 C 35 21 70 0 100 0 L 0 0 Z"
            vectorEffect="non-scaling-stroke"
            d="M 0 0 C 37 0 70 0 100 0 L 0 0 Z"
          />
        </svg>

        {/* Center overlay banner */}
        <div className="content__title-box">
          <span className="content__title-pre">Standar K3 & Keselamatan</span>
          <h2 className="content__title-main">Zero Accident</h2>
          <p className="content__title-sub">
            Bukan sekadar slogan — sertifikasi resmi Kemnaker RI & kepatuhan tanpa kompromi pada setiap pengangkatan.
          </p>
        </div>

        {/* Bottom inverted curve mask */}
        <svg
          className="separator separator--down"
          width="100%"
          height="100%"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <title>Bottom Curve Separator</title>
          <path
            className="separator__path path-anim"
            data-path-to="M 0 0 C 29 6 78 17 100 0 L 100 10 H 0 Z"
            vectorEffect="non-scaling-stroke"
            d="M 0 0 C 18 1 61 9 100 0 L 100 10 H 0 Z"
          />
        </svg>
      </div>

      {/* ── 2. TWO-SIDED EDITORIAL + DYNAMIC MORPHING IMAGE CLIP ── */}
      <div className="content__sides-wrapper">
        <div className="container">
          <div className="content__sides">
            {/* Left text column */}
            <div className="content__text">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "9999px",
                    background: "rgba(42, 157, 110, 0.12)",
                    border: "1px solid rgba(42, 157, 110, 0.35)",
                    color: "#1b6d4b",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  ✓ Sertifikasi K3 & HSE Resmi
                </span>
                <span
                  style={{
                    color: "var(--text-3)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Kemnaker RI
                </span>
              </div>

              <h3 className="content__side-heading">
                Ketelitian Ekstrem. Sebelum Crane Menyentuh Site.
              </h3>

              <p className="content__side-p">
                Setiap armada melalui Riksa Uji berkala oleh PJK3 terakreditasi dengan Surat Izin Layak Operasi (SIA/SILO) aktif. Seluruh operator kami mengantongi Surat Izin Operasi (SIO) Kelas I, II, dan III yang terdaftar di Kemnaker RI.
              </p>

              <p className="content__side-p">
                Tim engineering menyiapkan Lift Plan komprehensif: kalkulasi ground bearing pressure, radius manuver boom, hingga konfigurasi Steel Road Plate untuk mencegah penurunan tanah di area labil.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link
                  href="/tentang-kami"
                  className="btn btn-primary"
                  style={{
                    padding: "0.85rem 1.75rem",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  Profil & Legalitas Perusahaan →
                </Link>
                <a
                  href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20K3%20dan%20Lift%20Plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{
                    padding: "0.85rem 1.75rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  Konsultasi HSE & Lift Plan
                </a>
              </div>
            </div>

            {/* Right side: Dynamic morphing SVG clip image */}
            <div className="content__clip-holder">
              <svg
                className="image-clip"
                viewBox="0 0 500 750"
                preserveAspectRatio="none"
              >
                <title>Operator crane bersertifikat K3</title>
                <defs>
                  <clipPath id="codropsShape1">
                    <path
                      className="path-anim"
                      data-path-to="M 0 0 L 500 0 C 331 608 485 551 500 750 L 0 750 C 120 281 7 296 0 0 Z"
                      d="M 0 0 L 500 0 C 500 599.6 500 677.1 500 750 L 0 750 C 0 205 0 105 0 0 Z"
                      vectorEffect="non-scaling-stroke"
                    />
                  </clipPath>
                </defs>
                <image
                  clipPath="url(#codropsShape1)"
                  href="/expert_operator.png"
                  x="0"
                  y="0"
                  width="500"
                  height="750"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. FULL-WIDTH MULTI-LAYER CONTOUR TOPOGRAPHY WAVE LINES ── */}
      <div className="content__contour-section">
        <svg
          className="separator separator--solo separator--line"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <title>Topographic contour waves</title>
          <path
            className="path-anim wave-1"
            vectorEffect="non-scaling-stroke"
            data-path-to="M 0 35 C 280 -15, 520 85, 800 25 C 1040 -25, 1260 75, 1440 40"
            d="M 0 35 C 240 75, 480 -15, 720 45 C 960 95, 1200 15, 1440 40"
          />
          <path
            className="path-anim wave-2"
            vectorEffect="non-scaling-stroke"
            data-path-to="M 0 90 C 260 135, 540 35, 820 115 C 1080 45, 1280 135, 1440 90"
            d="M 0 90 C 200 45, 500 145, 760 75 C 1000 25, 1240 125, 1440 90"
          />
          <path
            className="path-anim wave-3"
            vectorEffect="non-scaling-stroke"
            data-path-to="M 0 145 C 260 95, 500 205, 780 125 C 1020 215, 1240 105, 1440 145"
            d="M 0 145 C 220 190, 460 95, 700 165 C 940 215, 1180 115, 1440 145"
          />
          <path
            className="path-anim wave-4"
            vectorEffect="non-scaling-stroke"
            data-path-to="M 0 195 C 280 230, 560 155, 840 215 C 1060 165, 1300 225, 1440 195"
            d="M 0 195 C 240 150, 480 220, 740 175 C 980 135, 1220 205, 1440 195"
          />
        </svg>
      </div>

      <style jsx>{`
        .on-scroll-path-wrapper {
          position: relative;
          background: var(--bg-main);
          overflow: hidden;
        }

        .content__bg {
          width: 100%;
          min-height: 70vh;
          position: relative;
          display: grid;
          place-items: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          padding: 8rem 1.5rem;
        }

        .content__bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(18, 16, 15, 0.62);
          z-index: 1;
        }

        .separator {
          display: block;
          position: absolute;
          z-index: 10;
          pointer-events: none;
          width: 100%;
          height: clamp(80px, 12vw, 150px);
          fill: var(--bg-main);
        }

        .separator--up {
          top: -1px;
        }

        .separator--down {
          bottom: -1px;
        }

        .content__title-box {
          position: relative;
          z-index: 5;
          text-align: center;
          max-width: 850px;
          color: #ffffff;
        }

        .content__title-pre {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ab978c;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .content__title-main {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1.25rem;
        }

        .content__title-sub {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          color: #e5e2df;
          line-height: 1.6;
          max-width: 620px;
          margin: 0 auto;
        }

        .content__sides-wrapper {
          padding: 6rem 0 3rem;
          background: var(--bg-main);
        }

        .content__sides {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5vw;
          align-items: center;
        }

        .content__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .content__side-heading {
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--text-1);
          margin-bottom: 1.5rem;
        }

        .content__side-p {
          font-size: 1.02rem;
          color: var(--text-2);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .content__clip-holder {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-clip {
          width: 100%;
          max-width: 440px;
          height: auto;
          aspect-ratio: 500 / 750;
          display: block;
          filter: drop-shadow(0 20px 40px rgba(94, 86, 83, 0.18));
        }

        .content__contour-section {
          width: 100%;
          padding: 1.5rem 0 4rem;
          overflow: hidden;
        }

        .separator--solo {
          position: relative;
          width: 100%;
          height: clamp(120px, 16vw, 220px);
          display: block;
        }

        .separator--line path {
          fill: none;
          stroke: var(--accent, #ab978c);
          stroke-width: 1.35px;
        }

        .wave-1 { opacity: 0.35; }
        .wave-2 { opacity: 0.55; }
        .wave-3 { opacity: 0.8; }
        .wave-4 { opacity: 1; }

        @media (max-width: 860px) {
          .content__sides {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .image-clip {
            max-width: 340px;
          }
        }
      `}</style>
    </div>
  );
}
