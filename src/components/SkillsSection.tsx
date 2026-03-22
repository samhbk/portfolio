"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="skills" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="02"
          kicker="APIs and data first, then mobile and web delivery — native, Flutter, and integration with the services behind them."
        >
          ## Skills<span className="text-on-surface-variant">.json</span>
        </SectionTitle>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={sItem}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -8,
                      transition: springLift,
                    }
              }
              className="rounded-shape-xl border border-outline-variant/45 bg-surface-container p-5 shadow-elevation-1 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/28 hover:shadow-elevation-2"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-secondary/95">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={reduce ? undefined : { scale: 1.06, y: -1 }}
                    transition={springLift}
                    className="cursor-default rounded-full border border-outline-variant/50 bg-surface-container-low/90 px-2.5 py-1 font-mono text-[10px] text-primary transition-shadow hover:border-primary/35 hover:shadow-elevation-1 sm:text-[11px]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
