import React from 'react';
import { Check, MoveHorizontal } from 'lucide-react';
import MembershipIcon from './MembershipIcon';
import SectionHeading from './SectionHeading';
import { JoinButton } from './MembershipCTA';
import {
  COMPARE_GROUPS,
  MEMBERSHIP_PLANS,
  MEMBERSHIP_PHONE_DISPLAY,
  MEMBERSHIP_PHONE_HREF,
} from '../../config/membershipPlans';
import type { CompareCell } from '../../config/membershipPlans';

const CAPTION =
  'Benefit by benefit comparison of the three Blue Best membership plans: Safety Plan, 360 Home Comfort, and Signature Plan. Rows are grouped by maintenance included, member benefits, warranty protection, and membership rewards, and the last row shows monthly and annual pricing.';

const Cell: React.FC<{ cell: CompareCell; color: string }> = ({ cell, color }) => {
  if (cell.kind === 'yes') {
    return (
      <span
        style={{ backgroundColor: color }}
        className="relative inline-flex h-7 w-7 items-center justify-center rounded-full text-white shadow-[0_2px_5px_rgba(0,0,0,0.16)]"
      >
        <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (cell.kind === 'no') {
    return (
      <span
        role="img"
        aria-label={cell.ariaLabel ?? 'Not included'}
        className="inline-block h-[3px] w-[17px] rounded-sm bg-[#C4CFDB] align-middle"
      />
    );
  }

  return (
    <>
      {cell.pre && (
        <span className="block text-[10px] font-bold uppercase leading-tight tracking-[0.13em] text-grey-color">
          {cell.pre}
        </span>
      )}
      <span className="font-heading text-2xl font-semibold leading-none" style={{ color }}>
        {cell.value}
      </span>
      {cell.suffix && (
        <span className="mt-1 block text-[11px] font-bold uppercase leading-snug tracking-[0.1em] text-grey-color">
          {cell.suffix}
        </span>
      )}
    </>
  );
};

const MembershipCompare: React.FC = () => (
  <section id="compare" className="bg-blue-light/40 py-14 md:py-[66px]">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <SectionHeading eyebrow="Side by Side" heading="Compare" headingThin="Every Benefit" />

      <p className="mt-6 flex items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.12em] text-grey-color md:hidden">
        <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
        Swipe the table to see every plan
      </p>

      <div className="mt-4 max-w-full overflow-x-auto rounded-xl bg-white shadow-[0_10px_30px_rgba(0,53,114,0.11)] [-webkit-overflow-scrolling:touch] min-[880px]:mt-9">
        <table className="w-full min-w-[700px] border-collapse text-center font-body text-[13.5px]">
          <caption className="sr-only">{CAPTION}</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="min-w-[200px] bg-blue-light px-[14px] py-4 text-left font-heading text-lg font-semibold uppercase tracking-wide text-blue-primary-dark"
              >
                Benefits
              </th>
              {MEMBERSHIP_PLANS.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  style={{ backgroundColor: plan.color }}
                  className="px-3 py-4 align-middle font-heading text-lg font-semibold uppercase tracking-wide text-white"
                >
                  {plan.name}
                  <span className="mt-1 block font-body text-[10.5px] font-bold uppercase leading-snug tracking-[0.16em] text-white/90">
                    {plan.tierLabel}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          {COMPARE_GROUPS.map((group) => (
            <tbody key={group.label}>
              <tr>
                <th
                  colSpan={MEMBERSHIP_PLANS.length + 1}
                  scope="colgroup"
                  className="border-b border-[#EEF2F7] bg-gradient-to-r from-blue-light to-blue-light/50 px-[14px] py-2.5 text-left font-heading text-base font-semibold uppercase tracking-[0.12em] text-blue-primary-dark"
                >
                  {group.label}
                  {group.note && (
                    <span className="ml-0 block font-body text-[11.5px] font-semibold normal-case italic tracking-normal text-grey-color min-[600px]:ml-3 min-[600px]:inline">
                      {group.note}
                    </span>
                  )}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={`${group.label}-${row.label}`} className="transition hover:bg-blue-light/30">
                  <th
                    scope="row"
                    className="min-w-[200px] border-b border-[#EEF2F7] px-[14px] py-3 text-left font-body text-[13.5px] font-semibold text-blue-primary-dark"
                  >
                    <span className="flex items-center gap-3">
                      <MembershipIcon
                        name={row.icon}
                        className="h-[26px] w-[26px] flex-none text-blue-primary"
                        strokeWidth={1.75}
                      />
                      <span>
                        {row.label}
                        {row.sub && (
                          <span className="mt-0.5 block text-[11.5px] font-normal leading-snug text-grey-color">
                            {row.sub}
                          </span>
                        )}
                      </span>
                    </span>
                  </th>
                  {MEMBERSHIP_PLANS.map((plan) => (
                    <td key={plan.id} className="border-b border-[#EEF2F7] px-3 py-3 align-middle">
                      <Cell cell={row.cells[plan.id]} color={plan.color} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}

          <tfoot>
            <tr className="bg-blue-light/60">
              <th
                scope="row"
                className="min-w-[200px] px-[14px] py-[18px] text-left font-heading text-xs font-bold uppercase tracking-[0.1em] text-blue-primary-dark"
              >
                Your investment
                <span className="mt-1 block font-body text-xs font-semibold normal-case tracking-normal text-grey-color">
                  Choose what works best for your budget
                </span>
              </th>
              {MEMBERSHIP_PLANS.map((plan) => (
                <td key={plan.id} className="px-3 py-[18px] align-middle">
                  <span
                    className="block font-heading text-[40px] font-bold leading-none"
                    style={{ color: plan.color }}
                  >
                    ${plan.monthly}
                  </span>
                  <span className="mt-1 block font-body text-[11px] font-semibold leading-snug text-grey-color">
                    per month, or ${plan.annual} per year
                  </span>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="mx-auto mt-5 max-w-[70ch] text-center font-body text-[12.5px] leading-relaxed text-grey-color">
        Pricing is per home. Homes with more than one HVAC system, call{' '}
        <a
          href={MEMBERSHIP_PHONE_HREF}
          className="font-bold text-blue-primary underline decoration-blue-primary/40 underline-offset-2 transition hover:text-blue-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-primary"
        >
          {MEMBERSHIP_PHONE_DISPLAY}
        </a>{' '}
        and we will confirm coverage for your setup.
      </p>

      <div className="mt-[26px] text-center">
        <JoinButton size="lg">Start My Membership</JoinButton>
      </div>
    </div>
  </section>
);

export default MembershipCompare;
