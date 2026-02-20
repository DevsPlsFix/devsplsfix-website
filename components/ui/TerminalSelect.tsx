"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type KeyboardEvent,
} from "react";

export interface TerminalSelectOption {
  value: string;
  label: string;
}

interface TerminalSelectProps {
  id: string;
  name: string;
  options: TerminalSelectOption[];
  placeholder?: string;
  className?: string;
  "aria-label"?: string;
}

export function TerminalSelect({
  id,
  name,
  options,
  placeholder = "Choose one…",
  className = "",
  "aria-label": ariaLabel,
}: TerminalSelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((o) => o.value === selectedValue);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  const close = useCallback(() => {
    setOpen(false);
    setHighlightedIndex(-1);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        listRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) return;
      close();
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open, close]);

  useEffect(() => {
    if (open && highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [open, highlightedIndex]);

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
        setHighlightedIndex(selectedValue ? options.findIndex((o) => o.value === selectedValue) : 0);
        if (highlightedIndex === -1 && options.length) setHighlightedIndex(0);
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        close();
        buttonRef.current?.focus();
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((i) => (i < options.length - 1 ? i + 1 : i));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((i) => (i > 0 ? i - 1 : 0));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (highlightedIndex >= 0 && options[highlightedIndex]) {
          setSelectedValue(options[highlightedIndex].value);
          close();
          buttonRef.current?.focus();
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className={`relative ${className}`.trim()}>
      <input type="hidden" name={name} value={selectedValue} />
      <button
        ref={buttonRef}
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel ?? "Select option"}
        onClick={() => {
          setOpen((o) => {
            const next = !o;
            if (next) {
              const i = selectedValue
                ? options.findIndex((opt) => opt.value === selectedValue)
                : 0;
              setHighlightedIndex(i >= 0 ? i : 0);
            }
            return next;
          });
        }}
        onKeyDown={handleKeyDown}
        className={`mt-1 w-full border border-zinc-700 bg-black px-3 py-2 text-left text-sm outline-none font-mono flex items-center justify-between gap-2 ${selectedOption ? "text-white" : "text-zinc-500"}`}
      >
        <span className="min-w-0 truncate">{displayLabel}</span>
        <span
          className={`shrink-0 text-[var(--accent)] transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▼
        </span>
      </button>
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-10 mt-1 max-h-48 w-full overflow-auto border border-zinc-700 bg-black py-1 shadow-lg"
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={selectedValue === opt.value}
              tabIndex={-1}
              className={`cursor-pointer px-3 py-2 text-sm font-mono transition-colors ${highlightedIndex === i ? "bg-zinc-800 text-[var(--accent)]" : "text-[var(--accent)] hover:bg-zinc-800/80"}`}
              onMouseEnter={() => setHighlightedIndex(i)}
              onClick={() => {
                setSelectedValue(opt.value);
                close();
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
