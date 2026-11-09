"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    console.log({ name, email, message });
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-zinc-500">Have a question about a listing, or need help with your account? Send us a message.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Get in touch</h2>
          <p className="mt-2 text-zinc-600">We usually reply within 1 working day.</p>
          <div className="mt-4 space-y-2 text-sm text-zinc-600">
            <p><span className="font-semibold">Email:</span> support@zahub.co.za</p>
            <p><span className="font-semibold">Location:</span> Cape Town, South Africa</p>
            <p><span className="font-semibold">Hours:</span> Mon - Fri, 9am - 5pm</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border bg-white p-6">
          {sent && (
            <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
              Message sent. We will get back to you soon.
            </p>
          )}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-xl border border-zinc-200 px-4 py-3"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            type="email"
            className="rounded-xl border border-zinc-200 px-4 py-3"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows={5}
            className="resize-none rounded-xl border border-zinc-200 px-4 py-3"
          />
          <button type="submit" className="rounded-xl bg-black py-3 text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}