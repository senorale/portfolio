"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Line =
  | { kind: "cmd"; text: string; delay?: number }
  | { kind: "out"; text: string; className?: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "alejandro carvajal — senior software engineer @ mycase" },
  { kind: "cmd", text: "cat about.md" },
  { kind: "out", text: "ruby on rails primarily. next.js for microservices." },
  { kind: "out", text: "shipped the docker + eks migration for the flagship app." },
  { kind: "out", text: "build tools for myself when the existing ones annoy me." },
  { kind: "cmd", text: "ls projects/" },
  { kind: "out", text: "work/   others/   me/", className: "text-[var(--accent-3)]" },
];

const CHAR_MS = 22;
const LINE_PAUSE = 220;

export function TerminalHero() {
  const reduced = useReducedMotion();
  const [renderedLines, setRenderedLines] = useState<number>(reduced ? SCRIPT.length : 0);
  const [typingIdx, setTypingIdx] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [done, setDone] = useState(reduced === true);

  useEffect(() => {
    if (reduced) return;
    if (typingIdx >= SCRIPT.length) {
      setDone(true);
      return;
    }
    const line = SCRIPT[typingIdx];
    if (line.kind === "cmd") {
      if (typedChars < line.text.length) {
        const t = setTimeout(() => setTypedChars((c) => c + 1), CHAR_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setRenderedLines((n) => n + 1);
        setTypingIdx((i) => i + 1);
        setTypedChars(0);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setRenderedLines((n) => n + 1);
      setTypingIdx((i) => i + 1);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [typingIdx, typedChars, reduced]);

  return (
    <div className="w-full">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)]/80 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_-15px_rgba(126,231,135,0.15)]">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--bg-elev-2)]/50">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[var(--fg-muted)]">
            alejandro@portfolio: ~
          </span>
        </div>
        <div className="p-6 md:p-8 text-sm md:text-base leading-relaxed min-h-[280px]">
          {SCRIPT.slice(0, renderedLines).map((line, i) => (
            <RenderedLine key={i} line={line} />
          ))}
          {!done && typingIdx < SCRIPT.length && (
            <RenderedLine
              line={SCRIPT[typingIdx]}
              partial={
                SCRIPT[typingIdx].kind === "cmd"
                  ? (SCRIPT[typingIdx] as Extract<Line, { kind: "cmd" }>).text.slice(
                      0,
                      typedChars
                    )
                  : undefined
              }
              caret
            />
          )}
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2"
            >
              <span className="text-[var(--accent)]">$</span> <span className="caret" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function RenderedLine({
  line,
  partial,
  caret,
}: {
  line: Line;
  partial?: string;
  caret?: boolean;
}) {
  if (line.kind === "cmd") {
    return (
      <div className="whitespace-pre">
        <span className="text-[var(--accent)]">$</span>{" "}
        <span>{partial ?? line.text}</span>
        {caret && <span className="caret" />}
      </div>
    );
  }
  return (
    <div
      className={`whitespace-pre-wrap pl-3 ${line.className ?? "text-[var(--fg-muted)]"}`}
    >
      {line.text}
    </div>
  );
}
