import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Driving School Kraków Bajer",
  description: "Rules for processing personal data at Driving School Kraków Bajer. Learn more about your rights and data security.",
};

export default function PrivacyPolicyEng() {
  return (
    <main className="pt-24 pb-16">
      <Section variant="light" title="Privacy Policy">
        <div className="max-w-4xl mx-auto prose prose-asphalt">
          <p className="text-lg text-asphalt-900/70 mb-8 italic">
            Last update: {new Date().toLocaleDateString('en-US')}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">1. Data Administrator</h2>
              <p>
                The administrator of your personal data is <strong>Andrzej Bajer Ośrodek Szkolenia Kierowców BAJER INTERCONTINENTAL</strong> located in Krakow, 
                ul. Stefana Bobrowskiego 15/14, 31-552 Kraków, Poland, NIP: 6751329206.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">2. Purpose of Data Processing</h2>
              <p>Personal data is processed for the purpose of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizing the registration process for the driving course (including generating the PKK number).</li>
                <li>Maintaining training documentation required by law.</li>
                <li>Contacting the student regarding the driving schedule and exams.</li>
                <li>Realizing financial settlements and tax obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">3. Scope of Processed Data</h2>
              <p>We process data necessary for the service, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>First and last name</li>
                <li>PESEL number (or date of birth/passport number for foreigners)</li>
                <li>Address of residence</li>
                <li>Phone number</li>
                <li>E-mail address</li>
                <li>Image (for internal documentation purposes, if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">4. Your Rights</h2>
              <p>According to GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your data and receive a copy of it.</li>
                <li>Rectify (correct) your data.</li>
                <li>Delete data (to the extent that it is not necessary for the fulfillment of legal obligations).</li>
                <li>Restrict data processing.</li>
                <li>File a complaint with the President of the Personal Data Protection Office.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic mb-4">5. Contact</h2>
              <p>
                In all matters related to the protection of personal data, you can contact us at: 
                <a href="mailto:jazdazbajerem@gmail.com" className="text-racing-red hover:underline ml-1">jazdazbajerem@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
