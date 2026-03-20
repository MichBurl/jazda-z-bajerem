import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Comparison from "@/components/sections/Comparison";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Comparison />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
