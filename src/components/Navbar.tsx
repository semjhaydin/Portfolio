"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Download, Mail } from "lucide-react";

const navItems = [
  { name: "Hakkımda", href: "#about" },
  { name: "Deneyim", href: "#experience" },
  { name: "Projeler", href: "#projects" },
  { name: "Sertifikalar", href: "#certificates" },
  { name: "Motor Sporları", href: "#motorsport" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/60 p-1 flex items-center justify-center group-hover:border-cyan-500/60 transition-colors">
              <Image
                src="/logowhitetrans-small.png"
                alt="Semih Aydın Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                Semih Aydın
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Computer Engineering Student
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/sertificates/SemihAydinResume20-05-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 hover:border-cyan-500/50 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              CV (PDF)
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              İletişim
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-2 space-y-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-200 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/sertificates/SemihAydinResume20-05-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-medium py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              CV İndir (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
