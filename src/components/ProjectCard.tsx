"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="card-hover group rounded-xl border border-[var(--border)] bg-white overflow-hidden flex flex-col"
    >
      <div
        className={`aspect-[16/10] w-full bg-[var(--bg-elev)] border-b border-[var(--border)] overflow-hidden flex items-center justify-center ${
          project.imageMode === "contain" ? "p-8" : ""
        }`}
      >
        {/* Drop a screenshot at /public/projects/{slug}.png. Until then, a soft placeholder shows. */}
        <img
          src={project.image ?? ""}
          alt={project.name}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
          className={`h-full w-full ${
            project.imageMode === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl md:text-2xl tracking-tight font-semibold">
            {project.name}
          </h3>
          {project.note && (
            <span className="shrink-0 text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--bg-elev)] border border-[var(--border)] text-[var(--fg-muted)]">
              {project.note}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-[var(--fg-muted)]">{project.tagline}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--fg)]/90">
          {project.description}
        </p>
        {project.testimonial && (
          <blockquote className="mt-5 border-l-2 border-[var(--accent)] pl-4 py-1 text-[0.95rem] italic text-[var(--fg)]/80">
            &ldquo;{project.testimonial.quote}&rdquo;
            {project.testimonial.author && (
              <footer className="mt-2 not-italic text-xs uppercase tracking-wider text-[var(--fg-muted)]">
                {project.testimonial.author}
              </footer>
            )}
          </blockquote>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--accent)] link-grow inline-flex items-center gap-1"
            >
              {l.label} <span aria-hidden>→</span>
            </a>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="text-[0.7rem] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)]"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
