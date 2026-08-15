"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTerms(text: string, terms: string[] | undefined) {
  if (!terms || terms.length === 0) return text;
  const pattern = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    terms.includes(part) ? (
      <span key={i} className="text-[var(--accent)]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

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
        className={`aspect-[16/10] w-full bg-[var(--bg-elev)] border-b border-[var(--border)] overflow-hidden ${
          project.imageMode === "contain" ? "flex items-center justify-center p-8" : ""
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
          style={
            project.imagePosition ? { objectPosition: project.imagePosition } : undefined
          }
        />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl tracking-tight font-semibold">
          {project.name}
        </h3>
        {project.note && (
          <span className="mt-1.5 self-start text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--bg-elev)] border border-[var(--border)] text-[var(--fg-muted)]">
            {project.note}
          </span>
        )}
        <p className="mt-2 text-sm text-[var(--fg-muted)]">{project.tagline}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--fg)]/90">
          {highlightTerms(project.description, project.highlight)}
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
