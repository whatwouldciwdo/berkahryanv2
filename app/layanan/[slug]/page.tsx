import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { craneFleetData } from "../../data/siteData";
import JsonLd from "../../components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return craneFleetData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = craneFleetData.find((d) => d.slug === slug);

  if (!item) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: `Sewa ${item.name} (${item.capacityRange}) Cilegon Banten | CV. Berkah Ryan`,
    description: `Rental ${item.name} kapasitas ${item.capacityRange} di Cilegon & Banten. Bersertifikasi SIA Kemnaker RI, operator berlisensi SIO aktif, siap support proyek 24/7.`,
    alternates: {
      canonical: `https://berkahryan.com/layanan/${item.slug}`,
    },
    openGraph: {
      title: `Sewa ${item.name} Cilegon Banten - CV. Berkah Ryan`,
      description: item.shortDesc,
      url: `https://berkahryan.com/layanan/${item.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = craneFleetData.find((d) => d.slug === slug);

  if (!item) {
    notFound();
  }

  // Generate Service & FAQ Schema for AI Search / Agentic SEO
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Sewa ${item.name} Cilegon Banten`,
    description: item.description,
    provider: {
      "@type": "EquipmentRentalAgency",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
      telephone: "+6281808999462",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cilegon",
        addressRegion: "Banten",
        postalCode: "42415",
        addressCountry: "ID",
      },
    },
    areaServed: [
      { "@type": "City", name: "Cilegon" },
      { "@type": "City", name: "Serang" },
      { "@type": "AdministrativeArea", name: "Banten" },
    ],
    serviceType: "Heavy Equipment Rental",
    url: `https://berkahryan.com/layanan/${item.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
          }}
        >
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Beranda
          </Link>
          <span>/</span>
          <Link href="/layanan" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Layanan
          </Link>
          <span>/</span>
          <span style={{ color: "var(--amber-primary)" }}>{item.name}</span>
        </div>

        {/* Header Hero for Unit */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span className="badge-amber">{item.category}</span>
            <span className="badge-k3">100% SIA Kemnaker Certified</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Sewa {item.name}{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--amber-light) 0%, var(--amber-primary) 50%, var(--orange-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ({item.capacityRange})
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "850px",
              lineHeight: 1.7,
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Grid 2-Column: Specs & Applications */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            marginBottom: "5rem",
          }}
        >
          {/* Models Specification Table */}
          <div className="premium-card" style={{ padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: "var(--text-1)" }}>
              Daftar Merek & Spesifikasi Unit
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {item.models.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem",
                    background: "var(--bg-main)",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-1)" }}>
                      {m.brand}
                    </span>
                    <span
                      className="font-mono-spec"
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                      }}
                    >
                      {m.capacity}
                    </span>
                  </div>
                  {m.specsNote && (
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                      {m.specsNote}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Standar K3 & Legalitas Unit:
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--emerald-status)",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                ✓ {item.k3Compliance}
              </p>
            </div>
          </div>

          {/* Applications & Booking Action */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="premium-card" style={{ padding: "2.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "1.25rem", color: "var(--text-1)" }}>
                Area Aplikasi & Skenario Penggunaan
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {item.applications.map((app, aIdx) => (
                  <li
                    key={aIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontWeight: 800,
                        marginTop: "0.1rem",
                      }}
                    >
                      ✓
                    </span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Quote Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(236, 197, 198, 0.3) 0%, rgba(255, 255, 255, 0.95) 100%)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text-1)" }}>
                Minta Penawaran Sewa {item.name}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                Dapatkan kalkulasi harga sewa harian, mingguan, atau bulanan include
                operator SIO dan mobilisasi armada.
              </p>
              <a
                href={`https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20meminta%20penawaran%20harga%20sewa%20${encodeURIComponent(
                  item.name
                )}%20di%20lokasi%20kami.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-fill"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Chat WhatsApp Admin 1 (0818 0899 9462)
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section for Service (Agentic SEO Anchor) */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="badge-steel" style={{ marginBottom: "0.75rem" }}>
              Tanya Jawab
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
              Frequently Asked Questions (FAQ) — {item.name}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {item.faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="premium-card"
                style={{ padding: "1.75rem 2rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.75rem",
                    color: "var(--text-1)",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Fleet Navigation */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link href="/layanan" style={{ color: "var(--amber-primary)", textDecoration: "none", fontWeight: 600 }}>
            ← Kembali ke Katalog Semua Layanan
          </Link>
          <Link href="/armada" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem" }}>
            Lihat Galeri Armada Lengkap →
          </Link>
        </div>
      </div>
    </div>
  );
}
