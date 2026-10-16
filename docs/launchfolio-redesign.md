# LaunchFolio design adaptation

Reference: https://launchfolio.framer.website/ inspected at desktop, tablet and phone sizes.

The homepage adopts the reference's centered bordered frame, locally hosted Switzer type, grayscale palette, floating expanding navigation, layered project previews, two-column project grid, services list, portrait section, engagement cards, FAQ accordion, article layout and oversized black footer. Existing secondary pages share the new font, palette, navigation and footer. Their content layouts remain intact.

This is a design adaptation, not an identical reproduction. Muhammad Abu Bakar's identity, real photograph, existing project material, article content and functioning routes are retained. Template client logos, ratings, testimonials, employment claims and subscription prices were replaced with truthful content. Project and article imagery, copy lengths, some spacing and motion consequently differ from the reference. No zero-pixel-difference claim is made.

The prior homepage, navigation, footer and global stylesheet are backed up locally under `.qa/pre-launchfolio/`. The main changes are in `app/page.tsx`, `app/launchfolio.css`, `components/Navbar.tsx`, `components/Footer.tsx` and the font preload in `app/layout.tsx`.

Validation: production compilation and TypeScript checks, ESLint, 32 route/viewport checks at 1440/768/390/320 pixels, WCAG A/AA automated scans on home/services/contact, mobile navigation, FAQ opening, contact email draft preparation and 10 mocked contact API checks. Screenshots and automated results are in `docs/qa/launchfolio-local/`. These checks validate rendering and functionality; they do not establish visual identity with the reference.

Preview: http://127.0.0.1:3201/. No deployment or messages sent. Contact delivery remains an email draft unless a webhook is configured.

Spacing revision: inner pages now use the same 1080px outer frame and 992px desktop content width. Section spacing, card padding, text measures and heading breaks were tightened; tablet project/value grids retain two columns. Mobile portrait width is constrained to its container. These overrides live in `app/spacing.css`. The revised compact rhythm follows the user's request to reduce empty space; it is not a pixel-identical copy of the reference's original 128px desktop section padding.
