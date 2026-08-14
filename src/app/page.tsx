import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact } from "@/components/Contact";
import { forOthers, forMe } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 md:px-8">
        <Hero />

        <Section
          id="others"
          eyebrow="Built for others"
          title="For others"
          intro="These are the ways I try to give back. One is for a non-profit I care about. The other is the tool I wish I'd had access to when I was deciding what to do with my life."
        >
          {forOthers.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </Section>

        <Section id="me" eyebrow="Built for me" title="For me">
          {forMe.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </Section>

        <Contact />

        <footer className="py-8 border-t border-[var(--border)] text-sm text-[var(--fg-muted)] flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Alejandro Carvajal</span>
          <span>Built with Next.js.</span>
        </footer>
      </main>
    </div>
  );
}
