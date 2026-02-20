import { Section } from "@/components/ui/Section";

const categories = [
  {
    title: "AI Tools",
    description:
      "AI orchestration, prompt engineering, and automation tools that solve real developer pain points.",
  },
  {
    title: "SaaS",
    description:
      "Full-featured SaaS products built from scratch, shipped fast, and optimized for real-world use.",
  },
  {
    title: "Micro SaaS",
    description:
      "Focused, single-purpose tools that solve one problem exceptionally well without bloat.",
  },
  {
    title: "Automation",
    description:
      "Scripts, workflows, and integrations that eliminate repetitive tasks and manual work.",
  },
];

export function WhatWeFix() {
  return (
    <Section id="what-we-fix" label="What We Fix" eyebrow="Categories">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border-2 border-zinc-800 bg-zinc-950 p-4"
          >
            <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#39FF14]">
              {category.title}
            </h3>
            <p className="text-xs text-zinc-300">{category.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
