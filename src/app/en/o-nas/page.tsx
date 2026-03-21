import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";
import { CheckCircle2, History, Target, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Driving School Kraków Bajer Intercontinental",
  description: "Learn more about Bajer Intercontinental, the best driving school for foreigners in Krakow. We focus on safety, confidence, and stress-free learning.",
};

export default function AboutUsEng() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section
        variant="dark"
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={`${basePath}/images/eng-images/hero-eng.webp`}
            alt="Our passion for driving"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-asphalt-900/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block font-heading font-black text-racing-red uppercase tracking-widest text-sm mb-6 border-l-4 border-racing-red pl-4">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-8 uppercase italic">
            WE DON'T JUST PRODUCE DRIVERS. <span className="text-racing-red">WE CREATE CONFIDENT</span> ROAD USERS.
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-2xl">
            Krakow's premier driving school for expats. Learn fast, drive safely, and pass your exam without stress.
          </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section variant="light" title="Built for foreigners">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-asphalt-900/80 font-body text-lg leading-relaxed">
            <p>
              Bajer Intercontinental is a driving school in Krakow made especially for foreigners who want to learn to drive safely in Poland and understand the local traffic culture.
            </p>
            <p className="font-bold text-asphalt-900">
              Our crew is experienced with teaching foreigners how to drive safely around Krakow and whole Poland.
            </p>
            <p>
              We pride ourselves on the highest pass rate for foreigners in Krakow. Our staff has extensive experience teaching driving in English and guiding you through every step of the Polish bureaucracy.
            </p>
            <div className="pt-6">
              <Button href="/en/#pricing">See Prices</Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={`${basePath}/images/2-scaled.webp`}
              alt="Driving with passion"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why Us? */}
      <Section variant="asphalt" title="Why Choose Us?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "3 lessons per week",
              desc: "We are the only school in Krakow that guarantees this intensity in standard.",
            },
            {
              title: "English Specialists",
              desc: "Our instructors speak fluent English and understand your unique needs.",
            },
            {
              title: "Translation Support",
              desc: "We cooperate with sworn translators who will take the state exam with you.",
            },
            {
              title: "Flexible Locations",
              desc: "Start and end lessons at locations that fit your daily schedule.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-asphalt-900 border border-white/5 rounded-sm">
              <h3 className="text-racing-red font-heading font-black uppercase text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="light" title="How to Start" centered>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-asphalt-900/60 leading-relaxed font-body italic mb-12">
            "We guide you through every step of the Polish driving license process, from medical checks to the final exam."
          </p>
          <Button href="/en/#kontakt" variant="gold" size="lg">Contact and ask us</Button>
        </div>
      </Section>
    </main>
  );
}
