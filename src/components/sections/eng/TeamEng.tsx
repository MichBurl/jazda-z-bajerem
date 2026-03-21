"use client";

import Section from "../../Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamEng() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <Section id="team" variant="light" title="Our Professional Crew" subtitle="Instructors">
      <div className="space-y-32">
        {/* Dawid */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border-4 border-white">
              <Image
                src={`${basePath}/images/Team/14/dawid.png`}
                alt="Dawid Borkowski"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex-grow space-y-6">
            <div>
              <h3 className="text-4xl font-heading font-black text-asphalt-900 uppercase italic mb-2">
                Dawid Borkowski
              </h3>
              <p className="text-racing-red font-heading font-bold text-sm tracking-widest uppercase">
                Senior Instructor
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic">"Hello brothers and sisters!"</h4>
              <p className="text-asphalt-900/80 font-body text-lg leading-relaxed">
                I’m David, the most experienced driving instructor for foreigners in Krakow. I have taught students from over 100 countries. I am always excited to meet new learners from different cultures.
              </p>
              <p className="text-asphalt-900/80 font-body text-lg leading-relaxed">
                I specialise in helping people with a licence but little experience, including those from right-hand drive countries like India, UK, or Australia.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Joanna */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row-reverse gap-12 items-center"
        >
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border-4 border-white">
              <Image
                src={`${basePath}/images/Team/14/joanna.png`}
                alt="Joanna Serejuk"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex-grow space-y-6">
            <div>
              <h3 className="text-4xl font-heading font-black text-asphalt-900 uppercase italic mb-2">
                Joanna Serejuk
              </h3>
              <p className="text-racing-red font-heading font-bold text-sm tracking-widest uppercase">
                Office & Logistics
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-asphalt-900/80 font-body text-lg leading-relaxed">
                Joanna coordinates and organizes office work at Bajer Intercontinental. She supervises the driving improvement classes and ensures everything runs smoothly for our students.
              </p>
              <p className="text-asphalt-900/80 font-body text-xl leading-relaxed italic border-l-4 border-racing-red pl-6 bg-off-white py-4 pr-4">
                "If you have any doubts or questions about the driving course or refresher lessons, please contact me."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
