import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Referanslar | Semih Aydın",
  description: "Birlikte çalıştığım kişilerin değerlendirmeleri.",
};

const references = [
  {
    id: "ref-1",
    name: "Eren Eğilmez",
    title: "E Sporcu",
    company: "Premium Sim Racing",
    companyLogo: "/arkakanatlogo.png",
    quote: "İyi şeyler",
    avatar: null, // fotoğraf eklenince buraya path gel
  },
];

export default function ReferencesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-6 animate-fadeIn overflow-hidden">

      {/* Header */}
      <div className="pb-4 border-b border-white/10 font-mono shrink-0">
        <h1 className="text-xl font-bold text-white tracking-wider">REFERANSLAR</h1>
        <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">Birlikte Çalıştığım Kişilerden</p>
      </div>

      {/* Reference cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
        {references.map((ref) => (
          <div
            key={ref.id}
            className="flex flex-col justify-between p-6 border border-white/10 hover:border-white/25 bg-[#0a0a0c] transition-all space-y-5"
          >
            {/* Quote */}
            <p className="text-sm text-white/75 leading-relaxed font-sans italic">
              &ldquo;{ref.quote}&rdquo;
            </p>

            {/* Person */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/8 font-mono">
              {/* Avatar placeholder or image */}
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 overflow-hidden">
                {ref.avatar ? (
                  <Image src={ref.avatar} alt={ref.name} width={36} height={36} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-white/50 text-xs font-bold">
                    {ref.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                )}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{ref.name}</h4>
                <p className="text-[10px] text-white/40">{ref.title} — {ref.company}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Empty slot hint */}
        <div className="flex items-center justify-center p-6 border border-white/5 border-dashed">
          <p className="font-mono text-[10px] text-white/20 tracking-widest text-center uppercase">
            Referans Eklenecek
          </p>
        </div>
      </div>

    </div>
  );
}
