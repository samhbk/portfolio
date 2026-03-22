"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  liveWebShowcases,
  publishedMobileAppsAndroid,
  publishedMobileAppsIos,
  publishedMobileIntro,
  publishedMobileOutro,
  site,
} from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

function setGlow(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--gx", `${e.clientX - r.left}px`);
  el.style.setProperty("--gy", `${e.clientY - r.top}px`);
}

function AppLink({ name, url, note, store }: { name: string; url: string; note?: string; store: string }) {
  return (
    <li className="text-on-surface-variant transition-colors hover:text-on-surface/90">
      <span className="text-outline/75">•</span>{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-secondary/95 underline decoration-secondary/35 underline-offset-[3px] transition hover:text-secondary hover:decoration-secondary/55"
      >
        {name}
      </a>
      {note ? <span className="text-on-surface-variant"> — {note}</span> : null}
      <span className="font-mono text-[10px] text-outline/80"> · {store}</span>
    </li>
  );
}

export function ShowcaseSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="showcase" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="05"
          kicker="Live systems — APIs, web, and shipped mobile apps in the stores, plus availability."
        >
          ## Showcase<span className="text-on-surface-variant">/live</span>
        </SectionTitle>

        <motion.div
          className="space-y-10"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          <motion.div variants={sItem}>
            <TerminalWindow title="availability.txt" path="~/recruiting">
              <p className="font-mono text-sm leading-relaxed text-on-surface/90">{site.availabilityDetail}</p>
            </TerminalWindow>
          </motion.div>

          <motion.div variants={sItem}>
            <TerminalWindow title="shipped_clients.md" path="~/storefronts">
              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">{publishedMobileIntro}</p>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-primary/90">
                    iOS — App Store
                  </p>
                  <ul className="space-y-2.5 font-mono text-xs sm:text-sm">
                    {publishedMobileAppsIos.map((app) => (
                      <AppLink key={app.url} {...app} store="App Store" />
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-primary/90">
                    Android — Google Play
                  </p>
                  <ul className="space-y-2.5 font-mono text-xs sm:text-sm">
                    {publishedMobileAppsAndroid.map((app) => (
                      <AppLink key={app.url} {...app} store="Google Play" />
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 border-t border-outline-variant/40 pt-4 text-sm leading-relaxed text-on-surface-variant">
                {publishedMobileOutro}
              </p>
            </TerminalWindow>
          </motion.div>

          <motion.div variants={sItem}>
            <TerminalWindow title="web_products.json" path="~/production">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                Live web — APIs, backends & frontends
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {liveWebShowcases.map((w) => (
                  <motion.div
                    key={w.url}
                    onMouseMove={reduce ? undefined : setGlow}
                    onMouseLeave={
                      reduce
                        ? undefined
                        : (e) => {
                            e.currentTarget.style.removeProperty("--gx");
                            e.currentTarget.style.removeProperty("--gy");
                          }
                    }
                    whileHover={reduce ? undefined : { y: -8 }}
                    transition={springLift}
                    className="group relative overflow-hidden rounded-2xl border border-outline-variant/45 bg-surface-container-low/70 p-4 shadow-elevation-0 transition-[border-color,box-shadow] duration-300 hover:border-secondary/28 hover:shadow-elevation-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:content-[''] before:bg-[radial-gradient(380px_circle_at_var(--gx,50%)_var(--gy,40%),rgba(103,232,249,0.09),transparent_55%)]"
                  >
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative font-mono text-sm font-semibold text-primary underline decoration-primary/25 underline-offset-4 transition hover:text-primary/90 hover:decoration-primary/45"
                    >
                      {w.name} →
                    </a>
                    <p className="relative mt-2 text-xs leading-relaxed text-on-surface-variant">{w.description}</p>
                    <p className="relative mt-2 truncate font-mono text-[10px] text-secondary/72">{w.url}</p>
                  </motion.div>
                ))}
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
