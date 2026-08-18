import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Hubungi Kami & Permintaan Penawaran Sewa Crane Cilegon | CV. Berkah Ryan",
  description:
    "Hubungi CV. Berkah Ryan untuk sewa crane 3-600 Ton, forklift, dan alat berat di Cilegon Banten. Layanan dispatch operasional 24/7, respon cepat via WhatsApp 0818 0899 9462.",
  alternates: {
    canonical: "https://berkahryan.com/kontak",
  },
};

export default function KontakPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Hubungi CV. Berkah Ryan",
    description: "Informasi kontak kantor, jam operasional 24/7, dan formulir permintaan sewa crane.",
    mainEntity: {
      "@type": "EquipmentRentalAgency",
      name: "CV. Berkah Ryan",
      telephone: "+6281808999462",
      email: "enquiries@berkahryan.com",
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

  return (
    <div style={{ paddingTop: "7.5rem", paddingBottom: "6rem" }}>
      <JsonLd data={contactJsonLd} />

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
            <span style={{ color: "var(--amber-primary)" }}>Kontak</span>
          </div>

          <span className="badge-amber" style={{ marginBottom: "0.75rem" }}>
            Layanan 24/7
          </span>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Hubungi CV. Berkah Ryan
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              lineHeight: 1.6,
            }}
          >
            Konsultasikan kebutuhan tonase derek, survei site gratis di wilayah Cilegon &
            Banten, serta peroleh penawaran harga terbaik dari tim spesialis lifting kami.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Direct Action */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            marginBottom: "5rem",
          }}
        >
          {/* Left Column: Direct Office & WhatsApp */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="premium-card" style={{ padding: "2.5rem", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "16px" }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Saluran Kontak Langsung
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                  WhatsApp Dispatcher (Admin 1 - 24/7):
                </div>
                <a
                  href="https://wa.me/6281808999462"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontFamily: "var(--font-heading)",
                    display: "block",
                  }}
                >
                  +62 818-0899-9462
                </a>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                  Email Korespondensi:
                </div>
                <a
                  href="mailto:enquiries@berkahryan.com"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-1)",
                    textDecoration: "none",
                  }}
                >
                  enquiries@berkahryan.com
                </a>
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                  Alamat Kantor Operasional:
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006,
                  <br />
                  Desa Ciwaduk, Kec. Cilegon, Provinsi Banten,
                  <br />
                  Kode Pos 42415
                </p>
              </div>
            </div>

            <div
              style={{
                padding: "2rem",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                borderRadius: "18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 10px #10b981",
                  }}
                />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--emerald-status)", textTransform: "uppercase" }}>
                  Status Layanan Darurat 24 Jam
                </span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Tersedia unit standby untuk mobilisasi cepat malam hari, emergency rigging di kilang industri, dan pergantian komponen mendesak.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="premium-card" style={{ padding: "2.5rem", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "16px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text-1)" }}>
              Kirimkan Permintaan Penawaran (Inquiry)
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.5 }}>
              Isi parameter dasar pengangkatan Anda, tim kami akan merespon dengan estimasi kapasitas dan rincian biaya sewa.
            </p>

            <form
              action="https://wa.me/6281808999462"
              method="get"
              target="_blank"
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Nama Lengkap / Perusahaan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: PT Surya Konstruksi / Bpk. Hendra"
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: "10px",
                    color: "var(--text-1)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Kebutuhan Armada / Alat Berat
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: "10px",
                    color: "var(--text-1)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                >
                  <option value="Telescopic Mobile Crane (25-600T)">Telescopic Mobile Crane (25-600 Ton)</option>
                  <option value="Crawler Crane (45-550T)">Crawler Crane Rantai (45-550 Ton)</option>
                  <option value="Roughter Crane (25-110T)">Roughter Crane 4x4 (25-110 Ton)</option>
                  <option value="Truck Mounted Crane (3-16T)">Truck Mounted Crane Hiab (3-16 Ton)</option>
                  <option value="Forklift Industri (3-35T)">Forklift Diesel / Heavy Duty (3-35 Ton)</option>
                  <option value="Trailer 40 Ft & Steel Road Plate">Trailer 40 Feet / Steel Road Plate 25mm</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Lokasi Proyek & Perkiraan Durasi Sewa
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kawasan Industri Ciwandan Cilegon, Sewa 1 Bulan"
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: "10px",
                    color: "var(--text-1)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  Keterangan Tambahan / Berat Beban
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Erection tangki berat 45 ton pada radius 12 meter..."
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: "10px",
                    color: "var(--text-1)",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-fill"
                style={{ width: "100%", padding: "0.9rem", fontSize: "1rem", marginTop: "0.5rem", justifyContent: "center" }}
              >
                Kirim via WhatsApp Admin 1 →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
