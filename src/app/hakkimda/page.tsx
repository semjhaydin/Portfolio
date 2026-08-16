import React from "react";
import Image from "next/image";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";
import { Download } from "lucide-react";

export const metadata = {
  title: "Hakkımda | Semih Aydın",
  description: "Deneyim ve kilometre taşları.",
};

const experiences = [
  {
    period: "03/2024 — Günümüz",
    role: "Kurucu & Mühendislik Lideri",
    org: "Arka Kanat",
    orgUrl: "https://arkakanat.com",
    type: "Founder",
    bullets: [
      "50.000+ takipçiye ulaşan motor sporları medya platformu kurdum.",
      "Otomatik RSS backend pipeline ile editör süreçlerini sıfırladım.",
      "GPT-4, Claude, Gemini, Grok entegrasyonlu AI haber filtresi inşa ettim.",
      "F1 E-spor Ligi organizasyonu ve Sim Racing takım menajerliği.",
    ],
    stack: ["React.js", "AI APIs", "Webhooks", "ntfy"],
  },
  {
    period: "01/2026",
    role: "Bilgi İşlem Stajyeri",
    org: "Fibabanka",
    orgUrl: null,
    type: "Staj",
    bullets: [
      "Kurumsal fraud tespit mimarisini ve otomatik güvenlik sistemlerini analiz ettim.",
      "Oracle DB üzerinde karmaşık SQL sorguları yazarak işlem trendlerini raporladım.",
    ],
    stack: ["Oracle DB", "SQL", "Fraud Detection"],
  },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-6 animate-fadeIn font-sans overflow-hidden">

      {/* Header row */}
      <div className="pb-4 border-b border-white/10 font-mono shrink-0">
        <h1 className="text-xl font-bold text-white tracking-wider">HAKKIMDA</h1>
        <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">Deneyim &amp; Kilometre Taşları</p>
      </div>

      {/* Experience — compact 2-col */}
      <div className="space-y-5 shrink-0">
        <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase">// Deneyim</p>

        {experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-[120px_1fr] gap-5">
            <div className="font-mono text-[10px] text-white/30 space-y-1 pt-0.5 leading-relaxed">
              <div>{exp.period}</div>
              <div className="border border-white/10 px-1.5 py-0.5 text-[9px] w-fit tracking-widest">{exp.type.toUpperCase()}</div>
            </div>
            <div className="space-y-2">
              <div>
                <div className="font-mono font-bold text-xs text-white">{exp.role}</div>
                {exp.orgUrl ? (
                  <a href={exp.orgUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/40 hover:text-white transition-colors">{exp.org} ↗</a>
                ) : (
                  <span className="font-mono text-[10px] text-white/40">{exp.org}</span>
                )}
              </div>
              <ul className="space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-[11px] text-white/55 leading-relaxed flex gap-2">
                    <span className="text-white/20 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 font-mono text-[9px] text-white/25">
                {exp.stack.map((s) => (
                  <span key={s} className="border border-white/10 px-1.5 py-0.5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education + Brand row */}
      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/8 shrink-0">
        <div className="space-y-2">
          <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase">// Eğitim</p>
          <div className="space-y-0.5">
            <div className="font-mono font-bold text-xs text-white">Bilgisayar Mühendisliği</div>
            <div className="font-mono text-[10px] text-white/40">Trabzon Üniversitesi</div>
            <div className="font-mono text-[10px] text-white/30">2023 — 2027 · 3.28 GNO · 2. Sınıf</div>
            <div className="font-mono text-[10px] text-white/30 pt-1">İngilizce: EF SET C1 (63/100)</div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase">// Markalar</p>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-1">
              <Image src="/logowhitetrans.png" alt="SA Logo" width={28} height={28} className="opacity-50 hover:opacity-85 transition-opacity" />
              <span className="font-mono text-[8px] text-white/20 tracking-widest">S AYDIN</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center gap-1">
              <a href="https://arkakanat.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/arkakanatlogo.png"
                  alt="Arka Kanat"
                  width={52}
                  height={30}
                  className="opacity-50 hover:opacity-85 transition-opacity object-contain"
                />
              </a>
              <span className="font-mono text-[8px] text-white/20 tracking-widest">ARKA KANAT</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
