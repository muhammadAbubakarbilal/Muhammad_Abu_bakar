# LaunchFolio layout applied to the portfolio

The primary portfolio routes use a locally captured LaunchFolio renderer, styles, fonts and motion modules. This retains the reference's responsive layout, word reveals, hover variants, card motion, FAQ transitions and scroll-direction navigation. It is a captured runtime, not a native Framer editing project.

The content adaptation replaces the owner name, email, portrait, project studies, article copy and project imagery with Muhammad Abu Bakar's portfolio material. Generated project visuals are illustrative architecture diagrams. Template client testimonials and performance claims have been replaced by working principles. Payment and booking actions open the portfolio contact overlay. The form prepares a mailto draft and requires the visitor to send it in their email app.

## Implementation

- `scripts/personalize-reference.cjs` transforms content from the original capture in `.qa/reference-original`, using `lib/data.ts` and explicit copy mappings. It also adapts the binary CMS reader to static hosting without changing its byte offsets.
- `public/_launchfolio/portfolio.js` connects contact actions and draft preparation.
- `public/_launchfolio/portfolio.css` contains portfolio-specific identity adjustments.
- `public/_launchfolio/portfolio-routes.json` maps 14 reference page structures to portfolio routes. `next.config.ts` serves them and redirects corresponding old URLs.
- `scripts/sync-reference-icons.cjs` stores the original nine button icon implementations locally.

The captured HTML remains a no-JavaScript fallback. The personalized runtime renders on the client to avoid mismatches between the reference's split-word server markup and changed portfolio copy. Do not run `sync-reference.cjs` against the personalized site without subsequently running personalization. Retain the original local backup for regeneration; it is excluded from Git.

## Validation

Production build and ESLint pass. Browser checks cover all 14 mapped routes, loaded images, horizontal overflow, console errors, mobile home layout and the contact draft action. Contact validation submits no external POST request.

Real mouse-wheel comparison confirms the same navbar states: Default on load, Closed while scrolling down, Default while scrolling up. The reference desktop widths were 549.953 / 232.547 px; the personalized widths were 579.375 / 261.969 px because the owner name is longer. Measurements and screenshots are in `docs/qa/personalization/`.

Exact pixel equality is not asserted: name, copy length, portrait, project imagery and factual service details intentionally differ. Additional legacy project/article routes without reference counterparts retain their existing native pages. The captured runtime must be refreshed explicitly if the remote reference changes.
