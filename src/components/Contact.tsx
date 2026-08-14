"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/senorale",
    handle: "@senorale",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alejandro-carvajal-916b55190/",
    handle: "in/alejandro-carvajal",
  },
  {
    label: "Email",
    href: "mailto:alecarvajaldev@gmail.com",
    handle: "alecarvajaldev@gmail.com",
  },
  {
    label: "Résumé",
    href: "/resume.pdf",
    handle: "resume.pdf (coming soon)",
    disabled: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-16">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-10"
      >
        <div className="text-xs md:text-sm text-[var(--fg-muted)]">
          <span className="text-[var(--accent)]">$</span> cat ~/.contact
        </div>
        <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
          Get in touch
        </h2>
      </motion.header>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {LINKS.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <a
              href={l.disabled ? undefined : l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-disabled={l.disabled || undefined}
              className={`group flex items-center justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)]/60 px-5 py-4 transition-colors ${
                l.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-[var(--accent)]"
              }`}
            >
              <div>
                <div className="text-xs text-[var(--fg-muted)]">{l.label}</div>
                <div className="text-sm md:text-base text-[var(--fg)] mt-0.5">
                  {l.handle}
                </div>
              </div>
              <span
                className={`text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all ${
                  l.disabled ? "hidden" : ""
                }`}
              >
                →
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
