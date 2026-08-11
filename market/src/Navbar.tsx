
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

interface NavbarProps {
onOpenUpload: () => void


}

export const Navbar = ({onOpenUpload}: NavbarProps) => {
  
  return (
    
    <div className='w-full flex justify-center'>
    <nav className="w-full max-w-5xl flex flex-row justify-between items-center ">
         
           
       <a className='' >logo</a>
 
        <ul className=' h-25 flex flex-row  justify-end gap-6 items-center'>
          


 
         <li className='items-center'><FaMessage size={30}/></li>
         <li className='items-center'><IoIosNotifications size={40} /></li>
        
          <li><button className='rounded px-3 py-6 border-gray-500 text-white bg-purple-300 hover:bg-purple-500' onClick={onOpenUpload}>Create Listing</button></li>
      
        </ul>



    </nav>
          


    </div>
  )
}
export default Navbar;