import { absoluteUrl, siteConfig } from "./seo";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleAuthor {
  name: string;
  url?: string;
}

export interface SoftwarePricing {
  price?: number;
  priceCurrency?: string;
  free?: boolean;
}

export interface WebPageJsonLdOptions {
  path: string;
  name: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbJsonLdOptions {
  items: BreadcrumbItem[];
  asGraphNode?: boolean;
}

export interface SoftwareApplicationJsonLdOptions {
  path: string;
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
  pricing?: SoftwarePricing;
  landingPageUrl?: string;
}

export interface ArticleJsonLdOptions {
  path: string;
  title: string;
  description: string;
  bodyHtml?: string;
  datePublished: string;
  dateModified?: string;
  authors: ArticleAuthor[];
  section?: "fixes" | "learn" | "compare";
  tags?: string[];
  image?: string;
}

export interface FaqPageJsonLdOptions {
  path: string;
  name: string;
  faqs: FaqItem[];
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: absoluteUrl("/android-chrome-512x512.png"),
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.youtube,
      siteConfig.social.twitter.site
        ? `https://x.com/${siteConfig.social.twitter.site.replace("@", "")}`
        : undefined,
    ].filter(Boolean),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.baseUrl,
    name: siteConfig.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbJsonLd(options: BreadcrumbJsonLdOptions) {
  const list = {
    "@type": "BreadcrumbList",
    itemListElement: options.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  if (options.asGraphNode) {
    return list;
  }

  return {
    "@context": "https://schema.org",
    ...list,
  };
}

export function buildWebPageJsonLd(options: WebPageJsonLdOptions) {
  const url = absoluteUrl(options.path);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: options.name,
    description: options.description ?? siteConfig.defaultDescription,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
  };

  if (options.datePublished) data.datePublished = options.datePublished;
  if (options.dateModified) data.dateModified = options.dateModified;

  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    (data as any).breadcrumb = buildBreadcrumbJsonLd({
      items: options.breadcrumbs,
      asGraphNode: true,
    });
  }

  return data;
}

export function buildSoftwareApplicationJsonLd(
  options: SoftwareApplicationJsonLdOptions,
) {
  const url = absoluteUrl(options.path);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: options.name,
    description: options.description,
    url,
    applicationCategory:
      options.applicationCategory ?? "DeveloperApplication",
    operatingSystem: options.operatingSystem ?? "Any",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
  };

  if (options.landingPageUrl || options.pricing) {
    (data as any).offers = {
      "@type": "Offer",
      url: options.landingPageUrl
        ? options.landingPageUrl
        : absoluteUrl(options.path),
      priceCurrency: options.pricing?.priceCurrency ?? "USD",
      price:
        typeof options.pricing?.price === "number"
          ? options.pricing.price.toString()
          : undefined,
      availability: "https://schema.org/InStock",
    };
  }

  return data;
}

export function buildArticleJsonLd(options: ArticleJsonLdOptions) {
  const url = absoluteUrl(options.path);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: options.title,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: options.authors.map((author) => ({
      "@type": "Person",
      name: author.name,
      ...(author.url ? { url: author.url } : {}),
    })),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
  };

  if (options.tags?.length) {
    (data as any).keywords = options.tags.join(", ");
  }
  if (options.bodyHtml) {
    (data as any).articleBody = options.bodyHtml;
  }
  if (options.image) {
    (data as any).image = options.image;
  }
  if (options.section) {
    (data as any).articleSection = options.section;
  }

  return data;
}

export function buildFaqPageJsonLd(options: FaqPageJsonLdOptions) {
  const url = absoluteUrl(options.path);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: options.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url,
    name: options.name,
  };
}

