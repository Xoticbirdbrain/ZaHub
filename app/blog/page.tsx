"use client";

import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "How to sell faster on a marketplace",
    excerpt: "Clear photos, honest descriptions, and fair pricing make the biggest difference. Here is a simple checklist to get your item sold.",
    date: "Nov 2026",
    category: "Selling Tips",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "How to buy safely from a local seller",
    excerpt: "Meet in a public place, check the item before you pay, and ask for the original receipt or box if there is one.",
    date: "Nov 2026",
    category: "Buying Tips",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "What to check before you buy a used car",
    excerpt: "Check the service history, look for rust and leaks, test all electronics, and take it for a short drive before you decide.",
    date: "Nov 2026",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Setting up your first listing",
    excerpt: "Pick a clear title, add the price, location, and at least 3 photos. A good first listing takes less than 5 minutes.",
    date: "Nov 2026",
    category: "Guides",
    readTime: "2 min read",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const categories = ["All", "Selling Tips", "Buying Tips", "Guides"];

  const filteredPosts = posts.filter((post) =>
    activeCategory === "All" ? true : post.category === activeCategory
  );

  const selected = posts.find((post) => post.id === selectedPost);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-zinc-500">Tips for buyers and sellers.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-2 text-sm ${
              activeCategory === cat ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {selected ? (
        <div className="mt-8 rounded-2xl border bg-white p-6">
          <button onClick={() => setSelectedPost(null)} className="text-sm text-zinc-500">
            ← Back to all posts
          </button>
          <p className="mt-4 text-sm text-zinc-500">{selected.date} · {selected.category} · {selected.readTime}</p>
          <h2 className="mt-2 text-2xl font-semibold">{selected.title}</h2>
          <p className="mt-4 text-zinc-600">{selected.excerpt}</p>
          <p className="mt-4 text-zinc-600">
            This is a demo post for the marketplace. In the full version, this would open the full article with images and steps.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post.id)}
              className="cursor-pointer rounded-2xl border bg-white p-6 transition hover:shadow-lg"
            >
              <p className="text-sm text-zinc-500">{post.date} · {post.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-zinc-600">{post.excerpt}</p>
              <p className="mt-4 text-sm font-medium">{post.readTime} →</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}