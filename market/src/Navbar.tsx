import UploadFile from './UploadFile.tsx'
import { useState } from 'react';
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";



export const Navbar = () => {
  const [showUpload, setShowUpload] = useState<boolean>(false);
  
  

   

  
  
  
  return (
    
    <>
    <nav className="max-w-6xl mb-3 flex flex-row gap-3 justify-between items-center font-lg font-bold w-full p-6">
        
        <div className="flex justify-start">logo</div>
        <ul className="flex justify-end gap-4">


          <button className='rounded p-4 border px-3 py-6 border-gray-500 text-white bg-purple-300 hover:bg-purple-500' onClick={() => setShowUpload(!showUpload)}>Create ad</button>
 
         <li className='items-center'><FaMessage size={38}/></li>
         <li className='items-center'><IoIosNotifications size={40} /></li>
        
         <li>sign up</li>
        </ul>



    </nav>
          {showUpload && <UploadFile />}

    </>
  )
}
