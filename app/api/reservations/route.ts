import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { eventId, eventTitle, name, email, phone, notes } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
  }

  // Log payload — TODO: write to Airtable event_reservations table
  console.log('New reservation:', { eventId, eventTitle, name, email, phone, notes })

  // TODO: POST to Airtable when reservations table is set up:
  // await fetch(`https://api.airtable.com/v0/${BASE}/event_reservations`, {
  //   method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ fields: { event_id: eventId, event_title: eventTitle, name, email, phone, notes } })
  // })

  return NextResponse.json({ success: true })
}
