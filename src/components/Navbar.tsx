"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "O NAS", href: "/o-nas" },
  { name: "OFERTA", href: "/#oferta" },
  { name: "CENNIK", href: "/cennik" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isHome = pathname === "/";
  const navBg = (!isHome || scrolled) 
    ? "bg-asphalt-900 py-4 shadow-2xl border-b border-white/5" 
    : "bg-transparent py-6";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="relative block"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading font-bold text-sm uppercase tracking-widest text-white hover:text-racing-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            target="_blank"
            className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            Zaloguj
          </Link>
          <Link
            href="/#kontakt"
            className="bg-racing-red text-white font-heading font-black px-8 py-3 rounded-sm text-sm uppercase tracking-tighter hover:bg-white hover:text-racing-red transition-all shadow-lg hover:shadow-racing-red/20"
          >
            Zapisz się
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-[#111111] z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Mobile Menu */}
        <button 
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={40} />
        </button>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-heading font-black text-3xl uppercase text-white hover:text-racing-red transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="font-heading font-black text-xl uppercase text-white/50"
        >
          Zaloguj
        </Link>
        <Link
          href="/#kontakt"
          onClick={() => setIsOpen(false)}
          className="bg-racing-red text-white font-heading font-black px-10 py-5 rounded-sm text-xl uppercase tracking-widest"
        >
          Zapisz się
        </Link>
      </div>
    </nav>
  );
}
