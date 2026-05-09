import { NextResponse } from 'next/server'
import { fetchEvents } from '@/lib/airtable'

export async function GET() {
  const events = await fetchEvents()
  return NextResponse.json(events)
}
