# Rishabh S. Khandka — Portfolio

Premium, dark-mode, cinematic portfolio built with Next.js 14, TypeScript,
Tailwind CSS, Framer Motion, GSAP-ready structure, Lenis smooth scroll, and
React Three Fiber.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

This is Vercel-ready out of the box:

```bash
npm install -g vercel
vercel
```

Or connect the repo directly at vercel.com/new.

## One thing to add before you deploy

- **`public/resume.pdf`** — the site links to `/resume.pdf` in the Hero and
  Contact sections (Download Resume buttons). Drop your resume PDF into
  `public/` with that exact filename and the buttons will work immediately.
  Until then, those buttons will 404.

## Content map — where everything lives

All text content (achievements, certifications, experience, skills, bio) is
centralized in **`src/lib/data.ts`**. To update anything on the site —
add a new award, edit a certification description, change your bio — edit
that one file. You do not need to touch component code for content changes.

- **Hero portrait / About image / Achievement photos** → `public/images/`
- **Certificate images** → `public/certs/`
- All images have already been color-graded, sharpened, and compressed to
  WebP for performance.

## Sections included

1. Hero — cinematic intro, typewriter role animation, 3D "Argument Web"
   background (React Three Fiber), mouse-reactive spotlight, magnetic CTAs
2. Nav — glassmorphism floating navbar, hides on scroll down, animated
   active-section underline
3. About — storytelling bio, animated counters, 5 identity pillars
4. Experience — animated vertical timeline (Head Boy, Debating Society,
   Quiz Club, CodeDay volunteering)
5. Certifications — 3D-tilt glowing cards for all 8 certifications
6. Achievements — image gallery of all 8 competition results/awards
7. Skills — animated skill bars + floating tech cloud
8. Blog — featured article layout + newsletter signup (front-end only —
   wire up a real email service like Resend or ConvertKit if you want it live)
9. Ask Rishabh AI — floating chatbot, answers questions about achievements,
   certifications, skills, experience, and contact info by matching your
   question against the content in `src/lib/data.ts`. This runs entirely
   client-side (no API key needed) — if you want a real LLM-backed version
   later, swap `buildAnswer()` in `src/components/AIChat.tsx` for an API call.
10. Contact — animated form (opens the visitor's email client via `mailto:`),
    social links, resume download
11. Footer — social icons, back-to-top

## Notes on the contact form & newsletter

Both are front-end only right now (no backend configured):

- **Contact form** opens a pre-filled `mailto:` link to
  rishabhkhandka@gmail.com. To make it submit silently instead, wire it to
  a service like Formspree, Resend, or a simple API route.
- **Newsletter signup** just shows a success state locally. Connect it to
  an email provider (Mailchimp, ConvertKit, Resend Audiences) to make it
  functional.

## Performance & accessibility

- All images are WebP, resized, and lazy-loaded via `next/image`
- Reduced-motion is respected site-wide (animations, smooth scroll, and the
  loading screen all check `prefers-reduced-motion`)
- Visible keyboard focus states on every interactive element
- Semantic heading structure and alt text throughout
