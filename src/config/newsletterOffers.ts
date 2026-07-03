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
  /** Optional accent line rendered directly below H1 (above subTitle2) */
  belowHeading?: string;
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
      title1: 'A New AC From\n$69 a Month',
      subTitle: 'When Your Furnace Is Fine But The AC Is On Its Last Legs.',
      ctaText: 'SEE IF I QUALIFY',
    },

    multiColumn: {
      cards: [
        {
          heading: 'Replace the AC. Not Your Budget.',
          subheading: '',
          description: 'If your furnace is still going strong but your air conditioner is struggling through another Utah summer, you don\'t have to replace everything. Put in a new high-efficiency AC on its own, with payments starting at $69 a month for qualified buyers.',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: '/images/hero-3_rxo7uq.webp',
      heading: 'A New AC. From $69 a Month.',
      description: 'Replace just your air conditioner with low monthly payments. Keep your budget intact and your home cool all summer.',
      ctaText: 'SEE IF I QUALIFY',
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
      title1: '$1,000 OFF ON A WATER HEATER\nWITH ANY COMPLETE SYSTEM PURCHASE',
      subTitle2: 'TWO UPGRADES. ONE SMART MOVE.',
      subTitle: '',
      ctaText: 'GET FREE ESTIMATE',
    },

    multiColumn: {
      sectionHeading: 'Bundle Them & Save on the Upgrade',
      cards: [
        {
          heading: '$1,000 OFF',
          subheading: 'On a Water Heater With Any Complete System Purchase',
          description: 'Pair a new water heater with a complete HVAC system installation and save $1,000. Two upgrades, one smart move — both systems installed by certified techs.',
          expiry: 'Must present offer at time of service. Valid while supplies last.',
        }

      ],
    },

    secondaryHero: {
      backgroundImage: '/water-heater-limited-time-offer.webp',
      heading: 'One Decision. Two Upgrades. $1,000 Saved.',
      mainOfferText: '$1,000 OFF',
      description:
        "You're going to need both eventually. Why not handle it now, while the savings are on the table and the calendar is open?",
      ctaText: 'CLAIM $1,000 OFF',
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
      title1: 'ONE APPOINTMENT.\nTHREE TUNE-UPS AT $179',
      belowHeading: 'AC + Furnace + Plumbing - covered in one visit.',
      subTitle2: 'Keep Your System Running Safe, Smooth & Efficient',
      ctaText: 'SCHEDULE MY TUNE-UP NOW',
      subTitle: ""
    },

    multiColumn: {
      cards: [
        {
          label: 'TRIPLE PLAY BUNDLE',
          heading: 'One Appointment. Three Tune-Ups at $179.',
          subheading: 'AC + FURNACE + PLUMBING',
          description: "Your AC, furnace, and plumbing all need regular check-ups. Most homeowners put it off because juggling three appointments is a hassle. The Triple Play Bundle covers all three in one visit — and saves you $168 in the process.",
          expiry: '',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: '/images/hero-3_rxo7uq.webp',
      heading: 'Limited-Time Triple Play Offer — Act Fast!',
      mainOfferText: 'One Appointment. Three Tune-Ups at $179.',
      description:
        "Your home works hard for you. Make sure it's running right — without the runaround. Book your Triple Play and check AC, furnace, and plumbing off the list in one visit.",
      ctaText: 'Book Triple Play Now',
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
