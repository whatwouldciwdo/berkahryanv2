import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { craneFleetData, portfolioData } from "./data/siteData";
import JsonLd from "./components/JsonLd";
import WillemHero from "./components/WillemHero";
import FleetUnitImage from "./components/FleetUnitImage";
import OnScrollPathExperience from "./components/OnScrollPathExperience";
import CoverageMarquee from "./components/CoverageMarquee";

export const metadata: Metadata = {
  title:
    "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang | CV. Berkah Ryan",
  description:
    "Jasa sewa crane 3 s/d 600 Ton di Cilegon, Serang, Anyer, Pandeglang, dan seluruh Banten, serta Jawa & Sumatera. Mobile crane, crawler crane, roughter crane, forklift, dan trailer bersertifikat K3 Kemnaker dengan operator SIO aktif. Konsultasi & penawaran 24/7.",
  alternates: { canonical: "https://berkahryan.com" },
  openGraph: {
    title:
      "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang | CV. Berkah Ryan",
    description:
      "Sewa crane 3 s/d 600 Ton untuk proyek industri di Banten, Jawa, dan Sumatera. Bersertifikat K3 Kemnaker RI, operator SIO aktif, siap 24/7.",
    url: "https://berkahryan.com",
  },
};

export default function HomePage() {
  const localBizJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://berkahryan.com/#localbusiness",
    name: "CV. Berkah Ryan",
    description:
      "Jasa sewa crane dan rental alat berat di Cilegon, Serang, Anyer, Pandeglang, dan seluruh Banten. Melayani proyek di Pulau Jawa dan Sumatera.",
    telephone: "+6281808999462",
    email: "enquiries@berkahryan.com",
    url: "https://berkahryan.com",
    image: "https://berkahryan.com/berkah-ryan-rental-alat-berat-cilegon.webp",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Lada BBS II Blok A-1/14",
      addressLocality: "Cilegon",
      addressRegion: "Banten",
      postalCode: "42415",
      addressCountry: "ID",
    },
    areaServed: [
      "Cilegon",
      "Serang",
      "Anyer",
      "Pandeglang",
      "Merak",
      "Bojonegara",
      "Ciwandan",
      "Banten",
      "Jawa",
      "Sumatera",
    ],
  };

  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah CV. Berkah Ryan melayani jasa sewa crane di Cilegon dan Serang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Kantor operasional kami berada di Cilegon dan melayani jasa sewa crane harian, mingguan, hingga kontrak jangka panjang untuk wilayah Cilegon, Serang, Merak, Bojonegara, dan Ciwandan dengan mobilisasi cepat.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia jasa sewa crane untuk area Anyer dan Pandeglang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tersedia. Kami rutin mengirim unit crane ke Anyer, Pandeglang, dan wilayah Banten selatan untuk pekerjaan konstruksi, maintenance pabrik, proyek pariwisata, serta infrastruktur pesisir.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa kapasitas crane yang bisa disewa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kapasitas armada kami mulai dari 3 Ton (truck mounted crane) hingga 600 Ton (telescopic dan crawler crane), termasuk roughter crane 25-110 Ton dan forklift 3-35 Ton.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani proyek di luar Banten seperti Jawa dan Sumatera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Kami mendukung proyek di Jabodetabek, Jawa Barat, Jawa Tengah, Jawa Timur, serta Pulau Sumatera menggunakan trailer 40 feet flatbed dan lowbed untuk mobilisasi antar pulau.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah unit dan operator crane sudah bersertifikat K3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seluruh unit memiliki Surat Izin Alat (SIA) dan Riksa Uji resmi Kemnaker RI, serta dioperasikan oleh operator bersertifikat SIO aktif kelas I, II, atau III.",
        },
      },
    ],
  };

  const homeServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://berkahryan.com/#service",
    name: "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang",
    serviceType: "Jasa sewa crane dan rental alat berat",
    provider: { "@id": "https://berkahryan.com/#organization" },
    description:
      "Jasa sewa crane kapasitas 3 s/d 600 Ton lengkap dengan operator bersertifikat SIO, rigging, dan lift plan untuk proyek industri di Banten, Jawa, dan Sumatera.",
    areaServed: [
      { "@type": "City", name: "Cilegon" },
      { "@type": "City", name: "Serang" },
      { "@type": "City", name: "Anyer" },
      { "@type": "City", name: "Pandeglang" },
      { "@type": "AdministrativeArea", name: "Banten" },
      { "@type": "AdministrativeArea", name: "Jawa" },
      { "@type": "AdministrativeArea", name: "Sumatera" },
    ],
  };


  const row1Brands = [
    {
      name: "PT Pertamina (Persero)",
      src: "/images/logo-perusahaan/Pertamina_Logo.svg",
      height: 38,
    },
    {
      name: "PT PLN Indonesia Power",
      src: "/images/logo-perusahaan/Logo_PLN.png",
      height: 48,
    },
    {
      name: "PT Lotte Chemical Titan",
      src: "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
      height: 34,
    },
    {
      name: "PT Indorama Ventures Indonesia",
      src: "/images/logo-perusahaan/Indorama_Ventures_Logo.svg",
      height: 34,
    },
  ];

  const row2Brands = [
    {
      name: "PT Indorama Ventures Indonesia",
      src: "/images/logo-perusahaan/Indorama_Ventures_Logo.svg",
      height: 34,
    },
    {
      name: "PT Lotte Chemical Titan",
      src: "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
      height: 34,
    },
    {
      name: "PT PLN Indonesia Power",
      src: "/images/logo-perusahaan/Logo_PLN.png",
      height: 48,
    },
    {
      name: "PT Pertamina (Persero)",
      src: "/images/logo-perusahaan/Pertamina_Logo.svg",
      height: 38,
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
      <JsonLd data={homeServiceJsonLd} />
      <JsonLd data={homeFaqJsonLd} />


      <WillemHero />

      <section
        style={{
          padding: "3.5rem 0 4.5rem",
          background: "var(--bg-main, #E9E6E7)",
          position: "relative",
          borderBottom: "1px solid rgba(94, 86, 83, 0.12)",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ padding: "0 2rem", marginBottom: "1.75rem" }}>
          <span
            style={{
              fontSize: "0.95rem",
              color: "var(--dark-slate, #5E5653)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              opacity: 0.9,
            }}
          >
            Perusahaan
          </span>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />

          <div className="marquee-row marquee-row-left">
            <div className="marquee-track marquee-track-left">
              {[...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands].map((brand, idx) => (
                <div key={`r1-${idx}`} className="brand-card-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.src}
                    alt={brand.name}
                    style={{
                      maxHeight: `${brand.height}px`,
                      maxWidth: "160px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    className="brand-card-img"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-row marquee-row-right">
            <div className="marquee-track marquee-track-right">
              {[...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands].map((brand, idx) => (
                <div key={`r2-${idx}`} className="brand-card-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.src}
                    alt={brand.name}
                    style={{
                      maxHeight: `${brand.height}px`,
                      maxWidth: "160px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    className="brand-card-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .marquee-wrapper {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            overflow: hidden;
          }

          .marquee-fade-left {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100px;
            background: linear-gradient(90deg, var(--bg-main, #E9E6E7) 0%, transparent 100%);
            z-index: 10;
            pointer-events: none;
          }

          .marquee-fade-right {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100px;
            background: linear-gradient(270deg, var(--bg-main, #E9E6E7) 0%, transparent 100%);
            z-index: 10;
            pointer-events: none;
          }

          .marquee-row {
            display: flex;
            width: 100%;
            overflow: hidden;
            user-select: none;
          }

          .marquee-track {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            width: max-content;
            will-change: transform;
          }

          .marquee-track-left {
            animation: marqueeLeft 28s linear infinite;
          }

          .marquee-track-right {
            animation: marqueeRight 30s linear infinite;
          }

          .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
          }

          .brand-card-item {
            background: transparent !important;
            border: 1px solid rgba(94, 86, 83, 0.22) !important;
            border-radius: 16px;
            height: 120px;
            width: 250px;
            min-width: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.25rem 2rem;
            flex-shrink: 0;
            transition: none;
          }

          .brand-card-item:hover {
            background: transparent !important;
            transform: none !important;
            box-shadow: none !important;
            border-color: rgba(94, 86, 83, 0.22) !important;
          }

          .brand-card-img {
            filter: grayscale(100%) opacity(0.85);
            transition: filter 0.35s ease;
            max-width: 160px;
            height: auto;
          }

          .brand-card-item:hover .brand-card-img {
            filter: grayscale(0%) opacity(1) !important;
          }

          @keyframes marqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `,
          }}
        />
      </section>

      <section
        style={{
          padding: "6rem 0",
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
            <div
              style={{ position: "static" }}
              className="fleet-label"
              data-scroll-reveal-item
            >
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  fontWeight: 800,
                  marginBottom: "1.25rem",
                  lineHeight: 1.1,
                  color: "var(--text-1)",
                }}
              >
                Unit yang biasa kami kirim ke site
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.65, marginBottom: "2rem", fontSize: "1rem" }}>
                Pilih berdasarkan pekerjaan dan kondisi lokasi. Kalau belum punya hitungan tonase atau radius, kirim gambar site—tim kami bantu cek dari awal.
              </p>
              <Link href="/armada" className="btn btn-primary">
                Buka daftar armada →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {craneFleetData.map((item, i) => (
                <div
                  key={item.id}
                  className="fleet-item-card"
                  data-scroll-reveal-item
                  style={{
                    background: "var(--bg-surface)",
                    padding: "2rem 2.5rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    boxShadow: "none",
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto",
                    gap: "1.75rem",
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
                        {String(i + 1).padStart(2, "0")} / {item.category}
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

      <OnScrollPathExperience />

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
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--text-1)" }}>
                Proyek Terakhir
              </h2>
            </div>
            <Link href="/proyek" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
              Semua Proyek →
            </Link>
          </div>

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
              <div className="project-featured-col-1" style={{ padding: "3.5rem" }}>
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
                className="project-featured-col-2"
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

          <div className="loud-carousel-container" style={{ position: "relative", marginTop: "2.5rem" }}>
            <div className="cw-track" id="cw-track">
              {portfolioData.slice(1).map((item) => {
                const projectImages: Record<string, string> = {
                  "chandra-asri-petrochemical": "/images/services/crawler-crane/sewa-crawler-crane-sany-cilegon.webp",
                  "pln-indonesia-power": "/images/services/telescopic-mobile/sewa-telescopic-mobile-crane-sany-cilegon.webp",
                  "lotte-chemical-cilegon": "/images/services/roughter-crane/sewa-roughter-crane-50-ton-cilegon.png",
                  "indorama-cilegon": "/images/services/forklift/rental-forklift-heavy-duty-cilegon.png",
                };
                const projectLogos: Record<string, string> = {
                  "chandra-asri-petrochemical": "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
                  "pln-indonesia-power": "/images/logo-perusahaan/Logo_PLN.png",
                  "lotte-chemical-cilegon": "/images/logo-perusahaan/Lotte_Chemical_Logo.svg",
                  "indorama-cilegon": "/images/logo-perusahaan/Indorama_Ventures_Logo.svg",
                  "pertamina-banten": "/images/logo-perusahaan/Pertamina_Logo.svg",
                };
                const bgImg = projectImages[item.slug] || "/berkah-ryan-rental-alat-berat-cilegon.webp";
                const logoSrc = projectLogos[item.slug];

                return (
                  <Link
                    key={item.slug}
                    href={`/proyek/${item.slug}`}
                    className="cw-card"
                    draggable={false}
                  >
                    <div className="cw-media" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={bgImg}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="cw-media-img"
                      />
                    </div>

                    <div className="cw-bottom">
                      <p className="cw-label">{item.client}</p>
                      <h3 className="cw-title">{item.highlight}</h3>
                      <div className="cw-view-wrap">
                        <span className="cw-view">View case →</span>
                        {logoSrc && (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={logoSrc}
                            alt={item.client}
                            style={{
                              height: "16px",
                              maxWidth: "60px",
                              objectFit: "contain",
                              filter: "brightness(0) invert(1) opacity(0.85)",
                              userSelect: "none",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .cw-track {
            display: flex;
            gap: 1.75rem;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding-bottom: 1.5rem;
            padding-right: 4rem;
            -webkit-overflow-scrolling: touch;
          }

          .cw-track::-webkit-scrollbar {
            display: none;
          }

          .cw-card {
            position: relative;
            width: clamp(320px, 36vw, 530px);
            min-width: clamp(320px, 36vw, 530px);
            height: clamp(480px, 72vh, 706px);
            border-radius: 28px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2.5rem 2.25rem;
            text-decoration: none;
            background: #08080a;
            border: 1px solid rgba(94, 86, 83, 0.18);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
            scroll-snap-align: start;
            flex-shrink: 0;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          }

          .cw-media {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
          }

          .cw-media-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.72) contrast(1.08);
            transition: transform 0.5s ease, filter 0.5s ease;
            user-select: none;
          }

          .cw-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(8, 8, 10, 0) 0%, rgba(8, 8, 10, 0.5) 55%, rgba(8, 8, 10, 0.94) 100%);
            z-index: 2;
            pointer-events: none;
          }

          .cw-bottom {
            position: relative;
            z-index: 3;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .cw-label {
            font-family: var(--font-mono), monospace;
            font-size: 0.65rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.7);
            margin: 0;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
          }

          .cw-title {
            font-family: var(--font-sans), system-ui, sans-serif;
            font-size: clamp(0.85rem, 1.05vw, 0.98rem);
            font-weight: 600;
            line-height: 1.38;
            color: #ffffff;
            margin: 0;
            letter-spacing: -0.01em;
            text-shadow: 0 3px 18px rgba(0, 0, 0, 0.95);
            max-width: 92%;
          }

          .cw-view-wrap {
            margin-top: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .cw-view {
            font-family: var(--font-mono), monospace;
            font-size: 0.72rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.85);
            transition: color 0.3s ease, transform 0.3s ease;
            display: inline-block;
          }

          .cw-logo-box {
            background: rgba(255, 255, 255, 0.92);
            padding: 2px 6px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
            flex-shrink: 0;
          }

          .cw-logo-img {
            max-height: 12px;
            max-width: 50px;
            width: auto;
            height: auto;
            object-fit: contain;
          }

          .cw-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3) !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
          }

          .cw-card:hover .cw-media-img {
            transform: scale(1.07);
            filter: brightness(0.85) contrast(1.12) !important;
          }

          .cw-card:hover .cw-view {
            color: var(--accent, #AB978C) !important;
            transform: translateX(4px);
          }
        `,
          }}
        />
      </section>

      <section style={{ padding: "6rem 0", background: "var(--bg-surface-2, #F3F1F0)" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "clamp(2rem, 3.2vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-1)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Area jasa sewa crane kami
          </h2>
          <p
            style={{
              color: "var(--text-2)",
              lineHeight: 1.7,
              fontSize: "1.02rem",
              maxWidth: "760px",
              marginBottom: "2.5rem",
            }}
          >
            Basis operasional kami di Cilegon membuat mobilisasi unit ke kawasan
            industri Banten berlangsung cepat. Kami melayani{" "}
            <strong>jasa sewa crane di Cilegon, Serang, Anyer, dan Pandeglang</strong>,
            serta mendukung proyek di Pulau Jawa dan Sumatera menggunakan trailer
            40 feet flatbed maupun lowbed.
          </p>
        </div>

        <CoverageMarquee
          background="var(--bg-surface-2, #F3F1F0)"
          bordered={false}
          compact
        />

        <div className="container">
          <div style={{ textAlign: "center", margin: "4rem 0 2.5rem" }}>
            <span className="faq-eyebrow">FAQ</span>
            <h2 className="faq-title">Pertanyaan umum seputar sewa crane</h2>
            <p className="faq-subtitle">
              Jawaban singkat untuk hal yang paling sering ditanyakan sebelum
              menyewa crane. Butuh detail lain? Tim kami siap membantu.
            </p>
          </div>

          <div className="faq-table">
            {homeFaqJsonLd.mainEntity.map((faq) => (
              <details className="faq-row" key={faq.name}>
                <summary className="faq-question">
                  <span>{faq.name}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .faq-eyebrow {
            display: inline-block;
            font-family: var(--font-mono), monospace;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--text-3);
            margin-bottom: 0.85rem;
          }

          .faq-title {
            font-size: clamp(1.8rem, 3vw, 2.3rem);
            font-weight: 800;
            color: var(--text-1);
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin: 0 auto 0.85rem;
            max-width: 640px;
          }

          .faq-subtitle {
            font-size: 0.98rem;
            color: var(--text-2);
            line-height: 1.65;
            max-width: 540px;
            margin: 0 auto;
          }

          .faq-table {
            max-width: 820px;
            margin: 0 auto;
            background: var(--bg-surface, #FFFFFF);
            border: 1px solid var(--border);
            border-radius: 18px;
            overflow: hidden;
          }

          .faq-row + .faq-row {
            border-top: 1px solid var(--border);
          }

          .faq-question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            cursor: pointer;
            list-style: none;
            padding: 1.35rem 1.75rem;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-1);
            letter-spacing: -0.01em;
            text-align: left;
            transition: background 0.2s ease;
          }

          .faq-question::-webkit-details-marker {
            display: none;
          }

          .faq-question:hover {
            background: var(--bg-main);
          }

          .faq-icon {
            position: relative;
            flex-shrink: 0;
            width: 20px;
            height: 20px;
          }

          .faq-icon::before,
          .faq-icon::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            background: var(--text-2);
            transform: translate(-50%, -50%);
            transition: transform 0.25s ease, opacity 0.25s ease;
          }

          .faq-icon::before {
            width: 13px;
            height: 1.5px;
          }

          .faq-icon::after {
            width: 1.5px;
            height: 13px;
          }

          .faq-row[open] .faq-icon::after {
            transform: translate(-50%, -50%) rotate(90deg);
            opacity: 0;
          }

          .faq-answer {
            padding: 0 1.75rem 1.5rem;
          }

          .faq-answer p {
            font-size: 0.93rem;
            color: var(--text-2);
            line-height: 1.75;
            max-width: 660px;
            margin: 0;
          }

          @media (max-width: 640px) {
            .faq-question {
              padding: 1.15rem 1.15rem;
              font-size: 0.93rem;
              gap: 1rem;
            }
            .faq-answer {
              padding: 0 1.15rem 1.25rem;
            }
          }
        `,
          }}
        />
      </section>



      <section
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          marginTop: "-1.5rem",
          padding: "5.5rem 0 8.5rem",
          background: "linear-gradient(135deg, #4F5E75 0%, #384556 100%)",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="container cta-strip-grid"
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
          .trust-left-col { padding: 3.5rem 1rem 2.5rem !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .trust-cells-grid { grid-template-columns: 1fr 1fr !important; }
          .trust-cell-item { padding: 2rem 1.25rem !important; }
        }
        @media (max-width: 960px) {
          .fleet-item-card { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .fleet-unit-img-wrap { width: 100% !important; height: 160px !important; }
        }
        @media (max-width: 860px) {
          .fleet-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .fleet-label { position: static !important; }
          .fleet-item-card { padding: 1.5rem 1.25rem !important; border-radius: 16px !important; }
          .project-featured { grid-template-columns: 1fr !important; }
          .project-featured-col-1,
          .project-featured-col-2 { padding: 1.75rem 1.25rem !important; }
          .project-featured-col-2 { border-left: none !important; border-top: 1px solid var(--border) !important; }
          .project-row { grid-template-columns: 1fr !important; gap: 1rem !important; padding: 1.25rem !important; }
          .project-row-desc { display: block !important; }
          .cta-strip-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .cta-strip-actions { flex-direction: column !important; width: 100% !important; }
          .cta-strip-actions a { width: 100% !important; text-align: center !important; justify-content: center !important; }
        }
        @media (max-width: 640px) {
          .trust-cells-grid { grid-template-columns: 1fr !important; }
          .trust-cell-item { border-left: none !important; border-bottom: 1px solid var(--border) !important; padding: 1.5rem 1rem !important; }
          .trust-cell-item:last-child { border-bottom: none !important; }
        }
      ` }} />
    </div>
  );
}
