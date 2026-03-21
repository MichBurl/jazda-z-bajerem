"use client";

import Section from "../../Section";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Button from "../../Button";
import { motion } from "framer-motion";

export default function ContactEng() {
  return (
    <Section id="kontakt" variant="light" title="Get in touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-black text-asphalt-900 uppercase italic">
              Give us a call, write us or <span className="text-racing-red">visit our office.</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start p-6 bg-white border border-asphalt-900/5 rounded-sm">
                <Phone className="w-6 h-6 text-racing-red shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">Phones</h4>
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
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">Address</h4>
                  <p className="text-asphalt-900/60 font-body">
                    ul. Bobrowskiego 15 / przełączka<br />
                    31-552 Krakow
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-white border border-asphalt-900/5 rounded-sm">
                <Clock className="w-6 h-6 text-racing-red shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-asphalt-900 text-sm uppercase mb-2">Office Hours</h4>
                  <p className="text-asphalt-900/60 font-body">Mon - Fri: 08:30 - 15:00</p>
                  <p className="text-xs text-asphalt-900/60 mt-1 italic">* Please contact us before visiting</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* WhatsApp Action */}
          <div className="p-8 bg-asphalt-900 text-white rounded-sm relative overflow-hidden group">
            <MessageSquare className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-racing-red/10 transition-colors duration-700" />
            <h3 className="text-2xl font-heading font-black uppercase mb-4 italic">WhatsApp Contact</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Prefer to text? Message us on WhatsApp for a quick response!
            </p>
            <Button variant="outline" size="sm" href="https://wa.me/48572303572">Open WhatsApp</Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 shadow-2xl border border-asphalt-900/5 rounded-sm">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/60">Full Name</label>
              <input 
                type="text" 
                className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body"
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/60">E-mail</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/60">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body"
                  placeholder="+48 000 000 000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold uppercase tracking-widest text-asphalt-900/60">Message</label>
              <textarea 
                rows={4}
                className="w-full p-4 bg-off-white border border-asphalt-900/5 outline-none focus:border-racing-red/40 transition-colors font-body resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full group">
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Send message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
