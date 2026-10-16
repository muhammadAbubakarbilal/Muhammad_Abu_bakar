# Portfolio runtime optimization

The existing Framer renderer and animation definitions remain in place. This pass reduces the portfolio adaptation layer's loading and per-frame work.

- Reduced `public/_launchfolio/portfolio-data.js` from 653,740 to 102,079 bytes (84.4%). HTML and JavaScript literals are personalized during generation; only replacements still present in binary CMS content are shipped to browsers. Removed the unused global replacement table and duplicate serialized regular expression. Repeated translations use a bounded 256-entry cache.
- The mutation observer processes added element subtrees once per animation frame instead of rescanning every image and link in the entire document on each mutation batch. Detached and nested duplicate roots are skipped.
- Hero scroll adjustments run at most once per animation frame, skip unchanged CSS values, and attach only to the home page. Once the intro has scrolled away, its unchanged values no longer trigger style writes.

## Evidence and limits

`scripts/measure-performance.cjs` measures three fresh browser contexts at 1440px, with a four-second observation window after network idle. Results are in `docs/qa/personalization/performance-before.json` and `performance-after.json`.

Total decoded resource size fell from 2,742,163 to 2,191,274 bytes, approximately 20.1%. These are decoded bytes, not compressed network transfer sizes. Local timing measurements vary and are not a production Core Web Vitals result or a guaranteed load-time improvement. The remaining main-thread work is largely in the captured Framer runtime, which this pass does not rewrite.

All 14 mapped pages passed browser checks without page errors, HTTP failures or horizontal overflow. The contact draft flow produced no external submissions or failed requests. The scroll-direction navbar continued to close on downward scrolling and expand on upward scrolling. JavaScript syntax checks passed. Only generated public assets, their generator and verification scripts changed; no Next application build changes were required.
