"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "chatbot",
    title: "AI Chatbot Intelligence",
    tag: "LIVE SYSTEM",
    icon: "🤖",
    description:
      "Production-ready AI chatbot systems built for real businesses.",
    uses: [
      "Customer Support Automation",
      "Ticket & Appointment Booking",
      "Sales Lead Qualification",
      "Website AI Concierge",
    ],
    link: "/ai/chatbot",
  },
  {
    id: "gps",
    title: "GPS & Location Intelligence",
    tag: "SMART SYSTEM",
    icon: "📍",
    description:
      "AI-powered location, routing, and movement intelligence.",
    uses: [
      "Smart Route Optimization",
      "Live Location Tracking",
      "Geo-Fencing Automation",
      "Logistics Intelligence",
    ],
    link: "/ai/route-finder",
  },
  {
    id: "ar",
    title: "AR & Gesture Control Lab",
    tag: "EXPERIMENTAL",
    icon: "🖐️",
    description:
      "Web-based AR and gesture-controlled systems powered by AI.",
    uses: [
      "Touchless Interfaces",
      "AR Product Interaction",
      "Smart Displays",
      "Immersive Web Experiences",
    ],
    link: "https://orbital-canvas.vercel.app/",
    external: true,
  },
];

const fakeLogs = [
  "Bootstrapping neural inference layer...",
  "Loading multimodal transformer (Vision + NLP)...",
  "Vector memory synchronized.",
  "User intent classified in real-time.",
  "Latency stable at 29ms.",
  "Gesture recognition pipeline active.",
  "AR spatial mapping complete.",
];

export default function AIControlCenter() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % fakeLogs.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,90,255,0.22),transparent_70%)]" />

      {/* WATERMARK */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] text-[20vw] sm:text-[12vw] font-black">
        SHUUVORATECH
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Shuuvora Tech AI & Automation Systems
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/75">
          We design, engineer, and deploy real AI infrastructure —
          intelligent systems built for scale.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-14 text-center">
          Deployed AI Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 hover:scale-[1.02] transition"
            >
              <div className="flex justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                  {project.tag}
                </span>
                <span className="text-3xl">{project.icon}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-white/70 mb-6 text-sm sm:text-base">
                {project.description}
              </p>

              <ul className="space-y-2 text-sm mb-6">
                {project.uses.map((use) => (
                  <li key={use} className="flex gap-2">
                    <span className="text-green-400">●</span> {use}
                  </li>
                ))}
              </ul>

              <Link
                href={project.link}
                target={project.external ? "_blank" : undefined}
                className="block text-center w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-sm sm:text-base"
              >
                View System →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* AR SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Augmented Reality Interaction Lab
            </h2>

            <p className="text-white/70 mb-6 text-sm sm:text-lg">
              Browser-based AR powered by AI, computer vision, and gesture recognition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Gesture-Driven Control",
                "Touchless Interfaces",
                "AI-Powered Vision",
                "Spatial Mapping",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="https://orbital-canvas.vercel.app/"
              target="_blank"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-sm sm:text-lg"
            >
              Launch AR Demo →
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 font-mono text-sm">
            <div className="text-green-400 mb-3">● LIVE SYSTEM LOGS</div>
            {fakeLogs[logIndex]}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE STACK */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-32 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 sm:p-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Intelligence Stack Architecture
          </h2>

          <p className="max-w-3xl mx-auto text-white/70 text-sm sm:text-lg mb-12">
            Enterprise-grade AI systems designed for security, scale, and longevity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              "Core AI Models",
              "Automation & Agents",
              "AR / UX Systems",
              "API Integrations",
              "Security & Governance",
              "Scalable Infrastructure",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/40 p-5"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-lg"
          >
            Architect My AI Infrastructure →
          </Link>
        </div>
      </section>
    </main>
  );
}
