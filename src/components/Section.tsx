"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  path,
  title,
  children,
}: {
  id: string;
  path: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-16">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-10"
      >
        <div className="text-xs md:text-sm text-[var(--fg-muted)]">
          <span className="text-[var(--accent)]">$</span> cd ~/projects/{path}
        </div>
        <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-[var(--fg)]">
          {title}
        </h2>
      </motion.header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {children}
      </div>
    </section>
  );
}
