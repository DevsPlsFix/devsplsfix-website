import { Hero } from "@/components/home/Hero";
import { WhatWeFix } from "@/components/home/WhatWeFix";
import { FeaturedTools } from "@/components/home/FeaturedTools";
import { LatestFixes } from "@/components/home/LatestFixes";
import { ComplaintCta } from "@/components/home/ComplaintCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeFix />
      <FeaturedTools />
      <LatestFixes />
      <ComplaintCta />
    </>
  );
}
