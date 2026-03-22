import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";
import {
  CONTACT_TO_EMAIL,
  RESEND_API_KEY,
  RESEND_FROM,
} from "@/lib/resendContactConfig";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const MAX_MESSAGE = 8000;

export async function POST(req: NextRequest) {
  const key = (process.env.RESEND_API_KEY ?? RESEND_API_KEY).trim();
  const resend = key ? new Resend(key) : null;

  if (!resend) {
    return NextResponse.json(
      { ok: false, error: "Email not configured", configured: false },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > 32_000) {
      return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }
    body = JSON.parse(raw) as unknown;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ ok: false, error: "Message is required" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { ok: false, error: `Message must be at most ${MAX_MESSAGE} characters` },
      { status: 400 },
    );
  }
  if (
    typeof email !== "string" ||
    !email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  const nameStr =
    typeof name === "string" && name.trim() ? name.trim().slice(0, 120) : "Visitor";
  const to = (
    process.env.CONTACT_TO_EMAIL?.trim() ||
    CONTACT_TO_EMAIL?.trim() ||
    site.email
  ).trim();
  const from = (process.env.RESEND_FROM?.trim() || RESEND_FROM).trim();
  const msg = message.trim();
  const visitorEmail = email.trim();

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: visitorEmail,
    subject: `Portfolio contact from ${nameStr}`,
    text: `${msg}\n\n— ${nameStr}\n${visitorEmail}`,
    html: `<p>${escapeHtml(msg).replace(/\n/g, "<br/>")}</p><p>— ${escapeHtml(nameStr)}<br/><a href="mailto:${escapeHtml(visitorEmail)}">${escapeHtml(visitorEmail)}</a></p>`,
  });

  if (error) {
    console.error("[api/contact]", error);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
