# Shwetam Modi — Portfolio

A server-rendered portfolio built with HonoX and configured for Cloudflare Workers.

## Requirements

- Node.js 22 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production build creates the Worker entry point and static assets in `dist/`. Wrangler runs the built site locally for preview.

## Deploy to Cloudflare

Authenticate Wrangler with `npx wrangler login`, then run:

```sh
npm run deploy
```

The Worker name and static asset directory are configured in `wrangler.jsonc`. Change the Worker name there before deploying if you want a different project name.

## Portfolio assets

- Replace `public/profile.jpeg` to update the portrait.
- Replace `public/resume.pdf` to update the downloadable résumé.
- Portfolio copy and sections are in `app/routes/index.tsx`.
