import { type MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.baseUrl;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
