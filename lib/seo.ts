import type { Metadata } from "next";

export type SiteSection =
  | "home"
  | "tools"
  | "fixes"
  | "learn"
  | "compare"
  | "static";

export interface SiteSocialConfig {
  twitter: {
    handle: string;
    site: string;
    cardType: "summary" | "summary_large_image";
  };
  github?: string;
  youtube?: string;
  discord?: string;
}

export interface SiteOpenGraphConfig {
  defaultImage: string;
  siteName: string;
  locale: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  baseUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  social: SiteSocialConfig;
  openGraph: SiteOpenGraphConfig;
  sectionDescriptions: Partial<Record<SiteSection, string>>;
}

export const siteConfig: SiteConfig = {
  name: "DEVS PLS FIX",
  tagline: "The internet complains. We build the fix.",
  domain: "devsplsfix.com",
  baseUrl: "https://devsplsfix.com",
  defaultTitle: "DEVS PLS FIX",
  titleTemplate: "%s | DEVS PLS FIX",
  defaultDescription:
    "DEVS PLS FIX is the mothership hub for vibe coding, build-in-public micro SaaS tools, and the Fix Log turning internet complaints into shipped software.",
  social: {
    twitter: {
      handle: "@devsplsfix",
      site: "@devsplsfix",
      cardType: "summary_large_image",
    },
    github: "https://github.com/DevsPlsFix",
    youtube: "https://www.youtube.com/@DevsPlsFix",
    discord: "https://discord.gg/w6gxgwBbFH",
  },
  openGraph: {
    defaultImage: "/og-default.png",
    siteName: "DEVS PLS FIX",
    locale: "en_US",
  },
  sectionDescriptions: {
    home:
      "DEVS PLS FIX is a developer hub turning real-world complaints into tools, micro SaaS, and shipped fixes.",
    tools:
      "Browse DEVS PLS FIX tools that turn developer complaints into working micro SaaS and automation.",
    fixes:
      "The DEVS PLS FIX log of complaints, why they were broken, and how we shipped the fix.",
    learn:
      "Evergreen definitions and guides from DEVS PLS FIX on AI orchestration, micro SaaS, and automation.",
    compare:
      "In-depth DEVS PLS FIX comparisons to help you choose the right tools for specific problems.",
  },
} as const;

export interface CanonicalOptions {
  pathOrUrl: string;
}

export interface RobotsOptions {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  nocache?: boolean;
  noimageindex?: boolean;
}

export interface OgOverrides {
  type?: "website" | "article";
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface TwitterOverrides {
  cardType?: "summary" | "summary_large_image";
  image?: string;
}

export interface PageSeoInput {
  path: string;
  /** Short title; combined with titleTemplate unless fullTitle is set */
  title?: string;
  /** When set, used as the final document title (no template). Use for custom SEO titles. */
  fullTitle?: string;
  description?: string;
  section?: SiteSection;
  robots?: RobotsOptions;
  openGraph?: OgOverrides;
  twitter?: TwitterOverrides;
  lang?: string;
}

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const base = siteConfig.baseUrl.replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function formatTitle(title?: string): string {
  if (!title) return siteConfig.defaultTitle;
  return siteConfig.titleTemplate.replace("%s", title);
}

export function buildCanonicalUrl({ pathOrUrl }: CanonicalOptions): string {
  return absoluteUrl(pathOrUrl);
}

export function defaultRobots(options?: RobotsOptions): Metadata["robots"] {
  const {
    index = true,
    follow = true,
    noarchive,
    nosnippet,
    nocache,
    noimageindex,
  } = options ?? {};

  return {
    index,
    follow,
    noarchive,
    nosnippet,
    nocache,
    noimageindex,
  };
}

export function noindexRobots(): Metadata["robots"] {
  return defaultRobots({ index: false, follow: true });
}

export function buildPageMetadata(input: PageSeoInput): Metadata {
  const {
    path,
    title,
    fullTitle: fullTitleOverride,
    description,
    section,
    robots,
    openGraph,
    twitter,
    lang = "en",
  } = input;

  const fullTitle = fullTitleOverride ?? formatTitle(title);
  const canonical = buildCanonicalUrl({ pathOrUrl: path });
  const desc =
    description ??
    (section ? siteConfig.sectionDescriptions[section] : undefined) ??
    siteConfig.defaultDescription;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical,
      siteName: siteConfig.openGraph.siteName,
      locale: siteConfig.openGraph.locale,
      type: openGraph?.type ?? "website",
      images:
        openGraph?.images ??
        [
          {
            url: siteConfig.openGraph.defaultImage,
          },
        ],
    },
    twitter: {
      card: twitter?.cardType ?? siteConfig.social.twitter.cardType,
      creator: siteConfig.social.twitter.handle,
      site: siteConfig.social.twitter.site,
      title: fullTitle,
      description: desc,
      images: twitter?.image
        ? [twitter.image]
        : [siteConfig.openGraph.defaultImage],
    },
    robots: defaultRobots(robots),
    // keep language simple for now
    other: {
      "accept-language": lang,
    },
  };
}

