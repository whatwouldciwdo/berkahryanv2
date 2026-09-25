import type { Metadata } from "next";

export const siteUrl = "https://berkahryan.com";

// Nested metadata is replaced, not deep-merged, by Next.js route segments.
export function withPageMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : undefined;
  const images = [{
    url: `${siteUrl}/berkah-ryan-rental-alat-berat-cilegon.webp`,
    width: 1600,
    height: 900,
    alt: "Armada alat berat CV. Berkah Ryan di Cilegon, Banten",
  }];

  const canonical = metadata.alternates?.canonical;
  const canonicalUrl = canonical && typeof canonical === "object" && "url" in canonical
    ? canonical.url
    : canonical;

  return {
    ...metadata,
    openGraph: {
      locale: "id_ID",
      siteName: "CV. Berkah Ryan Crane",
      title,
      description: metadata.description ?? undefined,
      url: canonicalUrl ?? siteUrl,
      images,
      ...(metadata.openGraph && "type" in metadata.openGraph
        ? metadata.openGraph
        : { type: "website", ...metadata.openGraph }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metadata.description ?? undefined,
      images: images.map((image) => image.url),
      ...metadata.twitter,
    },
  };
}
