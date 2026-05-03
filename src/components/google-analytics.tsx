
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'
import * as gtag from '@/lib/gtag'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    gtag.pageview(url)
  }, [pathname, searchParams])

  if (gtag.GA_MEASUREMENT_IDS.length === 0) {
    return null;
  }

  return (
    <>
      {/* Primary Google Tag script load */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_IDS[0]}`}
      />
      {/* Initialization for all configured measurement IDs */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            ${gtag.GA_MEASUREMENT_IDS.map(id => `gtag('config', '${id}', { page_path: window.location.pathname, send_page_view: false });`).join('\n')}
          `,
        }}
      />
    </>
  )
}
