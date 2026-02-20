import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "ghost" | "outline";

const baseClasses =
  "inline-flex items-center justify-center px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const variantClasses: Record<Variant, string> = {
  primary:
    "border-[#39FF14] bg-[#39FF14] text-black hover:bg-black hover:text-[#39FF14]",
  ghost:
    "border-zinc-700 bg-black text-zinc-100 hover:border-zinc-200 hover:text-white",
  outline:
    "border-zinc-500 bg-transparent text-zinc-100 hover:border-[#39FF14] hover:text-[#39FF14]",
};

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  external,
  className,
}: ButtonLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}

