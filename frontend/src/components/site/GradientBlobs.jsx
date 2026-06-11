import { motion } from "framer-motion";

/**
 * Site-wide ambient gradient blobs.
 * Only 3 colors: light blue, light green, light purple — per brand direction.
 * Fixed position so it spans the viewport regardless of page length.
 */
export default function GradientBlobs({ variant = "default" }) {
  const presets = {
    default: [
      { color: "bg-sky-200/55", size: 520, x: "-8%", y: "10%", delay: 0 },
      { color: "bg-emerald-200/50", size: 480, x: "70%", y: "5%", delay: 0.5 },
      { color: "bg-purple-200/55", size: 500, x: "35%", y: "60%", delay: 1 },
    ],
    hero: [
      { color: "bg-sky-200/65", size: 620, x: "-10%", y: "-15%", delay: 0 },
      { color: "bg-purple-200/55", size: 560, x: "70%", y: "-5%", delay: 0.4 },
      { color: "bg-emerald-200/55", size: 520, x: "30%", y: "65%", delay: 0.8 },
    ],
    page: [
      { color: "bg-sky-200/55", size: 480, x: "-12%", y: "10%", delay: 0 },
      { color: "bg-emerald-200/45", size: 440, x: "75%", y: "20%", delay: 0.5 },
      { color: "bg-purple-200/55", size: 460, x: "40%", y: "70%", delay: 1 },
    ],
    fixed: [
      { color: "bg-sky-200/40", size: 600, x: "-10%", y: "5%", delay: 0 },
      { color: "bg-emerald-200/35", size: 520, x: "75%", y: "30%", delay: 0.6 },
      { color: "bg-purple-200/40", size: 560, x: "30%", y: "65%", delay: 1.2 },
    ],
  };
  const blobs = presets[variant] || presets.default;
  const positionClass = variant === "fixed" ? "fixed" : "absolute";

  return (
    <div
      className={`pointer-events-none ${positionClass} inset-0 overflow-hidden`}
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
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
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 25, -15, 0],
            scale: [1, 1.12, 0.94, 1.08, 1],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
