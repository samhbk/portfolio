"use client";

import { motion, useReducedMotion } from "framer-motion";
import { roleSubtitle, site } from "@/lib/site";
import { springLift } from "@/lib/motion";

export function Footer() {
  const reduce = useReducedMotion();

  function toTop() {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <motion.footer
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[60] border-t border-outline-variant/35 px-4 py-12 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center text-xs text-on-surface-variant sm:flex-row sm:text-left">
        <p>
          {site.name} | {roleSubtitle}
          <br />
          Built with Next.js, TypeScript, Tailwind &amp; Framer Motion
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <motion.button
            type="button"
            onClick={toTop}
            data-cursor-pointer
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={springLift}
            className="rounded-full border border-outline-variant px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            ↑ Back to top
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}
