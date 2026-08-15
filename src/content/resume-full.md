# ALEJANDRO CARVAJAL

Denver, CO | [alecarvajaldev@gmail.com](mailto:alecarvajaldev@gmail.com) | [LinkedIn](https://linkedin.com/in/alejandro-carvajal-916b55190) | [GitHub](https://github.com/senorale) | [Portfolio](https://senorale-portfolio.vercel.app)

---

## PROFESSIONAL SUMMARY

Self-taught Senior Software Engineer, 4 years shipping production code at 8am/MyCase after pivoting from Customer Success at the same company. My operations background gives me strong instincts for product and user signals. Currently doing backend-heavy work in Ruby on Rails, SSO and cross-product identity. Notable work deliverables include Docker containerization of legacy Rails apps, framework upgrades, query and endpoint performance tuning, and internal AI dev tooling adopted across engineering. Full-stack when needed.

---

## TECHNICAL SKILLS

- **Languages:** Ruby, TypeScript, JavaScript
- **Backend:** Ruby on Rails, REST APIs, SSO / OAuth
- **Databases:** MySQL, PostgreSQL, OpenSearch
- **Frontend:** React, Next.js
- **Infra & tooling:** Docker, AWS, Datadog, Git
- **AI dev tooling:** Claude Code skills, custom CLI/TUI workflow automation

---

## WORK EXPERIENCE

### 8am / MyCase — Remote

#### Senior Software Engineer (SE III) | Jul 2026 – Present

- **Cross-product identity (SSO):** Implementing centralized identity and Single Sign-On across 8am's product suite, syncing user lifecycles across products and Salesforce.
- **Rails 8 upgrade:** Substantial contributor to the ongoing framework upgrade — working through deprecations, gem incompatibilities, and behavior drift across the monolith.
- **Performance:** Track and fix slow queries and endpoints (Datadog → EXPLAIN on prod-clone → benchmark rewrites).

#### Software Engineer II | Jul 2025 – Jul 2026

- **Search modernization:** Contributed to modernizing MyCase's search — refreshed the UI, added highlighted matches, and did my first significant OpenSearch work on the backend.
- **Monolith containerization:** Co-engineered full-stack Docker containerization of legacy bare-metal/EC2 Rails applications with a Staff Engineer, enabling DevOps to execute an eventual migration to AWS EKS.
- **Bulk deletion tool:** Built an internal tool for the data migration/onboarding team to run targeted large-scale deletions across multiple imports. Previously they could only undo an entire import; the new tool supports selective removal to enable correct re-imports.
- **Data Peek (internal tool):** Built Data Peek — surfaces customer data in UI similar to what the user sees so support can diagnose common issues without a screenshare. Cut screenshares out of routine escalations.

#### Software Engineer I | Jan 2023 – Jul 2025

- **Support admin tooling:** Grew the internal support admin from ~5 flows to ~20, turning recurring one-off scripts into self-serve buttons. Multi-day escalation cycles collapsed into in-call fixes support could run themselves — freeing engineering resources.
- **Access control:** Added tiered permission sets to the internal admin so teams beyond support could adopt it — with more destructive actions gated behind higher access levels.
- **Retention:** Improved the cancellation flow to surface alternate tiers and options to customers considering churn.
- **Data offboarding:** Built a pipeline to clean ex-customer data from the database after cancellation.

#### Sr. Customer Success Specialist / CSM / Associate CSM | Nov 2020 – Jan 2023

- Learned the product and the customer base deeply. Served as the CS team's liaison to engineering on software bugs, which is how I got exposure to the codebase and eventually the pivot into SE.

---

## FEATURED PROJECTS

### commander
Vim-motion TUI + Claude Code skill for running multiple Claude Code sessions in parallel worktrees. TUI surfaces every session's status; skill coordinates a shared container lock so only one branch runs against the dev stack at a time.
Stack: TypeScript, Ink, Node.js — [GitHub](https://github.com/senorale/commander)

### dockview
Vim-motion TUI replacement for the Docker Desktop click-through. Live status + exposed ports for every container in the current repo, one keystroke for prettified logs.
Stack: TypeScript, Ink, Node.js — [GitHub](https://github.com/senorale/dockview)

### should-i-go
Financial tool for young people evaluating higher-ed + career choices. Pulls median salary data from the BLS, folds in financial-aid assumptions, grounds the decision in real numbers. Leading the project since early 2025 (started by Mike Branconier in 2024).
Stack: Next.js, TypeScript, Vercel, Neon Postgres, BLS API — [Live](https://should-i-go.vercel.app)

### Project Worthmore (Volunteer Lead Software Engineer)
Built and maintain the internal CRUD app for Worthmore's Language Partners program (pairs clients with volunteers for weekly English practice). Replaced a spreadsheet workflow with real matching constraints: drive-time calc, overlapping availability, shared languages. CSV exports for coordinators.
Stack: Next.js, TypeScript, Vercel, Neon Postgres, AWS — [projectworthmore.org](https://projectworthmore.org)
_"The app has been working great… my favorite feature will forever be the drive time calculation!" — Program coordinator_

---

## EDUCATION

Westmont College — Santa Barbara, CA
Bachelor of Arts (BA), Communication and Media Studies | 2014 – 2018
