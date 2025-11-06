import React, { useEffect, useState } from "react";
import { getTickets } from "../lib/api.js";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then(setTickets);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl text-red-500 font-bold mb-4">Your Applications</h2>
      {tickets.length === 0 ? <p>No tickets found.</p> : (
        <ul className="space-y-2">
          {tickets.map((t, i) => (
            <li key={i} className="bg-red-900/30 p-2 rounded-lg">
              ID: {t.id} | Status: {t.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
