import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności - Szkoła Jazdy Kraków Bajer",
  description: "Zasady przetwarzania danych osobowych w Szkoła Jazdy Kraków Bajer. Dowiedz się więcej o swoich prawach i bezpieczeństwie danych.",
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 pb-16">
      <Section variant="light" title="Polityka Prywatności">
        <div className="max-w-4xl mx-auto prose prose-asphalt">
          <p className="text-lg text-asphalt-900/70 mb-8 italic">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">1. Administrator Danych</h2>
              <p>
                Administratorem Twoich danych osobowych jest <strong>Andrzej Bajer Ośrodek Szkolenia Kierowców BAJER INTERCONTINENTAL</strong> z siedzibą w Krakowie, 
                ul. Stefana Bobrowskiego 15/14, 31-552 Kraków, NIP: 6751329206.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">2. Cel Przetwarzania Danych</h2>
              <p>Dane osobowe są przetwarzane w celu:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizacji procesu zapisu na kurs prawa jazdy (w tym generowania numeru PKK).</li>
                <li>Prowadzenia dokumentacji szkoleniowej wymaganej przez przepisy prawa.</li>
                <li>Kontaktu z kursantem w sprawach dotyczących harmonogramu jazd i egzaminów.</li>
                <li>Realizacji rozliczeń finansowych i obowiązków podatkowych.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">3. Zakres Przetwarzanych Danych</h2>
              <p>Przetwarzamy dane niezbędne do realizacji usługi, takie jak:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Imię i nazwisko</li>
                <li>Numer PESEL</li>
                <li>Adres zamieszkania</li>
                <li>Numer telefonu</li>
                <li>Adres e-mail</li>
                <li>Wizerunek (na potrzeby dokumentacji wewnętrznej, jeśli dotyczy)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">4. Twoje Prawa</h2>
              <p>Zgodnie z RODO przysługuje Ci prawo do:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
                <li>Sprostowania (poprawiania) swoich danych.</li>
                <li>Usunięcia danych (w zakresie, w jakim nie są niezbędne do realizacji obowiązków prawnych).</li>
                <li>Ograniczenia przetwarzania danych.</li>
                <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">5. Kontakt</h2>
              <p>
                We wszelkich sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami pod adresem: 
                <a href="mailto:jazdazbajerem@gmail.com" className="text-racing-red hover:underline ml-1">jazdazbajerem@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
