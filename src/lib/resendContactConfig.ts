/**
 * Contact form — in-repo defaults. On Vercel, prefer env: `RESEND_API_KEY`, optional
 * `RESEND_FROM`, `CONTACT_TO_EMAIL` (they override these values at runtime).
 * Paste your Resend API key below for local/dev without .env. If the repo is public, rotate keys.
 */
export const RESEND_API_KEY = "";

/** From address (Resend onboarding domain until you verify your own). */
export const RESEND_FROM = "Portfolio <onboarding@resend.dev>";

/** Set to override recipient; otherwise `site.email` in the API route is used. */
export const CONTACT_TO_EMAIL: string | null = null;
