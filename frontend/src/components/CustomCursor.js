import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300 });
  const springY = useSpring(y, { damping: 25, stiffness: 300 });
  const ringX = useSpring(x, { damping: 20, stiffness: 120 });
  const ringY = useSpring(y, { damping: 20, stiffness: 120 });

  useEffect(() => {
    const move = (e) => {
      setVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target.closest("a, button, [data-cursor-hover]");
      setHovering(!!el);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) return null;

  return (
    <div className="hidden lg:block" style={{ opacity: visible ? 1 : 0 }} data-testid="custom-cursor">
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white pointer-events-none z-[90]"
        style={{ x: springX, y: springY, width: 8, height: 8, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[90]"
        animate={{ width: hovering ? 56 : 32, height: hovering ? 56 : 32, borderColor: hovering ? "#38BDF8" : "rgba(255,255,255,0.4)" }}
        transition={{ duration: 0.2 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
};
