export type PlanId = 'safety' | 'comfort' | 'signature';

export type PlanFormValue =
  | 'Safety Plan'
  | '360 Home Comfort'
  | 'Signature Plan'
  | 'Not sure yet';

/** Lucide icon component names. Consumers map these to imports from lucide-react. */
export type BenefitIcon =
  | 'CalendarCheck'
  | 'AirVent'
  | 'Droplets'
  | 'ShowerHead'
  | 'Clock'
  | 'ShieldCheck'
  | 'Wrench'
  | 'ClipboardList'
  | 'Percent'
  | 'Truck'
  | 'Moon'
  | 'DollarSign'
  | 'Gift';

export interface BenefitItem {
  icon: BenefitIcon;
  /** Year-shield PNG shown instead of the Lucide icon (warranty rows only). */
  shieldImg?: string;
  shieldAlt?: string;
  bold: string;
  sub?: string;
  /** Render the bold text in savings green. */
  money?: boolean;
}

export interface BenefitGroup {
  label: string;
  /** Pill uses the savings-green treatment. */
  green?: boolean;
  items: BenefitItem[];
}

export interface LedgerRow {
  label: string;
  amount: string;
}

export interface MembershipPlan {
  id: PlanId;
  name: string;
  formValue: PlanFormValue;
  /** Short label for the form's plan picker tiles. */
  pickerLabel: string;
  tierLabel: string;
  color: string;
  monthly: number;
  annual: number;
  sealImg: string;
  sealAlt: string;
  sealWidth: number;
  sealHeight: number;
  bestFor: string;
  groups: BenefitGroup[];
  loyaltyCredit: string;
  loyaltyIcon: BenefitIcon;
  ledger: { rows: LedgerRow[]; total: string; afterText: string };
  warranty: { years: number; tone: 'blue' | 'red'; copy: string };
  popular?: boolean;
}

const IMG = '/images/membership';

export const TIER_COLORS = {
  safety: '#12386f',
  comfort: '#1a63c4',
  signature: '#96161c',
  green: '#2f7d32',
  greenDark: '#1f6323',
} as const;

export const MEMBERSHIP_PHONE_DISPLAY = '801-801-BEST (2378)';
export const MEMBERSHIP_PHONE_HREF = 'tel:+18018012378';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'safety',
    name: 'Safety Plan',
    formValue: 'Safety Plan',
    pickerLabel: 'Safety',
    tierLabel: 'Essential Protection',
    color: TIER_COLORS.safety,
    monthly: 17,
    annual: 204,
    sealImg: `${IMG}/seal-safety.webp`,
    sealAlt: 'Blue Best Safety Plan membership seal',
    sealWidth: 528,
    sealHeight: 330,
    bestFor:
      'One HVAC system in good shape. You want the tune-ups handled and priority when something breaks.',
    groups: [
      {
        label: 'Included',
        items: [
          {
            icon: 'CalendarCheck',
            bold: '2 HVAC tune-ups per year',
            sub: 'Spring or summer, and fall or winter',
          },
          {
            icon: 'AirVent',
            bold: '1 inch filter included',
            sub: 'During each maintenance visit',
          },
          {
            icon: 'Clock',
            bold: 'Priority repair scheduling',
            sub: 'Front of the line when something breaks',
          },
          { icon: 'ShowerHead', bold: 'Free annual plumbing inspection' },
        ],
      },
      {
        label: 'Member Savings',
        green: true,
        items: [
          { icon: 'Percent', bold: '10% off', sub: 'Repairs and services', money: true },
          {
            icon: 'Truck',
            bold: '50% off',
            sub: 'System evaluation, regularly $89',
            money: true,
          },
          {
            icon: 'Moon',
            bold: '$100 off',
            sub: 'After-hours service, regularly $289',
            money: true,
          },
        ],
      },
      {
        label: 'Warranty Protection',
        items: [
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-5yr.png`,
            shieldAlt: '5 year',
            bold: '5-year labor warranty',
            sub: 'On Blue Best installed equipment',
          },
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-1yr.png`,
            shieldAlt: '1 year',
            bold: '1-year labor warranty',
            sub: 'On repairs',
          },
        ],
      },
    ],
    loyaltyCredit: '$20',
    loyaltyIcon: 'DollarSign',
    ledger: {
      rows: [
        { label: 'Annual loyalty credit', amount: '$20' },
        { label: 'One after-hours call', amount: '$100' },
        { label: 'One evaluation at half price', amount: '$44' },
      ],
      total: '$164',
      afterText:
        'Then add 10% off every repair, priority scheduling, and 5 years of install labor warranty.',
    },
    warranty: {
      years: 5,
      tone: 'blue',
      copy:
        'Five years of install labor warranty on equipment installed by Blue Best, plus one year of labor warranty on repairs.',
    },
  },
  {
    id: 'comfort',
    name: '360 Home Comfort',
    formValue: '360 Home Comfort',
    pickerLabel: '360 Comfort',
    tierLabel: 'Most Popular',
    color: TIER_COLORS.comfort,
    monthly: 30,
    annual: 360,
    sealImg: `${IMG}/seal-360.webp`,
    sealAlt: 'Blue Best 360 Home Comfort membership seal',
    sealWidth: 602,
    sealHeight: 376,
    bestFor:
      'Most Utah homes. Covers the HVAC side and the plumbing side, water heater included.',
    groups: [
      {
        label: 'Included',
        items: [
          {
            icon: 'CalendarCheck',
            bold: '2 HVAC tune-ups per year',
            sub: 'Spring or summer, and fall or winter',
          },
          {
            icon: 'AirVent',
            bold: '1 inch or 5 inch filter included',
            sub: 'During each maintenance visit',
          },
          { icon: 'Droplets', bold: 'Water heater flush', sub: 'Tanked or tankless' },
          {
            icon: 'ShowerHead',
            bold: 'Complimentary annual plumbing inspection',
            sub: 'Separate from the water heater flush',
          },
          {
            icon: 'Clock',
            bold: 'Priority repair scheduling',
            sub: 'Front of the line when something breaks',
          },
        ],
      },
      {
        label: 'Member Savings',
        green: true,
        items: [
          { icon: 'Percent', bold: '10% off', sub: 'Repairs and services', money: true },
          {
            icon: 'ClipboardList',
            bold: '2 complimentary system evaluations',
            sub: 'Then 50% off, regularly $89',
            money: true,
          },
          {
            icon: 'Moon',
            bold: '$100 off',
            sub: 'After-hours service, regularly $289',
            money: true,
          },
        ],
      },
      {
        label: 'Warranty Protection',
        items: [
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-10yr-blue.png`,
            shieldAlt: '10 year',
            bold: 'Up to 10 years labor warranty',
            sub: 'On Blue Best installed equipment',
          },
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-3yr-blue.png`,
            shieldAlt: '3 year',
            bold: '3-year labor warranty',
            sub: 'On repairs',
          },
        ],
      },
    ],
    loyaltyCredit: '$100',
    loyaltyIcon: 'DollarSign',
    ledger: {
      rows: [
        { label: 'Annual loyalty credit', amount: '$100' },
        { label: '2 complimentary evaluations', amount: '$178' },
        { label: 'One after-hours call', amount: '$100' },
      ],
      total: '$378',
      afterText:
        'The plan has already paid for itself before the tune-ups, the water heater flush, the filters, and the plumbing inspection are counted.',
    },
    warranty: {
      years: 10,
      tone: 'blue',
      copy:
        'Up to ten years of install labor warranty on equipment installed by Blue Best, plus three years of labor warranty on repairs.',
    },
    popular: true,
  },
  {
    id: 'signature',
    name: 'Signature Plan',
    formValue: 'Signature Plan',
    pickerLabel: 'Signature',
    tierLabel: 'Ultimate Coverage',
    color: TIER_COLORS.signature,
    monthly: 60,
    annual: 720,
    sealImg: `${IMG}/seal-signature.webp`,
    sealAlt: 'Blue Best Signature Plan membership seal',
    sealWidth: 504,
    sealHeight: 315,
    bestFor:
      'Whole-home coverage, especially homes with a softener, a reverse osmosis system, or a humidifier.',
    groups: [
      {
        label: 'Included Maintenance',
        items: [
          {
            icon: 'CalendarCheck',
            bold: '2 HVAC tune-ups per year',
            sub: 'Spring or summer, and fall or winter',
          },
          {
            icon: 'AirVent',
            bold: '1 inch and 5 inch filters',
            sub: 'Plus humidifier pad, during each visit',
          },
          {
            icon: 'Droplets',
            bold: 'Water heater flush',
            sub: 'Plus water softener, RO filter, and plumbing fixture inspection',
          },
          {
            icon: 'ShowerHead',
            bold: 'Complimentary annual plumbing inspection',
            sub: 'Separate from the water heater flush',
          },
          {
            icon: 'Clock',
            bold: 'Priority repair scheduling',
            sub: 'Front of the line when something breaks',
          },
        ],
      },
      {
        label: 'Exclusive Member Benefits',
        green: true,
        items: [
          { icon: 'Percent', bold: '20% off', sub: 'Repairs and services', money: true },
          {
            icon: 'ClipboardList',
            bold: '4 complimentary system evaluations',
            sub: 'Then 50% off, regularly $89',
            money: true,
          },
          {
            icon: 'Moon',
            bold: '$100 off',
            sub: 'After-hours service, regularly $289',
            money: true,
          },
        ],
      },
      {
        label: 'Warranty Protection',
        items: [
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-10yr.png`,
            shieldAlt: '10 year',
            bold: 'Up to 10 years labor warranty',
            sub: 'On Blue Best installed equipment',
          },
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-5yr-red.png`,
            shieldAlt: '5 year',
            bold: '5-year labor warranty',
            sub: 'On repairs',
          },
          {
            icon: 'ShieldCheck',
            shieldImg: `${IMG}/shield-20yr.png`,
            shieldAlt: '20 year',
            bold: 'Up to 20 years labor warranty',
            sub: 'On plumbing installs',
          },
        ],
      },
    ],
    loyaltyCredit: '$200',
    loyaltyIcon: 'Gift',
    ledger: {
      rows: [
        { label: 'Annual loyalty credit', amount: '$200' },
        { label: '4 complimentary evaluations', amount: '$356' },
        { label: 'One after-hours call', amount: '$100' },
      ],
      total: '$656',
      afterText:
        'Then add 20% off every repair, the softener and RO service, and up to 20 years of plumbing install labor warranty.',
    },
    warranty: {
      years: 20,
      tone: 'red',
      copy:
        'Up to twenty years of labor warranty on plumbing installs, up to ten years on HVAC installs, and five years on repairs.',
    },
  },
];

export const PLAN_BY_ID: Record<PlanId, MembershipPlan> = {
  safety: MEMBERSHIP_PLANS[0],
  comfort: MEMBERSHIP_PLANS[1],
  signature: MEMBERSHIP_PLANS[2],
};

/** Exact strings sent to the CRM. Order matches the form picker. */
export const PLAN_FORM_OPTIONS: PlanFormValue[] = [
  'Safety Plan',
  '360 Home Comfort',
  'Signature Plan',
  'Not sure yet',
];

export const DEFAULT_PLAN_FORM_VALUE: PlanFormValue = '360 Home Comfort';

export const HVAC_SYSTEM_OPTIONS = [
  '1 system',
  '2 systems',
  '3 or more systems',
  'Not sure',
] as const;

/* ---------------- Comparison table ---------------- */

/** A cell is a check, a "not included" bar, or a value with optional prefix/suffix. */
export type CompareCell =
  | { kind: 'yes' }
  | { kind: 'no'; ariaLabel?: string }
  | { kind: 'value'; pre?: string; value: string; suffix?: string };

export interface CompareRow {
  icon: BenefitIcon;
  label: string;
  sub?: string;
  cells: Record<PlanId, CompareCell>;
}

export interface CompareGroup {
  label: string;
  note?: string;
  rows: CompareRow[];
}

const YES: CompareCell = { kind: 'yes' };
const NO: CompareCell = { kind: 'no' };

export const COMPARE_GROUPS: CompareGroup[] = [
  {
    label: 'Maintenance Included',
    rows: [
      {
        icon: 'CalendarCheck',
        label: '2 HVAC tune-ups per year',
        sub: 'Spring or summer, and fall or winter',
        cells: { safety: YES, comfort: YES, signature: YES },
      },
      {
        icon: 'AirVent',
        label: '1 inch filter included',
        sub: 'During each maintenance visit',
        cells: { safety: YES, comfort: YES, signature: YES },
      },
      {
        icon: 'AirVent',
        label: '5 inch standard filter included',
        cells: { safety: NO, comfort: YES, signature: YES },
      },
      {
        icon: 'Droplets',
        label: 'Humidifier pad included',
        cells: { safety: NO, comfort: NO, signature: YES },
      },
      {
        icon: 'Droplets',
        label: 'Water heater flush',
        sub: 'Tanked or tankless',
        cells: { safety: NO, comfort: YES, signature: YES },
      },
      {
        icon: 'Droplets',
        label: 'Water softener service',
        cells: { safety: NO, comfort: NO, signature: YES },
      },
      {
        icon: 'ShowerHead',
        label: 'Annual plumbing inspection',
        sub: 'Separate from the water heater flush',
        cells: { safety: YES, comfort: YES, signature: YES },
      },
    ],
  },
  {
    label: 'Member Benefits',
    rows: [
      {
        icon: 'Clock',
        label: 'Priority repair scheduling',
        cells: { safety: YES, comfort: YES, signature: YES },
      },
      {
        icon: 'Percent',
        label: 'Repair and service discount',
        cells: {
          safety: { kind: 'value', value: '10%' },
          comfort: { kind: 'value', value: '10%' },
          signature: { kind: 'value', value: '20%' },
        },
      },
      {
        icon: 'ClipboardList',
        label: 'Complimentary system evaluations',
        sub: 'Included each year',
        cells: {
          safety: { kind: 'no', ariaLabel: 'None included' },
          comfort: { kind: 'value', value: '2' },
          signature: { kind: 'value', value: '4' },
        },
      },
      {
        icon: 'Truck',
        label: 'System evaluation fee',
        sub: 'Regular fee $89',
        cells: {
          safety: { kind: 'value', value: '50%', suffix: 'off, every time' },
          comfort: { kind: 'value', value: '50%', suffix: 'off, after the 2 free' },
          signature: { kind: 'value', value: '50%', suffix: 'off, after the 4 free' },
        },
      },
      {
        icon: 'Moon',
        label: '$100 off after-hours service',
        sub: 'Regular after-hours fee $289',
        cells: { safety: YES, comfort: YES, signature: YES },
      },
    ],
  },
  {
    label: 'Warranty Protection',
    note: 'Must remain on plan to keep labor warranty intact',
    rows: [
      {
        icon: 'ShieldCheck',
        label: 'Install labor warranty',
        sub: 'On equipment installed by Blue Best',
        cells: {
          safety: { kind: 'value', value: '5', suffix: 'years' },
          comfort: { kind: 'value', pre: 'Up to', value: '10', suffix: 'years' },
          signature: { kind: 'value', pre: 'Up to', value: '10', suffix: 'years' },
        },
      },
      {
        icon: 'Wrench',
        label: 'Repair labor warranty',
        sub: 'On repairs',
        cells: {
          safety: { kind: 'value', value: '1', suffix: 'year' },
          comfort: { kind: 'value', value: '3', suffix: 'years' },
          signature: { kind: 'value', value: '5', suffix: 'years' },
        },
      },
      {
        icon: 'ShowerHead',
        label: 'Plumbing install labor warranty',
        sub: 'On plumbing equipment installations',
        cells: {
          safety: NO,
          comfort: NO,
          signature: { kind: 'value', pre: 'Up to', value: '20', suffix: 'years' },
        },
      },
    ],
  },
  {
    label: 'Membership Rewards',
    rows: [
      {
        icon: 'Gift',
        label: 'Annual loyalty credit',
        sub: 'Toward repairs, services, and new equipment',
        cells: {
          safety: { kind: 'value', value: '$20' },
          comfort: { kind: 'value', value: '$100' },
          signature: { kind: 'value', value: '$200' },
        },
      },
    ],
  },
];
