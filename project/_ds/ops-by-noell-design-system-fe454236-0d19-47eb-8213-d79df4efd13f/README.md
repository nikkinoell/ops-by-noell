# Ops by Noell — Design System

A family-run AI systems agency based in Mission Viejo, CA. Ops by Noell
builds, installs, and runs done-for-you AI operational systems for
service businesses (salons, med spas, dental, HVAC, coaches, consultants)
and B2B/SaaS companies. Live in 14 days. Managed end-to-end by James and
Nikki Noell.

This folder is the design system: tokens, typography, brand assets, voice
guidelines, and pixel-faithful UI kits for the marketing site and the
internal admin (CRM / Inbox) product.

## What's in this folder

```
├── README.md                — you are here
├── SKILL.md                 — agent skill manifest (for Claude Code)
├── colors_and_type.css      — CSS custom properties + semantic type classes
├── assets/
│   ├── logos/               — full lockups + favicon monogram
│   └── images/              — founder photo, OG card, etc
├── preview/                 — Design System tab cards (one per token group)
├── ui_kits/
│   ├── marketing-site/      — Ops by Noell .com recreations
│   ├── admin-inbox/         — Noell Ops CRM / Admin
│   └── noell-support-chat/  — the chat widget that lives on every page
└── slides/                  — (not used for this brand)
```

## Index of files to read next

| File | Purpose |
|---|---|
| `colors_and_type.css` | Single source of truth for all tokens. Import this. |
| `SKILL.md` | Agent-skill manifest. Cross-compatible with Claude Code. |
| `ui_kits/marketing-site/` | Homepage recreation (Navbar, Hero, sections, Footer) |
| `ui_kits/admin-inbox/` | `/admin` CRM recreation (top bar, filters, session list, conversation view) |
| `ui_kits/noell-support-chat/` | Floating chat widget in 5 states |
| `assets/logos/` | All logo lockups + favicon monogram |
| `assets/images/` | Founder photo + OG image |
| `preview/` | 23 Design System tab cards (Type · Colors · Spacing · Components · Brand) |

## Sources used to build this system

The system was reverse-engineered from a single source of truth:

- **GitHub:** [`Opsbynoell/opsbynoell-site-production`](https://github.com/Opsbynoell/opsbynoell-site-production) — Next.js + Tailwind 4 marketing site that also contains the `/admin/*` Noell Ops CRM. Tokens lifted from `src/app/globals.css`. Components recreated from `src/components/*.tsx` and `src/app/admin/*.tsx`.
- **Logo upload:** `uploads/Final Logo.png` — the wordmark on a cream background, supplied by the user.

If you have access to that repo, you should explore it further. Anything
not represented in this folder lives there: API routes, Supabase schema,
the booking flow, the eight or so product-vertical landing pages, etc.

---

## CONTENT FUNDAMENTALS

### Voice

Ops by Noell sounds like **a smart operator talking to another smart
operator.** Not a pitch. Not a press release. Not a SaaS marketing page.

It's the voice of someone who has actually run a service business and
already knows what the reader is going to object to. So the copy answers
the objection before it gets asked.

| Do | Don't |
|---|---|
| Direct, grounded, declarative | Hype, buzzwords, "revolutionary" |
| Specific dollar amounts and time windows | Vague claims like "more leads" |
| "We build it. We run it. You don't manage it." | "Empower your business with AI" |
| "If it's not a fit, we'll say so." | "Book a discovery call today!" |
| Plain numerals: "14 days", "5 minutes", "7 seconds" | Spelled-out numbers |

### Tone rules

1. **No em dashes. No double hyphens.** Use commas, periods, or restructure the sentence. This is a hard brand rule. The site avoids them everywhere.
2. **No emoji.** Anywhere. Not in product copy, not in dashboard UI, not in chat. A single green dot for "online" is allowed; it's not an emoji.
3. **No "founding member" or "cohort" language.** The brand never sounds new to the field. It's already operating.
4. **No buzzword strings.** "AI-powered" appears, but only paired with a concrete deliverable in the same sentence.
5. **Numerals beat words.** "14 days" not "fourteen days". "Every missed call" not "all missed calls".
6. **Sentence-case headlines.** Serif display type, semibold, sentence case. Only proper nouns (Noell, Ops by Noell, James, Nikki, Mission Viejo) are capitalized mid-sentence.
7. **"You" not "your business".** Speak to the operator, not the org chart. "You built this to work with clients. Not to chase them."
8. **Italics are an editorial accent, not emphasis.** The signature treatment is *one short italic phrase at the end of a serif headline*, rendered in the wine gradient. See examples below.

### Casing

- **Headlines:** Sentence case. "The operations layer your business is missing."
- **Eyebrows (11px uppercase tracking 0.25em):** Title Case or sentence case both occur. Wine color, sits above every serif headline as a section opener.
- **Buttons:** Title Case. "Get Your Free Revenue Signal Report"
- **Product names:** Title Case, always. "Noell Support", "Noell Front Desk", "Noell Care", "Predictive Customer Intelligence", "Noell Pipeline", "Noell Account", "Noell Inbound", "Digital Readiness Review", "Revenue Signal Report".
- **System status labels:** UPPERCASE in monospace, tracked-out. "TODAY", "TRIGGERED", "BOOKED".

### I vs you vs we

- **"We"** is the Noells and the team. "We build, install, and manage."
- **"You"** is the reader/operator. Direct address. Never "your team", "your organization", "your stakeholders".
- **"I"** essentially does not appear in marketing copy. Even the founder quote is "You built this to work with clients" — about the reader, not the founder.
- **"They"** is used carefully and only when concrete: "By the time you call back, they've already booked somewhere else."

### Signature phrases (copy as voice anchors)

These actual product strings show the brand's exact tone. Match this register:

> "The operations layer your business is *missing.*"
> "Two types of business. *One operational standard.*"
> "You built this to work with clients. *Not to chase them.*"
> "By the time you call back, they've already booked *somewhere else.*"
> "Done for you. Live in 14 days. Managed end-to-end."
> "Catch missed calls, follow up instantly, and keep your calendar full."
> "Every missed call, unanswered inquiry, and unprepared B2B buyer is revenue that left quietly."
> "No pitch. No pressure. If it's not a fit, we'll say so."
> "Real questions from business owners and operators before they book their first working session."
> "Quiet operations for service businesses and B2B teams."

### Trust line (always closes a CTA block)

The "trust line" is a single small italicized or muted sentence directly
under the CTA buttons that defuses sales pressure. Always include it.
Examples used in the codebase:

> *No pitch. No pressure. If it's not a fit, we'll say so.*
> *Service businesses and B2B companies. Two tracks. One standard.*
> *Built for service businesses and B2B teams that cannot afford to lose a lead.*

### What the brand never says

- "Cohort", "founding member", "early access", "waitlist"
- "Revolutionary", "game-changing", "next-gen", "cutting-edge"
- "Synergy", "leverage", "unlock", "supercharge"
- "Click here", "learn more" without context
- Any emoji 🚀✨💡
- Anything with an em dash —

---

## VISUAL FOUNDATIONS

### The aesthetic in one sentence

A premium **dark editorial** look. Wine on near-black plum, with cream
serif headlines that italicize into a wine gradient. It reads like an
operator's notebook, not a SaaS dashboard.

### Color

Wine is primary. **There is no blood orange in this brand.** The brief
described the primary color as "blood orange" but the live codebase, the
logo, and every visual surface use **wine `#8B2A42`** — a deep burgundy.
The system follows the codebase. (Flagged in caveats below.)

| Token | Value | Role |
|---|---|---|
| `--color-bg-base` | `#1F1219` | page background (always) |
| `--color-bg-surface` | `#271520` | cards, secondary panels |
| `--color-bg-raised` | `#301A26` | raised cards, popovers, inputs |
| `--color-wine` | `#8B2A42` | primary brand |
| `--color-wine-dark` | `#6B1A2E` | gradient end |
| `--color-wine-light` | `#B5415E` | brighter accents, hover, focus rings |
| `--color-fg` | `#F5EAE0` | cream, primary text on dark |
| `--color-noell-violet` | `#7C5CFC` | **reserved** — Noell Support page + chat widget only |
| `--color-lilac` | `#C4A8D4` | Noell Support secondary surfaces |

Opacity scale on cream foreground is the workhorse for hierarchy:
`cream/100` → headlines, `cream/85` → strong body, `cream/70` → standard
body, `cream/55` → tertiary, `cream/40` → eyebrow secondary. Avoid pure
white.

### Type

Two families. Three registers.

- **Display + headings:** Playfair Display, weight 600 semibold, with italic at 400/500 for the signature accent. Sentence case. Tight tracking. Hero is `~60–72px` desktop / `~36–40px` mobile.
- **Body + UI:** Inter, weight 400/500. `16–18px` reading size. Line-height `1.5–1.65`.
- **System status:** Courier New monospace at `10–11px`, uppercase, tracked `0.25em`. Used for timestamps, status badges, "TODAY", "TRIGGERED", "BOOKED". This is the AIM-era nostalgia layer.

> **Note on the logo script.** The "by Noell" lettering inside the logo lockup is **baked into the logo PNG**, not a live web font. The production site doesn't load any script font. Don't try to typeset "by Noell" — always drop in the logo image instead.

### The signature italic-accent treatment

The brand's most recognizable type move: a serif headline in cream
ending in an italic phrase whose `color: transparent; background-clip: text`
is filled with a top-to-bottom wine gradient `#8B4D5E → #6B2D3E`. Used
once per section, never twice in a row. See `.os-accent` in
`colors_and_type.css`.

### Backgrounds

- **Page bg is always `#1F1219`.** No gradients on the base canvas.
- **Hero gets a vertical wine gradient** rising 50% up the section: `linear-gradient(to top, rgba(139,42,66,0.5), rgba(31,18,25,0.9) 50%, rgba(31,18,25,1))`. Overlay opacity sits around 65–90% depending on section depth.
- **CTA blocks get a diagonal wine gradient** at `135deg`: `from-wine via-wine-light to-wine-dark`. Rounded to `32px`.
- **Behind hero illustrations:** concentric circle rings + a soft radial cream-tinted halo that breathes (scale 1 → 1.02 → 1, 2–2.5s loop). This is the brand's "signal" motif.
- **Section dividers:** thin `1px` cream-at-10%-opacity rules. No solid borders between sections; let the background continue.
- **No textures, no noise, no hand-drawn illustrations, no patterns.** Clean. The decoration is the gradient + the motion.

### Animation

Animation is present on every page and feels like signal returning. Specifics:

- **Entry on scroll:** elements fade-in + translate-up `40px`, duration `600ms`, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Trigger `whileInView` with `viewport={{ once: true }}`. Stagger children by `~150ms`.
- **Hero word reveal:** opacity `0 → 1`, no y-shift on the headline (calmer feel); body copy below shifts up `8px` with `400ms` duration. Eyebrow delays `100ms`, headline `200ms`, body `500ms`, footnote `600ms`, buttons `700ms`.
- **Ambient hero rings:** breathing scale + small y drift on infinite loop, `2–2.5s`, `easeInOut`.
- **Hover on links:** color cream→cream (lift opacity), background fades from transparent to `bg-wine/10`, never a translate.
- **Hover on buttons:** `translate-y: -2px`, no scale, transition `200ms`. Primary button does NOT lighten on hover; only the lift.
- **Hover on cards/links-as-cards:** border `white/10 → wine/40`, shadow steps up by adding a wine-glow layer. The accent arrow grows its gap by `4px`.
- **Press states:** no shrink. The button just settles back from the hover lift.
- **Reduced motion:** all animations collapse to `0.001ms` via `prefers-reduced-motion`. Builders should respect this.

### Buttons (signature)

- **Primary** (the wine button): vertical gradient `#8B4D5E → #5A1F30`, white text. The signature shadow is multi-layer: outer warm-shadow + colored `1px` border + a top inner highlight `inset 0 1px 1px 2px rgba(255,255,255,0.28)` + a bottom inner glow `inset 0 -1px 5px 2px rgba(255,255,255,0.20)`. This is what gives it that "lit pill" feel. Radius `8px`, height `48px`, horizontal padding `28px`.
- **Secondary**: surface `#271520` background, `1px` cream-at-10%-opacity border, cream text. Same `8px` radius. Used when the primary is also on screen.
- **Lilac (Support track only):** vertical gradient `#C4B5CE → #8B6F9C`. Same shadow recipe as primary.

### Cards

- Radius `22px` (not 16, not 24 — exactly 22).
- Background `#271520` or `gradient-founder-card` (`#301A26 → #271520 → #301A26`).
- Border `1px` cream-at-10%-opacity.
- Shadow: `0 4px 8px rgba(28,25,23,0.05)` + `0 15px 15px rgba(28,25,23,0.04)`. Subtle, warm.
- Padding `32px / 40px` (`p-8` / `p-10`).
- On hover, border shifts to `wine/40` and shadow gains a wine glow `rgba(106,44,62,0.22)`.

### Inputs / forms

- Background `#301A26`, border `1px` cream-at-10%-opacity, radius `10px`, height `40px`, padding `0 14px`.
- On focus: background `#271520`, border lilac-dark-at-60%-opacity, no outline ring (the border change is the focus signal).
- Placeholder: cream at 70% opacity. Always sentence-case, never ALL CAPS placeholders.

### Borders, dividers, shadows

- Borders are almost always `1px solid rgba(245, 234, 224, 0.10)`. Stronger borders are `0.18`. Avoid solid lines.
- Shadows are warm-black tinted, layered. See `--shadow-card`, `--shadow-raised`, `--shadow-panel` in CSS.
- Wine glow `rgba(106, 44, 62, 0.22)` is the brand's hover/active shadow.
- **No inner shadows on cards.** Inner highlight is reserved for the primary button.

### Corner radii system

| Token | Value | Used for |
|---|---|---|
| `--radius-xs` | `4px` | tags, status pills' inner pieces |
| `--radius-sm` | `8px` | buttons |
| `--radius-md` | `10px` | inputs |
| `--radius-lg` | `16px` | small cards |
| `--radius-xl` | `22px` | the main card radius |
| `--radius-2xl` | `24px` | the chat widget panel |
| `--radius-3xl` | `32px` | CTA blocks, hero containers |
| `--radius-pill` | `9999px` | nav, tags, status capsules |

### Layout rules

- **Max content width:** `1280px` (`max-w-7xl`). Narrow sections clamp to `~960px` (`max-w-5xl`) for reading.
- **Section vertical rhythm:** `64–96px` top/bottom (`py-16 md:py-24`). CTA blocks add `40px` on top of that.
- **Side gutter:** `16px` mobile, `32px` desktop.
- **Hero internals:** centered, max `1120px` wide, content sits in a rounded `32px` container with the wine gradient.
- **Navbar:** fixed top, `8px` offset from top, pill shape, width animates `88% → 70%` as you scroll past `100px`. Background is wine-tinted dark with backdrop blur.
- **Footer:** dark raised card with rounded corners, sits in a wide `7xl` max container with a `40px` bottom margin.

### Transparency & blur

Used purposefully:

- **Navbar:** `backdrop-filter: blur(8px–12px)` on a `rgba(31, 18, 25, 0.88–0.97)` background. Increases blur amount as you scroll.
- **Mobile nav popover:** `blur(16px)` on `rgba(31, 18, 25, 0.95)`.
- **Hero center halo:** radial cream-at-1.0 → cream-at-0 gradient over a translucent white-bordered circle. Reads as soft light bloom.
- **Avatars in chat header:** `bg-charcoal/20 backdrop-blur-sm` with white-at-20% border.

### Imagery & photography

- The codebase ships exactly one photo (the founder shot of James & Nikki Noell + family in front of a wood-paneled wall). Warm temperature. Soft natural light. No grading, no grain.
- Logo treatment is on a **cream `#F5EAE0` background** with wine type — never a transparent or pure-white background.
- The OG card is a 1200×630 deep-plum grid with the wordmark in cream.
- No stock photography. No b&w treatments. No filters. If you need imagery beyond the founder shot, leave a placeholder card and ask.

### Iconography

See ICONOGRAPHY below.

---

## ICONOGRAPHY

The Ops by Noell production site uses **`@tabler/icons-react`** (Tabler
Icons) as its icon system. Stroke style, `1.5px` weight, square caps,
rounded joins. Specific icons currently used on the live site:

- `IconMessageCircle`, `IconSend`, `IconX` (chat widget)
- `IconMenu2`, `IconChevronDown` (navbar)
- Various default Tabler glyphs for system features

**For HTML/static mocks in this design system**, load Tabler Icons from
the official CDN — it's the closest faithful match without bundling the
React package:

```html
<!-- Tabler outline set, v3.x — matches @tabler/icons-react -->
<script src="https://unpkg.com/@tabler/icons@latest/icons-react/dist/umd/tabler-icons-react.min.js"></script>
<!-- Or use the web-font version for simple HTML: -->
<link rel="stylesheet" href="https://unpkg.com/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">
```

Usage rules:

- **Stroke weight `1.5px`.** Tabler default. Do not switch to filled or use a different stroke weight.
- **Size:** typically `13–22px`, paired with the surrounding type size.
- **Color:** inherits `currentColor`. In navbar dropdowns the icon takes on the cream-at-80% then transitions to wine on hover.
- **No emoji.** Anywhere. Period.
- **Unicode arrows are acceptable** as inline glyphs in body text: `→` after CTAs, `&rarr;` after secondary links.
- **Status dots are CSS, not icons.** A `1.5–2px` rounded square pseudo-element with `box-shadow` glow. Green for online, wine for active, amber for warm.
- **The `O` monogram** is a brand mark, not an icon. Use it as a favicon and as a chat avatar; do not invent variants.

**SVGs in the repo:** the only static SVGs the production site ships are Next.js scaffold defaults (`next.svg`, `vercel.svg`, etc) which are *not* brand assets and should be ignored. The PNG logo lockups in `assets/logos/` are the brand.

**If you need an icon Tabler doesn't have**, pause and ask. Don't substitute Lucide, Heroicons, or hand-rolled SVGs without flagging it.

---

## Caveats and known substitutions

- **Wine vs blood orange:** the brief described the primary color as "blood orange". The codebase, logo, and every visual surface use wine `#8B2A42`. This system follows the source of truth. If blood orange is genuinely intended for some new surface, please clarify.
- **Fonts:** Playfair Display + Inter are bundled as woff2 files in `fonts/` and declared via `@font-face` in `colors_and_type.css`. No script font — the "by Noell" lettering inside the logo is part of the PNG, not a live typeface.
- **Icons:** Tabler Icons matches the production set exactly.
- **No slide template** was provided, so `slides/` is intentionally empty.
- **CRM/dashboard product:** only the `/admin/*` pages exist as code. There is no Figma or external dashboard source. The `admin-inbox` UI kit is built from the actual Next.js page components.
- **AI agent interfaces** (Noell Front Desk, Noell Care, Noell PCI, Noell GTM, Noell DPA): only Noell Support has a fleshed-out chat widget in the codebase. The other agents are described in marketing pages but don't yet have their own UI. The `noell-support-chat` UI kit recreates the one that exists.

---
*Built from `Opsbynoell/opsbynoell-site-production` @ main. Last refreshed when this folder was generated.*
