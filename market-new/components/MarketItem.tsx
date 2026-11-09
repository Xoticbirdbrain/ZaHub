"use client";

import { useEffect, useState } from 'react'
import type { StaticImageData } from 'next/image'

interface props {
  id: string | number,
  title: string,
  price: number,
  description: string,
  location: string,
  category?: string,
  file: File[] | string | StaticImageData
}

const MarketItem = (props: props) => {
  const [message, setMessage] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");

  // Only create object URLs on the client, never during server render
  useEffect(() => {
    const f = props.file;
    if (Array.isArray(f)) {
      const first = f[0];
      if (first instanceof File) {
        const url = URL.createObjectURL(first);
        setImageSrc(url);
        return () => URL.revokeObjectURL(url);
      }
      setImageSrc("");
      return;
    }
    if (typeof f === "string") {
      setImageSrc(f);
      return;
    }
    setImageSrc(f.src);
  }, [props.file]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log("Sending message:", message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) form.requestSubmit();
    }
  };

  return (
    <div className='w-full px-4 md:px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 p-6 items-start justify-center'>
      <div key={props.id} className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 rounded bg-white">
    {imageSrc ? (
  <img src={imageSrc} alt={props.title} className="w-full aspect-square max-h-100 object-contain object-center" />
) : (
  <div className="flex w-full aspect-square items-center justify-center rounded bg-zinc-100 text-zinc-400">
    No image
  </div>
)}
      </div>

      <form className='w-full md:w-1/2 flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className='flex flex-wrap items-baseline gap-2'>
          <h2 className='h-5 font-semibold text-left'>{props.title} - </h2>
          <p>R{props.price}</p>
        </div>
        <div className='w-full rounded border h-35 p-1'>
          <p className='text-left'>{props.description}</p>
        </div>

        <p className='font-semibold'>Location: {props.location}</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={5}
          className='w-full rounded border p-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400'
        ></textarea>

        <button
          className='w-full bg-purple-300 text-white px-6 py-2 rounded hover:bg-purple-500'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default MarketItem