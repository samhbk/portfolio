"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { openToRoles, site } from "@/lib/site";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";
import { BlinkingCursor } from "./BlinkingCursor";

function openMailto(recipient: string, subject: string, body: string) {
  const href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const a = document.createElement("a");
  a.href = href;
  a.rel = "noopener noreferrer";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function ContactSection() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const contactJson = JSON.stringify(
    {
      status: "available",
      email: site.email,
      phone: site.phone,
      location: site.location,
      work_authorization: site.workAuth,
      availability: site.availability,
      availability_detail: site.availabilityDetail,
      modes: site.workMode,
      target_roles: [...openToRoles],
      socials: {
        linkedin: site.linkedin.replace(/^https?:\/\//, ""),
        github: site.github.replace(/^https?:\/\//, ""),
      },
    },
    null,
    2,
  );

  async function runScript(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        configured?: boolean;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      if (res.status === 503 && data.configured === false) {
        openMailto(
          site.email,
          `Portfolio contact from ${name || "visitor"}`,
          `${message}\n\n— ${name}\n${email}`,
        );
        setStatus("idle");
        return;
      }

      setStatus("error");
      setFormError(typeof data.error === "string" ? data.error : "Could not send. Try again.");
    } catch {
      setStatus("error");
      setFormError("Network error. Use “Open in mail app” below if it persists.");
    }
  }

  function openDraftInMailApp() {
    openMailto(
      site.email,
      `Portfolio contact from ${name || "visitor"}`,
      `${message}\n\n— ${name}\n${email}`,
    );
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="07"
          kicker="Backend, mobile, and software engineering roles — I’ll reply from the address below or your mail client."
        >
          $ ./contact.exe
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalWindow title="contact_info.json" path="~/contact">
            <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-on-surface/90 sm:text-xs">
              <code>{contactJson}</code>
            </pre>
            <p className="mt-4 font-mono text-[10px] text-on-surface-variant">
              <span aria-hidden>{"// "}</span>Waiting for connection...
            </p>
            <BlinkingCursor />
          </TerminalWindow>
          </motion.div>

          <motion.div
            className="rounded-shape-xl border border-outline-variant/45 bg-surface-container p-5 shadow-elevation-1"
            initial={reduce ? undefined : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            <p className="mb-4 font-mono text-[10px] text-on-surface-variant">
              <span aria-hidden>{"// "}</span>sendMessage.ts
            </p>
            <form onSubmit={runScript} className="space-y-4 font-mono text-xs">
              <div>
                <label className="mb-1 block text-on-surface-variant" htmlFor="name">
                  const name =
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-3 py-2.5 text-on-surface outline-none transition duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(74,222,128,0.14)] focus:ring-0"
                  placeholder="&quot;&quot;"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="mb-1 block text-on-surface-variant" htmlFor="email">
                  const email =
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-3 py-2.5 text-on-surface outline-none transition duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(74,222,128,0.14)] focus:ring-0"
                  placeholder="&quot;&quot;"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="mb-1 block text-on-surface-variant" htmlFor="msg">
                  await api.submit(&#123; message: `
                </label>
                <textarea
                  id="msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full resize-y rounded-2xl border border-outline-variant bg-surface-container-low px-3 py-2.5 text-on-surface outline-none transition duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(74,222,128,0.14)] focus:ring-0"
                  placeholder="Your message..."
                />
                <span className="text-on-surface-variant">{` });`}</span>
              </div>
              {formError ? (
                <p className="rounded border border-red-500/30 bg-red-500/10 px-3 py-2 text-[11px] text-red-200/90">
                  {formError}
                </p>
              ) : null}
              {status === "success" ? (
                <p className="rounded-2xl border border-primary/35 bg-primary/10 px-3 py-2 text-[11px] text-on-primary-container">
                  Sent — thanks. I’ll get back to you at the address you provided.
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-primary py-3 font-mono text-sm font-medium text-on-primary shadow-elevation-1 transition duration-200 hover:shadow-elevation-2 active:shadow-elevation-1 disabled:pointer-events-none disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <button
                type="button"
                onClick={openDraftInMailApp}
                className="w-full rounded-full border border-outline-variant bg-transparent py-2.5 font-mono text-[11px] text-on-surface-variant transition hover:border-outline hover:bg-primary/[0.06] hover:text-on-surface"
              >
                Open in mail app instead → {site.email}
              </button>
              <p className="text-[10px] text-on-surface-variant">
                With Resend configured (<code className="text-on-surface-variant/90">RESEND_API_KEY</code> on
                Vercel or in{" "}
                <code className="text-on-surface-variant/90">src/lib/resendContactConfig.ts</code>
                ), messages go to {site.email}. Otherwise your mail app opens with a draft.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
