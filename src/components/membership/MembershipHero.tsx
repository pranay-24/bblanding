import React from 'react';
import { CallBox, JoinButton } from './MembershipCTA';

interface MembershipHeroProps {
  form: React.ReactNode;
}

const HERO_CHIPS: React.ReactNode[] = [
  'Women-Owned & Operated',
  <>
    <b className="font-extrabold text-orange-primary">Best of State</b> Winner
  </>,
  '5.0 ★ 2,900+ Reviews',
];

const MembershipHero: React.FC<MembershipHeroProps> = ({ form }) => (
  <section className="relative overflow-hidden bg-blue-primary-dark py-9 text-white min-[640px]:py-[52px]">
    <img
      src="/images/membership/Blue-Best.06_1200px.webp"
      alt=""
      aria-hidden="true"
      width={1200}
      height={800}
      loading="eager"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover object-[center_46%]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,53,114,0.95)_0%,rgba(0,53,114,0.89)_34%,rgba(0,53,114,0.66)_62%,rgba(0,53,114,0.45)_100%)]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(700px_300px_at_18%_8%,rgba(247,148,29,0.18),transparent_70%)]"
    />

    <div className="relative z-[2] mx-auto w-full max-w-[1160px] px-[22px]">
      <div className="grid items-center gap-8 min-[1000px]:grid-cols-[1.1fr_430px] min-[1000px]:gap-[46px]">
        <div>
          <div className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-orange-primary">
            Blue Best Membership Plans
          </div>

          <h1 className="mt-3 font-heading text-[40px] font-bold leading-[1.05] [text-shadow:0_3px_26px_rgba(0,0,0,0.4)] min-[640px]:text-[54px] min-[1000px]:text-[64px]">
            Two Visits a Year.
            <span className="block text-orange-primary">No Bad Surprises.</span>
          </h1>

          <p className="mt-4 max-w-[560px] font-body text-lg leading-relaxed text-blue-light">
            Membership puts your heating, cooling, and plumbing on a schedule, moves you to the
            front of the line when something breaks, and keeps your labor warranty in force for as
            long as you stay on the plan.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-[999px] border border-white/30 bg-white/[0.13] py-2 pl-5 pr-2.5 font-body text-sm font-bold">
            <span>
              Plans from <b className="font-heading text-[28px] font-bold leading-none">$17</b>/mo
            </span>
            <span className="rounded-[999px] bg-orange-primary px-3 py-1 font-body text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">
              2 Visits a Year
            </span>
          </div>

          <p className="mt-4 font-heading text-xl font-semibold tracking-[0.02em] text-orange-primary">
            Put Your Mind to Rest: Call Blue Best!
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <JoinButton size="lg">Start My Membership</JoinButton>
            <CallBox dark />
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {HERO_CHIPS.map((chip, i) => (
              <span
                key={i}
                className="rounded-[5px] border border-white/25 bg-white/10 px-3 py-1.5 font-body text-[11px] font-extrabold uppercase tracking-[0.09em]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0">{form}</div>
      </div>
    </div>
  </section>
);

export default MembershipHero;
