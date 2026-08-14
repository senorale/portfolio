import { Nav } from "@/components/Nav";
import { TerminalHero } from "@/components/TerminalHero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact } from "@/components/Contact";
import { workProjects, otherProjects, meProjects } from "@/data/projects";

export default function Home() {
  return (
    <div id="top" className="scanlines min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="pt-16 md:pt-24 pb-8">
          <TerminalHero />
        </div>

        <Section id="work" path="work" title="Built for work">
          {workProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </Section>

        <Section id="others" path="others" title="Built for others">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </Section>

        <Section id="me" path="me" title="Built for me">
          {meProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </Section>

        <Contact />

        <footer className="pb-10 pt-6 text-xs text-[var(--fg-dim)] border-t border-[var(--border)]/60 flex flex-wrap items-center justify-between gap-2">
          <span>
            <span className="text-[var(--accent)]">$</span> exit 0
          </span>
          <span>
            © {new Date().getFullYear()} Alejandro Carvajal · built with
            Next.js + Framer Motion
          </span>
        </footer>
      </main>
    </div>
  );
}
