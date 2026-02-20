import { getAllFixesMeta } from "@/lib/fixes";
import { FixCard } from "@/components/ui/FixCard";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function LatestFixes() {
  const fixes = getAllFixesMeta().slice(0, 6);

  if (fixes.length === 0) {
    return null;
  }

  return (
    <Section id="latest-fixes" label="Latest Fixes" eyebrow="Fix Log">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {fixes.map((fix) => (
          <FixCard key={fix.slug} fix={fix} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/fixes"
          className="inline-block border-2 border-zinc-700 bg-zinc-950 px-5 py-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 transition hover:border-[#39FF14] hover:text-[#39FF14]"
        >
          View All Fixes
        </Link>
      </div>
    </Section>
  );
}
