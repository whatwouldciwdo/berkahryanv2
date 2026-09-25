import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPostsData } from "../../data/siteData";
import JsonLd from "../../components/JsonLd";
import { withPageMetadata } from "../../data/seo";


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return withPageMetadata({
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://berkahryan.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.datePublished,
      url: `https://berkahryan.com/blog/${post.slug}`,
    },
  });
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    inLanguage: "id-ID",
    author: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      url: "https://berkahryan.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      logo: {
        "@type": "ImageObject",
        url: "https://berkahryan.com/berkahryan-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://berkahryan.com/blog/${post.slug}`,
    },
  };

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={articleJsonLd} />

      <div style={{ maxWidth: "850px", margin: "0 auto", padding: "0 1.5rem" }}>
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
          <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Wawasan K3
          </Link>
          <span>/</span>
          <span style={{ color: "var(--amber-primary)" }}>{post.category}</span>
        </div>

        <header style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
            <span className="badge-amber">{post.category}</span>
            <span className="font-mono-spec" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {post.readTime}
            </span>
            <time dateTime={post.datePublished} style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>• {post.date}</time>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 850,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              borderLeft: "3px solid var(--amber-primary)",
              paddingLeft: "1.25rem",
            }}
          >
            {post.excerpt}
          </p>
        </header>

        <div
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "4rem",
          }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div
          style={{
            padding: "2rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "18px",
            marginBottom: "3.5rem",
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "var(--steel-blue-dim)",
              border: "1px solid rgba(107, 124, 152, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--dark-slate)",
              fontWeight: 800,
              fontSize: "1.2rem",
              flexShrink: 0,
            }}
          >
            BR
          </div>
          <div>
            <h3 style={{ fontSize: "1rem", color: "var(--text-1)", marginBottom: "0.25rem" }}>
              Diterbitkan oleh Tim HSE & Engineering CV. Berkah Ryan
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              CV. Berkah Ryan berkomitmen membagikan wawasan teknis seputar keselamatan kerja,
              regulasi K3 Kemnaker, dan efisiensi sewa alat berat crane di Indonesia.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link href="/blog" style={{ color: "var(--amber-primary)", textDecoration: "none", fontWeight: 600 }}>
            ← Kembali ke Semua Artikel
          </Link>
          <a
            href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20membaca%20artikel%20website%20dan%20ingin%20konsultasi%20K3/sewa%20crane."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.85rem" }}
          >
            Konsultasi dengan Engineer Kami
          </a>
        </div>
      </div>
    </div>
  );
}
