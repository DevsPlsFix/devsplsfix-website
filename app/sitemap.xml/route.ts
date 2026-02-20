import { NextResponse } from "next/server";
import { absoluteUrl } from "@/lib/seo";
import { getAllTools } from "@/lib/tools";
import { getAllFixesMeta } from "@/lib/fixes";

export async function GET() {
  const staticPaths = [
    "/",
    "/tools",
    "/fixes",
    "/videos",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const toolPaths = getAllTools().map((tool) => `/tools/${tool.slug}`);
  const fixPaths = getAllFixesMeta().map((fix) => `/fixes/${fix.slug}`);

  const paths = [...staticPaths, ...toolPaths, ...fixPaths];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) =>
      `<url><loc>${absoluteUrl(path)}</loc><changefreq>weekly</changefreq></url>`,
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

