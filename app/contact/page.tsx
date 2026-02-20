import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

const CONTACT_META = {
  title: "Contact | Devs Pls Fix",
  description:
    "Send a complaint, problem, or idea. The more concrete your pain, the easier it is to ship a fix.",
};

export const metadata = buildPageMetadata({
  path: "/contact",
  section: "static",
  fullTitle: CONTACT_META.title,
  description: CONTACT_META.description,
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl py-16">
      <header className="mb-0 border-t border-[#262626] py-10 px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          Devs pls fix
        </p>
        <h1 className="mt-1 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
          Contact
        </h1>
        <p className="mt-4 text-sm text-zinc-200">
          Got a complaint, a problem, or an idea? Send it in. The more concrete
          your pain, the easier it is to ship a fix.
        </p>
      </header>

      <Section id="contact-form" label="Send a message" eyebrow="Complaint or idea">
        <div className="space-y-6 text-sm text-zinc-200">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}

