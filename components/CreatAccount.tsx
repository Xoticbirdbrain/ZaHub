"use client";
import { useState } from "react";

  const CreatAccount = () => {
 const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string | number>('');
 const [closeUpload, setCloseUpload] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  
  };

  if(!closeUpload) return null;
  return (
    
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 px-6 overflow-y-auto '>
      
      
      
      <form className=' relative bg-white rounded-lg shadow-xl w-full max-w-md mx-6 ' onSubmit={handleSubmit}>
         <button type='button' className='absolute top-1 right-2 rounded-full w-8 h-8 flex items-center justify-center  border-gray-500 text-white bg-purple-300 hover:bg-purple-500' onClick={() => setCloseUpload(false)}>x</button>
    
        <div>
         <label>Email
          <input/>


         </label>

        </div>
        <div>
        <label>Create a setPassword</label>
        <input/>

        </div>
       <div>
        <label>Confirm Password</label>
        <input/>

        </div>
       <div>
        <h4>or <span>Login</span> with Google</h4>
         <img/>
       </div>


          
         
        
      </form>
    </div>
  )
}

export default CreatAccount 