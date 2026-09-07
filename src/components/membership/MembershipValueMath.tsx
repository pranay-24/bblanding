import React from 'react';
import { MEMBERSHIP_PLANS, TIER_COLORS } from '../../config/membershipPlans';
import SectionHeading from './SectionHeading';

const MembershipValueMath: React.FC = () => (
  <section id="value" className="border-t border-slate-200 bg-white py-16">
    <div className="mx-auto max-w-[1200px] px-4">
      <SectionHeading
        eyebrow="Real Savings"
        heading="What a Membership"
        headingThin="Puts Back in Your Pocket"
        lead="These are our own published fees, run against the price of each plan. The two tune-ups, the filters, the flushes, and the inspections all sit on top of the numbers below."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 [@media(min-width:920px)]:grid-cols-3">
        {MEMBERSHIP_PLANS.map((plan) => (
          <article
            key={plan.id}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#FBFCFE]"
          >
            <div
              className="px-6 py-4 text-white"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.14), rgba(0,0,0,0.08)), ${plan.color}`,
              }}
            >
              <h3 className="font-heading text-2xl font-bold leading-tight">{plan.name}</h3>
              <p className="mt-0.5 font-heading text-[11.5px] font-bold uppercase tracking-[0.1em] opacity-90">
                ${plan.annual} per year
              </p>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
              <ul className="m-0 mb-3.5 list-none p-0">
                {plan.ledger.rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 py-2.5"
                  >
                    <span className="font-body text-[13.5px] leading-snug text-slate-600">
                      {row.label}
                    </span>
                    <span
                      className="whitespace-nowrap font-heading text-[21px] font-bold leading-none"
                      style={{ color: TIER_COLORS.green }}
                    >
                      {row.amount}
                    </span>
                  </li>
                ))}
                <li
                  className="mt-1.5 flex items-center justify-between gap-3 rounded-lg border-t-2 px-3 py-3"
                  style={{
                    backgroundColor: `${TIER_COLORS.green}14`,
                    borderTopColor: TIER_COLORS.green,
                    color: TIER_COLORS.greenDark,
                  }}
                >
                  <span className="font-heading text-[13px] font-bold uppercase tracking-[0.08em]">
                    Back in your pocket
                  </span>
                  <span className="whitespace-nowrap font-heading text-[32px] font-extrabold leading-none">
                    {plan.ledger.total}
                  </span>
                </li>
              </ul>

              <p className="mt-auto font-body text-[12.5px] leading-relaxed text-grey-color">
                {plan.ledger.afterText}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-9 max-w-[900px] text-center font-body text-[12.5px] leading-relaxed text-grey-color">
        Figures assume each benefit is used once in the year. System evaluations are valued at
        the regular $89 fee, after-hours savings at $100 off the regular $289 fee.
      </p>
    </div>
  </section>
);

export default MembershipValueMath;
