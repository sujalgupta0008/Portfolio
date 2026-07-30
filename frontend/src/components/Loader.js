import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Same grain texture used in Hero, kept local so this file stays self-contained.
const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const LOADING_MESSAGES = [
  "Fetching data streams",
  "Cleaning messy datasets",
  "Training models",
  "Rendering dashboards",
];

const CIRCLE_R = 44;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

const CubeFace = ({ transform, className }) => (
  <div
    className={`absolute inset-0 border ${className}`}
    style={{ transform, backfaceVisibility: "hidden" }}
  />
);

export const Loader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2400;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  const messageIndex = Math.min(LOADING_MESSAGES.length - 1, Math.floor(percent / 25));

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          data-testid="loading-screen"
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Ambient pulsing glow */}
          <motion.div
            className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-accentblue/10 blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Grain texture, matches Hero */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{ backgroundImage: NOISE_BG }}
          />

          {/* Rotating wireframe cube — signature element */}
          <div style={{ perspective: 600 }} className="relative z-10 mb-10">
            <motion.div
              className="relative w-14 h-14"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              <CubeFace transform="translateZ(28px)" className="border-accentblue/60 bg-accentblue/5" />
              <CubeFace transform="rotateY(180deg) translateZ(28px)" className="border-accentcyan/60 bg-accentcyan/5" />
              <CubeFace transform="rotateY(90deg) translateZ(28px)" className="border-accentsky/60 bg-accentsky/5" />
              <CubeFace transform="rotateY(-90deg) translateZ(28px)" className="border-accentsky/40 bg-accentsky/5" />
              <CubeFace transform="rotateX(90deg) translateZ(28px)" className="border-white/30 bg-white/5" />
              <CubeFace transform="rotateX(-90deg) translateZ(28px)" className="border-white/15 bg-white/5" />
            </motion.div>
          </div>

          {/* Monogram lockup, unchanged */}
          <div className="relative z-10 flex items-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-px bg-accentblue"
            />
            <span className="font-heading text-4xl tracking-tighter text-white">SG</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-px bg-accentcyan"
            />
          </div>

          {/* Circular progress ring around the percent readout */}
          <div className="relative z-10 mt-8 w-24 h-24 flex items-center justify-center">
            <svg width="96" height="96" viewBox="0 0 96 96" className="absolute -rotate-90">
              <circle cx="48" cy="48" r={CIRCLE_R} stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
              <circle
                cx="48"
                cy="48"
                r={CIRCLE_R}
                stroke="#38BDF8"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE}
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>
            <div className="font-mono-stat text-sm text-accentsky tabular-nums" data-testid="loading-percent">
              {percent.toString().padStart(2, "0")}%
            </div>
          </div>

          {/* Rotating status line — same pattern as Hero's rotating role */}
          <div className="relative z-10 h-5 mt-3 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-[11px] uppercase tracking-widest text-white/40"
              >
                {LOADING_MESSAGES[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
