import type { ReactNode } from "react";

export interface TitlePlateProps {
  eyebrow?: string;
  title: string;
  kicker?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function TitlePlate({
  eyebrow,
  title,
  kicker,
  align = "left",
  children,
}: TitlePlateProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className="inline-block border-4 border-zinc-900 bg-zinc-950 px-5 py-4 shadow-[6px_6px_0_0_rgba(0,0,0,0.9)]">
      <div className={`flex flex-col gap-1 ${alignment}`}>
        {eyebrow ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            {kicker}
          </p>
        ) : null}
        <div className="mt-3 h-1 w-full bg-[#39FF14]" />
        {children ? (
          <div className="mt-3 text-sm text-zinc-200">{children}</div>
        ) : null}
      </div>
    </div>
  );
}

