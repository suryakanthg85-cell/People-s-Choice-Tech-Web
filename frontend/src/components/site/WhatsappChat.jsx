import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

/**
 * Floating WhatsApp chat widget.
 * - Sticky bottom-right pill button
 * - Click to open a small panel with quick message + Start Chat CTA
 * - Opens WhatsApp Web/app with prefilled message
 */
const PHONE = "918275439584"; // +91 8275439584 — international format, no +
const DEFAULT_MSG =
  "Hi People's Choice Tech 👋 I'd like to chat about a project / quote. Could you help?";

export default function WhatsappChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MSG);
  const [pulse, setPulse] = useState(true);

  // Stop the attract-pulse after first interaction
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 8000);
    return () => clearTimeout(t);
  }, []);

  const startChat = () => {
    const text = encodeURIComponent(message || DEFAULT_MSG);
    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank", "noopener");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3" data-testid="whatsapp-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-[320px] bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/15 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#075E54] to-[#128C7E] px-4 py-3.5 flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
                <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white" aria-hidden="true">
                  <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2c2.3 1.3 4.9 2 7.6 2C24.6 31.8 31.5 24.9 31.5 16.3 31.5 7.7 24.6.5 16 .5zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5C3.6 20.8 3 18.4 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.9-13 12.9zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.4-.6.1-.3 0-.5 0-.6 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.5s-1.2 1.1-1.2 2.8 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8 0-.1-.4-.3-.8-.5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[15px] leading-tight">Chat on WhatsApp</div>
                <div className="text-[12px] text-white/80 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                  Typically replies within 1 hour
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded"
                aria-label="Close chat"
                data-testid="whatsapp-close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-4 py-4 bg-[#ECE5DD]/40 max-h-72 overflow-auto">
              <div className="text-[12px] text-slate-500 text-center mb-3 font-medium">
                Today
              </div>
              <div className="flex">
                <div className="max-w-[88%] bg-white rounded-2xl rounded-tl-md px-3.5 py-2.5 shadow-sm">
                  <div className="text-[11px] font-bold text-emerald-700 mb-0.5">
                    People's Choice Tech
                  </div>
                  <div className="text-[13.5px] text-slate-800 leading-relaxed">
                    Hi 👋 Tell us a bit about what you'd like to build or hire for — we'll come back with a clear plan, fast.
                  </div>
                </div>
              </div>
            </div>

            {/* Composer */}
            <div className="border-t border-slate-200 bg-white p-3 flex items-end gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                className="flex-1 resize-none rounded-xl border border-slate-200 px-3 py-2 text-[13.5px] text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                placeholder="Type your message…"
                data-testid="whatsapp-message"
              />
              <button
                onClick={startChat}
                className="h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white grid place-items-center shadow-md shadow-emerald-500/30 transition-transform hover:scale-105 shrink-0"
                aria-label="Send via WhatsApp"
                data-testid="whatsapp-send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger */}
      <button
        onClick={() => { setOpen((v) => !v); setPulse(false); }}
        className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white grid place-items-center shadow-xl shadow-emerald-500/30 transition-transform hover:scale-110"
        aria-label="Open WhatsApp chat"
        data-testid="whatsapp-toggle"
      >
        {pulse && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" style={{ animationDelay: "0.6s" }} />
          </>
        )}
        {open ? (
          <X className="h-6 w-6 relative" />
        ) : (
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white relative" aria-hidden="true">
            <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2c2.3 1.3 4.9 2 7.6 2C24.6 31.8 31.5 24.9 31.5 16.3 31.5 7.7 24.6.5 16 .5zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5C3.6 20.8 3 18.4 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.9-13 12.9zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.4-.6.1-.3 0-.5 0-.6 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.5s-1.2 1.1-1.2 2.8 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8 0-.1-.4-.3-.8-.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
