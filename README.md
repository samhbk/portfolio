# Sameh Bakleh — Developer portfolio

Terminal-inspired single-page portfolio (Next.js App Router, TypeScript, Tailwind CSS, Framer Motion). Content and the **full project index** live in `src/lib/site.ts` — update social links, GitHub URL, and copy there before deploying.

**Motion:** ambient gradient orbs, scroll-triggered section reveals, staggered grids, springy hovers on cards and CTAs, and a slide-in header — similar in spirit to polished dev portfolios (e.g. [Abdullah Iqbal’s site](https://abdullah-portfolio-dev.vercel.app/)) while keeping your terminal aesthetic.

**UX (inspired by command-palette portfolios e.g. [aadi.is-a.dev](https://aadi.is-a.dev/)):** **⌘K / Ctrl+K** command palette (sections, LinkedIn, GitHub, email, resume when set), **Stats** section with counts derived from your data, hero **Send mail** + optional **Get resume** (`site.resumeUrl` in `site.ts`), and **`#education`** for deep links from the palette.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & lint

```bash
npm run build
npm run lint
npm start
```

## Deploy on Vercel

1. **Git:** push this repo. If the portfolio lives inside a **monorepo**, create the Vercel project from the repo root and set **Root Directory** to `sameh-portfolio` (Settings → General).
2. **Import:** [New project](https://vercel.com/new) → select the repo. Framework **Next.js** is auto-detected; `vercel.json` pins **`npm ci`** for reproducible installs from `package-lock.json`.
3. **Node:** `package.json` declares **`engines.node >= 20.9`**; Vercel will use a compatible runtime (see also `.nvmrc`).
4. **Canonical URL (recommended):** add **`NEXT_PUBLIC_SITE_URL`** = your live URL (e.g. `https://your-name.vercel.app` or your custom domain). Prefer scoping this to **Production** only so Preview deployments keep correct per-preview URLs via **`VERCEL_URL`**.
5. **Contact form:** optional **`RESEND_API_KEY`** (plus **`RESEND_FROM`**, **`CONTACT_TO_EMAIL`** if needed). See `.env.example`. Without a key, submit still works via the mail-client fallback.
6. **Content:** **`site.github`** in `src/lib/site.ts` should be your profile URL (e.g. [github.com/samhbk](https://github.com/samhbk)). On GitHub: **Settings → Public profile → Website** can point to your deployed Vercel URL so the profile links back to this site.

`devIndicators` is disabled in `next.config.ts`. Response headers for basic hardening are set in the same file.

## Contact form

- **Production:** add **`RESEND_API_KEY`** in Vercel (see [Resend](https://resend.com)). Optional: **`RESEND_FROM`**, **`CONTACT_TO_EMAIL`**.
- **Local:** you can paste a key in **`src/lib/resendContactConfig.ts`** instead.
- If Resend isn’t configured, submit falls back to the visitor’s mail app with a draft.

After you verify a domain in Resend, set **`RESEND_FROM`** to an address on that domain.
