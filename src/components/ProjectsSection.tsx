"use client";

import { useState } from "react";
import { ExternalLink, Github, Star, GitFork, Sparkles, FolderGit2, ChevronDown, ChevronUp, Loader2 } from "lucide-react";

const featuredProjects = [
  {
    id: "easygit",
    title: "EasyGit",
    category: "AI & Geliştirici Aracı",
    badge: "Multi-Model AI",
    description: "GitHub repository'leri için profesyonel README dosyalarını otomatik oluşturan web uygulaması. GPT-4, Claude, Gemini ve Grok API'leri arasında dinamik geçiş ve error handling mekanizmalarına sahip.",
    highlights: [
      "4 farklı AI model sağlayıcısı arasında dinamik fallback.",
      "Async rate limit ve response normalization yönetimi."
    ],
    tech: ["JavaScript", "REST APIs", "Multi-model AI", "GPT-4", "Claude"],
    github: "https://github.com/semjhaydin",
    demo: null
  },
  {
    id: "arkakanat-web",
    title: "Arka Kanat Official Website",
    category: "Production Web Platformu",
    badge: "50.000+ Aktif Kullanıcı",
    description: "50.000'den fazla aktif kullanıcıya hizmet veren; canlı F1 yarış takvimi, gerçek zamanlı veri çekme (fetching), loading state'leri ve error boundary yapılarına sahip React platformu.",
    highlights: [
      "Gerçek zamanlı yarış takvimi & canlı veri akışı.",
      "Yapay zeka entegreli otomatik RSS haber pipeline'ı."
    ],
    tech: ["React.js", "REST API", "Real-time data", "Framer Motion"],
    github: "https://github.com/semjhaydin",
    demo: "https://arkakanat.com"
  },
  {
    id: "bati-yildirim",
    title: "Batı Yıldırım Motorsport Portfolio",
    category: "Performans & Animasyon",
    badge: "Core Web Vitals",
    description: "Kaydırmaya duyarlı animasyonlar ve sayfa geçişleri içeren, çok dilli (i18n) motorsporları pilot portfolyosu. Mobil ve masaüstü sürümleri Core Web Vitals metriklerine göre optimize edilmiştir.",
    highlights: [
      "Framer Motion & AOS scroll animasyonları.",
      "Çok dilli (i18n) içerik desteği."
    ],
    tech: ["React", "Framer Motion", "AOS", "i18n"],
    github: "https://github.com/semjhaydin",
    demo: null
  }
];

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export default function ProjectsSection() {
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const toggleAllProjects = async () => {
    if (!showAllRepos && !fetched) {
      setLoading(true);
      try {
        const res = await fetch("https://api.github.com/users/semjhaydin/repos?sort=updated&per_page=9");
        if (res.ok) {
          const data = await res.json();
          setRepos(data);
          setFetched(true);
        }
      } catch (e) {
        console.error("Failed to fetch repos", e);
      } finally {
        setLoading(false);
      }
    }
    setShowAllRepos(!showAllRepos);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Öne Çıkan Projeler
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Geliştirdiğim açık kaynak araçlar, AI entegrasyonları ve canlı web platformları.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {p.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Canlı Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Toggle All Repos Button */}
        <div className="text-center pt-4">
          <button
            onClick={toggleAllProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel border border-slate-700/80 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/80 text-xs font-semibold transition-all"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            {showAllRepos ? "GitHub Çalışmalarını Gizle" : "Tüm GitHub Çalışmalarını Gör (semjhaydin)"}
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
            ) : showAllRepos ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Dynamic GitHub Repos Container */}
        {showAllRepos && (
          <div className="pt-6 animate-in fade-in duration-300 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400">
                github.com/semjhaydin CANLI REPO AKIŞI
              </span>
              <a
                href="https://github.com/semjhaydin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                Profil Web <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {loading && repos.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400 font-mono">
                GitHub API üzerinden projeler çekiliyor...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-5 rounded-xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-3 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-sm text-slate-200 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                          <FolderGit2 className="w-4 h-4 text-cyan-400" />
                          {repo.name}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {repo.description || "GitHub açık kaynak projesi."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                      {repo.language && (
                        <span className="text-cyan-300 font-semibold">{repo.language}</span>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
