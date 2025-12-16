"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "How AI is Transforming Business",
    slug: "ai-transforming-business",
    date: "2025-12-01",
    content: `Artificial Intelligence (AI) is revolutionizing industries by automating tasks, providing deep insights, and enabling smarter decision-making. From predictive analytics to chatbots, businesses are leveraging AI to gain a competitive edge. At Shuuvora, we help you harness the power of AI for real results.`,
  },
  {
    title: "Branding in the Digital Age",
    slug: "branding-digital-age",
    date: "2025-11-20",
    content: `A strong brand identity is crucial in today's digital world. It's not just about a logo—it's about the story, the experience, and the trust you build. Shuuvora crafts brands that stand out and connect with audiences on every platform.`,
  },
  {
    title: "The Future of Human-Centered Design",
    slug: "future-human-centered-design",
    date: "2025-11-10",
    content: `Design is evolving to put people first. Human-centered design means creating products and services that are intuitive, accessible, and delightful. Shuuvora blends creativity and technology to deliver experiences users love.`,
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-300 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-purple-400 underline">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-[clamp(2.5rem,12vw,8rem)] font-extrabold tracking-tight select-none leading-none opacity-10 text-purple-400" style={{textShadow: "0 0 40px rgba(140,82,255,0.10), 0 0 120px rgba(140,82,255,0.08)"}}>Shuuvora Blog</div>
      </div>
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold mb-4 text-purple-300 drop-shadow-lg"
        >
          {post.title}
        </motion.h1>
        <div className="text-xs text-purple-200 mb-6">{new Date(post.date).toLocaleDateString()}</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-invert prose-purple max-w-none text-lg md:text-xl leading-relaxed"
        >
          {post.content}
        </motion.div>
        <div className="mt-10">
          <Link href="/blog" className="text-purple-400 underline hover:text-purple-300">← Back to Blog</Link>
        </div>
      </div>
    </main>
  );
}
