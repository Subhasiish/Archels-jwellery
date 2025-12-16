
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const brandingServices = [
  {
    title: "Logo & Visual Identity",
    description: "Custom logo, color palette, and visual system for instant recognition.",
    icon: "🎨",
  },
  {
    title: "Brand Guidelines",
    description: "Comprehensive brand book: fonts, colors, voice, and usage rules.",
    icon: "📘",
  },
  {
    title: "Corporate Rebranding",
    description: "Transform your legacy brand for the digital era with minimal risk.",
    icon: "🏢",
  },
  {
    title: "Packaging & Collateral",
    description: "Product packaging, business cards, and all branded materials.",
    icon: "📦",
  },
  {
    title: "Brand Strategy",
    description: "Positioning, messaging, and storytelling for market leadership.",
    icon: "🚀",
  },
  {
    title: "Digital Brand Assets",
    description: "Social banners, email templates, and web graphics for every channel.",
    icon: "💻",
  },
];
export default function BrandingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ShuuvoraStudios. watermark background */}
      <div
        aria-hidden
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div
          className="text-[clamp(2.5rem,12vw,8rem)] font-extrabold tracking-tight select-none leading-none opacity-10"
          style={{
            color: "#fff",
            textShadow:
              "0 0 40px rgba(255,140,0,0.10), 0 0 120px rgba(255,140,0,0.08)",
          }}
        >
          ShuuvoraStudios.
        </div>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-300 drop-shadow-lg"
        >
          Elevate Your Brand with Shuuvora Studios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-2xl text-orange-100/90 mb-8"
        >
          We help ambitious companies become unforgettable. From logo to legacy, our creative team crafts brands that inspire trust and spark excitement.
        </motion.p>

        {/* Interactive fun: Brand Mood Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-12"
        >
          <BrandMoodSelector />
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {brandingServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-white/5 border border-orange-300/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:bg-orange-400/10 transition-transform"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <div className="font-bold text-lg mb-1 text-orange-200">{service.title}</div>
              <div className="text-white/80 text-sm">{service.description}</div>
            </motion.div>
          ))}
        </div>


        {/* Premium, creative, interactive elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-3xl mx-auto mb-10"
        >
          {/* Animated premium testimonials */}
          <div className="text-orange-200 text-lg font-semibold mb-4">What our clients say</div>
          <AnimatedTestimonials />
        </motion.div>

        {/* Interactive Brand Color Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl mx-auto mb-12"
        >
          <div className="text-orange-200 text-lg font-semibold mb-2">Try a Brand Color Palette</div>
          <BrandPalette />
        </motion.div>

        {/* Playful Brand Personality Quiz Teaser */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-xl mx-auto mb-8 text-center"
        >
          <div className="bg-white/10 border border-orange-200/20 rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-orange-100 text-lg font-bold mb-2">What's your brand's personality?</div>
            <div className="text-white/80 mb-3">Take our playful quiz to discover your unique brand vibe and get a free moodboard!</div>
            <button className="mt-2 px-6 py-2 rounded-full bg-orange-400 text-black font-semibold shadow hover:bg-orange-300 transition">Start Quiz</button>
          </div>
        </motion.div> */}

        <div className="text-orange-100/80 text-sm mt-8">
          Ready to make your brand iconic? <Link href="/contact" className="underline hover:text-orange-300">Contact us</Link> for a free consultation.
        </div>
      </section>
    </main>
  );
}

// Animated Testimonials Carousel
function AnimatedTestimonials() {
  const testimonials = [
    {
      name: "Ava R.",
      company: "FintechX",
      text: "Shuuvora Studios made our rebrand a dream. The process was fun, fast, and the results are stunning!",
      color: "bg-orange-400/20",
    },
    {
      name: "Liam T.",
      company: "EcoWave",
      text: "Our new logo and brand book gave us the confidence to pitch to big clients. Highly recommend!",
      color: "bg-pink-300/20",
    },
    {
      name: "Sophia M.",
      company: "UrbanNest",
      text: "The interactive mood selector was a hit with our team. We felt heard and inspired!",
      color: "bg-yellow-300/20",
    },
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [testimonials.length]);
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`rounded-2xl px-8 py-6 shadow-lg border border-orange-200/20 ${testimonials[idx].color}`}
    >
      <div className="text-white/90 text-lg mb-2">“{testimonials[idx].text}”</div>
      <div className="text-orange-200 font-semibold">{testimonials[idx].name}</div>
      <div className="text-orange-100 text-xs">{testimonials[idx].company}</div>
    </motion.div>
  );
}

// Interactive Brand Palette
function BrandPalette() {
  const palettes = [
    ["#FF8C00", "#FFD580", "#FFF", "#222"],
    ["#FFB347", "#FF6961", "#FFF5E1", "#1A1A1A"],
    ["#F7CAC9", "#92A8D1", "#FFF", "#333"],
    ["#B5EAD7", "#C7CEEA", "#FFF", "#444"],
    ["#E2F0CB", "#FFDAC1", "#FFF", "#222"],
  ];
  const [idx, setIdx] = React.useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-3">
        {palettes[idx].map((color, i) => (
          <div
            key={color}
            className="w-10 h-10 rounded-lg border border-white/20 shadow"
            style={{ background: color }}
            title={color}
          />
        ))}
      </div>
      <button
        onClick={() => setIdx(i => (i + 1) % palettes.length)}
        className="px-4 py-1.5 rounded-full bg-orange-400 text-black font-semibold shadow hover:bg-orange-300 transition text-sm"
      >
        Shuffle Palette
      </button>
    </div>
  );
}

// Interactive fun: Brand Mood Selector
function BrandMoodSelector() {
  const moods = [
    { label: "Bold", color: "bg-orange-400" },
    { label: "Elegant", color: "bg-pink-300" },
    { label: "Minimal", color: "bg-white/80 text-black" },
    { label: "Playful", color: "bg-yellow-300 text-black" },
    { label: "Techy", color: "bg-blue-400" },
    { label: "Luxury", color: "bg-purple-400" },
  ];
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-5">
      {moods.map((mood, i) => (
        <button
          key={mood.label}
          onClick={() => setSelected(i)}
          className={`px-5 py-2 rounded-full font-semibold text-sm shadow-md border border-white/20 focus:outline-none transition-all duration-200 ${mood.color} ${selected === i ? 'ring-2 ring-orange-300 scale-105' : 'opacity-80 hover:scale-105'}`}
        >
          {mood.label}
        </button>
      ))}
      <span className="ml-4 text-orange-200 font-medium text-base hidden md:inline">Mood: {moods[selected].label}</span>
    </div>
  );
}
