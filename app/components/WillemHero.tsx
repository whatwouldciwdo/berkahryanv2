"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WillemHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const loadingLetter = container.querySelectorAll<HTMLElement>(".willem__letter");
      const box = container.querySelectorAll<HTMLElement>(".willem-loader__box");
      const growingImage = container.querySelectorAll<HTMLElement>(".willem__growing-image");
      const headingStart = container.querySelectorAll<HTMLElement>(".willem__h1-start");
      const headingEnd = container.querySelectorAll<HTMLElement>(".willem__h1-end");
      const frame1 = container.querySelector<HTMLElement>(".willem__cover-image-extra.is--1");
      const frame2 = container.querySelector<HTMLElement>(".willem__cover-image-extra.is--2");
      const frame3 = container.querySelector<HTMLElement>(".willem__cover-image-extra.is--3");
      const heroCaption = container.querySelectorAll<HTMLElement>(".hero-bottom-badge, .hero-main-title, .hero-cta-btn");

      // 1. Initial State
      gsap.set(loadingLetter, { yPercent: 100 });
      gsap.set(box, { width: "0em" });
      gsap.set(growingImage, { width: "0%" });
      if (frame1) gsap.set(frame1, { opacity: 1 });
      if (frame2) gsap.set(frame2, { opacity: 1 });
      if (frame3) gsap.set(frame3, { opacity: 1 });
      gsap.set(heroCaption, { opacity: 0, y: 35 });

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.inOut",
        },
        onStart: () => {
          container.style.opacity = "1";
          container.style.visibility = "visible";
        },
      });

      // 2. STEP 1: Letters slide up
      tl.fromTo(
        loadingLetter,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.03, duration: 1.1 }
      );

      // 3. STEP 2: Box opens wider (1.35em) & letters move apart
      tl.fromTo(
        box,
        { width: "0em" },
        { width: "1.35em", duration: 1.2, ease: "power2.out" },
        "< 0.8"
      );

      tl.fromTo(
        growingImage,
        { width: "0%" },
        { width: "100%", duration: 1.2, ease: "power2.out" },
        "<"
      );

      tl.fromTo(
        headingStart,
        { x: "0em" },
        { x: "-0.1em", duration: 1.2, ease: "power2.out" },
        "<"
      );

      tl.fromTo(
        headingEnd,
        { x: "0em" },
        { x: "0.1em", duration: 1.2, ease: "power2.out" },
        "<"
      );

      // 4. STEP 3: Hold and flip through frames: Logo (1) -> Image (2) -> Image (3) -> Hero (4)
      // Frame 1 (Logo): Hold longer (1.8s) so logo is well appreciated
      if (frame1) {
        tl.to(frame1, { opacity: 0, duration: 0.35, ease: "power1.inOut" }, "+=1.8");
      }

      // Frame 2 (Proyek 2): Faster flip (0.35s)
      if (frame2) {
        tl.to(frame2, { opacity: 0, duration: 0.25, ease: "power1.inOut" }, "+=0.35");
      }

      // Frame 3 (Proyek 3): Faster flip (0.35s)
      if (frame3) {
        tl.to(frame3, { opacity: 0, duration: 0.25, ease: "power1.inOut" }, "+=0.35");
      }

      // 5. STEP 4: Box and image zoom to TRUE FULL SCREEN (100vw x 100vh)
      const boxInner = container.querySelectorAll<HTMLElement>(".willem-loader__box-inner");

      tl.to(
        growingImage,
        {
          width: "100vw",
          height: "100vh",
          duration: 1.8,
          ease: "expo.inOut",
        },
        "+=0.1"
      );

      tl.to(
        box,
        {
          width: "115vw",
          height: "100vh",
          duration: 1.8,
          ease: "expo.inOut",
        },
        "<"
      );

      if (boxInner.length) {
        tl.to(
          boxInner,
          {
            height: "100vh",
            duration: 1.8,
            ease: "expo.inOut",
          },
          "<"
        );
      }

      // 6. STEP 5: Caption reveal
      if (heroCaption.length) {
        tl.to(
          heroCaption,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.1,
            ease: "power2.out",
          },
          "< 1.0"
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        background: "#E9E6E7",
        color: "#5E5653",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      {/* ── ZOOMING HERO CONTAINER (TRUE FULL SCREEN) ── */}
      <div className="willem-loader">
        <div className="willem__h1">
          <div className="willem__h1-start">
            <span className="willem__letter">B</span>
            <span className="willem__letter">E</span>
            <span className="willem__letter">R</span>
            <span className="willem__letter">K</span>
            <span className="willem__letter">A</span>
            <span className="willem__letter">H</span>
          </div>

          <div className="willem-loader__box">
            <div className="willem-loader__box-inner">
              <div className="willem__growing-image">
                <div className="willem__growing-image-wrap">
                  {/* FRAME 1: LOGO ONLY (SOLID URBAN SLATE BG #E9E6E7) */}
                  <div
                    className="willem__cover-image-extra is--1"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#E9E6E7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8%",
                      zIndex: 10,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/berkahryan-logo.svg"
                      alt="Logo CV Berkah Ryan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* FRAME 2: PROYEK 2 (z-index 7) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="willem__cover-image-extra is--2"
                    src="/expert_operator.png"
                    alt="Crane Lifting 2"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 7,
                    }}
                  />

                  {/* FRAME 3: PROYEK 3 (z-index 5) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="willem__cover-image-extra is--3"
                    src="/crane_rigging_site.jpg"
                    alt="Heavy Machinery Site"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 5,
                    }}
                  />

                  {/* FRAME 4: FINAL ARMADA HERO (z-index 1) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="willem__cover-image"
                    src="/berkah-ryan-rental-alat-berat-cilegon.webp"
                    alt="CV Berkah Ryan Crane Cilegon"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />
                  {/* Subtle dark film overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(12, 12, 14, 0.15) 0%, rgba(12, 12, 14, 0.05) 50%, rgba(12, 12, 14, 0.8) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="willem__h1-end">
            <span className="willem__letter">R</span>
            <span className="willem__letter">Y</span>
            <span className="willem__letter">A</span>
            <span className="willem__letter">N</span>
          </div>
        </div>
      </div>

      {/* ── MINIMAL IMMERSIVE HERO OVERLAY (NO NAV BAR, CLEAN FULL PICTURE) ── */}
      <div
        style={{
          position: "absolute",
          bottom: "3.5rem",
          left: 0,
          right: 0,
          zIndex: 10,
          pointerEvents: "none",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <div
              className="hero-bottom-badge label"
              style={{
                color: "var(--accent, #AB978C)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                marginBottom: "0.5rem",
              }}
            >
              CV. BERKAH RYAN • CILEGON BANTEN
            </div>
            <h1
              className="hero-main-title"
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Heavy Crane & Rigging Specialists
            </h1>
          </div>

          <div style={{ pointerEvents: "auto" }}>
            <a
              href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20dan%20sewa%20crane."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill hero-cta-btn"
              style={{ padding: "0.85rem 1.85rem", fontSize: "0.95rem" }}
            >
              Konsultasi Sewa 24/7 →
            </a>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .willem-loader {
          color: #5E5653;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 5;
        }

        .willem__h1 {
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          font-size: clamp(3rem, 12vw, 13rem);
          font-weight: 850;
          line-height: 0.85;
          letter-spacing: -0.04em;
          display: flex;
          position: relative;
          font-family: var(--font-sans), system-ui, sans-serif;
        }

        .willem__h1-start {
          justify-content: flex-end;
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .willem__h1-end {
          justify-content: flex-start;
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .willem__letter {
          display: inline-block;
          position: relative;
          will-change: transform;
        }

        .willem-loader__box {
          flex-flow: column;
          justify-content: center;
          align-items: center;
          width: 0;
          height: 1em;
          min-height: 1em;
          align-self: stretch;
          display: flex;
          position: relative;
          margin: 0 0.05em;
        }

        .willem-loader__box-inner {
          justify-content: center;
          align-items: center;
          width: 100%;
          min-width: 1em;
          height: 100%;
          min-height: 1em;
          display: flex;
          position: relative;
        }

        .willem__growing-image {
          justify-content: center;
          align-items: center;
          width: 0%;
          height: 100%;
          display: flex;
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 4px;
        }

        .willem__growing-image-wrap {
          width: 100%;
          min-width: 1em;
          height: 100%;
          position: absolute;
          inset: 0;
        }

        .willem__cover-image,
        .willem__cover-image-extra {
          pointer-events: none;
          object-fit: cover;
          user-select: none;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .willem__cover-image-extra.is--1 { z-index: 10 !important; }
        .willem__cover-image-extra.is--2 { z-index: 7 !important; }
        .willem__cover-image-extra.is--3 { z-index: 5 !important; }
        .willem__cover-image { z-index: 1 !important; }
      `,
        }}
      />
    </section>
  );
}
