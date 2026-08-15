import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";

export const metadata = {
  title: "Teknolojiler | Semih Aydın",
  description: "Kullandığım teknoloji stack.",
};

export default function SkillsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-6 animate-fadeIn font-sans overflow-hidden">

      {/* Header */}
      <div className="pb-4 border-b border-white/10 font-mono shrink-0">
        <h1 className="text-xl font-bold text-white tracking-wider">TEKNOLOJİLER</h1>
        <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">Yazılım Stack & Teknik Yetkinlikler</p>
      </div>

      {/* Skills — 3 column tag cloud */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
        {PORTFOLIO_CONFIG.skills.map((category, catIdx) => (
          <div key={catIdx} className="space-y-3">
            <h3 className="font-mono text-[10px] text-white/35 tracking-widest uppercase border-b border-white/8 pb-2">
              {category.categoryName}
            </h3>
            <div className="flex flex-col gap-1.5">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="flex items-center gap-2">
                  <span className="text-white/15 font-mono text-[9px] w-3 shrink-0">{String(skillIdx + 1).padStart(2, "0")}</span>
                  <span className="text-xs text-white/80 font-sans leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Methodology tags */}
      <div className="pt-4 border-t border-white/8 shrink-0">
        <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">// Metodoloji & Süreç</p>
        <div className="flex flex-wrap gap-2">
          {["Git & GitHub", "Agile / Scrum", "CI/CD", "REST API Design", "Süreç Yönetimi", "Code Review"].map((tag) => (
            <span key={tag} className="font-mono text-[10px] text-white/50 border border-white/10 px-3 py-1.5 hover:border-white/25 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
