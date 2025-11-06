import React, { useEffect, useState } from "react";
import { getPlayerData } from "../lib/api.js";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getPlayerData().then(setProfile);
  }, []);

  if (!profile) return <p>Loading player data...</p>;

  return (
    <div className="text-center">
      <h2 className="text-3xl text-red-500 font-bold mb-4">Player Profile</h2>
      <div className="bg-red-900/30 p-4 rounded-2xl shadow-lg inline-block">
        <p><b>Name:</b> {profile.name}</p>
        <p><b>Join Date:</b> {profile.joinDate}</p>
        <p><b>Region:</b> {profile.region}</p>
        <p><b>Level:</b> {profile.level}</p>
      </div>
    </div>
  );
}
