# harshdeshpande.com

My personal portfolio — a single-page, bento-style site built with plain **HTML, CSS and JavaScript**. No frameworks, no build step.

## Design

- **GitHub-dark base** (`#0d1117` family) with a **`#6F00FF` violet accent**
- Light/dark themes via `data-theme` on `<html>` — one stylesheet, CSS variables only
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono accents)
- Touches: typing terminal card, keyword marquee, scroll-reveal cards, active-nav highlighting
- Respects `prefers-reduced-motion`

## Files

| File | Role |
|---|---|
| `index.html` | The whole site — hero, about, experience, skills, projects, contact |
| `styles.css` | Single stylesheet; theme variables at the top |
| `script.js` | Theme toggle, terminal typing, scroll reveal, active nav |
| `images/` | Favicon (legacy logos kept for history) |

## Deploy

Static files — works on GitHub Pages, Netlify or any static host as-is.
