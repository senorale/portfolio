import { Nav } from "@/components/Nav";

export default function ResumeLayout({ children }: LayoutProps<"/resume">) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 md:px-8 pt-4 md:pt-6 pb-10 md:pb-16">
        <div className="flex items-center justify-between mb-2">
          <a
            href="/"
            className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
          >
            ← Back
          </a>
          <a
            href="/resume.pdf"
            download
            title="Download PDF"
            aria-label="Download PDF"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
            </svg>
            PDF
          </a>
        </div>
        <div>{children}</div>
        <footer className="mt-16 pt-6 border-t border-[var(--border)] text-sm text-[var(--fg-muted)] flex flex-wrap items-center justify-between gap-2">
          <a href="/" className="link-grow">← Back to home</a>
          <span>© {new Date().getFullYear()} Alejandro Carvajal</span>
        </footer>
      </main>
    </div>
  );
}
