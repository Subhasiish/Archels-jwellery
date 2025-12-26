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
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,90,255,0.22),transparent_70%)]" />

      {/* WATERMARK */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] text-[10vw] font-black">
        SHUUVORATECH
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Shuuvora Tech AI and Automation Systems
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/75">
          We design, engineer, and deploy **real AI infrastructure** —
          intelligent systems used by teams, enterprises, and future-scale
          companies.
        </p>
      </section>


{/* ===================== */}
{/* PROJECT SYSTEMS */}
{/* ===================== */}
<section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-14 text-center"
  >
    Deployed AI Systems
  </motion.h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    {projects.map((project, i) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.7 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 hover:scale-[1.03] transition"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
            {project.tag}
          </span>
          <span className="text-4xl">{project.icon}</span>
        </div>

        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-white/70 mb-6">{project.description}</p>

        <ul className="space-y-2 text-sm mb-8">
          {project.uses.map((use) => (
            <li key={use} className="flex gap-2">
              <span className="text-green-400">●</span> {use}
            </li>
          ))}
        </ul>

        <Link
          href={project.link}
          target={project.external ? "_blank" : undefined}
          className="inline-flex justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:opacity-90 transition"
        >
          View System →
        </Link>
      </motion.div>
    ))}
  </div>
</section>




      {/* ===================== */}
      {/* REDESIGNED AR SECTION */}
      {/* ===================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            {/* LEFT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Augmented Reality Interaction Lab
              </h2>

              <p className="text-white/70 mb-8 text-lg">
                A browser-based AR system combining **computer vision, AI,
                gesture recognition, and 3D spatial environments** — no app,
                no hardware dependency.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "Gesture-Driven Control",
                  "Touchless Interfaces",
                  "AI-Powered Vision",
                  "Real-Time Spatial Mapping",
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
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg hover:scale-105 transition"
              >
                Launch Live AR Demo →
              </Link>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-8 font-mono text-sm">
                <div className="text-green-400 mb-3">
                  ● AR SYSTEM TELEMETRY
                </div>
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/80"
                >
                  {fakeLogs[logIndex]}
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>



      

      {/* ================================= */}
      {/* REDESIGNED INTELLIGENCE STACK */}
      {/* ================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Design Your Intelligence Stack
          </h2>

          <p className="max-w-3xl mx-auto text-white/70 text-lg mb-14">
            We architect AI systems the same way enterprises design cloud
            infrastructure — **modular, secure, scalable, and future-proof**.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { title: "Core AI Models", desc: "LLMs, vision models, multimodal intelligence" },
              { title: "Automation Layer", desc: "Workflows, agents, decision engines" },
              { title: "AR / UI Systems", desc: "Gesture, spatial, immersive interfaces" },
              { title: "API & Integrations", desc: "Internal tools, CRMs, external services" },
              { title: "Security & Control", desc: "Access, logging, compliance, isolation" },
              { title: "Scalability Engine", desc: "Cloud-native, enterprise-grade scaling" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 text-left hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold mb-2">
                  {item.title}
                </div>
                <div className="text-sm text-white/60">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block px-14 py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xl font-bold hover:scale-105 transition"
          >
            Architect My AI Infrastructure →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
