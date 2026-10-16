# Personal engineering studio refactor

## Baseline audit

- Next.js App Router; installed Next 15.5.27, React 19.3.0, Motion 12.43.0, Tailwind 4 and TypeScript. Keep the current package versions and deployment configuration.
- Routes: `/`, `/work`, six retained `/work/[slug]` studies plus one new independent website case study, `/systems`, `/about`, `/process`, `/contact`, `/faq`, `/faqs`, `/insights` and six `/insights/[slug]` essays; APIs `/api/contact` and `/api/assistant`. Preserve paths and old service fragment IDs.
- Assets: one authentic portrait, the original SVG wordmark and favicon. No application screenshots, videos, external project repositories, verified client identities or measured benchmarks are present.
- Source and live homepage both begin with abstract systems philosophy and repeat Human/AI/Automation, bottlenecks, architecture and transformation. Work is largely text. Existing styling is graphite, zinc and amber, using system sans and mono fonts.
- Contact endpoint validates diagnostic fields, logs a submission and returns success; it has no email, persistence or CRM delivery. Assistant uses Gemini with a heuristic fallback, but labels the experience live AI even without credentials.
- Existing refactor uses **abgakhar787@gmail.com**; confirmation was requested in this conversation and is still pending. No verified professional social URLs supplied.
- Git baseline: tracked files clean at `d52f279`; existing untracked `.vscode/` and `package-lock.json` belong to the user and will be preserved. No AGENTS.md found in repository or parent directories.

## Keep

Name, professional identity, dark graphite/amber brand, authentic portrait and logo, all project and article slugs, Next architecture, server-side Gemini integration, API paths and useful technical project detail.

## Rewrite

Direct business-facing hero and service copy; first-person about; accessible four-field project inquiry; concise FAQs. Replace fictional customer scenarios, time savings, volume, absolute reliability and conversion claims with explicitly illustrative design goals. Preserve documented architecture, describing provider integrations as proposed rather than verified live deployments.

## Merge

Six system categories into four recognizable service groups. Combine business thinking and human/AI/automation judgment into the personal section. Keep one connected process demonstration.

## Remove

Long homepage philosophy, problems, transformation, fit, AI strategy and technical stack sections. Remove obsolete unused essay/diagram components after replacing their uses. Remove unsupported performance figures and response-time promises. No hidden remnants in the homepage DOM.

## Relocate

Technical decisions, human handoffs and integrations to case studies; service depth to `/systems`; expanded four-stage methodology to `/process`; useful essays remain under `/insights`.

## Redesign

- A large editorial hero paired with the owner's portrait and compact personal identity.
- Three prominent project studies with visibly labeled original workflow illustrations, never fake screenshots. The actual portfolio website can be shown using a genuine browser capture once implemented.
- Four service rows with distinct miniature native visual treatments, one selectable/replayable connected systems diagram, personal section, compact process and contact invitation.
- Consistent media-led work listing, visual case studies, service-led systems page, personal about, simple contact, readable articles and FAQs.
- Mobile navigation with keyboard support, Escape dismissal and explicit expanded state; visible focus; reduced-motion alternatives; no hover-dependent information.

## Reuse

Motion already installed; native CSS for simple motion; Next Image for the portrait and genuine website capture; Lucide icons; existing project workflows and useful article structure. No redundant UI/animation dependency.

## Design system

Palette: graphite `#090b0e`, raised slate `#11161d`, border `#2b313a`, warm white `#f2f0eb`, secondary text `#a5a9b0`, amber `#efb45d` (an evolution of existing amber). Locally hosted sans typography when available, with system fallback; monospace limited to step indicators. Max width 1248px; 24px mobile gutters, 48px desktop gutters. Hero 44–86px, section heads 32–52px, body 16–18px. Quiet rounded media frames, editorial open layouts, distinct service treatments. One coordinated hero entrance; media reveals once; 180–220ms hover/press; 550–650ms entrance; 16px movement. Essential server-rendered text remains visible without JavaScript.

## Contact and honesty

One configurable email. Preserve server validation and the endpoint; support a configured webhook with optional bearer token. Without delivery configuration, return an explicit unavailable response and offer a prepared email draft; never claim delivery from a log. Use a honeypot and bounded input. Distinguish assistant provider replies from local guidance.

## Validation

Capture baseline live/reference and local screenshots if browser tools permit. Run production build, TypeScript and configured ESLint. Browser-check all routes, internal links, form validation/error/fallback, menu/assistant focus, diagram selection/replay, 320/390/768/1440 layouts, no JavaScript and reduced motion. Save screenshots and a final verification report under `docs/`. Do not deploy.

## Resources

Sites skill (local-only workflow); read Anthropic Frontend Design, Vercel React Best Practices, Vercel Web Design Guidelines, UI/UX Pro Max and official Motion documentation online. Optional external skills are reference material, not installed global skills. UI/UX Pro Max local search database unavailable; use its general accessibility/layout guidance without claiming a database match.
