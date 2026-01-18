import { type MetadataRoute } from 'next';

// TODO: Update this with the actual production domain
const siteUrl = 'https://egs-admissions-hub.vercel.app';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
