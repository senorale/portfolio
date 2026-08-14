export type Project = {
  slug: string;
  name: string;
  year?: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  image?: string;
  imageMode?: "cover" | "contain";
  imagePosition?: "left" | "center" | "right" | "top" | "bottom";
  note?: string;
  highlight?: string[];
  testimonial?: { quote: string; author?: string };
};

export const forOthers: Project[] = [
  {
    slug: "worthmore",
    name: "Project Worthmore",
    tagline: "Volunteer + client matching for one of their programs.",
    description:
      "Internal tool for Project Worthmore's Language Partners program, which pairs clients with volunteers who meet regularly so the client can practice English. It used to run on spreadsheets. I built a CRUD app for clients, volunteers, and matches, with CSV exports and matching constraints like drive time, overlapping availability, and shared languages so the coordinator has real signal when pairing.",
    highlight: ["Language Partners", "Project Worthmore"],
    stack: ["Next.js", "TypeScript", "Vercel", "Neon Postgres", "AWS"],
    links: [
      { label: "Project Worthmore", href: "https://projectworthmore.org" },
    ],
    image: "/projects/worthmore.png",
    imageMode: "contain",
    note: "Private repo",
    testimonial: {
      quote:
        "The app has been working great. I've been using it lots in the last month or so, gotten a handful of new pairings up and running. My favorite feature will forever be the drive time calculation!",
      author: "Program coordinator, Project Worthmore",
    },
  },
  {
    slug: "should-i-go",
    name: "should-i-go",
    tagline: "A financial tool I wish I'd had earlier in life.",
    description:
      "A financial tool to help young people make well-informed choices about higher education and careers. should-i-go pulls median salary data from the BLS, folds in financial-aid assumptions, and grounds those decisions in real numbers instead of vibes. Started by Mike Branconier in 2024; I've been leading it since early 2025.",
    highlight: ["should-i-go"],
    stack: ["Next.js", "TypeScript", "Vercel", "Neon Postgres", "BLS API"],
    links: [
      { label: "Live", href: "https://should-i-go.vercel.app" },
      { label: "GitHub", href: "https://github.com/mikebranc/should-i-go" },
    ],
    image: "/projects/should-i-go.png",
  },
];

export const forMe: Project[] = [
  {
    slug: "commander",
    name: "commander",
    tagline: "Vim-motion TUI for humans + a skill for the agents.",
    description:
      "Born from wanting multiple Claude Code sessions running in parallel without mentally tracking which one is on which branch or whose turn it is to hit the containers. Each session lives in its own worktree, but only one branch's code can run in the containers at a time. commander is two surfaces: a vim-motion TUI where I see every session's status and reply to whichever is blocked on my input, and a Claude Code skill that tells the sessions themselves when to take and release the lock.",
    highlight: ["commander"],
    stack: ["TypeScript", "Ink", "Node.js"],
    links: [
      { label: "GitHub", href: "https://github.com/senorale/commander" },
      { label: "Skill", href: "https://github.com/senorale/commander/blob/main/SKILL.md" },
    ],
    image: "/projects/commander.png",
  },
  {
    slug: "dockview",
    name: "dockview",
    tagline: "Vim-motion TUI: container status + prettified logs in one screen.",
    description:
      "I like Docker Desktop but got tired of clicking through it for something I use every day. dockview is a vim-motion TUI: live status and exposed port for every container in the current repo, hit enter for that container's prettified logs, esc back. No new tab, no docker logs incantation.",
    highlight: ["dockview"],
    stack: ["TypeScript", "Ink", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/senorale/dockview" }],
    image: "/projects/dockview.png",
    imagePosition: "left",
  },
];
