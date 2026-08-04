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
   <div className='w-fu;; flex flex-row p-3 items-center justify-center '>
      <div key={props.id} className=" mt-6 w-full flex flex-col items-center justify-center p-4 rounded bg-white">
      <h2 className='h-5 font-semibold text-left'>{props.title}</h2>
     <img src={props.image} alt={props.title} className=" w-110 h-100 object-cover object-center "/>
     <div className='flex flex-row'>
    
     <p>R{props.price}</p>
     
     
      </div>
</div>
 
<form className='w-full flex flex-col gap-2 mr-2' onSubmit={handleSubmit}>

<div className='border border-s-2 h-40 p-1'><p className='text-left'>{props.description}</p> </div>

<p>{props.location}</p>  
<textarea
 value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        rows={5}
        className='w-full border p-2 resize-none'


></textarea>

<button  className='bg-purple-300 text-white px-6 py-2  rounded hover:bg-purple-500 ' 
type='submit'> Send </button>


</form>

     
    </div>
    <Market/>
    </>

  )
}

export default MarketItem