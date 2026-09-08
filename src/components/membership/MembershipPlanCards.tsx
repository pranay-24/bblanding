import React from 'react';
import {
  MEMBERSHIP_PLANS,
  MEMBERSHIP_PHONE_DISPLAY,
  MEMBERSHIP_PHONE_HREF,
  TIER_COLORS,
} from '../../config/membershipPlans';
import type { BenefitItem, MembershipPlan, PlanFormValue } from '../../config/membershipPlans';
import MembershipIcon from './MembershipIcon';
import SectionHeading from './SectionHeading';
import { JoinButton } from './MembershipCTA';

interface MembershipPlanCardsProps {
  onChoosePlan: (plan: PlanFormValue) => void;
}

const SHIELD_DIMS: Record<string, { w: number; h: number }> = {
  'shield-1yr.png': { w: 83, h: 80 },
  'shield-3yr-blue.png': { w: 74, h: 80 },
  'shield-5yr.png': { w: 83, h: 78 },
  'shield-5yr-red.png': { w: 64, h: 62 },
  'shield-10yr.png': { w: 64, h: 74 },
  'shield-10yr-blue.png': { w: 64, h: 73 },
  'shield-20yr.png': { w: 64, h: 70 },
};

const shieldDims = (src: string) =>
  SHIELD_DIMS[src.split('/').pop() ?? ''] ?? { w: 64, h: 64 };

const BenefitRow: React.FC<{ item: BenefitItem; color: string }> = ({ item, color }) => {
  const dims = item.shieldImg ? shieldDims(item.shieldImg) : null;
  return (
    <li className="flex items-start gap-3 border-b border-slate-100 py-2 last:border-b-0">
      <span
        className="flex w-[31px] shrink-0 justify-center pt-0.5"
        style={{ color }}
      >
        {item.shieldImg && dims ? (
          <img
            src={item.shieldImg}
            alt={item.shieldAlt ?? ''}
            width={dims.w}
            height={dims.h}
            loading="lazy"
            className="h-[31px] w-auto object-contain"
          />
        ) : (
          <MembershipIcon
            name={item.icon}
            className="h-[26px] w-[26px]"
            strokeWidth={1.9}
          />
        )}
      </span>
      <span className="min-w-0 font-body text-[13.5px] leading-[1.42] text-slate-600">
        <b
          className="block text-[14px] font-bold"
          style={{ color: item.money ? TIER_COLORS.greenDark : '#003572' }}
        >
          {item.bold}
        </b>
        {item.sub}
      </span>
    </li>
  );
};

const PlanCard: React.FC<{
  plan: MembershipPlan;
  onChoosePlan: (plan: PlanFormValue) => void;
}> = ({ plan, onChoosePlan }) => (
  <article
    aria-labelledby={`plan-${plan.id}-name`}
    className={`relative flex flex-col overflow-hidden rounded-2xl bg-white ${
      plan.popular
        ? 'border-[3px] shadow-2xl [@media(min-width:1020px)]:z-10 [@media(min-width:1020px)]:-translate-y-2 [@media(min-width:1020px)]:scale-[1.02]'
        : 'border border-slate-200 shadow-[0_6px_18px_rgba(20,45,80,0.09)]'
    }`}
    style={plan.popular ? { borderColor: plan.color } : undefined}
  >
    <h3 id={`plan-${plan.id}-name`} className="sr-only">
      {plan.name}
    </h3>

    {plan.popular && (
      <div className="bg-gradient-to-r from-orange-dark via-orange-primary to-orange-dark py-1.5 text-center font-heading text-[15px] uppercase tracking-[0.15em] text-white">
        Most Popular
      </div>
    )}

    <div
      className="px-5 pb-3.5 pt-6 text-center"
      style={{
        background: `radial-gradient(340px 130px at 50% 0%, ${plan.color}14, #ffffff)`,
      }}
    >
      <img
        src={plan.sealImg}
        alt={plan.sealAlt}
        width={plan.sealWidth}
        height={plan.sealHeight}
        loading="lazy"
        className="mx-auto h-[160px] w-full max-w-[270px] object-contain drop-shadow-[0_6px_12px_rgba(15,37,71,0.26)]"
      />
    </div>

    <div
      className="px-5 pb-4 pt-4 text-center text-white"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.16), rgba(0,0,0,0.10)), ${plan.color}`,
      }}
    >
      <p className="flex flex-wrap items-end justify-center font-heading text-[54px] font-extrabold leading-[0.95]">
        <span className="self-start text-[26px] leading-none">$</span>
        <span>{plan.monthly}</span>
        <span className="pb-1.5 text-[15px] font-bold tracking-wide">/month</span>
      </p>
      <p className="mt-1.5 font-heading text-[11.5px] font-bold uppercase tracking-[0.09em] opacity-90">
        or ${plan.annual} billed annually
      </p>
    </div>

    <div className="flex min-h-[76px] items-center justify-center border-y border-slate-200 bg-[#F5F8FC] px-5 py-3.5 text-center">
      <span className="font-body text-[13px] leading-relaxed text-slate-600">
        <b className="block font-heading text-[11px] uppercase tracking-[0.1em] text-blue-primary-dark">
          Best for
        </b>
        {plan.bestFor}
      </span>
    </div>

    <div className="flex-1 px-[18px] pb-1">
      {plan.groups.map((group) => (
        <div key={group.label}>
          <p
            className="mx-auto mb-3 mt-[18px] rounded-full px-4 py-1.5 text-center font-heading text-[15px] uppercase leading-tight tracking-[0.1em] text-white"
            style={{ backgroundColor: group.green ? TIER_COLORS.green : plan.color }}
          >
            {group.label}
          </p>
          <ul className="m-0 list-none p-0">
            {group.items.map((item) => (
              <BenefitRow key={item.bold + item.sub} item={item} color={plan.color} />
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div
      className="mx-[18px] mt-4 flex items-center gap-3 rounded-xl border px-4 py-3.5"
      style={{ backgroundColor: `${plan.color}12`, borderColor: `${plan.color}33` }}
    >
      <span className="shrink-0" style={{ color: plan.color }}>
        <MembershipIcon name={plan.loyaltyIcon} className="h-10 w-10" strokeWidth={1.7} />
      </span>
      <div className="min-w-0">
        <p
          className="font-heading text-[32px] font-bold leading-none"
          style={{ color: plan.color }}
        >
          {plan.loyaltyCredit}
        </p>
        <p className="mt-1 font-body text-[11px] font-bold uppercase leading-[1.45] tracking-[0.07em] text-grey-color">
          Annual loyalty credit toward repairs, services, and new equipment
        </p>
      </div>
    </div>

    <div className="p-[18px]">
      <JoinButton full onClick={() => onChoosePlan(plan.formValue)}>
        Choose {plan.name}
      </JoinButton>
    </div>
  </article>
);

const MembershipPlanCards: React.FC<MembershipPlanCardsProps> = ({ onChoosePlan }) => (
  <section id="plans" className="relative overflow-hidden bg-[#F5F8FC] py-16">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[230px] bg-gradient-to-b from-blue-light to-transparent"
    />
    <div className="relative mx-auto max-w-[1200px] px-4">
      <SectionHeading
        eyebrow="More Protection. More Savings. Total Comfort."
        heading="Choose the Plan"
        headingThin="That Fits Your Home"
        lead="Every plan includes two HVAC tune-ups a year, priority repair scheduling, and an annual plumbing inspection. What changes is how much of your home is covered and how long your labor warranty runs."
      />

      <div className="mx-auto mt-11 grid max-w-[540px] grid-cols-1 items-stretch gap-[22px] [@media(min-width:1020px)]:max-w-none [@media(min-width:1020px)]:grid-cols-3">
        {MEMBERSHIP_PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onChoosePlan={onChoosePlan} />
        ))}
      </div>

      <p className="mx-auto mt-9 max-w-[900px] text-center font-body text-[12.5px] leading-relaxed text-grey-color">
        Labor warranty coverage lasts as long as your membership does. Pricing is per home. If
        your home has more than one HVAC system, call{' '}
        <a
          href={MEMBERSHIP_PHONE_HREF}
          className="font-bold text-blue-primary underline decoration-blue-primary/40 underline-offset-2 transition hover:text-blue-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-primary"
        >
          {MEMBERSHIP_PHONE_DISPLAY}
        </a>{' '}
        and we will confirm coverage for your setup.
      </p>
    </div>
  </section>
);

export default MembershipPlanCards;
