import { MetadataRoute } from "next"

const BASE_URL = "https://iamtofunmi.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ]

  // Section anchors on the single-page site
  const sections = ["about", "experience", "projects", "skills", "contact"]
  for (const section of sections) {
    routes.push({
      url: `${BASE_URL}/#${section}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  }

  return routes
}
