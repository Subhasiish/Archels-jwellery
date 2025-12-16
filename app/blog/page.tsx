"use client";


import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "How AI is Transforming Business",
    excerpt: "Discover how AI-driven automation and analytics are reshaping industries and creating new opportunities.",
    date: "2025-12-01",
    slug: "ai-transforming-business",
  },
  {
    title: "Branding in the Digital Age",
    excerpt: "Learn why a strong brand identity is more important than ever in a crowded digital marketplace.",
    date: "2025-11-20",
    slug: "branding-digital-age",
  },
  {
    title: "The Future of Human-Centered Design",
    excerpt: "Explore the intersection of design, technology, and user experience for tomorrow's products.",
    date: "2025-11-10",
    slug: "future-human-centered-design",
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden py-20">
      {/* Watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-[clamp(2.5rem,12vw,8rem)] font-extrabold tracking-tight select-none leading-none opacity-10 text-purple-400" style={{textShadow: "0 0 40px rgba(140,82,255,0.10), 0 0 120px rgba(140,82,255,0.08)"}}>Shuuvora Blog</div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-8 text-center text-purple-300 drop-shadow-lg"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-purple-200 mb-12 max-w-2xl mx-auto text-lg"
        >
          Insights, stories, and ideas at the intersection of creativity and technology.
        </motion.p>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Blog post cards */}
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="bg-gradient-to-br from-purple-900/60 via-black/60 to-purple-950/80 border border-purple-700/30 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between min-h-[240px] group relative overflow-hidden"
            >
              {/* Animated purple glow */}
              <div className="absolute -inset-2 rounded-2xl bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-0" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2 text-purple-200 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <div className="text-xs text-purple-300 mb-4">{new Date(post.date).toLocaleDateString()}</div>
                <p className="text-white/80 mb-4 line-clamp-3">{post.content}</p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto text-purple-400 hover:text-purple-200 font-semibold text-sm underline relative z-10"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
