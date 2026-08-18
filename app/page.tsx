import React from "react";
import Link from "next/link";
import { craneFleetData, portfolioData } from "./data/siteData";
import JsonLd from "./components/JsonLd";
import WillemHero from "./components/WillemHero";
import FleetUnitImage from "./components/FleetUnitImage";
import OnScrollPathExperience from "./components/OnScrollPathExperience";

export default function HomePage() {
  const localBizJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CV. Berkah Ryan",
    telephone: "+6281808999462",
    url: "https://berkahryan.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Lada BBS II Blok A-1/14",
      addressLocality: "Cilegon",
      addressRegion: "Banten",
      postalCode: "42415",
      addressCountry: "ID",
    },
  };

  const clientLogos = [
    {
      name: "PT Pertamina (Persero)",
      src: "/images/logo-perusahaan/Pertamina_Logo.svg",
      height: 36,
      role: "Depot Tangki BBM & Gas Banten",
      scope: "Turnaround & Lifting",
    },
    {
      name: "PT PLN Indonesia Power",
      src: "/images/logo-perusahaan/Logo_PLN.png",
      height: 42,
      role: "Overhaul Turbin PLTU Suralaya",
      scope: "Heavy Lift & Generator",
    },
    {
      name: "PT Lotte Chemical Titan",
      src: "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
      height: 32,
      role: "Mega Complex Construction Merak",
      scope: "Crawler & Erection",
    },
    {
      name: "PT Indorama Ventures Indonesia",
      src: "/images/logo-perusahaan/Indorama_Ventures_Logo.svg",
      height: 32,
      role: "Material Handling & Warehouse Hub",
      scope: "Forklift Fleet & Logistik",
    },
  ];

  const serviceImages: Record<string, string[]> = {
    "telescopic-mobile-crane": [
      "/images/services/telescopic-mobile/sewa-telescopic-mobile-crane-sany-cilegon.webp",
      "/images/services/telescopic-mobile/sewa-mobile-crane-zoomlion-cilegon.png",
    ],
    "truck-mounted-crane": [
      "/images/services/truck-crane/sewa-truck-mounted-crane-unic-cilegon.png",
    ],
    "crawler-crane": [
      "/images/services/crawler-crane/sewa-crawler-crane-kobelco-cilegon.png",
      "/images/services/crawler-crane/sewa-crawler-crane-sany-cilegon.webp",
    ],
    "roughter-crane": [
      "/images/services/roughter-crane/sewa-roughter-crane-50-ton-cilegon.png",
      "/images/services/roughter-crane/sewa-roughter-crane-30-ton-cilegon.png",
      "/images/services/roughter-crane/sewa-roughter-crane-70-ton-cilegon.png",
    ],
    "forklift-rental": [
      "/images/services/forklift/rental-forklift-diesel-cilegon-berkahryan.png",
      "/images/services/forklift/rental-forklift-heavy-duty-cilegon.png",
    ],
    "trailer-logistics-road-plate": [
      "/images/services/roughter-crane/sewa-roughter-crane-70-ton-cilegon.png",
      "/berkah-ryan-rental-alat-berat-cilegon.webp",
    ],
  };

  return (
    <div>
      <JsonLd data={localBizJsonLd} />

      {/* ── IMMERSIVE FULLPAGE ZOOM HERO ── */}
      <WillemHero />

      {/* ── CLIENT TRUST — ARCHITECTURAL EDITORIAL GRID (DIBAWAH HERO) ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-surface)",
          position: "relative",
        }}
      >
        <div className="container" style={{ padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.9fr",
              alignItems: "stretch",
            }}
            className="trust-grid-container"
          >
            {/* SISI KIRI: STATEMENT & OTORITAS INDUSTRI */}
            <div
              style={{
                padding: "4.5rem 3.5rem 4.5rem 0",
                borderRight: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="trust-left-col"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent, #AB978C)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-2)",
                  }}
                >
                  Rekam Jejak Objek Vital
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.75rem, 2.5vw, 2.35rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--text-1)",
                  marginBottom: "1.25rem",
                }}
              >
                Mitra Lifting Utama Proyek Energi & Hilirisasi Banten.
              </h2>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-2)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                  maxWidth: "460px",
                }}
              >
                Berpengalaman mendukung Turnaround Kilang, Overhaul Pembangkit Listrik, hingga Erection Pabrik Kimia dengan standar K3 Zero Accident.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--dark-slate)",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ color: "var(--accent, #AB978C)", fontWeight: 800 }}>✓</span> Kepatuhan K3 Migas & ESDM
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ color: "var(--accent, #AB978C)", fontWeight: 800 }}>✓</span> Dispatcher & Teknisi On-Site
                </span>
              </div>
            </div>

            {/* SISI KANAN: 4 ARSITEKTURAL CELLS (2x2 GRID DENGAN HAIRLINE BORDER) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
              className="trust-cells-grid"
            >
              {clientLogos.map((logo, idx) => (
                <div
                  key={logo.name}
                  style={{
                    padding: "3rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderBottom: idx < 2 ? "1px solid var(--border)" : "none",
                    borderLeft: idx % 2 !== 0 ? "1px solid var(--border)" : "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  className="trust-cell-item"
                >
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      style={{
                        maxHeight: `${logo.height}px`,
                        maxWidth: "170px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        filter: "grayscale(0.2) contrast(1.05)",
                        transition: "filter 0.3s ease, transform 0.3s ease",
                      }}
                      className="trust-logo-img"
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--text-3)",
                        marginBottom: "0.3rem",
                        fontWeight: 600,
                      }}
                    >
                      {logo.scope}
                    </div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "var(--text-1)",
                        lineHeight: 1.35,
                      }}
                    >
                      {logo.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET — horizontal divider list with elevated card design ─────────── */}
      <section
        style={{
          padding: "7rem 0",
          background: "var(--bg-main)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "330px 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="fleet-grid"
          >
            {/* Sticky label column */}
            <div style={{ position: "sticky", top: "5.5rem" }} className="fleet-label">
              <span className="badge-steel" style={{ marginBottom: "1.25rem" }}>
                Armada & Kapasitas
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  fontWeight: 800,
                  marginBottom: "1.25rem",
                  lineHeight: 1.1,
                  color: "var(--text-1)",
                }}
              >
                Derek & Alat Berat Bersertifikat K3
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.65, marginBottom: "2rem", fontSize: "1rem" }}>
                Seluruh armada memiliki Surat Izin Alat (SIA) aktif dan dioperasikan oleh operator berlisensi SIO Kemnaker RI.
              </p>
              <Link href="/armada" className="btn btn-primary">
                Lihat Spesifikasi Teknis →
              </Link>
            </div>

            {/* Fleet list — modern card rows with image thumbnail */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {craneFleetData.map((item, i) => (
                <div
                  key={item.id}
                  className="fleet-item-card"
                  style={{
                    background: "var(--bg-surface)",
                    padding: "2rem 2.5rem",
                    borderRadius: "20px",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(94, 86, 83, 0.04)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto",
                    gap: "2.25rem",
                    alignItems: "center",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.6rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span className="label" style={{ color: "var(--text-3)" }}>
                        #{i + 1} {item.category}
                      </span>
                      <span
                        className="badge-steel"
                        style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem" }}
                      >
                        {item.capacityRange}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.02em",
                        color: "var(--text-1)",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-2)",
                        lineHeight: 1.55,
                        maxWidth: "520px",
                      }}
                    >
                      {item.shortDesc}
                    </p>
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {item.models.slice(0, 4).map((m) => (
                        <span
                          key={m.brand}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            color: "var(--dark-slate)",
                            background: "var(--bg-main)",
                            padding: "0.25rem 0.6rem",
                            border: "1px solid var(--border)",
                            borderRadius: "6px",
                            fontWeight: 500,
                          }}
                        >
                          {m.brand} {m.capacity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Gambar Unit Transparan (No Background), Ukuran Besar & Otomatis Berganti/Slideshow */}
                  <Link
                    href={`/layanan/${item.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      padding: "0 0.5rem",
                    }}
                    className="fleet-item-img-link"
                  >
                    <FleetUnitImage
                      images={serviceImages[item.slug] || ["/berkah-ryan-rental-alat-berat-cilegon.webp"]}
                      alt={item.name}
                    />
                  </Link>

                  {/* Tombol Detail Unit */}
                  <div>
                    <Link
                      href={`/layanan/${item.slug}`}
                      className="btn btn-ghost"
                      style={{
                        fontSize: "0.85rem",
                        padding: "0.7rem 1.3rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Detail Unit →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── K3 COMPLIANCE & RIGGING EXCELLENCE — ONSCROLL PATH ANIMATIONS ─────── */}
      <OnScrollPathExperience />

      {/* ── PROJECTS — LIGHT WARM CONCRETE BACKGROUND ───────────────────────── */}
      <section
        style={{
          padding: "7rem 0",
          background: "var(--bg-main)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <span className="badge-taupe" style={{ marginBottom: "0.75rem" }}>
                Rekam Jejak Teruji
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--text-1)" }}>
                Proyek Terakhir
              </h2>
            </div>
            <Link href="/proyek" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
              Semua Proyek →
            </Link>
          </div>

          {/* Featured project */}
          {portfolioData[0] && (
            <Link
              href={`/proyek/${portfolioData[0].slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "1.5rem",
                textDecoration: "none",
                background: "var(--bg-surface)",
                boxShadow: "0 8px 30px rgba(94, 86, 83, 0.06)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              className="project-featured"
            >
              <div style={{ padding: "3.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <span className="badge-steel" style={{ display: "inline-flex" }}>
                    {portfolioData[0].category} · {portfolioData[0].year}
                  </span>
                  <div
                    style={{
                      background: "var(--bg-main)",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      height: "44px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo-perusahaan/Pertamina_Logo.svg"
                      alt={portfolioData[0].client}
                      style={{ height: "26px", maxWidth: "120px", objectFit: "contain" }}
                    />
                  </div>
                </div>
                <h3 style={{ fontSize: "1.85rem", marginBottom: "0.75rem", letterSpacing: "-0.025em", color: "var(--text-1)" }}>
                  {portfolioData[0].client}
                </h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.6, marginBottom: "2rem" }}>
                  {portfolioData[0].highlight}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {portfolioData[0].equipmentUsed.slice(0, 3).map((eq) => (
                    <span
                      key={eq}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--dark-slate)",
                        background: "var(--bg-main)",
                        padding: "0.3rem 0.65rem",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        fontWeight: 600,
                      }}
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: "var(--bg-surface-2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "3.5rem",
                  borderLeft: "1px solid var(--border)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "1rem" }}>
                    Scope of Lifting:
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {portfolioData[0].scope.slice(0, 4).map((s) => (
                      <li key={s} style={{ display: "flex", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                        <span style={{ color: "var(--dark-slate)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: "2rem", color: "var(--dark-slate)", fontSize: "0.9rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span>Baca studi kasus lengkap</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          )}

          {/* Other projects as elevated cards with company logos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {portfolioData.slice(1, 4).map((item) => {
              const projectClientLogos: Record<string, string> = {
                "chandra-asri-petrochemical": "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
                "pln-indonesia-power": "/images/logo-perusahaan/Logo_PLN.png",
                "lotte-chemical-cilegon": "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
                "indorama-cilegon": "/images/logo-perusahaan/Indorama_Ventures_Logo.svg",
              };
              const logoSrc = projectClientLogos[item.slug];

              return (
                <Link
                  key={item.slug}
                  href={`/proyek/${item.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1.8fr 1.2fr auto",
                    alignItems: "center",
                    gap: "1.75rem",
                    padding: "1.25rem 2rem",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-surface)",
                    textDecoration: "none",
                    boxShadow: "0 2px 10px rgba(94, 86, 83, 0.03)",
                    transition: "all 0.2s ease",
                  }}
                  className="project-row"
                >
                  {/* Logo Perusahaan */}
                  <div
                    style={{
                      width: "80px",
                      height: "44px",
                      background: "var(--bg-main)",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 8px",
                      flexShrink: 0,
                    }}
                    className="project-logo-box"
                  >
                    {logoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logoSrc}
                        alt={item.client}
                        style={{ maxHeight: "24px", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }}
                      />
                    ) : (
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-3)" }}>CLIENT</span>
                    )}
                  </div>

                  <div>
                    <span className="label" style={{ display: "block", marginBottom: "0.25rem", color: "var(--text-3)" }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-1)" }}>
                      {item.client}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-2)" }} className="project-row-desc">
                    {item.highlight.slice(0, 70)}…
                  </span>
                  <span style={{ color: "var(--dark-slate)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 600 }}>
                    {item.year} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION CTA BANNER — NORDIC STEEL BLUE GRADIENT ──────────────────────── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          padding: "5.5rem 0 8.5rem",
          background: "linear-gradient(135deg, #4F5E75 0%, #384556 100%)",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "3.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
                marginBottom: "1rem",
              }}
            >
              Layanan Cepat 24 Jam
            </span>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.65rem)",
                fontWeight: 800,
                marginBottom: "0.85rem",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.15,
              }}
            >
              Butuh crane atau forklift untuk proyek Anda?
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "1.05rem", maxWidth: "600px", lineHeight: 1.6 }}>
              Dispatcher dan tim lifting engineer kami siap merespon konsultasi tonase, radius kerja, dan mobilisasi armada ke Cilegon, Serang, dan seluruh wilayah Banten.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", flexShrink: 0 }} className="cta-strip-actions">
            <a
              href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20penawaran%20sewa%20crane."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.9rem 1.8rem",
                borderRadius: "var(--r-md)",
                background: "var(--accent, #AB978C)",
                color: "#242120",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                transition: "all 0.2s ease",
              }}
              className="btn-cta-gold"
            >
              WA Admin 1: 0818 0899 9462
            </a>
            <Link
              href="/kontak"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.9rem 1.8rem",
                borderRadius: "var(--r-md)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              Kirim Form Inquiry Online →
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .trust-cell-item:hover {
          background: var(--bg-main) !important;
        }
        .trust-cell-item:hover .trust-logo-img {
          filter: grayscale(0) contrast(1.1) !important;
          transform: scale(1.05);
        }
        .fleet-item-card:hover {
          border-color: var(--border-strong) !important;
          box-shadow: 0 8px 30px rgba(94, 86, 83, 0.1) !important;
          transform: translateY(-2px);
        }
        .fleet-item-card:hover .fleet-unit-img {
          transform: scale(1.08) translateY(-4px);
          filter: drop-shadow(0 16px 28px rgba(94, 86, 83, 0.24)) !important;
        }
        .project-featured:hover {
          border-color: var(--border-strong) !important;
          box-shadow: 0 12px 40px rgba(94, 86, 83, 0.12) !important;
          transform: translateY(-2px);
        }
        .project-row:hover {
          border-color: var(--border-strong) !important;
          background: #FFFFFF !important;
          box-shadow: 0 6px 22px rgba(94, 86, 83, 0.08) !important;
          transform: translateY(-2px);
        }
        .k3-dark-cta:hover {
          background: #c2ada1 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(171, 151, 140, 0.35);
        }
        .btn-cta-gold:hover {
          background: #c2ada1 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
        }
        @media (max-width: 990px) {
          .trust-grid-container { grid-template-columns: 1fr !important; }
          .trust-left-col { padding: 3.5rem 0 2.5rem !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .trust-cells-grid { grid-template-columns: 1fr 1fr !important; }
          .trust-cell-item { padding: 2.25rem 1.5rem !important; }
        }
        @media (max-width: 960px) {
          .fleet-item-card { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .fleet-unit-img-wrap { width: 100% !important; height: 160px !important; }
        }
        @media (max-width: 860px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-left { padding: 4rem 1.5rem 2rem !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .hero-right { min-height: 280px !important; }
          .fleet-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .fleet-label { position: static !important; }
          .k3-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .project-featured { grid-template-columns: 1fr !important; }
          .project-row { grid-template-columns: 1fr auto !important; }
          .project-row-desc { display: none !important; }
          .cta-strip-actions { flex-direction: row !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 600px) {
          .trust-cells-grid { grid-template-columns: 1fr !important; }
          .trust-cell-item { border-left: none !important; border-bottom: 1px solid var(--border) !important; }
          .trust-cell-item:last-child { border-bottom: none !important; }
        }
      ` }} />
    </div>
  );
}
