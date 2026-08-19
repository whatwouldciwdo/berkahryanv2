import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { craneFleetData } from "../data/siteData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Katalog Spesifikasi Armada Crane & Forklift | CV. Berkah Ryan",
  description:
    "Spesifikasi armada mobile crane, crawler crane, rough terrain crane, truck crane, forklift, trailer, dan steel road plate untuk proyek di Cilegon dan Banten.",
  alternates: { canonical: "https://berkahryan.com/armada" },
};

const selectionNotes = [
  { label: "Akses jalan baik", value: "Mobile crane", note: "Mobilisasi cepat, setup outrigger ringkas." },
  { label: "Medan sempit / tidak rata", value: "Rough terrain", note: "Sasis compact dengan penggerak 4 roda." },
  { label: "Heavy lift jangka panjang", value: "Crawler crane", note: "Stabil untuk pekerjaan radius dan tonase besar." },
  { label: "Angkut sekaligus bongkar", value: "Truck crane", note: "Material dibawa dan diturunkan oleh satu unit." },
];

const brandLogos: Record<string, string> = {
  Kato: "/images/Kato-logo.png",
  Kobelco: "/images/kobelco-cranes-seeklogo.png",
  Liebherr: "/images/Liebherr-Logo.png",
  Tadano: "/images/tadano-1-logo-svg-vector.svg",
  Sany: "/images/Sany-Logo.wine.svg",
  Sumitomo: "/images/sumitomo-logo.png",
  TCM: "/images/newtcm.png",
  Unic: "/images/unic-logo-web.png",
};

function getBrandMark(brand: string) {
  return brand
    .split(/\s+|\/|&/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default function ArmadaPage() {
  const modelCount = craneFleetData.reduce((total, item) => total + item.models.length, 0);
  const armadaJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Armada CV. Berkah Ryan",
    numberOfItems: craneFleetData.length,
    itemListElement: craneFleetData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `https://berkahryan.com/layanan/${item.slug}`,
    })),
  };

  return (
    <main className={styles.page}>
      <JsonLd data={armadaJsonLd} />
      <header className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Beranda</Link><span>/</span><span>Armada</span>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Katalog kerja / 2026</p>
              <h1>Pilih alat dari kebutuhan lapangan, bukan sekadar tonase.</h1>
              <p className={styles.intro}>
                Daftar kategori, rentang kapasitas, dan konfigurasi unit yang kami tangani.
                Ketersediaan unit dikonfirmasi berdasarkan tanggal, lokasi, radius kerja,
                kondisi akses, dan hasil site survey.
              </p>
            </div>
            <div className={styles.heroMedia}>
              <Image src="/crane_rigging_site.jpg" alt="Operasi crane dan rigging di area proyek industri" fill priority sizes="(max-width: 800px) 100vw, 42vw" />
              <span>Operasi lifting · Cilegon</span>
            </div>
          </div>
          <dl className={styles.summary}>
            <div><dt>Kategori alat</dt><dd>{String(craneFleetData.length).padStart(2, "0")}</dd></div>
            <div><dt>Konfigurasi merek</dt><dd>{String(modelCount).padStart(2, "0")}</dd></div>
            <div><dt>Rentang crane</dt><dd>3—600 T</dd></div>
            <div><dt>Wilayah utama</dt><dd>Cilegon / Banten</dd></div>
          </dl>
        </div>
      </header>

      <section className={styles.guide} aria-labelledby="selection-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>01</p>
            <div><p className={styles.eyebrow}>Panduan awal</p><h2 id="selection-title">Mulai dari kondisi site</h2></div>
            <p>Tonase pada unit bukan kapasitas angkat di semua radius. Load chart, panjang boom, ground condition, dan ruang outrigger tetap harus dihitung.</p>
          </div>
          <div className={styles.guideGrid}>
            {selectionNotes.map((item) => (
              <article key={item.label}>
                <p>{item.label}</p><h3>{item.value}</h3><span>{item.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.catalog} aria-labelledby="catalog-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>02</p>
            <div><p className={styles.eyebrow}>Daftar unit</p><h2 id="catalog-title">Katalog armada</h2></div>
            <p>Pilih kategori untuk melihat peruntukan dan konfigurasi merek. Detail akhir mengikuti unit yang tersedia pada jadwal proyek.</p>
          </div>
          <nav className={styles.index} aria-label="Daftar kategori armada">
            {craneFleetData.map((item, index) => (
              <a href={`#${item.slug}`} key={item.id}><span>{String(index + 1).padStart(2, "0")}</span>{item.name}</a>
            ))}
          </nav>
          <div className={styles.fleetList}>
            {craneFleetData.map((item, index) => (
              <article className={styles.fleetItem} id={item.slug} key={item.id}>
                <div className={styles.fleetTitle}>
                  <p>{String(index + 1).padStart(2, "0")} / {item.category}</p>
                  <h3>{item.name}</h3>
                  <div className={styles.capacity}><span>Kapasitas</span><strong>{item.capacityRange}</strong></div>
                </div>
                <div className={styles.fleetBody}>
                  <p className={styles.description}>{item.shortDesc}</p>
                  <div className={styles.applications}>
                    <h4>Umum digunakan untuk</h4>
                    <ul>{item.applications.slice(0, 3).map((application) => <li key={application}>{application}</li>)}</ul>
                  </div>
                </div>
                <div className={styles.modelTable}>
                  <div className={styles.tableHead}><span>Merek / tipe</span><span>Konfigurasi tersedia</span></div>
                  {item.models.map((model) => (
                    <div className={styles.modelRow} key={`${model.brand}-${model.capacity}`}>
                      <div className={styles.brandCell}>
                        <span className={styles.brandLogo} aria-hidden="true">
                          {brandLogos[model.brand] ? (
                            <Image
                              src={brandLogos[model.brand]}
                              alt=""
                              width={88}
                              height={32}
                              sizes="88px"
                            />
                          ) : (
                            <span>{getBrandMark(model.brand)}</span>
                          )}
                        </span>
                        <strong>{model.brand}</strong>
                      </div>
                      <div className={styles.modelSpecs}><span>{model.capacity}</span></div>
                    </div>
                  ))}
                </div>
                <div className={styles.fleetFooter}>
                  <p><span>Dokumen K3</span>{item.k3Compliance}</p>
                  <Link href={`/layanan/${item.slug}`}>Lihat detail layanan <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactInner}>
            <p className={styles.sectionNumber}>03</p>
            <div><p className={styles.eyebrow}>Sebelum mobilisasi</p><h2>Belum yakin unit mana yang aman?</h2></div>
            <div className={styles.contactCopy}>
              <p>Kirim berat dan dimensi beban, lokasi titik angkat, perkiraan radius, foto akses, serta tanggal pekerjaan. Tim kami akan menilai kebutuhan survey dan pilihan unit yang masuk akal.</p>
              <a href="https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20konsultasi%20pemilihan%20unit%20untuk%20pekerjaan%20lifting." target="_blank" rel="noopener noreferrer">Diskusikan kebutuhan proyek <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}