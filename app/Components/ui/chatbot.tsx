import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState, type FormEvent } from "react";
import {
  LuBot as Bot,
  LuCheck as Check,
  LuCopy as Copy,
  LuLoader as Loader2,
  LuMessageCircle as MessageCircle,
  LuSend as Send,
  LuUser as User,
  LuX as X,
} from "react-icons/lu";
import { GlobalContext } from "../context/GlobalContext";

type ChatMessage = {
  role: "user" | "model";
  content: string;
};

const portfolioInfo = {
  name: "Levi Lafiya Gana",
  role: "Frontend Engineer | Full Stack Developer | Software Engineer",
  location: "Abuja, Nigeria",
  about:
    "I build modern, responsive web and mobile applications with a focus on clean UI, good user experience, and reliable functionality.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "React Query",
    "PHP",
    "Solana",
  ],
  projects: [
    {
      name: "Personal Platter",
      description:
        "A modern e-commerce/property-listing style application built with Next.js, TypeScript, Tailwind CSS, Radix UI, React Query, Cloudinary, Swiper and Framer Motion.",
    },
    {
      name: "Solana Voting dApp",
      description:
        "A decentralized voting application with wallet connection, voter and candidate registration, admin approval, voting periods and results.",
    },
    {
      name: "TribeTalk",
      description:
        "A React Native/Expo chat application focused on real-time communication and a clean mobile experience.",
    },
  ],
  contact: {
    email: "contact@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
};

const starterMessages: ChatMessage[] = [
  {
    role: "model",
    content:
      `Hi 👋 I'm Levi's Portfolio Assistant.\n\n` +
      `I can help you learn more about Levi, his skills, projects, experience, and how to get in touch.\n\n` +
      `Try asking:\n` +
      `• "Tell me about Levi"\n` +
      `• "What technologies does he use?"\n` +
      `• "Show me his projects"\n` +
      `• "Tell me about the Solana voting dApp"\n` +
      `• "How can I contact him?"`,
  },
];

const getLocalAssistantReply = (
  query: string,
  data: typeof portfolioInfo,
): string => {
  const text = query.toLowerCase();

  if (
    text.includes("who is") ||
    text.includes("tell me about levi") ||
    text.includes("about levi")
  ) {
    return `${data.name} is a ${data.role} based in ${data.location}. ${data.about}`;
  }

  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("stack")
  ) {
    return `Levi works with: ${data.skills.join(", ")}.`;
  }

  if (text.includes("project") || text.includes("work")) {
    return `Recent projects include: ${data.projects.map((project) => project.name).join(", ")}.`;
  }

  if (text.includes("solana") || text.includes("voting")) {
    return `The Solana Voting dApp is a decentralized voting platform with wallet connection, voter registration, admin approval, voting periods, and result tracking.`;
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("github") ||
    text.includes("linkedin")
  ) {
    return `You can reach Levi via email at ${data.contact.email}, GitHub: ${data.contact.github}, and LinkedIn: ${data.contact.linkedin}.`;
  }

  return `I can tell you about Levi's background, skills, projects, and contact details. Try asking about his work, stack, or a specific project.`;
};

export default function PortfolioChatbot() {
  const { theme } = useContext(GlobalContext);
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(index);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmedInput,
    };

    const currentMessages: ChatMessage[] = [...messages, userMessage];

    setMessages(currentMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Your backend can use this portfolio data as the chatbot's knowledge.
      // There is NO premium/subscription check here.
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: currentMessages,
          portfolio: portfolioInfo,
        }),
      });

      if (!response.ok) {
        const fallbackText = getLocalAssistantReply(
          trimmedInput,
          portfolioInfo,
        );

        setMessages((previous) => [
          ...previous,
          {
            role: "model",
            content: fallbackText,
          },
        ]);
        return;
      }

      // Supports the same SSE streaming format as your original chatbot.
      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error("Streaming response is not available");
      }

      const decoder = new TextDecoder("utf-8");

      setMessages((previous) => [
        ...previous,
        {
          role: "model",
          content: "",
        },
      ]);

      let buffer = "";
      let finished = false;

      while (!finished) {
        const { value, done } = await reader.read();

        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;

          const payload = line.slice(6).trim();

          if (payload === "[DONE]") {
            finished = true;
            break;
          }

          try {
            const data = JSON.parse(payload);

            if (data.text) {
              setMessages((previous) => {
                const updated = [...previous];
                const lastIndex = updated.length - 1;

                updated[lastIndex] = {
                  ...updated[lastIndex],
                  content: updated[lastIndex].content + data.text,
                };

                return updated;
              });
            }
          } catch (error) {
            console.error("Could not parse chatbot stream:", error);
          }
        }
      }
    } catch (error) {
      console.error("Portfolio chatbot error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "model",
          content:
            "Sorry, I couldn't connect to the portfolio assistant right now. " +
            "Please use the contact section to reach Levi directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part: string, index: number) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-24 right-6 z-50 flex h-[500px] max-h-[80vh] w-80 flex-col overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md sm:w-96 ${
              isDark
                ? "border-slate-700 bg-slate-950/95 text-slate-100"
                : "border-slate-200 bg-white/95 text-slate-900"
            }`}
          >
            {/* Header */}
            <div
              className={`relative flex items-center justify-between border-b p-4 ${
                isDark
                  ? "border-slate-700 bg-slate-900/80"
                  : "border-slate-200 bg-slate-100/80"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg">
                  <Bot size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">Portfolio Assistant</h3>

                  <p
                    className={`flex items-center gap-1.5 text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Online
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={`relative z-10 rounded-full p-2 transition-colors ${
                  isDark
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                    : "bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              className={`flex-1 space-y-5 overflow-y-auto p-4 ${isDark ? "bg-slate-950" : "bg-white"}`}
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                      message.role === "user"
                        ? "bg-emerald-500 text-white"
                        : isDark
                          ? "border border-slate-700 bg-slate-800 text-slate-100"
                          : "border border-slate-200 bg-slate-100 text-slate-700"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>

                  <div
                    className={`group relative max-w-[82%] break-words whitespace-pre-wrap rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                      message.role === "user"
                        ? "rounded-tr-none bg-emerald-500 text-white"
                        : isDark
                          ? "rounded-tl-none border border-slate-700 bg-slate-800 pr-10 text-slate-100"
                          : "rounded-tl-none border border-slate-200 bg-slate-50 pr-10 text-slate-800"
                    }`}
                  >
                    {formatText(message.content)}

                    {message.role === "model" && message.content && (
                      <button
                        type="button"
                        onClick={() => handleCopy(message.content, index)}
                        className={`absolute right-2 top-2 rounded-lg p-1.5 opacity-0 transition-all group-hover:opacity-100 focus:opacity-100 ${
                          isDark
                            ? "text-slate-300 hover:bg-slate-700 hover:text-white"
                            : "text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                        title="Copy message"
                        aria-label="Copy message"
                      >
                        {copiedId === index ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-xl border ${isDark ? "border-slate-700 bg-slate-800 text-slate-100" : "border-slate-200 bg-slate-100 text-slate-700"}`}
                  >
                    <Bot size={16} />
                  </div>

                  <div
                    className={`flex items-center gap-2 rounded-2xl rounded-tl-none border p-3.5 text-sm ${isDark ? "border-slate-700 bg-slate-800 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`}
                  >
                    <Loader2 size={16} className="animate-spin" />
                    Thinking...
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Free / no subscription indicator */}
            <div
              className={`border-t px-4 py-2 text-center text-xs ${isDark ? "border-slate-700 bg-slate-900/80 text-slate-300" : "border-slate-200 bg-slate-100/80 text-slate-600"}`}
            >
              Portfolio assistant · Free to use
            </div>

            {/* Input */}
            <div
              className={`border-t p-3 ${isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-slate-50"}`}
            >
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about my work..."
                  disabled={isLoading}
                  className={`w-full rounded-full border py-3.5 pl-5 pr-14 text-sm outline-none transition-all disabled:opacity-60 ${
                    isDark
                      ? "border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  }`}
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 rounded-full bg-emerald-500 p-2 text-white shadow-md transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((previous) => !previous)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg"
        aria-label={
          isOpen ? "Close portfolio chatbot" : "Open portfolio chatbot"
        }
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
