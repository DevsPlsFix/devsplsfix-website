import { getAllTools } from "@/lib/tools";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ToolCard } from "@/components/ui/ToolCard";

export const metadata = buildPageMetadata({
  path: "/tools",
  section: "tools",
  title: "Tools",
});

export default function ToolsIndexPage() {
  const tools = getAllTools();

  return (
    <main className="mx-auto max-w-5xl py-16">
      <Section id="tools" label="Tools" eyebrow="Micro SaaS and automations">
        <div className="grid gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Section>
    </main>
  );
}

