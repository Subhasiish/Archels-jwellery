"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden py-20">
      {/* Watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-[clamp(2.5rem,12vw,8rem)] font-extrabold tracking-tight select-none leading-none opacity-10 text-purple-400" style={{textShadow: "0 0 40px rgba(140,82,255,0.10), 0 0 120px rgba(140,82,255,0.08)"}}>Shuuvora</div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-8 text-center text-purple-300 drop-shadow-lg"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-purple-200 mb-10 max-w-2xl mx-auto text-lg"
        >
          Where creativity meets intelligence. Discover our story, vision, and the people behind Shuuvora.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 space-y-8 text-center bg-gradient-to-br from-purple-900/40 via-black/40 to-purple-950/60 rounded-3xl p-8 border border-purple-700/30 shadow-xl"
        >
          <p>
            <span className="text-purple-300 font-semibold">Shuuvora</span> is a creative technology studio blending branding, design, and AI to help businesses stand out and grow. Our team is passionate about building digital experiences that are beautiful, smart, and impactful.
          </p>
          <p>
            We believe in the power of creativity and technology to solve real problems. Whether you need a bold new brand, a custom AI solution, or a digital product that delights users, we’re here to make it happen.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-purple-700/80 text-white font-bold text-lg shadow-lg animate-pulse">Innovate. Inspire. Impact.</span>
            <span className="inline-block px-4 py-1 rounded-full bg-purple-500/30 text-purple-100 text-xs tracking-widest uppercase">Founded in 2025</span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
