"use client";

import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("semih_cookie_consent");
    if (!consent) {
      // Show after a brief delay for a polished feel
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("semih_cookie_consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
      <div className="glass-panel p-5 rounded-2xl border border-slate-700/80 shadow-2xl space-y-3 bg-[#0D1117]/95">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Cookie className="w-4 h-4 text-cyan-400" />
            Çerez ve Gizlilik Bildirimi
          </div>
          <button
            onClick={() => setShow(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Bu web sitesi, kullanıcı deneyimini iyileştirmek ve anonim ziyaretçi istatistiklerini analiz etmek amacıyla çerezler kullanmaktadır.
        </p>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
