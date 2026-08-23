import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Jasa Sewa Crane & Layanan Lifting Cilegon, Serang, Anyer, Pandeglang",
  description:
    "Layanan jasa sewa crane lengkap: konsultasi lifting, site survey, lift plan, penyediaan unit crane dan operator SIO, rigging, hingga mobilisasi untuk proyek di Cilegon, Serang, Anyer, Pandeglang, dan seluruh Banten.",
  keywords: [
    "jasa sewa crane cilegon",
    "jasa sewa crane serang",
    "jasa sewa crane anyer",
    "jasa sewa crane pandeglang",
    "jasa lifting banten",
    "sewa crane dan operator",
    "lift plan rigging cilegon",
  ],
  alternates: { canonical: "https://berkahryan.com/layanan" },
  openGraph: {
    title:
      "Jasa Sewa Crane & Layanan Lifting Cilegon, Serang, Anyer, Pandeglang",
    description:
      "Konsultasi lifting, site survey, lift plan, unit crane bersertifikat SIA, dan operator SIO aktif untuk proyek industri di Banten.",
    url: "https://berkahryan.com/layanan",
  },
};


const serviceScopes = [
  {
    number: "01",
    title: "Konsultasi kebutuhan",
    desc: "Tim dispatch menelaah beban, radius, elevasi, akses, dan jadwal untuk mempersempit pilihan metode kerja.",
    output: "Rekomendasi awal unit & kebutuhan survey",
  },
  {
    number: "02",
    title: "Site survey",
    desc: "Pemeriksaan jalur masuk, area setup, ruang putar, kondisi tanah, overhead obstruction, dan titik penempatan beban.",
    output: "Catatan kondisi lokasi & batas operasional",
  },
  {
    number: "03",
    title: "Lift plan & persiapan K3",
    desc: "Perencanaan radius kerja, konfigurasi boom, stabilisasi, kebutuhan road plate, rigging, serta koordinasi dokumen alat dan operator.",
    output: "Metode kerja dan kebutuhan pendukung",
  },
  {
    number: "04",
    title: "Unit, operator & rigging",
    desc: "Penyediaan unit sesuai hasil perhitungan, operator berlisensi aktif, dan perlengkapan rigging berdasarkan lingkup yang disepakati.",
    output: "Resources siap untuk mobilisasi",
  },
  {
    number: "05",
    title: "Mobilisasi & setup",
    desc: "Koordinasi pengiriman unit, akses masuk site, penempatan outrigger atau crane mat, pre-start check, dan toolbox meeting.",
    output: "Area kerja siap dieksekusi",
  },
  {
    number: "06",
    title: "Eksekusi & demobilisasi",
    desc: "Pelaksanaan lifting sesuai komunikasi signalman dan pengawas lapangan, dilanjutkan breakdown serta pelepasan area kerja.",
    output: "Pekerjaan selesai & unit keluar site",
  },
];

const workTypes = [
  ["Heavy lifting", "Erection struktur, pemasangan girder, vessel, mesin industri, dan komponen berat."],
  ["Plant maintenance", "Shutdown support, pergantian equipment, unloading, serta pekerjaan di area pabrik aktif."],
  ["Material handling", "Pemindahan material menggunakan forklift atau crane untuk kebutuhan gudang dan proyek."],
  ["Project logistics", "Trailer 40 ft, pengiriman unit, serta steel road plate untuk akses dan stabilisasi area kerja."],
];

const requirements = [
  ["Data beban", "Berat, dimensi, lifting point, dan pusat gravitasi bila tersedia."],
  ["Data lokasi", "Alamat site, foto akses, area setup, serta kondisi permukaan tanah."],
  ["Jangkauan", "Radius horizontal dan elevasi tujuan dari posisi rencana unit."],
  ["Waktu kerja", "Tanggal, shift, estimasi durasi, dan aturan jam masuk kawasan."],
];

export default function LayananPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Sewa Crane dan Layanan Lifting CV. Berkah Ryan",
    serviceType: "Jasa sewa crane, heavy lifting, rigging, dan project logistics",
    provider: { "@id": "https://berkahryan.com/#organization" },
    areaServed: [
      "Cilegon",
      "Serang",
      "Anyer",
      "Pandeglang",
      "Merak",
      "Banten",
      "Jawa",
      "Sumatera",
    ],
    description:
      "Jasa sewa crane dan dukungan proyek dari konsultasi, site survey, lift plan, mobilisasi, lifting, rigging, hingga demobilisasi di Cilegon, Serang, Anyer, Pandeglang, dan seluruh Banten.",

  };

  return (
    <main className={styles.page}>
      <JsonLd data={serviceJsonLd} />

      <header className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Beranda</Link><span>/</span><span>Layanan</span>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Project service · Cilegon & Banten</p>
              <h1>Bukan hanya unit. Kami bantu menyiapkan pekerjaannya.</h1>
            </div>
            <div className={styles.heroIntro}>
              <p>Dari data beban pertama sampai unit keluar dari site, layanan kami menghubungkan kebutuhan lapangan dengan alat, operator, rigging, dan persiapan kerja yang relevan.</p>
              <a href="#alur-layanan">Lihat alur layanan <span>↓</span></a>
            </div>
          </div>
          <figure className={styles.heroMedia}>
            <Image src="/crane_rigging_site.jpg" alt="Tim menjalankan proses rigging untuk pekerjaan lifting crane" fill priority sizes="calc(100vw - 3rem)" />
            <figcaption><span>Operasi lapangan</span><span>Planning · Setup · Execution</span></figcaption>
          </figure>
        </div>
      </header>

      <section className={styles.scope} id="alur-layanan" aria-labelledby="scope-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><p>01 / Dari brief ke eksekusi</p><h2 id="scope-title">Satu alur kerja,<br />enam titik kendali.</h2></div>
            <p>Lingkup aktual menyesuaikan skala pekerjaan. Untuk pekerjaan sederhana, beberapa tahap dapat digabung. Untuk pekerjaan kritis, survey dan perencanaan dilakukan lebih rinci.</p>
          </div>
          <ol className={styles.scopeList}>
            {serviceScopes.map((item) => (
              <li key={item.number}>
                <span className={styles.scopeNumber}>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
                <aside><span>Output</span><strong>{item.output}</strong></aside>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.work} aria-labelledby="work-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><p>02 / Jenis dukungan</p><h2 id="work-title">Dibentuk berdasarkan pekerjaan, bukan sekadar tipe alat.</h2></div>
            <p>Kami menyusun kombinasi layanan berdasarkan target pekerjaan Anda. Katalog unit dan detail tonase tersedia terpisah di halaman Armada.</p>
          </div>
          <div className={styles.workGrid}>
            {workTypes.map(([title, desc], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
          <div className={styles.fleetBridge}>
            <p><span>Butuh melihat daftar unit?</span>Bandingkan jenis crane, forklift, trailer, kapasitas, dan merek di katalog armada.</p>
            <Link href="/armada">Buka katalog Armada <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.requirements} aria-labelledby="requirements-title">
        <div className={styles.container}>
          <div className={styles.requirementsIntro}>
            <p className={styles.eyebrow}>03 / Project brief</p>
            <h2 id="requirements-title">Empat data untuk memulai.</h2>
            <p>Tidak harus sempurna. Foto WhatsApp dan estimasi awal cukup untuk membuka diskusi; tim kami akan menunjukkan data lanjutan yang masih dibutuhkan.</p>
          </div>
          <div className={styles.requirementsList}>
            {requirements.map(([title, desc], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <p className={styles.contactLabel}>Project desk · Respons operasional</p>
          <div className={styles.contactGrid}>
            <h2>Ceritakan pekerjaan Anda.<br />Kami mulai dari datanya.</h2>
            <div>
              <p>Kirim foto lokasi, data beban, titik tujuan, dan rencana tanggal kerja. Tim kami akan membantu menentukan langkah berikutnya.</p>
              <a href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20layanan%20untuk%20pekerjaan%20proyek." target="_blank" rel="noopener noreferrer">Kirim project brief <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}