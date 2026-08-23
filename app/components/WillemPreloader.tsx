"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function WillemPreloader() {
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Lock body scroll during animation
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const loadingLetter = container.querySelectorAll<HTMLElement>(".willem__letter");
      const box = container.querySelectorAll<HTMLElement>(".willem-loader__box");
      const growingImage = container.querySelectorAll<HTMLElement>(".willem__growing-image");
      const headingStart = container.querySelectorAll<HTMLElement>(".willem__h1-start");
      const headingEnd = container.querySelectorAll<HTMLElement>(".willem__h1-end");
      const frame1 = container.querySelector<HTMLElement>(".willem__cover-image-extra.is--1");
      const frame2 = container.querySelector<HTMLElement>(".willem__cover-image-extra.is--2");
      const frame3 = container.querySelector<HTMLElement>(".willem__cover-image-extra.is--3");
      const headerLetter = container.querySelectorAll<HTMLElement>(".willem__letter-white");
      const navItems = container.querySelectorAll<HTMLElement>(".willen-nav .willem-nav__link, .osmo-credits__p");

      gsap.set(loadingLetter, { yPercent: 110 });
      gsap.set(headerLetter, { yPercent: 110 });
      gsap.set(navItems, { yPercent: 110 });
      gsap.set(box, { width: "0em" });
      gsap.set(growingImage, { width: "0%" });
      if (frame1) gsap.set(frame1, { opacity: 1 });
      if (frame2) gsap.set(frame2, { opacity: 1 });
      if (frame3) gsap.set(frame3, { opacity: 1 });

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.inOut",
        },
        onStart: () => {
          container.style.opacity = "1";
          container.style.visibility = "visible";
        },
        onComplete: () => {
          // Fade out preloader and restore page scroll
          gsap.to(container, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              document.body.style.overflow = "";
              setIsCompleted(true);
            },
          });
        },
      });

      if (loadingLetter.length) {
        tl.to(loadingLetter, {
          yPercent: 0,
          stagger: 0.03,
          duration: 1.2,
        });
      }

      if (box.length) {
        tl.to(
          box,
          {
            width: "1.1em",
            duration: 1.25,
          },
          "< 0.8"
        );
      }

      if (growingImage.length) {
        tl.to(
          growingImage,
          {
            width: "100%",
            duration: 1.25,
          },
          "<"
        );
      }

      if (headingStart.length) {
        tl.to(
          headingStart,
          {
            x: "-0.08em",
            duration: 1.25,
          },
          "<"
        );
      }

      if (headingEnd.length) {
        tl.to(
          headingEnd,
          {
            x: "0.08em",
            duration: 1.25,
          },
          "<"
        );
      }

      if (frame1) {
        tl.to(frame1, {
          opacity: 0,
          duration: 0.35,
          ease: "power1.inOut",
        }, "+=1.8");
      }

      if (frame2) {
        tl.to(frame2, {
          opacity: 0,
          duration: 0.25,
          ease: "power1.inOut",
        }, "+=0.35");
      }

      if (frame3) {
        tl.to(frame3, {
          opacity: 0,
          duration: 0.25,
          ease: "power1.inOut",
        }, "+=0.35");
      }

      const boxInner = container.querySelectorAll<HTMLElement>(".willem-loader__box-inner");

      if (growingImage.length) {
        tl.to(
          growingImage,
          {
            width: "100vw",
            height: "100dvh",
            duration: 1.8,
            ease: "expo.inOut",
          },
          "+=0.1"
        );
      }

      if (box.length) {
        tl.to(
          box,
          {
            width: "115vw",
            height: "100dvh",
            duration: 1.8,
            ease: "expo.inOut",
          },
          "<"
        );
      }

      if (boxInner.length) {
        tl.to(
          boxInner,
          {
            height: "100dvh",
            duration: 1.8,
            ease: "expo.inOut",
          },
          "<"
        );
      }

      if (headerLetter.length) {
        tl.to(
          headerLetter,
          {
            yPercent: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.025,
          },
          "< 0.9"
        );
      }

      if (navItems.length) {
        tl.to(
          navItems,
          {
            yPercent: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.06,
          },
          "<"
        );
      }

      // Pause for 0.7s so user can see the full reveal
      tl.to({}, { duration: 0.7 });
    }, container);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, []);

  if (isCompleted) return null;

  return (
    <div
      ref={containerRef}
      className="willem-preloader"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 999999,
        background: "#E9E6E7",
        color: "#5E5653",
        overflow: "hidden",
      }}
    >
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

                  <div
                    className="willem__cover-image-extra is--2"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#E9E6E7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0",
                      overflow: "hidden",
                      zIndex: 7,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services/telescopic-mobile/sewa-telescopic-mobile-crane-sany-cilegon.webp"
                      alt="Telescopic Mobile Crane - CV Berkah Ryan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transform: "scale(1.45)",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    className="willem__cover-image-extra is--3"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#E9E6E7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2%",
                      overflow: "hidden",
                      zIndex: 5,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services/roughter-crane/sewa-roughter-crane-50-ton-cilegon.png"
                      alt="Roughter Crane - CV Berkah Ryan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transform: "scale(1.18)",
                        display: "block",
                      }}
                    />
                  </div>

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
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(12, 12, 14, 0.35) 0%, rgba(12, 12, 14, 0.15) 50%, rgba(12, 12, 14, 0.85) 100%)",
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

      <div className="willem-header__content">
        <div className="willem-header__top">
          <nav className="willen-nav">
            <div className="willem-nav__start">
              <span className="willem-nav__link" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                CV. BERKAH RYAN ©
              </span>
            </div>
            <div className="willem-nav__end">
              <div className="willem-nav__links">
                <span className="willem-nav__link">Crane,</span>
                <span className="willem-nav__link">Forklift,</span>
                <span className="willem-nav__link">Rigging</span>
              </div>
              <div className="willem-nav__cta">
                <span className="willem-nav__link" style={{ color: "var(--accent, #e8a020)", fontWeight: 700 }}>
                  Memuat Sistem...
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div className="willem-header__bottom">
          <div className="willem__h1-final">
            <div className="willem__h1-line">
              <span className="willem__letter-white">B</span>
              <span className="willem__letter-white">E</span>
              <span className="willem__letter-white">R</span>
              <span className="willem__letter-white">K</span>
              <span className="willem__letter-white">A</span>
              <span className="willem__letter-white">H</span>
              <span className="willem__letter-white is--space"> </span>
              <span className="willem__letter-white">R</span>
              <span className="willem__letter-white">Y</span>
              <span className="willem__letter-white">A</span>
              <span className="willem__letter-white">N</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.5rem",
            }}
          >
            <p className="osmo-credits__p">
              Spesialis Rental Derek Crane 3 s/d 600 Ton • Cilegon, Banten
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .willem-loader {
          color: #f0ede8;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 10;
          pointer-events: none;
        }

        .willem__h1 {
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          font-size: clamp(3rem, 11vw, 12rem);
          font-weight: 850;
          line-height: 0.85;
          letter-spacing: -0.04em;
          display: flex;
          position: relative;
          font-family: var(--font-heading), var(--font-display), system-ui, sans-serif;
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

        .willem-header__content {
          flex-flow: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          min-height: 100dvh;
          height: 100dvh;
          padding: 3.5rem 4rem;
          display: flex;
          position: relative;
          box-sizing: border-box;
          z-index: 5;
        }

        .willem-header__top {
          width: 100%;
          position: relative;
        }

        .willen-nav {
          display: flex;
          position: relative;
          overflow: hidden;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .willem-nav__start {
          display: flex;
        }

        .willem-nav__end {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .willem-nav__links {
          display: flex;
          gap: 1.25rem;
        }

        .willem-nav__link {
          color: #f0ede8;
          font-size: 1.15rem;
          line-height: 1.3;
          position: relative;
          font-family: var(--font-heading), sans-serif;
          will-change: transform;
        }

        .willem-header__bottom {
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          display: flex;
          position: relative;
          overflow: hidden;
          gap: 2rem;
        }

        .willem__h1-final {
          overflow: hidden;
        }

        .willem__h1-line {
          display: flex;
          font-size: clamp(2.5rem, 8vw, 8.5rem);
          font-weight: 850;
          line-height: 0.9;
          letter-spacing: -0.04em;
          font-family: var(--font-sans), sans-serif;
          color: #ffffff;
        }

        .willem__letter-white {
          display: inline-block;
          position: relative;
          will-change: transform;
        }

        .willem__letter-white.is--space {
          width: 0.3em;
        }

        .osmo-credits__p {
          margin: 0;
          font-family: var(--font-mono), monospace;
          font-size: 0.95rem;
          color: rgba(240, 237, 232, 0.85);
          letter-spacing: 0.02em;
          text-align: right;
          will-change: transform;
        }

        @media screen and (max-width: 991px) {
          .willem-header__content {
            padding: 2rem;
          }
          .willem-nav__end {
            gap: 1.5rem;
          }
          .willem-header__bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .osmo-credits__p {
            text-align: left;
          }
        }

        @media screen and (max-width: 767px) {
          .willem-header__content {
            padding: 1.5rem;
          }
          .willem-nav__links {
            display: none;
          }
          .willem__h1 {
            font-size: clamp(2.2rem, 11vw, 4.5rem);
          }
        }
      `,
        }}
      />
    </div>
  );
}
