import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { craneFleetData } from "../data/siteData";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Katalog Spesifikasi Armada Crane & Forklift | CV. Berkah Ryan",
  description:
    "Spesifikasi teknis lengkap armada Telescopic Crane 25-600T, Crawler Crane 45-550T, Roughter Crane, Truck Crane, Forklift 3-35T, dan Steel Road Plate di Cilegon Banten.",
  alternates: {
    canonical: "https://berkahryan.com/armada",
  },
};

export default function ArmadaPage() {
  const armadaJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Armada Crane & Heavy Equipment CV. Berkah Ryan",
    description: "Daftar unit armada derek dan alat berat yang siap dioperasikan.",
    numberOfItems: craneFleetData.length,
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={armadaJsonLd} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Breadcrumb & Header */}
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
            <span style={{ color: "var(--amber-primary)" }}>Armada & Spesifikasi</span>
          </div>

          <span className="badge-amber" style={{ marginBottom: "0.75rem" }}>
            Data Teknis Armada
          </span>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Spesifikasi Lengkap Armada Derek & Alat Berat
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              lineHeight: 1.6,
            }}
          >
            Tabel komprehensif seluruh merek terkemuka (Tadano, Kato, Sany, Liebherr,
            Demag, Kobelco, TCM, Mitsubishi) dengan konfigurasi kapasitas angkat dan
            peruntukan operasional.
          </p>
        </div>

        {/* Fleet List Detail Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "5rem" }}>
          {craneFleetData.map((item, idx) => (
            <div
              key={item.id}
              className="premium-card"
              style={{
                padding: "2.5rem",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent)",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      #0{idx + 1}
                    </span>
                    <span className="badge-k3">Ready for Ops</span>
                  </div>
                  <h2 style={{ fontSize: "1.75rem", color: "var(--text-1)" }}>{item.name}</h2>
                </div>

                <div
                  style={{
                    padding: "0.5rem 1.25rem",
                    background: "var(--steel-blue-dim)",
                    border: "1px solid rgba(107, 124, 152, 0.3)",
                    borderRadius: "12px",
                    textAlign: "right",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Kapasitas Angkat
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "var(--steel-blue)",
                    }}
                  >
                    {item.capacityRange}
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "2rem" }}>
                {item.description}
              </p>

              {/* Models Matrix */}
              <div
                style={{
                  background: "var(--bg-main)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  marginBottom: "2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  Rincian Unit & Merek Tersedia:
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {item.models.map((model, mIdx) => (
                    <div
                      key={mIdx}
                      style={{
                        padding: "1rem",
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: 700,
                          color: "var(--text-1)",
                          marginBottom: "0.35rem",
                        }}
                      >
                        <span>{model.brand}</span>
                        <span className="font-mono-spec" style={{ color: "var(--dark-slate)" }}>
                          {model.capacity}
                        </span>
                      </div>
                      {model.specsNote && (
                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                          {model.specsNote}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ fontSize: "0.85rem", color: "var(--emerald-status)" }}>
                  ✓ {item.k3Compliance}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Link href={`/layanan/${item.slug}`} className="btn-secondary" style={{ fontSize: "0.85rem" }}>
                    Detail Lengkap & FAQ
                  </Link>
                  <a
                    href={`https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20cek%20ketersediaan%20unit%20${encodeURIComponent(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-fill"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Cek Ketersediaan Unit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
