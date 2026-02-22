
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
          url: `${siteUrl}/og-image.webp`,
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
      images: [`${siteUrl}/og-image.webp`],
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
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99768-88999",
        "contactType": "Admissions"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Old, Nagore Main Rd, Thethi village",
      "addressLocality": "Nagapattinam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "611002",
      "addressCountry": "IN"
    }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
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
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '660713297027148');
              fbq('track', 'PageView');
            `,
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
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=660713297027148&ev=PageView&noscript=1"
          />
        </noscript>
        {GA_MEASUREMENT_ID && <GoogleAnalytics />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
