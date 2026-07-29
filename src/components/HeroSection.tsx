"use client";

import { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Code2, Users, GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"code" | "stack">("code");

  return (
    <section className="relative min-h-[85vh] pt-36 pb-20 flex items-center justify-center overflow-hidden spotlight-glow">
      
      {/* Dynamic Background Light Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Headline & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Semih Aydın
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                Software Developer & Bilgisayar Mühendisliği Öğrencisi
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              Trabzon Üniversitesi Bilgisayar Mühendisliği öğrencisiyim (3.28 GNO). 
              JavaScript, TypeScript, React, Next.js, Python ve SQL dillerinde yetkinim. 
              50.000’den fazla aktif kullanıcıya ulaşan platformlar kurdum ve otomatize edilmiş backend altyapıları geliştirdim.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["TypeScript", "React", "Next.js", "Python", "SQL", "Oracle DB", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
              >
                Projelerimi İncele
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/sertificates/SemihAydinResume20-05-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel border border-slate-700/80 text-slate-200 hover:border-slate-500 hover:bg-slate-800/80 font-medium text-xs transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                CV (PDF)
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/semjhaydin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/semihaydin61/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg">
              <div className="glass-panel p-3.5 rounded-xl border border-slate-800 glass-panel-hover">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono font-medium mb-1">
                  <Users className="w-3.5 h-3.5" />
                  KULLANICI
                </div>
                <div className="text-xl font-bold text-white">50.000+</div>
                <div className="text-[11px] text-slate-400">Arka Kanat</div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-slate-800 glass-panel-hover">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-medium mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  AKADEMİK
                </div>
                <div className="text-xl font-bold text-white">3.28 GNO</div>
                <div className="text-[11px] text-slate-400">2. Sınıf Müh.</div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-slate-800 glass-panel-hover">
                <div className="flex items-center gap-1.5 text-violet-400 text-xs font-mono font-medium mb-1">
                  <Award className="w-3.5 h-3.5" />
                  İNGİLİZCE
                </div>
                <div className="text-xl font-bold text-white">EF SET C1</div>
                <div className="text-[11px] text-slate-400">63/100 Sertifika</div>
              </div>
            </div>

          </div>

          {/* Right Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-panel rounded-2xl border border-slate-800 p-6 space-y-4 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === "code" ? "bg-slate-800 text-cyan-300 font-semibold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    semih.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === "stack" ? "bg-slate-800 text-cyan-300 font-semibold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    stack.json
                  </button>
                </div>
              </div>

              {activeTab === "code" && (
                <div className="font-mono text-xs text-slate-300 space-y-2 leading-relaxed animate-in fade-in duration-200">
                  <div>
                    <span className="text-violet-400">export const</span> <span className="text-cyan-300">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">&apos;Semih Aydın&apos;</span>,
                  </div>
                  <div className="pl-4">
                    degree: <span className="text-emerald-300">&apos;Bilgisayar Mühendisliği&apos;</span>,
                  </div>
                  <div className="pl-4">
                    university: <span className="text-emerald-300">&apos;Trabzon Üniversitesi&apos;</span>,
                  </div>
                  <div className="pl-4">
                    year: <span className="text-amber-400">2</span>,
                  </div>
                  <div className="pl-4">
                    gpa: <span className="text-amber-400">3.28</span>,
                  </div>
                  <div className="pl-4">
                    primaryLanguages: [<span className="text-cyan-300">&apos;TS&apos;</span>, <span className="text-cyan-300">&apos;JS&apos;</span>, <span className="text-cyan-300">&apos;Python&apos;</span>, <span className="text-cyan-300">&apos;SQL&apos;</span>],
                  </div>
                  <div className="pl-4">
                    founder: <span className="text-emerald-300">&apos;Arka Kanat&apos;</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="font-mono text-xs text-slate-300 space-y-3 leading-relaxed animate-in fade-in duration-200">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-cyan-400 font-bold">FRONTEND</div>
                    <div className="text-slate-300">React.js, Next.js (App Router), Tailwind CSS</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-emerald-400 font-bold">BACKEND & DATA</div>
                    <div className="text-slate-300">Python, REST APIs, Oracle DB, Webhooks</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-violet-400 font-bold">AI INTEGRATION</div>
                    <div className="text-slate-300">GPT-4, Claude, Gemini, Grok APIs</div>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Trabzon Üniversitesi
                </span>
                <span className="font-mono text-[11px] text-cyan-400">2. Sınıf Müh.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
