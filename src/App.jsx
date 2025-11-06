import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Status from './pages/Status'
import Application from './pages/Application'
import Tickets from './pages/Tickets'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="p-4 flex gap-4 items-center">
          <h1 className="text-2xl font-bold" style={{color:'#ff4d4d'}}>TFF_TEAM</h1>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/status" className="hover:underline">Status</Link>
          <Link to="/application" className="hover:underline">Application</Link>
          <Link to="/tickets" className="hover:underline">Tickets</Link>
          <div className="ml-auto"><a href="https://auth.tffteam.qzz.io/login" className="underline">Login</a></div>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/status" element={<Status />} />
            <Route path="/application" element={<Application />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
