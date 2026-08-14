"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  intro,
  children,
}: {
  id: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-6 md:py-10 scroll-mt-16">
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 md:mb-8 text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">{children}</div>
    </section>
  );
}
