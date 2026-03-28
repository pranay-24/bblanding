# Call Tracking Setup

## Phone Number: (385) 200-2604

This is the **real business phone number** hardcoded throughout the site.

## How It Works

Google Ads call conversion tracking (Dynamic Number Insertion) is set up across all landing pages. The Google tag finds `(385) 200-2604` on the page and replaces it with a **Google forwarding number** for visitors arriving from Google Ads.

| Visitor source | Number shown on page | Number dialed | Reaches |
|---|---|---|---|
| Google Ads | Google forwarding number | Google forwarding number | (385) 200-2604 |
| Organic / Direct / Other | (385) 200-2604 | (385) 200-2604 | (385) 200-2604 |

Every call — regardless of source — ends up at **(385) 200-2604**.

## Where It's Configured

The `phone_conversion_number` is set in the Google Ads gtag snippet in the following files:

- `index.html`
- `src/pages/LandingPage1.tsx`
- `src/pages/LandingPage2.tsx`
- `src/pages/LandingPageWH.tsx`
- `src/pages/LandingPageTU.tsx`
- `src/pages/FurnaceService.tsx`
- `src/pages/ThankYouPage1.tsx`
- `src/pages/NewsletterPage.tsx`

## What Is Dynamic Number Insertion (DNI)?

A call tracking technique where a JavaScript snippet (from Google Ads or a third-party service like CallRail) scans the page for a specified phone number and replaces it with a unique tracking/forwarding number. The forwarding number routes the call to the real number while logging attribution data (which ad, keyword, or source drove the call).
