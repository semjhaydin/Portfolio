import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const FooterStatus: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#070709] px-6 sm:px-12 py-5 font-mono text-xs text-white/40 z-30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {PORTFOLIO_CONFIG.personal.name}. Tüm hakları saklıdır.
        </div>

        <div className="flex items-center gap-4 text-white/60">
          <a
            href={PORTFOLIO_CONFIG.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_CONFIG.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}
            className="hover:text-white transition-colors"
          >
            E-Posta
          </a>
        </div>
      </div>
    </footer>
  );
};
