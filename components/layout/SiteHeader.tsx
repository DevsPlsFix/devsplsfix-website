"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/fixes", label: "Fix Log" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-zinc-900 bg-black/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-white hover:text-[#39FF14]"
        >
          DEVS PLS FIX
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 transition hover:text-[#39FF14]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-900 bg-black md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 transition hover:text-[#39FF14]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
