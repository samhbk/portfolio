import type { Variants } from "framer-motion";

/** Smooth ease — calm, confident (not bouncy) */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Card / button spring — tight, professional */
export const springSoft = { type: "spring" as const, stiffness: 420, damping: 28, mass: 0.6 };

export const springLift = { type: "spring" as const, stiffness: 380, damping: 26, mass: 0.55 };

export const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOutExpo },
  },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.58, ease: easeOutExpo },
  },
};
