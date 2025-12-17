"use client";


import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const CLIENT_ID = "demo-client";
const USE_AI = false; // switch AI on/off safely
const AI_API_URL = "/api/chat";

type Message = {
  from: "user" | "ai";
  text: string;
  options?: string[];
  optionSelected?: string;
};

type Stage =
  | "start"
  | "qualified"
  | "pitched"
  | "cta_asked"
  | "lead_captured";


// Option logic for each stage
const stageOptions: Record<Stage, string[] | undefined> = {
  start: ["Business", "Learning", "Other"],
  qualified: ["Tell me about AI for business", "Explain AI basics", "Show examples"],
  pitched: ["Yes, I want a consultation", "Show me case studies", "No, just browsing"],
  cta_asked: ["Yes", "No", "Maybe later"],
  lead_captured: undefined,
};

const responseMap: Record<Stage, Record<string, string>> = {
  start: {
    Business: "Great! What kind of business are you in?",
    Learning: "Awesome! Are you interested in AI for personal growth or future projects?",
    Other: "No problem! Let me know how I can help you with AI.",
  },
  qualified: {
    "Tell me about AI for business": "AI can automate tasks, analyze data, and improve customer engagement. What area interests you most?",
    "Explain AI basics": "AI is about building systems that can learn, reason, and solve problems. Would you like a simple example?",
    "Show examples": "Sure! For example, chatbots, recommendation engines, and image recognition are all AI-powered.",
  },
  pitched: {
    "Yes, I want a consultation": "Great 👍 Please share your email or WhatsApp number and our team will reach out.",
    "Show me case studies": "We have helped e-commerce, healthcare, and finance companies boost efficiency with AI. Want details on a specific industry?",
    "No, just browsing": "No worries! If you want examples or have questions, I’m here.",
  },
  cta_asked: {
    Yes: "Awesome! Please share your contact details and we’ll get in touch.",
    No: "All good! If you want to explore more, just ask.",
    "Maybe later": "Sure, reach out anytime you’re ready.",
  },
  lead_captured: {},
};

function fallbackResponse(
  input: string,
  stage: Stage,
  setStage: (s: Stage) => void,
  lastOption?: string
): { text: string; options?: string[] } {
  const text = input.toLowerCase();

  // Lead capture
  if (text.includes("@") || /\d{10}/.test(text)) {
    setStage("lead_captured");
    return { text: "Thanks! ✅ Our team will contact you shortly." };
  }

  // If user selected an option, respond accordingly
  if (lastOption && responseMap[stage] && responseMap[stage][lastOption]) {
    // Progress stage if needed
    if (stage === "start") setStage("qualified");
    if (stage === "qualified") setStage("pitched");
    if (stage === "pitched") setStage("cta_asked");
    if (stage === "cta_asked") setStage("lead_captured");
    return { text: responseMap[stage][lastOption], options: stageOptions[(stage === "cta_asked") ? "lead_captured" : (Object.keys(stageOptions)[Object.keys(stageOptions).indexOf(stage) + 1] as Stage)] };
  }

  // Default stage-based response
  if (stageOptions[stage]) {
    let prompt = "";
    switch (stage) {
      case "start":
        setStage("qualified");
        prompt = "Hi 👋 Are you exploring AI for a business or just learning?";
        break;
      case "qualified":
        prompt = "What would you like to know about AI?";
        break;
      case "pitched":
        prompt = "Would you like a free consultation to see how this would work for your business?";
        break;
      case "cta_asked":
        prompt = "Would you like to proceed with a free consultation?";
        break;
      default:
        prompt = "How can I help you further?";
    }
    return { text: prompt, options: stageOptions[stage] };
  }

  if (stage === "lead_captured") {
    return { text: "You’re all set 👍 Our team will contact you soon." };
  }

  return { text: "How can I help you further?" };
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
  const [pendingOptions, setPendingOptions] = useState<string[] | undefined>(undefined);

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

    let responseObj: { text: string; options?: string[] };

    if (USE_AI) {
      try {
        const res = await fetch(AI_API_URL, {
          method: "POST",
          body: JSON.stringify({ messages }),
        });
        const data = await res.json();
        responseObj = { text: data.reply };
      } catch {
        responseObj = fallbackResponse(userText, stage, setStage);
      }
    } else {
      responseObj = fallbackResponse(userText, stage, setStage);
    }

    setMessages(m => [...m, { from: "ai", text: "" }]);
    setPendingOptions(responseObj.options);

    await streamText(responseObj.text, partial => {
      setMessages(m => {
        const updated = [...m];
        updated[updated.length - 1] = { ...updated[updated.length - 1], text: partial, options: responseObj.options };
        return updated;
      });
    });

    setTyping(false);
  }

  // Handle option click
  async function handleOption(option: string) {
    setMessages(m => [...m, { from: "user", text: option, optionSelected: option }]);
    setTyping(true);

    let responseObj = fallbackResponse(option, stage, setStage, option);
    setPendingOptions(responseObj.options);

    setMessages(m => [...m, { from: "ai", text: "" }]);
    await streamText(responseObj.text, partial => {
      setMessages(m => {
        const updated = [...m];
        updated[updated.length - 1] = { ...updated[updated.length - 1], text: partial, options: responseObj.options };
        return updated;
      });
    });
    setTyping(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex flex-col items-center justify-center py-6 px-1 sm:py-10 sm:px-2 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Back Button outside chatbox */}
      <div className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-4 px-2 sm:px-0">
        <Link href="/ai" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors bg-white rounded-full px-4 py-2 shadow">
          <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back
        </Link>
      </div>
      <div className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-3xl shadow-2xl border border-purple-400/30 flex flex-col overflow-hidden mx-auto px-0 sm:px-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-black px-6 py-3 font-bold flex items-center justify-between text-lg tracking-wide">
          <span>Shuuvora AI</span>
        </div>
        {/* Messages */}
        <div className="flex-1 p-2 sm:p-4 overflow-y-auto space-y-3 text-base h-72 sm:h-80 bg-white scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col gap-1 ${m.from === "user" ? "items-end" : "items-start"}`}>
              <span
                className={`px-4 py-2 rounded-2xl max-w-[80%] shadow-md ${
                  m.from === "user"
                    ? "bg-white text-black border border-purple-200/40"
                    : "bg-purple-500 text-white"
                }`}
              >
                {m.text}
              </span>
              {/* Render options if this is the last AI message and options exist */}
              {m.from === "ai" && m.options && i === messages.length - 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {m.options.map(option => (
                    <button
                      key={option}
                      onClick={() => handleOption(option)}
                      className="px-3 py-1 rounded-full border border-purple-400 text-purple-700 bg-white hover:bg-purple-100 text-xs font-semibold shadow transition"
                      disabled={typing}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="text-purple-400 text-xs italic">AI is typing…</div>
          )}
          <div ref={bottomRef} />
        </div>
        {/* Input */}
        <form onSubmit={sendMessage} className="p-2 sm:p-3 border-t border-purple-400/20 flex gap-2 bg-white">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 sm:px-4 py-2 rounded-full bg-white text-black border border-purple-400/30 outline-none text-base min-w-0"
            autoFocus
          />
          <button className="bg-gradient-to-r from-purple-500 to-purple-500 text-black px-4 sm:px-6 py-2 rounded-full font-bold shadow hover:from-purple-500 hover:to-purple-400 transition whitespace-nowrap">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
