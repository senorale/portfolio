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
  note?: string;
  testimonial?: { quote: string; author?: string };
};

export const forOthers: Project[] = [
  {
    slug: "worthmore",
    name: "Language Partners",
    tagline: "Volunteer + client matching for one of Project Worthmore's programs.",
    description:
      "Project Worthmore runs a number of programs; this one is called Language Partners. It pairs a client with a volunteer who meets with them on a set cadence so the client can practice and learn English through conversation. Before this app existed, the whole thing was run out of spreadsheets. I built a CRUD app that manages clients, volunteers, and the matches between them, with CSV exports for whatever the program needs to report on. The interesting work was in the matching itself: drive time calculations, minimum overlapping availability windows, shared languages, and a few other constraints so the program coordinator has real signal when creating a pairing.",
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
    tagline: "A calculator I wish I'd had earlier in life.",
    description:
      "For young people trying to decide if college is right for them, and for anyone considering a career change who wants to know what a given occupation actually pays. Pulls median salary data from the BLS for any occupation they report on, then folds in financial-aid assumptions so the answer is grounded in real numbers instead of vibes. Collab project.",
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
    tagline: "One tool. Two surfaces: a TUI for me, a skill for the agents.",
    description:
      "Claude Code parallelizes best when each session lives in its own git worktree, but only one branch's code can run inside the docker containers at a time. commander is the coordinator. The human surface is a TUI showing the live status of every session across worktrees, highlighting whichever one is blocked on my input so I can jump straight to it and reply from inside commander. The agent surface is a Claude Code skill that tells sessions when to `take` and `release` the lock themselves, so they can run containerized code without stomping on each other. Written entirely with Claude Code.",
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
    tagline: "Terminal UI for Docker containers, with vim motions.",
    description:
      "A TUI for Docker that speaks vim. Faster than Docker Desktop, faster than typing docker commands. Written entirely with Claude Code.",
    stack: ["TypeScript", "Ink", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/senorale/dockview" }],
    image: "/projects/dockview.png",
  },
];
