"use client";

import Image from "next/image";
import { ExternalLink, Flag, Trophy, Gamepad2, Instagram } from "lucide-react";

export default function MotorsportSection() {
  return (
    <section id="motorsport" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
            <Flag className="w-3.5 h-3.5 text-red-500" />
            İLGİ ALANLARI
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Motor Sporları & Sim Racing
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Yazılım çalışmalarımın yanında motor sporları tutkusunu simülasyon yarışçılığı, e-spor organizasyonları ve medya üreticiliği ile sürdürüyorum.
          </p>
        </div>

        {/* Visual Showcase & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Card */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden glass-panel border border-slate-800 h-[300px] sm:h-[340px] shadow-2xl group">
            <Image
              src="/images/mclaren720sgt3.jpg"
              alt="Motor Sporları & Sim Racing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-slate-950/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                Simülasyon Yarışçılığı
              </div>
              <div className="text-sm font-semibold text-white">
                iRacing, Assetto Corsa & F1 25
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* E-sports Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Arka Kanat F1 E-Spor Ligi</h3>
                    <p className="text-xs text-slate-400 font-mono">Kurucu & Organizatör</p>
                  </div>
                </div>

                <a
                  href="https://instagram.com/arkakanat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  @arkakanat
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                F1 E-spor liginin organizasyonunu, kural kitaplarını ve canlı yayın altyapılarını yönetiyor; Premium Sim Racing e-spor takımının menajerliğini yürütüyorum.
              </p>
            </div>

            {/* Tech Blog Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Teknik Motor Sporları Yazıları</h3>
                  <p className="text-xs text-slate-400">F1 mühendisliği ve veri analitiği</p>
                </div>
                <a
                  href="https://arkakanat.com/yazar?username=semih.aydin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-semibold hover:border-cyan-500 transition-colors flex items-center gap-1.5"
                >
                  arkakanat.com/blog
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Formula 1 aerodinamiği, yarış stratejileri ve simülasyon teknolojileri üzerine kaleme aldığım teknik blog yazıları.
              </p>
            </div>

            {/* Trabzonspor */}
            <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 via-sky-600 to-amber-500 flex items-center justify-center font-bold text-white text-[11px]">
                TS
              </div>
              <span className="font-semibold text-slate-200">Trabzonspor Taraftarı</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
