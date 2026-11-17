"use client";
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.push('/')}
        className="rounded border px-4 py-2 border-gray-500 text-white bg-[#8976b1] hover:bg-[#77639e]"
      >
        Back to Marketplace
      </button>
    </div>
  );
}