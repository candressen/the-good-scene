export interface Event {
  id: string
  name: string
  description: string
  date: string
  time: string
  location: string
  price: string
  whySelected: string
  tags: string[]
  hostedBy: string
  bookingLink: string
  images: { url: string; filename: string }[]
}

const BASE_ID = 'appc0GiENncYNkZBX'
const TABLE_ID = 'tblqXeRudiQ8pYbqk'
const TOKEN = process.env.AIRTABLE_TOKEN!

async function fetchAirtable(path: string) {
  const res = await fetch(`https://api.airtable.com/v0/${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    next: { revalidate: 60 },
  })
  if (!res.ok) throw new Error(`Airtable error: ${res.status}`)
  return res.json()
}

export async function getAllEvents(): Promise<Event[]> {
  const data = await fetchAirtable(`${BASE_ID}/${TABLE_ID}?sort[0][field]=Date&sort[0][direction]=asc`)
  return data.records
    .filter((r: any) => r.fields.Name)
    .map((r: any) => ({
      id: r.id,
      name: r.fields.Name ?? '',
      description: r.fields.Description ?? '',
      date: r.fields.Date ?? '',
      time: r.fields.Time ?? '',
      location: r.fields.Location ?? '',
      price: r.fields.Price ?? '',
      whySelected: r.fields['Why selected'] ?? '',
      tags: r.fields.Tags ?? [],
      hostedBy: r.fields['Hosted by'] ?? '',
      bookingLink: r.fields['Booking Link'] ?? '',
      images: r.fields.Attachments ?? [],
    }))
}

export async function getEventById(id: string): Promise<Event | null> {
  try {
    const data = await fetchAirtable(`${BASE_ID}/${TABLE_ID}/${id}`)
    return {
      id: data.id,
      name: data.fields.Name ?? '',
      description: data.fields.Description ?? '',
      date: data.fields.Date ?? '',
      time: data.fields.Time ?? '',
      location: data.fields.Location ?? '',
      price: data.fields.Price ?? '',
      whySelected: data.fields['Why selected'] ?? '',
      tags: data.fields.Tags ?? [],
      hostedBy: data.fields['Hosted by'] ?? '',
      bookingLink: data.fields['Booking Link'] ?? '',
      images: data.fields.Attachments ?? [],
    }
  } catch {
    return null
  }
}
