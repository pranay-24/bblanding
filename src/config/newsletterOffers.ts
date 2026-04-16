// ============================================================
// NEWSLETTER OFFERS CONFIG
// ============================================================
// This is the single source of truth for offer content on the
// /newsletter page. Change offer texts here — nothing else.
//
// Sections controlled by this file:
//   1. Hero  — main headline, subtext, CTA button label
//   2. MultiColumn — offer cards (heading, subheading, description, expiry)
//   3. SecondaryHero — limited-time offer banner text + CTA
//
// To switch service content in an ad campaign, point the URL
// to /newsletter?service=<key>  (default: hvac)
// ============================================================

export type ServiceKey = 'hvac' | 'water-heater' | 'hvac-tune-up' | 'furnace-service' | 'plumbing';

export interface OfferCard {
  /** Optional badge label above the heading (e.g. "NEW OFFER") */
  label?: string;
  /** Main offer value or headline (e.g. "GET YOUR $500 OFF", "Free", "$99") */
  heading: string;
  /** What the offer covers (e.g. "New Furnace Installation") */
  subheading: string;
  /** Optional body paragraph */
  description?: string;
  /** Optional fine-print / expiry line */
  expiry?: string;
}

export interface HeroOffer {
  backgroundImage: string;
  /** Primary H1 — the main offer line */
  title1: string;
  /** Optional service name shown below H1 */
  subTitle2?: string;
  /** Supporting description line */
  subTitle: string;
  /** Orange CTA button label */
  ctaText: string;
}

export interface MultiColumnOffer {
  /** Optional heading above the offer cards */
  sectionHeading?: string;
  cards: OfferCard[];
}

export interface SecondaryHeroOffer {
  backgroundImage: string;
  /** Banner headline (e.g. "Limited-Time Offer – Act Fast!") */
  heading: string;
  /** Optional large offer text (e.g. "GET YOUR $500 OFF") */
  mainOfferText?: string;
  /** Supporting description or offer summary */
  description: string;
  /** Orange CTA button label */
  ctaText: string;
}

export interface NewsletterServiceConfig {
  /** Elfsight form embed widget ID for the regular service page */
  formEmbedId: string;
  /**
   * Elfsight form embed widget ID used on the /newsletter page.
   * These forms redirect to /thank-you?form_id=nl-<service> so the
   * thank-you page can send the user back to the newsletter page on close.
   * Leave undefined if the newsletter form has not been created yet.
   */
  newsletterFormEmbedId?: string;
  hero: HeroOffer;
  multiColumn: MultiColumnOffer;
  secondaryHero: SecondaryHeroOffer;
}

// ============================================================
// OFFER DATA — edit offer texts below
// ============================================================

export const NEWSLETTER_OFFERS: Record<ServiceKey, NewsletterServiceConfig> = {

  // ----------------------------------------------------------
  // HVAC
  // ----------------------------------------------------------
  hvac: {
    formEmbedId: '66cf87e4-4cd5-4498-98e4-93447252644a',
    // HVAC V2 Newsletter form — redirects to /thank-you?form_id=nl-hvac
    newsletterFormEmbedId: '9772a226-155c-4ba8-82c2-58c9bebcfdf0',

    hero: {
      backgroundImage: '/images/hero-banner-2_o7dlss.webp',
      title1: 'Up to $1,500 in Manufacturer Rebates on Complete Systems',
      subTitle: "A limited-time offer from Salt Lake City's most trusted HVAC & plumbing experts.",
      ctaText: 'GET YOUR FREE ESTIMATE',
    },

    multiColumn: {
      cards: [
        {
          label: 'NEW OFFER',
          heading: 'Up to $1,500 in Manufacturer Rebates on Complete Systems',
          subheading: '',
          description:
            'When you invest in a new complete system, manufacturers are putting real money back in your pocket, up to $1,500 in rebates.',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: '/images/hero-3_rxo7uq.webp',
      heading: 'Limited-Time Offer – Act Fast!',
      mainOfferText: 'Up to $1,500 in Manufacturer Rebates on Complete Systems',
      description: 'When you invest in a new complete system, manufacturers are putting real money back in your pocket, up to $1,500 in rebates.',
      ctaText: 'Request Estimate',
    },
  },

  // ----------------------------------------------------------
  // WATER HEATER
  // ----------------------------------------------------------
  'water-heater': {
    formEmbedId: '9fd1aba2-a3c8-4d9e-9f8e-0798ea11031e',
    // Water Heater Newsletter form — redirects to /thank-you?form_id=nl-wh
    newsletterFormEmbedId: 'cabff370-07ee-4462-a413-7f581133952e',

    hero: {
      backgroundImage: '/water-heater-hero-image.webp',
      title1: 'Get $500 off your next tanked Water Heater',
      subTitle: 'A limited-time offer from most trusted HVAC experts.',
      ctaText: 'CLAIM OFFER NOW',
    },

    multiColumn: {
      sectionHeading: 'Offers',
      cards: [
        {
          heading: '$500 OFF',
          subheading: 'Get $500 off your next tanked Water Heater',
          description: '',
          expiry: 'Must present offer at time of service. Valid while supplies last.',
        }

      ],
    },

    secondaryHero: {
      backgroundImage: '/water-heater-limited-time-offer.webp',
      heading: 'Limited-Time Offer – Act Fast!',
      description:
        'Get $500 off your next tanked Water Heater',
      ctaText: 'Schedule & Save Today',
    },
  },

  // ----------------------------------------------------------
  // HVAC TUNE-UP
  // ----------------------------------------------------------
  'hvac-tune-up': {
    formEmbedId: '68a16ab9-1de2-4515-9130-b5b0d11544d3',
    // HVAC Tune-up Newsletter form — redirects to /thank-you?form_id=nl-tu
    newsletterFormEmbedId: 'cdb98937-7749-4269-a488-2e817b30e1a4',

    hero: {
      backgroundImage: '/images/hero-banner-2_o7dlss.webp',
      title1: '$89 Precision Tune-Up & Safety Inspection',
      subTitle2: 'Keep Your System Running Safe, Smooth & Efficient',
      ctaText: 'SCHEDULE MY TUNE-UP NOW',
      subTitle: ""
    },

    multiColumn: {
      cards: [
        {
          label: 'NEW OFFER',
          heading: '$89 Precision Tune-Up & Safety Inspection',
          subheading: 'Stay Ahead of Problems',
          description: 'Small issues turn into expensive repairs fast. A quick tune-up now can save you from a full system breakdown later.',
          expiry: '',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: '/images/hero-3_rxo7uq.webp',
      heading: '$89 Precision Tune-Up & Safety Inspection',
      mainOfferText: 'Keep Your System Running Safe, Smooth & Efficient',
      description:
        'Small issues turn into expensive repairs fast.  A quick tune-up now can save you from a full system breakdown later.',
      ctaText: 'Book HVAC Tune Up Now',
    },
  },

  // ----------------------------------------------------------
  // FURNACE SERVICE
  // ----------------------------------------------------------
  'furnace-service': {
    formEmbedId: '273f7c94-a8c3-4b17-a1bf-664cc55c81cd',
    // Furnace Newsletter form — redirects to /thank-you?form_id=nl-furnace
    newsletterFormEmbedId: '67884641-f495-492d-a107-14bcbbda087c',

    hero: {
      backgroundImage: '/man-installs-furnace.webp',
      title1: '$500 Off on a New Furnace System Installation',
      subTitle: 'A limited-time offer from most trusted HVAC & plumbing experts.',
      ctaText: 'GET IMMEDIATE ASSISTANCE',
    },

    multiColumn: {
      sectionHeading: "This Season's Best Furnace Offers",
      cards: [
        {
          heading: '$49/MONTH',
          subheading: 'FURNACE TUNE-UP + FREE SMART THERMOSTAT',
        },
        {
          heading: 'UP TO $2,000 OFF',
          subheading: 'FURNACE TRADE-IN SAVINGS',
        },
        {
          heading: '0% FINANCING',
          subheading: 'FOR 12 MONTHS ON NEW FURNACE SYSTEMS',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: '/worker-refilling-hvac.webp',
      heading: "Limited-Time Furnace Offer – Don't Wait!",
      description:
        'Get $500 OFF your new furnace system installation and enjoy reliable comfort when it matters most. This exclusive deal won\'t last long — schedule your free in-home estimate today before it expires.',
      ctaText: 'REQUEST ESTIMATE',
    },
  },

  // ----------------------------------------------------------
  // PLUMBING
  // ----------------------------------------------------------
  plumbing: {
    formEmbedId: '9ea74b87-b66a-4830-aa5d-c10757a6db11',
    // Plumbing Newsletter form — redirects to /thank-you?form_id=nl-plumbing
    newsletterFormEmbedId: 'a648097e-6abd-4029-bcc3-40bb48293b72',

    hero: {
      backgroundImage: '/images/BB_Plumbing_1_uxf8fa.webp',
      title1: 'Enjoy Softer Water & Hot Showers Starting at $2,795',
      subTitle: 'A limited-time offer from most trusted HVAC & Plumbing services in Bountiful, Greater Salt Lake City area & along the Wasatch Front.',
      ctaText: 'GET IMMEDIATE ASSISTANCE',
    },

    multiColumn: {
      sectionHeading: 'Offers',
      cards: [
        {
          heading: 'Starting at $2,795',
          subheading: 'SOFTER WATER & HOT SHOWERS',
        },
        {
          heading: 'Free',
          subheading: 'CAMERA INSPECTION',
          description: 'Recognized for excellence in heating and cooling solutions across the state.',
        },
        {
          heading: '$99',
          subheading: 'WATER HEATER TUNE-UP + ANODE ROD CHECK',
        },
        {
          heading: '$500 OFF',
          subheading: 'OFF A NEW WATER HEATER',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: '/images/BB_Plumbing_3_szlspg.webp',
      heading: 'Limited-Time Offer – Act Fast!',
      description: 'Enjoy Softer Water & Luxurious Hot Showers Starting at $2,795.',
      ctaText: 'GET IMMEDIATE ASSISTANCE',
    },
  },
};

export const DEFAULT_SERVICE: ServiceKey = 'hvac';
