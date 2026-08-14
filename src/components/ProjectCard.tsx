"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const ACCENT: Record<NonNullable<Project["accent"]>, string> = {
  green: "text-[var(--accent)]",
  orange: "text-[var(--accent-2)]",
  blue: "text-[var(--accent-3)]",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = ACCENT[project.accent ?? "green"];
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="card-hover group rounded-lg border border-[var(--border)] bg-[var(--bg-elev)]/60 backdrop-blur-sm p-6 md:p-7 flex flex-col h-full"
    >
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className={`text-lg md:text-xl font-semibold ${accent}`}>
          {project.name}
        </h3>
        <span className="text-xs text-[var(--fg-dim)] font-mono">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="text-sm text-[var(--fg-muted)] mb-4">{project.tagline}</p>
      <p className="text-sm md:text-[0.95rem] leading-relaxed text-[var(--fg)]/90 mb-5">
        {project.description}
      </p>
      <div className="mt-auto space-y-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="text-[0.7rem] md:text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)] bg-[var(--bg-elev-2)]/50"
            >
              {s}
            </li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <ul className="flex flex-wrap gap-4 text-sm">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${accent} hover:underline underline-offset-4 decoration-dotted inline-flex items-center gap-1`}
                >
                  <span aria-hidden>→</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
