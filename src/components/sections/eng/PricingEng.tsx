"use client";

import Section from "../../Section";
import { Check, ArrowRight } from "lucide-react";
import Button from "../../Button";
import { motion } from "framer-motion";

const PACKAGES = [
  {
    name: "Refresher (3h)",
    price: "460 PLN",
    description: "For experienced drivers who want to get used to Krakow's roads.",
    features: ["3 hours of driving", "Krakow traffic orientation", "Safety tips"],
  },
  {
    name: "Krakow & Poland (6h)",
    price: "900 PLN",
    description: "For licensed drivers of all ages and skill levels.",
    features: ["6 hours of driving", "Highway & Night driving", "Parking maneuvers", "Defensive driving"],
    recommended: true,
  },
  {
    name: "From Scratch (10h)",
    price: "1450 PLN",
    description: "For people with a license but no real driving experience.",
    features: ["10 hours of driving", "Full basics refresh", "All city maneuvers", "Confidence building"],
  },
  {
    name: "Beginner (16h)",
    price: "2250 PLN",
    description: "Zero to Hero. For complete beginners with a license.",
    features: ["16 hours of driving", "Comprehensive training", "Intensive practice", "Pro level skills"],
  },
];

export default function PricingEng() {
  return (
    <Section id="pricing" variant="light" title="Refresher Lessons Price" subtitle="Courses and Packages">
      <div className="mb-16 p-8 bg-asphalt-900 text-white rounded-sm flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-3xl font-heading font-black uppercase italic mb-2">Full Driving Course</h3>
          <p className="text-white/60">Comprehensive course for beginners (Theory + 30h Practice)</p>
        </div>
        <div className="text-center md:text-right">
          <span className="text-4xl font-heading font-black text-racing-red italic">4799 PLN</span>
          <p className="text-xs uppercase tracking-widest text-white/30 mt-2">All materials included</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PACKAGES.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-sm border ${pkg.recommended ? 'border-premium-gold bg-premium-gold/5 shadow-xl' : 'border-asphalt-900/5 bg-white'} relative flex flex-col`}
          >
            {pkg.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-premium-gold text-asphalt-900 text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                Recommended
              </span>
            )}
            <h4 className="text-xl font-heading font-black text-asphalt-900 mb-2 uppercase">{pkg.name}</h4>
            <div className="mb-6">
              <span className="text-2xl font-heading font-bold text-racing-red italic">{pkg.price}</span>
            </div>
            <p className="text-asphalt-900/60 text-sm mb-6 font-body leading-relaxed">{pkg.description}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-asphalt-900/80">
                  <Check className="w-4 h-4 text-racing-red shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <Button variant={pkg.recommended ? "primary" : "outline"} size="sm" className="w-full">
              Order now
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
