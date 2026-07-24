import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          data-testid="loading-screen"
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex items-center gap-4">
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
          <div className="mt-8 font-mono-stat text-sm text-accentsky tabular-nums" data-testid="loading-percent">
            {percent.toString().padStart(2, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
