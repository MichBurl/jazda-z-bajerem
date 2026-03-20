"use client";

import Image from "next/image";
import Button from "../Button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-asphalt-900 px-4 md:px-6">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jazda-z-bajerem/images/lusterko1.jpg"
          alt="Lusterko nauki jazdy"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900 via-asphalt-900/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:max-w-3xl"
          >
            <div className="mb-12 text-center lg:text-left">
              <span className="inline-block font-heading font-black text-racing-red uppercase tracking-[0.3em] text-sm md:text-base mb-6 border-l-4 border-racing-red pl-4">
                Szkoła Prawa Jazdy Kraków
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.9] mb-8 uppercase italic tracking-tighter">
                SZKOŁA JAZDY<br />
                <span className="text-transparent stroke-text">KRAKÓW</span> <span className="text-racing-red relative">
                  BAJER
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-premium-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl lg:text-xl max-w-2xl leading-relaxed">
                Egzamin z nami to pestka, uczymy szybko i bezstresowo. 
                Gwarantujemy <span className="text-white font-bold">3 jazdy w tygodniu</span> i szkolenie na płycie poślizgowej.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="md:hidden w-full space-y-3">
                <Button href="#kontakt" size="md" className="w-full">
                  Zapisz się teraz
                </Button>
                <Button variant="outline" size="md" href="#oferta" className="w-full group">
                  <ChevronRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Dowiedz się więcej
                </Button>
              </div>
              <div className="hidden md:flex gap-4 items-center">
                <Button href="#kontakt" size="lg">
                  Zapisz się teraz
                </Button>
                <Button variant="outline" size="lg" href="#oferta" className="group">
                  <ChevronRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Dowiedz się więcej
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Mascot in Hero - Adjusted Right Placement */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, x: 100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="absolute top-1/2 lg:top-[55%] xl:top-[60%] -translate-y-1/2 right-0 w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] hidden lg:block"
          >
            <Image
              src="/jazda-z-bajerem/images/logo_small.webp"
              alt="Maskotka Bajer"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(230,32,32,0.25)] select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-0 top-0 h-full w-px bg-white/10 hidden lg:block" />
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-asphalt-900 to-transparent z-10" />

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
