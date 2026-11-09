"use client";

import {useState} from 'react'

import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Market from '@/components/Market'
import UploadFile from '@/components/UploadFile'
import Footer from '@/components/Footer'

export interface AdItem {
  id: string | number;
  title: string;
  description: string;
  price: number;
  category: string;
  file: File[] | string;
  location: string;
}


function App() {
  const [showUpload, setShowUpload] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null); // Kept for your product detail views
  const [ads, setAds] = useState<AdItem[]>([]);

  
    const handleAddAd = (newAd: AdItem) => {
    setAds((prevAds) => [newAd, ...prevAds]);
  };
  return (
    <>
    
<Navbar onOpenUpload={() => setShowUpload(true)}/>



<Search/>
<Market ads={ads} 
        selectedProduct={selectedProduct} 
        setSelectedProduct={setSelectedProduct} />
{showUpload && (<UploadFile
 onAddAd={handleAddAd} 
          onClose={() => setShowUpload(false)} 

/>)}


  
    <Footer/>
    </>
  )
}

export default App