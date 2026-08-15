import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Anchor = ComponentPropsWithoutRef<"a">;
type Common = { children?: ReactNode };

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ children }: Common) => (
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2 mb-2 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: Common) => (
      <h2 className="text-xs md:text-sm uppercase tracking-[0.18em] text-[var(--fg-muted)] mt-12 first:mt-8 mb-4 font-medium">
        {children}
      </h2>
    ),
    h3: ({ children }: Common) => (
      <h3 className="text-lg md:text-xl font-semibold mt-8 mb-1">{children}</h3>
    ),
    h4: ({ children }: Common) => (
      <h4 className="text-base font-semibold mt-5 mb-2 text-[var(--fg)]">
        {children}
      </h4>
    ),
    p: ({ children }: Common) => (
      <p className="text-[15px] md:text-base leading-relaxed text-[var(--fg)] my-3">
        {children}
      </p>
    ),
    ul: ({ children }: Common) => (
      <ul className="my-3 space-y-2 list-disc pl-6 marker:text-[var(--fg-dim)]">
        {children}
      </ul>
    ),
    li: ({ children }: Common) => (
      <li className="text-[15px] md:text-base leading-relaxed text-[var(--fg)]">
        {children}
      </li>
    ),
    hr: () => <hr className="my-8 border-t border-[var(--border)]" />,
    strong: ({ children }: Common) => (
      <strong className="font-semibold text-[var(--fg)]">{children}</strong>
    ),
    em: ({ children }: Common) => (
      <em className="italic text-[var(--fg-muted)]">{children}</em>
    ),
    a: ({ children, href, ...rest }: Anchor) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-[var(--accent)] link-grow"
        {...rest}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
