
'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10),
  college: z.string(),
  course: z.string(),
  state: z.string(),
  district: z.string(),
  admission_year: z.string(),
  source_website: z.string(),
  utm_source: z.string(),
  utm_medium: z.string(),
});

type LeadPayload = z.infer<typeof formSchema>;

export async function submitLead(payload: LeadPayload) {
  try {
    const response = await fetch('https://cms-egspgoi.vercel.app/api/v1/leads/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
        // Propagate the error message from the API if available
        throw new Error(result.message || `API request failed with status ${response.status}`);
    }

    return result;

  } catch (error: any) {
    console.error('Server action error:', error);
    // Re-throw a generic error or the specific error to be handled by the client
    return {
        success: false,
        message: error.message || 'An unexpected error occurred.',
        data: null
    };
  }
}
