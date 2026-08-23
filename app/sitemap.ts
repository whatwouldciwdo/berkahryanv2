import type { MetadataRoute } from "next";
import { craneFleetData, portfolioData, blogPostsData } from "./data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://berkahryan.com";
  const lastModified = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/armada`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Dynamic Service routes
  const serviceRoutes: MetadataRoute.Sitemap = craneFleetData.map((item) => ({
    url: `${baseUrl}/layanan/${item.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Project routes
  const projectRoutes: MetadataRoute.Sitemap = portfolioData.map((item) => ({
    url: `${baseUrl}/proyek/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogPostsData.map((item) => ({
    url: `${baseUrl}/blog/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
