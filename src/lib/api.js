import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "tffteam.firebaseapp.com",
  projectId: "tffteam",
  storageBucket: "tffteam.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example API functions
export async function getPlayerData() {
  const docRef = doc(db, "players", "demo");
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : { name: "Unknown", joinDate: "N/A", region: "N/A", level: "0" };
}

export async function getGuildStatus() {
  const docRef = doc(db, "guild", "status");
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : { bot: false, members: 0, active: 0 };
}

export async function submitApplication(data) {
  const id = Math.random().toString(36).slice(2, 8);
  await setDoc(doc(db, "applications", id), { ...data, id, status: "pending" });
  return true;
}

export async function getTickets() {
  const q = await getDocs(collection(db, "applications"));
  return q.docs.map(d => d.data());
}
