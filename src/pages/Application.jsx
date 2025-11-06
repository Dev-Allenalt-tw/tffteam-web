import React, { useState } from "react";
import { submitApplication } from "../lib/api.js";

export default function Application() {
  const [form, setForm] = useState({ name: "", uid: "", region: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitApplication(form);
    setMsg(res ? "Application submitted ✅" : "Error ❌");
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl text-red-500 font-bold mb-4">Join TFF_TEAM</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="p-2 rounded bg-red-900/20 w-64" placeholder="Name"
          onChange={e=>setForm({...form, name:e.target.value})}/>
        <input className="p-2 rounded bg-red-900/20 w-64" placeholder="UID"
          onChange={e=>setForm({...form, uid:e.target.value})}/>
        <input className="p-2 rounded bg-red-900/20 w-64" placeholder="Region"
          onChange={e=>setForm({...form, region:e.target.value})}/>
        <button className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-lg">Submit</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
