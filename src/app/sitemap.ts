import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-14'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-10-14'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
