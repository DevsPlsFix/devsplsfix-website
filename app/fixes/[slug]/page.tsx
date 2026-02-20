import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllFixesMeta, getFixBySlug } from "@/lib/fixes";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  buildArticleJsonLd,
  buildWebPageJsonLd,
  type BreadcrumbItem,
} from "@/lib/schema";

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return getAllFixesMeta().map((fix) => ({ slug: fix.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const fix = getFixBySlug(params.slug);
  if (!fix) return {};

  return buildPageMetadata({
    path: `/fixes/${fix.slug}`,
    section: "fixes",
    title: fix.title,
    description: fix.summary,
  });
}

const mdxComponents = {};

export default function FixDetailPage({ params }: { params: Params }) {
  const fix = getFixBySlug(params.slug);

  if (!fix) {
    notFound();
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    { name: "Fix Log", path: "/fixes" },
    { name: fix.title, path: `/fixes/${fix.slug}` },
  ];

  const articleJsonLd = buildArticleJsonLd({
    path: `/fixes/${fix.slug}`,
    title: fix.title,
    description: fix.summary,
    datePublished: fix.date,
    authors: [{ name: "DEVS PLS FIX" }],
    section: "fixes",
    tags: fix.tags,
  });

  const webPageJsonLd = buildWebPageJsonLd({
    path: `/fixes/${fix.slug}`,
    name: fix.title,
    description: fix.summary,
    datePublished: fix.date,
    breadcrumbs,
  });

  return (
    <main className="mx-auto max-w-3xl py-16">
      <JsonLd data={[webPageJsonLd, articleJsonLd]} />
      <Breadcrumbs items={breadcrumbs} />
      <Section id="fix" label={fix.title} eyebrow="Fix Log entry">
        <article className="prose prose-invert max-w-none text-sm">
          <p className="mb-4 text-xs text-zinc-400">
            {new Date(fix.date).toLocaleDateString()}
          </p>
          <MDXRemote
            source={fix.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            components={mdxComponents}
          />
        </article>
      </Section>
    </main>
  );
}

