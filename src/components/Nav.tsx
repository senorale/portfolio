"use client";

import { motion, useScroll } from "framer-motion";

const LINKS = [
  { href: "#work", label: "work" },
  { href: "#others", label: "others" },
  { href: "#me", label: "me" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-[var(--accent)] z-40"
      />
      <header className="sticky top-0 z-30 backdrop-blur bg-[var(--bg)]/70 border-b border-[var(--border)]/60">
        <nav className="mx-auto max-w-5xl px-6 md:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors">
            <span className="text-[var(--accent)]">~/</span>alejandro
          </a>
          <ul className="flex items-center gap-1 md:gap-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-2 md:px-3 py-1.5 rounded text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elev)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
