import React, { useEffect, useState } from 'react'
import { fetchAll } from '../lib/api'

export default function Status() {
  const [status, setStatus] = useState(null)
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAll()
        const s = data.find(r => r.name === '__guild_status')
        setStatus(s || null)
      } catch (e) {
        console.error(e)
      }
    }
    load()
    const id = setInterval(load, 5*60*1000)
    return () => clearInterval(id)
  }, [])

  if (!status) return <div className="card">Guild status not set.</div>

  return (
    <div className="card">
      <h2 className="text-xl font-bold" style={{color:'#ff4d4d'}}>Guild Bot Status</h2>
      <p><strong>Online:</strong> {status.online === 'true' ? '🟢 Online' : '🔴 Offline'}</p>
      <p><strong>Last Update:</strong> {status.joined}</p>
    </div>
  )
}
