"use client";

import { Briefcase, Building2, Calendar, ExternalLink, Instagram } from "lucide-react";

const experiences = [
  {
    title: "Kurucu & Mühendislik Lideri",
    company: "Arka Kanat",
    location: "Türkiye",
    period: "03/2024 – Devam Ediyor",
    badge: "Kurucu",
    description: "Motor sporları odaklı dijital medya platformu ve canlı yarış takip altyapısının geliştirilmesi.",
    achievements: [
      "Editör ekibi için manuel takibi ortadan kaldıran, RSS akışlarını gerçek zamanlı tarayan otomatik bir backend pipeline'ı inşa ettim.",
      "Makaleleri filtrelemek ve yüksek öncelikli uyarıları Webhook/ntfy üzerinden iletmek için yapay zeka API'lerini (GPT-4, Claude, Gemini, Grok) entegre ettim.",
      "Platformu 50.000'den fazla takipçiye ulaştırdım.",
      "Arka Kanat F1 E-spor Ligi organizasyonunu ve Sim Racing e-spor takımının menajerliğini üstlendim."
    ],
    tags: ["React.js", "REST API", "Yapay Zeka API'leri", "Webhooks", "ntfy"],
    links: [
      { name: "Web Sitesi", url: "https://arkakanat.com" },
      { name: "Instagram", url: "https://instagram.com/arkakanat", icon: Instagram }
    ]
  },
  {
    title: "Bilgi İşlem (IT) Stajyeri",
    company: "Fibabanka",
    location: "İstanbul, Türkiye",
    period: "01/2026",
    badge: "Staj",
    description: "Kurumsal bilgi işlem departmanında süreç yönetimi ve teknolojik altyapı gözlemi üzerine staj deneyimi.",
    achievements: [
      "Kurumsal dolandırıcılık (fraud) tespit mimarilerini ve otomatik güvenlik sistemlerinin şüpheli işlemleri nasıl yakaladığını analiz ettim.",
      "Oracle veritabanları üzerinde karmaşık SQL sorguları çalıştırarak işlem trendlerini çıkardım ve raporladım."
    ],
    tags: ["Oracle DB", "SQL", "Fraud Detection", "Kurumsal Altyapı"],
    links: []
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/30 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Deneyim
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Saha stajı ve kurucusu olduğum projedeki mühendislik tecrübelerim.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                    <span className="font-semibold text-cyan-400 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {exp.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-mono"
                    >
                      {link.name} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300">
                {exp.description}
              </p>

              <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300 leading-relaxed">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
