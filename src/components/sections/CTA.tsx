"use client";

import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";

export default function CTA() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <section id="zapisz-sie" className="relative py-24 md:py-40 overflow-hidden bg-asphalt-900 px-4 md:px-6">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${basePath}/images/lusterko1.webp`}
          alt="Twoja droga do prawa jazdy"
          fill
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-asphalt-900/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt-900 via-asphalt-900/80 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 uppercase italic leading-tight">
              SKONTAKTUJ SIĘ<br />
              <span className="text-racing-red">Z NAMI.</span><br />
              CZAS NA TWÓJ RUCH.
            </h2>
            
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
              Zacznij swoją przygodę za kierownicą z najlepszymi instruktorami w Krakowie. Profesjonalne szkolenie, które daje realne umiejętności i pewność siebie.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button href="#kontakt" size="lg" variant="primary">
                Zapisz się teraz
              </Button>
              <Button href="/cennik" size="lg" variant="outline">
                Zobacz pełną ofertę
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-white/40">
              <div className="w-12 h-px bg-white/20" />
              <p className="text-sm font-body uppercase tracking-[0.2em]">
                Dołącz do grona zadowolonych kierowców
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
