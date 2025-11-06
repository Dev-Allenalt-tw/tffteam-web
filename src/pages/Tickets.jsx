import React, { useEffect, useState } from 'react'
import { fetchAll } from '../lib/api'

export default function Tickets() {
  const [tickets, setTickets] = useState([])
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAll()
        const uid = localStorage.getItem('tff_uid')
        if (!uid) return setTickets([])
        const arr = data.filter(d => d.uid === uid && d.application)
        setTickets(arr)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <div className="card">
      <h2 className="text-xl font-bold" style={{color:'#ff4d4d'}}>My Applications</h2>
      {tickets.length===0 && <p>No applications yet.</p>}
      <ul>
        {tickets.map((t, i) => (
          <li key={i} className="border-b border-red-800 py-2">
            <strong>Status:</strong> {t.status || 'pending'} — <div><small>{t.joined}</small></div>
            <div>{t.application}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
