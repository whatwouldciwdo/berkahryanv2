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
        borderTopLeftRadius: "clamp(28px, 5.5vw, 64px)",
        borderTopRightRadius: "clamp(28px, 5.5vw, 64px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 -20px 60px rgba(0, 0, 0, 0.18)",
        overflow: "hidden",
      }}
    >
        <div className="container footer-main-container">
          <div className="footer-cta-box">
            <h2 className="footer-cta-heading">
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

          <div className="footer-links-bar">
            <div>© 2026 CV. Berkah Ryan Heavy Equipment.</div>
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
          </div>
        </div>

        <div className="footer-partner-strip">
          <div className="footer-partner-item" style={{ flex: "1.3" }}>
            <Image
              src="/berkahryan-logo.svg"
              alt="CV. Berkah Ryan"
              width={220}
              height={80}
              style={{ height: "48px", width: "auto", objectFit: "contain", opacity: 0.95 }}
            />
          </div>

          <div className="footer-partner-item">
            <Image
              src="/images/ebtke-esdm.png"
              alt="Terverifikasi ESDM EBTKE"
              width={140}
              height={60}
              style={{ height: "36px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
            />
          </div>

          <div className="footer-partner-item">
            <Image
              src="/images/logo-k3.png"
              alt="Sertifikasi Keselamatan K3 Kemnaker RI"
              width={140}
              height={60}
              style={{ height: "36px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
            />
          </div>

          <div className="footer-partner-item">
            <Image
              src="/images/Sany-Logo.wine.svg"
              alt="SANY Heavy Industry"
              width={180}
              height={70}
              style={{
                height: "48px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="footer-partner-item">
            <Image
              src="/images/tadano-1-logo-svg-vector.svg"
              alt="TADANO Cranes"
              width={140}
              height={60}
              style={{ height: "34px", width: "auto", objectFit: "contain" }}
            />
          </div>

          <div className="footer-partner-item" style={{ borderRight: "none" }}>
            <Image
              src="/images/zoomlion-seeklogo.png"
              alt="ZOOMLION"
              width={140}
              height={60}
              style={{ height: "34px", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>CV. Berkah Ryan · Cilegon, Banten</span>
          <div className="footer-bottom-links">
            <Link href="/sitemap.xml" style={{ color: "inherit", textDecoration: "none" }}>
              Sitemap
            </Link>
            <Link href="/llms.txt" style={{ color: "inherit", textDecoration: "none" }}>
              llms.txt
            </Link>
          </div>
          <a
            className="footer-bottom-credit"
            href="https://arxenovasocial.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            arxenovasocial
          </a>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .footer-cta-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: 120px;
          }
          .footer-cta-heading {
            font-size: clamp(2.4rem, 6vw, 4.75rem);
            font-weight: 300;
            line-height: 1.2;
            letter-spacing: -2px;
            font-family: var(--font-heading), sans-serif;
            color: var(--text-1, #242120);
          }
          .footer-links-bar {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
            padding: 20px 0;
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
            font-size: 0.8rem;
            color: var(--text-2);
          }
          .footer-partner-strip {
            display: flex;
            justifyContent: space-between;
            align-items: center;
            flex-wrap: wrap;
          }
          .footer-partner-item {
            flex: 1;
            text-align: center;
            padding: 24px 16px;
            border-right: 1px solid rgba(0, 0, 0, 0.08);
            border-top: 1px solid rgba(0, 0, 0, 0.08);
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .footer-partner-item:first-child {
            border-left: none;
          }
          .footer-partner-item:last-child {
            border-right: none;
          }
          .footer-bottom-bar {
            background: #201E1F;
            color: #ffffff;
            padding: 15px 2rem;
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .footer-bottom-links {
            display: flex;
            gap: 1.5rem;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.85);
            margin-left: auto;
          }
          .footer-bottom-credit {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.55);
            text-decoration: none;
            letter-spacing: 0.02em;
            transition: color 0.3s ease;
          }
          .footer-bottom-credit:hover {
            color: rgba(255, 255, 255, 0.95);
          }
          @media (max-width: 768px) {
            .sticky-reveal-footer {
              padding-top: 60px !important;
            }
            .footer-cta-box {
              margin-bottom: 50px !important;
            }
            .footer-cta-heading {
              font-size: clamp(1.85rem, 7.5vw, 3rem) !important;
              letter-spacing: -1px !important;
            }
            .footer-links-bar {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 12px !important;
              padding: 16px 0 !important;
            }
            .footer-partner-item {
              flex: 1 1 50% !important;
              height: 75px !important;
              padding: 12px !important;
            }
            .footer-bottom-bar {
              padding: 15px 1.25rem !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
            }
          }
        `,
          }}
        />
      </footer>
  );
}
