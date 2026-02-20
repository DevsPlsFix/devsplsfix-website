import Link from "next/link";
import type { Tool } from "@/data/tools";
import { StatusBadge } from "./StatusBadge";
import { Tag } from "./Tag";
import { ButtonLink } from "./Button";

export interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="flex h-full flex-col border-4 border-zinc-900 bg-zinc-950 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">
            <Link href={`/tools/${tool.slug}`} className="hover:underline">
              {tool.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-zinc-300">{tool.tagline}</p>
        </div>
        <StatusBadge status={tool.status} />
      </header>
      <p className="mb-3 line-clamp-3 text-xs text-zinc-400">
        {tool.complaint}
      </p>
      <div className="mb-4 flex flex-wrap gap-1">
        {tool.categories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 text-[11px]">
        <ButtonLink href={`/tools/${tool.slug}`} variant="ghost">
          View details
        </ButtonLink>
        <ButtonLink href={tool.url} external variant="outline">
          Open tool
        </ButtonLink>
      </div>
    </article>
  );
}

