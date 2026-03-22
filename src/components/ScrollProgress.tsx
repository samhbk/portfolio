"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.35,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[105] h-[3px] origin-left bg-gradient-to-r from-fuchsia-500 via-primary to-secondary shadow-[0_0_12px_rgba(52,211,153,0.45)]"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}
