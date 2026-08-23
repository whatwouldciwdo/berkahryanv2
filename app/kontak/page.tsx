import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import QuotationForm from "../components/QuotationForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hubungi Kami & Permintaan Penawaran Sewa Crane Cilegon | CV. Berkah Ryan",
  description:
    "Hubungi CV. Berkah Ryan untuk sewa crane 3-600 Ton, forklift, dan alat berat di Cilegon Banten. Layanan dispatch operasional 24/7, respon cepat via WhatsApp 0818 0899 9462.",
  alternates: {
    canonical: "https://berkahryan.com/kontak",
  },
};

const channels = [
  {
    index: "01",
    label: "WhatsApp dispatcher",
    value: "+62 818-0899-9462",
    note: "Respons tercepat · aktif 24 jam",
    href: "https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20sewa%20alat%20berat.",
    external: true,
  },
  {
    index: "02",
    label: "Email korespondensi",
    value: "enquiries@berkahryan.com",
    note: "Penawaran resmi, dokumen tender, PO",
    href: "mailto:enquiries@berkahryan.com",
    external: false,
  },
  {
    index: "03",
    label: "Kantor operasional",
    value: "Ciwaduk, Cilegon",
    note: "Jalan Lada BBS II Blok A-1/14, Banten 42415",
    href: "https://maps.google.com/?q=Jalan+Lada+BBS+II+Ciwaduk+Cilegon+Banten",
    external: true,
  },
];

const details: [string, string, string][] = [
  [
    "Jam kerja",
    "Senin – Sabtu, 08.00 – 17.00 WIB",
    "Dispatch dan mobilisasi darurat tetap dilayani di luar jam kerja, termasuk hari libur.",
  ],
  [
    "Cakupan mobilisasi",
    "Cilegon · Serang · Anyer · Pandeglang",
    "Mobilisasi lanjutan ke seluruh Pulau Jawa dan Sumatera memakai trailer 40 feet flatbed maupun lowbed.",
  ],
  [
    "Sebelum menghubungi",
    "Siapkan 4 data dasar",
    "Berat beban, radius kerja, kondisi akses lokasi, dan rencana tanggal pekerjaan. Estimasi awal sudah cukup.",
  ],
];

export default function KontakPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Hubungi CV. Berkah Ryan",
    description:
      "Informasi kontak kantor, jam operasional 24/7, dan formulir permintaan sewa crane.",
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
    <main className={styles.page}>
      <JsonLd data={contactJsonLd} />

      <header className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Kontak</span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Dispatch desk · Cilegon &amp; Banten</p>
              <h1>Ceritakan pekerjaannya. Kami balas dengan angka.</h1>
            </div>
            <div className={styles.heroIntro}>
              <p>
                Konsultasi kebutuhan tonase, survei lokasi di wilayah Cilegon dan
                Banten, sampai penawaran harga sewa. Tim kami memakai data lapangan
                Anda sebagai titik awal, bukan sekadar daftar unit.
              </p>
              <span>Respons rata-rata di bawah 30 menit</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.channels} aria-labelledby="channels-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>01 / Saluran langsung</p>
              <h2 id="channels-title">Tiga jalur, satu tim yang sama.</h2>
            </div>
            <p>
              Semua saluran masuk ke dispatcher yang memegang jadwal unit. Untuk
              kebutuhan mendesak, WhatsApp tetap jalur tercepat.
            </p>
          </div>

          <div className={styles.channelList}>
            {channels.map((channel) => (
              <a
                key={channel.index}
                className={styles.channelRow}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={styles.channelIndex}>{channel.index}</span>
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelValue}>{channel.value}</span>
                <span className={styles.channelNote}>
                  <span>{channel.note}</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>

          <dl className={styles.details}>
            {details.map(([term, headline, text]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>
                  <strong>{headline}</strong>
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.mapSection} aria-label="Peta lokasi kantor">
        <div className={styles.container}>
          <div className={styles.mapBar}>
            <p className={styles.eyebrow}>02 / Titik jemput unit &amp; administrasi</p>
            <a
              href="https://maps.google.com/?q=Jalan+Lada+BBS+II+Ciwaduk+Cilegon+Banten"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka di Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.mapFrame}>
            <iframe
              title="Peta Lokasi CV Berkah Ryan Cilegon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.458920194452!2d106.035!3d-6.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418e5cb1594957%3A0x6b772b7a0f6700c0!2sCilegon%2C%20Cilegon%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              height={400}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className={styles.formSection} aria-label="Formulir permintaan penawaran">
        <div className={styles.container}>
          <div className={styles.formHead}>
            <p>03 / Permintaan penawaran</p>
            <h2>Kirim brief, terima estimasi.</h2>
            <p>
              Isi parameter pengangkatan Anda. Data langsung diteruskan ke WhatsApp
              dispatcher agar tim teknis dapat menghitung kapasitas dan rincian biaya
              sewa.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <QuotationForm />
          </div>
        </div>
      </section>
    </main>
  );
}

