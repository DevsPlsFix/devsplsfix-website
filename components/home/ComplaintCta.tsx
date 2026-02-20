import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function ComplaintCta() {
  return (
    <Section id="complaint-cta" label="Got a complaint?" eyebrow="Contact">
      <div className="max-w-2xl">
        <p className="mb-6 text-sm text-zinc-300">
          Found a problem that needs fixing? A tool that should exist but
          doesn't? A workflow that's broken? Send it our way. The more concrete
          your pain, the easier it is to ship a fix.
        </p>
        <ButtonLink href="/contact">Submit a Complaint</ButtonLink>
      </div>
    </Section>
  );
}
