import type { CSSProperties, ReactNode } from "react";
import styles from "./CoverageMarquee.module.css";

const areaRow1 = [
  "Cilegon (HQ)",
  "Serang",
  "Anyer",
  "Pandeglang",
  "Provinsi Banten",
  "DKI Jakarta",
  "Jawa Barat",
  "Cilegon (HQ)",
  "Serang",
  "Anyer",
  "Pandeglang",
  "Provinsi Banten",
  "DKI Jakarta",
  "Jawa Barat",
];

const areaRow2 = [
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Kawasan Industri Merak",
  "Bojonegara",
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Kawasan Industri Merak",
  "Bojonegara",
];

const areaRow3 = [
  "Tangerang",
  "Karawang",
  "Cikarang",
  "Semarang",
  "Surabaya",
  "Cilacap",
  "Tangerang",
  "Karawang",
  "Cikarang",
  "Semarang",
  "Surabaya",
  "Cilacap",
];

type CoverageMarqueeProps = {
  /** Teks eyebrow di atas marquee. */
  title?: string;
  /** Catatan kaki di bawah marquee. Kirim `null` untuk menyembunyikan. */
  footnote?: ReactNode;
  /** Warna latar section sekaligus warna gradient fade kiri/kanan. */
  background?: string;
  /** Menampilkan garis pemisah di bawah section. */
  bordered?: boolean;
  /** Padding vertikal lebih rapat, dipakai saat section sudah punya heading sendiri. */
  compact?: boolean;
};

export default function CoverageMarquee({
  title = "CAKUPAN WILAYAH OPERASIONAL",
  footnote = (
    <>
      Pos Utama &amp; Hub Operasional: <strong>Cilegon &amp; Serang</strong> · Siap
      Mobilisasi ke Seluruh Provinsi di Pulau Jawa
    </>
  ),
  background,
  bordered = true,
  compact = false,
}: CoverageMarqueeProps) {
  const sectionClassName = [
    styles.coverageSection,
    bordered ? styles.bordered : "",
    compact ? styles.compact : "",
  ]
    .filter(Boolean)
    .join(" ");

  const sectionStyle = background
    ? ({ "--coverage-bg": background } as CSSProperties)
    : undefined;

  return (
    <section
      className={sectionClassName}
      style={sectionStyle}
      aria-label="Cakupan Wilayah Operasional"
    >
      <div className={styles.coverageHeader}>
        <span>{title}</span>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeFadeLeft} />
        <div className={styles.marqueeFadeRight} />

        <div className={`${styles.marqueeRow} ${styles.marqueeLeft}`}>
          <div className={styles.marqueeTrack}>
            {areaRow1.map((item, idx) => (
              <span
                key={`r1-${idx}`}
                className={`${styles.areaTag} ${
                  item.includes("Cilegon") || item.includes("Serang")
                    ? styles.highlightTag
                    : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={`${styles.marqueeRow} ${styles.marqueeRight}`}>
          <div className={styles.marqueeTrack}>
            {areaRow2.map((item, idx) => (
              <span key={`r2-${idx}`} className={styles.areaTag}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={`${styles.marqueeRow} ${styles.marqueeLeft}`}>
          <div className={styles.marqueeTrack}>
            {areaRow3.map((item, idx) => (
              <span key={`r3-${idx}`} className={styles.areaTag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {footnote ? <p className={styles.coverageFootnote}>{footnote}</p> : null}
    </section>
  );
}
