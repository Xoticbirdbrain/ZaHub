"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MarketItem from "./MarketItem";
import { useAdStore } from "@/Zustand/useAdStore";
import type { AdItem } from "@/Zustand/useAdStore";

const DemoContent: AdItem[] = [
  { id: 0, title: "Wireless Earphones", price: 299, description: "Selling my earphones", location: "Cape Town", category: "Electronics", file: "/wirelessheadphones.webp" },
  { id: 1, title: "【entity-Honda¦canonical_name=Honda】-Ballade 1.6", price: 65000, description: "Selling my car open to offers", location: "Mitchells Plain", category: "Vehicle Parts", file: "/【entity-honda¦canonical_name=Honda】-ballade.jpg" },
  { id: 2, title: "【entity-Dell¦canonical_name=Dell】-Laptop", price: 1500, description: "Used laptop for sale", location: "Cape Town", category: "Electronics", file: "/【entity-dell¦canonical_name=Dell】-laptop.webp" },
  { id: 3, title: "Rims", price: 3000, description: "15 inch rims for sale", location: "Cape Town", category: "Vehicle Parts", file: "/rims.webp" },
  { id: 4, title: "Bluetooth Speaker", price: 599, description: "Selling my speaker no longer using it", location: "Cape Town", category: "Electronics", file: "/bluetooth-speaker.webp" },
  { id: 5, title: "Tv", price: 1000, description: "Bought a new one still in good condition", location: "Cape Town", category: "Electronics", file: "/tv.webp" },
  { id: 6, title: "【entity-Hisense¦canonical_name=Hisense】 Fridge", price: 1800, description: "Leaving the country needs to go asap", location: "Cape Town", category: "Home Appliances", file: "/【entity-hisense¦canonical_name=Hisense】.webp" },
  { id: 7, title: "Microwave", price: 500, description: "No longer using", location: "Cape Town", category: "Home Appliances", file: "/microwave.jpg" },
  { id: 8, title: "Cupboard", price: 700, description: "Moving out needs to go asap", location: "Cape Town", category: "Furniture", file: "/cupboard.jpg" },
  { id: 9, title: "Desk", price: 900, description: "Selling my eldest son's study desk he moved out", location: "Cape Town", category: "Furniture", file: "/desk.jpg" },
  { id: 10, title: "Office Furniture", price: 300, description: "Tenants left need to make room for new tenants", location: "Cape Town", category: "Furniture", file: "/office-furniture.webp" },
  { id: 11, title: "Car Sub", price: 450, description: "Working 100% just needs amp", location: "Cape Town", category: "Vehicle Parts", file: "/car-sub.jpg" },
  { id: 12, title: "Studio Microphone", price: 650, description: "No longer using it", location: "Cape Town", category: "Electronics", file: "/studio-microphone.webp" },
  { id: 13, title: "Iphone 17 pro max", price: 17000, description: "Used iphone minor scratches", location: "Cape Town", category: "Electronics", file: "/iphone-17.webp" },
  { id: 14, title: "Coil overs", price: 4500, description: "New coil over for honda ballade", location: "Cape Town", category: "Vehicle Parts", file: "/coil-overs.jpg" },
];

// Only creates an object URL on the client, after mount. Never on the server.
function UploadedImage({ file, title }: { file: File; title: string }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!src) return null;
  return <img src={src} alt={title} className="h-40 w-full rounded object-cover" />;
}

export default function Market() {
  const ads = useAdStore((state) => state.ads);
  const selectedProduct = useAdStore((state) => state.selectedProduct);
  const setSelectedProduct = useAdStore((state) => state.setSelectedProduct);
  const searchQuery = useAdStore((state) => state.searchQuery);
  const selectedCategory = useAdStore((state) => state.selectedCategory);
  const searchLocation = useAdStore((state) => state.searchLocation);

  const matchesSearch = (item: AdItem) => {
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesLocation = item.location.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesQuery && matchesCategory && matchesLocation;
  };

  const filteredAds = ads.filter(matchesSearch);
  const filteredDemo = DemoContent.filter(matchesSearch);

  return (
    <div id="market" className="flex w-full flex-col items-center justify-center gap-2 py-6">
      {!selectedProduct && (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAds.map((ad) => {
          
  const firstFile = Array.isArray(ad.file) ? ad.file[0] : null;
  const stringSrc = typeof ad.file === "string" ? ad.file : "";
            return (
              <div
                key={ad.id}
                className="cursor-pointer rounded border bg-white p-4 transition-all hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedProduct(ad)}
              >
                {firstFile instanceof File ? (
                  <UploadedImage file={firstFile} title={ad.title} />
                ) : stringSrc ? (
                  <img src={stringSrc} alt={ad.title} className="h-40 w-full rounded object-cover" />
                ) : null}
                <h2 className="mt-2 font-semibold">{ad.title}</h2>
                <p className="font-bold text-green-600">R {ad.price}</p>
                <p className="text-sm text-gray-500">{ad.location}</p>
              </div>
            );
          })}

          {filteredDemo.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer rounded border bg-white p-4 transition-all hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedProduct(item)}
            >
              <Image
                src={typeof item.file === "string" ? item.file : "/wirelessheadphones.webp"}
                alt={item.title}
                width={400}
                height={300}
                className="h-40 w-full rounded object-cover"
              />
              <h2 className="mt-2 font-semibold">{item.title}</h2>
              <p className="font-bold text-green-600">R {item.price}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="flex items-center justify-center p-6">
          <div className="relative rounded-lg border bg-gray-50 p-6">
            <button
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 font-bold text-white"
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
}