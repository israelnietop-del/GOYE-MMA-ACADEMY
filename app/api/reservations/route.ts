import { NextResponse } from 'next/server';

// Endpoint simple para evolución futura con Firebase/Supabase.
export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ ok: true, status: 'pendiente', payload });
}
