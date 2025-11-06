// SheetDB API helper
const API_URL = "https://sheetdb.io/api/v1/shj47rm9k724o"

export async function fetchAll() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export async function postRow(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: [data] })
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error('Failed to post: ' + txt)
  }
  return res.json()
}
