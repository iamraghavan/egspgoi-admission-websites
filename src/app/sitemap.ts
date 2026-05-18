import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

// This file generates the sitemap.xml for your website.
// It tells search engine crawlers which pages are available for crawling.
// A sitemap is not for "crawling" the site, but rather for providing a list
// of all the URLs you want to be indexed.
// Next.js automatically creates the XML file based on the data returned by this function.

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.baseUrl;

  // List of main static pages to include in the sitemap.
  // Add any new static pages here.
  const staticRoutes = [
    '', // Homepage
    '/academics',
    '/admissions',
    '/engineering/undergraduate',
    '/arts-science',
    '/polytechnic',
    '/nursing',
    '/mba-and-mca',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    // 'daily' is a good frequency for pages that might get updated with new content.
    changeFrequency: 'daily' as const,
    // Priority helps crawlers understand which pages are more important.
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Combine all URL sets here
  return [
    ...staticUrls,
  ];
}
