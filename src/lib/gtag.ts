
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
  }
}

export const GA_MEASUREMENT_IDS = ['G-XNN53VPPHW', 'G-NTCJ08TSVC', 'AW-17759727698'];

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_IDS.length || typeof window.gtag !== 'function') return;
  for (const id of GA_MEASUREMENT_IDS) {
    window.gtag('config', id, {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!GA_MEASUREMENT_IDS.length || typeof window.gtag !== 'function') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Reports a Google Ads conversion.
 * @param label The conversion label provided by Google Ads.
 * @param callback Optional function to call after the event is sent.
 */
export const reportConversion = (label: string, callback?: () => void) => {
  if (typeof window.gtag !== 'function') {
    if (callback) callback();
    return;
  }
  
  window.gtag('event', 'conversion', {
    'send_to': `AW-17759727698/${label}`,
    'event_callback': callback
  });
};
