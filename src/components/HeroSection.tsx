"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { githubProfileHref, headline, heroCode, loadedModules, site } from "@/lib/site";
import { heroItem, heroStagger, springLift } from "@/lib/motion";
import { BlinkingCursor } from "./BlinkingCursor";

function highlightLine(line: string) {
  const kw = /^\s*(import|const|return|from)\b/;
  const m = line.match(kw);
  if (m && m.index !== undefined) {
    const lead = line.slice(0, m.index);
    const word = m[1];
    const rest = line.slice(m.index + m[0].length);
    return (
      <>
        <span className="text-on-surface-variant/70">{lead}</span>
        <span className="text-violet-400/95">{word}</span>
        <span className="text-on-surface/90">{rest}</span>
      </>
    );
  }
  return <span className="text-on-surface/90">{line}</span>;
}

export function HeroSection() {
  const lines = heroCode.split("\n");
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const containerVariants = reduce ? { hidden: {}, visible: {} } : heroStagger;
  const itemVariants = reduce ? { hidden: {}, visible: {} } : heroItem;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const codeY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const codeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.45]);

  const btnFilled =
    "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-on-primary shadow-elevation-1 transition-[box-shadow,background-color] hover:shadow-elevation-2 active:shadow-elevation-1 sm:min-w-[8.75rem] sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const btnOutlined =
    "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-transparent px-5 text-sm font-medium text-primary transition-colors hover:bg-primary/[0.08] sm:min-w-[8.75rem] sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const linkText =
    "inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium text-primary no-underline transition-colors hover:bg-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-outline-variant/35 px-4 pb-16 pt-[calc(5.5rem+1.25rem)] sm:px-6 sm:pb-20 sm:pt-[calc(5.5rem+2rem)] md:pb-24 md:pt-[calc(5.5rem+2.5rem)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/[0.055] via-transparent to-transparent sm:h-56"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex min-h-0 flex-col"
        >
          {/* Meta strip — compact, aligned to 4px grid */}
          <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-outline-variant/50 bg-surface-container-high/72 py-2 pl-4 pr-4 shadow-elevation-1 backdrop-blur-sm sm:mb-9 sm:gap-x-4 sm:pl-5 sm:pr-5"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant sm:text-[11px]">
              &lt;Platform.Profile /&gt;
            </span>
            <span className="hidden h-3 w-px bg-outline-variant/80 sm:block" aria-hidden />
            <span className="font-mono text-[11px] text-primary sm:text-xs">
              while (<span className="text-secondary/95">serving</span>) {"{"} <span className="text-on-surface-variant/90">deploy</span>() {"}"}
            </span>
            <span className="hidden h-3 w-px bg-outline-variant/80 sm:block" aria-hidden />
            <span className="font-mono text-[10px] text-on-surface-variant sm:text-[11px]">
              API <span className="text-primary">· healthy</span>
            </span>
          </motion.div>

          {/* lg+: copy + CTAs left, portfolio.tsx right (top-aligned). Mobile: single column, code after CTAs. */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-12">
            <div className="min-w-0">
              {/* Name = primary focal point; headline = supporting h2 */}
              <motion.h1
                variants={itemVariants}
                className="mb-4 max-w-[20ch] text-4xl font-bold leading-[1.02] tracking-[-0.02em] sm:mb-5 sm:max-w-none sm:text-5xl sm:leading-[1.01] sm:tracking-tight md:text-6xl md:leading-[0.99] lg:mb-6 lg:text-7xl lg:leading-[0.98]"
              >
                <span className="bg-gradient-to-br from-on-surface from-35% via-on-surface to-primary/75 bg-clip-text text-transparent">
                  {site.name}
                </span>
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="mb-6 max-w-[52rem] text-base font-semibold leading-snug text-on-surface/92 sm:mb-7 sm:text-lg sm:leading-snug md:text-xl md:leading-snug lg:mb-8 lg:text-2xl lg:leading-tight"
              >
                {headline}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mb-7 max-w-prose rounded-shape-xl border border-outline-variant/40 bg-surface-container/55 px-4 py-3.5 text-[0.9375rem] leading-[1.65] text-on-surface-variant shadow-elevation-1 backdrop-blur-sm sm:mb-9 sm:px-5 sm:py-4 sm:text-base sm:leading-relaxed"
              >
                <span className="mr-1.5 font-mono text-sm font-medium text-primary">&lt;Backend · Mobile /&gt;</span>
                {site.tagline}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mb-8 flex flex-wrap items-center gap-2 sm:mb-10 sm:gap-2.5 lg:mb-10"
              >
                <span className="w-full font-mono text-[10px] font-medium uppercase tracking-wider text-on-surface-variant sm:mb-0 sm:mr-1 sm:inline sm:w-auto">
                  Core stack
                </span>
                {loadedModules.map((m) => (
                  <motion.span
                    key={m}
                    whileHover={reduce ? undefined : { y: -2 }}
                    transition={springLift}
                    className="cursor-default rounded-full border border-outline-variant/45 bg-surface-container-low/90 px-3 py-1.5 font-mono text-[10px] font-medium text-primary sm:px-3.5 sm:py-1.5 sm:text-[11px]"
                  >
                    {m}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 sm:gap-2.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                  Get started
                </p>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {site.resumeUrl?.trim() ? (
                    <motion.a
                      href={site.resumeUrl.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnFilled}
                    >
                      Get resume
                    </motion.a>
                  ) : null}
                  <motion.a
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Hello from your portfolio")}`}
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    transition={springLift}
                    className={btnOutlined}
                  >
                    Send mail
                  </motion.a>
                  {githubHref ? (
                    <motion.a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnFilled}
                    >
                      GitHub
                    </motion.a>
                  ) : null}
                  <motion.a
                    href="#showcase"
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    transition={springLift}
                    className={btnOutlined}
                  >
                    Live work
                  </motion.a>
                  <motion.a href="#projects" whileTap={reduce ? undefined : { scale: 0.98 }} className={linkText}>
                    Codebase index
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="min-w-0 w-full lg:sticky lg:top-24 lg:self-start"
              style={
                reduce
                  ? undefined
                  : {
                      y: codeY,
                      opacity: codeOpacity,
                    }
              }
            >
              <motion.div
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -3,
                        boxShadow:
                          "0 12px 32px -10px rgba(0,0,0,0.45), 0 0 0 1px rgba(74,222,128,0.12)",
                        borderColor: "rgba(148, 143, 153, 0.55)",
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      }
                }
                className="flex flex-col rounded-shape-xl border border-outline-variant/45 bg-surface-container-high/88 p-3.5 font-mono text-[11px] leading-[1.5] shadow-elevation-2 backdrop-blur-sm transition-[border-color,box-shadow] sm:p-4 sm:text-xs"
              >
                <div className="mb-2 flex shrink-0 items-center justify-between gap-3 border-b border-outline-variant/45 pb-2 text-on-surface-variant">
                  <span className="truncate text-primary">engineer.ts</span>
                  <span className="shrink-0 tabular-nums text-[10px] sm:text-[11px]">
                    Ln 1–{lines.length}
                  </span>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap [-webkit-overflow-scrolling:touch]">
                  <code>
                    {lines.map((line, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4">
                        <span className="w-7 shrink-0 select-none text-right tabular-nums text-on-surface-variant/60 sm:w-8">
                          {i + 1}
                        </span>
                        <span className="min-w-0 flex-1 pr-1">{highlightLine(line)}</span>
                      </div>
                    ))}
                  </code>
                </pre>
                <div className="mt-1.5 flex shrink-0 items-center gap-2 border-t border-outline-variant/40 pt-2 font-mono text-on-surface-variant/60">
                  <span aria-hidden>~</span>
                  <BlinkingCursor />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
