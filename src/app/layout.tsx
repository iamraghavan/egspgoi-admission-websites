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
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Admissions 2026–27 | EGS Pillay Group of Institutions, Nagapattinam',
      template: '%s | EGS Admissions Hub',
    },
    description: 'Apply for Admissions 2026–27 at EGS Pillay Group of Institutions, Nagapattinam. Engineering, Arts & Science, Polytechnic, Nursing, Pharmacy, Education, Yoga & School courses available.',
    icons: {
      icon: [
          { url: '/icon.svg', type: 'image/svg+xml' },
          { url: '/Icon.png', type: 'image/png' },
          { url: '/favicon.ico', sizes: 'any' }
      ],
      apple: '/apple-icon.png',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
