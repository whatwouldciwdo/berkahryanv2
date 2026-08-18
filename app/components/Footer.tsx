import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="sticky-reveal-footer"
      style={{
        background: "var(--bg-main, #E9E6E7)",
        color: "var(--text-1, #242120)",
        paddingTop: "110px",
        marginTop: "-48px",
        position: "relative",
        zIndex: 20,
        borderTopLeftRadius: "clamp(36px, 5.5vw, 64px)",
        borderTopRightRadius: "clamp(36px, 5.5vw, 64px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 -20px 60px rgba(0, 0, 0, 0.18)",
        overflow: "hidden",
      }}
    >
        <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
          {/* BIG CTA TITLE SECTION (Urban slate theme matching palette) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "150px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: "-2px",
                fontFamily: "var(--font-heading), sans-serif",
                color: "var(--text-1, #242120)",
              }}
            >
              Ada yang bisa kami bantu?
              <br />
              <Link
                href="/kontak"
                style={{
                  display: "inline-block",
                  color: "var(--accent, #AB978C)",
                  borderBottom: "2px solid var(--accent, #AB978C)",
                  paddingBottom: "4px",
                  textDecoration: "none",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
              >
                <span>Mari bicara</span>
              </Link>
            </h2>
          </div>

          {/* HORIZONTAL FOOTER LINKS BAR */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "30px",
              padding: "20px 0",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              fontSize: "0.8rem",
              color: "var(--text-2)",
            }}
          >
            <div>© 2026 Berkah Ryan Heavy Equipment.</div>
            <Link
              href="/layanan/telescopic-mobile-crane"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Mobile crane
            </Link>
            <Link
              href="/layanan/crawler-crane"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Crawler crane
            </Link>
            <Link
              href="/layanan/forklift-rental"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Forklift
            </Link>
            <Link
              href="/layanan/trailer-logistics-road-plate"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Steel plate
            </Link>
            <a
              href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20meminta%20Company%20Profile%20PDF."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Unduh Company Profile
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "auto", fontWeight: "bold", color: "#111111", textDecoration: "none" }}
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        {/* PARTNERS & CERTIFICATION STRIP */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LOGO PALING KIRI: BERKAH RYAN (LEBIH BESAR) */}
          <div className="footer-partner-item" style={{ flex: "1.3" }}>
            <Image
              src="/berkahryan-logo.svg"
              alt="CV. Berkah Ryan"
              width={220}
              height={80}
              style={{ height: "54px", width: "auto", objectFit: "contain", opacity: 0.95 }}
            />
          </div>

          {/* LOGO 2: ESDM EBTKE (UKURAN STANDAR 40px) */}
          <div className="footer-partner-item">
            <Image
              src="/images/ebtke-esdm.png"
              alt="Terverifikasi ESDM EBTKE"
              width={140}
              height={60}
              style={{ height: "40px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
            />
          </div>

          {/* LOGO 3: RESMI K3 KEMNAKER (UKURAN STANDAR 40px) */}
          <div className="footer-partner-item">
            <Image
              src="/images/logo-k3.png"
              alt="Sertifikasi Keselamatan K3 Kemnaker RI"
              width={140}
              height={60}
              style={{ height: "40px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
            />
          </div>

          {/* LOGO 4: SANY (DISELESAIKAN AGAR OPTICALLY SAMA BESAR) */}
          <div className="footer-partner-item">
            <Image
              src="/images/Sany-Logo.wine.svg"
              alt="SANY Heavy Industry"
              width={180}
              height={70}
              style={{
                height: "56px",
                width: "auto",
                objectFit: "contain",
                transform: "scale(1.25)",
              }}
            />
          </div>

          {/* LOGO 5: TADANO (UKURAN STANDAR 38px) */}
          <div className="footer-partner-item">
            <Image
              src="/images/tadano-1-logo-svg-vector.svg"
              alt="TADANO Cranes"
              width={140}
              height={60}
              style={{ height: "38px", width: "auto", objectFit: "contain" }}
            />
          </div>

          {/* LOGO 6: ZOOMLION (UKURAN STANDAR 38px) */}
          <div className="footer-partner-item" style={{ borderRight: "none" }}>
            <Image
              src="/images/zoomlion-seeklogo.png"
              alt="ZOOMLION"
              width={140}
              height={60}
              style={{ height: "38px", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div
          style={{
            background: "#201E1F",
            color: "#ffffff",
            padding: "15px 40px",
            fontSize: "0.8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span>Cookie Preference Center</span>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.85)" }}>
            <Link href="/sitemap.xml" style={{ color: "inherit", textDecoration: "none" }}>
              Sitemap
            </Link>
            <Link href="/llms.txt" style={{ color: "inherit", textDecoration: "none" }}>
              llms.txt
            </Link>
            <span>Cilegon, Banten</span>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .footer-partner-item {
            flex: 1;
            text-align: center;
            padding: 30px;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          .footer-partner-item:first-child {
            border-left: none;
          }
          .footer-partner-item:last-child {
            border-right: none;
          }
          .footer-partner-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: -150%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(155, 137, 113, 0.35) 50%,
                rgba(255, 255, 255, 0) 100%);
            transform: skewX(-20deg);
            pointer-events: none;
          }
          .footer-partner-item:hover::after {
            left: 150%;
            transition: left 1.6s cubic-bezier(0.25, 1, 0.5, 1);
          }
          @media (max-width: 768px) {
            .footer-partner-item {
              flex: 1 1 50%;
            }
          }
        `,
          }}
        />
      </footer>
  );
}
