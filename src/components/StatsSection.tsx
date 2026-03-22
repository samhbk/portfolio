"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  experience,
  projects,
  publishedMobileAppsAndroid,
  publishedMobileAppsIos,
  skills,
} from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";

const skillCount = skills.reduce((n, c) => n + c.items.length, 0);
const mobilePublished =
  publishedMobileAppsIos.length + publishedMobileAppsAndroid.length;

const tiles = [
  { label: "Codebase index", value: String(projects.length), hint: "repos & apps" },
  { label: "Skill entries", value: String(skillCount), hint: "ordered stack" },
  { label: "Shipped apps", value: String(mobilePublished), hint: "API-backed clients" },
  { label: "Roles listed", value: String(experience.length), hint: "experience" },
] as const;

export function StatsSection() {
  const reduce = useReducedMotion();
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;

  return (
    <section id="stats" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="06"
          kicker="Quick read on scope — repos, stack depth, shipped apps and APIs, and roles I’m targeting."
        >
          ## Stats<span className="text-on-surface-variant">.db</span>
        </SectionTitle>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sContainer}
        >
          {tiles.map((t) => (
            <motion.div
              key={t.label}
              variants={sItem}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={springLift}
              className="rounded-2xl border border-outline-variant/80 bg-surface-container/80 p-5 shadow-elevation-1"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                {t.label}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-primary">{t.value}</p>
              <p className="mt-1 text-xs text-on-surface-variant">{t.hint}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
