import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";
import { CheckCircle2, History, Target, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "O Nas - Szkoła Jazdy Kraków Bajer | Poznaj naszą pasję",
  description: "Dowiedz się więcej o krakowskiej szkole jazdy Bajer. Nie produkujemy kierowców z taśmy, tworzymy pewnych siebie uczestników ruchu. Sprawdź naszą historię!",
};

export default function AboutUs() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section
        variant="dark"
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2-scaled.jpg"
            alt="Nasza pasja do jazdy"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-asphalt-900/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block font-heading font-black text-racing-red uppercase tracking-widest text-sm mb-6 border-l-4 border-racing-red pl-4">
            Poznaj naszą historię
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-8 uppercase italic">
            NIE PRODUKUJEMY KIEROWCÓW Z TAŚMY. <span className="text-racing-red">TWORZYMY PEWNYCH SIEBIE</span> UCZESTNIKÓW RUCHU.
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-2xl">
            Krakowska szkoła prawa jazdy, w której rządzisz Ty, a nie stres. Egzamin z nami to pestka, uczymy szybko i bezstresowo.
          </p>
        </div>
      </Section>

      {/* History & Philosophy */}
      <Section variant="light" title="Tutaj pracujemy z pasji">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-asphalt-900/80 font-body text-lg leading-relaxed">
            <p>
              Nauki jazdy uczymy od lat 90. To wtedy Andrzej Bajer założył Bajer – na początku jako małą, jednoosobową szkołę. Z czasem, dzięki świetnym opiniom, przerodziło się to w to, czym jesteśmy dzisiaj.
            </p>
            <p className="font-bold text-asphalt-900">
              Nasza filozofia jest prosta: "Nie jeździmy z Wami, my z Wami to tworzymy".
            </p>
            <p>
              Większość szkół skupia się tylko na tym, byś "zdał i poszedł". My diagnozujemy Twoje słabe punkty i od razu je korygujemy. Uczymy Cię wyjeżdżać z poślizgu i radzić sobie na najtrudniejszych krakowskich rondach.
            </p>
            <div className="pt-6">
              <Button href="/cennik">Zobacz ofertę</Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/2-scaled.jpg"
              alt="Jazda z pasją"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why Us? */}
      <Section variant="asphalt" title="Dlaczego My?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "3 jazdy w tygodniu",
              desc: "Jako jedyni w Krakowie gwarantujemy taką intensywność w standardzie.",
            },
            {
              title: "Dostosowujemy się do Ciebie",
              desc: "Umawiaj jazdy tak, jak Ci pasuje. To my jesteśmy dla Ciebie.",
            },
            {
              title: "Płyta poślizgowa",
              desc: "Nauczysz się panować nad autem w poślizgu – to jak taniec na lodzie!",
            },
            {
              title: "Raty 0%",
              desc: "Życie jest zbyt krótkie na stres. Płać w ratach bez dodatkowych kosztów.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-asphalt-900 border border-white/5 rounded-sm">
              <h3 className="text-racing-red font-heading font-black uppercase text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Step by Step */}
      <Section variant="light" title="Jak zacząć? (Krok po kroku)">
        <div className="max-w-3xl mx-auto flex flex-col gap-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] top-4 bottom-4 w-px bg-asphalt-900/10 hidden md:block" />
          
          {[
            { step: 1, title: "Lekarz i badania", desc: "My umawiamy wizytę, jeśli nie masz swojego lekarza." },
            { step: 2, title: "PKK - Profil Kierowcy", desc: "Udałeś się do Urzędu Miasta z badaniami i zdjęciem." },
            { step: 3, title: "Kurs teoretyczny", desc: "Nasze wykłady (30h) lub nauka własna z aplikacją." },
            { step: 4, title: "Kurs praktyczny", desc: "30h jazd w ruchu miejskim i na placu (Kat. B)." },
            { step: 5, title: "Egzaminy", desc: "Bezstresowy egzamin wewnętrzny, potem państwowy w MORD." },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start relative z-10 group">
              <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-racing-red flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-xl font-heading font-black text-racing-red">
                  0{item.step}
                </span>
              </div>
              <div className="pt-2">
                <h4 className="font-heading font-black text-asphalt-900 uppercase text-xl mb-3 italic">
                  {item.title}
                </h4>
                <p className="text-asphalt-900/60 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/#kontakt" variant="gold" size="lg">Zacznij już dziś!</Button>
        </div>
      </Section>
    </main>
  );
}
