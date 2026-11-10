
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

interface NavbarProps {
onOpenUpload: () => void


}

export const Navbar = ({onOpenUpload}: NavbarProps) => {
  
  return (
    
    <div className='w-full p-4'>
    <nav className="mx-auto w-full flex flex-row justify-between items-center ">
         
           
       <a className='' >logo</a>
 
        <ul className='h-25 flex flex-row justify-end gap-6 items-center'>
          


 
         <li className='items-center'><FaMessage size={30}/></li>
         <li className='items-center'><IoIosNotifications size={40} /></li>
        
          <li><button className='rounded border px-4 py-2 border-gray-500 text-white bg-[#8976b1] hover:bg-[#77639e]' onClick={onOpenUpload}>Create Listing</button></li>
      
        </ul>



    </nav>
          


    </div>
  )
}
export default Navbar;