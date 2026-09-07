import React from 'react';
import MembershipIcon from './MembershipIcon';
import SectionHeading from './SectionHeading';
import type { BenefitIcon } from '../../config/membershipPlans';

interface StakeCard {
  icon: BenefitIcon;
  heading: string;
  body: string;
}

const STAKES: StakeCard[] = [
  {
    icon: 'CalendarCheck',
    heading: 'Equipment Quits Under Load',
    body: 'Furnaces fail on the coldest night and air conditioners fail on the hottest afternoon, because that is when they work hardest. Members go to the top of the schedule instead of the back of a very long line.',
  },
  {
    icon: 'ShieldCheck',
    heading: 'Skipped Service Can Cost a Claim',
    body: "Even a brand-new system needs annual service to satisfy the maintenance requirements written into the manufacturer's warranty. No service record can mean no coverage when you need it.",
  },
  {
    icon: 'Moon',
    heading: 'After-Hours Calls Are Expensive',
    body: 'The regular after-hours service fee is $289. Every membership tier takes $100 off it, every time you need us outside normal hours.',
  },
  {
    icon: 'Wrench',
    heading: 'Small Problems Stay Small',
    body: 'A loose connection, a dirty coil, or a worn part is a routine fix in April and an emergency in August. Two visits a year is how you catch it while it is still cheap.',
  },
];

interface StripPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

const PHOTOS: StripPhoto[] = [
  {
    src: '/images/membership/service-repair-being-done-on-a-heat-pump-hvac-system.webp',
    width: 400,
    height: 600,
    alt: 'Blue Best technician servicing an outdoor heat pump unit',
    caption: 'Cooling, checked in spring',
  },
  {
    src: '/images/membership/furnace-panel-installation-lennox.webp',
    width: 500,
    height: 500,
    alt: 'Blue Best technician servicing a furnace',
    caption: 'Heating, checked in fall',
  },
  {
    src: '/images/membership/plumber-fixing-pipe-with-tool.webp',
    width: 600,
    height: 399,
    alt: 'Blue Best plumber tightening a pipe fitting',
    caption: 'Plumbing, inspected yearly',
  },
];

const LEAD =
  'Hundred-degree Julys and single-digit Januaries mean your equipment works nearly year round. Systems that get checked twice a year fail less, run cheaper, and last longer. Systems that get ignored break on the worst possible day.';

const MembershipWhy: React.FC = () => (
  <section id="why" className="bg-white py-14 md:py-[66px]">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <SectionHeading
        eyebrow="Why a Maintenance Plan"
        heading="Utah Is"
        headingThin="Hard on a Home"
        lead={LEAD}
      />

      <div className="mt-10 grid grid-cols-1 gap-[18px] min-[541px]:grid-cols-2 min-[961px]:grid-cols-4">
        {STAKES.map((card) => (
          <div
            key={card.heading}
            className="rounded-xl border border-blue-light bg-gradient-to-b from-white to-blue-light/45 p-[26px_22px] text-center transition duration-150 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,53,114,0.13)]"
          >
            <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-light text-blue-primary-dark">
              <MembershipIcon name={card.icon} className="h-8 w-8" strokeWidth={1.75} />
            </span>
            <h3 className="font-heading text-xl font-semibold leading-snug text-blue-primary-dark">
              {card.heading}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-grey-color">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-1 gap-4 min-[761px]:grid-cols-3">
        {PHOTOS.map((photo) => (
          <figure
            key={photo.src}
            className="relative m-0 aspect-[16/9] overflow-hidden rounded-xl shadow-[0_10px_26px_rgba(0,53,114,0.16)] min-[761px]:aspect-[4/3]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-primary-dark/90 to-transparent px-4 pb-3 pt-8 font-heading text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default MembershipWhy;
