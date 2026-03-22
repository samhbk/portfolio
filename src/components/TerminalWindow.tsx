"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  path?: string;
};

/** Material-style elevated surface (minimal chrome) */
export function TerminalWindow({ title, children, className = "", path }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileHover={
        reduce
          ? undefined
          : {
              y: -2,
              transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] },
            }
      }
      className={`group overflow-hidden rounded-shape-xl border border-violet-500/15 bg-surface-container shadow-elevation-1 transition-[border-color,box-shadow] duration-200 hover:border-secondary/35 hover:shadow-elevation-2 hover:shadow-glow-cyan ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-outline-variant/40 px-4 py-3 sm:px-5">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-on-surface">{title}</p>
          {path ? (
            <p className="truncate font-mono text-[11px] text-on-surface-variant">{path}</p>
          ) : null}
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </motion.div>
  );
}
