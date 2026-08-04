import img1 from './assets/wirelessheadphones.webp'
import img2 from './assets/honda ballade.jpg'
import img3 from './assets/dell laptop.webp'
import img4 from './assets/rims.webp'
import img5 from './assets/bluetooth speaker.webp'
import img6 from './assets/tv.webp'
import img7 from './assets/hisense.webp'
import img8 from './assets/microwave.jpg'
import img9 from './assets/cupboard.jpg'
import img10 from './assets/desk.jpg'
import img11 from './assets/office furniture.webp'
import img12 from './assets/car sub.jpg'
import img13 from './assets/studio microphone.webp'
import img14 from './assets/iphone 17.webp'
import img15 from './assets/coil overs.jpg'
import { useState } from 'react';
import MarketItem from './MarketItem'

interface Demo {
  id: number;
  title: string;
  price: number;
  description: string;
  location: string;
  image: string;
}

const DemoContent: Demo[] = [
  {id: 0, title: "Wireless Earphones", price: 299, description: "Sellig my earphones", location: "Cape Town", image: img1},
  {id: 1, title: "Honda Ballade 1.6", price: 65000, description:  "selling my car open to offers",       location: "Mitchells Plain", image: img2},
  {id: 2, title: "Dell Laptop", price: 1500, description: "used laptop for sale", location: "Cape Town", image: img3},
  {id: 3, title: "Rims", price: 3000, description: "15 inch rims for sale", location: "Cape Town", image: img4},
  {id: 4, title: "Bluetooth Speaker", price: 599,description: "sellng my speaker no longer using it" ,location: "Cape Town", image: img5},
  {id: 5, title: "Tv", price: 1000,description: "bought a new one still in good condition" ,location: "Cape Town", image: img6},
  {id: 6, title: "Hisense Fridge", price: 1800,description: "leaving the country needs to go asap", location: "Cape Town", image: img7},
  {id: 7, title: "Microwave ", price: 500, description: "no longer using ",location: "Cape Town", image: img8},
  {id: 8, title: "Cupboard", price: 700, description: "moving out needs to go asap", location: "Cape Town", image: img9},
  {id: 9, title: "Desk", price: 900,description: "selling my eldest son's study desk he moved out", location: "Cape Town", image: img10},
  {id: 10, title: "Office Furniture ", price: 300,description: "tenants left need to make room for new tenants ", location: "Cape Town", image: img11},
  {id: 11, title: "Car Sub", price: 450,description: "workng 100%just needs amp", location: "Cape Town", image: img12},
  {id: 12, title: "Studio Microphone ", price: 650,description: "no longer using it", location: "Cape Town", image: img13},
  {id: 13, title: "Iphone 17 pro max", price: 17000, description: "used iphone minor scratches", location: "Cape Town", image: img14},
  {id: 14, title: "Coil overs", price: 4500, description:"new coil over for honda ballade", location: "Cape Town", image: img15},
];

const Market = () => {
  // FIXED: State moved INSIDE the component, and typed to 'Demo | null'
  const [selectedProduct, setSelectedProduct] = useState<Demo | null>(null);

  return (
    <div className="w-full items-center justify-center  flex flex-col py-6 gap-2">
      
      {/* Search Bar Section */}
      <div className="flex justify-center items-center gap-2">
        <input 
          className="text-black text-center py-4 px-10 border rounded mb-10" 
          placeholder="Search"
        />
      </div>

      {/* Main Grid View: Only shows when no item is selected */}
      {!selectedProduct && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {DemoContent.map((Demo) => (
            // FIXED: Added cursor pointer and an onClick wrapper to pick the item
            <div 
              key={Demo.id} 
              className="border p-4 rounded bg-white cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedProduct(Demo)}
            >
              <img src={Demo.image} alt={Demo.title} className=" w-full h-40 object-contain object-cover rounded"/>
              <h2 className="font-semibold mt-2">{Demo.title}</h2>
              <p className="text-green-600 font-bold">R {Demo.price}</p>
              <p className="text-gray-500 text-sm">{Demo.location}</p>
            </div> 
          ))}
        </div>
      )}

      {/* Individual Detailed Item View: Shows up when item is selected */}
      {selectedProduct && (
        <div className="p-6 flex justify-center items-center ">
          <div className="relative border p-6 bg-gray-50 rounded-lg">
            <button 
              className="absolute top-4 right-4 rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center font-bold" 
              onClick={() => setSelectedProduct(null)}
            >
              x
            </button>
            <MarketItem {...selectedProduct} />
          </div>
          
        </div>
      )}

    </div>
  );
};

export default Market;
