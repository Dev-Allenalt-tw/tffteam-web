import React, { useEffect, useState } from "react";
import { getGuildStatus } from "../lib/api.js";

export default function Status() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const data = await getGuildStatus();
      setStatus(data);
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  if (!status) return <p>Loading guild status...</p>;

  return (
    <div className="text-center">
      <h2 className="text-3xl text-red-500 font-bold mb-4">Guild Status</h2>
      <p>Bot Connection: {status.bot ? "🟢 Online" : "🔴 Offline"}</p>
      <p>Members: {status.members}</p>
      <p>Active Players: {status.active}</p>
    </div>
  );
}
