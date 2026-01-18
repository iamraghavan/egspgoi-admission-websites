
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import GoogleAnalytics from '@/components/google-analytics';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

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


// TODO: Update this with the actual production domain
const siteUrl = 'https://egs-admissions-hub.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EGS Admissions Hub - EGS Pillay Group of Institutions',
    template: '%s | EGS Admissions Hub',
  },
  description: 'Your gateway to a premier education at EGS Pillay Group of Institutions. Explore and apply to our top-tier Engineering, Arts, Science, and Management programs.',
  openGraph: {
    title: 'EGS Admissions Hub',
    description: 'Your gateway to a premier education at EGS Pillay Group of Institutions.',
    url: siteUrl,
    siteName: 'EGS Admissions Hub',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Must be an absolute URL
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
    title: 'EGS Admissions Hub',
    description: 'Explore and apply to our top-tier Engineering, Arts, Science, and Management programs.',
    // TODO: add twitter user handle
    // creator: '@handle', 
    images: [`${siteUrl}/og-image.png`], // Must be an absolute URL
  },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "EGS Pillay Group of Institutions",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
