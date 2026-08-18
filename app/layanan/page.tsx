import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { craneFleetData } from "../data/siteData";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Layanan Sewa Crane & Alat Berat Cilegon Banten | CV. Berkah Ryan",
  description:
    "Katalog lengkap persewaan derek crane 3 s/d 600 Ton di Cilegon Banten: Telescopic Mobile Crane, Crawler Crane, Roughter Crane, Truck Mounted Crane, Forklift Industri, dan Pelat Baja Jalan.",
  alternates: {
    canonical: "https://berkahryan.com/layanan",
  },
};

export default function LayananOverviewPage() {
  const serviceCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Layanan Rental Alat Berat CV. Berkah Ryan",
    description:
      "Daftar spesifikasi armada crane dan alat berat yang siap disewa di Cilegon, Serang, dan Banten.",
    itemListElement: craneFleetData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `https://berkahryan.com/layanan/${item.slug}`,
      description: item.shortDesc,
    })),
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={serviceCatalogJsonLd} />

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
            <span style={{ color: "var(--amber-primary)" }}>Layanan & Armada</span>
          </div>

          <span className="badge-amber" style={{ marginBottom: "0.75rem" }}>
            Katalog Layanan & Alat
          </span>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Layanan Rental Crane & Alat Berat Bersertifikasi K3
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              lineHeight: 1.6,
            }}
          >
            Pilihan armada derek terlengkap di Cilegon dan Banten dengan kapasitas
            mulai dari 3 Ton hingga 600 Ton. Dilengkapi Surat Izin Alat (SIA) resmi
            Kemnaker RI, operator SIO berpengalaman, dan dukungan lift plan engineer.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem",
            marginBottom: "5rem",
          }}
        >
          {craneFleetData.map((item) => (
            <div
              key={item.id}
              className="premium-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    className="font-mono-spec"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--amber-primary)",
                      padding: "0.25rem 0.6rem",
                      background: "rgba(245, 158, 11, 0.1)",
                      borderRadius: "6px",
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text-1)",
                    }}
                  >
                    {item.capacityRange}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.5rem", marginBottom: "0.85rem", color: "var(--text-1)" }}>
                  {item.name}
                </h2>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.shortDesc}
                </p>

                {/* Model and specs table preview */}
                <div
                  style={{
                    background: "var(--bg-main)",
                    borderRadius: "12px",
                    padding: "1rem",
                    marginBottom: "1.5rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Model & Konfigurasi Tonase:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {item.models.map((m, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.8rem",
                        }}
                      >
                        <span style={{ color: "var(--text-1)", fontWeight: 600 }}>{m.brand}</span>
                        <span className="font-mono-spec" style={{ color: "var(--accent)" }}>
                          {m.capacity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications bullet points */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Area Aplikasi Utama:
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                    }}
                  >
                    {item.applications.slice(0, 3).map((app, aIdx) => (
                      <li
                        key={aIdx}
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <span style={{ color: "var(--amber-primary)" }}>•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  href={`/layanan/${item.slug}`}
                  className="btn-secondary"
                  style={{ fontSize: "0.85rem", padding: "0.6rem 1.2rem" }}
                >
                  Detail Spesifikasi & FAQ →
                </Link>

                <a
                  href={`https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20tertarik%20sewa%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--amber-light)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Pesan via WA
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Support Section */}
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "24px",
            padding: "3.5rem 2rem",
            textAlign: "center",
          }}
        >
          <span className="badge-k3" style={{ marginBottom: "1rem" }}>
            Survey Site Gratis
          </span>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Belum Yakin Berapa Kapasitas Derek yang Anda Butuhkan?
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "650px",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Tim lift engineer kami siap melakukan inspeksi lapangan untuk mengukur
            radius kerja, berat total muatan, dan kestabilan outrigger di area Cilegon
            dan Banten.
          </p>
          <a
            href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20jadwalkan%20survey%20lokasi%20pengangkatan%20crane."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
          >
            Jadwalkan Konsultasi & Survey Site
          </a>
        </div>
      </div>
    </div>
  );
}
