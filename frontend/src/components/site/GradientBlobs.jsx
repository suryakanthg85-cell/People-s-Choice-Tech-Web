import { motion } from "framer-motion";

/**
 * Soft ambient pastel gradient blobs used as background lighting.
 * Pure-white base + 4 pastel blobs (blue, green, purple, orange).
 * Gently animated via framer-motion to make the background "breathe".
 */
export default function GradientBlobs({ variant = "default" }) {
  // Vary blob positions per variant for visual diversity across pages.
  const presets = {
    default: [
      { color: "bg-sky-300/50", size: 560, x: "-10%", y: "-10%", delay: 0 },
      { color: "bg-emerald-300/45", size: 480, x: "75%", y: "5%", delay: 0.4 },
      { color: "bg-purple-300/50", size: 520, x: "60%", y: "55%", delay: 0.8 },
      { color: "bg-orange-300/50", size: 460, x: "-5%", y: "55%", delay: 1.2 },
    ],
    hero: [
      { color: "bg-orange-300/55", size: 680, x: "-15%", y: "-20%", delay: 0 },
      { color: "bg-purple-300/50", size: 600, x: "70%", y: "-10%", delay: 0.3 },
      { color: "bg-sky-300/55", size: 560, x: "30%", y: "65%", delay: 0.6 },
      { color: "bg-emerald-300/45", size: 500, x: "85%", y: "55%", delay: 0.9 },
      { color: "bg-fuchsia-300/40", size: 440, x: "10%", y: "30%", delay: 1.2 },
    ],
    page: [
      { color: "bg-sky-200/60", size: 480, x: "-12%", y: "10%", delay: 0 },
      { color: "bg-orange-200/55", size: 440, x: "80%", y: "20%", delay: 0.5 },
      { color: "bg-purple-200/50", size: 420, x: "40%", y: "60%", delay: 1 },
    ],
  };

  const blobs = presets[variant] || presets.default;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${b.color}`}
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            filter: "blur(90px)",
          }}
          animate={{
            x: [0, 60, -40, 30, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.15, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 16 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
