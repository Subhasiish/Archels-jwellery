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

        {/* Interactive AI Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-12 w-full flex flex-col items-center"
        >
          <AIDemoChatbot />
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

// Interactive AI Demo Chatbot (fun, not real AI)
function AIDemoChatbot() {
  const [mounted, setMounted] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  React.useEffect(() => {
    setMounted(true);
    setMessages([{ from: "ai", text: "Hi! I’m your AI assistant. Ask me anything about AI!" }]);
  }, []);
  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      { from: "ai", text: getAIResponse(input) },
    ]);
    setInput("");
  }
  if (!mounted) return null;
  return (
    <div className="w-full max-w-md bg-white/5 border border-purple-200/20 rounded-2xl p-6 shadow-lg mb-6">
      <div className="mb-3 text-purple-200 font-semibold text-lg">AI Demo Chatbot</div>
      <div className="h-40 overflow-y-auto flex flex-col gap-2 mb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.from === "ai" ? "text-purple-200" : "text-white/90 text-right"}>
            <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-200/10 mb-1">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 rounded-full px-4 py-2 bg-black/60 border border-purple-200/20 text-white focus:outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about AI..."
        />
        <button type="submit" className="px-4 py-2 rounded-full bg-purple-400 text-black font-semibold shadow hover:bg-purple-300 transition text-sm">
          Send
        </button>
      </form>
    </div>
  );
}

function getAIResponse(input) {
  // Fun, canned responses for demo
  const lower = input.toLowerCase();
  if (lower.includes("ml") || lower.includes("machine learning")) return "Machine learning lets computers learn from data!";
  if (lower.includes("chatbot")) return "Chatbots can automate support and boost engagement.";
  if (lower.includes("predict")) return "Predictive AI can forecast trends and outcomes.";
  if (lower.includes("vision")) return "Vision AI can recognize images, faces, and more.";
  if (lower.includes("nlp") || lower.includes("language")) return "NLP helps computers understand human language.";
  if (lower.includes("secure")) return "We build secure, privacy-first AI systems.";
  if (lower.includes("data")) return "Data is the fuel for all great AI!";
  return "That’s a great question! Our AI team would love to help you with that.";
}
