# Tech Context

## Stack
- Next.js (static site generation).
- Tailwind CSS for styling.
- TypeScript recommended.
 - ESLint pinned to v8 for compatibility with `eslint-config-next@14.2.5`.

## Dev setup
- Node.js 18+.
- Package manager: npm or pnpm.
- Tailwind configured via PostCSS (preferred) or CDN if requested.
 - Path alias configured in `tsconfig.json` (`@/*` to `src/*`).
 - Static export configured in `next.config.mjs` (`output: "export"`).
 - Remote images allowed from `lh3.googleusercontent.com`.

## Constraints
- No backend or dynamic APIs.
- Form UIs are static only.
- Optimize for performance (images, fonts).

## Dependencies
- next, react, react-dom, tailwindcss, autoprefixer, postcss.
 - eslint (^8.57.0), eslint-config-next (14.2.5)


