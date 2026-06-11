import { motion } from "framer-motion";
import { Cpu, Brain, Cloud, Shield, Activity, Sparkles, Zap, Code2 } from "lucide-react";

/**
 * High-tech AI-themed visual for the hero.
 * - Central glowing "AI core" orb (animated)
 * - Orbiting tech feature cards (glass-morphic) with icons
 * - Animated rings + subtle scan lines
 * - Pure CSS + framer-motion — no images, perfectly crisp at any size.
 */
export default function HeroVisual() {
  const cards = [
    { icon: Brain, label: "AI Agents", sub: "GPT · Claude · Gemini", color: "from-purple-500 to-fuchsia-500", x: "-12%", y: "8%" },
    { icon: Cloud, label: "Cloud Native", sub: "AWS · Azure · GCP", color: "from-sky-500 to-blue-500", x: "62%", y: "-2%" },
    { icon: Shield, label: "Zero-Trust", sub: "SOC2 · ISO27001", color: "from-emerald-500 to-teal-500", x: "-2%", y: "65%" },
    { icon: Code2, label: "Engineering", sub: "Sr. teams · 24×7", color: "from-orange-500 to-amber-500", x: "68%", y: "58%" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto" data-testid="hero-visual">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-slate-300/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-12 rounded-full border border-slate-200"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_6px_rgba(249,115,22,0.55)]" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_20px_6px_rgba(59,130,246,0.55)]" />
        <div className="absolute -bottom-1 left-1/4 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_16px_4px_rgba(168,85,247,0.5)]" />
      </motion.div>

      {/* AI Core */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 grid place-items-center shadow-2xl shadow-orange-500/20"
        >
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-orange-500/30 via-fuchsia-500/20 to-blue-500/20 blur-xl" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-orange-500/40 via-fuchsia-500/30 to-blue-500/30 blur-md" />

          <div className="relative z-10 text-center">
            <Cpu className="h-9 w-9 text-orange-400 mx-auto" strokeWidth={1.5} />
            <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-slate-400 font-bold">AI Core</div>
            <div className="text-white font-extrabold text-lg mt-1">PCT Engine</div>
          </div>

          {/* Pulse rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-orange-400/40"
              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Orbiting feature cards */}
      {cards.map((c, idx) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.4 + idx * 0.15 },
            scale: { duration: 0.5, delay: 0.4 + idx * 0.15 },
            y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 },
          }}
          className="absolute"
          style={{ left: c.x, top: c.y }}
        >
          <div className="bg-white/90 backdrop-blur-xl border border-white shadow-xl shadow-slate-900/10 rounded-2xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3">
            <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center shrink-0 shadow-lg`}>
              <c.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-slate-900 text-[12px] sm:text-[13.5px]">{c.label}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">{c.sub}</div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Floating stats badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute left-[8%] top-[42%] bg-white shadow-xl shadow-slate-900/10 border border-slate-200 rounded-full pl-3 pr-4 py-1.5 flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-bold text-slate-900">99.99% uptime</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute right-[6%] top-[40%] bg-white shadow-xl shadow-slate-900/10 border border-slate-200 rounded-full pl-3 pr-4 py-1.5 flex items-center gap-2"
      >
        <Activity className="h-3.5 w-3.5 text-orange-500" />
        <span className="text-[11px] font-bold text-slate-900">12ms latency</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[6%] bg-white shadow-xl shadow-slate-900/10 border border-slate-200 rounded-full pl-3 pr-4 py-1.5 flex items-center gap-2"
      >
        <Sparkles className="h-3.5 w-3.5 text-purple-500" />
        <span className="text-[11px] font-bold text-slate-900">GenAI ready</span>
      </motion.div>
    </div>
  );
}
