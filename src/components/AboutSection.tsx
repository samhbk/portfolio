"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutParagraphs, education, languages, site, stats } from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

export function AboutSection() {
  const reduce = useReducedMotion();
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;

  return (
    <section id="about" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="01"
          kicker="Engineering profile — backend systems and mobile leadership, education, languages, and how I work with teams."
        >
          ## About<span className="text-on-surface-variant">.system</span>
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.94, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            className="flex flex-col items-center justify-start rounded-shape-xl border border-dashed border-outline-variant/55 bg-surface-container-low/80 p-6 text-center shadow-elevation-1 lg:sticky lg:top-28"
          >
            <motion.div
              animate={reduce ? undefined : { boxShadow: ["0 0 0 0 rgba(74,222,128,0)", "0 0 28px 2px rgba(74,222,128,0.14)", "0 0 0 0 rgba(74,222,128,0)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/45 bg-surface-container-highest/90 font-mono text-2xl text-primary"
            >
              SB
            </motion.div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">System Avatar</p>
            <p className="mt-4 font-mono text-xs font-semibold text-on-surface">OPERATOR</p>
            <p className="text-sm text-primary">{site.name.toUpperCase().replace(/ /g, "_")}</p>
            <p className="mt-3 font-mono text-[10px] text-on-surface-variant">ROLE</p>
            <p className="break-all text-[10px] text-secondary/95 sm:text-xs">{site.operatorRole}</p>
            <p className="mt-3 font-mono text-[10px] text-on-surface-variant">LOCATION</p>
            <p className="text-xs text-on-surface/90">{site.location}</p>
            <p className="mt-3 font-mono text-[10px] text-on-surface-variant">STATUS</p>
            <p className="text-xs text-primary">OPEN_TO_WORK</p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={sContainer}
          >
            <motion.div variants={sItem}>
              <TerminalWindow title="about.md" path="~/profile">
                <div className="space-y-4 font-mono text-xs leading-relaxed text-on-surface/90 sm:text-sm">
                  <div>
                    <p className="mb-2 text-primary/85">➜ cat about.md</p>
                    <div className="space-y-3 text-on-surface-variant">
                      {aboutParagraphs.map((p, i) => (
                        <motion.p
                          key={i}
                          initial={reduce ? undefined : { opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.4 }}
                        >
                          {p}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                  <div id="education" className="scroll-mt-28">
                    <p className="mb-1 text-primary/85">➜ cat education.txt</p>
                    <p className="text-on-surface-variant">{education}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-primary/85">➜ cat languages.json</p>
                    <ul className="list-inside list-disc text-on-surface-variant">
                      {languages.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>

            <motion.div
              variants={sContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={sItem}
                  whileHover={reduce ? undefined : { y: -4, borderColor: "rgba(148, 143, 153, 0.55)" }}
                  transition={springLift}
                  className="rounded-2xl border border-outline-variant/45 bg-surface-container-low/90 px-3 py-4 text-center shadow-elevation-0 transition-[border-color,box-shadow] hover:shadow-elevation-1"
                >
                  <p className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">{s.label}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-primary">{s.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
