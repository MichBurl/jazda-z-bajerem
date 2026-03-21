"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Video, Phone, Mail, MapPin, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  const content = {
    tagline: isEn 
      ? '"We don\'t just drive with you, we create it with you." Experts in fast courses and safe driving in Krakow.'
      : '"Nie jeździmy z Wami, my z Wami to tworzymy." Eksperci od szybkich kursów i bezpiecznej jazdy w Krakowie.',
    hotline: isEn ? "Hotline" : "Infolinia",
    quickLinks: isEn ? "Quick Links" : "Na skróty",
    contact: isEn ? "Contact" : "Kontakt",
    office: isEn ? "Office" : "Biuro",
    officeNote: isEn 
      ? "* We are not always on-site, please contact us by phone before visiting."
      : "* Nie zawsze jesteśmy na miejscu, prosimy o kontakt telefoniczny przed wizytą.",
    rights: isEn 
      ? `© ${new Date().getFullYear()} Bajer Driving School. All rights reserved.`
      : `© ${new Date().getFullYear()} Bajer Szkoła Jazdy. Wszelkie prawa zastrzeżone.`,
    links: isEn 
      ? [
          { name: "Pricing", href: "/en/cennik" },
          { name: "About us", href: "/en/o-nas" },
          { name: "Sign up", href: "/en/#kontakt" },
        ]
      : [
          { name: "Cennik", href: "/cennik" },
          { name: "O nas", href: "/o-nas" },
          { name: "Zapisz się", href: "/#kontakt" },
        ]
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const logoSrc = isEn ? `${basePath}/images/eng-images/logo-eng.webp` : `${basePath}/images/logo.webp`;

  return (
    <footer className="bg-asphalt-900 text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="relative w-24 h-24">
              <Image
                src={logoSrc}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-body italic">
              {content.tagline}
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs uppercase tracking-widest text-white/30 font-bold">{content.hotline}</span>
              <a href="tel:+48572303572" className="text-white font-heading font-black text-xl hover:text-racing-red transition-colors">572 303 572</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/szkola.jazdy.bajer.krakow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-racing-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/bajer_intercontinental_jazda" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-racing-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@bajer_intercontinental" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-racing-red transition-colors" aria-label="TikTok">
                <Video size={20} />
              </a>
              <a href="https://youtube.com/%40BajerIntercontinental" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-racing-red transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-racing-red">
              {content.quickLinks}
            </h4>
            <ul className="space-y-4">
              {content.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-racing-red">
              {content.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-premium-gold shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 flex flex-col gap-1">
                  <a href="tel:+48572303572" className="hover:text-white transition-colors">572 303 572</a>
                  <a href="tel:+48517173163" className="hover:text-white transition-colors">517 173 163</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-premium-gold shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 flex flex-col gap-1">
                  <a href="mailto:jazdazbajerem@gmail.com" className="hover:text-white transition-colors">jazdazbajerem@gmail.com</a>
                  <a href="mailto:asaboffice@gmail.com" className="hover:text-white transition-colors">asaboffice@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-premium-gold shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=ul.+Bobrowskiego+15+Kraków" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  ul. Bobrowskiego 15 / przełączka<br />
                  31-552 Kraków
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-racing-red">
              {content.office}
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={18} className="text-premium-gold shrink-0 mt-0.5" />
              <div className="text-sm text-white/60">
                <p className="font-bold text-white mb-1">{isEn ? "Mon - Fri" : "Pn - Pt"}</p>
                <p>08:30 - 15:00</p>
              </div>
            </div>
            <p className="text-xs text-white/60 italic">
              {content.officeNote}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>{content.rights}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">{isEn ? "Privacy Policy" : "Polityka Prywatności"}</Link>
            <Link href="#" className="hover:text-white transition-colors">{isEn ? "Terms" : "Regulamin"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
