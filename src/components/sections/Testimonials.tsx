"use client";

import Section from "../Section";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Marta",
    text: "Nim się zapisałam na prawo jazdy, miałam duże opory związane ze stresem. Szkołę jazdy Bajer wyszukałam w internecie kierując się opiniami. Pan Andrzej rozwiał moje wszystkie wątpliwości. Pomoc na każdym szczeblu jest ogromna. Zdałem za drugim razem, ale Andrzej powtarzał że najlepsi kierowcy zdają za drugim razem!",
    rating: 5,
  },
  {
    name: "Klaudia",
    text: "Niesamowite, jak zmieniło się moje podejście w trakcie kursu. Jeśli szukacie ludzi z pasją i zaangażowaniem, to trafiliście idealnie. Pokochałam moją czerwoną strzałę! Kontakt z tymi ludźmi to czysta przyjemność.",
    rating: 5,
  },
  {
    name: "Paulina",
    text: "Najlepsza szkoła jazdy. Andrzej i Dawid mają bardzo dużo cierpliwości. Po 30h zdałam prawko za 1 razem! Pani Asia niesamowita osoba, zawsze ustala jazdy tak aby były dopasowane pod kursanta. Polecam z całego serduszka!",
    rating: 5,
  },
  {
    name: "Eryk",
    text: "Trzecia szkoła jazdy, z której korzystałem. Już podczas pierwszej lekcji nauczyłem się więcej niż na wszystkich wcześniejszych razem wziętych. Merytoryka i skupienie na celu. Pozdrawiam Dawida, Andrzeja i Asię!",
    rating: 5,
  },
  {
    name: "Piotr",
    text: "Zdecydowanie polecam instruktora Dawida. Jazdy prowadzone spokojnie, bez stresu, wszystko jasno tłumaczone. Dawid ma ogromną cierpliwość i realnie przygotowuje do jazdy w życiu, nie tylko do egzaminu. Gdybym miał wybierać jeszcze raz - bez wahania.",
    rating: 5,
  },
];

export default function Testimonials() {
  // Triple the reviews for a truly seamless infinite marquee on all screen sizes
  const tripledReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <Section
      id="opinie"
      variant="dark"
      subtitle="Opinie z Google Maps"
      title="Zaufaj tym, którzy już zdali."
      centered
    >
      <div className="relative overflow-hidden py-12 -mx-4 md:-mx-6 cursor-pointer group">
        {/* Infinite Marquee Container */}
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: [0, "-33.3333%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ willChange: "transform" }}
          whileHover={{ 
            animationPlayState: "paused" 
          }}
        >
          {tripledReviews.map((review, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[450px] p-8 bg-asphalt-800 border border-white/5 rounded-sm relative flex flex-col justify-between h-[340px] shrink-0 hover:bg-asphalt-700 transition-colors duration-300 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-premium-gold fill-premium-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Google</span>
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5">
                      <svg viewBox="0 0 24 24" className="w-full h-full text-[#4285F4] fill-current">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <Quote className="absolute top-12 right-6 w-20 h-20 text-white/5 pointer-events-none" />
                
                <p className="text-white/75 italic font-body mb-8 leading-relaxed relative z-10 text-sm md:text-base line-clamp-6">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-racing-red flex items-center justify-center font-heading font-black text-white text-sm shadow-inner uppercase">
                  {review.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-white uppercase tracking-wider text-sm">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Zweryfikowany kursant</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Decorative Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-asphalt-900 via-asphalt-900/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-asphalt-900 via-asphalt-900/40 to-transparent z-10 pointer-events-none" />
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://www.google.com/search?q=BAJER+INTERCONTINENTAL+-+Szko%C5%82a+nauki+jazdy+Krak%C3%B3w" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center group"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-premium-gold fill-premium-gold" />
              ))}
            </div>
            <p className="text-white/40 text-sm italic group-hover:text-premium-gold transition-colors">
              (Google Maps: 5.0/5 gwiazdek)
            </p>
          </div>
          <span className="text-xs font-heading font-black text-racing-red uppercase tracking-[0.4em] border-b-2 border-racing-red pb-2 group-hover:tracking-[0.5em] transition-all">
            Zobacz wszystkie opinie
          </span>
        </a>
      </div>
    </Section>
  );
}
