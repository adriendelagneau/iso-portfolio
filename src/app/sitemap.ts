import type { MetadataRoute } from "next";

const SITE_URL = "https://adrien-delagneau.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
