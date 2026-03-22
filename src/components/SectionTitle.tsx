"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  step?: string;
  kicker?: string;
};

export function SectionTitle({ children, step, kicker }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="mb-10">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {step ? (
          <motion.span
            initial={reduce ? undefined : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-mono text-[10px] font-medium tabular-nums tracking-widest text-on-surface-variant"
          >
            {step}
          </motion.span>
        ) : null}
        <motion.h2
          className="text-[1.375rem] font-medium leading-snug tracking-tight text-on-surface sm:text-2xl sm:leading-snug"
          initial={reduce ? undefined : { opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1], delay: step ? 0.03 : 0 }}
        >
          {children}
        </motion.h2>
      </div>
      <motion.div
        aria-hidden
        className="mt-4 h-1 max-w-[4.5rem] rounded-full bg-primary/50"
        initial={reduce ? undefined : { scaleX: 0, opacity: 0, transformOrigin: "left" }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
      />
      {kicker ? (
        <motion.p
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.35 }}
          className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant"
        >
          {kicker}
        </motion.p>
      ) : null}
    </div>
  );
}
