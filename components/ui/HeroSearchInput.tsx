"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

export function HeroSearchInput() {
  const [value, setValue] = useState("");
  const [cursorOffset, setCursorOffset] = useState(0);
  const [cursorLeft, setCursorLeft] = useState(0);
  const [focused, setFocused] = useState(false);
  const mirrorRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const syncCursor = useCallback(() => {
    const input = inputRef.current;
    if (input) setCursorOffset(input.selectionStart ?? 0);
  }, []);

  useLayoutEffect(() => {
    const mirror = mirrorRef.current;
    if (!mirror) return;
    setCursorLeft(mirror.offsetWidth);
  }, [value, cursorOffset]);

  return (
    <div className="relative flex min-w-0 flex-1 items-center">
      <span
        ref={mirrorRef}
        className="pointer-events-none invisible absolute left-0 top-1 font-mono text-sm text-zinc-300 whitespace-pre"
        aria-hidden
      >
        {value.slice(0, cursorOffset)}
      </span>
      <input
        ref={inputRef}
        type="text"
        name="hero-search"
        placeholder="  Search tools, fixes, dev complaints..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setCursorOffset(e.target.selectionStart ?? 0);
        }}
        onSelect={syncCursor}
        onKeyUp={syncCursor}
        onClick={syncCursor}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="min-w-0 flex-1 border-0 bg-transparent py-1 text-zinc-300 outline-none placeholder:text-zinc-500 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        style={{ caretColor: "transparent" }}
        aria-label="Search tools and fixes"
      />
      <span
        className={`absolute top-1/2 block -translate-y-1/2 ${focused ? "bg-[var(--accent)]" : "border border-[var(--accent)] bg-transparent"}`}
        style={{
          left: cursorLeft,
          width: "0.5em",
          height: "1.1em",
        }}
        aria-hidden
      />
    </div>
  );
}
