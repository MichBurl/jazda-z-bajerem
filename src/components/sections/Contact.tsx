"use client";

import Section from "../Section";
import { Phone, Mail, MapPin, Clock, Send, Ticket } from "lucide-react";
import Button from "../Button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section id="kontakt" variant="light" title="Skontaktuj się z nami">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic">
              Zadzwoń, napisz lub <span className="text-racing-red">wpadnij na kawę.</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start p-6 bg-white border border-asphalt-900/5 rounded-sm">
                <Phone className="w-6 h-6 text-racing-red shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">Telefony</h4>
                  <p className="text-asphalt-900/60 font-body">572 303 572</p>
                  <p className="text-asphalt-900/60 font-body">517 173 163</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-white border border-asphalt-900/5 rounded-sm">
                <Mail className="w-6 h-6 text-racing-red shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">E-mail</h4>
                  <p className="text-asphalt-900/60 font-body">jazdazbajerem@gmail.com</p>
                  <p className="text-asphalt-900/60 font-body">asaboffice@gmail.com</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-white border border-asphalt-900/5 rounded-sm">
                <MapPin className="w-6 h-6 text-racing-red shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">Adres</h4>
                  <p className="text-asphalt-900/60 font-body">
                    ul. Bobrowskiego 15 / przełączka<br />
                    31-552 Kraków
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-white border border-asphalt-900/5 rounded-sm">
                <Clock className="w-6 h-6 text-racing-red shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">Biuro</h4>
                  <p className="text-asphalt-900/60 font-body">Pn - Pt: 08:30 - 15:00</p>
                  <p className="text-xs text-asphalt-900/40 mt-1 italic">* Prosimy o kontakt przed wizytą</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Voucher Info */}
          <div className="p-8 bg-asphalt-900 text-white rounded-sm relative overflow-hidden group">
            <Ticket className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-racing-red/10 transition-colors duration-700" />
            <h3 className="text-2xl font-heading font-black uppercase mb-4 italic">Vouchery Podarunkowe</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Szukasz prezentu? Podaruj kurs prawa jazdy lub pakiet doszkalający. Vouchery dostępne w biurze lub wysyłkowo!
            </p>
            <Button variant="outline" size="sm">Dowiedz się więcej</Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 shadow-2xl border border-asphalt-900/5 rounded-sm">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/40">Imię i Nazwisko</label>
              <input 
                type="text" 
                className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body"
                placeholder="Jan Kowalski"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/40">E-mail</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body"
                  placeholder="twoj@email.pl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/40">Telefon</label>
                <input 
                  type="tel" 
                  className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body"
                  placeholder="+48 000 000 000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/40">Wiadomość</label>
              <textarea 
                rows={4}
                className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body resize-none"
                placeholder="W czym możemy pomóc?"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full group">
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Wyślij wiadomość
            </Button>
            
            <p className="text-[10px] text-asphalt-900/30 text-center leading-relaxed">
              Klikając wyślij, akceptujesz naszą politykę prywatności. Twoje dane są bezpieczne i zostaną użyte wyłącznie do kontaktu w sprawie szkoły jazdy.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
