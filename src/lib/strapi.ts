/**
 * @fileOverview Strapi CMS Integration Utility
 * This file provides a clean wrapper for fetching data from your Strapi instance.
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Helper to fetch data from Strapi API
 * @param path The endpoint path (e.g., '/leads' or '/pages?populate=*')
 * @param options Standard Fetch options
 */
export async function fetchStrapi(path: string, options: RequestInit = {}) {
  const url = `${STRAPI_URL}/api${path.startsWith('/') ? path : `/${path}`}`;
  
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
        ...options.headers,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Strapi Error:', data);
      throw new Error(data.error?.message || 'Failed to fetch from Strapi');
    }

    return data;
  } catch (error) {
    console.error('Network error connecting to Strapi:', error);
    throw error;
  }
}
