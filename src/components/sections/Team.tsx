"use client";

import Section from "../Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Shield, UserCheck } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const TEAM = [
  {
    name: "Andrzej Bajer",
    role: "Instruktor Nauki Jazdy / Założyciel",
    image: `${basePath}/images/Team/14/andrzej-bajer.png`,
    description: "Instruktor z wieloletnim stażem, uczy od lat 90. Znany ze spokoju i anielskiej cierpliwości. Zawsze uśmiechnięty, tłumaczy wszelkie zawiłości ruchu drogowego bez stresu.",
    icon: <Award className="w-5 h-5 text-racing-red" />,
  },
  {
    name: "Joanna Serejuk",
    role: "Specjalistka ds. Administracyjnych",
    image: `${basePath}/images/Team/14/joanna.png`,
    description: "Dba o to, żeby wszystko w Bajerze działało jak w zegarku. Twoja osobista przewodniczka – przypomni Ci o jazdach i poprowadzi przez formalności jak mama na wycieczkę szkolną.",
    icon: <Shield className="w-5 h-5 text-racing-red" />,
  },
  {
    name: "Dawid Borkowski",
    role: "Instruktor Nauki Jazdy",
    image: `${basePath}/images/Team/14/dawid.png`,
    description: "Młody i ambitny instruktor, który z zapałem podchodzi do pracy. Specjalizuje się w trudnych przypadkach – dla niego nie ma kursanta, którego nie da się nauczyć jeździć.",
    icon: <UserCheck className="w-5 h-5 text-racing-red" />,
  },
];

export default function Team() {
  return (
    <Section
      id="zespol"
      variant="light"
      subtitle="Poznaj Nasz Zespół"
      title="Nie jeździmy z Wami, my z Wami to tworzymy."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TEAM.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8">
              {/* Circular mask and border animation */}
              <div className="absolute inset-0 rounded-full border-4 border-racing-red/10 group-hover:border-racing-red transition-colors duration-500 scale-105" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Icon Badge */}
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg border border-asphalt-900/5 z-10">
                {member.icon}
              </div>
            </div>

            <div className="space-y-4 max-w-sm">
              <div>
                <h3 className="text-2xl font-heading font-black text-asphalt-900 uppercase">
                  {member.name}
                </h3>
                <p className="text-racing-red font-heading font-bold text-xs uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
              
              <p className="text-asphalt-900/70 font-body leading-relaxed">
                {member.description}
              </p>
              
              <div className="pt-4 flex justify-center gap-4">
                <div className="w-2 h-2 rounded-full bg-asphalt-900/10 group-hover:bg-racing-red transition-colors duration-300" />
                <div className="w-2 h-2 rounded-full bg-asphalt-900/10 group-hover:bg-premium-gold transition-colors duration-500 delay-100" />
                <div className="w-2 h-2 rounded-full bg-asphalt-900/10 group-hover:bg-racing-red transition-colors duration-700 delay-200" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
