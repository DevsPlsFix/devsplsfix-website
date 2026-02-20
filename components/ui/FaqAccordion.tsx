"use client";

import { useState } from "react";

export interface FaqAccordionItem {
  id?: string;
  question: string;
  answer: React.ReactNode;
}

export interface FaqAccordionProps {
  items: FaqAccordionItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-${index}-button`;
        const panelId = `faq-${index}-panel`;

        return (
          <div
            key={item.id ?? item.question}
            className="border border-zinc-700 bg-black/40"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-mono uppercase tracking-wide"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="text-zinc-500">{isOpen ? "-" : "+"}</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`px-4 pb-4 text-sm leading-relaxed text-zinc-200 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

