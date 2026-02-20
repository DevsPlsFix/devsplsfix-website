"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type TextareaHTMLAttributes,
} from "react";

const baseWrapperClass =
  "relative mt-1 w-full border border-zinc-700 bg-black";
const baseTextareaClass =
  "w-full min-h-[8rem] border-0 bg-transparent py-2 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 resize-y font-mono";

export function TerminalTextarea({
  className,
  wrapperClassName,
  textareaClassName,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  wrapperClassName?: string;
  textareaClassName?: string;
}) {
  const [value, setValue] = useState("");
  const [cursorOffset, setCursorOffset] = useState(0);
  const [caretStyle, setCaretStyle] = useState({ left: 12, top: 8 });
  const [focused, setFocused] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mirrorRef = useRef<HTMLDivElement>(null);
  const cursorSpanRef = useRef<HTMLSpanElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const syncCursor = useCallback(() => {
    const ta = textareaRef.current;
    if (ta) {
      setCursorOffset(ta.selectionStart ?? 0);
      setScrollTop(ta.scrollTop);
    }
  }, []);

  useLayoutEffect(() => {
    const mirror = mirrorRef.current;
    const cursorSpan = cursorSpanRef.current;
    const wrapper = wrapperRef.current;
    const ta = textareaRef.current;
    if (!mirror || !cursorSpan || !wrapper || !ta) return;

    // Keep mirror scroll in sync with textarea
    mirror.scrollTop = ta.scrollTop;
    mirror.scrollLeft = ta.scrollLeft;

    const spanRect = cursorSpan.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    setCaretStyle({
      left: spanRect.left - wrapperRect.left,
      top: spanRect.top - wrapperRect.top,
    });
  }, [value, cursorOffset, scrollTop]);

  const isControlled = props.value !== undefined;
  const currentValue = isControlled ? (props.value as string) : value;
  const fullValue = String(currentValue ?? "");
  const textBeforeCursor = fullValue.slice(0, cursorOffset);
  const textAfterCursor = fullValue.slice(cursorOffset);

  return (
    <div
      ref={wrapperRef}
      className={[baseWrapperClass, wrapperClassName, className].filter(Boolean).join(" ")}
    >
      {/* Mirror: same content and layout as textarea for cursor measurement */}
      <div
        ref={mirrorRef}
        className="pointer-events-none invisible absolute inset-0 overflow-auto whitespace-pre-wrap break-words px-3 py-2 font-mono text-sm text-white"
        aria-hidden
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <span style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          {textBeforeCursor}
          <span ref={cursorSpanRef}>{"\u200b"}</span>
          {textAfterCursor}
        </span>
      </div>
      <textarea
        ref={textareaRef}
        {...props}
        value={isControlled ? props.value : value}
        onChange={(e) => {
          if (!isControlled) setValue(e.target.value);
          setCursorOffset(e.target.selectionStart ?? 0);
          setScrollTop(e.target.scrollTop);
          props.onChange?.(e);
        }}
        onSelect={syncCursor}
        onKeyUp={syncCursor}
        onClick={syncCursor}
        onScroll={syncCursor}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={[baseTextareaClass, textareaClassName].filter(Boolean).join(" ")}
        style={{ caretColor: "transparent" }}
      />
      <span
        className={`absolute block ${focused ? "bg-[var(--accent)]" : "border border-[var(--accent)] bg-transparent"}`}
        style={{
          left: caretStyle.left,
          top: caretStyle.top,
          width: "0.5em",
          height: "1.1em",
        }}
        aria-hidden
      />
    </div>
  );
}
