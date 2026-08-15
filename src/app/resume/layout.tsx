import { Nav } from "@/components/Nav";

export default function ResumeLayout({ children }: LayoutProps<"/resume">) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 md:px-8 py-10 md:py-16">
        {children}
        <footer className="mt-16 pt-6 border-t border-[var(--border)] text-sm text-[var(--fg-muted)] flex flex-wrap items-center justify-between gap-2">
          <a href="/" className="link-grow">← Back to home</a>
          <span>© {new Date().getFullYear()} Alejandro Carvajal</span>
        </footer>
      </main>
    </div>
  );
}
