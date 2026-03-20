import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Check, Info, Bike, Car, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cennik - Prawo Jazdy Kraków | Szkoła Jazdy Bajer",
  description: "Atrakcyjne ceny kursów prawa jazdy w Krakowie. Kat. B, A, A1, A2. Sprawdź nasze pakiety ekspresowe i raty 0%. Żadnych ukrytych kosztów!",
};

export default function Pricing() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section variant="dark" className="text-center py-20">
        <span className="inline-block font-heading font-black text-racing-red uppercase tracking-widest text-sm mb-6 border-b-2 border-racing-red pb-2">
          Twoja inwestycja
        </span>
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase italic mb-8">
          INWESTYCJA W PEWNOŚĆ SIEBIE. <br />
          <span className="text-racing-red">PŁACISZ RAZ, A DOBRZE.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
          Tani kurs to często ukryte koszty i stracone nerwy. U nas cena odzwierciedla jakość, spokój i gwarancję najwyższego poziomu szkolenia. Płatność w ratach 0%!
        </p>
      </Section>

      {/* Category B */}
      <Section variant="light" title="Kategoria B (Samochody osobowe)">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Kurs Premium",
              price: "4949 PLN",
              desc: "Pełen kurs kat. B wraz z płytą poślizgową. Najlepszy wybór dla pewności w każdych warunkach.",
              highlight: true,
            },
            {
              title: "Kurs Podstawowy",
              price: "4600 PLN",
              oldPrice: "4700 PLN",
              desc: "Szybki, profesjonalny i bezstresowy kurs od zera do zdania egzaminu.",
            },
            {
              title: "Pakiet 10H",
              price: "1350 PLN",
              oldPrice: "1400 PLN",
              desc: "Jazdy doszkalające. Brakuje Ci pewności przed egzaminem?",
            },
            {
              title: "Jazdy 1H",
              price: "140 PLN",
              desc: "Pojedyncza godzina na rozjeżdżenie i wyeliminowanie błędów.",
            },
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-sm border-2 transition-all duration-300 hover:-translate-y-2 ${item.highlight ? "border-racing-red bg-white shadow-2xl scale-105 relative z-10" : "border-asphalt-900/10 bg-white shadow-lg hover:shadow-xl"}`}>
              {item.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-racing-red text-white text-[10px] font-black uppercase px-3 py-1.5 tracking-widest shadow-lg">Polecane</span>}
              <h3 className="font-heading font-black text-xl mb-4 uppercase text-asphalt-900">{item.title}</h3>
              <div className="mb-6">
                {item.oldPrice && <span className="text-asphalt-900/30 line-through text-sm block">{item.oldPrice}</span>}
                <span className="text-3xl font-heading font-black text-asphalt-900">{item.price}</span>
              </div>
              <p className="text-asphalt-900/70 font-medium text-sm mb-8 leading-relaxed h-20">{item.desc}</p>
              <Button href="/#kontakt" variant={item.highlight ? "primary" : "outline"} className="w-full">Zapisz się</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Motorcycle Categories */}
      <Section variant="asphalt" title="Kategorie Motocyklowe (A, A1)">
        <div className="bg-racing-red/10 border-l-4 border-racing-red p-6 mb-12">
          <p className="text-white font-heading font-black uppercase tracking-widest text-lg">
            🔥 OFERTA SPECJALNA: Do końca Maja zapisy na wszystkie kategorie motocyklowe za 3000 zł!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {[
            { title: "Kategoria A", price: "3400 zł", info: "Wiek: min. 24 lata (lub 20 przy A2)" },
            { title: "Kategoria A1", price: "3300 zł", info: "Wiek: min. 16 lat (Motocykle 125cm3)" },
            { title: "A2 na A", price: "2100 zł", info: "Podwyższenie uprawnień" },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-asphalt-900 border border-white/5 rounded-sm flex flex-col justify-between">
              <div>
                <Bike className="w-8 h-8 text-premium-gold mb-6" />
                <h3 className="text-2xl font-heading font-black mb-2 uppercase">{item.title}</h3>
                <p className="text-white/40 text-xs mb-6 uppercase tracking-widest">{item.info}</p>
              </div>
              <div className="space-y-6">
                <span className="text-3xl font-heading font-black text-white">{item.price}</span>
                <Button href="/#kontakt" variant="outline" className="w-full">Zapisz się</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Advanced Training */}
      <Section variant="light" title="Doskonalenie Techniki Jazdy">
        <div className="max-w-4xl mx-auto p-12 bg-white border border-asphalt-900/5 shadow-2xl rounded-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <ShieldCheck className="w-16 h-16 text-premium-gold mb-6" />
              <h3 className="text-3xl font-heading font-black text-asphalt-900 uppercase mb-6 italic">Płyta poślizgowa</h3>
              <p className="text-asphalt-900/70 mb-8 leading-relaxed">
                Nauczysz się panować nad autem w ślizgu – to jak taniec na lodzie, tylko za kierownicą! Godzinowy kurs indywidualny na profesjonalnej płycie poślizgowej.
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="p-6 bg-off-white flex justify-between items-center rounded-sm border-l-4 border-premium-gold">
                <span className="font-heading font-bold uppercase text-asphalt-900">Własne auto</span>
                <span className="font-heading font-black text-2xl text-asphalt-900">450 zł</span>
              </div>
              <div className="p-6 bg-off-white flex justify-between items-center rounded-sm border-l-4 border-racing-red">
                <span className="font-heading font-bold uppercase text-asphalt-900">Auto szkoły</span>
                <span className="font-heading font-black text-2xl text-asphalt-900">550 zł</span>
              </div>
              <div className="pt-4">
                <Button href="/#kontakt" className="w-full">Zamów szkolenie</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
