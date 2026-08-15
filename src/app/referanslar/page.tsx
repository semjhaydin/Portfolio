import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Referanslar | Semih Aydın",
  description: "Birlikte çalıştığım kişilerin değerlendirmeleri.",
};

interface Reference {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const references: Reference[] = [
  {
    id: "ref-1",
    name: "Eren Eğilmez",
    role: "E Sporcu",
    company: "Premium Sim Racing",
    quote: "İyi şeyler",
    avatar: "/erenegilmez.png",
  },
];

export default function ReferencesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-6 animate-fadeIn overflow-hidden">

      {/* Header */}
      <div className="pb-4 border-b border-white/10 font-mono shrink-0">
        <h1 className="text-xl font-bold text-white tracking-wider">REFERANSLAR</h1>
        <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">
          Birlikte Çalıştığım Kişiler
        </p>
      </div>

      {/* Showcase Cards */}
      <div className="space-y-4 shrink-0">
        {references.map((ref) => (
          <div
            key={ref.id}
            className="group relative flex flex-col md:flex-row items-stretch bg-[#0c0c0f] border border-white/12 hover:border-white/25 transition-all duration-300 overflow-hidden shadow-2xl"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full md:w-1 h-1 md:h-full bg-white/30" />

            {/* Profile Section */}
            <div className="p-6 flex flex-row md:flex-col justify-start md:justify-center items-center border-b md:border-b-0 md:border-r border-white/10 bg-[#09090c] md:w-64 shrink-0 gap-4">
              <div className="relative w-16 h-16 rounded-full border border-white/20 overflow-hidden shrink-0 bg-black">
                <Image
                  src={ref.avatar}
                  alt={ref.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-left md:text-center">
                <h3 className="font-mono font-bold text-sm text-white tracking-wide">{ref.name}</h3>
                <p className="font-mono text-xs text-white/50 mt-0.5">{ref.role}</p>
                <p className="font-mono text-[10px] text-white/35">{ref.company}</p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center gap-3">
              <Quote className="w-5 h-5 text-white/20" />
              <p className="text-base text-white/90 font-sans italic tracking-wide">
                &ldquo;{ref.quote}&rdquo;
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Empty slot hint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
        <div className="p-5 border border-white/8 border-dashed bg-[#08080a] flex items-center justify-center min-h-[100px]">
          <p className="font-mono text-[10px] text-white/20 tracking-widest text-center uppercase">
            Referans Eklenecek
          </p>
        </div>
        <div className="p-5 border border-white/8 border-dashed bg-[#08080a] flex items-center justify-center min-h-[100px]">
          <p className="font-mono text-[10px] text-white/20 tracking-widest text-center uppercase">
            Referans Eklenecek
          </p>
        </div>
      </div>

    </div>
  );
}
