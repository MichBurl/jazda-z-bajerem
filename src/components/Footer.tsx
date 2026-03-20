import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Video, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-asphalt-900 text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="relative w-24 h-24">
              <Image
                src="/images/logo.png"
                alt="Logo Jazda z Bajerem"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-body italic">
              "Nie jeździmy z Wami, my z Wami to tworzymy." Eksperci od szybkich kursów i bezpiecznej jazdy w Krakowie.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs uppercase tracking-widest text-white/30 font-bold">Infolinia</span>
              <a href="tel:+48572303572" className="text-white font-heading font-black text-xl hover:text-racing-red transition-colors">572 303 572</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/szkola.jazdy.bajer.krakow" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-racing-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/bajer_intercontinental_jazda" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-racing-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@bajer_intercontinental" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-racing-red transition-colors">
                <Video size={20} />
              </a>
              <a href="https://youtube.com/%40BajerIntercontinental" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-racing-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-racing-red">
              Na skróty
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/cennik" className="text-white/60 hover:text-white transition-colors text-sm">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-white/60 hover:text-white transition-colors text-sm">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="text-white/60 hover:text-white transition-colors text-sm">
                  Zapisz się
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-racing-red">
              Kontakt
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
              Biuro
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={18} className="text-premium-gold shrink-0 mt-0.5" />
              <div className="text-sm text-white/60">
                <p className="font-bold text-white mb-1">Pn - Pt</p>
                <p>08:30 - 15:00</p>
              </div>
            </div>
            <p className="text-xs text-white/40 italic">
              * Nie zawsze jesteśmy na miejscu, prosimy o kontakt telefoniczny przed wizytą.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bajer Szkoła Jazdy. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Polityka Prywatności</Link>
            <Link href="#" className="hover:text-white transition-colors">Regulamin</Link>
            <Link href="#" className="hover:text-white transition-colors">Standardy Ochrony Małoletnich</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
