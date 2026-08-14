"use client";

const LINKS = [
  { href: "#others", label: "For others" },
  { href: "#me", label: "For me" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-[var(--bg)]/85 backdrop-blur border-b border-[var(--border)]/70">
      <nav className="mx-auto max-w-5xl px-6 md:px-8 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm md:text-base font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
        >
          Alejandro Carvajal
        </a>
        <ul className="flex items-center gap-1 md:gap-2 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-2 md:px-3 py-1.5 rounded-md text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
