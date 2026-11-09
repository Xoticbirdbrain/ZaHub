import {useState} from 'react'
import Market from './Market';


interface props {
id: number,
title: string,
price: number,
description: string,
location: string,
image: string

}




const MarketItem = (props: props) => {

const [message, setMessage] = useState<string>("");

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
   <>
   <div className='w-full px-4 md:px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 p-6 items-start justify-center '>
      <div key={props.id} className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 rounded bg-white">
     
     <img src={props.image} alt={props.title} className="w-full aspect-square max-h-100 object-contain object-center "/>
     
</div>
 
<form className='w-full md:w-1/2 flex flex-col gap-2 ' onSubmit={handleSubmit}>
<div className='flex flex-wrap items-baseline gap-2'>
     <h2 className='h-5 font-semibold text-left'>{props.title} - </h2>
     <p>R{props.price}</p>
     
     
      </div>
<div className=' w-full rounded border h-35 p-1'><p className='text-left'>{props.description}</p> </div>

<p className='font-semibold'>Location: {props.location}</p>  
<textarea
 value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        rows={5}
        className='w-full rounded border p-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400'


></textarea>

<button  className='w-full bg-purple-300 text-white px-6 py-2  rounded hover:bg-purple-500 ' 
type='submit'> Send </button>


</form>

     
    </div>
    <Market/>
    </>

  )
}

export default MarketItem