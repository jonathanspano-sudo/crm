# TMI CRM

Internal CRM for Traffic Management salespeople and account managers.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript) and
[Tailwind CSS v4](https://tailwindcss.com). Deploys to Vercel with zero
configuration.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

Import this repository at [vercel.com/new](https://vercel.com/new). Vercel
auto-detects Next.js; no build settings needed.

## Brand

Design tokens live in `app/globals.css` (`@theme` block): white background,
black text, TMI orange accents. Change `--color-brand` there to retune the
whole page.
