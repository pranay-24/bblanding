# /membership Landing Page — Build Plan

New landing page in bblanding (Vite + React Router) built from the reference HTML at
`/workspace/bblanding-root/temp/bluebest-membership-landing/index.html`.
Read the reference `README.md` and `reference/copy-and-client-notes.md` before building.
The reference screenshots (`reference/screenshots/`) are the intended visual result,
adjusted for the brand decisions below.

**Planned:** 2026-09-07. Decisions confirmed with user in planning session.

---

## Locked decisions

| Decision | Value |
|---|---|
| Route | `/membership` |
| Success state | Inline success card (Quilt pattern), no route change |
| Phone | Display **801-801-BEST**, link `tel:+18018012378` |
| Chrome | **Page-specific** nav + footer + sticky mobile CTA (like reference). Hide global Navbar/Footer on this route — note: Quilt does NOT do this today; App.tsx wraps all routes, so add a location check in App.tsx |
| Fonts/colors | bblanding brand: Kanit headings, Lato body, `blue-primary #0071BC`, `blue-primary-dark #003572`, orange CTA. Keep ONLY the 3 tier colors from client graphics |
| Icons | Replace all 13 cut-out PNG benefit icons with **Lucide**. Keep as images: 3 membership seals, 7 year shields, award badges, photos, logo |
| Form backend | New endpoint + **separate env var** `ZAPIER_MEMBERSHIP_WEBHOOK_URL` |

**Tier colors (from client plan graphics — do not change):**
- Safety: `#12386f`
- 360 Home Comfort: `#1a63c4`
- Signature: `#96161c`
- Savings green: `#2f7d32` (dark `#1f6323`)

**Copy rules (client mandates, reference copy already complies — carry verbatim):**
1. No em-dashes or en-dashes anywhere. Periods, commas, colons, parentheses only.
2. No question-mark headlines.
3. No new prices/claims/guarantees. Every figure traces to client graphics or bluebest.com.
4. The internal notes block in the reference (lines ~944-989, `.noteband`) must NOT be built.

---

## Files to create / modify

### 1. `src/config/membershipPlans.ts` (new)
Single source of truth for tier data. Prices appear in 3 places on the page
(plan cards, value ledgers, comparison table price row) — render all from here.
Shape per tier: id (`safety|comfort|signature`), name, sealImg, color, monthly,
annual, bestFor, benefit groups (included / savings / warranty) with lucide icon
name + bold text + sub text, loyalty credit, ledger rows + total + after-text,
popular flag. Plus: comparison table row definitions (grouped: Maintenance
Included / Member Benefits / Warranty Protection / Membership Rewards) and the
form plan options: `Safety Plan`, `360 Home Comfort`, `Signature Plan`,
`Not sure yet` (send these exact strings to CRM).

### 2. `src/components/membership/MembershipForm.tsx` (new)
Model on `src/components/quilt/QuiltForm.tsx` (validation, honeypot `company`
field, `toE164`, inline success card, error rendering). Differences from Quilt:

- Single step, no date/time fields.
- **Plan picker at top** ("1. Pick your plan"): 3 tier tiles showing name + $/mo,
  plus full-width "Not sure yet, help me pick the right one" radio.
  Default selection: **360 Home Comfort**. Selected tile paints orange.
- Fields ("2. Your home"): First Name*, Last Name*, Email*, Phone*,
  Street Address*, City*, Zip* (reference has NO state field — omit; backend
  defaults state to `UT`), and optional select **"HVAC systems in your home"**
  (`1 system` / `2 systems` / `3 or more systems` / `Not sure`). This field is
  required BY THE OFFICE for the confirmation call — must pass through to CRM,
  never drop it.
- Reassurance line above button: `LOCAL. LICENSED. BONDED. INSURED. SERVING THE ENTIRE WASATCH FRONT.`
- Button: "Start My Membership". Below: "Talk it through instead. Call 801-801-BEST" (tel link).
- Header ribbon: "Now booking fall furnace tune-ups".
- On success: fire `window.fbq('track','Lead',{content_name:'Membership Plan Lead', source:'membership', value:1.0, currency:'USD'})` and same gtag conversion event as QuiltForm; show inline success card (thank first name, "we call you to schedule").
- POST to `/api/membership-lead` with `plan`, `hvacSystems`, `sourcePageUrl`, `sourcePageTitle`.
- Expose imperative/prop API so plan-card buttons can pre-select a tier
  (see behavior contract below).

**Pre-select behavior contract (README calls this "a real part of the design"):**
Every CTA on page targets the form card (`#join`): page nav button, hero button,
button under comparison table, final CTA button, sticky mobile bar. The three
plan-card buttons additionally pre-select their tier in the form, then smooth-scroll
to `#join`. Implement with lifted React state in MembershipPage
(`selectedPlan` + setter passed to both plan cards and form) + `scrollIntoView({behavior:'smooth'})`.
Gate smooth scrolling behind `prefers-reduced-motion`.

### 3. `api/membership-lead.ts` (new)
Clone `api/lead.ts` structure (origin check, honeypot, field validation, length
caps, Zapier POST, error handling). Changes:
- Fields: firstName, lastName, email, phone, street, city, zip required;
  `plan` required, one of the 4 exact strings; `hvacSystems` optional;
  no preferredDate/preferredTime; `state` defaulted to `'UT'` in payload.
- `formType: 'membership'`, `leadSource: 'bblanding-membership-form'`.
- Env var: **`ZAPIER_MEMBERSHIP_WEBHOOK_URL`** (add to Vercel; user configures Zapier side — routes to CRM "Inquiry About: Service Agreements").

### 4. `src/pages/MembershipPage.tsx` (new)
One page file with inline sections (Quilt pattern: local data consts + JSX
sections). Helmet title/description. Section order and build notes:

| # | Section | Build notes |
|---|---|---|
| 1 | **Page nav** (sticky top) | Logo, anchor links (Why a Plan `#why`, The Plans `#plans`, Your Savings `#value`, Compare `#compare`, Reviews `#reviews`), phone block, orange CTA → `#join`. Links hide ~<1080px, CTA hides <700px, phone stays |
| 2 | **Hero + form** (`#join` on form card) | Adapt Quilt hero grid (copy left, form right; stacks <~1000px, copy above form). Eyebrow "Blue Best Membership Plans", H1 "Two Visits a Year. No Bad Surprises.", sub copy, price pill "Plans from $17/mo · 2 Visits a Year", tagline "Put Your Mind to Rest: Call Blue Best!", CTA + call box, chips (Women-Owned & Operated · Best of State Winner · 5.0 ★ 2,700+ Reviews). BG photo `Blue-Best.06_1200px.jpg` with dark scrim; reference tuned `background-position: center 46%` to show team — re-verify after brand color overlay |
| 3 | **Trust bar** | Dark navy strip: 2025 Best of State image + "3x Best of State" · "Best of SLC 2025" · "Utah's Only Women-Owned HVAC Company" · "5.0 ★ 2,700+ Reviews". Adapt Quilt stats band |
| 4 | **Why a Plan** (`#why`) | H2 "Utah Is Hard on a Home", lead, 4 cards (Lucide: CalendarClock, ShieldCheck, Moon, Wrench) with reference copy, then 3-photo strip with captions (heat pump / furnace / plumber photos) |
| 5 | **Plan cards** (`#plans`) | NEW component-in-page. 3 cards from `membershipPlans.ts`: seal image header (seal carries plan name — no separate name heading), tier-color price bar ($/mo + annual), "Best for" block, grouped benefit lists (pills: Included / Member Savings / Warranty Protection) with Lucide icons EXCEPT year shields (keep shield PNGs inside warranty list items), loyalty credit strip, tier CTA button (pre-selects + scrolls). 360 card gets "Most Popular" tab + emphasis. Single column <~1020px. Fine print: pricing per home, multi-system → call |
| 6 | **Value math** (`#value`) | 3 ledger cards from config: tier-color header, line items + green total "Back in your pocket", after-text. Fine print: figures assume single use, $89 eval, $289 after-hours |
| 7 | **Warranty** (dark section) | Navy bg + `furnace-panel-installation-lennox.jpg` scrim. 3 cards: shield PNG, tier label, plan name, copy. Cap line: "One condition, stated plainly. You must remain on the plan to keep the labor warranty intact." |
| 8 | **Comparison table** (`#compare`) | NEW. Full benefit matrix from config (see reference lines 690-799 for all rows/values). Tier-colored column headers + values. Check marks; "not included" = CSS bar with `aria-label="Not included"` (not a dash char). MUST live in own `overflow-x:auto` wrapper — page body never scrolls sideways (verified 390px in reference). Add `scope="col"` + `<caption>` (reference left this undone). CTA button below → `#join` |
| 9 | **Visit** | "What Actually Happens on a Visit": 7-item checklist + photo (`Cooling.jpg`) with caption card ("You Do Not Have to Remember Any of It"). Adapt Quilt assessment section |
| 10 | **Trust/team** | Split: trust list (Best of State 3x, Best of SLC 2025, women-owned, 2,700+ reviews, Lennox Premier Dealer, ACCA, Local/Licensed/Bonded/Insured) + `team.webp` photo. Badge row below: best-of-state, **lennox-premier (WHITE logo — needs dark/navy tile or it disappears)**, BBB, license badge. Trust-icons strip image optional — drop if it fights Lucide consistency |
| 11 | **Reviews** (`#reviews`) | 4 reviews, names in reference (Jeffery Hansen, Michael Nelson, Marian Young, Aaron). 2 already exist in Quilt REVIEWS const — reuse pattern. Rating strip "5.0 · 2,700+ Reviews" |
| 12 | **Steps** | 3 steps (Pick Your Plan / We Call You to Schedule / Twice a Year, Handled) + "SIMPLE. SCHEDULED. DONE RIGHT." Reuse Quilt steps pattern |
| 13 | **Final CTA** | Award medal image, "Put Your Mind to Rest", CTA + call box, fine-print award line |
| 14 | **Page footer** | Logo, anchor row, address `600 N 500 W Suite D, Bountiful, UT 84010`, phone, `info@bluebest.com`, "SERVING THE ENTIRE WASATCH FRONT", legal links to existing `/privacy-policy`, `/terms-and-conditions`, `/accessibility-statement` |
| 15 | **Sticky mobile CTA** | Fixed bottom bar <~760px: "Call 801-801-BEST" + "Start Membership" → `#join`. Add bottom padding on page so it never covers footer |

### 5. `src/App.tsx` (modify)
- Add route `/membership` → `MembershipPage`.
- Hide global `<Navbar />` and `<Footer />` when `location.pathname === '/membership'`
  (new — no precedent in repo; Quilt uses global chrome). Needs a small wrapper
  component inside Router to read location.
- Add `'membership': 'Membership Plan Lead'` to `getContentNameFromSource` map.

### 6. Assets → `public/images/membership/`
Copy from `temp/bluebest-membership-landing/assets/`:
- **Keep:** 3 seals (`seal-*.png`), 7 shields (`shield-*.png`), badges
  (`badge-*.webp/svg`), photos (hero team bg, heat pump, furnace, plumber,
  Cooling.jpg, 2025-Best-Of-State.png, best-of-state-award-2023, team.webp), logo.svg.
- **Skip:** all 13 `icon-*.png` (replaced by Lucide), `trust-icons.png` (optional),
  `ornament.svg` (decorative divider — keep only if it survives brand restyle).
- Optimize: compress/webp where not already, `width`/`height` attrs, `loading="lazy"`
  below the fold. Heaviest: the two background photos.

---

## Lucide icon mapping (13 PNG icons → consistent set)

| Reference PNG | Lucide |
|---|---|
| icon-calendar | `CalendarCheck` |
| icon-filter | `AirVent` (or `Wind`) |
| icon-drop-blue / icon-drop-red | `Droplets` (tier color via className) |
| icon-faucet | `ShowerHead` |
| icon-clock | `Clock` |
| icon-shield-blue | `ShieldCheck` |
| icon-repair-blue | `Wrench` |
| icon-clipboard-blue / icon-clipboard-red | `ClipboardList` (tier color via className) |
| icon-percent | `Percent` |
| icon-truck | `Truck` |
| icon-moon | `Moon` |
| icon-money | `DollarSign` (or `PiggyBank`) |
| icon-gift | `Gift` |

Blue/red PNG variants collapse to one Lucide icon colored by tier.

---

## QA checklist (before calling it done)

1. `npm run build` passes; `npm run dev` visual pass.
2. 390px wide: no horizontal page scroll; comparison table scrolls inside its wrapper only.
3. All 5 CTAs scroll to form; 3 plan-card buttons pre-select correct tier.
4. Form: validation errors, honeypot hidden, submit hits `/api/membership-lead`, inline success renders, `plan` + `hvacSystems` reach payload.
5. Keyboard: plan picker radios tabbable, selected state announced (reference hides radios with opacity:0 — verify).
6. `prefers-reduced-motion` gates smooth scroll.
7. Lennox badge on dark tile (white logo).
8. No em/en dashes introduced; no question-mark headlines.
9. Global Navbar/Footer absent on `/membership`, present everywhere else.
10. fbq PageView still fires on /membership (route in App PixelWrapper) + Lead on submit.

## Deploy notes / open items

- Add `ZAPIER_MEMBERSHIP_WEBHOOK_URL` in Vercel env (user creates Zap; routes to CRM "Inquiry About: Service Agreements").
- Client open items (not build blockers, from reference README §9): terms/cancellation copy does not exist yet (footer links to generic T&C for now); multi-system coverage unstated (form field + fine print handle it); old bluebest.com plan page contradicts new tiers (client side).
