// store/useAdStore.ts
"use client";

import type { StaticImageData } from "next/image";
import { create } from "zustand";

export interface AdItem {
  id: string | number;
  title: string;
  description: string;
  price: number;
  category: string;
  file: File[] | string | StaticImageData;
  location: string;
}

interface AdStore {
  ads: AdItem[];
  selectedProduct: AdItem | null;
  showUpload: boolean;
  searchQuery: string;
  selectedCategory: string;
  searchLocation: string;
  setShowUpload: (value: boolean) => void;
  setSelectedProduct: (product: AdItem | null) => void;
  addAd: (newAd: AdItem) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setSearchLocation: (location: string) => void;
  clearSearch: () => void;
}

export const useAdStore = create<AdStore>((set) => ({
  ads: [],
  selectedProduct: null,
  showUpload: false,
  searchQuery: "",
  selectedCategory: "All",
  searchLocation: "",
  setShowUpload: (value) => set({ showUpload: value }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  addAd: (newAd) => set((state) => ({ ads: [newAd, ...state.ads] })),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchLocation: (location) => set({ searchLocation: location }),
  clearSearch: () => set({ searchQuery: "", selectedCategory: "All", searchLocation: "" }),
}));