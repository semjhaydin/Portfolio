"use client";

import { Award, Download, ExternalLink, FileText } from "lucide-react";

const certificates = [
  {
    title: "EF SET English Certificate (C1)",
    issuer: "EF SET",
    score: "63/100 (C1 Advanced)",
    file: "/sertificates/EF SET Certificate.pdf"
  },
  {
    title: "C Programlama Dili Sertifikası",
    issuer: "BTK Akademi",
    score: "Başarı Sertifikası",
    file: "/sertificates/C_Programlama_Dili_Sertifika.pdf"
  },
  {
    title: "Anthropic Claude Sertifikası",
    issuer: "Anthropic",
    score: "AI Entegrasyonu",
    file: "/sertificates/Anthropic_Claude_Sertifika.pdf"
  },
  {
    title: "Perplexity Sertifikası",
    issuer: "Perplexity AI",
    score: "AI Araştırma",
    file: "/sertificates/Perplexity_Sertifika.pdf"
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 relative bg-slate-950/30 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Sertifikalar & Belgeler
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Sertifikalarım ve indirilebilir güncel özgeçmiş dosyalarım.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400">{cert.issuer}</span>
                  <Award className="w-4 h-4 text-slate-500" />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{cert.title}</h3>
                <div className="text-xs text-slate-400 font-mono">{cert.score}</div>
              </div>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs hover:border-slate-600 transition-colors"
              >
                Görüntüle (PDF) <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* CV Download Hub */}
        <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Güncel Özgeçmiş (CV) Dosyaları
            </h3>
            <p className="text-xs text-slate-400">
              Türkçe ve İngilizce CV formatlarımı doğrudan PDF olarak indirebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="/sertificates/SemihAydinResume20-05-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 hover:border-cyan-500 text-xs font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              English Resume (PDF)
            </a>
            <a
              href="/sertificates/SemihAydınCV20-05-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 hover:border-cyan-500 text-xs font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              Türkçe CV (PDF)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
