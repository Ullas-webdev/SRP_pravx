# Space Right Projects (SRP)

Production-ready marketing site for SRP — a premium infrastructure and
turnkey interior company. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, Framer Motion and GSAP (ScrollTrigger).

## Stack

- **Next.js 14** — App Router, React Server Components where possible
- **TypeScript**
- **Tailwind CSS** — custom design tokens (Matte Black / Pearl White / Warm
  Beige / Dark Charcoal + Metallic Gold / Copper / Soft Orange)
- **Framer Motion** — page-load choreography, hover and in-view reveals
- **GSAP + ScrollTrigger** — the pinned "Blueprint → Built" scroll sequence

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

Push this repository to GitHub and import it in Vercel — no configuration
needed, it will detect Next.js automatically. Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Section composition
  globals.css        Design tokens / utility classes
components/
  Nav.tsx            Sticky nav + mobile menu
  Hero.tsx            Cinematic hero, crossfading scene backgrounds
  ScrollJourney.tsx  Signature pinned scroll sequence (GSAP ScrollTrigger)
  Services.tsx        8-discipline glass card grid
  Projects.tsx        Horizontal-scroll project showcase
  Stats.tsx           Animated statistics
  Clients.tsx         Infinite logo/wordmark marquee
  Contact.tsx         Consultation form, map, contact channels
  Footer.tsx          Site footer
```

## Contact form setup (Resend)

The form at `components/Contact.tsx` posts to `app/api/contact/route.ts`,
which emails the lead via [Resend](https://resend.com).

1. Create a free Resend account and generate an API key at
   https://resend.com/api-keys.
2. Copy `.env.local.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — your key from step 1
   - `CONTACT_TO_EMAIL` — the inbox that should receive leads
3. For local testing you can leave `CONTACT_FROM_EMAIL` unset — it falls
   back to `onboarding@resend.dev`, which only delivers to the email
   address on your own Resend account. To send to a real SRP inbox in
   production, verify a domain (e.g. `spacerightprojects.com`) under
   https://resend.com/domains and set `CONTACT_FROM_EMAIL` to an address on
   it, e.g. `enquiries@spacerightprojects.com`.
4. On Vercel, add the same three variables under Project Settings →
   Environment Variables before deploying.

The route validates all fields server-side, rejects invalid emails, and has
a hidden honeypot field (`website`) to quietly drop basic bot submissions.

## Notes

- No stock photography is used anywhere on the site, per the brief. Visual
  texture comes from custom SVG line-art, gradients and typography instead.
- Replace the placeholder phone number, email and WhatsApp link in
  `components/Contact.tsx` with SRP's real contact details.
- `prefers-reduced-motion` is respected globally in `globals.css`.
