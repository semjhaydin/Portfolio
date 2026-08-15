"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchUserRepositories, GitHubRepo } from "@/utils/githubService";
import { Search, ExternalLink, Github, Star, ArrowLeft } from "lucide-react";

export default function AllProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await fetchUserRepositories();
      setRepos(data);
      setIsLoading(false);
    }
    load();
  }, []);

  const filteredRepos = repos.filter((r) => {
    return (
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (r.language && r.language.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="w-full max-w-4xl mx-auto py-8 space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono">
        <div className="flex items-center gap-3">
          <Link
            href="/projeler"
            className="p-2 border border-white/20 text-white/80 hover:text-white transition-colors"
            title="Geri Dön"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
              TÜM PROJELER ({repos.length})
            </h1>
            <p className="text-xs text-white/50 mt-0.5">GİTHUB AÇIK REPOSITORIES</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Proje veya teknoloji ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-black border border-white/20 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      {/* Repos List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="py-12 text-center font-mono text-xs text-white/40">
            GitHub projeleri yükleniyor...
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="py-12 text-center font-mono text-xs text-white/40">
            Aramaya uygun proje bulunamadı.
          </div>
        ) : (
          filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-white/10 hover:border-white/30 transition-all gap-4 bg-[#0a0a0c]"
            >
              <div className="space-y-1 font-sans">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono font-bold text-sm text-white">
                    {repo.name}
                  </h3>
                  {repo.language && (
                    <span className="font-mono text-[10px] text-white/50 px-2 py-0.5 border border-white/10">
                      {repo.language}
                    </span>
                  )}
                </div>
                <p className="text-xs text-white/60">
                  {repo.description || "Açıklama bulunmuyor."}
                </p>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs shrink-0">
                <span className="flex items-center gap-1 text-white/50">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {repo.stargazers_count}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/70 hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:underline"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
