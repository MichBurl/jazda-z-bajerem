"use client";

import Section from "../Section";
import { Calendar, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: <Calendar className="w-10 h-10 text-racing-red" />,
    problem: "Kurs ciągnący się miesiącami",
    solution: "3 jazdy tygodniowo",
    description: "Gwarantujemy do 3 jazd w każdym tygodniu w standardzie. U nas zrobisz kurs w 1-1.5 miesiąca, bez czekania na wolne terminy.",
  },
  {
    icon: <Zap className="w-10 h-10 text-racing-red" />,
    problem: "Stres i suche wykłady",
    solution: "Ekstremalne umiejętności",
    description: "Nauczysz się wyjeżdżać z poślizgu na trolejach i płycie poślizgowej. Przygotujemy Cię na każdą sytuację na drodze.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-racing-red" />,
    problem: "Strach przed ruchem w mieście",
    solution: "Rozpracowujemy Kraków razem",
    description: "Zabierzemy Cię na najtrudniejsze skrzyżowania w Krakowie. Nauczysz się jak pokonywać ronda i przejazdy tramwajowe bez stresu.",
  },
];

export default function Features() {
  return (
    <Section
      id="oferta"
      variant="light"
      subtitle="Nasze Rozwiązania"
      title="Większość szkół rzuca Cię na głęboką wodę. My działamy inaczej."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
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
            
            <div className="mb-4">
              <span className="text-xs font-heading font-bold text-asphalt-900/60 uppercase tracking-widest block mb-1">
                Problem: {feature.problem}
              </span>
              <h3 className="text-2xl font-heading font-black text-asphalt-900 uppercase">
                {feature.solution}
              </h3>
            </div>
            
            <p className="text-asphalt-900/90 leading-relaxed font-body">
              {feature.description}
            </p>
            
            <div className="mt-8 w-12 h-1 bg-racing-red/10 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
