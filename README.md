# Samuel Bicalho Henriques — CV / Portfolio

Single-page résumé for a Materials Engineering student and researcher, built as a
static Next.js site.

## Stack

- **Next.js 15** (App Router, `output: "export"` — no server runtime needed)
- **Tailwind CSS v4**
- **Lucide** icons

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site into ./out
```

## Editing the content

All résumé data lives in typed constants at the top of
[`app/page.tsx`](app/page.tsx) — `PROFILE`, `EDUCATION`, `EXPERIENCE`,
`PUBLICATIONS`, `SKILLS`, `AWARDS`, `COURSES`, `LANGUAGES` and `LEADERSHIP`.
Updating the CV means editing those arrays, not the JSX.

The downloadable PDF is served from [`public/`](public/) and linked through
`PROFILE.cv`.

## Printing

The page carries a dedicated print stylesheet: `@page { size: A4 portrait }`,
hidden navigation and decorative layers, a single-column flow and
`break-inside: avoid` on every card. Use the floating **Print / Export PDF**
button or <kbd>Ctrl</kbd>+<kbd>P</kbd>.

## Deployment

Netlify builds from [`netlify.toml`](netlify.toml) — `npm run build`, publishing
the `out` directory. Any push to `main` triggers a redeploy.
