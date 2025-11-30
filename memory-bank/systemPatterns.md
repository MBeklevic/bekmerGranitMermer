# System Patterns

## Architecture
- Next.js App Router static site with shared layout and per-route pages.
- Tailwind CSS for styling consistent with provided HTML.
- Image domains whitelisted for remote assets (e.g., Googleusercontent).
- Components for shared UI: `Header`, `Footer`, `ThemeToggle`.
- Path alias `@/*` → `src/*` via `tsconfig.json`.
- Static export enabled (`next.config.mjs` → `output: "export"`).

## Pages and Routes
- `/` → Anasayfa
- `/hakkimizda` → Hakkımızda
- `/hizmetler` → Hizmetler
- `/iletisim` → İletişim
- `/referanslar` → Referanslar
- `/teklif-al` → Teklif Al

## Design Considerations
- Provided HTML shows two primary palettes:
  - Gold accent (#c0a172) on Anasayfa.
  - Blue accent (#1152d4) on other pages.
- Dark mode classes used in designs (class-based toggle).
  - Implemented with a simple class toggle button in `ThemeToggle` (client component).

## Content Strategy
- Static content embedded in pages/components (no CMS).
- Translations done inline to Turkish.


