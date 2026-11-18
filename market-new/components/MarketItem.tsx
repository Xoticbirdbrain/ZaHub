"use client";

import { useEffect, useState } from 'react'
import type { StaticImageData } from 'next/image'
import Profile from "@/components/Profile"

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) form.requestSubmit();
    }
  };

  return (
    <div className='w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 p-6 items-start justify-center'>
      {/* FIXED IMAGE - was aspect-square inside aspect-4/3, now fills wrapper */}
      <div className="w-full md:w-1/2 relative aspect-4/3 overflow-hidden rounded bg-white shrink-0">
        {imageSrc ? (
          <img src={imageSrc} alt={props.title} className="absolute inset-0 h-full w-full object-cover object-center" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center rounded bg-[#f1f0f7] text-black">
            No image
          </div>
        )}
      </div>

      <form className='w-full md:w-1/2 flex flex-col gap-2 min-w-0' onSubmit={handleSubmit}>
        
        <div className='flex flex-col gap-1 w-full min-w-0'>
          <div className='flex flex-wrap items-baseline gap-x-2 gap-y-1 w-full'>
            <h2 className='font-semibold text-left text-black text-xl leading-snug wrap-break-words min-w-0'>{props.title}</h2>
            <p className="font-bold text-[#645384] whitespace-nowrap">R{props.price}</p>
            <p className='text-sm text-black'><span className='font-semibold'>Condition:</span> Used - Good</p>
          </div>

            <p className='text-sm text-black mt-3'><span className='font-semibold'>Category:</span> {props.category || 'General'}</p>

          <p className='text-sm text-black w-full leading-relaxed mt-3'>
            Listed <span>Today in</span> {props.location}
          </p>

         
        </div>

        

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className='w-full rounded text-black bg-white shadow-sm p-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400'
        />
        <button
          className='w-full bg-[#8976b1] text-white px-6 py-2 rounded hover:bg-[#77639e]'
          type='submit'
        >
          Send
        </button>
        <div className='w-full rounded min-h-35 mt-2'>
          <h3 className='text-left text-base font-bold text-black mb-1'>Description</h3>
          <p className='text-left text-sm leading-relaxed text-gray-600'>{props.description}</p>
          <div className="mt-4">
             <Profile />
          </div>
         
        </div>
      </form>
    </div>
  )
}

export default MarketItem