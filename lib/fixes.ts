import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface FixFrontmatter {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  relatedToolSlugs?: string[];
}

export interface FixMeta extends FixFrontmatter {}

export interface Fix extends FixFrontmatter {
  content: string;
}

const FIXES_DIR = path.join(process.cwd(), "content", "fixes");

function loadFixFile(slug: string): Fix {
  const filepath = path.join(FIXES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  const meta = data as FixFrontmatter;

  return {
    ...meta,
    content,
  };
}

export function getAllFixesMeta(): FixMeta[] {
  if (!fs.existsSync(FIXES_DIR)) return [];

  const files = fs
    .readdirSync(FIXES_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const fixes = files.map((file) => {
    const raw = fs.readFileSync(path.join(FIXES_DIR, file), "utf8");
    const { data } = matter(raw);
    return data as FixFrontmatter;
  });

  return fixes.sort((a, b) => b.date.localeCompare(a.date));
}

export function getFixBySlug(slug: string): Fix | undefined {
  try {
    return loadFixFile(slug);
  } catch {
    return undefined;
  }
}

export function getFixesForTool(slug: string): FixMeta[] {
  return getAllFixesMeta().filter((fix) =>
    fix.relatedToolSlugs?.includes(slug),
  );
}

