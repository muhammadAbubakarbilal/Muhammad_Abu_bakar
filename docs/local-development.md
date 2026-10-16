# Local development and verification

## Current serving layer

The newer LaunchFolio adaptation is now the active version. `next.config.ts` serves the captured pages in `public/_launchfolio` for the routes listed in `portfolio-routes.json`. Several original URLs redirect to these pages or homepage sections. The original native Next pages remain in the repository and serve unmapped project/article routes.

The captured contact overlay prepares an email draft; it does not call the native contact API. Webhook configuration below applies to the retained native inquiry implementation. The current adaptation and its constraints are documented in [LaunchFolio personalization](launchfolio-personalization.md). The earlier [studio refactor report](site-refactor-report.md) describes the preceding version, not the current rendered homepage.

For the active version, run `node scripts/check-business-content.cjs` against the production preview on port 3201. It verifies mapped and retained native routes, metadata, project navigation, menu behavior, FAQ expansion and email-draft preparation. `node scripts/repair-content-output.cjs` refreshes the content binding file and repairs the known split scope sentence and malformed contact URLs without regenerating the captured renderer.

`node scripts/check-static-fallback.cjs` checks the reduced-motion homepage with axe and verifies readable, overflow-free no-JavaScript content on all 14 captured routes. The fallback is generated from the portfolio data by `scripts/static-fallback.cjs`; it is integrated into both the full personalization writer and the small content repair command. Latest continuation findings are in [the continuation report](continuation-report.md).

## Start the website

Install with `npm.cmd install` on Windows, then run `npm.cmd run dev`. The existing VS Code task **Start portfolio development server** does the same. The port is printed in the terminal.

The completed production preview for this session is at **http://127.0.0.1:3201**. It uses the task **Preview verified production build**.

To rebuild that preview without interfering with an active development server, use PowerShell:

```powershell
$env:NEXT_OUTPUT_DIR = '.next-production'
npm.cmd run build
npm.cmd run start -- --hostname 127.0.0.1 --port 3201
```

Stop the running production preview before rebuilding/restarting it. A normal `npm run build` still uses the standard `.next` directory unless `NEXT_OUTPUT_DIR` is set. Hosted deployments need no special output-directory setting.

## Configuration

Copy [the environment example](../.env.example) to `.env.local` when configuring integrations. Do not commit secrets.

- `NEXT_PUBLIC_CONTACT_EMAIL`: one public contact address. The owner confirmed `abgakhar787@gmail.com` in this conversation.
- `NEXT_PUBLIC_SITE_URL`: canonical origin used by metadata, sitemap and robots.
- `GEMINI_API_KEY` and optional `GEMINI_MODEL`: enable model-generated project guidance. Without credentials, replies are clearly labeled local guidance.
- `CONTACT_WEBHOOK_URL` and optional `CONTACT_WEBHOOK_TOKEN`: server-only delivery destination. It receives validated JSON containing name, email, projectType, description, optional context, receivedAt and source. The receiver must return 2xx only when it has accepted the inquiry.

Without a contact webhook, the form prepares an email draft. Visitors explicitly send it from their own email app. It does not pretend an inquiry has been delivered. No external emails were sent during testing.

## Checks

```powershell
npm.cmd run lint
node node_modules/typescript/bin/tsc --noEmit
node scripts/api-check.cjs
```

The contact API checks mock external delivery and cover validation, success, upstream failure, timeout, absent configuration, honeypot, size limits and legacy diagnostic inputs.

Browser QA uses isolated development tools; no new application dependencies were added. To reproduce on Windows with Google Chrome installed:

```powershell
npm.cmd install --prefix .qa playwright @axe-core/playwright
$env:QA_URL = 'http://127.0.0.1:3201'
node scripts/qa.cjs
node scripts/capture-final.cjs
node scripts/measure.cjs
```

The capture and measurement scripts use port 3201. Browser launch paths target the Chrome installation used in this workspace. Adjust `executablePath` when running on a different machine.

See [the implementation plan](site-refactor-plan.md), [the verification report](site-refactor-report.md) and [browser results](qa/results.json). Screenshots are stored in [baseline](qa/baseline/) and [final](qa/final/).

## Content maintenance

- [Site identity and services](../lib/site.ts): contact identity, four service groups, process and FAQs.
- [Project and article data](../lib/data.ts): stable slugs, accurately labeled project status, architecture and concise articles.
- [Shared styles](../app/globals.css): palette, typography, layouts, breakpoints and motion fallback.
- [Motion presets](../lib/motion.ts): shared timing used by interactive components.

The website is the only project in this repository with working implementation evidence. The other six entries are architecture studies or concepts, not verified client deployments. Replace illustrations with real project captures only when those assets and their context are available.
