export interface FeaturedProject {
  id: string;
  repoName: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  previewImage?: string;
  isFeatured: boolean;
  isExternal?: boolean; // not a GitHub repo, standalone project
  externalUrl?: string;
  highlight?: string; // a one-liner stat/badge
}

export interface SkillCategory {
  categoryName: string;
  skills: { name: string; level: number; description?: string }[];
}

export interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Semih Aydın",
    title: "Software Developer & Bilgisayar Mühendisliği Öğrencisi",
    location: "Trabzon / İstanbul",
    bio: "Trabzon Üniversitesi Bilgisayar Mühendisliği öğrencisiyim (3.28 GNO). 50.000+ aktif kullanıcıya ulaşan platformlar kurdum ve otomatize edilmiş backend altyapıları geliştirdim.",
    university: "Trabzon Üniversitesi",
    gpa: "3.28",
    year: "2. Sınıf",
    englishLevel: "EF SET C1",
  },
  github: {
    username: "semjhaydin",
    pinnedRepos: [
      "autocam",
      "htalkslig",
      "worldcupaianaliz",
      "arkakanatespor"
    ]
  },

  // These are hand-curated, non-GitHub projects shown prominently on the projects page
  highlightedProjects: [
    {
      id: "rabona",
      title: "Rabona Kadroda",
      subtitle: "Resmi Sanatçı Platformu",
      description: "Türkçe hip-hop sanatçısı Rabona'nın resmi web platformu. Canlı Spotify metrikleri (46.6K aylık dinleyici), 24+ single diskografi kataloğu, galeri ve press/booking altyapısı. HAS Label.",
      techStack: ["Next.js", "React", "CSS", "Spotify API"],
      demoUrl: "https://rabonakadroda.com",
      previewImage: "/rabona_preview.jpg",
      highlight: "46.6K Aylık Spotify Dinleyicisi",
      isFeatured: true,
      isExternal: true,
    },
    {
      id: "arkakanat",
      title: "Arka Kanat",
      subtitle: "Motor Sporları Medya Platformu",
      description: "50.000+ takipçiye ulaşan motor sporları odaklı dijital medya platformu. Otomatik RSS backend pipeline, GPT-4/Claude/Gemini entegrasyonlu yapay zeka filtresi, gerçek zamanlı F1 yarış takvimi ve canlı veri akışı.",
      techStack: ["React.js", "REST API", "AI APIs", "Webhooks", "ntfy"],
      demoUrl: "https://arkakanat.com",
      previewImage: "/arkakanat_preview.jpg",
      highlight: "50.000+ Aktif Takipçi",
      isFeatured: true,
      isExternal: true,
    },
  ],

  featuredProjects: [
    {
      id: "1",
      repoName: "autocam",
      title: "AutoCam - AI Broadcast Director",
      description: "Assetto Corsa yarışları için kamerayı yapay zeka ile otomatik yöneten rejisör uygulaması.",
      techStack: ["Python", "AI / Computer Vision", "Sim Racing Telemetry"],
      demoUrl: "https://github.com/semjhaydin/autocam",
      isFeatured: true,
    },
    {
      id: "2",
      repoName: "htalkslig",
      title: "H-Talks Lig Predictor",
      description: "Arkadaşlar arasında maç tahminleri ve gerçek zamanlı puan sıralaması sunan sosyal platform.",
      techStack: ["TypeScript", "Node.js", "Supabase", "React"],
      demoUrl: "https://github.com/semjhaydin/htalkslig",
      isFeatured: true,
    },
    {
      id: "3",
      repoName: "worldcupaianaliz",
      title: "World Cup AI Analytics",
      description: "Dünya Kupası takım verilerini yapay zekaya analiz ettiren interaktif görselleştirme platformu.",
      techStack: ["JavaScript", "AI Analytics", "CSS / Visualization"],
      demoUrl: "https://github.com/semjhaydin/worldcupaianaliz",
      isFeatured: true,
    },
  ] as FeaturedProject[],

  skills: [
    {
      categoryName: "Diller",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Python", level: 88 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 72 },
        { name: "C", level: 70 },
      ]
    },
    {
      categoryName: "Frontend & Frameworks",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js (App Router)", level: 93 },
        { name: "HTML5 / CSS3", level: 97 },
        { name: "Framer Motion", level: 82 },
      ]
    },
    {
      categoryName: "Backend & Araçlar",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "Oracle DB", level: 80 },
        { name: "AI APIs (GPT-4, Claude, Gemini)", level: 88 },
        { name: "Webhooks / ntfy", level: 85 },
        { name: "Git & GitHub", level: 93 },
      ]
    }
  ] as SkillCategory[],

  references: [] as ReferenceItem[],

  contact: {
    email: "semih@semihaydin.dev",
    location: "Trabzon / İstanbul",
    githubUrl: "https://github.com/semjhaydin",
    linkedinUrl: "https://linkedin.com/in/aydinsemih61",
    twitterUrl: "https://x.com/semjhaydin",
    websiteUrl: "https://semihaydin.dev",
  }
};
