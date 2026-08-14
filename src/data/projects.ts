export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  accent?: "green" | "orange" | "blue";
};

export const workProjects: Project[] = [
  {
    slug: "mycase-eks",
    name: "MyCase → EKS",
    tagline: "Dockerized a legacy Rails monolith + services for EKS migration.",
    description:
      "Led the effort to containerize MyCase's Rails application and its surrounding services so the company could move deploys off long-lived EC2 instances and onto EKS. Included multi-stage Dockerfiles, dev-env parity via docker compose, CI image pipelines, and coordinating shared infra (MySQL, sidecars, background workers) across two Rails apps that share state.",
    stack: ["Ruby on Rails", "Docker", "AWS EKS", "GitHub Actions", "MySQL"],
    links: [],
    accent: "green",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "worthmore",
    name: "Project Worthmore Intake",
    tagline: "Non-profit intake + volunteer matching app.",
    description:
      "Custom application for a Denver non-profit that handles new-client intake, volunteer onboarding, and automated matching between the two based on availability windows and driving-time distances. Solved a real operations problem that was previously handled with spreadsheets.",
    stack: ["Ruby on Rails", "PostgreSQL", "Google Maps API"],
    links: [{ label: "About Project Worthmore", href: "https://www.projectworthmore.org" }],
    accent: "orange",
  },
  {
    slug: "should-i-go",
    name: "should-i-go",
    tagline: "Interactive calculator: should you go to college?",
    description:
      "A financial-assistance-aware calculator that helps prospective students weigh whether college is worth it based on their situation. Built in Next.js, deployed on Vercel.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    links: [
      { label: "Live", href: "https://should-i-go.vercel.app" },
      { label: "GitHub", href: "https://github.com/mikebranc/should-i-go" },
    ],
    accent: "blue",
  },
];

export const meProjects: Project[] = [
  {
    slug: "commander",
    name: "commander",
    tagline: "Dev-env lock coordination + live session dashboard.",
    description:
      "Coordinates shared docker dev-env stacks across parallel Claude Code worktree sessions. Solves the 'multiple agents on one machine stomping on the same containers' problem I hit daily. Written entirely with Claude Code.",
    stack: ["TypeScript", "Node.js", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/senorale/commander" }],
    accent: "green",
  },
  {
    slug: "dockview",
    name: "dockview",
    tagline: "Terminal UI for managing Docker containers with vim motions.",
    description:
      "A TUI for docker that speaks vim. Faster than the Docker Desktop UI, faster than typing docker commands. Because muscle memory beats mice. Written entirely with Claude Code.",
    stack: ["TypeScript", "Ink/React", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/senorale/dockview" }],
    accent: "blue",
  },
  {
    slug: "caveman",
    name: "caveman",
    tagline: "🪨 why use many token when few token do trick.",
    description:
      "A Claude Code skill that cuts ~65% of tokens by having Claude respond like a caveman. Full technical accuracy retained. Fluff dies.",
    stack: ["Python", "Claude Code"],
    links: [{ label: "GitHub", href: "https://github.com/senorale/caveman" }],
    accent: "orange",
  },
];
