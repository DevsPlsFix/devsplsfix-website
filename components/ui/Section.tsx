import type { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  label: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Section({ id, label, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className="border-t border-zinc-800 py-10 px-4"
    >
      <div className="mb-6">
        {eyebrow ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id ? `${id}-heading` : undefined}
          className="mt-1 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-100"
        >
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

