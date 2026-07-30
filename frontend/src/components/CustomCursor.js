import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true); // false on touch/coarse-pointer devices
  const [hoverText, setHoverText] = useState(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Dot: near-zero lag, snaps to the real pointer.
  const dotX = useSpring(x, { damping: 40, stiffness: 900, mass: 0.2 });
  const dotY = useSpring(y, { damping: 40, stiffness: 900, mass: 0.2 });

  // Ring: trails slightly behind for a smooth, weighted feel.
  const ringX = useSpring(x, { damping: 28, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(y, { damping: 28, stiffness: 220, mass: 0.5 });

  const rafId = useRef(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(pointerQuery.matches);
    updateEnabled();
    pointerQuery.addEventListener("change", updateEnabled);

    const move = (e) => {
      // rAF-throttle so we never set state faster than the browser paints.
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        const el = e.target.closest("a, button, [data-cursor-hover]");
        setHovering(!!el);
        setHoverText(el?.getAttribute("data-cursor-text") || null);
        rafId.current = null;
      });
    };

    const showCursor = () => setVisible(true);
    const hideCursor = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      pointerQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      className="hidden lg:block"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      data-testid="custom-cursor"
    >
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white pointer-events-none z-[90]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          scale: pressed ? 0.6 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[90] flex items-center justify-center overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          backdropFilter: hovering ? "invert(0)" : "none",
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          scale: pressed ? 0.9 : 1,
          borderColor: hovering ? "#38BDF8" : "rgba(255,255,255,0.4)",
          backgroundColor: hovering ? "rgba(56,189,248,0.08)" : "rgba(255,255,255,0)",
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 25 },
          height: { type: "spring", stiffness: 300, damping: 25 },
          borderColor: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          scale: { duration: 0.15 },
        }}
      >
        <AnimatePresence>
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="text-[10px] font-medium tracking-wide text-white whitespace-nowrap"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
