'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ChevronRight } from 'lucide-react';

const HeroEng = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-asphalt-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/lusterko1.jpg`}
          alt="Driving lesson mirror"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900 via-asphalt-900/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl">
          <div className="lg:max-w-3xl">
            <div className="mb-12 text-center lg:text-left">
              <span className="inline-block font-heading font-black text-racing-red uppercase tracking-[0.3em] text-sm md:text-base mb-6 border-l-4 border-racing-red pl-4">
                Driving School Krakow
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.9] mb-8 uppercase italic tracking-tighter opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                DRIVING COURSE<br />
                <span className="text-transparent stroke-text">IN ENGLISH</span> <span className="text-racing-red relative">
                  KRAKOW
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-premium-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl lg:text-xl max-w-2xl leading-relaxed opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                Get Your Driving License in Krakow. <span className="text-white font-bold">Courses in English</span> especially for foreigners. 
                We handle all the documentation for you!
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <div className="md:hidden w-full space-y-3">
                <Button href="#kontakt" size="md" className="w-full">
                  Sign up now
                </Button>
                <Button variant="outline" size="md" href="#oferta" className="w-full group">
                  <ChevronRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Learn more
                </Button>
              </div>
              
              <div className="hidden md:flex gap-4">
                <Button href="#kontakt" size="lg">
                  Sign up now
                </Button>
                <Button variant="outline" size="lg" href="#oferta" className="group">
                  <ChevronRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Learn more
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Mascot removed for EN version per user request */}
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
};

export default HeroEng;
