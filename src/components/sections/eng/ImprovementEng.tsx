"use client";

import Section from "../../Section";
import { Zap, Trophy, Shield } from "lucide-react";
import Button from "../../Button";
import { motion } from "framer-motion";

export default function ImprovementEng() {
  return (
    <Section id="improvement" variant="asphalt" title="Driving Improvement" subtitle="Beyond the license" centered>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-xl text-white/80 leading-relaxed font-body italic mb-8">
          "If you’re interested in improving your driving skills using drag strips, Stewart tests, and rally cars under the supervision of professionals, you’ve come to the right place!"
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
            <Zap className="w-8 h-8 text-racing-red mx-auto mb-4" />
            <h4 className="font-heading font-bold text-white uppercase text-sm mb-2">Rally Cars</h4>
            <p className="text-white/40 text-xs">Train with actual motorsport competitors.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
            <Shield className="w-8 h-8 text-racing-red mx-auto mb-4" />
            <h4 className="font-heading font-bold text-white uppercase text-sm mb-2">Safety Awareness</h4>
            <p className="text-white/40 text-xs">Learn proper behavior in extreme situations.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
            <Trophy className="w-8 h-8 text-racing-red mx-auto mb-4" />
            <h4 className="font-heading font-bold text-white uppercase text-sm mb-2">Certificates</h4>
            <p className="text-white/40 text-xs">Receive a certificate for every completed class.</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button size="lg">Inquire for details</Button>
      </div>
    </Section>
  );
}
