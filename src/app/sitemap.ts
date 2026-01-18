import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

// This file generates the sitemap.xml for your website.
// It tells search engine crawlers which pages are available for crawling.
// Next.js automatically creates the XML file based on the data returned by this function.

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.baseUrl;

  // List of main pages to include in the sitemap.
  // Images, PDFs, and other documents are discovered by crawlers
  // when they are linked from these pages.
  const staticRoutes = [
    '', // Homepage
    '/academics',
    '/admissions',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    // 'hourly' tells crawlers that the content may change frequently.
    changeFrequency: 'hourly' as const,
    // Priority helps crawlers understand which pages are more important.
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
