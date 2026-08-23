"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

interface NavMenuItem {
  label: string;
  href: string;
  desc?: string;
}

const fullNavMenu: NavMenuItem[] = [
  { label: "Home", href: "/", desc: "Beranda Utama" },
  { label: "Services", href: "/layanan", desc: "Heavy Lift & Rigging Services" },
  { label: "Fleet", href: "/armada", desc: "Telescopic, Crawler, Roughter & Forklift" },
  { label: "Projects", href: "/proyek", desc: "Studi Kasus & Portofolio Lapangan" },
  { label: "About Us", href: "/tentang-kami", desc: "Profil Perusahaan & Standar HSE" },
  { label: "Blog", href: "/blog", desc: "Wawasan & Regulasi Keselamatan" },
  { label: "Contact Us", href: "/kontak", desc: "Konsultasi & Permintaan Penawaran" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // References for GSAP Curved Menu
  const menuRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Scroll detection
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isVisible = !isHome || scrolled;

  // Path generators for curved SVG edge
  const getInitialPath = useCallback((h: number) => {
    return `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h / 2} 100 0`;
  }, []);

  const getTargetPath = useCallback((h: number) => {
    return `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;
  }, []);

  // Build GSAP timeline for curved slide-in menu
  useEffect(() => {
    const menuEl = menuRef.current;
    const pathEl = curvePathRef.current;
    const linksEl = linksRef.current;
    if (!menuEl || !pathEl || !linksEl) return;

    const h = window.innerHeight;
    pathEl.setAttribute("d", getInitialPath(h));

    const linkItems = linksEl.querySelectorAll(".curved-menu-link-row");
    const OFFSCREEN = 580;

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.8, ease: "power3.inOut" },
    });

    tl.fromTo(
      menuEl,
      { x: OFFSCREEN },
      { x: 0 },
      0
    )
      .fromTo(
        pathEl,
        { attr: { d: getInitialPath(h) } },
        { attr: { d: getTargetPath(h) }, duration: 0.9 },
        0
      )
      .fromTo(
        linkItems,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.04, duration: 0.6, ease: "power2.out" },
        0.15
      );

    timelineRef.current = tl;

    const handleResize = () => {
      const freshH = window.innerHeight;
      const progress = tl.progress();
      const open = progress > 0 && !tl.reversed();
      pathEl.setAttribute("d", open ? getTargetPath(freshH) : getInitialPath(freshH));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
    };
  }, [getInitialPath, getTargetPath]);

  // Indicator animation on hover
  const setIndicator = (href: string) => {
    if (!linksRef.current) return;
    const linkItems = linksRef.current.querySelectorAll<HTMLDivElement>(".curved-menu-link-row");
    linkItems.forEach((link) => {
      const dot = link.querySelector<HTMLDivElement>(".curved-menu-dot");
      if (!dot) return;
      const isActive = link.dataset.href === href;
      gsap.to(dot, {
        scale: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.25,
        ease: "power2.out",
      });
    });
  };

  // Toggle Menu
  const toggleMenu = () => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (!isOpen) {
      setIsOpen(true);
      tl.play();
      setTimeout(() => setIndicator(pathname), 200);
    } else {
      setIsOpen(false);
      if (linksRef.current) {
        gsap.to(".curved-menu-dot", { scale: 0, opacity: 0, duration: 0.2 });
      }
      tl.reverse();
    }
  };

  // Close Menu
  const closeMenu = useCallback(() => {
    if (!isOpen) return;
    setIsOpen(false);
    const tl = timelineRef.current;
    if (tl) {
      if (linksRef.current) {
        gsap.to(".curved-menu-dot", { scale: 0, opacity: 0, duration: 0.2 });
      }
      tl.reverse();
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: "68px",
          display: "flex",
          alignItems: "center",
          background: "rgba(233, 230, 231, 0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(94, 86, 83, 0.12)",
          transform: !isVisible ? "translateY(-100%)" : "translateY(0)",
          opacity: !isVisible ? 0 : 1,
          pointerEvents: !isVisible ? "none" : "auto",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 1.75rem",
          }}
        >
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <Image
              src="/berkahryan-logo.svg"
              alt="CV. Berkah Ryan"
              width={48}
              height={48}
              priority
              className="navbar-logo-img"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <div
                className="navbar-brand-title"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.02rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                  lineHeight: 1.1,
                }}
              >
                CV. BERKAH RYAN
              </div>
              <div
                className="label navbar-brand-sub"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-3)",
                  textTransform: "uppercase",
                  marginTop: "1px",
                }}
              >
                HEAVY EQUIPMENT
              </div>
            </div>
          </Link>

          <div
            className="navbar-right-cluster"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <Link
              href="/armada"
              className="navbar-quick-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: pathname.startsWith("/armada") ? "var(--accent)" : "var(--text-1)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              Crane
            </Link>

            <Link
              href="/layanan/forklift-rental"
              className="navbar-quick-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: pathname.includes("forklift") ? "var(--accent)" : "var(--text-1)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              Forklift
            </Link>

            <a
              href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20sewa%20crane%20atau%20forklift."
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-quick-link navbar-wa-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#16a34a",
                textDecoration: "none",
                transition: "color 0.2s ease, transform 0.2s ease",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h-.18zm-3.6 3.32c-.2 0-.46.07-.7.34-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.17 1.84 2.89 4.52 3.96 2.22.89 2.68.71 3.16.67.49-.05 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.24-.18-.51-.31-.27-.13-1.57-.77-1.81-.86-.24-.09-.42-.13-.6.13-.18.27-.69.86-.85 1.04-.15.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.15-.27-.02-.41.12-.54.12-.12.27-.31.4-.46.13-.16.18-.27.27-.44.09-.18.04-.33-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
              className={`curved-menu-trigger ${isOpen ? "is-open" : ""}`}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--dark-slate, #242120)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: 0,
                position: "relative",
                zIndex: 10002,
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.25s ease, background-color 0.25s ease",
              }}
            >
              <div className="curved-burger-box">
                <span className="curved-burger-line line-top" />
                <span className="curved-burger-line line-bottom" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(18, 16, 15, 0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 9999,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.5s ease",
        }}
      />

      <div
        ref={menuRef}
        className="curved-menu-panel"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          height: "100vh",
          width: "min(480px, 92vw)",
          background: "#242120",
          color: "#FFFFFF",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "6rem 3.5rem 3rem 4rem",
          boxShadow: "-15px 0 50px rgba(0, 0, 0, 0.4)",
          transform: "translateX(580px)",
        }}
      >
        <svg
          className="curved-menu-svg"
          style={{
            position: "absolute",
            top: 0,
            left: "-99px",
            width: "100px",
            height: "100%",
            fill: "#242120",
            stroke: "none",
            pointerEvents: "none",
          }}
        >
          <title>Curved Drawer Edge</title>
          <path ref={curvePathRef} />
        </svg>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              paddingBottom: "0.85rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              marginBottom: "1.75rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#AB978C",
              }}
            >
              Menu
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "rgba(255, 255, 255, 0.4)",
              }}
            >
              Cilegon • Banten
            </span>
          </div>

          <nav
            ref={linksRef}
            onMouseLeave={() => setIndicator(pathname)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {fullNavMenu.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <div
                  key={item.href}
                  data-href={item.href}
                  className="curved-menu-link-row"
                  onMouseEnter={() => setIndicator(item.href)}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="curved-menu-dot"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#AB978C",
                      position: "absolute",
                      left: "-22px",
                      transform: isActive ? "scale(1)" : "scale(0)",
                      opacity: isActive ? 1 : 0,
                      transition: "transform 0.25s ease, opacity 0.25s ease",
                    }}
                  />

                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "#AB978C" : "#FFFFFF",
                      fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)",
                      fontFamily: "var(--font-display)",
                      fontWeight: isActive ? 700 : 400,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      transition: "color 0.2s ease, transform 0.2s ease",
                      display: "inline-block",
                    }}
                    className="curved-link-text"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div
            style={{
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              opacity: 0.22,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <Image
              src="/berkahryan-logo.svg"
              alt="CV. Berkah Ryan"
              width={130}
              height={130}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
                fontSize: "0.78rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              <a
                href="https://wa.me/6281808999462"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#AB978C",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                WA: 0818 0899 9462
              </a>
              <a
                href="mailto:info@berkahryan.com"
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                }}
              >
                info@berkahryan.com
              </a>
            </div>

            <div
              style={{
                fontSize: "0.72rem",
                color: "rgba(255, 255, 255, 0.45)",
                lineHeight: 1.5,
                fontFamily: "var(--font-mono)",
              }}
            >
              Jl. Lada BBS II Blok A-1/14, Ciwaduk, Cilegon, Banten 42415
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .navbar-quick-link:hover {
          color: var(--accent) !important;
          transform: translateY(-1px);
        }
        .navbar-wa-link {
          color: #16a34a !important;
        }
        .navbar-wa-link:hover {
          color: #15803d !important;
          transform: translateY(-1px);
        }
        .curved-menu-trigger:hover {
          transform: scale(1.06);
          background: #383432 !important;
        }

        .curved-burger-box {
          width: 20px;
          height: 14px;
          position: relative;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          pointer-events: none;
        }

        .curved-burger-line {
          display: block;
          width: 100%;
          height: 1.75px;
          background: #ffffff;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            top 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .curved-menu-trigger.is-open .line-top {
          transform: translateY(6px) rotate(45deg);
        }

        .curved-menu-trigger.is-open .line-bottom {
          transform: translateY(-6px) rotate(-45deg);
        }

        .curved-link-text:hover {
          color: #ab978c !important;
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          header .container {
            padding: 0 1rem !important;
          }
          .navbar-logo-img {
            width: 36px !important;
            height: 36px !important;
          }
          .navbar-brand-title {
            font-size: 0.9rem !important;
          }
          .navbar-brand-sub {
            font-size: 0.54rem !important;
          }
          .navbar-quick-link:not(.navbar-wa-link) {
            display: none !important;
          }
          .navbar-right-cluster {
            gap: 0.75rem !important;
          }
          .navbar-wa-link {
            font-size: 0.74rem !important;
            gap: 0.3rem !important;
          }
          .curved-menu-panel {
            width: min(440px, 95vw) !important;
            padding: 4.5rem 1.5rem 2rem 1.5rem !important;
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .curved-link-text {
            font-size: clamp(1.25rem, 5.5vw, 1.6rem) !important;
          }
          .curved-menu-dot {
            left: -16px !important;
          }
        }
      `}</style>
    </>
  );
}
