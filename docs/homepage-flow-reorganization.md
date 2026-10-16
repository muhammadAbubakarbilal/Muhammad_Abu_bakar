# Homepage flow reorganization

> The hero-card transition described below was subsequently replaced by the [business-problem showcase](./business-problem-showcase.md). The section order remains in effect.

Implemented 16 October 2026 following approval of option 2: exact requested order with a narrowly scoped hero/project transition adjustment. No commit or push. Prior portrait-favicon changes are preserved.

## A. Original versus new order

| Position | Original | New |
|---|---|---|
| 1 | Hero | Hero |
| 2 | Latest Projects | About Me |
| 3 | Big Quote / Connected Thinking | Services |
| 4 | Services | Latest Projects |
| 5 | About Me | Big Quote / Connected Thinking |
| 6 | Pricing / Process | Pricing / Process |
| 7 | Working Principles | Working Principles |
| 8 | FAQ | Articles / Insights |
| 9 | Articles / Insights | FAQ |
| 10 | Footer | Footer |

The technology ticker stays inside Hero. The separate logo strip remains between Pricing and Principles. Navigation and Footer retain their original surrounding layout.

## B. Files changed by this task

- [Exported homepage HTML](../public/_launchfolio/pages/index.html): reorder complete existing section blocks, align the abbreviated no-JavaScript fallback, and load the geometry bridge. Existing portrait favicon retained.
- [Framer homepage module](../public/_launchfolio/runtime/sites/7FFluPnX10fGrpp4NOdXsm/UgXDd86x_N79a96NfFLGG4kH_BU5mjOwtU3OFrsBWYg.CS-TrCJc.mjs): identical section reorder in the hydration render tree.
- [Homepage geometry bridge](../public/_launchfolio/homepage-flow.js): retain the original hero card position while Hero is visible, clip the cards to its boundary, and release their grid into its real position once Hero is offscreen. No duplicate cards, live DOM reordering, new animation library, or edited spring parameters.
- [Reorder helper](../scripts/reorder-homepage.cjs): repeatable source-slice transformation with structure assertions. Preserves every section's original markup and runtime subtree.
- [Personalization generator](../scripts/personalize-reference.cjs): apply the helper after content generation so regeneration retains the requested sequence.
- [This report](./homepage-flow-reorganization.md): implementation, evidence, limitations and follow-up gaps.

The active route is the exported homepage, served by [Next configuration](../next.config.ts). The shadowed [React homepage](../app/page.tsx), CSS, content sources and other routes were not changed by this task. Secondary-page/favicon changes shown by Git predate this task.

## C. Visual preservation verification

Captured the original page before editing, then tested the reorganized page at 1440, 1024, 768, 390 and 375px with a 1000px viewport height. Section screenshots were taken after scrolling to each section; desktop and phone comparisons were inspected. Initial hero and intermediate scrolling were also inspected.

- Every named section's complete server HTML block is byte-identical to baseline.
- Every Framer section render subtree and all module code outside the reordered sibling list are identical to baseline. This preserves component identities, animation configurations, event handlers and content.
- All nine measured section heights match the baseline within 1px at all five widths.
- No document horizontal overflow or pageerror events occurred in the five-width suite.
- Hero portrait, CTA, card stack and ticker remain; About, Services, Quote, Pricing, Principles, Articles and FAQ retain their original compositions.
- Project cards retain their original styles, hover behavior configuration, links and settled grid. Their continuous travel from Hero into an immediately adjacent Projects section is deliberately changed, as approved: cards are clipped at the Hero boundary and the grid returns to its actual location while offscreen.
- Existing animations remain scroll-dependent. Captures can show different intermediate reveal/rotation states, and floating controls can differ according to scroll history. No pixel-perfect equivalence is claimed.

Evidence is retained locally in ignored [QA artifacts](../.qa/flow-order/): [responsive results](../.qa/flow-order/verified.json), [original measurements](../.qa/flow-order/results.json), [desktop paired comparison](../.qa/flow-order/paired-1440.png), [phone paired comparison](../.qa/flow-order/paired-390.png), [hero](../.qa/flow-order/after-hero-1440.png), and [hero/About boundary](../.qa/flow-order/bridge-1440-300.png). These local QA files are not committed assets.

## D. Functionality verification

Passed in local Chromium:

- Hero CTA opens the existing contact form; Pricing contact trigger also opens it.
- Floating Services navigation reaches its section.
- A project card opens its project detail; browser Back restores the homepage and Forward restores the detail.
- An article card opens its article detail.
- FAQ opens and closes an answer.
- Footer Privacy Policy navigation works.
- Phone menu opens and its Services link works.
- Resizing from phone to desktop and returning to the top restores the hero stack.
- Direct hash loads and reloads for hero, services, projects, pricing and faq were exercised at every tested width.
- No-JavaScript fallback displays About, Services, Work, Pricing and FAQ in the aligned order.
- Reduced-motion emulation loads the reordered sections; this was a smoke test, not a complete accessibility audit.

[Interaction results](../.qa/flow-order/interactions.json) record the exercised paths. Forms were not submitted, mail links were not launched, and external destinations were not contacted. Representative detail links were tested, not every external or secondary-page link.

Syntax checks, editor diagnostics, exact source-preservation assertions and reorder idempotence passed. Diff whitespace checks pass when accounting for Windows CRLF line endings. No dependency installation or full production build was needed for these static-source changes; the existing local Next development server served the tests.

## E. Remaining business-flow gaps

Reordering improves the sequence without rewriting the message. A dedicated explanation of identifying a business problem before selecting technology would require separately approved content work. Existing generic social destinations, legacy/template details, repeated article imagery and the contact draft layout are outside this task; see the [business audit handoff](../WEBSITE_BUSINESS_AUDIT_HANDOFF.md). No unrelated fixes were folded in.

## F. Technical limitations

The original Hero and Projects shared one set of project cards and assumed adjacency. Exact continuous-motion equivalence is impossible with About and Services inserted between them. The approved solution preserves the original card transforms/springs but confines their drawing to Hero while Hero is visible. At the Hero boundary, cards may be visibly cut off as they leave that area; they no longer travel across the intervening sections. The full grid appears normally later.

The bridge is desktop/tablet only (768px and above), recalculates from actual geometry after resize/font loading/content changes, and handles history restoration. Phone layouts retain their original behavior. It depends on the existing generated selectors; a fresh Framer export that changes those selectors needs review. The generator's source-structure assertions fail rather than silently reorder an unfamiliar export.

Validation covers local Chrome/Chromium, not Safari, Firefox or physical devices. No production deployment was performed. Existing animation timing makes screenshot equality an unsuitable claim; source equivalence and section geometry provide additional preservation evidence.

