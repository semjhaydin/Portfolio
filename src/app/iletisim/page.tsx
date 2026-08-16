"use client";

import React, { useState } from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-6 animate-fadeIn font-sans overflow-hidden">

      {/* Header */}
      <div className="pb-4 border-b border-white/10 font-mono shrink-0">
        <h1 className="text-xl font-bold text-white tracking-wider">İLETİŞİM</h1>
        <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">Proje & İş Birliği Teklifleri</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 items-start shrink-0">

        {/* Form */}
        <div>
          {submitted ? (
            <div className="p-6 border border-white/15 text-center space-y-3 font-mono">
              <CheckCircle className="w-6 h-6 text-white mx-auto" />
              <h3 className="text-sm font-bold text-white">MESAJINIZ İLETİLDİ</h3>
              <p className="font-sans text-xs text-white/60">En kısa sürede geri dönüş yapacağım.</p>
              <button onClick={() => setSubmitted(false)} className="mt-2 px-4 py-2 bg-white/10 text-white text-xs hover:bg-white/15 transition-all">
                Yeni Mesaj
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-white/40 text-[10px] uppercase tracking-wider">Ad Soyad</label>
                  <input
                    type="text" required placeholder="Adınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-black border border-white/15 text-white placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-white/40 text-[10px] uppercase tracking-wider">E-Posta</label>
                  <input
                    type="email" required placeholder="mail@ornek.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-black border border-white/15 text-white placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors text-xs"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-white/40 text-[10px] uppercase tracking-wider">Mesaj</label>
                <textarea
                  required rows={4} placeholder="Mesajınızı yazın..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 bg-black border border-white/15 text-white placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors resize-none text-xs"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs tracking-wider hover:bg-white/90 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                GÖNDER
              </button>
            </form>
          )}
        </div>

        {/* Right: contact info */}
        <div className="space-y-5 font-mono text-xs">
          <div className="space-y-1">
            <p className="text-[9px] text-white/25 tracking-widest uppercase">// E-Posta</p>
            <a href={`mailto:${PORTFOLIO_CONFIG.contact.email}`} className="text-white/65 hover:text-white transition-colors">
              {PORTFOLIO_CONFIG.contact.email}
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-[9px] text-white/25 tracking-widest uppercase">// Konum</p>
            <span className="text-white/65">{PORTFOLIO_CONFIG.contact.location}</span>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/8">
            <p className="text-[9px] text-white/25 tracking-widest uppercase">// Sosyal</p>
            <div className="flex flex-col gap-1.5">
              <a href={PORTFOLIO_CONFIG.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">↗ github / semjhaydin</a>
              <a href={PORTFOLIO_CONFIG.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">↗ linkedin / aydinsemih61</a>
              <a href={PORTFOLIO_CONFIG.contact.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">↗ x.com / semjhaydin</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
