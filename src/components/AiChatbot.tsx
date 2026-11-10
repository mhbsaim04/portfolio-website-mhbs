"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const suggestedPrompts = [
  "What is Saim's tech stack?",
  "Tell me about the Wanderlast project",
  "What does Saim do at Halal Shoot?",
  "Where does Saim study?",
  "How can I contact or hire Saim?",
];

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: `Hello! 👋 I'm Saim's AI Portfolio Assistant. Ask me anything about his full-stack projects, tech stack, experience at Halal Shoot, or academic journey at PUST!`,
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(2); // start after the seeded welcome message

  const nextMessageId = () => `m${idCounter.current++}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("stack") || q.includes("skill") || q.includes("tech") || q.includes("technolog")) {
      return `Saim's core technical stack includes:\n• Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, JavaScript (ES6+)\n• Backend: Node.js, Express.js, MongoDB, Better Auth, JWT Tokens, REST & CRUD APIs\n• Specialized: Google Earth Engine (GEE), ArcGIS, QGIS, Git, Vercel, and Canva for brand strategy.`;
    }

    if (q.includes("wanderlast") || q.includes("travel")) {
      return `Wanderlast is Saim's full-stack travel booking platform! It features a dual-application architecture: a high-performance Next.js App Router client and a standalone Express.js REST API backed by MongoDB. It secures all bookings and admin functions with Better Auth & JWT tokens! Check it out live at wanderlast-travel-booking-webapp.vercel.app.`;
    }

    if (q.includes("bazar") || q.includes("dor") || q.includes("market") || q.includes("commodity")) {
      return `Bazar Dor is Saim's Bengali-language commodity price tracker for Bangladesh. It features daily price movers, category-based sorting, OAuth & credential auth via Better Auth, and detailed market pricing across local bazaars. Live demo: bazar-dor-web-project.vercel.app.`;
    }

    if (q.includes("fitlog") || q.includes("workout") || q.includes("fitness")) {
      return `FitLog is an interactive workout library and training planner built with Next.js 16, React 19, and Tailwind v4. It features a 12-workout catalogue, capped 5-lift daily plans, and persistent local storage tracking. Live at: body-fit-log-web.vercel.app.`;
    }

    if (q.includes("halal shoot") || q.includes("experience") || q.includes("job") || q.includes("work")) {
      return `Saim currently works as a part-time Project & Social Media Manager at Halal Shoot. He manages client brand campaigns, coordinates timelines and deliverables, leads community communication, and develops digital marketing strategies.`;
    }

    if (q.includes("study") || q.includes("pust") || q.includes("education") || q.includes("university") || q.includes("degree")) {
      return `Saim is pursuing a Bachelor of Science (B.Sc.) in Geography and Environment at Pabna University of Science and Technology (PUST). He is also in the final stretch of Programming Hero's intensive AI-driven full-stack web engineering program!`;
    }

    if (q.includes("geography") || q.includes("gis") || q.includes("earth engine")) {
      return `Saim's unique edge is 'Geography Meets Code'. His geography background at PUST gives him spatial data thinking, and he writes code scripts in Google Earth Engine (GEE) alongside ArcGIS and QGIS for geospatial analysis.`;
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("phone")) {
      return `You can reach Saim directly via:\n• Email: mhbsaim27@gmail.com\n• LinkedIn: linkedin.com/in/mazharul-hoq-bhuiyan-saim-32b420355\n• GitHub: github.com/mhbsaim04\n• Or use the contact form at the bottom of this website! He is open to full-stack engineering roles and freelance collaborations.`;
    }

    if (q.includes("resume") || q.includes("cv")) {
      return `You can download Saim's updated resume with a single click right from the Hero section or the top navigation bar!`;
    }

    return `Thanks for your question! Saim is an AI-driven full-stack web engineer proficient in Next.js, React 19, TypeScript, Node.js, and MongoDB. Feel free to ask about his projects (Wanderlast, Bazar Dor, FitLog), his experience at Halal Shoot, or his studies at PUST!`;
  };

  const handleSend = (textToSend?: string) => {
    const question = textToSend || input;
    if (!question.trim()) return;

    const userMsg: Message = {
      id: nextMessageId(),
      sender: "user",
      text: question,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateAnswer(question);
      const botMsg: Message = {
        id: nextMessageId(),
        sender: "bot",
        text: answer,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button — dark circle, outlined bubble with ?? */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="group relative w-14 h-14 rounded-full bg-[#1a1d1e] border border-[#2a2d30] shadow-[0_8px_28px_rgba(0,0,0,0.55)] flex items-center justify-center cursor-pointer hover:scale-105 hover:border-[#00e572]/50 transition-all duration-300"
        >
          <MessageCircle
            className="w-8 h-8 text-white"
            strokeWidth={1.6}
            aria-hidden
          />
          {/* "? mark centered inside the bubble */}
          <span className="absolute inset-0 flex items-center justify-center pb-2 text-white text-[13px] font-bold font-mono pointer-events-none group-hover:text-accent transition-colors duration-300">
            ?
          </span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[420px] h-[550px] max-h-[85vh] rounded-2xl bg-[#151819] border border-[#25282b] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

          {/* Header */}
          <div className="px-5 py-4 bg-[#1a1d1e] border-b border-[#25282b] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00e572] text-[#062d15] flex items-center justify-center shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-sm">Saim AI Assistant</h3>
                  <span className="w-2 h-2 rounded-full bg-[#00e572]" />
                </div>
                <p className="text-[#9aa2a6] text-xs">Full-Stack Knowledge Base</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-[#9aa2a6] hover:text-white hover:bg-[#25282b] transition"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-[#00e572]/15 border border-[#00e572]/35 text-accent flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-[#00e572] text-[#062d15] rounded-tr-none shadow-md font-semibold"
                      : "bg-[#1a1d1e] text-[#c1c8cb] rounded-tl-none border border-[#25282b]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-[#9aa2a6] text-xs">
                <div className="w-7 h-7 rounded-lg bg-[#00e572]/15 text-accent flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="animate-pulse">Saim AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          <div className="px-4 py-2 bg-[#0d0f10] border-t border-[#25282b] overflow-x-auto flex gap-1.5 scrollbar-none">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-[#1a1d1e] border border-[#25282b] text-[11px] text-[#9aa2a6] whitespace-nowrap hover:border-[#00e572]/50 hover:text-accent transition cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#151819] border-t border-[#25282b] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Saim..."
              className="input-flat !py-2 flex-1"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-[#00e572] text-[#062d15] hover:bg-[#00f77e] hover:scale-105 disabled:opacity-40 transition cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
