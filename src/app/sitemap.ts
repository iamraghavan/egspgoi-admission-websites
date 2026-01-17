import { MetadataRoute } from 'next';

// TODO: Update this with the actual production domain
const siteUrl = 'https://egs-admissions-hub.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/academics',
    '/admissions',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
