## PROFESSIONAL SUMMARY

Self-taught Senior Software Engineer. 4 years building multi-tenant SaaS platform serving law firms nationwide at 8am/MyCase. I pivoted from Customer Success internally, my operations background gives me strong instincts for product and user signals. Currently doing backend-heavy work in Ruby on Rails, SSO and cross-product identity. Notable work deliverables include Docker containerization of the Rails monolith and its supporting services, framework upgrades, query and endpoint performance tuning, and internal AI dev tooling adopted across engineering. Full-stack when needed.

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

- **Monolith + services containerization:** Co-engineered full-stack Docker containerization of the legacy bare-metal/EC2 Rails monolith and its supporting services with a Staff Engineer, enabling DevOps to execute an eventual migration to AWS EKS.
- **Search modernization:** Contributed to modernizing MyCase's search — refreshed the UI, added highlighted matches, and did my first significant OpenSearch work on the backend.
- **Data Migration clean up (internal tool):** Built a bulk-delete tool for the data migration team — previously any customer-reported data issue forced a full rollback of the affected import (or every import if the fix spanned several). Now the team can target the specific records those imports created and remove only what's broken.
- **Data Peek (internal tool):** Built Data Peek — surfaces customer data in UI similar to what the user sees so support can diagnose common issues without a screenshare. Cut screenshares out of routine escalations.

#### Software Engineer I | Jan 2023 – Jul 2025

- **Support admin tooling:** Grew the internal support admin from ~5 flows to ~20, turning recurring one-off scripts into self-serve buttons. Multi-day escalation cycles collapsed into in-call fixes support could run themselves — freeing engineering resources.
- **Access control:** Added tiered permission sets to the internal admin so teams beyond support could adopt it — with more destructive actions gated behind higher access levels.
- **Retention:** Improved the cancellation flow to surface alternate tiers and options to customers considering churn.
- **Data offboarding:** Built a pipeline to clean ex-customer data from the database after cancellation.

#### Sr. Customer Success Specialist / CSM / Associate CSM | Nov 2020 – Jan 2023

- Learned the product and the customer base deeply. Served as the CS team's liaison to engineering on software bugs, which is how I got exposure to the codebase and eventually the pivot into SE.

---

## EDUCATION

Westmont College — Santa Barbara, CA
Bachelor of Arts (BA), Communication and Media Studies | 2014 – 2018

---

## [FEATURED PROJECTS](/)
