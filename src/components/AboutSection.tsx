"use client";

import { Code2, Database, Layers, GitBranch, GraduationCap, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Programlama Dilleri",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Java", "C"]
  },
  {
    title: "Frontend & Frameworks",
    icon: Layers,
    skills: ["React.js", "Next.js (App Router)", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"]
  },
  {
    title: "Backend & Veri Akışları",
    icon: Database,
    skills: ["REST APIs", "Oracle DB", "Yapay Zeka API'leri", "Webhooks", "ntfy"]
  },
  {
    title: "Metodoloji & Araçlar",
    icon: GitBranch,
    skills: ["Git & GitHub", "Agile / Scrum", "Süreç Yönetimi"]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Hakkımda & Yetkinlikler
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Trabzon Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Teorik alt yapımı gerçek dünya projelerinde uygulamaya odaklanıyorum.
          </p>
        </div>

        {/* Education & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Education Card */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Eğitim</h3>
                <p className="text-xs text-slate-400 font-mono">Trabzon Üniversitesi</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Bilgisayar Mühendisliği</h4>
                  <p className="text-xs text-cyan-400 font-medium">2. Sınıf Öğrencisi (Mezuniyet: 2029)</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  3.28 GNO
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                1. sınıfı 3.28 GNO ile başarıyla tamamladım. Veri yapıları, algoritma analizi, nesne yönelimli programlama ve veritabanı yönetim sistemleri üzerine yoğunlaşıyorum.
              </p>
            </div>

            {/* Languages */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold mb-3">
                <Languages className="w-4 h-4 text-violet-400" />
                Yabancı Diller
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-slate-200">Türkçe</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Ana Dil</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-slate-200">İngilizce</div>
                  <div className="text-[10px] text-cyan-400 font-mono mt-0.5">EF SET C1</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-slate-200">Almanca</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Temel</div>
                </div>
              </div>
            </div>

          </div>

          {/* Skill Category Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 glass-panel-hover">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Icon className="w-4.5 h-4.5 text-cyan-400" />
                    <h3 className="text-sm font-bold">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
