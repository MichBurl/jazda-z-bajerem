import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Check, Info, Car, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Driving School Krakow | Bajer Intercontinental",
  description: "Transparent prices for driving courses and refresher lessons in Krakow. English-friendly instructors, zero hidden costs, and payment in installments.",
};

export default function PricingEng() {
  const refresherPackages = [
    { title: "Single Hour", price: "160 PLN", desc: "1 hour of individual driving. Only for experienced drivers." },
    { title: "Single Lesson", price: "320 PLN", desc: "2 hours of individual driving. Best for quick practice." },
    { title: "Refresher (3h)", price: "460 PLN", desc: "For experienced drivers who want to get used to Krakow's roads." },
    { title: "Krakow & Poland (6h)", price: "900 PLN", desc: "For licensed drivers of all levels. Highway, parking and more.", highlight: true },
    { title: "From Scratch (10h)", price: "1450 PLN", desc: "For people with a license but no real driving experience." },
    { title: "Beginner (16h)", price: "2250 PLN", desc: "From Zero to Hero. Complete comprehensive training." },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section variant="dark" className="text-center py-20">
        <span className="inline-block font-heading font-black text-racing-red uppercase tracking-widest text-sm mb-6 border-b-2 border-racing-red pb-2">
          Your Investment
        </span>
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase italic mb-8">
          INVEST IN CONFIDENCE. <br />
          <span className="text-racing-red">PAY ONCE, DRIVE FOREVER.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
          At Bajer Intercontinental, we prioritize quality, peace of mind, and the highest level of training. No hidden costs. Installment plans available!
        </p>
      </Section>

      {/* Main Course */}
      <Section variant="light" title="Driving License Course">
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white border border-asphalt-900/10 shadow-2xl rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-racing-red/5 -mr-16 -mt-16 rounded-full" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-black text-asphalt-900 uppercase italic">Complete Driving Course</h2>
              <p className="text-asphalt-900/60 max-w-md">Includes theory access, 30h of practical driving, and full office support for foreigners.</p>
              <ul className="space-y-2">
                {["Online theory platform", "30h Practice in 5 weeks", "Exam support", "English Instructor"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-asphalt-900/80">
                    <Check className="w-4 h-4 text-racing-red" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <span className="text-5xl font-heading font-black text-racing-red italic">4799 PLN</span>
              <div className="mt-4">
                <Button href="/en/#kontakt">Sign up now</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Refresher Lessons */}
      <Section variant="asphalt" title="Refresher Lessons in Krakow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {refresherPackages.map((item, i) => (
            <div key={i} className={`p-8 rounded-sm border-2 transition-all duration-300 hover:-translate-y-2 ${item.highlight ? "border-racing-red bg-asphalt-800 shadow-2xl relative" : "border-white/5 bg-asphalt-900 shadow-lg"}`}>
              {item.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-racing-red text-white text-[10px] font-black uppercase px-3 py-1.5 tracking-widest shadow-lg">Popular Choice</span>}
              <h3 className="font-heading font-black text-xl mb-4 uppercase text-white">{item.title}</h3>
              <div className="mb-6">
                <span className="text-3xl font-heading font-black text-racing-red italic">{item.price}</span>
              </div>
              <p className="text-white/40 font-medium text-sm mb-8 leading-relaxed h-20">{item.desc}</p>
              <Button href="/en/#kontakt" variant={item.highlight ? "primary" : "outline"} className="w-full">Book now</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Advanced Training */}
      <Section variant="light" title="Advanced Driving Skills">
        <div className="max-w-4xl mx-auto p-12 bg-white border border-asphalt-900/5 shadow-2xl rounded-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <ShieldCheck className="w-16 h-16 text-premium-gold mb-6" />
              <h3 className="text-3xl font-heading font-black text-asphalt-900 uppercase mb-6 italic">Driving Improvement</h3>
              <p className="text-asphalt-900/70 mb-8 leading-relaxed text-sm italic border-l-2 border-racing-red pl-4">
                "Improve your driving skills using drag strips, Stewart tests, and rally cars under the supervision of professionals."
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
               <div className="p-4 bg-off-white flex flex-col gap-1 border-l-4 border-premium-gold">
                  <span className="text-xs font-bold text-asphalt-900/40 uppercase">Class Type</span>
                  <span className="font-heading font-bold text-asphalt-900">Individual or Group</span>
               </div>
               <div className="p-4 bg-off-white flex flex-col gap-1 border-l-4 border-racing-red">
                  <span className="text-xs font-bold text-asphalt-900/40 uppercase">Reward</span>
                  <span className="font-heading font-bold text-asphalt-900">Certificate of Completion</span>
               </div>
               <div className="pt-4">
                <Button href="/en/#kontakt" className="w-full">Inquire for Prices</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
