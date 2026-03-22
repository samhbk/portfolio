"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Very soft ambient light — Material surfaces stay dominant */
export function AmbientBackground() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-[25%] -top-[25%] h-[min(65vw,480px)] w-[min(65vw,480px)] rounded-full bg-primary/[0.06] blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 24, 0],
          y: [0, 16, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[30%] -right-[20%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-secondary/[0.045] blur-[130px]"
        animate={{
          scale: [1, 1.06, 1],
          x: [0, -20, 0],
          y: [0, -12, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}
