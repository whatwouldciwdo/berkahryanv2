import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData } from "../../data/siteData";
import JsonLd from "../../components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioData.find((p) => p.slug === slug);

  if (!item) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${item.client} - ${item.title} | CV. Berkah Ryan`,
    description: `Studi kasus pengerjaan rental crane & alat berat CV. Berkah Ryan untuk ${item.client} di ${item.location}. ${item.highlight}`,
    alternates: {
      canonical: `https://berkahryan.com/proyek/${item.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolioData.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${item.client} — ${item.title}`,
    headline: item.title,
    description: item.description,
    author: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
    },
    about: {
      "@type": "Thing",
      name: item.category,
    },
    locationCreated: {
      "@type": "Place",
      name: item.location,
    },
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={caseStudyJsonLd} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>
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
          <Link href="/proyek" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Proyek
          </Link>
          <span>/</span>
          <span style={{ color: "var(--amber-primary)" }}>{item.client}</span>
        </div>

        {/* Title and Metadata */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span className="badge-amber">{item.category}</span>
            <span className="badge-k3">Lokasi: {item.location}</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              fontWeight: 850,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            {item.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1rem 1.5rem",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "14px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Klien Utama</div>
              <div style={{ fontWeight: 700, color: "var(--text-1)" }}>{item.client}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Periode</div>
              <div className="font-mono-spec" style={{ color: "var(--accent)" }}>{item.year}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Area</div>
              <div style={{ color: "var(--text-secondary)" }}>{item.location}</div>
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <div
          style={{
            padding: "2rem",
            background: "rgba(16, 185, 129, 0.08)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            borderRadius: "18px",
            marginBottom: "3.5rem",
          }}
        >
          <div style={{ fontSize: "0.8rem", color: "var(--emerald-status)", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>
            Pencapaian Utama Proyek
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-1)", lineHeight: 1.6, fontWeight: 600 }}>
            ★ {item.highlight}
          </p>
        </div>

        {/* Deep Dive Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text-1)", marginBottom: "1rem" }}>
              Latar Belakang & Kebutuhan Operasional
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {item.description}
            </p>
          </div>

          <div className="premium-card" style={{ padding: "2.25rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "var(--text-1)", marginBottom: "1.25rem" }}>
              Ruang Lingkup Pekerjaan (Scope of Work)
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {item.scope.map((s, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card" style={{ padding: "2.25rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "var(--text-1)", marginBottom: "1.25rem" }}>
              Armada & Alat Berat yang Dikerahkan
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {item.equipmentUsed.map((eq, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.6rem 1.2rem",
                    background: "var(--steel-blue-dim)",
                    border: "1px solid rgba(107, 124, 152, 0.3)",
                    borderRadius: "10px",
                    color: "var(--text-1)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {eq}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Contact Action */}
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "3rem 2rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            Punya Proyek Serupa di Kawasan {item.location}?
          </h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.6 }}>
            Konsultasikan metode pengangkatan dan spesifikasi crane yang paling aman dan efisien
            bersama tim engineer Berkah Ryan.
          </p>
          <a
            href={`https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(
              item.client
            )}%20dan%20ingin%20konsultasi%20proyek%20kami.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fill"
          >
            Konsultasi dengan Engineer Lifting →
          </a>
        </div>

        <Link href="/proyek" style={{ color: "var(--amber-primary)", textDecoration: "none", fontWeight: 600 }}>
          ← Kembali ke Semua Proyek
        </Link>
      </div>
    </div>
  );
}
