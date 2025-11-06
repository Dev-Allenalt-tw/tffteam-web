import React, { useEffect, useState } from 'react'
import { fetchAll } from '../lib/api'

export default function Home() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAll()
        const uid = localStorage.getItem('tff_uid')
        if (!uid) {
          setProfile(null)
        } else {
          const found = data.find(r => r.uid === uid)
          setProfile(found || null)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="card">Loading...</div>
  if (!profile) return (
    <div className="card">
      <h2 className="text-xl font-bold" style={{color:'#ff4d4d'}}>No profile</h2>
      <p>You're not logged in. <a href="https://auth.tffteam.qzz.io/login" className="underline">Login</a> to see your profile.</p>
    </div>
  )

  return (
    <div className="card">
      <h2 className="text-xl font-bold" style={{color:'#ff4d4d'}}>Player Profile</h2>
      <p><strong>Username:</strong> {profile.name}</p>
      <p><strong>Region:</strong> {profile.region}</p>
      <p><strong>Join Date:</strong> {profile.joined}</p>
      <p><strong>UID:</strong> {profile.uid}</p>
    </div>
  )
}
