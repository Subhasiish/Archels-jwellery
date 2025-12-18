"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const aiServices = [
  {
    title: "Custom AI Chatbots",
    description: "Conversational bots tailored for your business, available 24/7.",
    icon: "🤖",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make smarter decisions with machine learning.",
    icon: "📈",
  },
  {
    title: "AI Automation",
    description: "Automate repetitive tasks and workflows for maximum efficiency.",
    icon: "⚡",
  },
  {
    title: "Vision & Image Recognition",
    description: "Unlock insights from images and video with advanced AI models.",
    icon: "🖼️",
  },
  {
    title: "Natural Language Processing",
    description: "Extract meaning and value from text, voice, and chat data.",
    icon: "🗣️",
  },
  {
    title: "AI Integration",
    description: "Seamlessly add AI to your existing products and platforms.",
    icon: "🔗",
  },
];

export default function AIPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Shuuvoratech watermark background */}
      <div
        aria-hidden
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div
          className="text-[clamp(2.5rem,12vw,8rem)] font-extrabold tracking-tight select-none leading-none opacity-10"
          style={{
            color: "#fff",
            textShadow:
              "0 0 40px rgba(140,82,255,0.10), 0 0 120px rgba(140,82,255,0.08)",
          }}
        >
          Shuuvoratech
        </div>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-purple-300 drop-shadow-lg"
        >
          AI Solutions by Shuuvoratech
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-2xl text-purple-100/90 mb-8"
        >
          We build intelligent, scalable, and secure AI systems that help you automate, predict, and grow. Our team blends deep learning, NLP, and automation to deliver real business value.
        </motion.p>

        {/* Interactive AI Demo & Route Finder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-12 w-full flex flex-col items-center gap-4"
        >
          <Link href="/ai/chatbot" className="inline-block px-6 py-3 rounded-full border border-purple-400 text-purple-300 bg-black/40 hover:bg-purple-400 hover:text-black font-semibold text-lg shadow transition-colors">Try our AI Chatbot Demo →</Link>
          <Link href="/ai/route-finder" className="inline-block px-6 py-3 rounded-full border border-green-400 text-green-300 bg-black/40 hover:bg-green-400 hover:text-black font-semibold text-lg shadow transition-colors">Smart Location & Route Finder →</Link>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-white/5 border border-purple-300/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:bg-purple-400/10 transition-transform"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <div className="font-bold text-lg mb-1 text-purple-200">{service.title}</div>
              <div className="text-white/80 text-sm">{service.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust-building: Animated AI/ML badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-3xl mx-auto mb-10"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Deep Learning', 'NLP', 'Automation', 'ML Ops', 'Data Science', 'Secure AI'].map((badge) => (
              <motion.div
                key={badge}
                whileHover={{ scale: 1.12, rotate: 2 }}
                className="bg-white/10 rounded-xl px-6 py-3 text-white/90 font-bold text-base md:text-lg shadow-md border border-purple-200/20 cursor-pointer hover:bg-purple-400/20 transition-all"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-purple-100/80 text-sm mt-8">
          Ready to build your next AI solution? <Link href="/contact" className="underline hover:text-purple-300">Contact us</Link> for a free consultation.
        </div>
      </section>
    </main>
  );

}
