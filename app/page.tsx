// app/page.tsx
"use client";

import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Market from '@/components/Market'
import UploadFile from '@/components/UploadFile'
import Footer from '@/components/Footer'
import { useAdStore } from "@/Zustand/useAdStore";

export default function Home() {
  const showUpload = useAdStore((state) => state.showUpload);
  const setShowUpload = useAdStore((state) => state.setShowUpload);
  const addAd = useAdStore((state) => state.addAd);

  return (
    <>
      <Navbar onOpenUpload={() => setShowUpload(true)} />

      <Search />
      <Market />
      {showUpload && (
        <UploadFile
          onAddAd={addAd}
          onClose={() => setShowUpload(false)}
        />
      )}

      <Footer />
    </>
  );
}