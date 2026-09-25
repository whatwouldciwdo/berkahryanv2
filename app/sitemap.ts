import type { MetadataRoute } from "next";
import { craneFleetData, portfolioData, blogPostsData } from "./data/siteData";
import { siteUrl } from "./data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual content revision dates are maintained.
  const staticRoutes: MetadataRoute.Sitemap = [
    "", "/tentang-kami", "/layanan", "/armada", "/proyek", "/blog", "/kontak",
  ].map((path) => ({ url: `${siteUrl}${path}` }));

  return [
    ...staticRoutes,
    ...craneFleetData.map((item) => ({ url: `${siteUrl}/layanan/${item.slug}` })),
    ...portfolioData.map((item) => ({ url: `${siteUrl}/proyek/${item.slug}` })),
    ...blogPostsData.map((item) => ({ url: `${siteUrl}/blog/${item.slug}` })),
  ];
}
