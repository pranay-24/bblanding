# /membership Landing Page — Progress

Build plan: `MEMBERSHIP-PLAN.md` (same dir). Reference HTML + screenshots:
`/workspace/bblanding-root/temp/bluebest-membership-landing/`.

**Session 1: 2026-09-07.** Plan executed top to bottom via 5 parallel subagents.
Status: code complete, NOT QA complete, 2 known bugs open.

**Session 2: 2026-09-07.** Both bugs fixed, visual QA ran, one QA defect fixed.
Status: **build + QA complete. No known blockers. Deploy items below still open.**

---

## Resume here (next session)

No code blockers. Remaining work is deploy config and client content, all in
"Deploy / open items" at the bottom. The only build-side item worth revisiting
is the optional polish list under "Session 2 QA results" — all rated nit.

---

## Session 2: bug fixes and QA

### 1. Sticky nav — FIXED
Removed `overflow-x: hidden` from the `body` rule in `src/index.css`; kept it on
`html`. `html`'s value propagates to the viewport, so horizontal clipping is
unchanged, but `body` is no longer a scroll container and no longer swallows
`position: sticky`.

This is a global CSS change, so it was regression-tested rather than assumed.
`/hvac`, `/plumbing` and `/` were screenshotted at 390px at four scroll depths
with and without the old `body` clip re-injected at runtime: **pixel-identical
in every frame**. Those pages do report `documentElement.scrollWidth` 405 vs
`clientWidth` 390 now, but that is a metric artifact of where the 15px of
overflow is parked (viewport instead of body); it is not visible and the
viewport still refuses to pan. Those pages have genuine 15px of overflow at
390px that predates this page and is still masked, just one box higher up.

Nav confirmed pinned at `getBoundingClientRect().top === 0` at 1440 / 1024 /
768 / 390, and anchor jumps land headings below the nav.

### 2. Horizontal overflow at <=640px — FIXED
Added `relative` to the check-mark badge span in `MembershipCompare.tsx` so the
`sr-only` label resolves its containing block against the badge instead of
escaping to the initial containing block. `/membership` is now
`scrollWidth === clientWidth` at 1440 / 1024 / 768 / 640 / 480 / 390.

### 3. Visual QA — RAN (`visual-qa` agent, 4 viewports)
Screenshot evidence in `qa/mem/` (untracked, safe to delete).

One defect found and fixed: the compare table was `min-w-[790px]` inside a 724px
scroller at 768px, clipping the Signature column mid-word, and at 390px the
260px label column left zero plan data visible. Narrowed the table to
`min-w-[700px]` and the label column to `min-w-[200px]`. It now fits outright at
768 and up (724/724, no scroll needed), and at 390 the Safety column and its
check marks are visible before any swipe. The "Swipe the table" hint breakpoint
moved from `min-[880px]:hidden` to `md:hidden` to match where the table actually
stops fitting.

Explicitly confirmed clean by eye: Lennox white logo does sit on its navy tile;
"Most Popular" ribbon not clipped and not colliding despite `scale-[1.02]`; the
three plan seals render within 0.5% of their intrinsic aspect ratios; the 390px
sticky CTA bar clears the footer; the 3-photo strip crops keep their subjects;
no broken images at any width; empty-form submit renders all seven inline errors
without breaking layout.

**Container width mismatch: decided WONTFIX.** The `max-w-[1200px] px-4` vs
`max-w-[1160px] px-[22px]` split is a 24px edge step, and the two groups are
co-visible at exactly one seam (warranty -> compare) where ~500px of vertical
space and a navy-to-light background change separate them. Imperceptible while
scrolling.

Optional polish, all rated nit, none actioned:
- No in-page nav links below 1440 and no hamburger; only the 390px sticky CTA
  bar substitutes, and it carries no section links. Footer carries the anchors.
- ~130px of dead white space in the Safety plan card at 1440/1024 from
  equal-height rows; reads as a missing row.
- Vertical rhythm splits at `#compare`: sections above use `py-14/16`, the five
  below use `sm:py-20` (138px vs 180px inter-section gaps).
- 10px uppercase label text at 390 ("CALL US TODAY" in nav, the
  "LOCAL. LICENSED. BONDED. INSURED" line under the form).

### Environment note for whoever runs Playwright here next
The bundled Chromium will not launch in this container — 15 shared libraries are
missing and there is no root or working apt. Working around it: the Debian
bookworm arm64 `Packages` index was used to resolve the debs, which were
extracted with `dpkg-deb -x` into `/tmp/pwdeps/root`, then
`LD_LIBRARY_PATH=/tmp/pwdeps/root/usr/lib/aarch64-linux-gnu:/tmp/pwdeps/root/lib/aarch64-linux-gnu`
on every node invocation. `/tmp` does not survive a container rebuild, so this
has to be redone. Also: Playwright scripts must live inside this repo, since a
script in `/tmp` cannot resolve the `playwright` import.

When dispatching `visual-qa` at this page, forbid `fullPage: true` AND
`deviceScaleFactor` above 1 explicitly. This page is ~12,000px tall and two runs
died on Playwright's 2000px image limit before the constraint was made literal.

---

## What was built

Nothing is committed. Branch `main`, all changes uncommitted:
`M src/App.tsx`, plus untracked `api/membership-lead.ts`,
`src/config/membershipPlans.ts`, `src/pages/MembershipPage.tsx`,
`src/components/membership/`, `public/images/membership/`, `MEMBERSHIP-PLAN.md`.

### Shared contract (written by main thread, agents consumed it)
- `src/config/membershipPlans.ts` — single source of truth. All 3 tiers with
  prices, benefit groups, ledgers, warranty copy, seal paths; plus
  `COMPARE_GROUPS` (the full benefit matrix as a `CompareCell` discriminated
  union), `TIER_COLORS`, phone constants, `PLAN_FORM_OPTIONS`,
  `HVAC_SYSTEM_OPTIONS`. Prices appear in 3 places on the page and all 3 render
  from here.
- `src/components/membership/scrollToJoin.ts` — `scrollToJoin`,
  `scrollToAnchor`, `prefersReducedMotion`, `JOIN_ID`. Offsets by measuring
  `#membership-nav`. Reduced-motion gating lives here.
- `MembershipIcon.tsx` — maps config icon names to Lucide components.
- `SectionHeading.tsx` — eyebrow / heading / headingThin / lead / dark / ornament.
- `MembershipCTA.tsx` — `JoinButton`, `CallBox`.

### Sections (14 components in `src/components/membership/`)
`MembershipNav`, `MembershipHero` (takes `form` as a prop),
`MembershipTrustBar`, `MembershipWhy` (`#why`), `MembershipPlanCards`
(`#plans`, prop `onChoosePlan`), `MembershipValueMath` (`#value`),
`MembershipWarranty`, `MembershipCompare` (`#compare`), `MembershipVisit`,
`MembershipTeamTrust`, `MembershipReviews` (`#reviews`), `MembershipSteps`,
`MembershipFinalCTA`, `MembershipFooter`, `MembershipStickyCTA` (exports
`STICKY_CTA_HEIGHT = 66`).

### Form + endpoint
- `MembershipForm.tsx` — props `{ selectedPlan, onSelectPlan }`, root carries
  `id="join"` on a wrapper that survives submission. Single step, plan picker +
  home fields, no state field, optional HVAC-systems select.
- `api/membership-lead.ts` — cloned from `api/lead.ts`. `formType: 'membership'`,
  `leadSource: 'bblanding-membership-form'`, `state` defaulted to `'UT'`,
  env var `ZAPIER_MEMBERSHIP_WEBHOOK_URL`.

### Page + route
- `src/pages/MembershipPage.tsx` — owns `selectedPlan` state, passes it down to
  the form and `setSelectedPlan` to the plan cards. This is what makes the
  plan-card buttons pre-select a tier.
- `src/App.tsx` — added the `/membership` route, added
  `'membership': 'Membership Plan Lead'` to `getContentNameFromSource`, and
  added a `ChromeLayout` wrapper that hides the global `Navbar`/`Footer` for
  routes in the new `SELF_CHROMED_ROUTES` array.

### Assets
`public/images/membership/`, 2.0MB -> 720KB. Seals and the award medal converted
PNG -> webp (seals 173KB -> 24KB, medal 612KB -> 35KB); photos converted to
webp. Year shields kept as PNG (small, need transparency). The 13 benefit icon
PNGs and `trust-icons.png` were deliberately NOT copied, per the plan, and are
replaced by Lucide.

---

## Verified passing

- `npm run build` passes. `npx tsc --noEmit -p tsconfig.app.json` clean for all
  membership files (the rest of the repo has pre-existing unused-import noise).
- Zero em-dashes and en-dashes. No question-mark headlines.
- Behavioral QA via Playwright, 9 of 10 items pass:
  all 5 CTAs scroll to `#join`; all 3 plan-card buttons pre-select the correct
  tier; default selection is 360 Home Comfort; reduced-motion gating works
  (instant vs animated confirmed); all 7 required-field errors plus
  `aria-invalid`/`aria-describedby`; bad email/phone/zip rejected; `hvacSystems`
  optional and never blocks; honeypot not visible and not tabbable; plan picker
  keyboard-operable with visible focus ring and correct ARIA radio group;
  inline success card replaces the form with no route change and `#join`
  survives; global chrome absent on `/membership` and present on `/quilt`, with
  no stale chrome after client-side nav.
- Submit payload confirmed:
  `{firstName, lastName, email, phone: "+1801...", street, city, zip, plan: "360 Home Comfort", hvacSystems, company: "", sourcePageUrl, sourcePageTitle}`
  E.164 correct, no `state` sent from the client.
- Analytics confirmed:
  `fbq('track','Lead',{content_name:'Membership Plan Lead', source:'membership', value:1, currency:'USD'})`
  and `gtag('event','conversion',{send_to:'AW-396446063/7BpGCMTNsd8aEO-Shb0B'})`.
  Neither fires on a failed submit.

---

## Decisions and deviations

- **Deviation from the plan:** the plan specified one page file with inline
  sections (the Quilt pattern). Built as 14 section components instead, because
  5 agents had to write non-overlapping files in parallel. Worth a look at
  whether to keep this or inline it.
- Gtag conversion ID is copied verbatim from `QuiltForm`. **If membership needs
  its own conversion label, this must change.**
- Footer logo uses `[filter:brightness(0)_invert(1)]` because `logo.svg` is dark
  blue and illegible on the navy footer.
- Benefit bold text is `blue-primary-dark` on all three tiers; the reference
  tinted Signature's rows red. Tier colour coding is still carried by the seal,
  price bar, pills, and ledger header.
- Compare table a11y went beyond the reference: `<caption class="sr-only">`,
  `scope="col"` on all header cells, `scope="row"` on label cells,
  `scope="colgroup"` on group rows, `role="img"` + `aria-label` on the CSS-drawn
  "not included" bar. A mobile hint reads "Swipe the table to see every plan"
  below 880px.
- `trust-icons.png` intentionally dropped (would fight the Lucide icon language).
- Warranty scrim is `bg-blue-primary-dark/95` over the photo. Lower the alpha if
  the client wants the photo more visible.

---

## Deploy / open items

- **Add `ZAPIER_MEMBERSHIP_WEBHOOK_URL` to Vercel env.** User creates the Zap;
  it should route to the CRM "Inquiry About: Service Agreements" category.
- Client open items, not build blockers (reference README section 9): terms and
  cancellation copy does not exist yet, so the footer links to the generic
  `/terms-and-conditions`; multi-system coverage is unstated and is handled by
  the form field plus fine print; `bluebest.com/hvac-maintenance-plan-layton-ut`
  still advertises the old plan and will contradict this page on day one.
- Phone number: page uses 801-801-BEST (`tel:+18018012378`) per the plan's
  locked decision. Client still has three numbers in circulation.
