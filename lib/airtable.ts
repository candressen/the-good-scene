// Airtable integration for TGS events
// Owner manages events directly in Airtable UI

const TOKEN = process.env.AIRTABLE_TOKEN!
const BASE = process.env.AIRTABLE_BASE_ID!
const EVENTS_TABLE = process.env.AIRTABLE_EVENTS_TABLE!

export type AirtableEvent = {
  id: string
  name: string
  date: string
  time: string
  location: string
  price: string
  description: string
  tags: string[]
  hostedBy: string
  category: string
}

export async function fetchEvents(): Promise<AirtableEvent[]> {
  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${BASE}/${EVENTS_TABLE}?maxRecords=100&sort[0][field]=Date&sort[0][direction]=asc`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
        next: { revalidate: 300 }, // cache 5 min
      }
    )
    if (!res.ok) throw new Error(`Airtable error: ${res.status}`)
    const data = await res.json()
    return data.records
      .filter((r: any) => r.fields.Name)
      .map((r: any) => ({
        id: r.id,
        name: r.fields.Name || '',
        date: r.fields.Date || '',
        time: r.fields.Time || '',
        location: r.fields.Location || '',
        price: r.fields.Price || '',
        description: r.fields.Description || '',
        tags: r.fields.Tags || [],
        hostedBy: r.fields['Hosted by'] || 'The Good Scene',
        category: r.fields.Category || 'Social',
      }))
  } catch (e) {
    console.error('Airtable fetch failed:', e)
    return []
  }
}

export async function createReservation(payload: {
  eventId: string
  eventTitle: string
  name: string
  email: string
  phone?: string
  notes?: string
}) {
  // TODO: create event_reservations table in Airtable and update AIRTABLE_RESERVATIONS_TABLE env
  // For now log and return success
  console.log('Reservation:', payload)
  return { success: true }
}

export type Event = AirtableEvent

export async function getEventById(id: string): Promise<AirtableEvent | null> {
  const events = await fetchEvents()
  return events.find(e => e.id === id) || null
}
