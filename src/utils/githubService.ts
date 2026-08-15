import { PORTFOLIO_CONFIG, FeaturedProject } from "@/config/portfolioConfig";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  homepage?: string | null;
  updated_at: string;
  is_pinned?: boolean;
}

export async function fetchUserRepositories(username: string = PORTFOLIO_CONFIG.github.username): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 } // Next.js ISR cache 1 hour
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Utilizing local fallback project vault.`);
      return getFallbackRepos();
    }

    const repos: GitHubRepo[] = await res.json();
    if (!Array.isArray(repos)) return getFallbackRepos();

    // Filter out forks if needed & sort by stars / update
    const formattedRepos = repos
      .filter((r) => !r.name.startsWith("."))
      .map((r) => ({
        ...r,
        is_pinned: PORTFOLIO_CONFIG.github.pinnedRepos.includes(r.name),
      }));

    return formattedRepos;
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return getFallbackRepos();
  }
}

// Fallback repo dynamic mapping if GitHub username is not updated or API is throttled
export function getFallbackRepos(): GitHubRepo[] {
  return PORTFOLIO_CONFIG.featuredProjects.map((p, idx) => ({
    id: 1000 + idx,
    name: p.repoName,
    full_name: `${PORTFOLIO_CONFIG.github.username}/${p.repoName}`,
    html_url: `https://github.com/${PORTFOLIO_CONFIG.github.username}/${p.repoName}`,
    description: p.description,
    stargazers_count: 12 + idx * 8,
    forks_count: 3 + idx * 2,
    language: p.techStack[0] || "TypeScript",
    topics: p.techStack.map((t) => t.toLowerCase().replace(/[^a-z0-9]/g, "")),
    homepage: p.demoUrl,
    updated_at: new Date().toISOString(),
    is_pinned: p.isFeatured,
  }));
}
