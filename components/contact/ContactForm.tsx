"use client";

import { TerminalInput } from "@/components/ui/TerminalInput";
import { TerminalSelect } from "@/components/ui/TerminalSelect";
import { TerminalTextarea } from "@/components/ui/TerminalTextarea";

const SUBJECT_OPTIONS = [
  { value: "complaint", label: "Complaint / something's broken" },
  { value: "idea", label: "Idea for a fix or tool" },
  { value: "question", label: "Question" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Functionality (e.g. API route, email service) to be added later.
  }

  return (
    <form className="contact-form space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-400"
        >
          Name
        </label>
        <TerminalInput
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="  Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-400"
        >
          Email
        </label>
        <TerminalInput
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="  you@example.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-400"
        >
          What's it about?
        </label>
        <TerminalSelect
          id="subject"
          name="subject"
          options={SUBJECT_OPTIONS}
          placeholder="Choose one…"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-400"
        >
          Message
        </label>
        <TerminalTextarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="  What hurts? What would you fix? Be as specific as you like."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center border-2 border-[#39FF14] bg-[#39FF14] px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-[#39FF14]"
      >
        Send message
      </button>
    </form>
  );
}
