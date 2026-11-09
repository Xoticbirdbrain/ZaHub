"use client";

import React, { useEffect,useState } from 'react';
import { z } from 'zod';

interface UploadFileProps {
  onAddAd: (ad: any) => void;
  onClose: () => void;
}


const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().max(500),
  price: z.number().positive("Price must be greater than 0"),
  category: z.string(),
  file: z.array(z.instanceof(File)).min(1, "At least one image is required"),
  location: z.string().min(1, "Location is required")
});

type AdFormType = z.infer<typeof formSchema>;

export interface AdItem extends AdFormType {
  id: string;
}

const UploadFile = ({ onAddAd, onClose }: UploadFileProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('appliances');
  const [file, setFile] = useState<File[]>([]);
  const [location, setLocation] = useState<string>('');
  
  
  const [ads, setAds] = useState<AdItem[]>(() => {
    const saved = localStorage.getItem('ads');
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem('ads', JSON.stringify(ads));
  }, [ads]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    const formData: AdFormType = {
      title,
      description,
      price,
      category,
      location,
      file
    };

    
    const validation = formSchema.safeParse(formData);

    if (!validation.success) {
      alert(validation.error.issues[0].message);
      return;
    }

    
    const validatedData = validation.data;

    
    const newAd: AdItem = {
      ...validatedData,
      id: new Date().toISOString()
    };

    onAddAd(newAd);
    onClose();
  };

  

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 px-6 overflow-y-auto '>
      <form className='relative bg-white rounded-lg shadow-xl w-full max-w-md mx-6 p-6' onSubmit={handleSubmit}>
        <button 
          type='button' 
          className='absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-100' 
          onClick={onClose}
        >
          x
        </button>
        
        <div className='flex flex-col gap-5 text-black mt-4'>
          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Title</label>
            <input 
              type='text' 
              className='border px-3 py-2 rounded w-full' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
         
          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Upload Image</label>
            <input 
              type='file' 
              multiple
              className='w-full border p-2 rounded file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-gray-100'
              onChange={(e) => setFile(e.target.files ? Array.from(e.target.files) : [])}
            />
          </div>
           
          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Description</label>
            <textarea 
              maxLength={500} 
              placeholder="Description..." 
              className='w-full border p-2 rounded h-24 resize-none'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          
          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Price</label>
            <input 
              type='number' 
              className='w-full border p-2 rounded'
              value={price || ''} 
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='font-semibold text-sm text-left'>Category</h4>
            <select 
              name="category" 
              id="category" 
              className='w-full border p-2 rounded bg-white'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="appliances">appliances</option>
              <option value="household">household</option>
              <option value="apparel">apparel</option>
              <option value="gardening">gardening</option>
              <option value="furniture">Furniture</option>
              <option value="tools">tools</option>
              <option value="video_games">video games</option>
              <option value="pc_laptops">Pc & laptops</option>
              <option value="movies">Movies</option>
              <option value="luggage">luggage</option>
              <option value="jewellery">Jewellery</option>
              <option value="sport_outdoors">Sport & outdoors</option>
              <option value="kids">kids</option>
              <option value="toys">Toys</option>
              <option value="cars">cars</option>
              <option value="boats_accessories">boats & accessories</option>
              <option value="bicycles">Bicycles</option>
              <option value="motorbikes_scooters">Motorbikes & scooters</option>
              <option value="electronics">Electronics</option>
              <option value="services">Services</option>
              <option value="events">Events</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Location</label>
            <input 
              type='text' 
              className='w-full border p-2 rounded'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className='py-3 px-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition mt-2 w-full'
          >
            Post ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadFile;