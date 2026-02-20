import Link from "next/link";
import type { FixMeta } from "@/lib/fixes";
import { Tag } from "./Tag";

export interface FixCardProps {
  fix: FixMeta;
}

export function FixCard({ fix }: FixCardProps) {
  return (
    <article className="border-4 border-zinc-900 bg-zinc-950 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]">
      <h3 className="text-base font-semibold text-white">
        <Link
          href={`/fixes/${fix.slug}`}
          className="hover:underline hover:decoration-[#39FF14]"
        >
          {fix.title}
        </Link>
      </h3>
      <p className="mt-2 text-xs text-zinc-300 line-clamp-2">{fix.summary}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {fix.tags?.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">
        {new Date(fix.date).toLocaleDateString()}
      </p>
    </article>
  );
}
