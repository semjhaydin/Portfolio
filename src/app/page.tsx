import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Semih Aydın — Software Developer",
  description: PORTFOLIO_CONFIG.personal.bio,
};

export default function HomePage() {
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <div className="w-full max-w-4xl mx-auto py-8 flex flex-col justify-center animate-fadeIn overflow-hidden">
      <div className="space-y-6">

        {/* SA Logo + Location */}
        <div className="flex items-center gap-4">
          <Image
            src="/logowhitetrans.png"
            alt="SA Logo"
            width={36}
            height={36}
            className="opacity-80"
          />
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
            {personal.location} &mdash; {personal.university}
          </span>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Semih Aydın
          </h1>
          <p className="font-mono text-sm text-white/45 tracking-wider">
            Software Developer &amp; Computer Engineering Student
          </p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-white/65 max-w-2xl font-sans leading-relaxed">
          {personal.bio}
        </p>

        {/* Milestones */}
        <div className="grid grid-cols-3 gap-px border border-white/10 font-mono w-fit">
          <div className="px-5 py-3 border-r border-white/10 space-y-1">
            <div className="text-xl font-bold text-white">{personal.gpa}</div>
            <div className="text-[10px] text-white/40 tracking-wider uppercase">GNO</div>
          </div>
          <div className="px-5 py-3 border-r border-white/10 space-y-1">
            <div className="text-xl font-bold text-white">C1</div>
            <div className="text-[10px] text-white/40 tracking-wider uppercase">İngilizce</div>
          </div>
          <div className="px-5 py-3 space-y-1">
            <div className="text-xl font-bold text-white">2+</div>
            <div className="text-[10px] text-white/40 tracking-wider uppercase">Canlı Platform</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          <Link
            href="/projeler"
            className="group flex items-center gap-3 px-6 py-3.5 bg-white text-black font-bold tracking-wider hover:bg-white/90 transition-all"
          >
            <span>PROJELERİ İNCELE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/hakkimda"
            className="px-6 py-3.5 border border-white/20 hover:border-white text-white tracking-wider transition-all"
          >
            HAKKIMDAKİLER
          </Link>

          <a
            href={PORTFOLIO_CONFIG.contact.cvEnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-white/40 hover:text-white tracking-wider transition-colors"
          >
            CV →
          </a>
        </div>

      </div>
    </div>
  );
}
