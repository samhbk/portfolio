"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Layered aurora orbs — violet · mint · cyan · rose */
export function AmbientBackground() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-[20%] -top-[20%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.35),transparent_65%)] blur-[100px]"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 28, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[10%] h-[min(55vw,440px)] w-[min(55vw,440px)] rounded-full bg-[radial-gradient(circle_at_70%_40%,rgba(52,211,153,0.22),transparent_60%)] blur-[110px]"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -18, 0],
          y: [0, 24, 0],
        }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute -bottom-[25%] left-[15%] h-[min(60vw,480px)] w-[min(60vw,480px)] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_62%)] blur-[115px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 14, 0],
          y: [0, -18, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[5%] -right-[10%] h-[min(45vw,360px)] w-[min(45vw,360px)] rounded-full bg-[radial-gradient(circle_at_40%_60%,rgba(251,113,133,0.12),transparent_58%)] blur-[95px]"
        animate={{
          scale: [1, 1.06, 1],
          x: [0, -22, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
