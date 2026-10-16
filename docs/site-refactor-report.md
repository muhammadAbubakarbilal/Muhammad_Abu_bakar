# Engineering studio refactor — delivery report

Preview: **http://127.0.0.1:3201**. Local implementation only; nothing was deployed or committed.

## Finished direction

An editorial personal studio in the existing graphite-and-amber identity. The direct offer comes first, followed by visible work, four service groups, one interactive customer journey, a personal introduction, the four-stage process and a clear project invitation. The real portrait and recognizable AB mark remain.

## Changes

- **Removed:** the long homepage philosophy matrix, bottleneck inventories, before/after comparison, fit section, repeated AI strategy and technology catalog. Obsolete components were already deleted in the unfinished refactor and remain removed.
- **Merged:** six technical system categories into four service groups; business thinking and human/AI/automation boundaries into the personal section.
- **Rewritten:** homepage, service descriptions, about, process, inquiry form, FAQs, project narratives and all six insights. Unsupported client scenarios, precise time savings, guarantees and invented model-version claims were removed from the active data.
- **Preserved:** name, identity, portrait, AB mark, dark/amber palette, Next.js App Router, API paths, six original project slugs, six article slugs and useful technical workflows. `/faqs` redirects to `/faq`; historical service fragment IDs remain available.
- **Redesigned:** navigation and mobile menu; visual work listing and case studies; service-led systems page; about, process, contact, articles and FAQs; responsive assistant dialog.
- **Added:** an honest independent-build case study for this actual website with a genuine production screenshot; labeled architecture illustrations; replayable/selectable system diagram; shared identity/service data; local font; sitemap and robots; no-JavaScript navigation fallback; verification scripts and documentation.

There are approximately 500 words in the homepage main content including project labels, diagram text and actions. The substantive narrative is within the brief's approximate 250–450-word editorial target once those labels are excluded.

## Technical implementation

Most page content remains server-rendered. Small client components own menu, assistant, form and diagram behavior. The assistant drawer loads on demand. Next Image handles the portrait and actual website preview; below-the-fold images load lazily. Geist is served locally, avoiding runtime font-network dependencies.

CSS tokens define colors and layout, with explicit desktop/tablet/mobile compositions. Motion uses the existing `motion/react` package; CSS handles simple hover and line entrances. Reveals enhance already-readable server content. Reduced-motion users get static content; the workflow ends in a stable state and can replay on demand.

No application package was added. Playwright, axe and Prettier were installed only in ignored `.qa` development tooling. `NEXT_OUTPUT_DIR` permits production checks in `.next-production` without colliding with the running development server. Standard deployment builds keep their existing output behavior.

The original contact API validated and logged a submission but had no delivery integration. The revised endpoint keeps validation and legacy input compatibility, supports a configured webhook with optional bearer token and reports failures honestly. Without that configuration, the UI prepares an email draft for the visitor to send. The assistant preserves Gemini support and explicitly labels local fallback guidance.

## Verification

| Check | Result |
| --- | --- |
| Optimized production build | Passed; 28 generated static entries |
| TypeScript `tsc --noEmit` | Passed |
| ESLint | Passed; no warnings or errors |
| Contact API checks | 10 passed, with mocked delivery success/failure/timeout; no external messages sent |
| Route and viewport checks | 50 passed: all 21 content routes at 1440px and 390px, plus home/work/services/contact at 768px and 320px |
| Internal links | 47 passed, including fragment destinations |
| Browser JavaScript errors | None in the final production run |
| Automated accessibility | Zero WCAG A/AA violations reported by axe on seven representative pages |
| Mobile navigation | Open/close, navigation, Escape and focus restoration passed |
| Assistant | Local guidance, reset, Escape and focus restoration passed |
| Contact | Native required-field validation, email draft content and explicit unsent state passed |
| Workflow visual | Selection, replay and normal-motion completion passed |
| Resilience | Reduced motion, essential no-JavaScript content, 404, `/faqs` redirect, sitemap and robots passed |
| Visual review | Desktop, tablet and mobile screenshots captured and inspected; tablet work overflow fixed |

The tests also found and fixed a modal focus-restoration issue. The launcher now receives focus after the modal unmounts.

Build output reports about **154 kB first-load JavaScript for the homepage**. A single unthrottled local Chrome sample measured LCP at 676 ms desktop / 304 ms mobile, with CLS 0 in both. These are local laboratory observations, not field Core Web Vitals, a Lighthouse score or a production performance guarantee. INP was not measured.

Evidence: [browser results](qa/results.json), [local timing samples](qa/lab-metrics.json), [desktop homepage](qa/final/home-1440.png), [mobile hero](qa/final/hero-390.png), [mobile homepage](qa/final/home-390.png), [contact page](qa/final/contact-1440.png), [baseline screenshots](qa/baseline/).

## Resources actually used

- Local Sites skill, using its existing-checkout/local-only workflow.
- [Anthropic Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design): subject-specific composition and editorial restraint.
- [Vercel React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices): server-rendered content, small client boundaries and deferred assistant loading.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md): semantics, focus, forms and responsive checks.
- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): public guidance on accessibility, touch targets and responsive layouts. Its local search database was unavailable; no search match or full installation is claimed.
- [Motion accessibility documentation](https://motion.dev/docs/react-accessibility) and the installed Motion package.
- [CreatorCut reference](https://creatorcut.framer.website/) and the existing live portfolio: reviewed visually for clarity, hierarchy and personal presentation. Its branding, copy and metrics were not copied.
- Playwright with installed Chrome, axe-core, TypeScript, ESLint, Next production build and a local formatter.

The external skill documents were read as references; they were not installed as global skills.

## Outstanding configuration and evidence

1. **Public email confirmed.** The owner confirmed `abgakhar787@gmail.com` in this conversation. No email deliverability claim is made.
2. **Live inquiry delivery is not configured.** Provide a delivery webhook if direct submission is desired. Email-draft preparation works now. Real provider delivery was not tested; its success/failure contract was tested with mocks.
3. **Gemini credentials are not configured.** The local fallback is tested. Real model replies and provider availability were not tested.
4. **Six system projects lack implementation evidence.** Their documented architecture is preserved and explicitly labeled. No verified client outcomes, measured project benchmarks or genuine application screenshots were available. The website preview is an actual capture of the implemented site.
5. Automated accessibility checks supplement the keyboard and visual review; they do not constitute a complete assistive-technology certification. Cross-browser/device testing beyond desktop Chrome with responsive viewports remains unperformed.

Setup and reproduction commands are in [local development](local-development.md).
