import { NextResponse } from 'next/server'

const TOKEN = process.env.AIRTABLE_TOKEN!
const BASE = process.env.AIRTABLE_BASE_ID!
// TODO: add AIRTABLE_CONTACT_TABLE to .env.local once table is created
const CONTACT_TABLE = process.env.AIRTABLE_CONTACT_TABLE || 'contact_messages'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email and message required' }, { status: 400 })
  }
  try {
    const res = await fetch(`https://api.airtable.com/v0/${BASE}/${CONTACT_TABLE}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: { Name: name, Email: email, Message: message, Date: new Date().toISOString().split('T')[0] }
      }),
    })
    if (!res.ok) console.error('Airtable error:', await res.text())
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Contact error:', e)
    return NextResponse.json({ success: true }) // don't block user
  }
}
