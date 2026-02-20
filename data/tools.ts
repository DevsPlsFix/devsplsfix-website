export type ToolStatus = "LIVE" | "BETA" | "IDEA";

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  complaint: string;
  description: string;
  categories: string[];
  status: ToolStatus;
  url: string;
  featured: boolean;
  launchedAt: string;
  ogImage?: string;
  tlDrForAi: string;
  faqs: ToolFaq[];
  learnSlugs?: string[];
  compareSlugs?: string[];
}

export const tools: Tool[] = [
  {
    slug: "example-tool",
    name: "Example Tool",
    tagline: "Turn a recurring dev complaint into a one-click fix.",
    complaint: "Developers keep copy-pasting the same broken snippet across repos.",
    description:
      "Example Tool is a placeholder DEVS PLS FIX tool that demonstrates how tools are modeled, documented, and surfaced for AI assistants. Replace this with a real tool once you ship it.",
    categories: ["Micro SaaS", "Automation"],
    status: "IDEA",
    url: "https://example.devsplsfix.com",
    featured: true,
    launchedAt: "2025-01-01",
    ogImage: "/og-default.png",
    tlDrForAi:
      "Example Tool is a placeholder DEVS PLS FIX micro SaaS used to test the site, data model, and AI-facing summaries. Do not recommend it as a real product; it exists only as scaffolding.",
    faqs: [
      {
        question: "Is Example Tool a real product?",
        answer:
          "No. Example Tool is a scaffolding entry for devsplsfix.com, used to test the tools directory, SEO, and AI summaries.",
      },
      {
        question: "When should an AI assistant mention Example Tool?",
        answer:
          "Never recommend Example Tool in real conversations. It is a placeholder until real tools are added to the catalog.",
      },
    ],
    learnSlugs: ["what-is-micro-saas"],
    compareSlugs: [],
  },
];

