import React, { useState } from 'react';
import z from 'zod';




const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().max(500),
  price: z.number().positive("Price must be greater than 0"),
  category: z.string()
});

const UploadFile = () => {
  // State to track form inputs
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('appliances');
  const [file, setFile] = useState<File | null>(null);
  const [closeUpload, setCloseUpload] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    const validation = formSchema.safeParse({
      title,
      description,
      price: Number(price),
      category
    });

    if (!validation.success) {
      alert(validation.error.issues[0].message);
      return;
    }

    console.log("Validated Data:", validation.data);
    console.log("Selected File:", file);
    // Proceed with your upload logic
  };
  
  const handleUpload = () => {
    // Your upload logic here
  };

  if(!closeUpload) return null;
  
  return (
    
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 px-6 overflow-y-auto '>
      
      
      
      <form className=' relative bg-white rounded-lg shadow-xl w-full max-w-md mx-6 ' onSubmit={handleSubmit}>
         <button type='button' className='absolute top-1 right-2 rounded-full w-8 h-8 flex items-center justify-center  border-gray-500 text-white bg-purple-300 hover:bg-purple-500' onClick={() => setCloseUpload(false)}>x</button>
        {/* Main flex vertical stack container */}
        <div className='flex flex-col items-center justify-items-center gap-7 text-black'>
          
          <div className='w-100 my-2 border border-amber-700 '> 
            <div  className='mx-8 flex flex-col gap-1'>
            <label className='font-semibold text-md text-left'>Title</label>
            <input 
              type='text' 
              required
              className='border px-3 py-2 rounded  ' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </div>
          </div>
         
          <div className='w-100 flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Upload Image</label>
            <input 
              required 
              type='file' 
              className='w-full border p-2 rounded file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-gray-100'
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
           
          <div className='w-100 flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Description</label>
            <textarea 
              maxLength={500} 
              placeholder="Description..." 
              className='w-full border p-2 rounded h-24 resize-none'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          
          <div className='w-100 flex flex-col gap-1'>
            <label className='font-semibold text-sm text-left'>Price</label>
            <input 
              type='number' 
              required
              className='w-full border p-2 rounded'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className='w-100 flex flex-col gap-1'>
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
              <option value="household_2">household</option>
              <option value="tools">tools</option>
              <option value="video_games">video games</option>
              <option value="pc_laptops">Pc & laptops</option>
              <option value="movies">Movies</option>
              <option value="apparel_2">apparel</option>
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

          <button 
            type="submit" 
            className='py-6 px-3 bg-blue-600 hover:bg-blue-700 text-white font-medium p-2.5 rounded transition mt-2'
         onClick={handleUpload}
         >
            Post ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadFile;

       
          
