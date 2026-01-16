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
        'x-submission-secret': 'haays9EdtthBnIsVJfLKiSEf6ZqKYvfKTaEe08HDnOVqWmpyXEO5znkR4fPC1LsBjzHZ960xjZtAYHobJTsi5I'
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
        // Propagate the error message from the API if available
        throw new Error(result.message || `API request failed with status ${response.status}`);
    }

    // The API response on success has a `data` property.
    return {
        success: true,
        message: result.message,
        data: result.data
    };

  } catch (error: any) {
    console.error('Server action error:', error);
    // Return a structured error so the client can handle it gracefully
    return {
        success: false,
        message: error.message || 'An unexpected error occurred.',
        data: null
    };
  }
}
