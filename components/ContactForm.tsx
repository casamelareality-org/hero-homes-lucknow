"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";
export default function ContactForm() {
     const [name, setName] = useState("");
     const [mobile, setMobile] = useState("");
     const [email, setEmail] = useState("");
     const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  alert("Button Clicked");

try {
  const docRef = await addDoc(collection(db, "enquiries"), {
    name,
    mobile,
    email,
    createdAt: new Date(),
  });

  alert("Saved: " + docRef.id);
} catch (error: any) {
  console.error(error);
  alert(JSON.stringify(error));
}
};
  return (
    <section id="contact" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">

        <h2 className="mb-8 text-center text-4xl font-bold">
          Book a Site Visit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
           type="text"
           placeholder="Your Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           className="w-full rounded-xl border border-gray-700 bg-zinc-900 p-4"
          />

          <input
           type="tel"
           placeholder="Mobile Number"
           value={mobile}
           onChange={(e) => setMobile(e.target.value)}
           className="w-full rounded-xl border border-gray-700 bg-zinc-900 p-4"
          />

          <input
           type="email"
           placeholder="Email Address"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="w-full rounded-xl border border-gray-700 bg-zinc-900 p-4"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 py-4 font-semibold hover:bg-red-700"
          >
            Book Now
          </button>

        </form>

      </div>
    </section>
  );
}