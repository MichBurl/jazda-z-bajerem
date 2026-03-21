import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin - Szkoła Jazdy Kraków Bajer",
  description: "Zasady świadczenia usług szkoleniowych w Kraków Bajer Intercontinental. Poznaj zasady kursów, płatności i obowiązków kursanta.",
};

export default function Rules() {
  return (
    <main className="pt-24 pb-16">
      <Section variant="light" title="Regulamin">
        <div className="max-w-4xl mx-auto prose prose-asphalt">
          <p className="text-lg text-asphalt-900/70 mb-8 italic">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">1. Postanowienia Ogólne</h2>
              <p>
                Niniejszy regulamin określa zasady korzystania z usług świadczonych przez firmę <strong>Andrzej Bajer Ośrodek Szkolenia Kierowców BAJER INTERCONTINENTAL</strong>, 
                z siedzibą w Krakowie, ul. Stefana Bobrowskiego 15/14, 31-552 Kraków, NIP: 6751329206.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">2. Proces Szkolenia</h2>
              <p>Kursant zobowiązuje się do:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dostarczenia numeru PKK przed rozpoczęciem zajęć praktycznych.</li>
                <li>Uczestnictwa w części teoretycznej i praktycznej zgodnie z wypracowanym harmonogramem.</li>
                <li>Poinformowania o ewentualnej nieobecności na jazdach z co najmniej 24-godzinnym wyprzedzeniem. Niepoinformowanie w tym terminie skutkuje uznaniem jazdy za przeprowadzoną (płatną).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">3. Płatności i Rozliczenia</h2>
              <p>Opłaty za szkolenie są uiszczane zgodnie z aktualnym cennikiem dostępnym na stronie internetowej.</p>
              <p className="font-bold text-racing-red mt-4 underline decoration-premium-gold/30 underline-offset-4">Bank i numer konta do przelewów:</p>
              <div className="bg-asphalt-900/5 p-6 rounded-sm border-l-4 border-racing-red mt-4">
                <p className="font-heading font-bold text-asphalt-900 uppercase mb-2">Andrzej Bajer Ośrodek Szkolenia Kierowców BAJER INTERCONTINENTAL</p>
                <p className="text-xl font-heading font-black text-asphalt-900 font-mono">OSK BAJER: 36 1050 1445 1000 0092 2733 2559</p>
              </div>
              <p className="mt-4">Oferujemy możliwość płatności w <strong>ratach 0%</strong> – szczegóły ustalane są indywidualnie przed rozpoczęciem kursu.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">4. Rezygnacja i Przerwanie Kursu</h2>
              <p>
                W przypadku rezygnacji z kursu przed jego zakończeniem, szkoła zwraca uiszczoną opłatę pomniejszoną o koszty już przeprowadzonych godzin teorii, praktyki oraz opłaty administracyjne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">5. Reklamacje</h2>
              <p>
                Wszelkie reklamacje dotyczące usług świadczonych przez OSK Bajer prosimy zgłaszać drogą e-mailową na adres: 
                <a href="mailto:jazdazbajerem@gmail.com" className="text-racing-red hover:underline ml-1">jazdazbajerem@gmail.com</a>. Termin rozpatrzenia reklamacji wynosi 14 dni.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
