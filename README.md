# Ben King — Portfolio (React + Vite)

A runnable React implementation of the bold portfolio design. This is **real,
editable code** — start it, then change copy, colours and layout freely.

## Run it

```bash
npm install
npm run dev      # start the dev server (Vite prints a localhost URL)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Where things live

```
index.html              ← Google Fonts links + #root
src/
  main.jsx              ← React entry
  App.jsx               ← composes the sections
  index.css            ← ALL styling: tokens, resets, keyframes, components
  data.js              ← copy, projects, facts, marquee, profile/links  ← edit here
  components/
    Grain.jsx          ← film-grain overlay
    Nav.jsx            ← centered nav (Contact = outline → fills on hover)
    Hero.jsx           ← full-bleed bold hero, outlined "engineer"
    Marquee.jsx        ← infinite scrolling strip
    About.jsx          ← who-am-I + portrait + facts grid
    Work.jsx           ← editorial work index with hover fills
    Contact.jsx        ← validated contact form (stateful)
    Footer.jsx         ← bottom bar + live London clock
    Reveal.jsx         ← scroll-reveal wrapper (IntersectionObserver)
public/images/         ← drop your photos here (see README.txt inside)
```

## Common edits

- **Text / projects:** edit `src/data.js`.
- **Colours:** edit the CSS variables in `:root` at the top of `src/index.css`.
  Try setting `--bold: #2233c9;` (the cobalt token) to recolour the whole site.
- **Fonts:** swap the `<link>` in `index.html` and the `--font-*` variables.
- **Images:** add files to `public/images/` and update paths in `src/data.js`.
- **Contact form:** `Contact.jsx` currently just flips to a "sent" state on
  valid submit. Wire `handleSubmit` to your email service / API (e.g. Formspree,
  Resend, a serverless function).

## Notes

- Styling is one global stylesheet using plain class names. If you prefer CSS
  Modules or a CSS-in-JS / utility setup, the class structure maps cleanly.
- Motion respects `prefers-reduced-motion`.
- No router yet — it's a single scrolling page with anchor links. Add
  react-router if you later split Work/About into their own routes.
