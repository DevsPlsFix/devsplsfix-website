import { getFeaturedTools } from "@/lib/tools";
import { ToolCard } from "@/components/ui/ToolCard";
import { Section } from "@/components/ui/Section";

export function FeaturedTools() {
  const tools = getFeaturedTools().slice(0, 6);

  if (tools.length === 0) {
    return null;
  }

  return (
    <Section id="featured-tools" label="Featured Tools" eyebrow="Latest">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </Section>
  );
}
