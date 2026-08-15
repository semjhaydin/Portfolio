import React from "react";

export const metadata = {
  title: "Projeler | Semih Aydın",
  description: "Canlı platformlar, açık kaynak araçlar ve AI entegrasyonları.",
};

import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";
import { fetchUserRepositories } from "@/utils/githubService";
import { Github, Star, ArrowUpRight, ArrowRight } from "lucide-react";

export default async function ProjectsPage() {
  const allRepos = await fetchUserRepositories();
  const githubRepos = allRepos
    .filter((r) => PORTFOLIO_CONFIG.github.pinnedRepos.includes(r.name))
    .slice(0, 3);
  const displayRepos = githubRepos.length > 0 ? githubRepos : allRepos.slice(0, 3);

  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col gap-5 animate-fadeIn overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono shrink-0">
        <div>
          <h1 className="text-xl font-bold text-white tracking-wider">PROJELER</h1>
          <p className="text-[10px] text-white/35 mt-0.5 tracking-widest uppercase">Canlı Platformlar & GitHub</p>
        </div>
        <Link
          href="/projeler/tum-projeler"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-bold text-[10px] hover:bg-white/90 transition-all"
        >
          <span>TÜM GITHUB</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Live Platforms — 2 cards side by side */}
      <div className="shrink-0">
        <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">// Canlı Platformlar</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PORTFOLIO_CONFIG.highlightedProjects.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col border border-white/10 hover:border-white/30 transition-all bg-[#0a0a0c] overflow-hidden"
            >
              {project.previewImage && (
                <div className="relative w-full h-28 overflow-hidden bg-[#111]">
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-70 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                </div>
              )}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-mono font-bold text-xs text-white">{project.title}</h3>
                    <p className="font-mono text-[9px] text-white/35">{project.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-white transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-[11px] text-white/55 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 font-mono text-[9px] text-white/25">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="border border-white/10 px-1.5 py-0.5">{t}</span>
                    ))}
                  </div>
                  {project.highlight && (
                    <span className="font-mono text-[9px] text-white/35 tracking-wider">↗ {project.highlight}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* GitHub Repos — compact 3-col */}
      <div className="shrink-0">
        <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">// GitHub · Açık Kaynak</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {displayRepos.map((repo) => {
            const customConfig = PORTFOLIO_CONFIG.featuredProjects.find((p) => p.repoName === repo.name);
            const description = repo.description || customConfig?.description || "—";
            return (
              <div key={repo.id} className="flex flex-col justify-between p-4 border border-white/10 hover:border-white/25 transition-all bg-[#0a0a0c] gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between">
                    <h3 className="font-mono font-bold text-[10px] text-white break-all leading-tight">{repo.name}</h3>
                    <span className="flex items-center gap-0.5 font-mono text-[9px] text-white/35 shrink-0 ml-1">
                      <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  <p className="text-[10px] text-white/50 leading-relaxed line-clamp-3">{description}</p>
                  {repo.language && <span className="font-mono text-[9px] text-white/25">{repo.language}</span>}
                </div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-[9px] text-white/40 hover:text-white transition-colors">
                  <Github className="w-2.5 h-2.5" />
                  <span>GitHub</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
