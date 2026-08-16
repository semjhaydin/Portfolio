import React from "react";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";

export const metadata = {
  title: "Sertifikalar | Semih Aydın",
  description: "Resmi sertifikalar ve eğitim belgeleri.",
};

const certs = [
  {
    issuer: "EF SET",
    title: "English Certificate — C1 Advanced",
    detail: "63/100 · Advanced",
    url: "https://semihaydin.dev/sertificates/EF%20SET%20Certificate.pdf",
  },
  {
    issuer: "BTK Akademi",
    title: "C Programlama Dili",
    detail: "Başarı Sertifikası",
    url: "https://semihaydin.dev/sertificates/C_Programlama_Dili_Sertifika.pdf",
  },
  {
    issuer: "Anthropic",
    title: "Claude AI Sertifikası",
    detail: "AI Entegrasyonu",
    url: "https://semihaydin.dev/sertificates/Anthropic_Claude_Sertifika.pdf",
  },
  {
    issuer: "Perplexity AI",
    title: "Perplexity Sertifikası",
    detail: "AI Araştırma",
    url: "https://semihaydin.dev/sertificates/Perplexity_Sertifika.pdf",
  },
];

export default function CertificatesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-6 animate-fadeIn overflow-hidden">
      <div className="pb-4 border-b border-white/10 font-mono shrink-0">
        <h1 className="text-xl font-bold text-white tracking-wider">SERTİFİKALAR</h1>
        <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">Resmi Sertifikalar &amp; Belgeler</p>
      </div>

      <div className="shrink-0">
        <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">// Sertifikalar</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certs.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-white/10 hover:border-white/30 bg-[#0a0a0c] transition-all"
            >
              <div className="space-y-0.5">
                <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase">{cert.issuer}</div>
                <div className="font-mono text-xs text-white font-bold leading-tight">{cert.title}</div>
                <div className="font-mono text-[10px] text-white/40">{cert.detail}</div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors shrink-0 ml-3" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
