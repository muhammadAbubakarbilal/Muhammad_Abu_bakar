# Business-problem showcase implementation

Implemented 16 October 2026. This replaces the previous hero/project-card geometry bridge. The existing homepage section order and portrait favicon changes are retained. No commit, push or deployment.

## Changed files

| File | Purpose |
|---|---|
| [business-questions.js](../public/_launchfolio/business-questions.js) | Four configurable groups containing the supplied 16 questions, plus entrance, stagger, hold and exit timings. |
| [homepage-flow.js](../public/_launchfolio/homepage-flow.js) | Single shared element, independent content clock, scroll interpolation, destination measurements, resizing, controls and cleanup. Replaces the old project-card bridge. |
| [business-showcase.css](../public/_launchfolio/business-showcase.css) | Scoped typography, subtle neutral backdrop, small-screen hero space, original-photo visibility and project-section clipping. |
| [Exported homepage](../public/_launchfolio/pages/index.html) | Load configuration and CSS; enable the scoped stylesheet before initial layout. |
| [reorder-homepage.cjs](../scripts/reorder-homepage.cjs) | Reapply those assets idempotently during the existing personalization/reorder pipeline. |
| [Previous flow report](./homepage-flow-reorganization.md) | Mark its old hero-card transition description as superseded. |
| [This report](./business-problem-showcase.md) | Implementation details, checks and limitations. |

The active homepage remains the Framer document served through [Next rewrites](../next.config.ts). This task does not change the shadowed React homepage, generated Framer module, other section subtrees, global styles or project-detail pages. Existing Git changes from earlier tasks are preserved.

## Content and internal animation

Edit the groups and timings in the configuration file without editing movement code. There is one visible group and one shared showcase instance. Its four questions reveal in order: 550ms opacity/upward/blur entrance, 700ms between starts, 2600ms hold after the last entrance, then a 450ms group fade. The next group replaces the old group only after its exit; the sequence loops 1, 2, 3, 4, 1.

A separate animation clock advances the text. It pauses while the shared element is travelling, outside the viewport, or while the document is hidden. Pause reveals and holds the current group; Next advances manually. Existing site animations are untouched.

All 16 questions have a stable screen-reader representation without repeated live announcements. The visual composition is hidden from the accessibility tree to avoid duplicate reading. Keyboard-operable controls allow pausing and manual navigation.

## Shared movement and exact destination

The new element is mounted outside Framer's hydration root. It is never cloned into separate hero/About instances and never changes the surrounding section layout during scrolling.

At desktop widths, its source is the hero's right side. Its final width, height and page coordinates come from the existing About image container, .framer-1kqkoe. The original image wrapper becomes invisible only after initialization succeeds; the photograph asset, hero portrait, profile details and social links remain.

ResizeObserver, font readiness, viewport changes and restored-page events invalidate cached geometry. The scroll handler schedules one animation frame; that frame interpolates a transform from cached coordinates using smoothstep easing. It does not measure DOM rectangles or rerender the page on each scroll. End-point rounding accounts for fractional Framer coordinates.

To avoid overlaying the site's existing words, the component passes behind the ticker/About heading band and About prose through a calculated clip path. It becomes fully visible again in the photo area. This is deliberate occlusion, not duplicate elements or an independent fade between two widgets. The current question group remains unchanged during travel.

All configured groups are measured on geometry changes to select one stable fitting font size. This prevents longer questions from changing the component's dimensions between groups. Original About text, heading, signature, image-container dimensions and surrounding layout remain untouched.

## Smaller screens and reduced motion

Below 1200px, the hero reserves a contained row beneath its existing headline/CTA and above the ticker. This is a necessary increase in hero height; it avoids placing questions over the hero copy. On phones, its horizontal position already aligns with the destination, so the movement is primarily vertical. Existing About copy masks the passing component while that copy is onscreen. The content does not jump between separate instances.

With reduced motion, the component is statically placed in the About image area, all four questions are immediately readable, autoplay and travel are disabled, and Next exposes subsequent groups. The extra small-screen hero row is removed in this mode. The hero therefore does not display a separate duplicate showcase for reduced-motion users.

## Verification

Local Chromium checks cover 1440, 1024, 768, 600, 390 and 375px widths:

- One shared instance and one visible group.
- Each configured group fits above the controls without horizontal overflow.
- Destination coordinates/dimensions align within 1px with the original photo container.
- Scrolling upward restores the hero position.
- Four actual project links remain in Latest Projects; hero card appearances are removed.
- No pageerror events in the responsive suite.
- Source comparisons confirm every original section HTML subtree remains unchanged.
- Reapplying the generator helper produces no further changes.
- JavaScript syntax and editor diagnostics pass.

The timing test samples sequential entrance opacity and observes a complete 1→2→3→4→1 rotation. Reduced-motion checks cover static placement, no automatic group change, and manual Next with fully visible text.

Representative existing interactions tested: hero contact CTA, Pricing contact trigger, floating Services navigation, a project card/detail with Back/Forward, an article detail, FAQ open/close, footer Privacy Policy, mobile menu/Services link, and responsive resize. No contact form was submitted and no email was sent.

Baseline and resulting hero/mid-transition/destination screenshots are in ignored [local QA artifacts](../.qa/showcase/), together with [responsive/timing results](../.qa/showcase/results.json) and [interaction results](../.qa/showcase/interactions.json). Desktop and phone captures were visually inspected. No pixel-perfect equivalence is claimed for the intentionally changed hero and photo area.

## Limitations

- During movement the questions are partially or fully occluded behind preserved ticker/heading/copy regions. This protects readability of the existing page; the whole composition is visible at its source and destination.
- Tablet/phone hero height increases to accommodate the new component. Reduced-motion mode uses About-only static placement.
- Integration depends on the existing exported Framer selectors and image aspect ratio. A future export changing that structure requires review.
- Tested in local Chrome/Chromium, not physical devices, Safari or Firefox. No production build/deployment or external form submission was performed.
- Existing unrelated template content and contact behavior were not changed.

## Follow-up: higher hero placement and word reveal
The hero source now sits 70px higher on desktop and 40px higher in the contained tablet/phone row. Each sentence reveals its words progressively within the existing 550ms entrance window; sentence starts remain 700ms apart. All four existing questions per group are retained. Checked group fit at 1440, 1024, 390 and 375px, exact About alignment, word/sentence staggering, and reduced-motion visibility.

