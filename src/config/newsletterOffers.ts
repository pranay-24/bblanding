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

export type ServiceKey = 'hvac' | 'water-heater' | 'hvac-tune-up' | 'furnace-service';

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
  /** Elfsight form embed widget ID for this service */
  formEmbedId: string;
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

    hero: {
      backgroundImage: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1748381588/hero-banner-2_o7dlss.jpg',
      title1: 'GET YOUR $500 OFF',
      subTitle2: 'New Furnace Installation',
      subTitle: "A limited-time offer from Salt Lake City's most trusted HVAC & plumbing experts.",
      ctaText: 'GET YOUR FREE ESTIMATE',
    },

    multiColumn: {
      cards: [
        {
          label: 'NEW OFFER',
          heading: 'GET YOUR $500 OFF',
          subheading: 'New Furnace Installation',
          description:
            'Stay warm and comfortable without breaking the bank. Enjoy professional installation, and dependable performance you can trust.',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1748386263/hero-3_rxo7uq.png',
      heading: 'Limited-Time Offer – Act Fast!',
      mainOfferText: 'GET YOUR $500 OFF',
      description: 'New Furnace Installation',
      ctaText: 'Request Estimate',
    },
  },

  // ----------------------------------------------------------
  // WATER HEATER
  // ----------------------------------------------------------
  'water-heater': {
    formEmbedId: '9fd1aba2-a3c8-4d9e-9f8e-0798ea11031e',

    hero: {
      backgroundImage: '/water-heater-hero-image.png',
      title1: 'Get $500 off your next tanked Water Heater',
      subTitle: 'A limited-time offer from most trusted HVAC experts.',
      ctaText: 'GET IMMEDIATE ASSISTANCE',
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
      backgroundImage: '/water-heater-limited-time-offer.png',
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

    hero: {
      backgroundImage: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1748381588/hero-banner-2_o7dlss.jpg',
      title1: 'Stay Comfortable Year-Round With Our $129 HVAC Tune-Up',
      subTitle: 'Prevent breakdowns, reduce energy bills, and extend the life of your system — all for just $129.',
      ctaText: 'Book My $129 Tune-Up',
    },

    multiColumn: {
      sectionHeading: 'Other Offers — HVAC Installation',
      cards: [
        {
          heading: 'Upto $6300 cash back',
          subheading: 'IN REBATES AND TAX INCENTIVES',
          description: 'We planned ahead and have 2024 inventory in stock at great prices!',
          expiry: '*25-C tax credit, terms and conditions apply. Must present offer at time of service Expires 7/30/25.',
        },
        {
          heading: '0% financing',
          subheading: 'FOR 12 MONTHS ON NEW HVAC SYSTEM',
          expiry: 'Must present offer at time of service Expires 11/30/25.',
        },
      ],
    },

    secondaryHero: {
      backgroundImage: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1748386263/hero-3_rxo7uq.png',
      heading: 'Limited-Time Offer – Act Fast!',
      description:
        'Extend the life of your HVAC system for just $129. This offer is only valid for a short time — book today before it expires.',
      ctaText: 'Book HVAC Tune Up Now',
    },
  },

  // ----------------------------------------------------------
  // FURNACE SERVICE
  // ----------------------------------------------------------
  'furnace-service': {
    formEmbedId: '273f7c94-a8c3-4b17-a1bf-664cc55c81cd',

    hero: {
      backgroundImage: '/man-installs-furnace.png',
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
      backgroundImage: '/worker-refilling-hvac.png',
      heading: "Limited-Time Furnace Offer – Don't Wait!",
      description:
        'Get $500 OFF your new furnace system installation and enjoy reliable comfort when it matters most. This exclusive deal won\'t last long — schedule your free in-home estimate today before it expires.',
      ctaText: 'REQUEST ESTIMATE',
    },
  },
};

export const DEFAULT_SERVICE: ServiceKey = 'hvac';
