"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/projeler", label: "Projeler" },
    { href: "/teknolojiler", label: "Teknolojiler" },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/referanslar/sertifikalar", label: "Sertifikalar" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-6 sm:px-12 py-5 bg-[#070709]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Clean Logo */}
        <Link href="/" className="font-mono text-base font-bold tracking-widest text-white hover:text-white/80 transition-colors">
          SEMİH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive ? "text-white font-bold border-b border-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#0a0a0c] border border-white/10 rounded-lg flex flex-col gap-3 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded transition-colors ${
                  isActive ? "bg-white text-black font-bold" : "text-white/80 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
