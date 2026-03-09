import { NextResponse } from 'next/server';
import crypto from 'crypto';

// This interface defines the structure of the data sent from the frontend.
interface FrontendEventPayload {
  event_name: string;
  event_id: string;
  action_source: 'website';
  event_time: number;
  event_source_url: string;
  user_agent: string;
  user_data: {
    em?: string;
    ph?: string;
    fn?: string;
    ln?: string;
  };
  event_data: Record<string, any>; // This holds custom event data like 'content_name'.
}

// This interface defines the structure for user data sent to Meta.
interface MetaUserData {
    em?: string[];
    ph?: string[];
    fn?: string[];
    ln?: string[];
    client_ip_address?: string | null;
    client_user_agent?: string;
}

// This interface defines the payload structure for the Meta Conversions API.
interface MetaApiPayload {
  event_name: string;
  event_time: number;
  event_source_url: string;
  action_source: string;
  user_data: MetaUserData;
  custom_data?: Record<string, any>;
  event_id: string;
}

// Hashes data using SHA-256, as required by Meta for PII.
function hash(data: string): string {
    return crypto.createHash('sha256').update(data).digest('hex');
}

export async function POST(request: Request) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error('Meta Pixel ID or Access Token is not configured in environment variables.');
    // It's important not to expose the reason for the error to the client.
    return NextResponse.json({ status: 'error', message: 'Internal Server Error' }, { status: 500 });
  }

  try {
    const body: FrontendEventPayload = await request.json();

    const userData: MetaUserData = {
      // User agent is passed directly.
      client_user_agent: body.user_agent,
      // IP address can be retrieved from the request headers.
      client_ip_address: request.headers.get('x-forwarded-for') ?? request.headers.get('cf-connecting-ip'),
    };
    
    // Hash user data if it exists, as required by Meta.
    if (body.user_data.em) userData.em = [hash(body.user_data.em)];
    if (body.user_data.ph) userData.ph = [hash(body.user_data.ph)];
    if (body.user_data.fn) userData.fn = [hash(body.user_data.fn)];
    if (body.user_data.ln) userData.ln = [hash(body.user_data.ln)];

    // Construct the payload for the Conversions API.
    const metaPayload: MetaApiPayload = {
      event_name: body.event_name,
      event_time: body.event_time,
      event_source_url: body.event_source_url,
      action_source: body.action_source,
      user_data: userData,
      custom_data: body.event_data, // Renaming event_data to custom_data for Meta API.
      event_id: body.event_id,
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [metaPayload],
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Failed to send event to Meta CAPI:', responseData);
      // Don't throw here, just log the error and return a success to the client.
      // This prevents client-side errors if the CAPI call fails.
    } else {
      console.log('Successfully sent event to Meta CAPI:', responseData);
    }
    
    // Always return a success response to the client to not block its execution.
    return NextResponse.json({ status: 'received' }, { status: 200 });

  } catch (error) {
    console.error('Error processing Meta event:', error);
    return NextResponse.json({ status: 'error', message: 'Internal Server Error' }, { status: 500 });
  }
}
