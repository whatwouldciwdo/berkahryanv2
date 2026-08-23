"use client";

import React, { useState } from "react";

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    telepon: "",
    jenisAlat: "Telescopic Mobile Crane",
    kapasitas: "25 Ton",
    lokasi: "Cilegon, Banten",
    durasi: "Shift Harian (8 Jam)",
    catatan: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `Halo CV. Berkah Ryan, saya ingin meminta Penawaran Harga Sewa Alat Berat:%0A%0A` +
      `👤 *Nama*: ${encodeURIComponent(formData.nama)}%0A` +
      `🏢 *Perusahaan*: ${encodeURIComponent(formData.perusahaan || "-")}%0A` +
      `📞 *No. WA/Telp*: ${encodeURIComponent(formData.telepon)}%0A` +
      `🏗️ *Jenis Alat*: ${encodeURIComponent(formData.jenisAlat)}%0A` +
      `⚖️ *Kapasitas*: ${encodeURIComponent(formData.kapasitas)}%0A` +
      `📍 *Lokasi Proyek*: ${encodeURIComponent(formData.lokasi)}%0A` +
      `⏱️ *Durasi Sewa*: ${encodeURIComponent(formData.durasi)}%0A` +
      `📝 *Catatan*: ${encodeURIComponent(formData.catatan || "-")}`;

    setSubmitted(true);
    window.open(`https://wa.me/6281808999462?text=${text}`, "_blank");
  };

  return (
    <div
      style={{
        background: "var(--bg-surface, #FFFFFF)",
        border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.2))",
        borderRadius: "clamp(20px, 3vw, 32px)",
        padding: "clamp(1.75rem, 4vw, 3.25rem)",
        boxShadow: "0 20px 48px -16px rgba(36, 33, 32, 0.08)",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-3)",
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: 600,
          }}
        >
          Formulir Penawaran Sewa
        </span>
        <h3
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.35rem)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            margin: "0 0 0.75rem 0",
            color: "var(--text-1)",
            lineHeight: 1.15,
          }}
        >
          Minta Penawaran Harga Sewa
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--text-2)",
            margin: 0,
          }}
        >
          Isi detail kebutuhan pengangkatan Anda di bawah ini. Tim teknis kami akan segera menghitung rincian biaya dan menghubungi Anda.
        </p>
      </div>

      {submitted && (
        <div
          style={{
            padding: "1rem 1.25rem",
            background: "rgba(42, 157, 110, 0.12)",
            border: "1px solid rgba(42, 157, 110, 0.3)",
            borderRadius: "12px",
            color: "#1e6d4c",
            fontSize: "0.9rem",
            fontWeight: 500,
            marginBottom: "1.75rem",
          }}
        >
          ✓ Permintaan penawaran telah diteruskan ke WhatsApp Dispatcher 24/7 kami.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          <div>
            <label
              htmlFor="nama"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Nama Lengkap / PIC *
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              value={formData.nama}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="perusahaan"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Nama Perusahaan / PT
            </label>
            <input
              type="text"
              id="perusahaan"
              name="perusahaan"
              value={formData.perusahaan}
              onChange={handleChange}
              placeholder="Contoh: PT. Utama Karya"
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          <div>
            <label
              htmlFor="telepon"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Nomor WhatsApp / HP *
            </label>
            <input
              type="tel"
              id="telepon"
              name="telepon"
              required
              value={formData.telepon}
              onChange={handleChange}
              placeholder="0812xxxxxxx"
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="jenisAlat"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Jenis Alat Berat *
            </label>
            <select
              id="jenisAlat"
              name="jenisAlat"
              value={formData.jenisAlat}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            >
              <option value="Telescopic Mobile Crane">Telescopic Mobile Crane (25 - 600 Ton)</option>
              <option value="Roughter Crane">Rough Terrain / Roughter Crane (25 - 70 Ton)</option>
              <option value="Crawler Crane">Crawler Crane (50 - 250 Ton)</option>
              <option value="Truck Crane / Hiab">Truck Crane / Hiab Crane (3 - 15 Ton)</option>
              <option value="Forklift Heavy Duty">Forklift Heavy Duty (3 - 35 Ton)</option>
              <option value="Trailer & Steel Road Plate">Trailer Lowbed/Flatbed & Steel Road Plate</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          <div>
            <label
              htmlFor="kapasitas"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Estimasi Kapasitas / Beban
            </label>
            <input
              type="text"
              id="kapasitas"
              name="kapasitas"
              value={formData.kapasitas}
              onChange={handleChange}
              placeholder="Contoh: 50 Ton / 25 Ton"
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="lokasi"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Lokasi Proyek *
            </label>
            <input
              type="text"
              id="lokasi"
              name="lokasi"
              required
              value={formData.lokasi}
              onChange={handleChange}
              placeholder="Contoh: Cilegon, Serang, Karawang"
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          <div>
            <label
              htmlFor="durasi"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Durasi Sewa *
            </label>
            <select
              id="durasi"
              name="durasi"
              value={formData.durasi}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
              }}
            >
              <option value="Shift Harian (8 Jam)">Shift Harian (8 Jam)</option>
              <option value="Sewa Mingguan">Sewa Mingguan</option>
              <option value="Sewa Bulanan">Sewa Bulanan</option>
              <option value="Kontrak Proyek Jangka Panjang">Kontrak Proyek Jangka Panjang</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="catatan"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                marginBottom: "0.4rem",
                fontWeight: 600,
              }}
            >
              Catatan Pekerjaan / Detail Radius
            </label>
            <textarea
              id="catatan"
              name="catatan"
              rows={1}
              value={formData.catatan}
              onChange={handleChange}
              placeholder="Detail beban, ketinggian, atau kondisi lapangan..."
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong, rgba(94, 86, 83, 0.22))",
                background: "var(--bg-main, #E9E6E7)",
                color: "var(--text-1)",
                fontSize: "0.95rem",
                outline: "none",
                resize: "vertical",
                minHeight: "46px",
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            marginTop: "0.75rem",
            padding: "1rem 1.75rem",
            background: "var(--text-1, #242120)",
            color: "var(--bg-main, #E9E6E7)",
            border: "none",
            borderRadius: "12px",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          Kirim Permintaan Penawaran via WhatsApp <span aria-hidden="true">↗</span>
        </button>
      </form>
    </div>
  );
}
