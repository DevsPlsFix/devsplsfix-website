import type { ToolStatus } from "@/data/tools";

export interface StatusBadgeProps {
  status: ToolStatus | string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status.toUpperCase();

  let border = "border-zinc-500";
  let text = "text-zinc-300";

  if (normalized === "LIVE") {
    border = "border-[#39FF14]";
    text = "text-[#39FF14]";
  } else if (normalized === "BETA") {
    border = "border-sky-400";
    text = "text-sky-300";
  } else if (normalized === "IDEA") {
    border = "border-zinc-500";
    text = "text-zinc-300";
  }

  return (
    <span
      className={`inline-flex items-center border px-2 py-1 text-[10px] font-mono uppercase tracking-[0.25em] ${border} ${text}`}
    >
      {normalized}
    </span>
  );
}

