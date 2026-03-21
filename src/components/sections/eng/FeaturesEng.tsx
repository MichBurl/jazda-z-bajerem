"use client";

import Section from "../../Section";
import { CheckCircle, Globe, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES_ENG = [
  {
    icon: <CheckCircle className="w-10 h-10 text-racing-red" />,
    title: "3 lessons per week",
    description: "We are the only school in Krakow that guarantees at least three lessons per week at no additional cost. Regular learning is crucial for success.",
  },
  {
    icon: <Globe className="w-10 h-10 text-racing-red" />,
    title: "English Specialists",
    description: "Highest pass rate for foreigners in Krakow. Our staff has extensive experience teaching driving specifically in English.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-racing-red" />,
    title: "Full Support",
    description: "We cooperate with the best sworn translators for exams. Our office provides comprehensive support and document handling.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-racing-red" />,
    title: "Flexible Locations",
    description: "We start and end classes in different locations in Krakow to adapt to your needs and daily schedule.",
  },
];

export default function FeaturesEng() {
  return (
    <Section
      id="oferta"
      variant="light"
      subtitle="Why us?"
      title="The best choice for foreigners in Krakow."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES_ENG.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 bg-white border border-asphalt-900/5 hover:border-racing-red/20 hover:shadow-2xl hover:shadow-racing-red/5 transition-all duration-300 rounded-sm"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            
            <h3 className="text-xl font-heading font-black text-asphalt-900 uppercase mb-4">
              {feature.title}
            </h3>
            
            <p className="text-asphalt-900/60 leading-relaxed font-body text-sm">
              {feature.description}
            </p>
            
            <div className="mt-8 w-12 h-1 bg-racing-red/10 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
