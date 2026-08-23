import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { portfolioData } from "../data/siteData";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Portofolio Proyek & Klien Industri | CV. Berkah Ryan Cilegon",
  description:
    "Rekam jejak proyek pengangkatan crane dan rental alat berat CV. Berkah Ryan untuk PT Pertamina, PT Chandra Asri Petrochemical, PLN Indonesia Power, Lotte Chemical, dan Indorama.",
  alternates: {
    canonical: "https://berkahryan.com/proyek",
  },
};

export default function ProyekPage() {
  const projectListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portofolio Proyek CV. Berkah Ryan",
    description: "Daftar studi kasus proyek industri dan rekayasa pengangkatan berat.",
    itemListElement: portfolioData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.client} - ${item.title}`,
      url: `https://berkahryan.com/proyek/${item.slug}`,
      description: item.highlight,
    })),
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={projectListJsonLd} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            }}
          >
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Beranda
            </Link>
            <span>/</span>
            <span style={{ color: "var(--amber-primary)" }}>Proyek & Klien</span>
          </div>

          <span className="badge-amber" style={{ marginBottom: "0.75rem" }}>
            Rekam Jejak Lapangan
          </span>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Proyek & Kepercayaan Mitra Industri
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              lineHeight: 1.6,
            }}
          >
            CV. Berkah Ryan bangga menjadi mitra lifting andalan di berbagai sektor
            strategis: kilang petrokimia, pembangkit energi, fasilitas penyimpanan BBM,
            hingga pabrik manufaktur berskala multinasional.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "5rem" }}>
          {portfolioData.map((item) => (
            <div
              key={item.slug}
              className="premium-card"
              style={{
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span className="badge-amber">{item.category}</span>
                  <span className="font-mono-spec" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Periode: {item.year}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.6rem", color: "var(--text-1)", marginBottom: "0.5rem" }}>
                  {item.client}
                </h2>
                <h3 style={{ fontSize: "1.1rem", color: "var(--dark-slate)", marginBottom: "1rem" }}>
                  {item.title}
                </h3>

                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {item.description}
                </p>

                <div style={{ padding: "1rem", background: "var(--bg-main)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    Highlight Kinerja:
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--emerald-status)", fontWeight: 600 }}>
                    ★ {item.highlight}
                  </p>
                </div>
              </div>

              <div style={{ background: "var(--bg-main)", padding: "2rem", borderRadius: "18px", border: "1px solid var(--border)" }}>
                <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
                  Lingkup Pekerjaan & Armada yang Diterjunkan:
                </h4>

                <div style={{ marginBottom: "1.25rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--dark-slate)", fontWeight: 700, marginBottom: "0.4rem" }}>
                    Scope of Work:
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {item.scope.map((s, sIdx) => (
                      <li key={sIdx} style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        • {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--dark-slate)", fontWeight: 700, marginBottom: "0.4rem" }}>
                    Armada Digunakan:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {item.equipmentUsed.map((eq, eIdx) => (
                      <span
                        key={eIdx}
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.25rem 0.6rem",
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border)",
                          borderRadius: "6px",
                          color: "var(--text-1)",
                          fontWeight: 500,
                        }}
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/proyek/${item.slug}`} className="btn btn-fill" style={{ width: "100%", justifyContent: "center" }}>
                  Baca Rincian Studi Kasus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
