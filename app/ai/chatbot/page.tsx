"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Toggle AI usage (true = AI + fallback, false = fallback only)
const USE_AI = false;
const CLIENT_ID = "demo-client";
const AI_API_URL = "/api/chat";

type Message = {
  from: "user" | "ai";
  text: string;
};

function fallbackResponse(input: string, memory: string | null, lastIntent: string | null) {
  const text = input.toLowerCase();
  const highIntent = [
    "business",
    "company",
    "startup",
    "agency",
    "leads",
    "sales",
    "website",
    "chatbot",
    "automation"
  ];
  const lowIntent = ["learn", "what is", "student", "career"];

  // Greeting
  if (text.includes("hello") || text.includes("hi")) {
    return "Hi 👋 Are you exploring AI for a business or just learning?";
  }

  // High intent
  if (highIntent.some(k => text.includes(k))) {
    if (lastIntent === "business_offer") {
      return "Great! To get started, could you share your business website or a way to contact you?";
    }
    return "That makes sense. We build AI assistants that convert website visitors into real leads. Want to see how this would work for your business?";
  }

  // Yes/affirmative after business offer
  if ((text === "yes" || text.includes("sure") || text.includes("ok")) && memory === "business" && lastIntent === "business_offer") {
    return "Great! To get started, could you share your business website or a way to contact you?";
  }

  // After asking for contact
  if ((text.includes(".com") || text.includes("@") || /\d{10}/.test(text)) && lastIntent === "contact_request") {
    return "Perfect 👍 Our team will reach out shortly. You can also contact us directly for faster onboarding.";
  }

  // Low intent
  if (lowIntent.some(k => text.includes(k))) {
    return "AI is mainly used to automate tasks and improve decisions. If you ever want to apply it to a real business, I can help.";
  }

  // Memory-based business follow-up
  if (memory === "business" && lastIntent !== "business_offer") {
    return "Since this is for a business, we can tailor the chatbot exactly to your goals. Want a free consultation?";
  }

  return "I can help with AI chatbots, automation, and business growth. What are you mainly interested in?";
}

async function streamText(text: string, onUpdate: (partial: string) => void) {
  let current = "";
  for (let char of text) {
    current += char;
    onUpdate(current);
    await new Promise(res => setTimeout(res, 18 + Math.random() * 20));
  }
}

export default function AIDemoChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [memory, setMemory] = useState<string | null>(null);
  const [lastIntent, setLastIntent] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`chat-${CLIENT_ID}`);
    const savedMemory = localStorage.getItem(`memory-${CLIENT_ID}`);
    if (saved) setMessages(JSON.parse(saved));
    else setMessages([{ from: "ai", text: "Hi 👋 Curious how AI can help your business?" }]);
    if (savedMemory) setMemory(savedMemory);
  }, []);

  useEffect(() => {
    localStorage.setItem(`chat-${CLIENT_ID}`, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (memory) localStorage.setItem(`memory-${CLIENT_ID}`, memory);
  }, [memory]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userText = input;
    setInput("");
    setMessages(m => [...m, { from: "user", text: userText }]);
    setTyping(true);
    // Intent memory
    if (/business|company|startup|agency/.test(userText.toLowerCase())) {
      setMemory("business");
      setLastIntent("business_offer");
    } else if ((userText.toLowerCase() === "yes" || userText.toLowerCase().includes("sure") || userText.toLowerCase().includes("ok")) && memory === "business" && lastIntent === "business_offer") {
      setLastIntent("contact_request");
    } else if ((userText.toLowerCase().includes(".com") || userText.toLowerCase().includes("@") || /\d{10}/.test(userText)) && lastIntent === "contact_request") {
      setLastIntent("done");
    } else {
      setLastIntent(null);
    }
    let response = "";
    if (USE_AI) {
      try {
        const res = await fetch(AI_API_URL, {
          method: "POST",
          body: JSON.stringify({ messages }),
        });
        const data = await res.json();
        response = data.reply;
      } catch {
        response = fallbackResponse(userText, memory, lastIntent);
      }
    } else {
      response = fallbackResponse(userText, memory, lastIntent);
    }
    let aiMessage = "";
    setMessages(m => [...m, { from: "ai", text: "" }]);
    await streamText(response, partial => {
      aiMessage = partial;
      setMessages(m => {
        const updated = [...m];
        updated[updated.length - 1] = { from: "ai", text: aiMessage };
        return updated;
      });
    });
    setTyping(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex flex-col items-center justify-center py-12 px-2">
      <div className="w-full max-w-md bg-[#181f2e] rounded-3xl shadow-2xl border border-purple-400/30 flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-black px-6 py-3 font-bold flex items-center justify-between text-lg tracking-wide">
          <span>Shuuvora AI</span>
          <Link href="/ai" className="text-xs underline text-black/70 hover:text-black ml-2">Back</Link>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-base h-80 custom-scrollbar">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <span
                className={`px-4 py-2 rounded-2xl max-w-[80%] shadow-md ${
                  m.from === "user"
                    ? "bg-white text-black"
                    : "bg-gradient-to-r from-purple-500/30 to-purple-400/20 text-purple-100"
                }`}
              >
                {m.text}
              </span>
            </div>
          ))}
          {typing && (
            <div className="text-purple-300 text-xs italic">AI is typing…</div>
          )}
          <div ref={bottomRef} />
        </div>
        <form onSubmit={sendMessage} className="p-3 border-t border-purple-400/20 flex gap-2 bg-[#15192a]">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full bg-black text-white border border-purple-400/30 outline-none text-base"
            autoFocus
          />
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-black px-6 py-2 rounded-full font-bold shadow hover:from-purple-500 hover:to-purple-400 transition">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
