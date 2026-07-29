"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Globe, MapPin, Send, Check, Copy } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("semih@semihaydin.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            İletişim
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Proje fikirleriniz veya sorularınız için doğrudan mesaj bırakabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400">E-Posta Adresi</div>
              <div className="flex items-center justify-between gap-2 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <span className="font-mono text-xs text-cyan-300 select-all font-semibold">
                  semih@semihaydin.dev
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  {copied ? "Kopyalandı" : "Kopyala"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href="https://github.com/semjhaydin"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 glass-panel-hover block space-y-1"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <div className="font-semibold text-slate-200">GitHub</div>
                <div className="text-[11px] text-slate-400 font-mono">semjhaydin</div>
              </a>

              <a
                href="https://linkedin.com/in/semyhist"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 glass-panel-hover block space-y-1"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <div className="font-semibold text-slate-200">LinkedIn</div>
                <div className="text-[11px] text-slate-400 font-mono">semyhist</div>
              </a>

              <a
                href="https://semihaydin.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 glass-panel-hover block space-y-1"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <div className="font-semibold text-slate-200">Web Sitesi</div>
                <div className="text-[11px] text-slate-400 font-mono">semihaydin.dev</div>
              </a>

              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-1">
                <MapPin className="w-4 h-4 text-violet-400" />
                <div className="font-semibold text-slate-200">Konum</div>
                <div className="text-[11px] text-slate-400 font-mono">Trabzon / İstanbul</div>
              </div>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">Mesaj Gönderin</h3>

            {formSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 font-mono text-center">
                ✓ Mesajınız alındı. En kısa sürede geri dönüş yapacağım.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-Posta Adresiniz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="Konu"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Mesajınız..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  Gönder
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
