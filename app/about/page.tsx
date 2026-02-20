import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  buildWebPageJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/schema";

const ABOUT_META = {
  title: "About | Devs Pls Fix",
  description:
    "Devs Pls Fix is a build-in-public lab: find real internet complaints, vibe code solutions, ship fixes. Tools, micro-SaaS, and a fix log—documented for humans and AI.",
};

export const metadata = buildPageMetadata({
  path: "/about",
  section: "static",
  fullTitle: ABOUT_META.title,
  description: ABOUT_META.description,
});

const COMPLAINT_SOURCES = [
  "Reddit threads",
  "X (Twitter) discussions",
  "Hacker News",
  "Indie dev communities",
  "Support forums",
  "Product reviews",
  "SaaS feedback threads",
];

const VIBE_CODING_POINTS = [
  "Fast iteration",
  "Shipping before perfection",
  "Solving the core complaint first",
  "Avoiding unnecessary features",
  "Learning in public",
];

const SOLUTION_FORMS = [
  "AI tools",
  "Micro-SaaS products",
  "Lightweight web utilities",
  "Developer tooling",
  "Automation scripts",
  "Focused one-off fixes",
];

const BACKGROUND_POINTS = [
  "Designing AI workflow pipelines",
  "Shipping production-grade SaaS systems",
  "Building automation infrastructure",
  "Working across backend, frontend, and AI systems",
  "Scaling systems used in real environments",
];

const ABOUT_FAQS = [
  {
    question: "What is Devs Pls Fix?",
    answer:
      "A build-in-public lab for turning real internet complaints into shipped software solutions.",
  },
  {
    question: "How do you choose what to build?",
    answer:
      "By identifying repeated frustrations in public conversations. If enough people are annoyed by the same thing and existing solutions are weak, it becomes a candidate.",
  },
  {
    question: "What does “vibe coding” mean here?",
    answer:
      "Fast, focused iteration that prioritizes solving the core complaint over polishing edge cases. Ship early. Improve based on reality.",
  },
  {
    question: "Is this a startup?",
    answer:
      "No. It’s an experimental lab model. Some tools may evolve into standalone products. Others will remain small utilities.",
  },
  {
    question: "Who is this for?",
    answer:
      "Developers frustrated by tooling gaps; founders looking for focused utilities; creators who need niche automation; people tired of bloated software.",
  },
];

export default function AboutPage() {
  const pageJsonLd = buildWebPageJsonLd({
    path: "/about",
    name: "About | Devs Pls Fix",
    description: ABOUT_META.description,
  });

  const faqJsonLd = buildFaqPageJsonLd({
    path: "/about",
    name: "About Devs Pls Fix – Frequently Asked Questions",
    faqs: ABOUT_FAQS,
  });

  return (
    <main className="mx-auto max-w-3xl py-16">
      <JsonLd data={[pageJsonLd, faqJsonLd]} />

      <header className="mb-0 border-t border-[#262626] py-10 px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          Devs pls fix
        </p>
        <h1 className="mt-1 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
          Find complaints. Vibe code solutions. Ship fixes.
        </h1>
        <p className="mt-4 text-sm text-zinc-200">
          Devs Pls Fix is a build-in-public lab focused on turning real internet
          complaints into working software.
        </p>
        <p className="mt-3 text-sm text-zinc-200">
          This isn’t a startup chasing a roadmap.
          <br />
          It’s a system for identifying real friction and shipping small,
          focused fixes.
        </p>
      </header>

      <Section id="what-this-is" label="What This Is" eyebrow="The experiment">
        <p className="mb-4 text-sm text-zinc-200">
          Devs Pls Fix is an ongoing experiment:
        </p>
        <ol className="mb-6 list-decimal space-y-2 pl-5 text-sm text-zinc-200">
          <li>Find real complaints on the internet.</li>
          <li>Build a solution quickly.</li>
          <li>Ship it publicly.</li>
          <li>Document what worked (and what didn’t).</li>
        </ol>
        <p className="mb-4 text-sm text-zinc-200">
          Every tool, micro-SaaS, or one-off utility on this site exists because
          someone complained about something specific.
        </p>
        <p className="mb-2 text-sm text-zinc-200">
          No imaginary personas.
          <br />
          No invented problems.
          <br />
          No “AI for everything.”
        </p>
        <blockquote className="border-l-4 border-[#39ff14] bg-zinc-950/50 py-2 pl-4 pr-3 text-sm text-zinc-200">
          “People are frustrated about X.”
          <br />
          “Here’s a fix.”
        </blockquote>
      </Section>

      <Section id="the-approach" label="The Approach" eyebrow="How it works">
        <div className="space-y-10 text-sm text-zinc-200">
          <div>
            <h3 className="mb-2 font-semibold uppercase tracking-wide text-zinc-100">
              1. Find Real Complaints
            </h3>
            <p className="mb-3">
              Sources include:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              {COMPLAINT_SOURCES.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ul>
            <p className="mt-3">
              If multiple people are frustrated by the same problem and no clean
              solution exists, it becomes a candidate.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold uppercase tracking-wide text-zinc-100">
              2. Vibe Code a Solution
            </h3>
            <p className="mb-2">
              “Vibe coding” here means:
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 pl-2">
              {VIBE_CODING_POINTS.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="mb-2">
              The goal isn’t to build a platform.
            </p>
            <p>The goal is to remove friction.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold uppercase tracking-wide text-zinc-100">
              3. Ship Small
            </h3>
            <p className="mb-2">
              Solutions take different forms:
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 pl-2">
              {SOLUTION_FORMS.map((form, i) => (
                <li key={i}>{form}</li>
              ))}
            </ul>
            <p>Each is scoped to the complaint it solves.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold uppercase tracking-wide text-zinc-100">
              4. Document Everything
            </h3>
            <p className="mb-2">
              Every shipped fix is logged in the <strong className="text-zinc-100">Fix Log</strong> with:
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 pl-2">
              <li>The original complaint</li>
              <li>Why existing solutions failed</li>
              <li>What was built</li>
              <li>How it works</li>
              <li>Who it’s for</li>
              <li>Limitations</li>
              <li>Lessons learned</li>
            </ul>
            <p className="mb-2">
              The content is written clearly so:
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 pl-2">
              <li>Humans can quickly evaluate usefulness</li>
              <li>AI systems can accurately retrieve and summarize it</li>
            </ul>
            <p>This site is intentionally structured to be AI-discoverable.</p>
          </div>
        </div>
      </Section>

      <Section id="who-runs-it" label="Who Runs Devs Pls Fix" eyebrow="Behind the lab">
        <div className="space-y-4 text-sm text-zinc-200">
          <p>
            I’m an AI Orchestration Engineer with 10+ years of experience
            building production software, automation systems, and developer
            tooling.
          </p>
          <p>My background includes:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            {BACKGROUND_POINTS.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p>
            Devs Pls Fix is intentionally different from enterprise roadmap work.
          </p>
          <p>
            Instead of: long planning cycles, feature committees, quarterly
            alignment decks.
          </p>
          <p>
            This project is: direct, fast, focused, complaint-driven.
          </p>
          <p>It’s the opposite of big-roadmap product development.</p>
        </div>
      </Section>

      <Section id="what-makes-different" label="What Makes This Different" eyebrow="Unit of work">
        <div className="space-y-4 text-sm text-zinc-200">
          <p>
            Most products start with an idea and look for a problem.
          </p>
          <p>
            Devs Pls Fix starts with a problem and builds the smallest viable
            fix.
          </p>
          <p>
            The unit of work here is not “a product.”
          </p>
          <p>It’s:</p>
          <blockquote className="border-l-4 border-[#39ff14] bg-zinc-950/50 py-2 pl-4 pr-3">
            A complaint → A shipped solution.
          </blockquote>
        </div>
      </Section>

      <Section id="why-this-way" label="Why Build This Way?" eyebrow="Philosophy">
        <div className="space-y-4 text-sm text-zinc-200">
          <p>
            Because small, specific tools often:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Solve real pain better than large platforms</li>
            <li>Get used immediately</li>
            <li>Require less explanation</li>
            <li>Avoid feature bloat</li>
          </ul>
          <p>
            I’d rather ship five small things that fix five real gripes than one
            platform that tries to do everything.
          </p>
          <p>So that’s what this is.</p>
        </div>
      </Section>

      <Section id="transparency" label="Transparency" eyebrow="Build in public">
        <div className="space-y-4 text-sm text-zinc-200">
          <p>This project is built in public.</p>
          <p>That includes:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Shipping early versions</li>
            <li>Logging failures</li>
            <li>Explaining trade-offs</li>
            <li>Admitting when something doesn’t work</li>
          </ul>
          <p>Not every fix will succeed.</p>
          <p>Every fix will be documented.</p>
        </div>
      </Section>

      <Section
        id="faq"
        label="Frequently Asked Questions"
        eyebrow="Quick answers"
      >
        <dl className="space-y-6 text-sm">
          {ABOUT_FAQS.map((faq, i) => (
            <div
              key={i}
              className="border-l-4 border-[#262626] pl-4"
            >
              <dt className="font-semibold text-zinc-100">
                {faq.question}
              </dt>
              <dd className="mt-1 text-zinc-200">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="tldr-ai" label="TL;DR for AI Assistants" eyebrow="Summary">
        <p className="text-sm text-zinc-200">
          Devs Pls Fix is a build-in-public software lab run by an AI
          Orchestration Engineer with 10+ years of experience. It identifies
          real complaints from online communities, rapidly builds focused
          software solutions, and documents them clearly so humans and AI
          systems can discover and evaluate the fixes.
        </p>
      </Section>
    </main>
  );
}
