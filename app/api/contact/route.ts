import { NextResponse } from "next/server";
import { Resend } from "resend";

// Required in production. Get one at https://resend.com/api-keys
const resendApiKey = process.env.RESEND_API_KEY;

// Where leads land. Set this to a real SRP inbox in your env vars.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

// Resend requires the "from" address to be on a domain you've verified
// with them. Until you verify spacerightprojects.com (or similar) in the
// Resend dashboard, onboarding@resend.dev works for testing — but it can
// only deliver to the email address on your Resend account.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const SERVICE_OPTIONS = new Set([
  "Interior Fit-out",
  "Commercial Space",
  "Retail Store",
  "Dark Store",
  "MEP Solutions",
  "Luxury Residential",
  "Other",
]);

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!resendApiKey || !TO_EMAIL) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars."
    );
    return NextResponse.json(
      { error: "Form is not configured yet. Please contact us by phone or email directly." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Honeypot field — real users never fill this in; bots often do.
  const website = String(body.website ?? "").trim();
  if (website) {
    // Silently pretend success so the bot doesn't learn anything.
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  if (!phone || phone.length > 30) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!SERVICE_OPTIONS.has(service)) {
    return NextResponse.json({ error: "Please select a valid service." }, { status: 400 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: `SRP Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${service} — ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Message:",
        message || "(no message provided)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your enquiry.", details: error },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Could not send your enquiry. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
