# Christian Mark Barasa — Luxury Hospitality

The personal brand website of **Christian Mark Barasa**, an international luxury
hospitality professional (Butler · Suite Ambassador · Guest Experience Specialist).

A luxury-editorial single page: full-screen hero, philosophy of service, an
interactive global voyage chart, a chaptered career journey, signature expertise
cards, a "day in luxury" timeline, professional credentials, a gallery with
lightbox, personal values, and a concierge-style inquiry experience.

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for understated animation
- Fonts: Playfair Display, Cormorant Garamond, Inter (via `next/font`)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. (Optional) Add a custom domain under the project's **Domains** settings, then
   update `site.url` in `src/lib/content.ts` to the live domain so the SEO tags
   and sitemap point at the correct address.

Alternatively, deploy from the command line:

```bash
npm i -g vercel
vercel          # follow the prompts (first run links the project)
vercel --prod   # deploy to production
```

## Editing the content (no coding required)

Almost all text lives in one file: [`src/lib/content.ts`](src/lib/content.ts).
Open it, change the words inside the quotes, and save. The sections covered:

- `site` — name, titles, tagline, email, phone, location
- `hero` — headline and the two buttons
- `philosophy` — the service philosophy and its five principles
- `voyage` — the interactive map's ports of call
- `journey` — the five career chapters
- `expertise` — the eight signature-service cards
- `dayInLuxury` — the daily timeline
- `credentials` — certifications and the Forbes recognition
- `gallery` — the gallery captions
- `values` — the six personal values
- `connect` — the inquiry section

### Replacing photos

Images live in [`public/images`](public/images). To swap one, drop a new file
into that folder using the **same filename** (for example, replace
`christian-portrait.jpg` with a new portrait of the same name). Keep images
reasonably sized (under ~1 MB each) for fast loading.

The two personal assets are `christian-portrait.jpg` (the portrait) and
`forbes-2026.jpg` (the Forbes Travel Guide badge). The remaining photography is
licensed from [Unsplash](https://unsplash.com/license) and can be replaced with
the owner's own photography at any time.

## Contact form

The "Let's Connect" form opens the visitor's email app pre-filled to
`christianfitlife99@gmail.com` (no server required). To use a hosted form
service instead, replace the `handleSubmit` logic in
[`src/components/Connect.tsx`](src/components/Connect.tsx).
