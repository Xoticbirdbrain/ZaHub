

const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col justify-center items-center text-center gap-3 px-3 py-4 mt-5">
    <div className="flex flex-row justify-center w-full gap-14  ">
    <ul className=' flex flex-col gap-2'>

        <li className="font-semibold">About</li>
        <li className="font-semibold">contact</li>
        <li className="font-semibold">privacy policy</li>

    </ul>
       <ul className="flex flex-col gap-2 font-bold">

        <li className="font-semibold">Buying & Selling</li>
        <li className="font-semibold">Careers</li>
        <li className="font-semibold">Blog</li>

    </ul>


     
     </div>
<div>

     <p className="text-center w-full" >All rights reserved @ copyright market 2026</p>
     </div>
    </footer>
  )
}

export default Footer