import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { craneFleetData } from "../../data/siteData";
import styles from "./page.module.css";
import { withPageMetadata } from "../../data/seo";


interface Props { params: Promise<{ slug: string }>; }

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

const fleetImages: Record<string, string> = {
  "telescopic-mobile-crane": "/images/services/telescopic-mobile/sewa-telescopic-mobile-crane-sany-cilegon.webp",
  "truck-mounted-crane": "/images/services/truck-crane/sewa-truck-mounted-crane-unic-cilegon.png",
  "crawler-crane": "/images/services/crawler-crane/sewa-crawler-crane-kobelco-cilegon.png",
  "roughter-crane": "/images/services/roughter-crane/sewa-roughter-crane-50-ton-cilegon.png",
  "forklift-rental": "/images/services/forklift/rental-forklift-heavy-duty-cilegon.png",
  "trailer-logistics-road-plate": "/berkah-ryan-rental-alat-berat-cilegon.webp",
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

export function generateStaticParams() {
  return craneFleetData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = craneFleetData.find((entry) => entry.slug === slug);
  if (!item) return { title: "Layanan Tidak Ditemukan" };

  return withPageMetadata({
    title: `Sewa ${item.name} (${item.capacityRange}) Cilegon Banten`,
    description: `Rental ${item.name} kapasitas ${item.capacityRange} di Cilegon & Banten. Bersertifikasi SIA Kemnaker RI, operator berlisensi SIO aktif, siap support proyek 24/7.`,
    alternates: { canonical: `https://berkahryan.com/layanan/${item.slug}` },
    openGraph: {
      title: `Sewa ${item.name} Cilegon Banten - CV. Berkah Ryan`,
      description: item.shortDesc,
      url: `https://berkahryan.com/layanan/${item.slug}`,
    },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = craneFleetData.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const recommendedFleet = craneFleetData.filter((entry) => entry.slug !== item.slug);

  const whatsappUrl = `https://wa.me/6281808999462?text=Halo%20CV.%20Berkah%20Ryan,%20saya%20ingin%20meminta%20penawaran%20harga%20sewa%20${encodeURIComponent(item.name)}%20di%20lokasi%20kami.`;
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    name: `Sewa ${item.name} Cilegon Banten`, description: item.description,
    provider: { "@id": "https://berkahryan.com/#organization" },
    areaServed: [
      { "@type": "City", name: "Cilegon" }, { "@type": "City", name: "Serang" },
      { "@type": "AdministrativeArea", name: "Banten" },
    ],
    serviceType: "Heavy Equipment Rental", url: `https://berkahryan.com/layanan/${item.slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: item.faqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />

      <section className={styles.intro} aria-labelledby="service-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{item.category} · Cilegon, Banten</p>
          <h1 id="service-title">Sewa {item.name} untuk pengangkatan yang presisi.</h1>
          <p>{item.shortDesc}</p>
        </div>
      </section>

      <section className={styles.overview} aria-label="Ringkasan layanan">
        <dl className={styles.metadata}>
          <div><dt>Layanan</dt><dd>{item.name}</dd></div>
          <div><dt>Kapasitas</dt><dd>{item.capacityRange}</dd></div>
          <div><dt>Cakupan</dt><dd>Cilegon<br />Serang & Banten</dd></div>
          <div><dt>Standar</dt><dd>SIA Kemnaker RI<br />Operator SIO aktif</dd></div>
        </dl>
      </section>

      <figure className={styles.heroImage}>
        <Image
          src="/berkah-ryan-rental-alat-berat-cilegon.webp"
          alt={`${item.name} CV. Berkah Ryan siap mendukung proyek di Cilegon dan Banten`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, calc(100vw - 8rem)"
        />
      </figure>

      <section className={styles.narrative} aria-label="Tentang layanan">
        <div className={styles.narrativeCopy}>
          <p>{item.description}</p>
          <p>Setiap pekerjaan direncanakan berdasarkan kapasitas angkat, kondisi lokasi, radius kerja, dan standar keselamatan. Tim kami membantu menyiapkan unit serta operator yang sesuai agar proses lifting berjalan aman, presisi, dan efisien.</p>
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.contentContainer}>
          <div className={styles.detailGrid}>
            <article className={styles.models}>
              <div className={styles.articleHeading}><p>Unit tersedia</p><h3>Merek & spesifikasi</h3></div>
              <div className={styles.modelList}>
                {item.models.map((model) => (
                  <div className={styles.modelRow} key={`${model.brand}-${model.capacity}`}>
                    <div className={styles.brandCell}>
                      <span className={styles.brandLogo} aria-hidden="true">
                        {brandLogos[model.brand] ? (
                          <Image src={brandLogos[model.brand]} alt="" width={100} height={40} sizes="100px" />
                        ) : (
                          <span>{getBrandMark(model.brand)}</span>
                        )}
                      </span>
                    </div>
                    <span className={styles.modelCapacity}>{model.capacity}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.applications}>
              <div className={styles.articleHeading}><p>Lingkup pekerjaan</p><h3>Aplikasi utama</h3></div>
              <ol>
                {item.applications.map((application, index) => (
                  <li key={application}><span>{String(index + 1).padStart(2, "0")}</span>{application}</li>
                ))}
              </ol>
            </article>
          </div>

        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.contentContainer}>
          <header className={styles.faqHeading}><p>FAQ</p><h2>Sebelum Anda menyewa.</h2></header>
          <div className={styles.faqList}>
            {item.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true" /></summary><p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <nav className={styles.bottomNav} aria-label="Navigasi layanan">
            <Link href="/layanan">← Semua layanan</Link><Link href="/armada">Lihat armada lengkap →</Link>
          </nav>
        </div>
      </section>

      <section className={styles.recommendations} aria-labelledby="fleet-recommendations-title">
        <div className={styles.recommendationHeading}>
          <div>
            <p>Rekomendasi armada</p>
            <h2 id="fleet-recommendations-title">Pilihan unit lainnya.</h2>
          </div>
          <p className={styles.swipeHint}>Geser untuk melihat <span aria-hidden="true">→</span></p>
        </div>
        <div className={styles.fleetCarousel} role="list" aria-label="Rekomendasi armada lainnya">
          {recommendedFleet.map((fleet) => (
            <Link href={`/layanan/${fleet.slug}`} className={styles.fleetCard} role="listitem" key={fleet.slug}>
              <div className={styles.fleetCardImage}>
                <Image
                  src={fleetImages[fleet.slug]}
                  alt={`${fleet.name} kapasitas ${fleet.capacityRange}`}
                  fill
                  sizes="(max-width: 560px) 82vw, (max-width: 1024px) 45vw, 31vw"
                />
              </div>
              <div className={styles.fleetCardCopy}>
                <p>{fleet.category}</p>
                <h3>{fleet.name}</h3>
                <div><span>{fleet.capacityRange}</span><span aria-hidden="true">↗</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection} aria-label="Permintaan penawaran">
        <div className={styles.contentContainer}>
          <div className={styles.quote}>
            <div><p>Butuh estimasi yang akurat?</p><h2>Diskusikan kebutuhan lifting Anda dengan tim kami.</h2></div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Minta penawaran <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}