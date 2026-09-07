import React from 'react';
import { Check } from 'lucide-react';

const TRUST_POINTS = [
  '**Best of State award winner** for Heating and Air, three-time and current',
  'Voted **Best of SLC** for Heating and Air, 2025',
  'The only **women-owned and operated** HVAC company in Utah',
  '**2,700+ five-star reviews** across the Wasatch Front',
  '**Lennox Premier Dealer** and Amana dealer',
  'Member of the **Air Conditioning Contractors of America**',
  'Local. Licensed. Bonded. Insured.',
];

const BADGES = [
  {
    src: '/images/membership/badge-best-of-state.webp',
    alt: 'Best of State award winner',
    width: 500,
    height: 500,
    dark: false,
  },
  {
    src: '/images/membership/badge-lennox-premier.webp',
    alt: 'Lennox Premier Dealer',
    width: 197,
    height: 121,
    dark: true,
  },
  {
    src: '/images/membership/badge-bbb.webp',
    alt: 'BBB accredited business',
    width: 217,
    height: 80,
    dark: false,
  },
  {
    src: '/images/membership/badge-license.svg',
    alt: 'Licensed, bonded and insured',
    width: 800,
    height: 800,
    dark: false,
  },
];

/** Splits copy on `**bold**` markers so the client's emphasis survives verbatim. */
const renderEmphasis = (text: string) =>
  text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-body font-bold text-blue-primary-dark">
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const MembershipTeamTrust: React.FC = () => (
  <section className="overflow-hidden bg-gradient-to-b from-blue-light to-white py-14 sm:py-20">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <div className="grid items-center gap-8 min-[880px]:grid-cols-2 min-[880px]:gap-12">
        <div>
          <div className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-blue-primary">
            The Team Behind the Plan
          </div>
          <h2 className="mb-0 mt-2.5 font-heading text-3xl font-bold leading-tight text-blue-primary-dark sm:text-[40px]">
            Why Salt Lake City <span className="font-heading text-blue-primary">Trusts Blue Best</span>
          </h2>
          <ul className="mt-4 list-none p-0">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="m-0 flex items-start gap-3 border-b border-blue-primary/10 py-3 font-body text-[15px] font-semibold leading-relaxed text-grey-color last:border-b-0"
              >
                <span
                  aria-hidden="true"
                  className="mt-[3px] inline-flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-orange-primary text-white"
                >
                  <Check className="h-[13px] w-[13px]" strokeWidth={3.5} />
                </span>
                <span className="font-body">{renderEmphasis(point)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl shadow-[0_18px_42px_rgba(20,45,80,0.22)]">
          <img
            src="/images/membership/team.webp"
            alt="The Blue Best team accepting their Best of State award"
            width={1289}
            height={1289}
            loading="lazy"
            className="block aspect-square w-full object-cover"
          />
        </div>
      </div>

      <ul className="mt-10 flex list-none flex-wrap items-center justify-center gap-4 p-0 sm:mt-12 sm:gap-[18px]">
        {BADGES.map((badge) => (
          <li
            key={badge.src}
            className={`m-0 flex items-center justify-center rounded-xl border px-4 py-3 shadow-[0_4px_14px_rgba(20,45,80,0.08)] sm:px-[18px] ${
              badge.dark
                ? 'border-blue-primary-dark bg-blue-primary-dark'
                : 'border-blue-primary/15 bg-white'
            }`}
          >
            <img
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              loading="lazy"
              className="block h-11 w-auto max-w-[150px] object-contain sm:h-[58px]"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MembershipTeamTrust;
