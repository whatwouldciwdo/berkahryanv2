import type { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berkahryan.com"),
  title: {
    default:
      "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang | CV. Berkah Ryan",
    template: "%s | CV. Berkah Ryan Crane",
  },
  description:
    "Jasa sewa crane 3 s/d 600 Ton di Cilegon, Serang, Anyer, Pandeglang, dan seluruh Banten. Melayani Jawa & Sumatera. Rental forklift 3-35 Ton, trailer 40 ft, steel road plate. Bersertifikat K3 Kemnaker RI & operator SIO aktif, siap 24/7.",
  keywords: [
    "jasa sewa crane",
    "jasa sewa crane cilegon",
    "jasa sewa crane serang",
    "jasa sewa crane anyer",
    "jasa sewa crane pandeglang",
    "jasa sewa crane banten",
    "jasa sewa crane jawa",
    "jasa sewa crane sumatera",
    "sewa crane cilegon",
    "sewa crane serang",
    "sewa crane anyer",
    "sewa crane pandeglang",
    "rental crane banten",
    "harga sewa crane cilegon",
    "sewa mobile crane cilegon",
    "sewa crawler crane banten",
    "sewa roughter crane cilegon",
    "sewa truck crane banten",
    "sewa forklift cilegon",
    "rental alat berat banten",
    "sewa trailer 40 feet cilegon",
    "sewa steel road plate banten",
    "CV Berkah Ryan",
  ],

  authors: [{ name: "CV. Berkah Ryan" }],
  creator: "CV. Berkah Ryan",
  publisher: "CV. Berkah Ryan",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://berkahryan.com",
    siteName: "CV. Berkah Ryan Crane",
    title:
      "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang | CV. Berkah Ryan",
    description:
      "Jasa sewa crane 3 s/d 600 Ton & forklift bersertifikat K3 Kemnaker di Cilegon, Serang, Anyer, Pandeglang, seluruh Banten, Jawa, dan Sumatera. Siap 24/7.",

    images: [
      {
        url: "/berkah-ryan-rental-alat-berat-cilegon.webp",
        width: 1200,
        height: 630,
        alt: "Sewa Crane Cilegon Banten - CV Berkah Ryan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang | CV. Berkah Ryan",
    description:
      "Jasa sewa crane & forklift profesional di Cilegon, Serang, Anyer, Pandeglang, Banten. Telescopic, Crawler, Roughter crane bersertifikat SIA & SIO aktif.",

    images: ["/berkah-ryan-rental-alat-berat-cilegon.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EquipmentRentalAgency",
    "@id": "https://berkahryan.com/#organization",
    name: "CV. Berkah Ryan",
    alternateName: ["Berkah Ryan Crane", "Berkah Ryan Heavy Equipment"],
    url: "https://berkahryan.com",
    logo: "https://berkahryan.com/berkahryan-logo.svg",
    image: "https://berkahryan.com/berkah-ryan-rental-alat-berat-cilegon.webp",
    description:
      "Spesialis jasa sewa crane kapasitas 3 hingga 600 Ton, forklift industri, trailer, dan steel road plate untuk wilayah Cilegon, Serang, Anyer, Pandeglang, dan seluruh Provinsi Banten, serta proyek di Pulau Jawa dan Sumatera. Bersertifikat K3 Kemnaker RI dengan operator SIO aktif.",
    slogan: "Jasa Sewa Crane Cilegon, Serang, Anyer & Pandeglang",
    knowsAbout: [
      "Jasa sewa crane",
      "Sewa mobile crane",
      "Sewa crawler crane",
      "Sewa rough terrain crane",
      "Sewa truck mounted crane",
      "Sewa forklift industri",
      "Rigging dan lift plan",
      "Sertifikasi K3 Kemnaker SIA dan SIO",
    ],

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
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.0175,
      longitude: 106.0538,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Cilegon" },
      { "@type": "City", name: "Serang" },
      { "@type": "City", name: "Anyer" },
      { "@type": "City", name: "Pandeglang" },
      { "@type": "City", name: "Merak" },
      { "@type": "City", name: "Bojonegara" },
      { "@type": "City", name: "Ciwandan" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "AdministrativeArea", name: "Banten" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
      { "@type": "AdministrativeArea", name: "Jawa Tengah" },
      { "@type": "AdministrativeArea", name: "Jawa Timur" },
      { "@type": "AdministrativeArea", name: "DKI Jakarta" },
      { "@type": "AdministrativeArea", name: "Sumatera" },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Rental Alat Berat & Crane",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewa Telescopic Mobile Crane (25 - 600 Ton)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewa Crawler Crane (45 - 550 Ton)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewa Roughter Crane 4x4 (25 - 110 Ton)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewa Truck Mounted Crane Hiab (3 - 16 Ton)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewa Forklift Diesel & Heavy Duty (3 - 35 Ton)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewa Trailer 40 Feet Flatbed/Lowbed & Steel Road Plate 25mm",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="id"
      className={`${poppins.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <head>
        <JsonLd data={globalOrgJsonLd} />
      </head>
      <body className={poppins.className}>
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
