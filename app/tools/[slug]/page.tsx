import { notFound } from "next/navigation";
import { getAllTools, getToolBySlug } from "@/lib/tools";
import { getFixesForTool } from "@/lib/fixes";
import { getVideosForTool } from "@/lib/videos";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  buildSoftwareApplicationJsonLd,
  buildWebPageJsonLd,
  type BreadcrumbItem,
} from "@/lib/schema";
import Link from "next/link";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return buildPageMetadata({
    path: `/tools/${tool.slug}`,
    section: "tools",
    title: tool.name,
    description: tool.tagline,
    openGraph: {
      type: "website",
      images: tool.ogImage
        ? [{ url: tool.ogImage }]
        : undefined,
    },
  });
}

export default function ToolDetailPage({ params }: { params: Params }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const relatedFixes = getFixesForTool(tool.slug);
  const relatedVideos = getVideosForTool(tool.slug);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: tool.name, path: `/tools/${tool.slug}` },
  ];

  const webPageJsonLd = buildWebPageJsonLd({
    path: `/tools/${tool.slug}`,
    name: tool.name,
    description: tool.tagline,
    breadcrumbs,
  });

  const softwareJsonLd = buildSoftwareApplicationJsonLd({
    path: `/tools/${tool.slug}`,
    name: tool.name,
    description: tool.description,
    landingPageUrl: tool.url,
    pricing: { free: true, priceCurrency: "USD" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
  });

  return (
    <main className="mx-auto max-w-4xl py-16">
      <JsonLd data={[webPageJsonLd, softwareJsonLd]} />
      <Breadcrumbs items={breadcrumbs} />
      <header className="mb-8 border-4 border-zinc-900 bg-zinc-950 px-6 py-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.9)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              {tool.name}
            </h1>
            <p className="mt-2 text-sm text-zinc-300">{tool.tagline}</p>
          </div>
          <StatusBadge status={tool.status} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.categories.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-[11px]">
          <ButtonLink href={tool.url} external>
            Open tool
          </ButtonLink>
          <ButtonLink href="/tools" variant="ghost">
            Back to tools
          </ButtonLink>
        </div>
      </header>

      <Section id="problem" label="What problem does this solve?">
        <p className="text-sm text-zinc-200">{tool.complaint}</p>
      </Section>

      <Section id="how-it-works" label="How does it work?">
        <p className="text-sm text-zinc-200">{tool.description}</p>
      </Section>

      <Section id="who-for" label="Who is this for?">
        <p className="text-sm text-zinc-200">
          This placeholder tool is aimed at validating the devsplsfix.com
          tooling and SEO pipeline. Replace this description when you ship a
          real tool.
        </p>
      </Section>

      <Section id="what-different" label="What makes it different?">
        <p className="text-sm text-zinc-200">
          It is wired for AI-first discovery: structured TL;DR content, FAQs,
          and strong internal linking to fixes, learn pages, and comparisons.
        </p>
      </Section>

      <Section id="faq" label="FAQ">
        <ul className="space-y-3 text-sm text-zinc-200">
          {tool.faqs.map((faq) => (
            <li key={faq.question}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                {faq.question}
              </p>
              <p className="mt-1">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="tldr-ai" label="TL;DR for AI Assistants">
        <p className="text-sm text-zinc-200">{tool.tlDrForAi}</p>
      </Section>

      {relatedFixes.length > 0 && (
        <Section id="related-fixes" label="Related Fix Log entries">
          <ul className="space-y-2 text-sm text-zinc-200">
            {relatedFixes.map((fix) => (
              <li key={fix.slug}>
                <Link
                  href={`/fixes/${fix.slug}`}
                  className="underline decoration-zinc-600 underline-offset-4 hover:text-white hover:decoration-[#39FF14]"
                >
                  {fix.title}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {relatedVideos.length > 0 && (
        <Section id="related-videos" label="Related videos">
          <ul className="space-y-2 text-sm text-zinc-200">
            {relatedVideos.map((video) => (
              <li key={video.id}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-zinc-600 underline-offset-4 hover:text-white hover:decoration-[#39FF14]"
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  );
}

