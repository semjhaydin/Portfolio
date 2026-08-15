import { NextResponse } from "next/server";
import { fetchUserRepositories } from "@/utils/githubService";
import { PORTFOLIO_CONFIG } from "@/config/portfolioConfig";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || PORTFOLIO_CONFIG.github.username;

  try {
    const repos = await fetchUserRepositories(username);
    return NextResponse.json(repos);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
  }
}
