"use client";


import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const CLIENT_ID = "demo-client";
const USE_AI = false; // switch AI on/off safely
const AI_API_URL = "/api/chat";

type Message = {
  from: "user" | "ai";
  text: string;
};

type Stage =
  | "start"
  | "qualified"
  | "pitched"
  | "cta_asked"
  | "lead_captured";

function fallbackResponse(
  input: string,
  stage: Stage,
  setStage: (s: Stage) => void
): string {
  const text = input.toLowerCase();

  // Lead capture
  if (text.includes("@") || /\d{10}/.test(text)) {
    setStage("lead_captured");
    return "Thanks! ✅ Our team will contact you shortly.";
  }

  if (stage === "start") {
    setStage("qualified");
    return "Hi 👋 Are you exploring AI for a business or just learning?";
  }

  if (stage === "qualified") {
    if (/business|company|startup|agency/.test(text)) {
      setStage("pitched");
      return "Got it. We help businesses convert website visitors into real leads using AI assistants.";
    }
    return "No problem. I can explain AI basics or help when you're ready to apply this to a business.";
  }

  if (stage === "pitched") {
    setStage("cta_asked");
    return "Would you like a free consultation to see how this would work for your business?";
  }

  if (stage === "cta_asked") {
    if (text === "yes" || text.includes("sure")) {
      setStage("lead_captured");
      return "Great 👍 Please share your email or WhatsApp number and our team will reach out.";
    }
    if (text === "no") {
      return "No worries. If you want examples or have questions, I’m here.";
    }
    return "Just let me know if you’d like a free consultation.";
  }

  if (stage === "lead_captured") {
    return "You’re all set 👍 Our team will contact you soon.";
  }

  return "How can I help you further?";
}

async function streamText(
  text: string,
  onUpdate: (partial: string) => void
) {
  let current = "";
  for (const char of text) {
    current += char;
    onUpdate(current);
    await new Promise(res => setTimeout(res, 18 + Math.random() * 22));
  }
}

export default function AIDemoChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [stage, setStage] = useState<Stage>("start");

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat-${CLIENT_ID}`);
    const savedStage = localStorage.getItem(`stage-${CLIENT_ID}`);

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([{ from: "ai", text: "Hi 👋 Curious how AI can help your business?" }]);
    }

    if (savedStage) setStage(savedStage as Stage);
  }, []);

  useEffect(() => {
    localStorage.setItem(`chat-${CLIENT_ID}`, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(`stage-${CLIENT_ID}`, stage);
  }, [stage]);

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
        response = fallbackResponse(userText, stage, setStage);
      }
    } else {
      response = fallbackResponse(userText, stage, setStage);
    }

    setMessages(m => [...m, { from: "ai", text: "" }]);

    await streamText(response, partial => {
      setMessages(m => {
        const updated = [...m];
        updated[updated.length - 1] = { from: "ai", text: partial };
        return updated;
      });
    });

    setTyping(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex flex-col items-center justify-center py-12 px-2">
      {/* Back Button outside chatbox */}
      <div className="w-full max-w-md mb-4">
        <Link href="/ai" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors bg-white rounded-full px-4 py-2 shadow">
          <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back to AI Solutions
        </Link>
      </div>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-purple-400/30 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-black px-6 py-3 font-bold flex items-center justify-between text-lg tracking-wide">
          <span>Shuuvora AI</span>
        </div>
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-base h-80 custom-scrollbar bg-white">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <span
                className={`px-4 py-2 rounded-2xl max-w-[80%] shadow-md ${
                  m.from === "user"
                    ? "bg-white text-black border border-purple-200/40"
                    : "bg-purple-500 text-white"
                }`}
              >
                {m.text}
              </span>
            </div>
          ))}
          {typing && (
            <div className="text-purple-400 text-xs italic">AI is typing…</div>
          )}
          <div ref={bottomRef} />
        </div>
        {/* Input */}
        <form onSubmit={sendMessage} className="p-3 border-t border-purple-400/20 flex gap-2 bg-white">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full bg-white text-black border border-purple-400/30 outline-none text-base"
            autoFocus
          />
          <button className="bg-gradient-to-r from-purple-500 to-purple-500 text-black px-6 py-2 rounded-full font-bold shadow hover:from-purple-500 hover:to-purple-400 transition">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
