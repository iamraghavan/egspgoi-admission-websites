
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import GoogleAnalytics from '@/components/google-analytics';
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
  const keywords = [
    'engineering college admission',
    'best engineering college in tamil nadu',
    'top engineering colleges near me',
    'be admission 2026',
    'btech admission tamil nadu',
    'diploma courses after 10th',
    'polytechnic college admission',
    'nursing college admission',
    'bsc nursing admission 2026',
    'medical courses after 12th',
    'degree courses after 12th',
    'arts and science college admission',
    'college admission 2026 tamil nadu',
    'best college near me',
    'courses after 12th science',
    'courses after 12th commerce',
    'courses after 10th',
    'higher education options india',
    'college application 2026',
    'direct admission colleges tamil nadu',
    'egs pillay engineering college',
    'egs pillay engineering college admission',
    'engineering college in nagapattinam',
    'best engineering college in thanjavur',
    'be admission 2026 tamil nadu',
    'btech admission near me',
    'top engineering colleges in tamil nadu',
    'nba accredited engineering colleges',
    'naac a++ engineering college tamil nadu',
    'engineering college with placement tamil nadu',
    'egs pillay arts and science college',
    'arts and science college in nagapattinam',
    'bsc courses admission tamil nadu',
    'bcom admission 2026',
    'ba courses after 12th',
    'best arts college in thanjavur',
    'degree college near me',
    'top arts and science colleges tamil nadu',
    'egs pillay polytechnic college',
    'polytechnic college in nagapattinam',
    'polytechnic admission 2026',
    'best diploma college in tamil nadu',
    'mechanical diploma courses',
    'civil diploma admission',
    'polytechnic college near me',
    'egs pillay college of pharmacy',
    'pharmacy college in tamil nadu',
    'bpharm admission 2026',
    'dpharm course details',
    'best pharmacy college near me',
    'pharmacy courses after 12th',
    'top pharmacy colleges tamil nadu',
    'egs pillay nursing college',
    'nursing college in nagapattinam',
    'gnm nursing course',
    'best nursing college in tamil nadu',
    'nursing courses after 12th',
    'nursing admission near me',
    'egs pillay college of education',
    'bed college in tamil nadu',
    'med admission 2026',
    'teacher training courses',
    'best bed college near me',
    'education degree colleges tamil nadu',
    'egs pillay naturopathy college',
    'bnys admission 2026',
    'naturopathy college in tamil nadu',
    'yoga medical course admission',
    'alternative medicine courses india',
    'best naturopathy college near me',
    'egs pillay group of institutions',
    'egs pillay college admission',
    'egs nagapattinam college',
    'top colleges in nagapattinam',
    'best college in cauvery delta',
    'naac a++ colleges tamil nadu',
    'nagapattinam college',
    'college in mayiladuthurai',
    'college in thanjavur',
    'college in tiruvarur',
    'top colleges in tamil nadu',
    'best colleges in tamil nadu',
    'top college in trichy',
    'best college in trichy',
    'top colleges near me',
    'best engineering college near me',
    'top private colleges in tamil nadu',
    'best placement colleges in tamil nadu',
    'top ranked colleges in tamil nadu',
    'top colleges for higher education india',
    'best courses after 12th',
    'career options after 12th',
    'professional courses after 12th',
    'engineering courses list',
    'top colleges in thanjavur',
    'best college in kumbakonam',
    'top colleges in cauvery delta',
    'best college in delta region tamil nadu',
  ];
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Admissions 2026–27 | EGS Pillay Group of Institutions, Nagapattinam',
      template: '%s | EGS Admissions Hub',
    },
    description: 'Apply for Admissions 2026–27 at EGS Pillay Group of Institutions, Nagapattinam. Engineering, Arts & Science, Polytechnic, Nursing, Pharmacy, Education, Yoga & School courses available.',
    keywords: [...new Set(keywords)],
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
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NTCJ08TSVC"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NTCJ08TSVC');
            gtag('config', 'AW-17759727698');
          `}
        </Script>
        {/* Event snippet for Submit lead form conversion */}
        <Script id="gtag-report-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17759727698/0-vOCKKSuaYcENLgv5RC',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
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
              fbq('init', '1980598682520515');
              fbq('init', '660713297027148');
              fbq('init', '2150113128888459');
              fbq('track', 'PageView');
            `,
          }}
        />
        <GoogleAnalytics />
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
          src="https://www.facebook.com/tr?id=1980598682520515&ev=PageView&noscript=1"
          />
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=660713297027148&ev=PageView&noscript=1"
          />
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=2150113128888459&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
