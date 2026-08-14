"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "Email", handle: "alecarvajaldev@gmail.com", href: "mailto:alecarvajaldev@gmail.com" },
  { label: "GitHub", handle: "@senorale", href: "https://github.com/senorale" },
  {
    label: "LinkedIn",
    handle: "in/alejandro-carvajal",
    href: "https://www.linkedin.com/in/alejandro-carvajal-916b55190/",
  },
  { label: "Résumé", handle: "resume.pdf", href: "/resume.pdf", disabled: true },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-12"
      >
        <div className="text-xs uppercase tracking-[0.14em] text-[var(--fg-muted)] mb-3">
          Contact
        </div>
        <h2 className="text-3xl md:text-5xl tracking-tight font-semibold">
          Say hi.
        </h2>
      </motion.header>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {LINKS.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <a
              href={l.disabled ? undefined : l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-disabled={l.disabled || undefined}
              className={`group flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-white px-6 py-5 transition-colors ${
                l.disabled ? "opacity-50 cursor-not-allowed" : "hover:border-[var(--accent)]"
              }`}
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">
                  {l.label}
                </div>
                <div className="mt-1 text-base md:text-lg text-[var(--fg)]">
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
