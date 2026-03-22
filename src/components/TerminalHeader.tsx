"use client";

import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { githubProfileHref, navItems, roleSubtitle, site } from "@/lib/site";
import { springSoft } from "@/lib/motion";

export function TerminalHeader() {
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-36% 0px -40% 0px", threshold: 0 },
    );
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? undefined : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed left-0 right-0 top-0 z-[100] border-b transition-[background-color,box-shadow,border-color] duration-200 ${
        scrolled
          ? "border-outline-variant/50 bg-surface-container-high/92 shadow-elevation-2 backdrop-blur-md"
          : "border-transparent bg-surface/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5 rounded-full pr-1 outline-none ring-primary/0 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/45"
          data-cursor-pointer
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-primary to-cyan-400 p-[2px] shadow-md shadow-primary/30">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-sm font-semibold tracking-tight text-primary">
              SB
            </span>
          </span>
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate text-sm font-medium leading-tight tracking-tight text-on-surface">
              {site.name}
            </span>
            <span className="truncate text-[11px] leading-tight text-on-surface-variant">
              {roleSubtitle}
            </span>
          </span>
        </a>

        <LayoutGroup id="app-bar-nav">
          <nav
            className="scrollbar-none flex min-w-0 flex-1 items-center justify-start gap-1 overflow-x-auto py-1 sm:justify-center"
            aria-label="Primary"
          >
            <div className="flex items-center gap-0.5 rounded-full bg-surface-container/90 p-1 ring-1 ring-violet-500/25">
              {navItems.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    data-cursor-pointer
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium tracking-wide transition-colors sm:px-3.5 sm:text-[13px] ${
                      isActive
                        ? "text-on-primary-container"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-primary-container shadow-sm"
                        transition={springSoft}
                      />
                    ) : null}
                    <span className="relative z-10">{label}</span>
                  </motion.a>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>

        <motion.button
          type="button"
          data-cursor-pointer
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="flex h-9 shrink-0 items-center gap-1 rounded-full border border-outline-variant px-2.5 text-[11px] font-medium text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-on-surface min-[380px]:gap-1.5"
          title="Search (⌘K or Ctrl+K)"
          aria-label="Open search and navigation"
        >
          <span aria-hidden>⌘</span>
          <span className="hidden min-[380px]:inline">K</span>
        </motion.button>
        <motion.a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-pointer
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-primary/5"
          aria-label="LinkedIn"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </motion.a>
        {githubHref ? (
          <motion.a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-pointer
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="shrink-0 rounded-full border border-outline-variant px-3 py-2 text-center text-xs font-medium text-primary transition-colors hover:border-primary/50 hover:bg-primary/5 sm:px-4 sm:text-[13px]"
          >
            GitHub
          </motion.a>
        ) : null}
      </div>
    </motion.header>
  );
}
