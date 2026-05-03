
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
  }
}

// Google Analytics and Google Ads Measurement IDs provided by the user
export const GA_MEASUREMENT_IDS = ['G-NTCJ08TSVC', 'AW-17759727698'];

/**
 * Tracks a page view in Google Analytics.
 * @param url The URL of the page being viewed.
 */
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

/**
 * Tracks a custom event in Google Analytics.
 * @param action The name of the event.
 * @param category The category of the event.
 * @param label The label of the event.
 * @param value An optional numerical value for the event.
 */
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
 * @param label The conversion label provided by Google Ads (e.g., '0-vOCKKSuaYcENLgv5RC').
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
