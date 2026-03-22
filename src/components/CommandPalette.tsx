"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { githubProfileHref, navItems, site } from "@/lib/site";

type Entry = {
  id: string;
  label: string;
  hint?: string;
  href?: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const resume = site.resumeUrl?.trim();
  const githubHref = githubProfileHref();

  const entries: Entry[] = useMemo(
    () => [
      ...navItems.map(({ id, label, file }) => ({
        id: `nav-${id}`,
        label,
        hint: file,
        href: `#${id}`,
      })),
      {
        id: "edu",
        label: "Education & languages",
        hint: "about",
        href: "#education",
      },
      ...(githubHref
        ? [
            {
              id: "gh",
              label: "GitHub",
              hint: "external",
              href: githubHref,
            } satisfies Entry,
          ]
        : []),
      {
        id: "li",
        label: "LinkedIn",
        hint: "external",
        href: site.linkedin,
      },
      {
        id: "mail",
        label: "Send email",
        hint: site.email,
        href: `mailto:${site.email}`,
      },
      ...(resume
        ? [
            {
              id: "cv",
              label: "Open resume / CV",
              hint: "pdf",
              href: resume,
            } satisfies Entry,
          ]
        : []),
    ],
    [resume, githubHref],
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.label.toLowerCase().includes(q) ||
        (e.hint && e.hint.toLowerCase().includes(q)),
    );
  }, [entries, query]);

  const openPalette = useCallback(() => {
    setQuery("");
    setOpen(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (o) return false;
          setQuery("");
          return true;
        });
        return;
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onPaletteOpen = () => openPalette();
    window.addEventListener("open-command-palette", onPaletteOpen);
    return () => window.removeEventListener("open-command-palette", onPaletteOpen);
  }, [openPalette]);

  useEffect(() => {
    if (open) {
      const t = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(t);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close command palette"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-shape-xl border border-outline-variant/50 bg-surface-container-high/95 shadow-elevation-3 backdrop-blur-md"
          >
            <div className="border-b border-outline-variant/80 px-3 py-2">
              <div className="flex items-center gap-2 rounded-2xl bg-surface-container px-3 py-2 ring-1 ring-outline-variant/40">
                <span className="text-on-surface-variant" aria-hidden>
                  ⌕
                </span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sections, links, actions…"
                  className="min-w-0 flex-1 bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant"
                />
                <kbd className="hidden shrink-0 rounded border border-outline-variant px-1.5 py-0.5 font-mono text-[10px] text-on-surface-variant sm:inline">
                  esc
                </kbd>
              </div>
            </div>
            <ul className="max-h-[min(50vh,320px)] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-on-surface-variant">
                  No matches
                </li>
              ) : (
                filtered.map((e) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      data-cursor-pointer
                      className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm text-on-surface transition-colors hover:bg-primary/10"
                      onClick={() => {
                        if (e.href?.startsWith("#")) {
                          setOpen(false);
                          const id = e.href.slice(1);
                          document.getElementById(id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          return;
                        }
                        if (e.href?.startsWith("mailto:")) {
                          setOpen(false);
                          window.location.href = e.href;
                          return;
                        }
                        if (e.href) {
                          setOpen(false);
                          window.open(e.href, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      <span>{e.label}</span>
                      {e.hint ? (
                        <span className="truncate font-mono text-[10px] text-on-surface-variant">
                          {e.hint}
                        </span>
                      ) : null}
                    </button>
                  </li>
                ))
              )}
            </ul>
            <p className="border-t border-outline-variant/80 px-4 py-2 text-center text-[10px] text-on-surface-variant">
              <kbd className="rounded border border-outline-variant px-1 font-mono">⌘</kbd>
              <kbd className="ml-0.5 rounded border border-outline-variant px-1 font-mono">K</kbd>
              <span className="mx-1">·</span>
              Navigate like{" "}
              <a
                href="https://aadi.is-a.dev/"
                className="text-primary underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aadi.is-a.dev
              </a>
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
