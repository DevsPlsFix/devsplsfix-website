import type { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center border border-zinc-700 bg-zinc-950 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-300">
      {children}
    </span>
  );
}

