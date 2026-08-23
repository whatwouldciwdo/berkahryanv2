import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import QuotationForm from "../components/QuotationForm";
import CoverageMarquee from "../components/CoverageMarquee";

export const metadata: Metadata = {
  title: "Tentang Kami | Spesialis Jasa Sewa Crane Cilegon & Banten",
  description:
    "Kenali CV. Berkah Ryan, spesialis jasa sewa crane dan rental alat berat dari Cilegon dengan pengalaman lebih dari 10 tahun. Melayani Cilegon, Serang, Anyer, Pandeglang, Banten, Jawa, dan Sumatera dengan operator ber-SIO dan unit bersertifikat K3.",
  keywords: [
    "tentang cv berkah ryan",
    "perusahaan sewa crane cilegon",
    "jasa sewa crane banten terpercaya",
    "sertifikat K3 SIA SIO crane",
  ],
  alternates: { canonical: "https://berkahryan.com/tentang-kami" },
  openGraph: {
    title: "Tentang Kami | Spesialis Jasa Sewa Crane Cilegon & Banten",
    description:
      "Lebih dari 10 tahun melayani jasa sewa crane untuk industri di Cilegon, Serang, Anyer, Pandeglang, dan seluruh Banten.",
    url: "https://berkahryan.com/tentang-kami",
  },
};

const facts = [
  { value: "10+", label: "Tahun pengalaman" },
  { value: "600", unit: "ton", label: "Kapasitas crane" },
  { value: "24/7", label: "Dukungan proyek" },
  { value: "100%", label: "Operator ber-SIO" },
];

const principles = [
  {
    number: "01",
    title: "Keselamatan sebelum pergerakan",
    text: "Pemeriksaan unit, operator, rigging, akses, dan kondisi lapangan dilakukan secara ketat sebelum pekerjaan dimulai.",
  },
  {
    number: "02",
    title: "Keputusan berbasis kondisi lokasi",
    text: "Kapasitas alat tidak dipilih dari tonase saja. Radius kerja, ground bearing, ruang manuver, dan metode lifting ikut menentukan.",
  },
  {
    number: "03",
    title: "Satu tim sampai pekerjaan selesai",
    text: "Kami mendampingi dari konsultasi, mobilisasi, setup outrigger, eksekusi lifting, hingga demobilisasi.",
  },
];

export default function TentangKamiPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <span>Tentang Kami</span>
        </nav>
        <h1 id="about-title" className={styles.heroTitle}>
          Kami tumbuh dari
          <br />
          pekerjaan lapangan.
        </h1>
      </section>

      <section className={styles.narrativeSection} aria-label="Cerita dan filosofi kami">
        <div className={styles.narrativeGrid}>
          <div className={styles.logoVisual}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/berkahryan-logo.svg"
              alt="Logo CV. Berkah Ryan"
              className={styles.brandLogoImg}
            />
          </div>

          <div className={styles.narrativeBody}>
            <p className={styles.narrativeParagraph}>
              Sejak awal berdiri, kami selalu menyukai dinamika lapangan dan orang-orang di dalamnya. Kami tahu betul bahwa kami bukan tipe yang hanya bekerja di balik meja saat pekerjaan pengangkatan besar sedang dipertaruhkan.
            </p>
            <p className={styles.narrativeParagraph}>
              Lebih dari sepuluh tahun kemudian, kami membuktikan bahwa pekerjaan ini sesungguhnya bukan sekadar tentang besarnya mesin atau tonase crane. Ini tentang mendengarkan kebutuhan proyek, memahami risiko nyata di lokasi, dan memiliki kepedulian tinggi untuk mengeksekusi setiap detail dengan presisi dan aman.
            </p>
            <p className={styles.narrativeParagraph}>
              Prinsip dan dedikasi yang kami pegang sejak awal, kini terwujud dalam setiap manuver alat berat dan kepercayaan mitra industri di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      <CoverageMarquee />

      <section className={styles.factSection} aria-label="Fakta perusahaan">
        {facts.map((fact) => (
          <div className={styles.fact} key={fact.label}>
            <p className={styles.factValue}>
              {fact.value}
              {fact.unit && <span>{fact.unit}</span>}
            </p>
            <p className={styles.factLabel}>{fact.label}</p>
          </div>
        ))}
      </section>

      <section className={styles.principles} aria-labelledby="principles-title">
        <div className={styles.principlesHeading}>
          <h2 id="principles-title">Standar yang kami bawa ke setiap lokasi.</h2>
        </div>
        <div className={styles.principleList}>
          {principles.map((principle) => (
            <article className={styles.principleRow} key={principle.number}>
              <span className={styles.principleNumber}>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.mapSection} aria-label="Alamat Kantor dan Peta Lokasi">
        <div className={styles.mapContainer}>
          <div className={styles.mapHeader}>
            <div>
              <span className={styles.mapMeta}>Kantor Operasional & Dispatch Center</span>
              <h2 className={styles.mapTitle}>Lokasi CV. Berkah Ryan</h2>
              <p className={styles.mapAddress}>
                Jalan Lada BBS II Blok A-1/14, Rt 009, Rw 006, Desa Ciwaduk, Kec. Cilegon, Provinsi Banten 42415
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Jalan+Lada+BBS+II+Ciwaduk+Cilegon+Banten"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              Buka di Google Maps ↗
            </a>
          </div>

          <div className={styles.mapFrameWrapper}>
            <iframe
              title="Peta Lokasi CV Berkah Ryan Cilegon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.458920194452!2d106.035!3d-6.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418e5cb1594957%3A0x6b772b7a0f6700c0!2sCilegon%2C%20Cilegon%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>
        </div>
      </section>

      <section className={styles.quotationSection} aria-label="Formulir Permintaan Penawaran">
        <div className={styles.quotationWrapper}>
          <QuotationForm />
        </div>
      </section>
    </div>
  );
}
