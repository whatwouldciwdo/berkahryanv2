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
    default: "Sewa Crane Cilegon & Rental Alat Berat Banten | CV. Berkah Ryan",
    template: "%s | CV. Berkah Ryan Crane",
  },
  description:
    "CV. Berkah Ryan adalah penyedia jasa rental crane 3 s/d 600 Ton, forklift industri 3-35 Ton, trailer 40 ft, dan steel road plate di Cilegon Banten bersertifikasi K3 resmi Kemnaker RI & operator SIO aktif.",
  keywords: [
    "sewa crane cilegon",
    "rental crane banten",
    "sewa forklift cilegon",
    "sewa mobile crane",
    "rental crawler crane banten",
    "roughter crane cilegon",
    "rental alat berat banten",
    "CV Berkah Ryan",
    "sewa trailer 40 feet cilegon",
    "sewa steel plate banten"
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
    title: "Sewa Crane Cilegon & Rental Alat Berat Banten | CV. Berkah Ryan",
    description:
      "Layanan sewa derek crane 3 s/d 600 Ton & forklift bersertifikasi K3 Kemnaker di Cilegon, Serang, Banten, Jawa, dan Sumatera. Siap 24/7.",
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
    title: "Sewa Crane Cilegon & Rental Alat Berat Banten | CV. Berkah Ryan",
    description:
      "Rental crane & forklift profesional di Banten. Telescopic, Crawler, Roughter crane bersertifikat SIA & SIO aktif.",
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
      "Penyedia spesialis jasa penyewaan crane kapasitas 3 hingga 600 Ton, forklift industri, trailer, dan steel road plate di Cilegon, Serang, dan Provinsi Banten bersertifikasi K3 Kemnaker RI.",
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
      { "@type": "AdministrativeArea", name: "Banten" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
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
