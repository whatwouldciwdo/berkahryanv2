import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsData } from "../data/siteData";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Wawasan K3, Regulasi & Panduan Derek Alat Berat | CV. Berkah Ryan",
  description:
    "Kumpulan artikel edukatif mengenai pemilihan kapasitas crane, kepatuhan K3 Kemnaker, sertifikasi SIA & SIO, load chart, dan tips pengangkatan beban berat di Indonesia.",
  alternates: {
    canonical: "https://berkahryan.com/blog",
  },
};

export default function BlogListingPage() {
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Jurnal Wawasan K3 & Alat Berat CV. Berkah Ryan",
    description: "Artikel panduan teknis dan kepatuhan K3 seputar rental crane dan alat berat.",
    blogPost: blogPostsData.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://berkahryan.com/blog/${post.slug}`,
      datePublished: "2026-08-01",
    })),
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={blogListJsonLd} />

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
            <span style={{ color: "var(--amber-primary)" }}>Wawasan & Jurnal</span>
          </div>

          <span className="badge-amber" style={{ marginBottom: "0.75rem" }}>
            Edukasi Industri & K3
          </span>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Wawasan K3, Panduan Derek & Logistik Alat Berat
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              lineHeight: 1.6,
            }}
          >
            Pelajari standar operasional keselamatan (HSE), cara kalkulasi load chart,
            sertifikasi resmi Kemnaker RI, dan efisiensi logistik derek di kawasan industri.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          {blogPostsData.map((post) => (
            <article
              key={post.slug}
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
                    marginBottom: "1rem",
                  }}
                >
                  <span className="badge-amber">{post.category}</span>
                  <span
                    className="font-mono-spec"
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    {post.readTime}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--text-1)",
                    marginBottom: "1rem",
                    lineHeight: 1.3,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "var(--text-1)", textDecoration: "none" }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {post.excerpt}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {post.date}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: "var(--amber-primary)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span>Baca Artikel</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
