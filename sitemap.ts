import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Burayı gelecekte kendi alan adınla değiştireceksin
  const baseUrl = 'https://www.perla-paradise.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/turlar`,
      lastModified: new Date(),
    },
  ]
}