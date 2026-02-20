import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={className ?? "mb-4 px-4 text-xs uppercase tracking-wide"}
    >
      <ol className="flex flex-wrap items-center gap-1 text-xs text-zinc-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {!isLast && item.path ? (
                <Link
                  href={item.path}
                  className="hover:text-zinc-100 underline-offset-4 hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              )}
              {!isLast && <span className="text-zinc-600">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

