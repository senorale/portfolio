"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-16">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 md:mb-14"
      >
        <div className="text-xs uppercase tracking-[0.14em] text-[var(--fg-muted)] mb-3">
          {eyebrow}
        </div>
        <h2 className="text-3xl md:text-5xl tracking-tight font-semibold">
          {title}
        </h2>
        {intro && (
          <p className="mt-5 text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed">
            {intro}
          </p>
        )}
      </motion.header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">{children}</div>
    </section>
  );
}
