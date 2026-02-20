import { tools, type Tool } from "@/data/tools";

export function getAllTools(): Tool[] {
  return tools.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsBySlugs(slugs: string[] | undefined): Tool[] {
  if (!slugs?.length) return [];
  return slugs
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => Boolean(tool));
}

