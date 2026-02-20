import { TitlePlate } from "@/components/ui/TitlePlate";
import { ButtonLink } from "@/components/ui/Button";
import { ScrollingTerminal } from "@/components/ui/ScrollingTerminal";
import { HeroSearchInput } from "@/components/ui/HeroSearchInput";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-6 md:pt-8 md:pb-8">
      <ScrollingTerminal />
      <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <TitlePlate
              eyebrow="Devs pls fix"
              title="DEVS PLS FIX"
              kicker="VIBE CODING • BUILD IN PUBLIC"
            >
              <p className="mt-4 text-base text-zinc-200">
                The internet complains. We build the fix.
              </p>
            </TitlePlate>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/tools">Browse Tools</ButtonLink>
              <ButtonLink href="https://youtube.com" external variant="outline">
                Watch on YouTube
              </ButtonLink>
            </div>
          </div>

          <div className="flex items-center gap-2 border-4 border-zinc-900 bg-zinc-950 px-4 py-3 font-mono text-sm shadow-[8px_8px_0_0_rgba(0,0,0,0.9)] md:max-w-xl">
            <span className="select-none text-[var(--accent)]">$</span>
            <HeroSearchInput />
          </div>
        </div>

        <div className="hidden md:flex md:justify-end">
          <div className="relative aspect-square max-w-md border-4 border-zinc-900 bg-zinc-950 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.9)]">
            <img
              src="/devs-pls-fix-placeholder-2.webp"
              alt="Devs pls fix"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
