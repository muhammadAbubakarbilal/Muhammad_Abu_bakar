# Website Business Audit Handoff

Inspection date: 16 October 2026. Local development runtime, current working tree. Inspection and documentation only.

## 1. Executive Project Overview

**The effective website is an exported Framer site served by Next.js, with additional React pages still reachable.** Do not audit only the React homepage: a beforeFiles rewrite shadows it. The active homepage is [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html); routing authority is [next.config.ts](./next.config.ts) and [public/_launchfolio/portfolio-routes.json](./public/_launchfolio/portfolio-routes.json).

The primary journey is homepage → service list/project studies → contact overlay → locally prepared email draft → visitor sends through their email application. No booking, CRM update or delivered inquiry was verified. Four project studies are promoted; three additional React work studies and one React article remain reachable. Five residual design-template teasers also appear in the blog listing.

Evidence labels: **Observed/runtime** means rendered locally in this run; **Source** means established from implementation; **Interpretation** means an assessment, not a verified business outcome. DOM transcripts include collapsible/animated content, not necessarily simultaneous visibility. Old screenshots and QA reports were not treated as current proof.

The working tree was already extensively modified before inspection. Website source, styling, content and configuration were not edited. Only this report and audit screenshots were authored in the project. Running the existing development task may update ignored Next caches. No dependencies were installed.

## 2. Business Positioning and Target Audience

**User's intended positioning:** understand business problems and implement practical websites, landing pages, AI assistants, CRM/follow-up, onboarding, automation, integrations and custom software for business owners, service professionals and agency owners.

**Actual copy:** “Websites, AI & systems. Built for business.” Hero: “I design professional websites and build AI assistants, CRM workflows, and custom software that help businesses manage inquiries, connect their tools, and reduce repetitive work.” About: “The right solution depends on the actual process—not the latest tool.” Role: “AI Systems & Automation Engineer.” Sources [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html), [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js), [scripts/business-content.cjs](./scripts/business-content.cjs).

**Interpretation:** a mixture of A (skills/capabilities: My toolkit, What I build, engineer title) and B (visitor outcomes: inquiries, connected tools, repetitive work and human handoffs). Business-first intent is explicit, but the first offer is still framed as things built. The hero names businesses broadly; agency and service-business contexts appear in studies. No diagnosis product, measurable results guarantee or verified client history is established. No copy was rewritten.

## 3. Technical Architecture Summary

| Area | Implementation / source |
|---|---|
| Framework | Next dependency ^15.4.9; installed version 15.5.27 verified locally. React dependency ^19.2.1. [package.json](./package.json), [package-lock.json](./package-lock.json). |
| Routing | 14 beforeFiles rewrites to static HTML; redirects supersede corresponding React pages. [next.config.ts](./next.config.ts), [public/_launchfolio/portfolio-routes.json](./public/_launchfolio/portfolio-routes.json). |
| Export runtime | HTML says Made in Framer; generator Framer 4ecd144. Local assets/runtime in [public/_launchfolio/assets](./public/_launchfolio/assets) and [public/_launchfolio/runtime](./public/_launchfolio/runtime). |
| Active copy | HTML plus [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) literal/scoped bindings and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js) page body/metadata corrections. Generation sources [scripts/business-content.cjs](./scripts/business-content.cjs), [scripts/content-runtime.js](./scripts/content-runtime.js), [scripts/personalize-reference.cjs](./scripts/personalize-reference.cjs). |
| Active styling | Inline Framer CSS and [public/_launchfolio/portfolio.css](./public/_launchfolio/portfolio.css). Export navigation/footer are repeated document components, not the React shell. |
| Active interaction | Framer runtime, [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js), [public/_launchfolio/contact-alias.js](./public/_launchfolio/contact-alias.js). |
| React shell | [app/layout.tsx](./app/layout.tsx), [components/Navbar.tsx](./components/Navbar.tsx), [components/Footer.tsx](./components/Footer.tsx), [components/AssistantLauncher.tsx](./components/AssistantLauncher.tsx), [components/LaunchMotion.tsx](./components/LaunchMotion.tsx); used on remaining React pages. |
| React content/design | [lib/data.ts](./lib/data.ts), [lib/site.ts](./lib/site.ts); Tailwind v4/custom CSS in [app/globals.css](./app/globals.css), [app/launchfolio.css](./app/launchfolio.css), [app/spacing.css](./app/spacing.css). Switzer/light overrides original Geist/dark globals. |
| Motion | Export Framer runtime for main experience; Motion and Lenis for remaining React pages. |
| Forms/APIs | Export form prepares mailto draft; POST /api/contact and /api/assistant exist separately. [app/api/contact/route.ts](./app/api/contact/route.ts), [app/api/assistant/route.ts](./app/api/assistant/route.ts). |
| SEO | Export metadata and runtime corrections; separate React Metadata exports, sitemap and robots. |

Authored copy is bundled, not fetched from a live CMS/database. Generated files and React data can differ. [components/SystemConnection.tsx](./components/SystemConnection.tsx) and [components/Breadcrumbs.tsx](./components/Breadcrumbs.tsx) exist but were not found mounted by the current pages; do not claim their functionality as visitor-facing merely because the files exist.

## 4. Complete Page and Route Inventory

| URL | Browser title | Source | HTTP status |
|---|---|---|---|
| / | Muhammad Abu Bakar  /  Websites, AI & Business Systems | [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html) | 200 |
| /projects | Projects | [public/_launchfolio/pages/projects/index.html](./public/_launchfolio/pages/projects/index.html) | 200 |
| /blog | Blog | [public/_launchfolio/pages/blog/index.html](./public/_launchfolio/pages/blog/index.html) | 200 |
| /projects/personal-engineering-studio | A personal portfolio built around the work. | [public/_launchfolio/pages/projects/essentia/index.html](./public/_launchfolio/pages/projects/essentia/index.html) | 200 |
| /projects/agency-lead-operations | A clearer path from inquiry to follow-up. | [public/_launchfolio/pages/projects/quantum/index.html](./public/_launchfolio/pages/projects/quantum/index.html) | 200 |
| /projects/local-service-receptionist | An AI receptionist with a human handoff. | [public/_launchfolio/pages/projects/orbital/index.html](./public/_launchfolio/pages/projects/orbital/index.html) | 200 |
| /projects/b2b-customer-onboarding | A more organized start for every project. | [public/_launchfolio/pages/projects/axiom/index.html](./public/_launchfolio/pages/projects/axiom/index.html) | 200 |
| /blog/how-to-identify-which-workflow-to-automate-first | Choosing your first automation | [public/_launchfolio/pages/blog/how-designers-and-developers-can-actually-collaborate/index.html](./public/_launchfolio/pages/blog/how-designers-and-developers-can-actually-collaborate/index.html) | 200 |
| /blog/where-lead-follow-up-systems-break | Where lead follow-up loses context | [public/_launchfolio/pages/blog/why-faster-isn-t-always-better/index.html](./public/_launchfolio/pages/blog/why-faster-isn-t-always-better/index.html) | 200 |
| /blog/human-ai-automated-framework | People, AI and automation | [public/_launchfolio/pages/blog/designing-for-human-connection/index.html](./public/_launchfolio/pages/blog/designing-for-human-connection/index.html) | 200 |
| /terms | Terms of Service | [public/_launchfolio/pages/terms/index.html](./public/_launchfolio/pages/terms/index.html) | 200 |
| /privacy-policy | Privacy Policy | [public/_launchfolio/pages/privacy-policy/index.html](./public/_launchfolio/pages/privacy-policy/index.html) | 200 |
| /blog/why-more-saas-means-more-spreadsheets | When more tools create more work | [public/_launchfolio/pages/blog/beyond-minimalism-what-s-next-in-web-design/index.html](./public/_launchfolio/pages/blog/beyond-minimalism-what-s-next-in-web-design/index.html) | 200 |
| /blog/reliable-human-in-the-loop-ai | Designing a useful human handoff | [public/_launchfolio/pages/blog/when-to-rebrand-signs-your-identity-is-holding-you-back/index.html](./public/_launchfolio/pages/blog/when-to-rebrand-signs-your-identity-is-holding-you-back/index.html) | 200 |
| /work/knowledge-intelligence-rag | Document Knowledge System — Muhammad Abu Bakar | [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx) | 200 |
| /work/multi-channel-crm-sync | Connected CRM Workflows — Muhammad Abu Bakar | [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx) | 200 |
| /work/custom-ops-portal | Operations & Dispatch Portal — Muhammad Abu Bakar | [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx) | 200 |
| /insights/website-chatbot-crm-architecture | Connecting a website, assistant and CRM — Muhammad Abu Bakar | [app/insights/[slug]/page.tsx](./app/insights/[slug]/page.tsx) | 200 |
| /audit-missing-page | Muhammad Abu Bakar — AI Systems & Automation Engineer | [app/not-found.tsx](./app/not-found.tsx) | 404 |

First 14 rows are exported rewrites; four additional successful content pages use React. The synthetic /audit-missing-page is a tested 404 state, not an authored page.

**Redirects** ([next.config.ts](./next.config.ts)): /work → /projects; first four matching /work/[slug] → /projects/[slug]; /insights → /blog; five matching /insights/[slug] → /blog/[slug]; /systems → /#services; /process → /#pricing; /faq and /faqs → /#faq; /about → /; /contact → /?contact=1. Configuration sets permanent:false. The permanent redirect inside app/faqs is superseded.

**Other endpoints:** /api/contact, /api/assistant (POST); /robots.txt and /sitemap.xml from [app/robots.ts](./app/robots.ts), [app/sitemap.ts](./app/sitemap.ts). Raw /_launchfolio/pages/... HTML and assets are public files, not separate primary navigation pages. Unknown slugs return 404.

**Shadowed pages inspected:** [app/page.tsx](./app/page.tsx), [app/about/page.tsx](./app/about/page.tsx), [app/contact/page.tsx](./app/contact/page.tsx), [app/systems/page.tsx](./app/systems/page.tsx), [app/process/page.tsx](./app/process/page.tsx), [app/faq/page.tsx](./app/faq/page.tsx), [app/faqs/page.tsx](./app/faqs/page.tsx), [app/work/page.tsx](./app/work/page.tsx), [app/insights/page.tsx](./app/insights/page.tsx). Their content must not be mistaken for the effective export. Dynamic React work/article templates remain relevant for the four extra URLs above.

## 5. Homepage Section-by-Section Breakdown

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html); bindings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js), [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Components below are identified by data-framer-name. Before sections, floating navigation shows the name/portrait and expands to Work, Services, Pricing, Blog, Contact. CSS-generated ticker labels Next.js, React, TypeScript, Node.js, APIs, PostgreSQL are not all in DOM innerText.

### 1. Hero

**Position:** 1. **Anchor:** #hero. **Purpose (interpretation):** Initial offer and inquiry invitation.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Discuss your next project

Websites, AI & systems. 
Built for business.

I design professional websites and build AI assistants, CRM workflows, and custom software that help businesses manage inquiries, connect their tools, and reduce repetitive work.

You

Discuss a project with me

Websites · AI · Automation
```

**Visuals/responsiveness:** Desktop text/portrait/animated card stack; mobile stacks and omits desktop portrait backdrop.

**CTAs and states:** Discuss a project with me → /?contact=1 → contact overlay. No separate secondary text CTA.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 2. Latest Projects

**Position:** 2. **Anchor:** #projects. **Purpose (interpretation):** Selected work and evidence labels.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Latest Projects

Portfolio Studio

Independent website

View Project

Lead Operations

Automation demo

View Project

AI Receptionist

Assistant demo

View Project

Onboarding

Workflow concept

View Project

View all my projects
```

**Visuals/responsiveness:** Desktop two-column grid with scroll-linked card transforms; mobile single column.

**CTAs and states:** View Project cards → four corresponding /projects/[slug]. View all my projects → /projects.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 3. Big Quote Testimonial

**Position:** 3. **Anchor:** No section ID. **Purpose (interpretation):** Working philosophy, not customer testimony.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
A clear interface, a reliable workflow and a person in the loop when it matters.

Connected thinking

Project approach
```

**Visuals/responsiveness:** Centered statement and attribution to a principle, not a client.

**CTAs and states:** No CTA. Internal name includes Testimonial, but visible content is a working principle.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 4. Services

**Position:** 4. **Anchor:** #services. **Purpose (interpretation):** Capability overview and toolkit.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
What I build for businesses.

My toolkit

Figma

Framer

Webflow

Rive

Blender

Trello

ChatGPT

Claude

Website Development

AI Assistants

Custom Software

Landing Pages

Workflow Automation

CRM & Follow-up

Systems Consulting
```

**Visuals/responsiveness:** Desktop heading/toolkit beside seven service labels; mobile stacked.

**CTAs and states:** Service rows are labels; no individual links appeared in the link inventory. Toolkit labels are Figma, Framer, Webflow, Rive, Blender, Trello, ChatGPT, Claude.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 5. About Me

**Position:** 5. **Anchor:** No section ID. **Purpose (interpretation):** Personal introduction and approach.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Building solutions
around real business needs.

Let’s connect

Muhammad Abu Bakar

AI Systems & Automation Engineer

Selected work

Lead Operations

Automation Demo

Demo system

AI Receptionist

Assistant Demo

Demo system

Onboarding

Concept Build

Concept study

Show all

I build websites, AI assistants, and custom software. I start by understanding what a business needs, who will use the solution, and what needs to work better.

Sometimes that's a clearer website. Sometimes it's a connected CRM, better follow-up, or an automated workflow. The right solution depends on the actual process—not the latest tool.

I focus on simple interfaces, reliable connections, and clear handoffs. You see the work in stages, understand what's being built, and stay involved in decisions that matter.
```

**Visuals/responsiveness:** Desktop portrait/work history beside copy; mobile copy appears before portrait.

**CTAs and states:** Let’s connect and social icons; Show all work-history affordance exists, expanded contents not fully tested. /about redirects to homepage root.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 6. Pricing

**Position:** 6. **Anchor:** #pricing. **Purpose (interpretation):** Scope/process and engagement options.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Clear scope. 
Practical solutions.

Every project starts with what your business needs—whether that's a website, AI assistant, custom application, or connected workflow.

Discuss

Share your goals, current tools and the problem you want to solve.

Define

Agree the scope, technical approach and what a useful result looks like.

Build

Review the work in stages, then prepare the agreed handoff.

Clear milestones and reviews

Digital solutions for your business.

Start a conversation

Hire me today

Work directly with the person designing and building your solution.

Project Collaboration

Websites, AI assistants, and connected systems built around a clearly defined project scope.

Let’s talk

/ project

Scope agreed before work begins

Clear milestones and reviews

Your existing tools

Defined deliverables

Agreed delivery schedule

Website development

Get Started

Single Project

A focused website, application, or automation project with agreed deliverables, timelines, and review stages.

Clearly defined scope

Agreed timeline

Agreed review stages

Milestone updates

Get quote
```

**Visuals/responsiveness:** Desktop process/engagement cards; mobile vertical flow and alternate promo wording.

**CTAs and states:** Get Started → contact interceptor; Get quote → Contact Form button. No checkout or fixed numeric price. Mobile promo says Connected digital systems built for your business.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 7. Testimonials

**Position:** 7. **Anchor:** No section ID. **Purpose (interpretation):** Six working principles.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
A thoughtful approach, from start to finish.

Websites · AI · Automation

Start with the business goal and the people using the solution. Define the work before choosing tools.

Clear scope

How I work

Consider how the website, customer information, and everyday tools need to work together.

Connected thinking

Project approach

Use AI where it helps, while keeping important decisions with the people responsible.

People in the loop

Project approach

Make the experience clear for customers, staff, and anyone who needs to use it.

Purposeful design

How I work

Share work in stages so feedback can shape the solution before delivery.

Reviewable progress

How I work

Agree on launch, documentation, maintenance, and next steps before the project is completed.

Practical handoff

How I work
```

**Visuals/responsiveness:** Desktop card grid; mobile carousel-like card area means not all six simultaneously visible.

**CTAs and states:** Six principles, not six client testimonials. Mobile visibility depends on carousel position.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 8. FAQ

**Position:** 8. **Anchor:** #faq. **Purpose (interpretation):** Objection handling.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Your questions
answered.

01

How long does a typical project take to complete?

Timing depends on the scope, integrations and material already available. We discuss the requirements before agreeing a delivery plan.

02

Can you work with my existing brand and designs?

Yes. I review your existing website, tools and APIs before proposing changes, so the solution fits your current setup.

03

What makes your design process unique?

I map the interface and the workflow together. You review the work in stages, and important decisions stay with the people responsible for them.

04

Do you offer ongoing support after the project is completed?

Handoff, maintenance and ongoing support are agreed for the specific project before launch.

05

How do you handle confidentiality and intellectual property rights?

Access, storage and provider requirements are considered during scoping. Confidentiality and ownership terms are agreed in the project proposal.

Still not sure?
Discuss your project.

Learn more about how I work and how I can help you and your business take the next step.

Let's Talk
```

**Visuals/responsiveness:** FAQ plus sidebar on desktop; stacked on mobile.

**CTAs and states:** Five expandable questions; first answer initially visible. Other answers are in DOM but clipped until expanded. Let's Talk → contact.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 9. Articles

**Position:** 9. **Anchor:** No section ID. **Purpose (interpretation):** Educational articles.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Practical insights on
websites, AI & systems.

View All

Choosing your first automation

Mar 6, 2025

By Muhammad Abu Bakar

Start with a recurring task whose rules and failure cases you understand.

Where lead follow-up loses context

Apr 22, 2025

By Muhammad Abu Bakar

People, AI and automation

Apr 1, 2025

By Muhammad Abu Bakar
```

**Visuals/responsiveness:** Featured article and two secondary cards; mobile single column.

**CTAs and states:** View All → /blog; three cards → matching article routes. Dates are displayed claims, not verified publishing history.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.

### 10. Footer

**Position:** 10. **Anchor:** No section ID. **Purpose (interpretation):** Contact/navigation/legal.

**Exact heading/subheading/body/card copy, in DOM order:**

```text
Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

**Visuals/responsiveness:** Dark footer with rotating design/build/create and reflowed nav groups.

**CTAs and states:** Email/Get in touch → mailto; legal → /terms and /privacy-policy; social behavior in section 10.

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Full link table in section 10.


## 6. Complete Visible Website Copy

The following are exact rendered DOM transcripts, including shared navigation/footer so another auditor can reconstruct each page. FAQ answers, offscreen carousel items and cycling words may appear even when not simultaneously visible. No copy has been rewritten. Empty generated headings are not invented as content. For secondary pages, section sequence/headings/body/trust claims are below, CTAs/links in section 10 and source/screenshot immediately above each transcript.

### /

Source: [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/home-1440.png](./audit-screenshots/home-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Discuss your next project

Websites, AI & systems. 
Built for business.

I design professional websites and build AI assistants, CRM workflows, and custom software that help businesses manage inquiries, connect their tools, and reduce repetitive work.

You

Discuss a project with me

Websites · AI · Automation

Latest Projects

Portfolio Studio

Independent website

View Project

Lead Operations

Automation demo

View Project

AI Receptionist

Assistant demo

View Project

Onboarding

Workflow concept

View Project

View all my projects

A clear interface, a reliable workflow and a person in the loop when it matters.

Connected thinking

Project approach

What I build for businesses.

My toolkit

Figma

Framer

Webflow

Rive

Blender

Trello

ChatGPT

Claude

Website Development

AI Assistants

Custom Software

Landing Pages

Workflow Automation

CRM & Follow-up

Systems Consulting

Building solutions
around real business needs.

Let’s connect

Muhammad Abu Bakar

AI Systems & Automation Engineer

Selected work

Lead Operations

Automation Demo

Demo system

AI Receptionist

Assistant Demo

Demo system

Onboarding

Concept Build

Concept study

Show all

I build websites, AI assistants, and custom software. I start by understanding what a business needs, who will use the solution, and what needs to work better.

Sometimes that's a clearer website. Sometimes it's a connected CRM, better follow-up, or an automated workflow. The right solution depends on the actual process—not the latest tool.

I focus on simple interfaces, reliable connections, and clear handoffs. You see the work in stages, understand what's being built, and stay involved in decisions that matter.

Clear scope. 
Practical solutions.

Every project starts with what your business needs—whether that's a website, AI assistant, custom application, or connected workflow.

Discuss

Share your goals, current tools and the problem you want to solve.

Define

Agree the scope, technical approach and what a useful result looks like.

Build

Review the work in stages, then prepare the agreed handoff.

Clear milestones and reviews

Digital solutions for your business.

Start a conversation

Hire me today

Work directly with the person designing and building your solution.

Project Collaboration

Websites, AI assistants, and connected systems built around a clearly defined project scope.

Let’s talk

/ project

Scope agreed before work begins

Clear milestones and reviews

Your existing tools

Defined deliverables

Agreed delivery schedule

Website development

Get Started

Single Project

A focused website, application, or automation project with agreed deliverables, timelines, and review stages.

Clearly defined scope

Agreed timeline

Agreed review stages

Milestone updates

Get quote

Built with modern tools

A thoughtful approach, from start to finish.

Websites · AI · Automation

Start with the business goal and the people using the solution. Define the work before choosing tools.

Clear scope

How I work

Consider how the website, customer information, and everyday tools need to work together.

Connected thinking

Project approach

Use AI where it helps, while keeping important decisions with the people responsible.

People in the loop

Project approach

Make the experience clear for customers, staff, and anyone who needs to use it.

Purposeful design

How I work

Share work in stages so feedback can shape the solution before delivery.

Reviewable progress

How I work

Agree on launch, documentation, maintenance, and next steps before the project is completed.

Practical handoff

How I work

Your questions
answered.

01

How long does a typical project take to complete?

Timing depends on the scope, integrations and material already available. We discuss the requirements before agreeing a delivery plan.

02

Can you work with my existing brand and designs?

Yes. I review your existing website, tools and APIs before proposing changes, so the solution fits your current setup.

03

What makes your design process unique?

I map the interface and the workflow together. You review the work in stages, and important decisions stay with the people responsible for them.

04

Do you offer ongoing support after the project is completed?

Handoff, maintenance and ongoing support are agreed for the specific project before launch.

05

How do you handle confidentiality and intellectual property rights?

Access, storage and provider requirements are considered during scoping. Confidentiality and ownership terms are agreed in the project proposal.

Still not sure?
Discuss your project.

Learn more about how I work and how I can help you and your business take the next step.

Let's Talk

Practical insights on
websites, AI & systems.

View All

Choosing your first automation

Mar 6, 2025

By Muhammad Abu Bakar

Start with a recurring task whose rules and failure cases you understand.

Where lead follow-up loses context

Apr 22, 2025

By Muhammad Abu Bakar

People, AI and automation

Apr 1, 2025

By Muhammad Abu Bakar

Speak to me

Email or discuss a project

Contact

Let's Talk

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /projects

Source: [public/_launchfolio/pages/projects/index.html](./public/_launchfolio/pages/projects/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/projects-1440.png](./audit-screenshots/projects-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

My most recent work

A selection of websites, AI assistants, and business systems I've worked on.

Portfolio Studio

Independent website

View Project

Lead Operations

Automation demo

View Project

AI Receptionist

Assistant demo

View Project

Onboarding

Workflow concept

View Project

Built with modern tools

Websites · AI · Automation

Like what you see?
Discuss your project.

Let's Talk

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /blog

Source: [public/_launchfolio/pages/blog/index.html](./public/_launchfolio/pages/blog/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/blog-1440.png](./audit-screenshots/blog-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Practical notes on websites, AI & automation.

Thoughts on building useful digital experiences, connecting business tools, and deciding where automation makes sense.

Choosing your first automation

Mar 6, 2025

By Muhammad Abu Bakar

Start with a recurring task whose rules and failure cases you understand.

All
Psychology
Strategy
Trends
Process
Where lead follow-up loses context

Apr 22, 2025

By Muhammad Abu Bakar

A useful customer process keeps the inquiry, owner and next action together.

People, AI and automation

Apr 1, 2025

By Muhammad Abu Bakar

Three different kinds of work need three different kinds of responsibility.

When more tools create more work

Feb 3, 2025

By Muhammad Abu Bakar

Review the connections before adding another platform.

Designing a useful human handoff

Jan 1, 2025

By Muhammad Abu Bakar

Make AI uncertainty visible and give the reviewer enough context to act.

The design subscription model - why make the switch?

Mar 20, 2025

By Muhammad Abu Bakar

Design subscriptions offer 70% cost savings and 10x faster delivery. Learn why forward-thinking companies are switching from traditional agencies and freelancers.

Building brands that scale.

Apr 16, 2025

By Muhammad Abu Bakar

The brand that gets you to $1M will strangle you at $100M. Learn how to build flexible brand systems that grow with your business, not against it.

The science of first impressions.

Feb 28, 2025

By Muhammad Abu Bakar

Users judge websites in 50 milliseconds. Understand the neuroscience behind snap judgments and engineer better first impressions that convert visitors into customers.

the science behind color perception.

Apr 23, 2025

By Muhammad Abu Bakar

Color drives 90% of snap judgments online. Master digital color psychology, accessibility, and systems that influence user behavior and boost conversions.

The psychology of white space.

Feb 12, 2025

By Muhammad Abu Bakar

White space isn't empty—it's your most powerful design tool. Learn why generous spacing improves comprehension 32% and drives premium perception.

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /projects/personal-engineering-studio

Source: [public/_launchfolio/pages/projects/essentia/index.html](./public/_launchfolio/pages/projects/essentia/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/projects-personal-engineering-studio-1440.png](./audit-screenshots/projects-personal-engineering-studio-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

A personal portfolio built around the work.

Project

Portfolio Studio

Study

2026

An independent website presenting my work in websites, AI assistants, and business systems. Responsive pages help visitors explore the services and clearly labeled project studies.

Scope of Work

Interface Design

Web Design

Discuss a similar project

A closer look at the system.

The portfolio brings project summaries, service information, and an inquiry path into one place. Demo studies are identified separately from the independent website build.

The experience and the architecture.

The interface adapts to desktop and mobile screens, with animated project previews and readable case studies. Each section helps visitors understand the work and decide what to explore next.

Clear stages and human handoffs.

The inquiry form prepares an email draft for the visitor to review and send. Scope, timing, and pricing are discussed directly before any project commitments.

A clear interface, a reliable workflow and a person in the loop when it matters.

Clear scope

Project approach

More Projects

Have a project in mind? Let’s explore what you need.

Lead Operations

Automation demo

View Project

View all my projects

Built with modern tools

Websites · AI · Automation

Like what you see?
Discuss your project.

Let's Talk

Speak to me

Email or discuss a project

Contact

Let's Talk

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /projects/agency-lead-operations

Source: [public/_launchfolio/pages/projects/quantum/index.html](./public/_launchfolio/pages/projects/quantum/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/projects-agency-lead-operations-1440.png](./audit-screenshots/projects-agency-lead-operations-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

A clearer path from inquiry to follow-up.

Project

Lead Operations

Study

2024

An automation demo exploring how an agency could organize incoming inquiries, assist with qualification, and keep follow-up information together. It is not a verified client deployment.

The proposed workflow captures inquiry details and organizes them for review. A shared customer record gives the team context for the next conversation.

Scope of Work

AI Assistants

Web Design

Visual Design

Website Development

Discuss a similar project

A closer look at the system.

The proposed workflow captures inquiry details and organizes them for review. A shared customer record gives the team context for the next conversation.

The experience and the architecture.

AI can help summarize an inquiry and suggest a qualification category. Defined workflow rules would pass reviewed information to the CRM and support follow-up tasks.

Clear stages and human handoffs.

People review uncertain inquiries, approve important decisions, and handle the sales conversation. Delivery, integrations, and follow-up rules would be confirmed for the business.

A clear interface, a reliable workflow and a person in the loop when it matters.

Connected thinking

Project approach

More Projects

Portfolio Studio

Independent website

View Project

AI Receptionist

Assistant demo

View Project

View all my projects

Built with modern tools

Websites · AI · Automation

Like what you see?
Discuss your project.

Let's Talk

Speak to me

Email or discuss a project

Contact

Let's Talk

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /projects/local-service-receptionist

Source: [public/_launchfolio/pages/projects/orbital/index.html](./public/_launchfolio/pages/projects/orbital/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/projects-local-service-receptionist-1440.png](./audit-screenshots/projects-local-service-receptionist-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

An AI receptionist with a human handoff.

Project

AI Receptionist

Study

2025

An assistant demo for routine service inquiries. The concept collects useful details and directs conversations to a person when the request needs judgment or confirmation.

Customers could ask routine questions and explain what they need. The assistant would use approved business information and collect details for the team.

Scope of Work

Web App Development

Visual Design

Workflow Architecture

UI Consultation

Discuss a similar project

A closer look at the system.

Customers could ask routine questions and explain what they need. The assistant would use approved business information and collect details for the team.

The experience and the architecture.

The proposed workflow keeps the conversation and relevant customer details together. Appointment requests would be passed on for confirmation rather than treated as guaranteed bookings.

Clear stages and human handoffs.

A person handles exceptions, confirms availability and pricing, and takes over important conversations. This demo does not establish autonomous booking or service accuracy.

A clear interface, a reliable workflow and a person in the loop when it matters.

People in the loop

Project approach

More Projects

Lead Operations

Automation demo

View Project

Onboarding

Workflow concept

View Project

View all my projects

Built with modern tools

Websites · AI · Automation

Like what you see?
Discuss your project.

Let's Talk

Speak to me

Email or discuss a project

Contact

Let's Talk

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /projects/b2b-customer-onboarding

Source: [public/_launchfolio/pages/projects/axiom/index.html](./public/_launchfolio/pages/projects/axiom/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/projects-b2b-customer-onboarding-1440.png](./audit-screenshots/projects-b2b-customer-onboarding-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

A more organized start for every project.

Project

Onboarding

Study

2025

A workflow concept for business customer onboarding. It brings intake details, requested documents, and a readiness checklist into a clearer handoff for the team.

Scope of Work

Custom Development

Interface Design

Web Design

Integrations

Discuss a similar project

A closer look at the system.

The proposed intake gathers the information needed to begin a project. A checklist makes missing details and outstanding documents easier to identify.

The experience and the architecture.

Document checks could flag incomplete information for review. Reminders and status updates would help customers and staff understand what is still needed.

Clear stages and human handoffs.

The responsible team reviews documents, resolves exceptions, and confirms readiness before kickoff. The concept describes a proposed workflow, not a deployed client system.

A clear where it helps, while keeping important in the loop when it matters.

People in the loop

Project approach

More Projects

AI Receptionist

Assistant demo

View Project

Have a project in mind? Let’s explore what you need.

View all my projects

Built with modern tools

Websites · AI · Automation

Like what you see?
Discuss your project.

Let's Talk

Speak to me

Email or discuss a project

Contact

Let's Talk

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /blog/how-to-identify-which-workflow-to-automate-first

Source: [public/_launchfolio/pages/blog/how-designers-and-developers-can-actually-collaborate/index.html](./public/_launchfolio/pages/blog/how-designers-and-developers-can-actually-collaborate/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/blog-how-to-identify-which-workflow-to-automate-first-1440.png](./audit-screenshots/blog-how-to-identify-which-workflow-to-automate-first-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Blog

/

Process

/

Choosing your first automation

Choosing your first automation

Mar 6, 2025

By Muhammad Abu Bakar

Start with a recurring task whose rules and failure cases you understand.

The useful starting point is a real task, not a new tool. I look for repeated work with clear rules and a manageable cost if something goes wrong.

Observe the work first

Write down who does the task, what information they need and how they know it is finished. Ask the people doing it where they spend time correcting or copying information.

Simplify before connecting

Remove unnecessary approvals and clarify ownership before automating the process. A workflow that is unclear to a person will also be difficult to encode in software.

Start with a bounded change

An intake checklist or internal notification can be a useful first step. Test missing inputs, duplicate events and provider failures, then compare the result with the original process.

Choose a small, observable improvement and measure it before expanding.

Explore more of my work

Websites, AI assistants and automation: practical notes and documented project studies.

Let’s connect

More insights 

View All

Choosing your first automation

Mar 6, 2025

Where lead follow-up loses context

Mar 6, 2025

People, AI and automation

Mar 6, 2025

When more tools create more work

Mar 6, 2025

Designing a useful human handoff

Mar 6, 2025

The design subscription model - why make the switch?

Mar 6, 2025

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /blog/where-lead-follow-up-systems-break

Source: [public/_launchfolio/pages/blog/why-faster-isn-t-always-better/index.html](./public/_launchfolio/pages/blog/why-faster-isn-t-always-better/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/blog-where-lead-follow-up-systems-break-1440.png](./audit-screenshots/blog-where-lead-follow-up-systems-break-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Blog

/

Process

/

Where lead follow-up loses context

Where lead follow-up loses context

Apr 22, 2025

By Muhammad Abu Bakar

A useful customer process keeps the inquiry, owner and next action together.

A website form is only the start of an inquiry. The important question is what happens to its information next, and who is responsible for responding.

Give each inquiry an owner

Capture the details needed for a useful conversation and assign a responsible person. Keep the next action visible in the place that person already works.

Connect the handoffs

A CRM record, booking request and follow-up message should refer to the same inquiry. Defined rules can update those records without asking people to copy the same information again.

Keep the conversation human

AI can help summarize an inquiry, but it should not invent a budget, commitment or qualification decision. A person reviews important details and handles the actual business relationship.

Better follow-up starts with clear ownership and preserved context.

Explore more of my work

Websites, AI assistants and automation: practical notes and documented project studies.

Let’s connect

More insights 

View All

Choosing your first automation

Apr 22, 2025

People, AI and automation

Apr 22, 2025

When more tools create more work

Apr 22, 2025

Designing a useful human handoff

Apr 22, 2025

The design subscription model - why make the switch?

Apr 22, 2025

Building brands that scale.

Apr 22, 2025

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /blog/human-ai-automated-framework

Source: [public/_launchfolio/pages/blog/designing-for-human-connection/index.html](./public/_launchfolio/pages/blog/designing-for-human-connection/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/blog-human-ai-automated-framework-1440.png](./audit-screenshots/blog-human-ai-automated-framework-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Blog

/

Trends

/

People, AI and automation

People, AI and automation

Apr 1, 2025

By Muhammad Abu Bakar

Three different kinds of work need three different kinds of responsibility.

I separate defined rules, interpretation and accountable decisions when planning a system. That makes it easier to choose useful tools and explain their limits.

Use code for defined rules

Record updates, calculations and notifications belong in conventional code when the rules are known. Validate inputs and plan for failures rather than assuming an API call always succeeds.

Use AI for interpretation

A model can help categorize a message, search documents or draft a summary. Its output still needs validation and an appropriate review step for the task.

Keep judgment with people

Commercial commitments, sensitive complaints and exceptions need someone who can understand the context and take responsibility. The system should make that handoff easy.

AI where it helps. Automation where it makes sense. People where judgment matters.

Explore more of my work

Websites, AI assistants and automation: practical notes and documented project studies.

Let’s connect

More insights 

View All

Where lead follow-up loses context

Apr 1, 2025

When more tools create more work

Apr 1, 2025

Designing a useful human handoff

Apr 1, 2025

The design subscription model - why make the switch?

Apr 1, 2025

Building brands that scale.

Apr 1, 2025

The science of first impressions.

Apr 1, 2025

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /terms

Source: [public/_launchfolio/pages/terms/index.html](./public/_launchfolio/pages/terms/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/terms-1440.png](./audit-screenshots/terms-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Working together

Terms of Service

About this website

Working together

This portfolio presents an independent build and documented demo or concept systems. Demo studies are not claims of client deployments.

Scope and proposals

Deliverables, timing, fees, review stages, ownership and support are agreed in a project proposal before work starts.

Getting in touch

The inquiry form prepares an email draft. It does not send your message automatically. Review the draft in your email app before sending it.

Contact

abgakhar787@gmail.com

Integrations

Muhammad Abu Bakar / abgakhar787@gmail.com

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /privacy-policy

Source: [public/_launchfolio/pages/privacy-policy/index.html](./public/_launchfolio/pages/privacy-policy/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/privacy-policy-1440.png](./audit-screenshots/privacy-policy-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Privacy policy

Privacy Policy

About this website

Information you enter

The inquiry form uses your entries to prepare an email draft in your browser. It does not submit those entries to the template provider.

Sending an inquiry

If you choose to send the draft, your email provider delivers it to abgakhar787@gmail.com. Your email provider handles that delivery.

Portfolio content

Project images on this site are illustrations or portfolio material. No template client testimonials or performance results are presented as verified work.

Questions

For questions about an inquiry you sent, contact abgakhar787@gmail.com.

Muhammad Abu Bakar / abgakhar787@gmail.com



Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /blog/why-more-saas-means-more-spreadsheets

Source: [public/_launchfolio/pages/blog/beyond-minimalism-what-s-next-in-web-design/index.html](./public/_launchfolio/pages/blog/beyond-minimalism-what-s-next-in-web-design/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/blog-why-more-saas-means-more-spreadsheets-1440.png](./audit-screenshots/blog-why-more-saas-means-more-spreadsheets-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Blog

/

Trends

/

When more tools create more work

When more tools create more work

Feb 3, 2025

By Muhammad Abu Bakar

Review the connections before adding another platform.

A useful tool can still create extra work if it keeps important information separate from the rest of the business. Before buying another platform, trace the handoffs.

Find the repeated copying

Look for exports, spreadsheet reconciliations and repeated data entry. These often reveal where a shared identifier or an integration could help.

Choose the source of truth

Decide which system owns each piece of information. A customer name, payment state and support status may have different authoritative sources.

Build only what is needed

Use existing APIs where they fit. A small internal interface may help when the process spans several tools, but it also needs maintenance and clear ownership.

A smaller set of well-connected tools can be more useful than a larger disconnected stack.

Explore more of my work

Websites, AI assistants and automation: practical notes and documented project studies.

Let’s connect

More insights 

View All

Choosing your first automation

Feb 3, 2025

Where lead follow-up loses context

Feb 3, 2025

People, AI and automation

Feb 3, 2025

When more tools create more work

Feb 3, 2025

Designing a useful human handoff

Feb 3, 2025

The design subscription model - why make the switch?

Feb 3, 2025

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /blog/reliable-human-in-the-loop-ai

Source: [public/_launchfolio/pages/blog/when-to-rebrand-signs-your-identity-is-holding-you-back/index.html](./public/_launchfolio/pages/blog/when-to-rebrand-signs-your-identity-is-holding-you-back/index.html); hydrated mappings [public/_launchfolio/portfolio-data.js](./public/_launchfolio/portfolio-data.js) and [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js). Screenshot: [audit-screenshots/blog-reliable-human-in-the-loop-ai-1440.png](./audit-screenshots/blog-reliable-human-in-the-loop-ai-1440.png).

```text
Muhammad Abu Bakar

Work

Services

Pricing

Blog

Contact

Blog

/

Strategy

/

Designing a useful human handoff

Designing a useful human handoff

Jan 1, 2025

By Muhammad Abu Bakar

Make AI uncertainty visible and give the reviewer enough context to act.

Human review needs more than a button labeled approve. A reviewer should understand what the system proposes, what evidence supports it and what might be missing.

Define the boundaries

Choose actions that always need approval and conditions that trigger escalation. Model-reported confidence alone is not a reliable safety check; combine task-specific evaluation, input validation and explicit policy rules.

Preserve the context

Show the original request, relevant sources, the suggested action and why review is needed. Let the reviewer edit or reject the proposal without losing the original information.

Learn from corrections

Review failures and corrections to improve the workflow. Store only the information needed, with appropriate permissions and retention, and evaluate changes before extending automation.

A good handoff helps a person make an informed decision; it does not ask them to rubber-stamp an output.

Explore more of my work

Websites, AI assistants and automation: practical notes and documented project studies.

Let’s connect

More insights 

View All

Choosing your first automation

Jan 1, 2025

Where lead follow-up loses context

Jan 1, 2025

People, AI and automation

Jan 1, 2025

When more tools create more work

Jan 1, 2025

Designing a useful human handoff

Jan 1, 2025

The design subscription model - why make the switch?

Jan 1, 2025

Let’s

design

build

create

incredible work together.

Email

abgakhar787@gmail.com

Project

Get in touch

Connect

Let’s connect

Menu

Work

Services

Pricing

Blog

Legal

Working together

Privacy Policy

© 2026 Muhammad Abu Bakar
```

### /work/knowledge-intelligence-rag

Source: [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx); data [lib/data.ts](./lib/data.ts) and shared shell [app/layout.tsx](./app/layout.tsx). Screenshot: [audit-screenshots/work-knowledge-intelligence-rag-1440.png](./audit-screenshots/work-knowledge-intelligence-rag-1440.png).

```text
Skip to content
Muhammad Abu Bakar
All work
AI Knowledge System
Concept
Document Knowledge System

Search internal documents and review answers alongside their sources.

Document retrieval architecture
AB / studio
Answer + sources
Illustrative architecture · based on the documented workflow

Illustrative architecture study. The workflow and integrations describe a proposed design, not a verified client deployment or measured outcome.

THE GOAL

What it’s designed to solve.

Teams can struggle to find current guidance across separate document stores. This concept explores retrieval with source links, access controls and a review path for conflicting information.

THE APPROACH

The proposed system.

A private internal search and intelligence engine that indexes company repositories, provides grounded answers with clickable source citations, and flags conflicting policies.

How the workflow fits together.
01
Continuous Doc Sync
Automated

Webhook listener detects updates across Notion, Google Drive, and Markdown wikis.

02
Chunking & Vector Indexing
Automated

Documents parsed into semantic chunks with metadata headers and embedded into pgvector.

03
Natural Language Query
AI-Assisted

Team member asks complex question (e.g., "What is our reimbursement rule for client dinners in London?").

04
Grounded Answer + Citations
AI-Assisted

System provides direct answer with exact paragraph citations and source document links.

05
SOP Maintenance
Human

Operations director reviews query analytics to identify ambiguous policies that need updating.

Key technical decisions.
Proposed implementation
Frontend
Next.js & Tailwind CSS

Instant-search command palette (Cmd+K) and citation viewer

Vector Storage
PostgreSQL with pgvector extension

High-performance vector embedding storage and similarity search

AI Engine
Gemini API & Text Embeddings

Semantic retrieval and citation-backed synthesis

Ingestion Pipeline
Node.js Event Workers

Background document parsing, cleaning, and chunking

Where AI assists

Performs semantic vector matching, synthesizes concise answers from multiple source documents, and highlights conflicting rules.

What the code handles

Re-indexes modified documents on a scheduled cron, manages embedding caches, and tracks query latency metrics.

Where a person takes over

Operations leaders author authoritative company policies and resolve conflicting business rules.

What the design aims to improve.
Retrieve relevant material from approved sources
Show source references alongside suggested answers
Give policy owners a way to review gaps and conflicts

No measured business outcomes are claimed.

Next study
Connected CRM Workflows

LET’S MAKE IT WORK.

Have something you want
to build or improve?

Tell me what you’re working on. We can discuss what you need and what a practical solution could look like.

Discuss a Project
abgakhar787@gmail.com
Let’s 
build
build

incredible work
together.

Have a project in mind?

abgakhar787@gmail.com ↗
Work
Services
About
Contact
Blog
FAQ
ABUBAKAR
© 2026 Muhammad Abu Bakar
Back to top ↑
Ask a question
```

### /work/multi-channel-crm-sync

Source: [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx); data [lib/data.ts](./lib/data.ts) and shared shell [app/layout.tsx](./app/layout.tsx). Screenshot: [audit-screenshots/work-multi-channel-crm-sync-1440.png](./audit-screenshots/work-multi-channel-crm-sync-1440.png).

```text
Skip to content
Muhammad Abu Bakar
All work
Workflow Automation
Demo architecture
Connected CRM Workflows

Billing, support and sales events brought into a shared customer record.

Cross-tool event architecture
AB / studio
Connected record
Illustrative architecture · based on the documented workflow

Illustrative architecture study. The workflow and integrations describe a proposed design, not a verified client deployment or measured outcome.

THE GOAL

What it’s designed to solve.

Information about the same customer can be split across billing, support and sales tools. This design explores event-driven updates and notifications across those boundaries.

THE APPROACH

The proposed system.

A centralized webhook integration hub that listens for billing events, support tickets, and sales milestones, synchronizing customer health scores and statuses across every tool in real time.

How the workflow fits together.
01
Multi-System Event Fire
Automated

Stripe webhook (payment failure) or Zendesk ticket (high priority) triggers listener.

02
Account Reconciliation
Automated

Data engine maps external customer ID to master PostgreSQL record.

03
AI Sentiment & Health Score
AI-Assisted

AI reads open support ticket thread and calculates real-time account risk factor.

04
Cross-Tool Property Sync
Automated

CRM account badge updated to "At-Risk"; automated alert posted to dedicated Slack channel.

05
Executive Intervention
Human

Account director calls client with full context to resolve underlying grievance.

Key technical decisions.
Proposed implementation
Integration Layer
Next.js Edge Handlers & Serverless Workers

Idempotent webhook ingestion and payload filtering

Database
PostgreSQL Event Store

Immutable audit log of all cross-system events

AI Evaluation
Gemini API

Support sentiment scoring and risk categorization

Notification
Slack Block Kit API

Rich interactive team alerts with one-click CRM deep links

Where AI assists

Evaluates sentiment from support ticket transcripts and drafts proactive customer recovery talking points for account managers.

What the code handles

Processes webhooks idempotently, resolves customer identity across systems, updates CRM custom properties, and dispatches team alerts.

Where a person takes over

Account managers and executives conduct direct relationship recovery and commercial negotiations.

What the design aims to improve.
Match external events to the correct customer
Keep selected CRM fields aligned with source systems
Notify an account owner when an event needs attention

No measured business outcomes are claimed.

Next study
Operations & Dispatch Portal

LET’S MAKE IT WORK.

Have something you want
to build or improve?

Tell me what you’re working on. We can discuss what you need and what a practical solution could look like.

Discuss a Project
abgakhar787@gmail.com
Let’s 
build
build

incredible work
together.

Have a project in mind?

abgakhar787@gmail.com ↗
Work
Services
About
Contact
Blog
FAQ
ABUBAKAR
© 2026 Muhammad Abu Bakar
Back to top ↑
Ask a question
```

### /work/custom-ops-portal

Source: [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx); data [lib/data.ts](./lib/data.ts) and shared shell [app/layout.tsx](./app/layout.tsx). Screenshot: [audit-screenshots/work-custom-ops-portal-1440.png](./audit-screenshots/work-custom-ops-portal-1440.png).

```text
Skip to content
Muhammad Abu Bakar
All work
Custom Software
Demo architecture
Operations & Dispatch Portal

A proposed workspace for assignments, approvals and inspection reports.

Operations dispatch sequence
AB / studio
01
Request
02
Assignment
03
Approval
04
Inspection
05
Report
Illustrative architecture · based on the documented workflow

Illustrative architecture study. The workflow and integrations describe a proposed design, not a verified client deployment or measured outcome.

THE GOAL

What it’s designed to solve.

Spreadsheet-based dispatch can make assignments, permissions and report status hard to track. This study explores a shared operational workspace with separate views for each role.

THE APPROACH

The proposed system.

A purpose-built web application featuring role-based dashboards for dispatchers, technicians, and managers, with real-time assignment queues, automated report generation, and direct database queries.

How the workflow fits together.
01
Order Intake
Automated

Customer inspection request logged via portal or API connector.

02
Smart Dispatch Suggestion
Automated

Algorithm suggests nearest available technician based on geography and skill certifications.

03
Dispatcher Approval
Human

Operations manager confirms assignment or overrides with special instructions.

04
Mobile Inspection Submission
Human

Technician inputs findings and photos on-site via responsive web interface.

05
Automated Report Dispatch
Automated

System compiles branded PDF inspection report and emails it directly to client.

Key technical decisions.
Proposed implementation
Frontend
Next.js App Router (TypeScript) & Tailwind CSS

Fast, responsive interface with role-based routing

Backend & Data
Next.js Server Actions & PostgreSQL

ACID-compliant transactions and atomic state updates

Document Generation
Node.js PDF Pipeline

Dynamic branded report compilation and storage

Auth & Security
JWT Session Tokens with RBAC

Strict data partitioning between field staff and managers

Where AI assists

Drafts executive report summaries from technician field notes and highlights safety non-compliance flags automatically.

What the code handles

Calculates technician travel times, compiles high-resolution PDF deliverables, updates database records, and logs audit timestamps.

Where a person takes over

Dispatchers supervise scheduling logic; certified field technicians conduct rigorous on-site physical inspections.

What the design aims to improve.
Make assignments and approval status visible
Collect field notes and inspection attachments
Prepare consistent reports for human review

No measured business outcomes are claimed.

Next study
Personal Engineering Studio

LET’S MAKE IT WORK.

Have something you want
to build or improve?

Tell me what you’re working on. We can discuss what you need and what a practical solution could look like.

Discuss a Project
abgakhar787@gmail.com
Let’s 
build
build

incredible work
together.

Have a project in mind?

abgakhar787@gmail.com ↗
Work
Services
About
Contact
Blog
FAQ
ABUBAKAR
© 2026 Muhammad Abu Bakar
Back to top ↑
Ask a question
```

### /insights/website-chatbot-crm-architecture

Source: [app/insights/[slug]/page.tsx](./app/insights/[slug]/page.tsx); data [lib/data.ts](./lib/data.ts) and shared shell [app/layout.tsx](./app/layout.tsx). Screenshot: [audit-screenshots/insights-website-chatbot-crm-architecture-1440.png](./audit-screenshots/insights-website-chatbot-crm-architecture-1440.png).

```text
Skip to content
Muhammad Abu Bakar
All insights

SYSTEM ARCHITECTURE

Connecting a website, assistant and CRM

By Muhammad Abu Bakar

A website can be useful on its own. When a business needs connected lead handling, the next step is to plan what information should move into its customer systems.

Start with the visitor

Make the offer clear and the inquiry easy. Add an assistant only when it can answer useful questions or collect information more effectively than a simple form.

Pass useful context forward

Send the information the customer agrees to share into the appropriate record. Include ownership, validation, duplicate handling and a fallback if the integration fails.

Keep commitments explicit

A chat response is not a confirmed booking or a submitted inquiry. Show success only after the destination system accepts the action, and provide an alternative when it cannot.

The useful takeaway

Connect the tools around a clear customer process, rather than adding integrations for their own sake.

More notes on systems

LET’S MAKE IT WORK.

Have something you want
to build or improve?

Tell me what you’re working on. We can discuss what you need and what a practical solution could look like.

Discuss a Project
abgakhar787@gmail.com
Let’s 
build
build

incredible work
together.

Have a project in mind?

abgakhar787@gmail.com ↗
Work
Services
About
Contact
Blog
FAQ
ABUBAKAR
© 2026 Muhammad Abu Bakar
Back to top ↑
Ask a question
```

### /audit-missing-page

Source: [app/not-found.tsx](./app/not-found.tsx); data [lib/data.ts](./lib/data.ts) and shared shell [app/layout.tsx](./app/layout.tsx). Screenshot: [audit-screenshots/audit-missing-page-1440.png](./audit-screenshots/audit-missing-page-1440.png).

```text
Skip to content
Muhammad Abu Bakar
404 • PAGE NOT FOUND
Page Not Found

This page does not exist. Explore my work or return to the homepage.

Return Home
Explore Services
Let’s 
build
build

incredible work
together.

Have a project in mind?

abgakhar787@gmail.com ↗
Work
Services
About
Contact
Blog
FAQ
ABUBAKAR
© 2026 Muhammad Abu Bakar
Back to top ↑
Ask a question
```

### Contact overlay: exact copy and selectable values

Source: exported runtime and [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js); observed /?contact=1.

```text
Tell me about your project.

Prepare an email you can review and send. Or email me.

Muhammad Abu Bakar

abgakhar787@gmail.com

Name

Email

Send a message or describe your project

What's your budget?

Select…
$1,000 - $2,000
$2,000 - $5,000
$5,000 - $10,000
$10,000 - $20,000
Unlimited Budget

Prepare Email

Before preparing your email, read the Privacy Policy.
```

### Mobile-specific copy

Promo card: “Connected digital systems built for your business.” (desktop: “Digital solutions for your business.”). “Built with modern tools” also appears in mobile DOM. About copy is reordered ahead of portrait/work history. Other major copy matches desktop.

### React assistant and error states (source extraction)

Only remaining React pages mount this assistant. Source [components/AiAssistantDrawer.tsx](./components/AiAssistantDrawer.tsx), [components/AssistantLauncher.tsx](./components/AssistantLauncher.tsx). Launcher: “Ask a question”; accessible name “Ask about a project”. Greeting: “Hello! I can help you explore a website, AI assistant or connected workflow. What would you like to build or improve?” Quick prompts: “I need a business website”; “I want an AI assistant”; “I need to connect my CRM”. Labels/states: “Opening assistant…”, “Project guidance”, “AI-generated guidance”, “Local guidance · AI not connected”, “Assistant”, “You”, “Preparing a reply…”, “Your project question”, “What would you like to build?”, “Guidance may need verification.”, “Discuss a Project”. Error: “The assistant couldn’t respond. Please use Discuss a Project below to contact Muhammad directly.” Buttons: “Reset conversation”, “Close assistant”, “Send message”. Model output is dynamic and not requested. Fixed fallback reply source:

```text
function guidance(input: string) {
  if (/website|landing|redesign/i.test(input))
    return "A useful website starts with a clear offer, relevant work and an easy way to inquire. I can help with design, development and connecting the contact flow to your existing tools. Are you building a new site or improving an existing one?";
  if (/crm|lead|follow.up|sales/i.test(input))
    return "A connected lead process can capture inquiries, organize details in your CRM and trigger follow-up using defined rules. A person still handles the important conversations. Which tools are you using today?";
  if (/assistant|chatbot|receptionist|ai/i.test(input))
    return "An assistant can answer routine questions from your business information, collect details and pass a conversation to a person. Its boundaries and fallback behavior should be clear. What would you like it to help customers with?";
  if (/onboard|document|customer/i.test(input))
    return "A guided intake or onboarding flow can collect the right information and connect it to the tools your team uses. Document review and approvals can remain with a person where needed. What happens when a new customer gets started?";
  return "Muhammad builds business websites, AI assistants, connected workflows and custom software. The right approach depends on your goal and existing tools. What would you like to build or improve?";
}
```


Error boundary (not deliberately triggered), [app/error.tsx](./app/error.tsx): “UNABLE TO LOAD THIS PAGE”; “Something unexpected occurred”; “This page could not load. Try again or return to the homepage.”; “Try Again” → reset; “Return Home” → /. Tested 404 copy appears above.

## 7. Navigation and Visitor Journey

**Observed order:** floating nav → hero/ticker → Latest Projects → principle quote → Services → About Me → Pricing/process → principles → FAQ → Articles → footer. Anchors: #hero, #projects, #services, #pricing, #faq; no exported #about ID. Source [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html).

1. **Arrival:** at 1440×1000 hero includes offer, owner portrait, project stack, primary CTA and technology ticker start; project grid below viewport. At 390px the layout is narrow/stacked and desktop backdrop absent. [audit-screenshots/hero-1440.png](./audit-screenshots/hero-1440.png), [audit-screenshots/home-390.png](./audit-screenshots/home-390.png).
2. **Services:** navigation → /#services → seven categories; about copy explains business-first selection. No dedicated exported service detail pages.
3. **Credibility:** four cards → four studies → explicit independent/demo/concept language, gallery, three body themes, More Projects and contact callout. Working principles are not independent endorsements.
4. **Contact:** primary CTA/Get Started/Get quote/Contact/Let's Talk → modal → required Name/Email/Message/Budget → Prepare Email → Open email draft → manual send. Footer email bypasses the form.
5. **Learning:** /blog → articles on automation selection, lead follow-up, AI responsibilities, tool sprawl and human handoffs → related articles. No verified newsletter, gated lead magnet, diagnostic quiz or nurture signup in the active export.

Pricing is an anchor, not checkout. /about returns to the homepage root; /process targets pricing; /contact opens a query-controlled overlay. React-only routes expose different Work/Services/Blog navigation and the assistant. Do not invent service-detail journeys from redirected React files.

## 8. Services and Solution Positioning

**Seven actual labels:** Website Development; AI Assistants; Custom Software; Landing Pages; Workflow Automation; CRM & Follow-up; Systems Consulting. No separate descriptions accompany each in the exported section. Shared hero benefit: manage inquiries, connect tools, reduce repetitive work. Source [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html).

Project Collaboration and Single Project describe scoped engagements with agreed deliverables, timing and reviews. “Hire me today”, “Get Started”, “Get quote” coexist with “Scope agreed before work begins”. No fixed fee/turnaround is promised. The contact modal nevertheless requires a dollar band starting at $1,000. **Interpretation:** selection friction may be stronger than the open-ended invitation suggests.

**A evidence:** “My toolkit”; “AI Systems & Automation Engineer”; “What I build for businesses.” **B evidence:** “I start by understanding what a business needs, who will use the solution, and what needs to work better”; “The right solution depends on the actual process—not the latest tool”; “Share your goals, current tools and the problem you want to solve.” **Interpretation:** useful business reasoning exists but appears after capability/project imagery; evaluate recognition for visitors who only know a symptom.

Four detailed service groups in [lib/site.ts](./lib/site.ts) and [app/systems/page.tsx](./app/systems/page.tsx) are shadowed: Websites & Landing Pages; AI Assistants & Customer Systems; Workflow Automation; Custom Business Software. They are not the current /systems page, though abbreviated versions appear in no-JS fallback.

## 9. Projects, Evidence, and Credibility

| Element | Classification and verification limit | Source |
|---|---|---|
| Portfolio Studio | Independent website rendered; proves this website, not business outcomes. Hero preview is an illustrative diagram. | [public/_launchfolio/pages/projects/essentia/index.html](./public/_launchfolio/pages/projects/essentia/index.html) |
| Lead Operations | Automation demo; explicitly not a verified client deployment. | [public/_launchfolio/pages/projects/quantum/index.html](./public/_launchfolio/pages/projects/quantum/index.html) |
| AI Receptionist | Assistant demo; proposed collection/human confirmation, no autonomous booking proof. | [public/_launchfolio/pages/projects/orbital/index.html](./public/_launchfolio/pages/projects/orbital/index.html) |
| Onboarding | Workflow concept; not deployed client system. | [public/_launchfolio/pages/projects/axiom/index.html](./public/_launchfolio/pages/projects/axiom/index.html) |
| Three React studies | Document Knowledge System, Connected CRM Workflows, Operations & Dispatch Portal: proposed architectures. | [lib/data.ts](./lib/data.ts), [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx) |
| Quote/six principle cards | Internally named Testimonials, visibly owner philosophy, not customer reviews. | [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html) |
| Portrait/name/email | Identity/contact cues; photo provenance and identity not independently verified. | [public/assets/abu_bakar.jpg](./public/assets/abu_bakar.jpg) |
| Social icons | Generic URLs/contact redirection, not verified profile ownership. | [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js) |
| Metrics | No verified client metrics. Residual blog teasers claim 70% savings, 10x delivery, 90% judgments and 32% comprehension; these remain unverified claims. | [public/_launchfolio/pages/blog/index.html](./public/_launchfolio/pages/blog/index.html) |

**Observed media mismatch:** study galleries and blog cards repeatedly show “Document Knowledge System” regardless of topic. Agency Lead Operations screenshot establishes this visually. Alt-text substitutions do not verify image relevance. Homepage four cards use distinct Personal Engineering Studio/Agency Lead Operations/AI Receptionist/Customer Onboarding diagrams. Diagram typography contains implementation stages and “Illustrative architecture · documented project study”, not actual product interfaces. Source [public/assets/portfolio](./public/assets/portfolio), [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js).

No verified credentials, named paying clients, independently confirmed testimonials, external live demos or measured before/after results were established. Work history is titled Selected work and marked demo/concept, not verified employment. A lower “Built with modern tools” strip still contains template-style names/logos; do not infer customer relationships.

## 10. CTA and Conversion Flow

Every captured link/button is below, repeated by page because placement matters. Table whitespace is normalized; section 6 preserves exact wording. Empty controls use their aria-label. Some collapsed/animated nodes retain layout boxes; inclusion does not prove simultaneous visibility. Filter/search and other non-button controls are described afterward.

**Handler rules:** local links navigate; /?contact=1 is intercepted to open the current export overlay; full /contact redirects to homepage overlay. Contact Form buttons use Framer state. mailto opens an email application, not an automatic send. External HTTP links are intercepted by [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js): generic Instagram/LinkedIn/social links generally open contact on localhost; a GitHub branch forces one profile URL. Same-origin cross-document links are exempted. Absolute same-path production links need testing. Social aria-labels such as Threads Link do not accurately describe this behavior. No checkout/calendar operation was verified.

### /

Source [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ./ | Navigate or inquire | Anchor/document navigation |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| You Discuss a project with me | /?contact=1 | Navigate or inquire | Contact interceptor |
| Open | (button) | Interact/toggle | State toggle |
| Portfolio Studio Independent website View Project | ./projects/personal-engineering-studio | Navigate or inquire | Anchor/document navigation |
| Lead Operations Automation demo View Project | ./projects/agency-lead-operations | Navigate or inquire | Anchor/document navigation |
| AI Receptionist Assistant demo View Project | ./projects/local-service-receptionist | Navigate or inquire | Anchor/document navigation |
| Onboarding Workflow concept View Project | ./projects/b2b-customer-onboarding | Navigate or inquire | Anchor/document navigation |
| View all my projects | ./projects | Navigate or inquire | Anchor/document navigation |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Get Started | /?contact=1 | Navigate or inquire | Contact interceptor |
| Get quote | (button) | Interact/toggle | Contact overlay |
| Close | (button) | Interact/toggle | State toggle |
| Open | (button) | Interact/toggle | State toggle |
| Open | (button) | Interact/toggle | State toggle |
| Open | (button) | Interact/toggle | State toggle |
| Open | (button) | Interact/toggle | State toggle |
| Let's Talk | /?contact=1 | Navigate or inquire | Contact interceptor |
| View All | ./blog | Navigate or inquire | Anchor/document navigation |
| Choosing your first automation Mar 6, 2025 By Muhammad Abu Bakar Start with a recurring task whose rules and failure cases you understand. | ./blog/how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context Apr 22, 2025 By Muhammad Abu Bakar | ./blog/where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| People, AI and automation Apr 1, 2025 By Muhammad Abu Bakar | ./blog/human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Let's Talk | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Working together | ./terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ./privacy-policy | Navigate or inquire | Anchor/document navigation |
### /projects

Source [public/_launchfolio/pages/projects/index.html](./public/_launchfolio/pages/projects/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ./ | Navigate or inquire | Anchor/document navigation |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Portfolio Studio Independent website View Project | ./projects/personal-engineering-studio | Navigate or inquire | Anchor/document navigation |
| Lead Operations Automation demo View Project | ./projects/agency-lead-operations | Navigate or inquire | Anchor/document navigation |
| AI Receptionist Assistant demo View Project | ./projects/local-service-receptionist | Navigate or inquire | Anchor/document navigation |
| Onboarding Workflow concept View Project | ./projects/b2b-customer-onboarding | Navigate or inquire | Anchor/document navigation |
| Let's Talk | /?contact=1 | Navigate or inquire | Contact interceptor |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Working together | ./terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ./privacy-policy | Navigate or inquire | Anchor/document navigation |
### /blog

Source [public/_launchfolio/pages/blog/index.html](./public/_launchfolio/pages/blog/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ./ | Navigate or inquire | Anchor/document navigation |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Choosing your first automation Mar 6, 2025 By Muhammad Abu Bakar Start with a recurring task whose rules and failure cases you understand. | ./blog/how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context Apr 22, 2025 By Muhammad Abu Bakar A useful customer process keeps the inquiry, owner and next action together. | ./blog/where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| People, AI and automation Apr 1, 2025 By Muhammad Abu Bakar Three different kinds of work need three different kinds of responsibility. | ./blog/human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| When more tools create more work Feb 3, 2025 By Muhammad Abu Bakar Review the connections before adding another platform. | ./blog/why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff Jan 1, 2025 By Muhammad Abu Bakar Make AI uncertainty visible and give the reviewer enough context to act. | ./blog/reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| The design subscription model - why make the switch? Mar 20, 2025 By Muhammad Abu Bakar Design subscriptions offer 70% cost savings and 10x faster delivery. Learn why forward-thinking companies are switching from traditional agencies and freelancers. | ./blog/the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch | Navigate or inquire | Anchor/document navigation |
| Building brands that scale. Apr 16, 2025 By Muhammad Abu Bakar The brand that gets you to $1M will strangle you at $100M. Learn how to build flexible brand systems that grow with your business, not against it. | ./blog/building-brands-that-scale | Navigate or inquire | Anchor/document navigation |
| The science of first impressions. Feb 28, 2025 By Muhammad Abu Bakar Users judge websites in 50 milliseconds. Understand the neuroscience behind snap judgments and engineer better first impressions that convert visitors into customers. | ./blog/the-science-of-first-impressions | Navigate or inquire | Anchor/document navigation |
| the science behind color perception. Apr 23, 2025 By Muhammad Abu Bakar Color drives 90% of snap judgments online. Master digital color psychology, accessibility, and systems that influence user behavior and boost conversions. | ./blog/how-palette-choices-drive-user-behavior | Navigate or inquire | Anchor/document navigation |
| The psychology of white space. Feb 12, 2025 By Muhammad Abu Bakar White space isn't empty—it's your most powerful design tool. Learn why generous spacing improves comprehension 32% and drives premium perception. | ./blog/the-psychology-of-white-space | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Working together | ./terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ./privacy-policy | Navigate or inquire | Anchor/document navigation |
### /projects/personal-engineering-studio

Source [public/_launchfolio/pages/projects/essentia/index.html](./public/_launchfolio/pages/projects/essentia/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Discuss a similar project | https://kora.framer.media?utm_source=launchfolio | Navigate or inquire | External href intercepted on export |
| Have a project in mind? Let’s explore what you need. | (button) | Interact/toggle | Client control |
| Lead Operations Automation demo View Project | ./agency-lead-operations | Navigate or inquire | Anchor/document navigation |
| View all my projects | ../projects | Navigate or inquire | Anchor/document navigation |
| Let's Talk | /?contact=1 | Navigate or inquire | Contact interceptor |
| Contact | (button) | Interact/toggle | Contact overlay |
| Let's Talk | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /projects/agency-lead-operations

Source [public/_launchfolio/pages/projects/quantum/index.html](./public/_launchfolio/pages/projects/quantum/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Discuss a similar project | https://kyma.framer.ai?utm_source=launchfolio | Navigate or inquire | External href intercepted on export |
| Portfolio Studio Independent website View Project | ./personal-engineering-studio | Navigate or inquire | Anchor/document navigation |
| AI Receptionist Assistant demo View Project | ./local-service-receptionist | Navigate or inquire | Anchor/document navigation |
| View all my projects | ../projects | Navigate or inquire | Anchor/document navigation |
| Let's Talk | /?contact=1 | Navigate or inquire | Contact interceptor |
| Contact | (button) | Interact/toggle | Contact overlay |
| Let's Talk | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /projects/local-service-receptionist

Source [public/_launchfolio/pages/projects/orbital/index.html](./public/_launchfolio/pages/projects/orbital/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Discuss a similar project | https://mugenstudio.framer.website?utm_source=launchfolio | Navigate or inquire | External href intercepted on export |
| Lead Operations Automation demo View Project | ./agency-lead-operations | Navigate or inquire | Anchor/document navigation |
| Onboarding Workflow concept View Project | ./b2b-customer-onboarding | Navigate or inquire | Anchor/document navigation |
| View all my projects | ../projects | Navigate or inquire | Anchor/document navigation |
| Let's Talk | /?contact=1 | Navigate or inquire | Contact interceptor |
| Contact | (button) | Interact/toggle | Contact overlay |
| Let's Talk | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /projects/b2b-customer-onboarding

Source [public/_launchfolio/pages/projects/axiom/index.html](./public/_launchfolio/pages/projects/axiom/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Discuss a similar project | https://axm.framer.website?utm_source=launchfolio | Navigate or inquire | External href intercepted on export |
| AI Receptionist Assistant demo View Project | ./local-service-receptionist | Navigate or inquire | Anchor/document navigation |
| Have a project in mind? Let’s explore what you need. | (button) | Interact/toggle | Client control |
| View all my projects | ../projects | Navigate or inquire | Anchor/document navigation |
| Let's Talk | /?contact=1 | Navigate or inquire | Contact interceptor |
| Contact | (button) | Interact/toggle | Contact overlay |
| Let's Talk | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /blog/how-to-identify-which-workflow-to-automate-first

Source [public/_launchfolio/pages/blog/how-designers-and-developers-can-actually-collaborate/index.html](./public/_launchfolio/pages/blog/how-designers-and-developers-can-actually-collaborate/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Choosing your first automation | ./how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| View All | ../blog | Navigate or inquire | Anchor/document navigation |
| Choosing your first automation Mar 6, 2025 | ./how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context Mar 6, 2025 | ./where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| People, AI and automation Mar 6, 2025 | ./human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| When more tools create more work Mar 6, 2025 | ./why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff Mar 6, 2025 | ./reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| The design subscription model - why make the switch? Mar 6, 2025 | ./the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /blog/where-lead-follow-up-systems-break

Source [public/_launchfolio/pages/blog/why-faster-isn-t-always-better/index.html](./public/_launchfolio/pages/blog/why-faster-isn-t-always-better/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context | ./where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| View All | ../blog | Navigate or inquire | Anchor/document navigation |
| Choosing your first automation Apr 22, 2025 | ./how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| People, AI and automation Apr 22, 2025 | ./human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| When more tools create more work Apr 22, 2025 | ./why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff Apr 22, 2025 | ./reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| The design subscription model - why make the switch? Apr 22, 2025 | ./the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch | Navigate or inquire | Anchor/document navigation |
| Building brands that scale. Apr 22, 2025 | ./building-brands-that-scale | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /blog/human-ai-automated-framework

Source [public/_launchfolio/pages/blog/designing-for-human-connection/index.html](./public/_launchfolio/pages/blog/designing-for-human-connection/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| People, AI and automation | ./human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| View All | ../blog | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context Apr 1, 2025 | ./where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| When more tools create more work Apr 1, 2025 | ./why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff Apr 1, 2025 | ./reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| The design subscription model - why make the switch? Apr 1, 2025 | ./the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch | Navigate or inquire | Anchor/document navigation |
| Building brands that scale. Apr 1, 2025 | ./building-brands-that-scale | Navigate or inquire | Anchor/document navigation |
| The science of first impressions. Apr 1, 2025 | ./the-science-of-first-impressions | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /terms

Source [public/_launchfolio/pages/terms/index.html](./public/_launchfolio/pages/terms/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ./ | Navigate or inquire | Anchor/document navigation |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Working together | ./terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ./privacy-policy | Navigate or inquire | Anchor/document navigation |
### /privacy-policy

Source [public/_launchfolio/pages/privacy-policy/index.html](./public/_launchfolio/pages/privacy-policy/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ./ | Navigate or inquire | Anchor/document navigation |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ./projects | Navigate or inquire | Anchor/document navigation |
| Services | ./#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ./#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ./blog | Navigate or inquire | Anchor/document navigation |
| Working together | ./terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ./privacy-policy | Navigate or inquire | Anchor/document navigation |
### /blog/why-more-saas-means-more-spreadsheets

Source [public/_launchfolio/pages/blog/beyond-minimalism-what-s-next-in-web-design/index.html](./public/_launchfolio/pages/blog/beyond-minimalism-what-s-next-in-web-design/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| When more tools create more work | ./why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| View All | ../blog | Navigate or inquire | Anchor/document navigation |
| Choosing your first automation Feb 3, 2025 | ./how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context Feb 3, 2025 | ./where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| People, AI and automation Feb 3, 2025 | ./human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| When more tools create more work Feb 3, 2025 | ./why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff Feb 3, 2025 | ./reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| The design subscription model - why make the switch? Feb 3, 2025 | ./the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /blog/reliable-human-in-the-loop-ai

Source [public/_launchfolio/pages/blog/when-to-rebrand-signs-your-identity-is-holding-you-back/index.html](./public/_launchfolio/pages/blog/when-to-rebrand-signs-your-identity-is-holding-you-back/index.html), [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Muhammad Abu Bakar | ../ | Navigate or inquire | Anchor/document navigation |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Contact | (button) | Interact/toggle | Contact overlay |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff | ./reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| View All | ../blog | Navigate or inquire | Anchor/document navigation |
| Choosing your first automation Jan 1, 2025 | ./how-to-identify-which-workflow-to-automate-first | Navigate or inquire | Anchor/document navigation |
| Where lead follow-up loses context Jan 1, 2025 | ./where-lead-follow-up-systems-break | Navigate or inquire | Anchor/document navigation |
| People, AI and automation Jan 1, 2025 | ./human-ai-automated-framework | Navigate or inquire | Anchor/document navigation |
| When more tools create more work Jan 1, 2025 | ./why-more-saas-means-more-spreadsheets | Navigate or inquire | Anchor/document navigation |
| Designing a useful human handoff Jan 1, 2025 | ./reliable-human-in-the-loop-ai | Navigate or inquire | Anchor/document navigation |
| The design subscription model - why make the switch? Jan 1, 2025 | ./the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Get in touch | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Let’s connect | /?contact=1 | Navigate or inquire | Contact interceptor |
| Threads Link | https://www.instagram.com | Navigate or inquire | External href intercepted on export |
| Dribbble Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Behance Link | /?contact=1 | Navigate or inquire | Contact interceptor |
| Linkedin Link | https://www.linkedin.com/ | Navigate or inquire | External href intercepted on export |
| Work | ../projects | Navigate or inquire | Anchor/document navigation |
| Services | ../#services | Navigate or inquire | Anchor/document navigation |
| Pricing | ../#pricing | Navigate or inquire | Anchor/document navigation |
| Blog | ../blog | Navigate or inquire | Anchor/document navigation |
| Working together | ../terms | Navigate or inquire | Anchor/document navigation |
| Privacy Policy | ../privacy-policy | Navigate or inquire | Anchor/document navigation |
### /work/knowledge-intelligence-rag

Source [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Skip to content | #main-content | Navigate or inquire | Anchor/document navigation |
| Muhammad Abu Bakar | / | Navigate or inquire | Anchor/document navigation |
| Open navigation | (button) | Interact/toggle | State toggle |
| All work | /work | Navigate or inquire | Anchor/document navigation |
| Next study Connected CRM Workflows | /work/multi-channel-crm-sync | Navigate or inquire | Anchor/document navigation |
| Discuss a Project | /contact | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com ↗ | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Work | /work | Navigate or inquire | Anchor/document navigation |
| Services | /systems | Navigate or inquire | Anchor/document navigation |
| About | /about | Navigate or inquire | Anchor/document navigation |
| Contact | /contact | Navigate or inquire | Anchor/document navigation |
| Blog | /insights | Navigate or inquire | Anchor/document navigation |
| FAQ | /faq | Navigate or inquire | Anchor/document navigation |
| Back to top ↑ | #main-content | Navigate or inquire | Anchor/document navigation |
| Ask a question | (button) | Interact/toggle | Client control |
### /work/multi-channel-crm-sync

Source [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Skip to content | #main-content | Navigate or inquire | Anchor/document navigation |
| Muhammad Abu Bakar | / | Navigate or inquire | Anchor/document navigation |
| Open navigation | (button) | Interact/toggle | State toggle |
| All work | /work | Navigate or inquire | Anchor/document navigation |
| Next study Operations & Dispatch Portal | /work/custom-ops-portal | Navigate or inquire | Anchor/document navigation |
| Discuss a Project | /contact | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com ↗ | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Work | /work | Navigate or inquire | Anchor/document navigation |
| Services | /systems | Navigate or inquire | Anchor/document navigation |
| About | /about | Navigate or inquire | Anchor/document navigation |
| Contact | /contact | Navigate or inquire | Anchor/document navigation |
| Blog | /insights | Navigate or inquire | Anchor/document navigation |
| FAQ | /faq | Navigate or inquire | Anchor/document navigation |
| Back to top ↑ | #main-content | Navigate or inquire | Anchor/document navigation |
| Ask a question | (button) | Interact/toggle | Client control |
### /work/custom-ops-portal

Source [app/work/[slug]/page.tsx](./app/work/[slug]/page.tsx).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Skip to content | #main-content | Navigate or inquire | Anchor/document navigation |
| Muhammad Abu Bakar | / | Navigate or inquire | Anchor/document navigation |
| Open navigation | (button) | Interact/toggle | State toggle |
| All work | /work | Navigate or inquire | Anchor/document navigation |
| Next study Personal Engineering Studio | /work/personal-engineering-studio | Navigate or inquire | Anchor/document navigation |
| Discuss a Project | /contact | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com ↗ | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Work | /work | Navigate or inquire | Anchor/document navigation |
| Services | /systems | Navigate or inquire | Anchor/document navigation |
| About | /about | Navigate or inquire | Anchor/document navigation |
| Contact | /contact | Navigate or inquire | Anchor/document navigation |
| Blog | /insights | Navigate or inquire | Anchor/document navigation |
| FAQ | /faq | Navigate or inquire | Anchor/document navigation |
| Back to top ↑ | #main-content | Navigate or inquire | Anchor/document navigation |
| Ask a question | (button) | Interact/toggle | Client control |
### /insights/website-chatbot-crm-architecture

Source [app/insights/[slug]/page.tsx](./app/insights/[slug]/page.tsx).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Skip to content | #main-content | Navigate or inquire | Anchor/document navigation |
| Muhammad Abu Bakar | / | Navigate or inquire | Anchor/document navigation |
| Open navigation | (button) | Interact/toggle | State toggle |
| All insights | /insights | Navigate or inquire | Anchor/document navigation |
| More notes on systems | /insights | Navigate or inquire | Anchor/document navigation |
| Discuss a Project | /contact | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| abgakhar787@gmail.com ↗ | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Work | /work | Navigate or inquire | Anchor/document navigation |
| Services | /systems | Navigate or inquire | Anchor/document navigation |
| About | /about | Navigate or inquire | Anchor/document navigation |
| Contact | /contact | Navigate or inquire | Anchor/document navigation |
| Blog | /insights | Navigate or inquire | Anchor/document navigation |
| FAQ | /faq | Navigate or inquire | Anchor/document navigation |
| Back to top ↑ | #main-content | Navigate or inquire | Anchor/document navigation |
| Ask a question | (button) | Interact/toggle | Client control |
### /audit-missing-page

Source [app/not-found.tsx](./app/not-found.tsx).

| CTA/control | Destination | Expected action | Actual implementation |
|---|---|---|---|
| Skip to content | #main-content | Navigate or inquire | Anchor/document navigation |
| Muhammad Abu Bakar | / | Navigate or inquire | Anchor/document navigation |
| Open navigation | (button) | Interact/toggle | State toggle |
| Return Home | / | Navigate or inquire | Anchor/document navigation |
| Explore Services | /systems | Navigate or inquire | Anchor/document navigation |
| abgakhar787@gmail.com ↗ | mailto:abgakhar787@gmail.com | Compose email | Email app; no automatic send |
| Work | /work | Navigate or inquire | Anchor/document navigation |
| Services | /systems | Navigate or inquire | Anchor/document navigation |
| About | /about | Navigate or inquire | Anchor/document navigation |
| Contact | /contact | Navigate or inquire | Anchor/document navigation |
| Blog | /insights | Navigate or inquire | Anchor/document navigation |
| FAQ | /faq | Navigate or inquire | Anchor/document navigation |
| Back to top ↑ | #main-content | Navigate or inquire | Anchor/document navigation |
| Ask a question | (button) | Interact/toggle | Client control |

Additional modal controls: Prepare Email creates local draft; Open email draft encodes subject “Portfolio project inquiry” and field values in mailto; Privacy Policy → /privacy-policy. Blog has Search and category selector All/Psychology/Strategy/Trends/Process, not a signup form. About has Show all and mobile principle carousel states; expanded content/filter behavior not exhaustively exercised.

## 11. Contact Forms and Integrations

### Active export form

Source [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js), [public/_launchfolio/contact-alias.js](./public/_launchfolio/contact-alias.js) and rendered runtime.

| Field | Required | Type/options |
|---|---|---|
| Name | Yes | Text |
| Email | Yes | email |
| Message / Project Details | Yes | textarea; label Send a message or describe your project |
| What's your budget? | Yes | Select…; $1,000 - $2,000; $2,000 - $5,000; $5,000 - $10,000; $10,000 - $20,000; Unlimited Budget |

Additional non-visible optional trap-like inputs: website, company, message, subject, title, description, feedback, notes, details, remarks, comments. These are not user-facing questions. Native required/email constraints and reportValidity are used. The interceptor filters blank values and keys matching token/captcha/honeypot, constructs text, inserts role=status result and mailto link. No fetch, database, CRM or calendar call in this handler. “Your email draft is ready. Your message has not been sent. Review and send it from your email app.” No server-delivery error state is needed for this purely local path. Completion requires an email application and manual send. No response-time commitment.

The contact query helper retries opening for approximately 15 seconds, then removes the query once a form appears. Opening verified desktop/mobile. No draft was opened in an email client. Local draft test was protected by blocking outbound POSTs; verification result below.

### Separate React/API implementation

[components/ProjectInquiryForm.tsx](./components/ProjectInquiryForm.tsx) is wired by shadowed [app/contact/page.tsx](./app/contact/page.tsx); requires name/email/project type/description, optional website/budget/timeline/tools. Prepare Email if CONTACT_WEBHOOK_URL absent; Send Project Inquiry if configured. Source states include Sending…, Inquiry delivered., Thank you for sharing your project. I’ll review the details., Write another inquiry, Your email draft is ready., Open Email Draft and View or copy the message. Failed server delivery offers an email draft. These are not active modal fields/states.

[app/api/contact/route.ts](./app/api/contact/route.ts): 16,000 raw-character limit; name 2–100; email ≤254; allowed project type; description 10–4,000; optional http(s) website ≤500; companyFax honeypot; legacy aliases accepted. No webhook →503. Configured webhook receives JSON plus receivedAt/source and optional Bearer token; 10-second timeout, redirects rejected. Non-OK →502; success proves webhook acceptance only. No built-in CRM persistence, booking or automated follow-up.

[app/api/assistant/route.ts](./app/api/assistant/route.ts): optional Gemini, default model string gemini-2.5-flash; six recent messages, 2,000-character input limit, 12-second provider timeout; keyword fallback labeled local. Prompt prohibits invented commitments and booking/sending claims. No model request, provider credentials or webhook delivery was tested. Named integrations in studies are proposals, not live website integrations.

## 12. Existing Visual Design and Motion

**Observed export design:** light gray/white background; large dark/gray Switzer headings; black rounded CTA pills; thin separators, soft shadows and rounded pastel-framed dark diagram cards; black footer. Compact floating nav contains portrait/name/ellipsis. Desktop hero uses a large faded portrait and overlapping tilted project stack. Sources [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html), [public/_launchfolio/portfolio.css](./public/_launchfolio/portfolio.css).

**Concrete CSS:** backdrop #fafafa and gradient #d8cec0/#b1bfc1/#8d9fa5; draft panel #fff/#111/#ddd. Body presets 17px/130%, 20px/155%, 22px/150%; inputs 18px/1.5. At min-width 810px display presets include 80/70/54/36px. Named containers are width:100%, max-width:none. Major section padding 40px desktop/24px below 810px; interior gaps 32px/24px. These are override values, not measurements of every element.

Framer controls reveal animations, hover states, ticker, FAQ and footer word cycle. portfolio.js adjusts card scale/lift with scroll progress over 650px using requestAnimationFrame/passive scroll events; MutationObserver reconciles text/media after hydration. portfolio.css freezes footer cycling for reduced motion. Complete export motion reduction was not verified. Visible focus/hover completeness and modal keyboard management need further testing.

**Interpretation:** hero-to-work motion can aid storytelling but complicates reading and whole-page captures. At scroll top real project cards are transformed into hero space, leaving the below-fold grid footprint blank in a full screenshot. Separate scrolled and section captures show cards in the grid. Other scroll reveals can be blank during specific capture states. This is not proof that the site always has empty sections.

React-only globals are overridden by light tokens #fafafa/#fff/#f0f0f0/#080808/#666/#dedede; dark visuals/footer use scoped tokens. React LaunchMotion uses Lenis, word reveals, cleanup and reduced-motion listeners. Sources [app/launchfolio.css](./app/launchfolio.css), [components/LaunchMotion.tsx](./components/LaunchMotion.tsx), [components/RotatingWord.tsx](./components/RotatingWord.tsx). Do not attribute this implementation to the static export.

## 13. Responsive and Accessibility Findings

**Runtime:** exported desktop pages at 1440×1000, homepage mobile at 390×844, modal desktop/mobile. No document-level horizontal overflow measured on 14 export desktop pages or mobile homepage. Visible desktop image elements loaded with nonzero width. This does not establish correct image topics or absence of clipped content.

Mobile collapses navigation, stacks projects/services/pricing, places about copy ahead of portrait and presents principles in a horizontally constrained card area. The mobile page is long. Sources [public/_launchfolio/portfolio.css](./public/_launchfolio/portfolio.css), generated responsive CSS and screenshots.

**Positive source evidence:** heading elements, native required/email fields, draft role=status, reduced-motion footer rule, and no-JS fallback with readable links/nav. React-only branch additionally has a skip link, native assistant dialog/focus restoration, polite log, native details and error associations. These React protections must not be assumed for the export.

**Risks:** social aria-labels mismatch destinations; CTA accessible name “Button” is generic; FAQ DOM includes clipped answers so expanded-state/screen-reader behavior needs checking; some article paragraphs are encoded as h2 and empty generated headings remain. Mobile principles do not show all cards at once. Budget has no unsure or below-$1,000 option. **Runtime draft-state defect:** after Prepare Email, the desktop form becomes a narrow strip beside a wide result panel, with overlapping/narrow text; see [audit-screenshots/email-draft-1440.png](./audit-screenshots/email-draft-1440.png). The confirmation text is readable but the overlay layout is visibly disrupted. This was not repaired.

No screen-reader session, formal contrast calculation, full keyboard/focus trap test, real touch device, cross-browser matrix or accessibility certification was performed. No-JS is a different abbreviated presentation generated from React data; exact fallback copy is appended below. Source [scripts/static-fallback.cjs](./scripts/static-fallback.cjs).

## 14. Observed SEO and Performance Implementation

Export metadata lives in each HTML and is corrected by [public/_launchfolio/portfolio-content.js](./public/_launchfolio/portfolio-content.js); configured site base https://abubakarbilal.netlify.app. The homepage title is “Muhammad Abu Bakar | Websites, AI & Business Systems”. Script updates existing description/OG/Twitter/canonical tags and title; it does not guarantee inherited social imagery is current. Publication comments and article dates were not independently verified.

**Runtime canonical values:**

- / → https://abubakarbilal.netlify.app/
- /projects → https://abubakarbilal.netlify.app/projects
- /blog → https://abubakarbilal.netlify.app/blog
- /projects/personal-engineering-studio → https://abubakarbilal.netlify.app/projects/personal-engineering-studio
- /projects/agency-lead-operations → https://abubakarbilal.netlify.app/projects/agency-lead-operations
- /projects/local-service-receptionist → https://abubakarbilal.netlify.app/projects/local-service-receptionist
- /projects/b2b-customer-onboarding → https://abubakarbilal.netlify.app/projects/b2b-customer-onboarding
- /blog/how-to-identify-which-workflow-to-automate-first → https://abubakarbilal.netlify.app/blog/how-to-identify-which-workflow-to-automate-first
- /blog/where-lead-follow-up-systems-break → https://abubakarbilal.netlify.app/blog/where-lead-follow-up-systems-break
- /blog/human-ai-automated-framework → https://abubakarbilal.netlify.app/blog/human-ai-automated-framework
- /terms → https://abubakarbilal.netlify.app/terms
- /privacy-policy → https://abubakarbilal.netlify.app/privacy-policy
- /blog/why-more-saas-means-more-spreadsheets → https://abubakarbilal.netlify.app/blog/why-more-saas-means-more-spreadsheets
- /blog/reliable-human-in-the-loop-ai → https://abubakarbilal.netlify.app/blog/reliable-human-in-the-loop-ai

[app/sitemap.ts](./app/sitemap.ts) lists /work, /systems, /about, /process, /contact, /faq, /insights and data-driven slugs. Many redirect; /terms and /privacy-policy are absent from its array. **Interpretation:** sitemap and primary routing differ. [app/robots.ts](./app/robots.ts) permits / and excludes /api/. No structured-data implementation was identified in authored React source; export schema markup was not exhaustively validated.

Potential performance factors: local bundles/media, extensive inline generated CSS, responsive images, local fonts, scroll animation, text/media MutationObserver and repeated large gallery images. React branch uses next/image and lazy assistant import. No Lighthouse/Core Web Vitals/production benchmark was run; dev timings cannot establish production performance.

No authored GA/Plausible/Meta integration was found in inspected app components/integration scripts. Network observation during home/contact sequence saw no off-origin requests. This is bounded to this local run, not proof no production/provider telemetry exists. Analytics dashboards, event ingestion and conversion attribution were not inspected.

## 15. Potential Business-Communication Gaps

These are interpretations for the independent auditor, not implemented changes.

1. **Proof clarity:** demo labels are honest, but galleries repeatedly show an unrelated knowledge-system diagram. Source [public/_launchfolio/pages/projects/quantum/index.html](./public/_launchfolio/pages/projects/quantum/index.html) and gallery screenshots.
2. **Residual blog content:** five template teasers with numeric claims are attributed to the owner and lead to verified 404s (paths below). Source [public/_launchfolio/pages/blog/index.html](./public/_launchfolio/pages/blog/index.html).
3. **Diagnosis clarity:** the business-first explanation appears after capabilities/project imagery. Visitors who know symptoms but not solution names may need to infer their next step. Source [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html).
4. **Budget friction:** required dollar band starts at $1,000; no unsure option despite open-ended invitation. Active modal.
5. **Contact completion and layout:** manual email handoff needs another app/send step; desktop draft confirmation disrupts the modal layout. [public/_launchfolio/portfolio.js](./public/_launchfolio/portfolio.js), draft screenshot.
6. **Trust cues:** generic social links, incorrect icon labels and template logo strip may imply relationships not established here. Export DOM/interceptor.
7. **Architecture fragmentation:** old React pages, leftover accessible studies, sitemap and no-JS copy show different content/navigation. [next.config.ts](./next.config.ts), [app/sitemap.ts](./app/sitemap.ts), [scripts/static-fallback.cjs](./scripts/static-fallback.cjs).
8. **Vocabulary consistency:** Pricing, Hire me today, design-process FAQ wording, study years and visual-design scope tags coexist with business-systems positioning. Exact passages remain in section 6; appropriateness is an auditor judgment.
9. **Educational consistency:** related article cards repeat the current article's date and can include self-links/broken template articles. Export article transcripts.
10. **Evidence readability:** long galleries and tiny implementation-stage text may make studies difficult to evaluate, especially repeated unrelated visuals. Current screenshots establish appearance, not a redesigned alternative.

## 16. Screenshots and Asset References

Captured in this audit using already-installed Playwright in .qa and system Chrome, against the existing npm dev task at localhost:3000. Integrated browser open failed; authorized existing local tooling supplied captures. No new dependency installed. Folder: [audit-screenshots](./audit-screenshots).

**Important capture limits:** home-1440.png is a top-scroll full-page state: project cards are in the hero and some reveals are absent. home-desktop-scrolled.png places projects in their grid but its principles region is not revealed at capture time. Use both together with projects-section-1440.png and the full mobile image; neither desktop full image alone is a completely settled composite. They are genuine unretouched states, not evidence of permanently missing content. Contact-390.png includes the long background; contact-1440.png is a clearer viewport overlay. Article/legal captures preserve blank layout regions rather than removing them.

Secondary captures were visually inspected individually or through a contact sheet assembled from the exact saved images; use full originals to read details. Current images only; historical docs/qa artifacts were not accepted as evidence. Source assets include [public/assets/abu_bakar.jpg](./public/assets/abu_bakar.jpg), [public/assets/portfolio](./public/assets/portfolio), [public/_launchfolio/assets](./public/_launchfolio/assets), [public/_launchfolio/icons](./public/_launchfolio/icons), [public/fonts](./public/fonts). [public/assets/portfolio-studio.png](./public/assets/portfolio-studio.png) is referenced by React ProjectVisual, not proof of an external client deployment. No video playback was exercised.

- [audit-screenshots/audit-missing-page-1440.png](./audit-screenshots/audit-missing-page-1440.png)
- [audit-screenshots/blog-1440.png](./audit-screenshots/blog-1440.png)
- [audit-screenshots/blog-how-to-identify-which-workflow-to-automate-first-1440.png](./audit-screenshots/blog-how-to-identify-which-workflow-to-automate-first-1440.png)
- [audit-screenshots/blog-human-ai-automated-framework-1440.png](./audit-screenshots/blog-human-ai-automated-framework-1440.png)
- [audit-screenshots/blog-reliable-human-in-the-loop-ai-1440.png](./audit-screenshots/blog-reliable-human-in-the-loop-ai-1440.png)
- [audit-screenshots/blog-where-lead-follow-up-systems-break-1440.png](./audit-screenshots/blog-where-lead-follow-up-systems-break-1440.png)
- [audit-screenshots/blog-why-more-saas-means-more-spreadsheets-1440.png](./audit-screenshots/blog-why-more-saas-means-more-spreadsheets-1440.png)
- [audit-screenshots/contact-1440.png](./audit-screenshots/contact-1440.png)
- [audit-screenshots/contact-390.png](./audit-screenshots/contact-390.png)
- [audit-screenshots/email-draft-1440.png](./audit-screenshots/email-draft-1440.png)
- [audit-screenshots/faq-open-1440.png](./audit-screenshots/faq-open-1440.png)
- [audit-screenshots/hero-1440.png](./audit-screenshots/hero-1440.png)
- [audit-screenshots/home-1440.png](./audit-screenshots/home-1440.png)
- [audit-screenshots/home-390.png](./audit-screenshots/home-390.png)
- [audit-screenshots/home-desktop-scrolled.png](./audit-screenshots/home-desktop-scrolled.png)
- [audit-screenshots/home-no-js-390.png](./audit-screenshots/home-no-js-390.png)
- [audit-screenshots/insights-website-chatbot-crm-architecture-1440.png](./audit-screenshots/insights-website-chatbot-crm-architecture-1440.png)
- [audit-screenshots/overview-contact-sheet.png](./audit-screenshots/overview-contact-sheet.png)
- [audit-screenshots/privacy-policy-1440.png](./audit-screenshots/privacy-policy-1440.png)
- [audit-screenshots/projects-1440.png](./audit-screenshots/projects-1440.png)
- [audit-screenshots/projects-agency-lead-operations-1440.png](./audit-screenshots/projects-agency-lead-operations-1440.png)
- [audit-screenshots/projects-b2b-customer-onboarding-1440.png](./audit-screenshots/projects-b2b-customer-onboarding-1440.png)
- [audit-screenshots/projects-local-service-receptionist-1440.png](./audit-screenshots/projects-local-service-receptionist-1440.png)
- [audit-screenshots/projects-personal-engineering-studio-1440.png](./audit-screenshots/projects-personal-engineering-studio-1440.png)
- [audit-screenshots/projects-section-1440.png](./audit-screenshots/projects-section-1440.png)
- [audit-screenshots/terms-1440.png](./audit-screenshots/terms-1440.png)
- [audit-screenshots/work-custom-ops-portal-1440.png](./audit-screenshots/work-custom-ops-portal-1440.png)
- [audit-screenshots/work-knowledge-intelligence-rag-1440.png](./audit-screenshots/work-knowledge-intelligence-rag-1440.png)
- [audit-screenshots/work-multi-channel-crm-sync-1440.png](./audit-screenshots/work-multi-channel-crm-sync-1440.png)

## 17. Questions for the Independent Website Auditor

1. Does the hero help business owners recognize their problem or mainly identify technology categories?
2. Is the business-first copy consistent with the engineer title and toolkit emphasis?
3. Do the four promoted studies provide enough evidence while preserving demo/concept distinctions?
4. How do repeated unrelated diagrams affect credibility and comprehension?
5. Are Project Collaboration and Single Project meaningfully distinct?
6. Does mandatory budget selection fit the audience and invitation?
7. Is the manual email-draft funnel sufficient, especially with the observed desktop result layout?
8. Do authored articles provide a useful learning journey despite residual template teasers and broken links?
9. Can mobile visitors understand services, assess work and inquire without excessive searching/scrolling?
10. Are motion, navigation, FAQ, carousel and overlay usable with keyboard, reduced motion and assistive technology?
11. Which content source should govern future maintenance: export, mapping scripts or React?
12. Are social links, legal content, dates, scope tags and sitemap consistent with the actual offer?

**Self-review:** inspected effective routing manifest, app routes, all promoted content pages, additional data-driven React pages, modal, 404/error source, CTA destinations and content/design bindings. Homepage order follows rendered sections. Copy remains verbatim; interpretations labeled. No client results, live integrations or photograph provenance assumed. Website improvements were not implemented. Production behavior, credentials, external account ownership, email/CRM delivery and generated model replies remain unverified.

### Final runtime verification and limitations

- Email draft was generated with synthetic audit@example.com data under a catch-all POST block. No POST attempt was observed, and no email application was opened. Result text: Your email draft is ready. Your message has not been sent. Review and send it from your email app. Open email draft
- No off-origin request observed during the monitored home/contact sequence. This is not a production tracking certification.
- Active visible Name/Email/Message inputs have no HTML minLength/maxLength constraints; native required/email validation applies. This differs from the dormant React form/API.
- Five linked blog destinations returned HTTP 404:

- /blog/the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch
- /blog/building-brands-that-scale
- /blog/the-science-of-first-impressions
- /blog/how-palette-choices-drive-user-behavior
- /blog/the-psychology-of-white-space

All other 14 unique export document destinations in that check returned 200. Additional React routes also returned 200; synthetic missing URL returned 404. URL requests verify endpoint availability, not every click/interaction.

### Exact no-JavaScript homepage copy (separate fallback experience)

Source [scripts/static-fallback.cjs](./scripts/static-fallback.cjs) and embedded noscript in [public/_launchfolio/pages/index.html](./public/_launchfolio/pages/index.html). Verified at 390px with JavaScript disabled; screenshot [audit-screenshots/home-no-js-390.png](./audit-screenshots/home-no-js-390.png).

```text
Muhammad Abu Bakar
Work
Services
Insights
Contact

AI Systems & Automation Engineer

Websites, AI & systems. Built for business.

I design websites and build AI assistants, CRM workflows and custom software that help businesses manage inquiries, connect their tools and reduce repetitive work.

Selected work
Personal Engineering Studio

A focused portfolio for websites, AI and connected business systems.

Independent build
Agency Lead Operations

AI-assisted qualification, CRM updates and a clearer path to a conversation.

Demo architecture
AI Receptionist

Customer questions, service checks and booking requests in one conversation.

Demo architecture
Customer Onboarding

Guided intake, document collection and organized project handoffs.

Demo architecture
What I build
Websites & Landing Pages

Modern, responsive websites that present your business clearly and make it easier for visitors to take action.

AI Assistants & Customer Systems

AI assistants, lead qualification, CRM connections and communication workflows that help manage customer inquiries.

Workflow Automation

Connect the tools and repetitive processes that keep your business moving.

Custom Business Software

Applications, internal tools, dashboards and portals built around how your business operates.

The person behind the work

Muhammad Abu Bakar — AI Systems & Automation Engineer. I start by understanding the business, then design the interface, connections and human handoffs around the work.

From idea to working solution
Understand

Learn what the business needs and where the problem exists.

Design

Map the experience, process and technical approach.

Build

Develop, connect and test the solution.

Improve

Launch, refine and address issues based on real use.

Project scope, timing and cost are discussed before work begins.

Useful answers
Can I hire you just for a website?
Can you work with my existing tools?
What if I’m not sure what I need?
How do you decide where to use AI?
Discuss a project

Tell me what you would like to build or improve.

abgakhar787@gmail.com
```
