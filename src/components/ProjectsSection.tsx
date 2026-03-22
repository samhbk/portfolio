"use client";

import { motion, useReducedMotion } from "framer-motion";
import { githubProfileHref, projects } from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";

function setGlow(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--gx", `${e.clientX - r.left}px`);
  el.style.setProperty("--gy", `${e.clientY - r.top}px`);
}

export function ProjectsSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;
  const githubFallback = githubProfileHref();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="04"
          kicker={`Code index · ${projects.length} workspaces — APIs, services, mobile clients, and reference apps in one place.`}
        >
          $ ls -la ~/projects
        </SectionTitle>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {projects.map((p) => (
            <motion.article
              key={`${p.folder}-${p.name}`}
              variants={sItem}
              onMouseMove={reduce ? undefined : setGlow}
              onMouseLeave={
                reduce
                  ? undefined
                  : (e) => {
                      e.currentTarget.style.removeProperty("--gx");
                      e.currentTarget.style.removeProperty("--gy");
                    }
              }
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -10,
                      transition: springLift,
                    }
              }
              className="group relative flex flex-col overflow-hidden rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/95 p-5 shadow-elevation-1 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-shape-xl before:opacity-0 before:transition-opacity before:duration-500 hover:border-primary/32 hover:shadow-elevation-3 hover:before:opacity-100 before:content-[''] before:bg-[radial-gradient(420px_circle_at_var(--gx,50%)_var(--gy,45%),rgba(74,222,128,0.11),transparent_55%)]"
            >
              <div className="relative mb-3 flex items-start justify-between gap-2">
                <h3 className="font-mono text-sm font-semibold text-primary transition-colors group-hover:text-primary/90">
                  {p.name}
                </h3>
                <span className="shrink-0 rounded-full border border-outline-variant/55 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-on-surface-variant transition-colors group-hover:border-primary/30 group-hover:text-primary/90">
                  Public
                </span>
              </div>
              <p className="relative mb-2 font-mono text-[10px] text-secondary/75">~/{p.folder}</p>
              <p className="relative mb-4 flex-1 text-xs leading-relaxed text-on-surface-variant">{p.description}</p>
              <div className="relative mb-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={reduce ? undefined : { scale: 1.04 }}
                    transition={springLift}
                    className="rounded-full bg-surface-container-highest/90 px-2 py-0.5 font-mono text-[9px] text-on-surface-variant transition-colors group-hover:bg-surface-container-high group-hover:text-on-surface/90"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="relative flex items-center justify-between border-t border-outline-variant/40 pt-3 font-mono text-[10px] text-on-surface-variant">
                <span className="text-primary/88">{p.highlight}</span>
                {p.repo ?? githubFallback ? (
                  <motion.a
                    href={(p.repo ?? githubFallback) as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={reduce ? undefined : { x: 3 }}
                    className="text-secondary/95 underline decoration-secondary/30 underline-offset-2 transition hover:decoration-secondary/55"
                  >
                    Repo →
                  </motion.a>
                ) : (
                  <span className="text-outline/70">—</span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
