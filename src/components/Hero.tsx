"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="pt-16 md:pt-28 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="shrink-0 mx-auto md:mx-0"
        >
          <div className="relative h-40 w-40 md:h-44 md:w-44 rounded-full overflow-hidden bg-[var(--bg-elev)] border border-[var(--border)]">
            {/* Drop a photo at /public/me.jpg and change the src below */}
            <img
              src="/me.svg"
              alt="Alejandro Carvajal"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight font-semibold">
            Hi, I&apos;m Alejandro,
            <span className="block md:inline text-[var(--fg-muted)] font-normal">
              {" "}a senior software engineer.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--fg-muted)] max-w-2xl leading-relaxed">
            Currently at{" "}
            <a
              href="https://www.mycase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg)] link-grow"
            >
              MyCase
            </a>
            , a case-management platform for lawyers. You can read about my
            professional career{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] link-grow"
            >
              here
            </a>
            . Below are the things I&apos;ve built for others and for myself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
