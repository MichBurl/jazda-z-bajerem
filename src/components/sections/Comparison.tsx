"use client";

import Section from "../Section";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const COMPARISON_DATA = [
  {
    feature: "Czas trwania kursu",
    typical: "Zazwyczaj 3-6 miesięcy.",
    bajer: "Gwarantujemy 3 jazdy tygodniowo. Czas kursu to zazwyczaj 1-1.5 miesiąca.",
  },
  {
    feature: "Jakość nauczania",
    typical: "Stare auta, słabe przygotowanie, zestresowani kursanci.",
    bajer: "Indywidualne podejście, najnowsze auta i świetne opinie na Google.",
  },
  {
    feature: "Dodatkowe koszty",
    typical: "Koszty kolejnych egzaminów, materiałów dodatkowych.",
    bajer: "Brak ukrytych kosztów. Wszystkie materiały w cenie. Raty 0%.",
  },
  {
    feature: "Podejście",
    typical: "Krzyki, brak zrozumienia dla błędów i niepotrzebne nerwy.",
    bajer: "Podejście partnerskie i koleżeńskie. Brak stresu, tłumaczymy do skutku.",
  },
];

export default function Comparison() {
  return (
    <Section
      id="roznice"
      variant="dark"
      subtitle="Czym się różnimy"
      title="Zasługujesz na więcej niż 'typowa' szkoła."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Typical Schools */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="p-4 bg-white/5 border-l-4 border-white/20 mb-8">
            <h3 className="text-2xl font-heading font-black text-white/40 uppercase tracking-widest flex items-center gap-4">
              <X className="w-8 h-8 text-racing-red" />
              "Typowa" Szkoła
            </h3>
          </div>
          
          <div className="space-y-4">
            {COMPARISON_DATA.map((item, index) => (
              <div key={index} className="p-6 bg-asphalt-800 border-l border-white/5 group hover:bg-white/5 transition-colors">
                <h4 className="font-heading font-black text-white/60 text-xs uppercase tracking-widest mb-2">{item.feature}</h4>
                <p className="text-white/40 font-body italic flex items-start gap-3">
                  <X className="w-5 h-5 text-racing-red shrink-0 mt-1" />
                  <span>{item.typical}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Jazda z Bajerem */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="p-4 bg-premium-gold/10 border-l-4 border-premium-gold mb-8">
            <h3 className="text-2xl font-heading font-black text-premium-gold uppercase tracking-widest flex items-center gap-4">
              <Check className="w-8 h-8 text-premium-gold" />
              Jazda z Bajerem
            </h3>
          </div>
          
          <div className="space-y-4">
            {COMPARISON_DATA.map((item, index) => (
              <div key={index} className="p-6 bg-premium-gold/5 border-l border-premium-gold/20 hover:bg-premium-gold/10 transition-colors shadow-2xl shadow-premium-gold/5">
                <h4 className="font-heading font-black text-premium-gold text-xs uppercase tracking-widest mb-2">{item.feature}</h4>
                <p className="text-white font-body font-medium flex items-start gap-3">
                  <Check className="w-5 h-5 text-premium-gold shrink-0 mt-1" />
                  <span>{item.bajer}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20 p-10 bg-asphalt-800 border border-white/5 rounded-sm max-w-4xl mx-auto shadow-2xl">
        <p className="text-2xl font-body italic text-white/80 leading-relaxed text-center">
          "Nie idź tam, gdzie jesteś tylko kolejnym numerkiem. Wybierz jakość, która oszczędzi Ci czasu i stresu."
        </p>
      </div>
    </Section>
  );
}
