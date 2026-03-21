import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Driving School Kraków Bajer",
  description: "Rules for providing training services at Kraków Bajer Intercontinental. Learn about course rules, payments, and student obligations.",
};

export default function RulesEng() {
  return (
    <main className="pt-24 pb-16">
      <Section variant="light" title="Terms & Conditions">
        <div className="max-w-4xl mx-auto prose prose-asphalt">
          <p className="text-lg text-asphalt-900/70 mb-8 italic">
            Last update: {new Date().toLocaleDateString('en-US')}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">1. General Provisions</h2>
              <p>
                These terms and conditions define the rules for using services provided by <strong>Andrzej Bajer Ośrodek Szkolenia Kierowców BAJER INTERCONTINENTAL</strong>, 
                based in Krakow, ul. Stefana Bobrowskiego 15/14, 31-552 Kraków, Poland, NIP: 6751329206.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">2. Training Process</h2>
              <p>The student undertakes to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide the PKK number before starting practical classes.</li>
                <li>Participate in the theoretical and practical parts according to the established schedule.</li>
                <li>Inform about any absence from driving at least 24 hours in advance. Failure to inform within this period results in the lesson being considered as conducted (payable).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">3. Payments and Settlements</h2>
              <p>Fees for training are paid according to the current price list available on the website.</p>
              <p className="font-bold text-racing-red mt-4 underline decoration-premium-gold/30 underline-offset-4">Bank and account number for transfers:</p>
              <div className="bg-asphalt-900/5 p-6 rounded-sm border-l-4 border-racing-red mt-4">
                <p className="font-heading font-bold text-asphalt-900 uppercase mb-2">Andrzej Bajer Ośrodek Szkolenia Kierowców BAJER INTERCONTINENTAL</p>
                <p className="text-xl font-heading font-black text-asphalt-900 font-mono">OSK BAJER: 36 1050 1445 1000 0092 2733 2559</p>
              </div>
              <p className="mt-4">We offer the possibility of payment in <strong>0% installments</strong> – details are established individually before the start of the course.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">4. Resignation and Interruption of the Course</h2>
              <p>
                In the event of resignation from the course before its completion, the school returns the paid fee reduced by the costs of already conducted theory hours, practice hours, and administrative fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">5. Complaints</h2>
              <p>
                Any complaints regarding services provided by OSK Bajer should be submitted by e-mail to: 
                <a href="mailto:jazdazbajerem@gmail.com" className="text-racing-red hover:underline ml-1">jazdazbajerem@gmail.com</a>. The deadline for considering a complaint is 14 days.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
