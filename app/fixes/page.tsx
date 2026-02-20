import { getAllFixesMeta } from "@/lib/fixes";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { FixCard } from "@/components/ui/FixCard";

export const metadata = buildPageMetadata({
  path: "/fixes",
  section: "fixes",
  title: "Fix Log",
});

export default function FixesIndexPage() {
  const fixes = getAllFixesMeta();

  return (
    <main className="mx-auto max-w-5xl py-16">
      <Section id="fix-log" label="Fix Log" eyebrow="Public changelog">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fixes.map((fix) => (
            <FixCard key={fix.slug} fix={fix} />
          ))}
        </div>
      </Section>
    </main>
  );
}
