import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Status from "./pages/Status.jsx";
import Application from "./pages/Application.jsx";
import Tickets from "./pages/Tickets.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-mono">
        <header className="p-4 flex justify-between items-center bg-red-900/50 shadow-md">
          <h1 className="text-2xl font-bold text-red-500">TFF_TEAM</h1>
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/status">Status</Link>
            <Link to="/application">Application</Link>
            <Link to="/tickets">Tickets</Link>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/status" element={<Status />} />
            <Route path="/application" element={<Application />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>

        <footer className="p-3 text-center text-sm text-gray-500 bg-red-950/40">
          © 2025 TFF_TEAM Guild. All Rights Reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}
