"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type InputHTMLAttributes,
} from "react";

const baseWrapperClass =
  "relative mt-1 flex w-full border border-zinc-700 bg-black";
const baseInputClass =
  "min-w-0 flex-1 border-0 bg-transparent py-2 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-mono";

export function TerminalInput({
  className,
  wrapperClassName,
  inputClassName,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  wrapperClassName?: string;
  inputClassName?: string;
}) {
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

  // Keep value and cursor in sync with DOM (fixes type="email" and other inputs that normalize)
  useLayoutEffect(() => {
    const input = inputRef.current;
    if (!input || isControlled) return;
    const domValue = input.value;
    const start = input.selectionStart ?? 0;
    if (domValue !== value) setValue(domValue);
    if (start !== cursorOffset) setCursorOffset(start);
  });

  const isControlled = props.value !== undefined;
  const currentValue = isControlled ? (props.value as string) : value;

  return (
    <div
      className={[baseWrapperClass, wrapperClassName, className].filter(Boolean).join(" ")}
    >
      <span
        ref={mirrorRef}
        className="pointer-events-none invisible absolute left-3 top-1/2 min-w-0 -translate-y-1/2 font-mono text-sm text-white whitespace-pre"
        aria-hidden
      >
        {String(currentValue ?? "").slice(0, cursorOffset)}
      </span>
      <input
        ref={inputRef}
        {...props}
        value={isControlled ? props.value : value}
        onChange={(e) => {
          const input = e.target;
          if (!isControlled) setValue(input.value);
          // Sync cursor on next frame so email/other types report selectionStart correctly
          requestAnimationFrame(() => {
            setCursorOffset(input.selectionStart ?? 0);
          });
          props.onChange?.(e);
        }}
        onSelect={syncCursor}
        onKeyUp={syncCursor}
        onClick={syncCursor}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={[baseInputClass, inputClassName].filter(Boolean).join(" ")}
        style={{ caretColor: "transparent" }}
      />
      <span
        className={`absolute top-1/2 block -translate-y-1/2 ${focused ? "bg-[var(--accent)]" : "border border-[var(--accent)] bg-transparent"}`}
        style={{
          left: 12 + cursorLeft,
          width: "0.5em",
          height: "1.1em",
        }}
        aria-hidden
      />
    </div>
  );
}
