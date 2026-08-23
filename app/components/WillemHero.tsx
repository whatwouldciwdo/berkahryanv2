"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const pillarItems = [
  {
    id: "telescopic",
    label: "TELESCOPIC MOBILE CRANE",
    title: "Telescopic Mobile Crane.",
    slug: "telescopic-mobile-crane",
    tagline: "Mobilitas Tinggi & Jangkauan Boom Teleskopik Presisi",
    desc: "We engineer heavy lifting solutions for plant maintenance, structural steel erection, and industrial relocation with precision boom reach up to 80+ meters.",
    image: "/images/services/telescopic-mobile/sewa-telescopic-mobile-crane-sany-cilegon.webp",
    features: "VERSATILE • 10 - 250 TON • HIGH MOBILITY",
  },
  {
    id: "crawler",
    label: "CRAWLER CRANE",
    title: "Crawler Crane Heavy Lift.",
    slug: "crawler-crane",
    tagline: "Kapasitas Beban Ekstrem & Stabilitas Lahan Kerja",
    desc: "Heavy-duty lattice boom crawler crane for mega infrastructure projects, refinery turnarounds, and power plant heavy module lifting on soft ground terrain.",
    image: "/images/services/crawler-crane/sewa-crawler-crane-sany-cilegon.webp",
    features: "HEAVY LIFTING • HIGH STABILITY • LATTICE BOOM",
  },
  {
    id: "roughter",
    label: "ROUGHTER CRANE 4X4",
    title: "Roughter Crane 4x4.",
    slug: "roughter-crane",
    tagline: "Kemampuan All-Terrain & Lahan Sempit Industri",
    desc: "Compact all-wheel steering 4x4 rough terrain crane engineered for tight spaces, petrochemical plant turnarounds, and rugged jobsite conditions.",
    image: "/images/services/roughter-crane/sewa-roughter-crane-50-ton-cilegon.png",
    features: "ALL-TERRAIN 4X4 • COMPACT • 4-WHEEL STEERING",
  },
  {
    id: "forklift",
    label: "FORKLIFT & LOGISTICS",
    title: "Forklift & Heavy Handling.",
    slug: "forklift-rental",
    tagline: "Penanganan Material Pabrik & Gudang 3 s/d 25 Ton",
    desc: "Heavy-duty diesel forklift fleet and industrial logistics tractors for seamless machinery moving, warehouse container handling, and port operations.",
    image: "/images/services/forklift/rental-forklift-heavy-duty-cilegon.png",
    features: "PLANT HANDLING • 3 - 25 TON • INDOOR & OUTDOOR",
  },
  {
    id: "roadplate",
    label: "STEEL ROAD PLATE",
    title: "Steel Road Plate.",
    slug: "trailer-logistics-road-plate",
    tagline: "Stabilisasi Lahan & Proteksi Akses Alat Berat",
    desc: "Heavy-duty steel road plates for ground stabilization, ensuring smooth transit for heavy cranes, lowbed trailers, and transport vehicles on muddy terrain.",
    image: "/images/services/roughter-crane/sewa-roughter-crane-70-ton-cilegon.png",
    features: "GROUND PROTECTION • HEAVY STEEL • MUD ACCESS",
  },
];

export default function WillemHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const isTouchDevice = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      isTouchDevice.current = window.matchMedia("(pointer: coarse)").matches;
    }
  }, []);

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
      const heroOverlayElements = container.querySelectorAll<HTMLElement>(
        ".loud-header, .loud-center, .loud-pillars, .loud-cta-wrap, .loud-orbit-dot"
      );

      gsap.set(loadingLetter, { yPercent: 100 });
      gsap.set(box, { width: "0em" });
      gsap.set(growingImage, { width: "0%" });
      if (frame1) gsap.set(frame1, { opacity: 1 });
      if (frame2) gsap.set(frame2, { opacity: 1 });
      if (frame3) gsap.set(frame3, { opacity: 1 });
      gsap.set(heroOverlayElements, { opacity: 0, y: 25 });

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.inOut",
        },
        onStart: () => {
          container.style.opacity = "1";
          container.style.visibility = "visible";
        },
      });

      tl.fromTo(
        loadingLetter,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.03, duration: 1.1 }
      );

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

      if (frame1) {
        tl.to(frame1, { opacity: 0, duration: 0.35, ease: "power1.inOut" }, "+=1.8");
      }

      if (frame2) {
        tl.to(frame2, { opacity: 0, duration: 0.25, ease: "power1.inOut" }, "+=0.35");
      }

      if (frame3) {
        tl.to(frame3, { opacity: 0, duration: 0.25, ease: "power1.inOut" }, "+=0.35");
      }

      const boxInner = container.querySelectorAll<HTMLElement>(".willem-loader__box-inner");

      tl.to(
        growingImage,
        {
          width: "140vw",
          height: "100vh",
          left: "50%",
          xPercent: -50,
          duration: 1.8,
          ease: "expo.inOut",
        },
        "+=0.1"
      );

      tl.to(
        box,
        {
          width: "140vw",
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
            width: "140vw",
            height: "100vh",
            duration: 1.8,
            ease: "expo.inOut",
          },
          "<"
        );
      }

      if (heroOverlayElements.length) {
        tl.to(
          heroOverlayElements,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.1,
            ease: "power2.out",
          },
          ">+0.15"
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  const activeData = hoveredPillar !== null ? pillarItems[hoveredPillar] : null;

  return (
    <section
      ref={containerRef}
      data-scroll-reveal="off"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        background: "#E9E6E7",
        color: "#ffffff",
        overflow: "hidden",
        margin: "0",
        padding: "0",
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
                      alt="Telescopic Mobile Crane"
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
                      alt="Roughter Crane"
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
                    src="/hero-rental-crane-cilegon-berkah-ryan.webp"
                    alt="Jasa sewa crane Cilegon oleh CV Berkah Ryan"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 80%",
                      zIndex: 1,
                      filter: activeData ? "blur(16px) brightness(0.62) scale(1.05)" : "none",
                      transition: "filter 0.45s ease, transform 0.45s ease",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: activeData ? "rgba(8, 8, 10, 0.58)" : "rgba(8, 8, 10, 0.38)",
                      transition: "background 0.4s ease",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(8, 8, 10, 0.62) 0%, rgba(8, 8, 10, 0.28) 45%, rgba(8, 8, 10, 0.72) 100%)",
                      zIndex: 3,
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

      <div className="loud-overlay-wrap">
        <header className="loud-header">
          <div className="loud-brand-wrap">
            <Link href="/" className="loud-brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/berkahryan-logo.svg"
                alt="Logo CV Berkah Ryan"
                className="loud-brand-img"
              />
              <span className="loud-logo-title">BERKAH RYAN.</span>
            </Link>
            <span className="loud-brand-desc">Heavy Crane & Rigging Specialist.</span>
          </div>

          <nav className="loud-nav-links">
            <Link href="/layanan" className="loud-nav-item">
              Layanan.
            </Link>
            <Link href="/armada" className="loud-nav-item">
              Armada.
            </Link>
            <Link href="/proyek" className="loud-nav-item">
              Proyek.
            </Link>
            <Link href="/tentang-kami" className="loud-nav-item">
              K3 & SIA/SIO.
            </Link>
            <Link href="/kontak" className="loud-nav-item">
              Kontak.
            </Link>
          </nav>
        </header>

        {!activeData && <div className="loud-orbit-dot" />}

        <div className="loud-center">
          <div
            className={`loud-main-title ${activeData ? "is-hovered" : ""}`}
            aria-hidden="true"
          >
            {activeData ? activeData.title : "We lift heavy industries."}
          </div>


          <h1 className="loud-sub-title">
            {activeData
              ? activeData.tagline
              : "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang — Kapasitas 3 s/d 600 Ton"}
          </h1>


          {activeData && (
            <div className="loud-mobile-preview-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeData.image}
                alt={activeData.title}
                className="loud-preview-img-seamless"
              />
            </div>
          )}
        </div>

        {activeData && (
          <div className="loud-preview-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeData.image}
              alt={activeData.title}
              className="loud-preview-img-seamless"
            />
          </div>
        )}

        <div className="loud-pillars">
          {pillarItems.map((item, index) => {
            const isHovered = hoveredPillar === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => {
                  if (!isTouchDevice.current) setHoveredPillar(index);
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice.current) setHoveredPillar(null);
                }}
                onClick={() => {
                  setHoveredPillar((prev) => (prev === index ? null : index));
                }}
                className={`loud-pillar-row ${isHovered ? "is-active" : ""}`}
              >
                <span className="loud-pillar-label">{item.label}</span>
                <Link
                  href={`/layanan/${item.slug}`}
                  className="loud-pillar-arrow-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="loud-arrow-icon">→</span>
                  <span className="loud-arrow-text">LIHAT LAYANAN</span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="loud-cta-wrap">
          {activeData ? (
            <div className="loud-hover-desc-seamless">
              <div className="loud-desc-eyebrow">
                {activeData.features}
              </div>
              <p className="loud-desc-text">{activeData.desc}</p>
              <Link
                href={`/layanan/${activeData.slug}`}
                className="loud-desc-btn"
              >
                Cek Spesifikasi Armada & Rent →
              </Link>
            </div>
          ) : (
            <a
              href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20dan%20sewa%20crane."
              target="_blank"
              rel="noopener noreferrer"
              className="loud-pill-btn"
            >
              <span>Sewa Crane Sekarang</span>
              <span className="loud-btn-arrow">↗</span>
            </a>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .willem-loader {
          color: #5E5653;
          background: #E9E6E7;
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
          font-size: clamp(1.75rem, 8.5vw, 13rem);
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
          margin: 0 0.04em;
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

        /* ── LOUD STUDIO OVERLAY STYLES ── */
        .loud-overlay-wrap {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.25rem 3.5rem;
          box-sizing: border-box;
          pointer-events: none;
        }

        /* Keep hero copy hidden before GSAP initializes to prevent a first-paint flash. */
        .loud-header,
        .loud-center,
        .loud-pillars,
        .loud-cta-wrap,
        .loud-orbit-dot {
          opacity: 0;
          transform: translateY(25px);
        }

        .loud-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          pointer-events: auto;
        }

        .loud-brand-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .loud-brand-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ffffff;
        }

        .loud-brand-img {
          height: 28px;
          width: auto;
          object-fit: contain;
          display: inline-block;
          filter: brightness(0) invert(1);
          transition: filter 0.35s ease, transform 0.35s ease;
        }

        .loud-brand-logo:hover .loud-brand-img {
          filter: none !important;
          transform: scale(1.08);
        }

        .loud-logo-title {
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .loud-brand-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: -0.01em;
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          padding-left: 0.75rem;
          display: inline-block;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
        }

        .loud-nav-links {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }

        .loud-nav-item {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          text-decoration: none;
          transition: color 0.25s ease;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
        }

        .loud-nav-item:hover {
          color: var(--accent, #AB978C);
        }

        .loud-time-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.75rem;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.45rem 0.9rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .loud-city {
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .loud-clock {
          color: #ffffff;
          font-weight: 600;
        }

        .loud-weather-icon {
          color: #e8a020;
          font-size: 0.85rem;
        }

        .loud-orbit-dot {
          position: absolute;
          top: 42%;
          left: 9%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8), 0 0 40px 10px rgba(255, 255, 255, 0.3);
          pointer-events: none;
          animation: orbitPulse 4s infinite ease-in-out;
        }

        @keyframes orbitPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        /* ── CENTER / LEFT-ALIGNED HEADLINE & DYNAMIC TRANSITION ── */
        .loud-center {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin: auto 0 auto 0;
          padding: 1.5rem 0;
          pointer-events: none;
          transition: all 0.35s ease;
          max-width: 60vw;
        }

        .loud-main-title {
          font-family: var(--font-mono), monospace;
          font-size: clamp(2.4rem, 6.2vw, 5.5rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          color: #ffffff;
          line-height: 1.05;
          margin: 0;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.95), 0 0 60px rgba(0, 0, 0, 0.9);
          max-width: 100%;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .loud-main-title.is-hovered {
          font-size: clamp(2.2rem, 5.5vw, 4.8rem);
          color: #ffffff;
        }

        .loud-sub-title {
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
          color: #ffffff;
          max-width: 580px;
          margin: 1.25rem 0 0;
          line-height: 1.6;

          font-family: var(--font-sans), sans-serif;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 0, 0, 0.9);
          font-weight: 500;
        }

        .loud-mobile-preview-wrap {
          display: none;
        }

        /* ── UPPER-RIGHT FLOATING PREVIEW IMAGE (SEAMLESS NO CARD) ── */
        .loud-preview-image-wrap {
          position: absolute;
          top: 6.5rem;
          right: 3.5rem;
          width: clamp(300px, 32vw, 480px);
          height: clamp(200px, 22vw, 320px);
          z-index: 12;
          pointer-events: none;
          animation: previewFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes previewFadeIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .loud-preview-img-seamless {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.88));
          display: block;
        }

        /* ── LOWER-LEFT PILLARS & STABLE FLICKER-FREE HOVER ── */
        .loud-pillars {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #ffffff;
          text-transform: uppercase;
          pointer-events: auto;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .loud-pillar-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: transform 0.25s ease, opacity 0.25s ease;
          opacity: 0.85;
          width: fit-content;
          position: relative;
        }

        .loud-pillar-row:hover,
        .loud-pillar-row.is-active {
          opacity: 1;
          transform: translateX(4px);
        }

        .loud-pillar-label {
          transition: color 0.25s ease, font-weight 0.25s ease;
          white-space: nowrap;
        }

        .loud-pillar-row.is-active .loud-pillar-label {
          color: #ffffff;
          font-weight: 800;
        }

        .loud-pillar-arrow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.7rem;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 100px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          text-decoration: none;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          white-space: nowrap;
        }

        .loud-pillar-row.is-active .loud-pillar-arrow-btn {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        }

        .loud-pillar-arrow-btn:hover {
          background: #ffffff;
          color: #08080a;
        }

        .loud-arrow-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }

        .loud-pillar-arrow-btn:hover .loud-arrow-icon {
          background: #08080a;
          color: #ffffff;
        }

        /* ── LOWER-RIGHT CTA & HOVER SPECIFICATION PANEL (SEAMLESS NO CARD) ── */
        .loud-cta-wrap {
          position: absolute;
          bottom: 2.5rem;
          right: 3.5rem;
          pointer-events: auto;
          max-width: 440px;
        }

        .loud-hover-desc-seamless {
          padding: 0;
          margin: 0;
          animation: descFadeIn 0.3s ease;
        }

        @keyframes descFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .loud-desc-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.65rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .loud-desc-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-family: var(--font-sans), sans-serif;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .loud-desc-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          padding-bottom: 0.2rem;
          transition: border-color 0.2s ease, color 0.2s ease;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .loud-desc-btn:hover {
          border-color: #ffffff;
          color: var(--accent, #AB978C);
        }

        .loud-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(0, 0, 0, 0.45);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.55);
          border-radius: 100px;
          padding: 0.75rem 1.65rem;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .loud-pill-btn:hover {
          background: #ffffff;
          color: #08080a;
          border-color: #ffffff;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .loud-btn-arrow {
          font-size: 1.1rem;
          transition: transform 0.25s ease;
        }

        .loud-pill-btn:hover .loud-btn-arrow {
          transform: translate(2px, -2px);
        }

        /* ── TABLET / DESKTOP RESPONSIVE ── */
        @media screen and (max-width: 1024px) {
          .loud-overlay-wrap {
            padding: 1.75rem 2rem;
          }
          .loud-nav-links {
            display: none;
          }
          .loud-cta-wrap {
            right: 2rem;
            bottom: 2rem;
          }
          .loud-preview-image-wrap {
            display: none;
          }
          .loud-brand-desc {
            display: none;
          }
          .loud-center {
            max-width: 100vw;
          }
        }

        /* ── MOBILE OPTIMIZED STABLE TOUCH & HOVER RESPONSIVE ── */
        @media screen and (max-width: 768px) {
          .loud-overlay-wrap {
            padding: 1.25rem 1rem;
            justify-content: space-between;
          }

          .loud-header {
            gap: 0.5rem;
          }

          .loud-brand-logo {
            font-size: 0.95rem;
          }

          .loud-logo-title {
            font-size: 0.95rem;
          }

          .loud-time-badge {
            font-size: 0.65rem;
            padding: 0.3rem 0.6rem;
          }

          .loud-city {
            display: none;
          }

          .loud-orbit-dot {
            display: none;
          }

          .loud-center {
            margin: 0.75rem 0;
            padding: 0;
            max-width: 100%;
          }

          .loud-main-title {
            font-size: clamp(1.75rem, 7.5vw, 2.6rem);
            line-height: 1.1;
          }

          .loud-main-title.is-hovered {
            font-size: clamp(1.65rem, 7vw, 2.4rem);
          }

          .loud-sub-title {
            font-size: 0.85rem;
            margin-top: 0.65rem;
            line-height: 1.5;
          }

          .loud-mobile-preview-wrap {
            display: block;
            width: 100%;
            height: 140px;
            margin-top: 0.75rem;
            pointer-events: none;
          }

          .loud-pillars {
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
            width: 100%;
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
          }

          .loud-pillar-row {
            padding: 0;
            background: transparent;
            border: none;
            border-radius: 0;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            font-size: 0.72rem;
            opacity: 0.85;
          }

          .loud-pillar-row.is-active {
            background: transparent;
            color: #ffffff;
            border: none;
            transform: translateX(4px);
            opacity: 1;
          }

          .loud-pillar-row.is-active .loud-pillar-label {
            color: #ffffff;
            font-weight: 800;
          }

          .loud-pillar-arrow-btn {
            display: none;
          }

          .loud-cta-wrap {
            position: static;
            width: 100%;
            margin-top: 0.5rem;
            max-width: 100%;
          }

          .loud-hover-desc-seamless {
            width: 100%;
          }

          .loud-desc-text {
            font-size: 0.82rem;
            margin-bottom: 0.5rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .loud-pill-btn {
            width: 100%;
            justify-content: center;
            padding: 0.7rem 1.25rem;
            font-size: 0.85rem;
          }
        }
      `,
        }}
      />
    </section>
  );
}
