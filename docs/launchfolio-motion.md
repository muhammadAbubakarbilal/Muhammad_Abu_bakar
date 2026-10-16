# LaunchFolio motion implementation

Reference inspected: https://launchfolio.framer.website/ on October 14, 2026. Animation values were read from its public appear-animation data and published page/component modules, alongside browser inspection.

Implemented in `components/LaunchMotion.tsx`, `components/Navbar.tsx`, `components/RotatingWord.tsx` and `app/launchfolio.css`:

- Word reveals: opacity, 5px blur and 10px vertical offset; 0.8 seconds; cubic-bezier(0.4,0,0.2,1); 0.05-second stagger; hero start delay 0.2 seconds.
- Hero availability/button: 0.4-second delay and 0.6-second fade. Technology strip: 0.6-second delay and fade.
- Desktop project cards travel from a rotated hero stack into the work grid; spring stiffness 1000, damping 130, mass 1; original rotations 10,15,-5,5 degrees and initial scale 0.7. Coordinates are measured from this site's layout rather than copied pixel offsets from the reference's different content.
- Service items slide from the left with incremental offsets and 0.1-second stagger.
- Lightning icon mirrors a 7-second loop to rotation -6 degrees, x2, y-5, easing (0.44,0,0.56,1).
- Lenis scrolling duration 0.8 seconds, corresponding to reference intensity 8.
- Navigation uses a 0.4-second zero-bounce layout spring. FAQ expansion, project hover details and tool-icon lifts are animated.
- Continuous technology ticker and rotating build/design/create footer text reproduce the reference behaviors. Their 24-second and 2.5-second cycle intervals are adaptations, not verified original values. Footer transition uses the observed 0.6-second (0.68,0,0.22,0.83) easing.

Reduced-motion preference disables scrolling interpolation, text reveals, card travel and repeating animation. Content remains visible with JavaScript disabled. Effects clean up on navigation and viewport changes.

The site remains a content/layout adaptation, so this is not a claim of identical Framer rendering. Template purchase widgets and reference-only overlays were not added.

Validation: production build, TypeScript, lint, desktop/mobile scroll states, settled text visibility, FAQ, navigation away/back, reduced motion, no-JavaScript rendering, browser errors and overflow. Evidence: `docs/qa/motion/` and `scripts/check-motion.cjs`.
