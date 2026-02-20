import type { ReactNode } from "react";

export interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-[#111111] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,255,20,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04),_transparent_55%)] mix-blend-screen opacity-80" />
      <div className="pointer-events-none fixed inset-0 bg-[url('/textures/noise.png')] opacity-[0.06]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

