# Blue Best × Quilt Landing — Progress

**Branch:** `feature/quilt-landing` (cut from `main`, in `bblanding-root/bblanding`)
**Last updated:** 2026-07-13
**Status:** Built, build-verified (green), real Quilt images wired in. NOT visually QA'd. NOT committed. NOT deployed.

## Goal
New `/quilt` co-marketing landing (Blue Best × Quilt ductless heat-pump comfort).
Deliberately NOT the Elfsight embed used on other bblanding routes — uses a native
two-step form + a Vercel serverless function that forwards the lead to a Zapier webhook.

Source design = `bblanding-root/temp screenshot/bluebest-quilt-landing-2026-07-10-standalone.html`.

## Done this session
- `api/lead.ts` — Vercel Node serverless fn. Webhook-only (adapted from bb-full
  `app/api/lead-form/route.ts`, HVACAdmin/ServiceTitan stripped). Posts to env
  `ZAPIER_LEAD_WEBHOOK_URL`. Field validation, honeypot (`company`), 405/400/502/500.
- `vercel.json` — SPA catch-all changed to `/((?!api/).*)` so it doesn't swallow `/api`.
- `src/components/quilt/QuiltForm.tsx` — two-step form. Step 1 = First/Last/Email/Phone;
  step 2 = date (`<input type=date>`) + time-window `<select>`. Submit → POST `/api/lead`
  → navigate `/thank-you?source=quilt`. Progress bar, honeypot, loading/error states.
  Styled with bblanding tokens (font-heading Kanit, font-body Lato, blue-primary/orange-primary).
- `src/pages/QuiltLandingPage.tsx` — full page, ~11 sections reskinned (hero+form,
  urgency band, assessment value, Meet Quilt, Why Quilt (6 cards), gallery, stats band,
  mid CTA, trust, reviews (4), process (3 steps), final CTA + contact). CTAs smooth-scroll
  to `#assessment-form`. lucide icons. Copy pulled verbatim from the source HTML.
- `src/App.tsx` — added `/quilt` route + import; added `'quilt'` to fbq source map.
- `package.json` — added `@vercel/node` devDep (for fn types).

## Changed files (all uncommitted)
package.json, package-lock.json, vercel.json, src/App.tsx,
src/pages/QuiltLandingPage.tsx, src/components/quilt/QuiltForm.tsx, api/lead.ts,
public/images/quilt/* (new)

## Done this session (2026-07-13, images)
- Extracted all 23 embedded (base64) images + 1 background image from the source
  standalone HTML into `public/images/quilt/img-NN.*` / `bg-00.webp`, matched each
  to its original placement by parsing surrounding HTML context (not just alt text —
  a couple of alts in the source HTML were mislabeled vs. actual image content,
  e.g. img-13 alt says "office" but is the same photo as img-02, indoor unit on wall).
  User confirmed permission to reuse Quilt-site images.
- Wired real photos into: hero (background photo under gradient + room-temp SVG
  illustration), Meet Quilt (4 cards), Why Quilt (6 cards), Gallery (4 real photos,
  replacing placeholder tiles), Trust section (team photo + Best of State/Lennox/BBB/
  Licensed badge row).
- Build verified green after change (`npm run build`).

## Done this session (2026-07-13, layout/polish)
- Meet Quilt + Why Quilt cards: dropped the lucide icon badges, images now taller
  (h-64 / h-72) so the photo carries the card.
- Trust section replaced with the shared `FeaturesSection` component (same one used
  on the main bblanding pages for "Why Salt Lake City Trusts BlueBest" — real Best-
  of-State/medal/Google/Lennox/license logos + team photo), wrapped in the same
  `bg-[url('/images/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat`
  div the main landing pages use (that component renders white text with no bg of
  its own). Old custom TRUST/BADGES arrays + ShieldCheck render removed.
- Assessment section image (`img-01.svg`) no longer duplicated in hero — hero itself
  now only has badge row, no illustration.
- Hero top padding bumped `pt-[120px]/pt-[110px]` → `pt-[150px]/pt-[140px]` — content
  was sitting too close under the fixed navbar.
- `QuiltForm.tsx`: first/last/email/phone already gate step-1→2 progression (JS
  validation in `validateStep1`, not just HTML `required`) — confirmed required.
- Phone field: focusing an empty field now pre-fills `+1 `; added `toE164()` helper
  that normalizes whatever the user typed (10-digit, 11-digit-with-leading-1, or
  already-`+`-prefixed) to E.164 before it's sent in the `/api/lead` POST body, so
  the Zapier payload's `phone` always carries `+1`.
- Build + tsc verified green after every change above.

## Done this session (2026-07-13, address fields)
- Step 1 of `QuiltForm.tsx` gained 4 fields: street, city, state, ZIP — all required
  (`validateStep1`), ZIP checked against `/^\d{5}(-\d{4})?$/`. Street uses the same
  icon-input style as name/email/phone; city/state/zip are plain inputs (state+zip
  in a 2-col row).
- `api/lead.ts` updated to require + forward `street`, `city`, `state`, `zip`, plus a
  derived `address` string (`"street, city, state zip"`) in the Zapier payload.
- Build + tsc verified green.

## Done this session (2026-07-13, inline thank-you, no navigation)
- Investigated site-wide tracking: Meta Pixel "Lead" event (App.tsx `useFacebookPageView`)
  and the Google Ads conversion event (ThankYouPage1.tsx Helmet script,
  `AW-396446063/7BpGCMTNsd8aEO-Shb0B`) are BOTH wired only to landing on the shared
  `/thank-you` route — no other trigger exists anywhere in the app. Also found the
  generic `/thank-you` overlay isn't Quilt-aware at all (reads `form_id`, but Quilt
  used to pass `?source=quilt`, so it always fell into the generic "HVAC, plumbing,
  or generator needs" background/copy).
- Per user request, `QuiltForm.tsx` no longer navigates to `/thank-you` on success —
  it now swaps its own card body for an inline "You're Booked, {firstName}!" message
  (confirms preferred date/time, shows the phone number), staying on `/quilt`.
- To avoid silently losing conversion tracking for Quilt leads, both pixels are now
  fired directly in `handleSubmit`'s success branch instead of relying on the route
  change: `window.fbq('track','Lead', {content_name:'Quilt Partnership Lead', source:
  'quilt', value:1.00, currency:'USD'})` and `window.gtag('event','conversion',
  {send_to:'AW-396446063/7BpGCMTNsd8aEO-Shb0B'})` — same event names/IDs the shared
  thank-you page uses, so ad-platform attribution is unaffected.
- Added `gtag?: (...args: unknown[]) => void` to `src/types/facebook-pixel.d.ts`'s
  `Window` interface (only `fbq` was typed there before).
- Build + tsc verified green.

## Done this session (2026-07-13, hero urgency line + trust bar swap)
- Read the source standalone HTML's hero markup directly (`.hero` header block, `.herourgency`
  paragraph, `.trustbar` div) to get exact original layout/copy, since prior asks about
  "trust badge just below hero" / "same badge line as example HTML" were ambiguous from
  memory alone.
- Matched original structure: `.herourgency` ("Now booking summer installs. Only a few
  free assessments open each week.") sits *inside* the hero, right under the CTA row —
  moved this text there in `QuiltLandingPage.tsx`, replacing the old separate full-width
  orange "URGENCY BAND" div that used to sit after the hero closed.
- The old inline Stars/Best-of-State/Lennox badge row (previously inside the hero, under
  the CTA) is now the full-width strip below the hero instead, matching the source's
  `.trustbar` div content/order: Women-Owned & Operated | Best of State Winner |
  ⭐ 5.0 · 2,700+ Reviews | Lennox Premier Dealer. Added "Women-Owned & Operated" (real
  brand copy, confirmed present as plain text — no image asset — in `Hero.tsx`/
  `HeroPlumbing.tsx`/`NewsletterHero.tsx`), resolving the earlier separate request to add
  it to a trust badge.
- tsc + build verified green.

## Done this session (2026-07-13, Zapier webhook test)
- User provided real Zapier catch-hook URL (`https://hooks.zapier.com/hooks/catch/11013763/4ueiy9k/`),
  scoped only to `ZAPIER_LEAD_WEBHOOK_URL` (grepped repo — this env var isn't referenced
  anywhere except `api/lead.ts`, so it can't leak into any other form on the site).
- Set it in a local, gitignored `.env` and invoked `api/lead.ts`'s exported handler
  directly with a mock req/res + full sample payload (all 4 new address fields included)
  via `tsx` (no Vercel CLI/login needed) — got back `{success:true, leadId:...}`, HTTP 200,
  confirming the POST reaches Zapier's catch hook correctly.
- **Still needed:** add the same `ZAPIER_LEAD_WEBHOOK_URL` value to Vercel's project env
  vars (Production + Preview) — the local `.env` only worked for this local test, it has
  no effect on the deployed site.

## Done this session (2026-07-13, api/lead.ts hardening)
- Added server-side field validation to `api/lead.ts` (previously only checked
  truthiness, and only the client validated format — bypassable via direct API call):
  email regex, E.164-shaped phone regex, ZIP regex, length caps on every string field
  (firstName/lastName 60, email 254, phone 20, street 200, city 100, state 50, zip 10,
  preferredDate 20, preferredTime 60), and `sourcePageTitle`/`sourcePageUrl` truncated
  to 200/500 chars before being forwarded to Zapier. Invalid payload now returns a
  generic 400 `{success:false, message:'Invalid or missing fields'}` — no internal
  detail leaked.
- Added an origin check (`isAllowedOrigin`): compares the request's `Origin` header
  host against `Host`/`x-forwarded-host`. Real browser fetch POSTs always send `Origin`
  (including same-origin, per fetch spec) so this only lets same-origin submissions
  through; any other origin (or missing `Origin`, e.g. raw curl/script) gets 403
  `{success:false, message:'Forbidden'}` before any parsing/forwarding happens. No
  hardcoded domain needed — self-referential check, works across preview + prod
  deployments automatically.
  - Note: this stops browser-JS cross-site abuse and casual scripted spam, but a
    determined attacker scripting raw HTTP server-side can still spoof the `Origin`
    header — real defense-in-depth against that class of abuse would be Vercel BotID
    or a rate-limiter (Upstash Ratelimit), not yet added, flagged to user as next step.
- Re-ran the mock req/res test harness (tsx, no Vercel CLI) against the live Zapier
  webhook for 4 cases: valid same-origin request (200, reached Zapier), cross-origin
  request (403, never reached Zapier), no-Origin request (403), same-origin but
  malformed email (400). All behaved as expected.
- Confirmed client (`QuiltForm.tsx` `handleSubmit`) already never surfaces server
  internals to the user: bare `catch {}`, server response body is never read (only
  `res.ok` is checked), and the one fixed error string shown on any failure is
  "Something went wrong. Please try again or call us directly." — no console logging,
  no error-screen crash, stays inline in the form card. No changes needed there.
- tsc + build verified green after the `api/lead.ts` changes.

## TODO before go-live
1. Set `ZAPIER_LEAD_WEBHOOK_URL` in Vercel's dashboard env vars (value confirmed working
   locally, see above — just needs to be added to the actual Vercel project).
2. Confirm the payload shape the Zap expects (current keys: firstName, lastName, name,
   email, phone (now `+1XXXXXXXXXX`), preferredDate, preferredTime, sourcePageUrl/Title,
   timestamp, metadata).
3. Confirm Quilt partner tier + warranty wording; confirm campaign phone line (using
   (385) 200-2604 from live pages).
4. Visual QA in browser (`npm run dev` → `/quilt`) or run the visual-qa agent.
5. Commit + open PR.

## Gotchas
- **cwd drifts between Bash calls in this container.** A `git checkout -b` and an
  `npm install` accidentally ran in `bb-full` last session (polluted it, since restored
  to clean `master`). ALWAYS pin `git -C /workspace/bblanding-root/bblanding` and use
  absolute paths.
- Env drops rollup's arm64 native binary on npm install → `vite build` fails
  "Cannot find module @rollup/rollup-linux-arm64-gnu"; fix with
  `npm i @rollup/rollup-linux-arm64-gnu --no-save`. Vercel's own build is unaffected.

## Resume
Verify branch: `git -C /workspace/bblanding-root/bblanding rev-parse --abbrev-ref HEAD`
Build: `cd /workspace/bblanding-root/bblanding && npm run build`
