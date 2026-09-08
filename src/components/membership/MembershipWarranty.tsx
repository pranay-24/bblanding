import React from 'react';
import { MEMBERSHIP_PLANS } from '../../config/membershipPlans';
import SectionHeading from './SectionHeading';
import MembershipYearShield from './MembershipYearShield';

const MembershipWarranty: React.FC = () => (
  <section className="relative overflow-hidden bg-blue-primary-dark py-16">
    <img
      src="/images/membership/furnace-panel-installation-lennox.webp"
      alt=""
      width={500}
      height={500}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-blue-primary-dark/95 bg-gradient-to-b from-[#0A1A33]/90 to-blue-primary-dark/95"
    />

    <div className="relative mx-auto max-w-[1200px] px-4">
      <SectionHeading
        dark
        ornament={false}
        eyebrow="Warranty Protection"
        heading="The Part Most"
        headingThin="Homeowners Miss"
        lead="Parts are usually covered by the manufacturer. Labor is the expensive half of a repair, and it is the half most people pay out of pocket. A Blue Best membership keeps labor coverage in force on the equipment we install."
      />

      <div className="mt-10 grid grid-cols-1 gap-[18px] [@media(min-width:800px)]:grid-cols-3">
        {MEMBERSHIP_PLANS.map((plan) => (
          <article
            key={plan.id}
            className="rounded-xl border border-white/20 bg-white/[0.08] px-6 py-7 text-center backdrop-blur-sm"
          >
            <MembershipYearShield
              years={plan.warranty.years}
              tone={plan.warranty.tone}
              label={`${plan.warranty.years} year labor warranty`}
              className="mx-auto mb-3 h-24 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
            />
            <p className="font-heading text-[10.5px] font-bold uppercase tracking-[0.18em] text-orange-primary">
              {plan.tierLabel}
            </p>
            <h3 className="mt-2 font-heading text-[23px] font-bold leading-tight text-white">
              {plan.name}
            </h3>
            <p className="mt-2 font-body text-[13.5px] leading-relaxed text-blue-light/90">
              {plan.warranty.copy}
            </p>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-9 max-w-[840px] rounded-xl border border-orange-primary/40 border-l-4 border-l-orange-primary bg-orange-primary/10 px-6 py-5 font-body text-[14.5px] leading-relaxed text-blue-light">
        <b className="font-bold text-orange-primary">One condition, stated plainly.</b> You must
        remain on the plan to keep the labor warranty intact. If the membership lapses, the labor
        coverage ends with it.
      </p>
    </div>
  </section>
);

export default MembershipWarranty;
