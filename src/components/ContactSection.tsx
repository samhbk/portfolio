"use client";

import { motion, useReducedMotion } from "framer-motion";
import { openToRoles, site } from "@/lib/site";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

export function ContactSection() {
  const reduce = useReducedMotion();

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

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Hello from your portfolio")}`;

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="07"
          kicker="Reach me by email — no form, just your mail app."
        >
          $ ./contact.sh
        </SectionTitle>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <TerminalWindow title="contact_info.json" path="~/contact">
            <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-on-surface/90 sm:text-xs">
              <code>{contactJson}</code>
            </pre>
            <p className="mt-6 text-sm text-on-surface-variant">
              <span aria-hidden className="mr-2 font-mono text-[10px] text-on-surface-variant/70">
                {"// "}
              </span>
              Email:{" "}
              <a
                href={mailtoHref}
                className="font-mono font-medium text-primary underline decoration-primary/35 underline-offset-2 transition hover:text-primary/90"
              >
                {site.email}
              </a>
            </p>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
