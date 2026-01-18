
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import GoogleAnalytics from '@/components/google-analytics';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-dynamic';

const fontPoppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

const siteUrl = siteConfig.baseUrl;

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Admissions 2026–27 | EGS Pillay Group of Institutions, Nagapattinam',
      template: '%s | EGS Admissions Hub',
    },
    description: 'Apply for Admissions 2026–27 at EGS Pillay Group of Institutions, Nagapattinam. Engineering, Arts & Science, Polytechnic, Nursing, Pharmacy, Education, Yoga & School courses available.',
    manifest: '/manifest.json',
    icons: {
      icon: [
          { url: '/icon.svg', type: 'image/svg+xml' },
          { url: '/Icon.png', type: 'image/png' },
          { url: '/favicon.ico', sizes: 'any' }
      ],
      apple: '/apple-icon.png',
    },
    openGraph: {
      title: 'Admissions 2026–27 | EGS Pillay Group of Institutions, Nagapattinam',
      description: 'Apply for Admissions 2026–27 at EGS Pillay Group of Institutions, Nagapattinam. Engineering, Arts & Science, Polytechnic, Nursing, Pharmacy, Education, Yoga & School courses available.',
      url: siteUrl,
      siteName: 'EGS Admissions Hub',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Admissions 2026–27 | EGS Pillay Group of Institutions, Nagapattinam',
      description: 'Apply for Admissions 2026–27 at EGS Pillay Group of Institutions, Nagapattinam. Engineering, Arts & Science, Polytechnic, Nursing, Pharmacy, Education, Yoga & School courses available.',
      images: [`${siteUrl}/og-image.png`],
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "EGS Pillay Group of Institutions",
    "url": siteUrl,
    "logo": `${siteUrl}/Icon.png`,
    "sameAs": [
        "https://www.facebook.com/egspecedu/",
        // Add other social media links
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99768-88999",
        "contactType": "Admissions"
    }
};


  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
       <head>
        <Script
            id="org-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationSchema),
            }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontPtSans.variable
        )}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
