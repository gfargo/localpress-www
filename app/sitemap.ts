import type { MetadataRoute } from "next"
import { getAllWikiSlugs } from "@/lib/wiki-manifest"

export const dynamic = "force-static"

const BASE_URL = "https://localpress.griffen.codes"

export default function sitemap(): MetadataRoute.Sitemap {
  const docEntries = getAllWikiSlugs().map((slug) => ({
    url: `${BASE_URL}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...docEntries,
  ]
}
