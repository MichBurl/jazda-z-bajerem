"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEng from "@/components/sections/eng/HeroEng";
import FeaturesEng from "@/components/sections/eng/FeaturesEng";
import ProcessEng from "@/components/sections/eng/ProcessEng";
import PricingEng from "@/components/sections/eng/PricingEng";
import TeamEng from "@/components/sections/eng/TeamEng";
import ImprovementEng from "@/components/sections/eng/ImprovementEng";
import ContactEng from "@/components/sections/eng/ContactEng";

export default function EnglishPage() {
  return (
    <main className="min-h-screen">
      <HeroEng />
      <FeaturesEng />
      <ProcessEng />
      <PricingEng />
      <TeamEng />
      <ImprovementEng />
      <ContactEng />
    </main>
  );
}
