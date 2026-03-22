"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

export function ExperienceSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="experience" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="03"
          kicker="Backend services, mobile delivery, and team leadership — production systems, not slides."
        >
          $ git log --stat --oneline
        </SectionTitle>

        <motion.div
          className="space-y-10"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={sItem}
              whileHover={reduce ? undefined : { y: -5 }}
              transition={springLift}
            >
              <TerminalWindow
                title={`commit ${job.id.slice(0, 6)}`}
                path={`refs/heads/${job.company.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="font-mono text-xs sm:text-sm">
                  <div className="mb-4 flex flex-wrap items-baseline gap-2 border-b border-outline-variant/40 pb-3 text-on-surface-variant">
                    <span className="text-primary/90">{job.period}</span>
                    <span className="text-outline/80">·</span>
                    <span>{job.location}</span>
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-on-surface">
                    {job.title} @ {job.company}
                  </h3>
                  <ul className="mb-4 list-inside list-disc space-y-1.5 text-on-surface-variant">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-secondary/25 bg-secondary-container/35 px-2.5 py-0.5 text-[10px] text-on-secondary-container"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[10px] text-on-surface-variant/80">
                    {4 + index} files changed · +{280 + index * 40} insertions · −{12 + index * 3} deletions
                  </p>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
