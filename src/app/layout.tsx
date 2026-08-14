import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alejandro Carvajal — Senior Software Engineer",
  description:
    "Senior software engineer building Rails, Next.js, and infrastructure. Currently at MyCase.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] font-mono selection:bg-[var(--accent)]/30 selection:text-[var(--accent)]">
        {children}
      </body>
    </html>
  );
}
