import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Tentang Kami & Profil Legalitas CV. Berkah Ryan",
  description:
    "Profil resmi CV. Berkah Ryan, perusahaan penyedia jasa sewa crane 3 s/d 600 Ton dan alat berat di Cilegon Banten sejak 2023. Kepatuhan K3 resmi, sertifikasi SIA & SIO aktif Kemnaker RI.",
  alternates: {
    canonical: "https://berkahryan.com/tentang-kami",
  },
};

export default function TentangKamiPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang CV. Berkah Ryan",
    description:
      "Profil perusahaan CV. Berkah Ryan sebagai spesialis persewaan alat berat crane kapasitas 3 hingga 600 Ton di Cilegon, Banten.",
    mainEntity: {
      "@type": "Organization",
      name: "CV. Berkah Ryan",
      foundingDate: "2023",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006, Desa Ciwaduk",
        addressLocality: "Cilegon",
        addressRegion: "Banten",
        postalCode: "42415",
        addressCountry: "ID",
      },
    },
  };

  const values = [
    {
      title: "Kepatuhan K3 Mutlak (Zero Accident)",
      desc: "Menjadikan keselamatan kerja sebagai prioritas tak ternegosiasi melalui pemenuhan Surat Izin Alat (SIA) dan operator bersertifikat SIO aktif.",
    },
    {
      title: "Kesiapan Armada Maksimal (High Uptime)",
      desc: "Pemeliharaan preventif berkala menjamin seluruh derek dan forklift dalam kondisi prima saat diterjunkan ke area proyek.",
    },
    {
      title: "Respon Cepat & Layanan 24/7",
      desc: "Tim dispatch siap merespon kebutuhan operasional darurat dan setup rigging malam hari di kawasan industri.",
    },
    {
      title: "Transparansi & Rekayasa Angkat",
      desc: "Perhitungan matang mencakup kapasitas, radius kerja, hingga daya dukung tanah dan proteksi pelat baja jalan.",
    },
  ];

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={aboutJsonLd} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header Breadcrumb & Title */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Beranda</Link>
            <span>/</span>
            <span style={{ color: "var(--amber-primary)" }}>Tentang Kami</span>
          </div>
          <span className="badge-amber" style={{ marginBottom: "0.75rem" }}>Profil Korporasi</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 850, lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Spesialis Heavy Lifting & Rental Alat Berat Terpercaya di Banten
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", maxWidth: "800px", lineHeight: 1.6 }}>
            CV. Berkah Ryan yang berdiri sejak tahun 2023 bergerak di bidang jasa penyewaan alat berat dengan fokus utama penyewaan crane berkapasitas 3 hingga 600 ton untuk mendukung kemajuan sektor industri dan infrastruktur nasional.
          </p>
        </div>

        {/* Story & Background Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
            marginBottom: "6rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.25rem", color: "var(--text-1)" }}>
              Berdedikasi untuk Standar Keselamatan & Keandalan Proyek
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Kami berlokasi strategis di Kota Cilegon, Banten, jantung industri petrokimia dan manufaktur berat di ujung barat Pulau Jawa. Kami berkomitmen untuk menyediakan peralatan berkualitas tinggi serta layanan prima kepada para klien dari berbagai sektor.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Seluruh armada kami secara rutin melalui inspeksi K3 berkala guna memastikan kesiapan operasional di lapangan. Setiap operator kami juga dibekali dengan lisensi SIO aktif resmi Kemnaker RI agar proyek Anda dapat berjalan aman, efisien, dan tepat waktu.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <div style={{ padding: "1rem 1.5rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "14px" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent)" }}>2023</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Tahun Berdiri</div>
              </div>
              <div style={{ padding: "1rem 1.5rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "14px" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-1)" }}>3 - 600T</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Rentang Kapasitas Crane</div>
              </div>
              <div style={{ padding: "1rem 1.5rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "14px" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--emerald-status)" }}>100%</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>SIO & SIA Compliance</div>
              </div>
            </div>
          </div>

          <div className="premium-card" style={{ padding: "0.5rem", borderRadius: "24px" }}>
            <div style={{ position: "relative", width: "100%", height: "450px", borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/berkah-ryan-rental-alat-berat-cilegon.webp"
                alt="Operasional CV Berkah Ryan"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "6rem",
          }}
        >
          <div className="premium-card" style={{ padding: "2.5rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "16px" }}>
            <div style={{ fontSize: "0.85rem", color: "var(--accent)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Visi Perusahaan
            </div>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "var(--text-1)" }}>
              Penyedia Rental Alat Berat Pilihan Utama
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Menjadi penyedia persewaan alat berat terbaik di kawasan Banten, Jawa, dan Sumatera yang dikenal dengan komitmen kuat kami terhadap keselamatan, konsistensi mutu armada, dan kepuasan pelanggan secara berkesinambungan.
            </p>
          </div>

          <div className="premium-card" style={{ padding: "2.5rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "16px" }}>
            <div style={{ fontSize: "0.85rem", color: "var(--accent)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Misi Perusahaan
            </div>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "var(--text-1)" }}>
              Standar Layanan & Kapabilitas Unggul
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Memberikan pelayanan persewaan alat berat yang unggul dengan fokus pada persewaan crane berkapasitas 3 hingga 600 ton, serta berkomitmen dalam menyediakan peralatan berkualitas dan pelayanan terbaik kepada klien dari berbagai industri.
            </p>
          </div>
        </div>

        {/* Nilai-Nilai Utama */}
        <div style={{ marginBottom: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge-steel" style={{ marginBottom: "0.75rem" }}>Pilar Kami</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800 }}>Pilar Operasional & Nilai Inti</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {values.map((v, i) => (
              <div key={i} className="premium-card" style={{ padding: "2rem", background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "16px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", color: "var(--accent)", fontWeight: 700, marginBottom: "1rem" }}>
                  0{i + 1}.
                </div>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-1)" }}>{v.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "24px",
            padding: "3.5rem 2rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ingin Mengetahui Lebih Lanjut Mengenai Legalitas & Unit Kami?</h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Hubungi tim administrasi kami untuk meminta dokumen company profile resmi atau mendiskusikan kebutuhan sewa proyek Anda.
          </p>
          <a
            href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20meminta%20Company%20Profile%20dan%20informasi%20legalitas%20alat."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fill"
          >
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
