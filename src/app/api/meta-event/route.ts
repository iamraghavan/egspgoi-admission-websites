import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real implementation, you would take this body
    // and securely forward it to the Meta Conversions API.
    // https://developers.facebook.com/docs/marketing-api/conversions-api/get-started
    
    // For now, we just log it to the server console for verification.
    console.log('Received Meta CAPI event on backend:', JSON.stringify(body, null, 2));

    // Return a success response to the client.
    return NextResponse.json({ status: 'received' }, { status: 200 });

  } catch (error) {
    console.error('Error processing Meta event:', error);
    return NextResponse.json({ status: 'error', message: 'Internal Server Error' }, { status: 500 });
  }
}
