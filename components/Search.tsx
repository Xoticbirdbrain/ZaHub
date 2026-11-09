// components/Search.tsx
"use client";

import { FaMagnifyingGlass, FaLocationDot, FaXmark } from "react-icons/fa6";
import { useAdStore } from "@/Zustand/useAdStore";

export default function Search() {
  const searchQuery = useAdStore((state) => state.searchQuery);
  const setSearchQuery = useAdStore((state) => state.setSearchQuery);
  const selectedCategory = useAdStore((state) => state.selectedCategory);
  const setSelectedCategory = useAdStore((state) => state.setSelectedCategory);
  const searchLocation = useAdStore((state) => state.searchLocation);
  const setSearchLocation = useAdStore((state) => state.setSearchLocation);
  const clearSearch = useAdStore((state) => state.clearSearch);
  const ads = useAdStore((state) => state.ads);

  return (
    <section className="mx-4 my-4 rounded-2xl bg-zinc-100 p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for laptop, rims, TV, speaker..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-base outline-none focus:border-black focus:ring-2 focus:ring-black/10"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base outline-none focus:border-black"
        >
          <option value="All">All categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Vehicle Parts">Vehicle Parts</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </select>

        <div className="relative md:w-56">
          <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Cape Town"
            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-base outline-none focus:border-black"
          />
        </div>

        <button
          onClick={clearSearch}
          className="flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-base font-medium text-white transition hover:bg-zinc-800"
        >
          <FaXmark />
          Clear
        </button>
      </div>

      <p className="mt-3 text-sm text-zinc-500">
        {ads.length} items listed
        {searchQuery ? ` for "${searchQuery}"` : ""}
      </p>
    </section>
  );
}