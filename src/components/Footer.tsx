"use client";

import Image from "next/image";
import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080D] relative z-10 py-12 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
              <Image
                src="/logowhitetrans-small.png"
                alt="Semih Aydın Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Semih Aydın</div>
              <div className="text-[11px] text-slate-400 font-mono">
                Computer Engineering Student @ Trabzon Üniversitesi
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Hakkımda</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Deneyim</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projeler</a>
            <a href="#certificates" className="hover:text-cyan-400 transition-colors">Sertifikalar</a>
            <a href="#motorsport" className="hover:text-cyan-400 transition-colors">Sim Racing</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">İletişim</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/semjhaydin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/semihaydin61/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/arkakanat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-pink-400 transition-colors"
              aria-label="Instagram Arka Kanat"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Yukarı Çık"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Semih Aydın. Tüm hakları saklıdır. Trabzon Üniversitesi.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer">Gizlilik Bildirimi</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Çerez Politikası</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
