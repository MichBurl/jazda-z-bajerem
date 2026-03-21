"use client";

import Section from "../../Section";
import Button from "../../Button";

export default function ProcessEng() {
  return (
    <Section id="process" variant="dark" title="How to Start" subtitle="Simple Enrollment" centered>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl text-white/80 leading-relaxed font-body italic mb-12">
          "Getting your license in Poland doesn't have to be complicated. Our team handles the bureaucracy so you can focus on driving."
        </p>
        <Button href="#kontakt" size="lg" variant="gold">
          Contact and ask us
        </Button>
      </div>
    </Section>
  );
}
