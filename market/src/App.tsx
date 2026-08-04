
import './App.css'
import Footer from './Footer'
import { Navbar } from './Navbar'
import Sidebar from './Sidebar'
import Market from './Market'

function App() {
  

  return (
    <>
    <div className='flex flex-col '>
<Navbar/>

<div className='flex gap-10'>
<Sidebar/>
<Market/>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default App
