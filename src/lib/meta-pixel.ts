'use client';

// Define the type for the fbq function
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

type EventData = {
  [key: string]: any;
};

export const trackMetaEvent = (eventName: string, eventData: EventData = {}) => {
  if (typeof window.fbq !== 'function') {
    console.warn('Meta Pixel not loaded.');
    return;
  }

  const eventID = crypto.randomUUID();

  // 1. Send Browser Pixel Event
  window.fbq('track', eventName, eventData, { eventID });

  // 2. Send Event to Backend for Conversions API
  // This fetch call is for the backend to process and send to Meta's CAPI.
  // The backend implementation would need to forward this to the Meta Graph API.
  fetch('/api/meta-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventID,
      event_data: eventData,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      user_agent: navigator.userAgent,
    }),
  }).catch(error => {
    console.error('Failed to send Meta event to backend:', error);
  });
};
