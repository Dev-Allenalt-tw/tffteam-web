import React, { useState } from 'react'
import { postRow } from '../lib/api'

export default function Application() {
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState(null)
  const [name, setName] = useState(localStorage.getItem('tff_name') || '')
  const [uid, setUid] = useState(localStorage.getItem('tff_uid') || '')
  const [region, setRegion] = useState(localStorage.getItem('tff_region') || '')

  async function submit(e) {
    e.preventDefault()
    try {
      const payload = {
        name: name || 'Anonymous',
        region,
        joined: new Date().toISOString(),
        uid: uid || '',
        application: msg,
        status: 'pending'
      }
      const res = await postRow(payload)
      setStatus({ ok: true, res })
      setMsg('')
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold" style={{color:'#ff4d4d'}}>Apply to join TFF_TEAM</h2>
      {status && status.ok && <div className="text-green-400">Application sent.</div>}
      {status && !status.ok && <div className="text-red-400">Error: {status.error}</div>}
      <form onSubmit={submit} className="space-y-3 mt-3">
        <input className="w-full p-2 bg-black border border-red-700" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full p-2 bg-black border border-red-700" placeholder="UID (optional)" value={uid} onChange={e=>setUid(e.target.value)} />
        <input className="w-full p-2 bg-black border border-red-700" placeholder="Region" value={region} onChange={e=>setRegion(e.target.value)} />
        <textarea className="w-full p-2 bg-black border border-red-700" placeholder="Why should we accept you?" value={msg} onChange={e=>setMsg(e.target.value)}></textarea>
        <button className="px-4 py-2 rounded" type="submit" style={{background:'#ff0000'}}>Submit</button>
      </form>
    </div>
  )
}
