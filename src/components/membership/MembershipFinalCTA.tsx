import React from 'react';
import { JoinButton, CallBox } from './MembershipCTA';

const MembershipFinalCTA: React.FC = () => (
  <section className="relative overflow-hidden border-t-[3px] border-orange-primary bg-gradient-to-br from-blue-primary-dark to-[#00224A] py-14 sm:py-[66px]">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(600px_260px_at_50%_0%,rgba(247,148,29,0.18),transparent_70%)]"
    />
    <div className="relative z-10 mx-auto w-full max-w-[1160px] px-[22px] text-center">
      <img
        src="/images/membership/best-of-state-award-2023-compressed.webp"
        alt="Best of State award medal"
        width={520}
        height={520}
        loading="lazy"
        className="mx-auto mb-4 block h-auto w-[110px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] sm:w-[132px]"
      />
      <h2 className="mb-0 font-heading text-3xl font-bold leading-tight text-white sm:text-[46px]">
        Put Your Mind to Rest
      </h2>
      <p className="mx-auto mb-0 mt-3.5 max-w-[660px] font-body text-base leading-relaxed text-blue-light sm:text-[17px]">
        Two visits a year, the front of the line when it matters, and a labor warranty that holds as
        long as you do. Pick the plan that fits your home.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
        <JoinButton size="lg">Start My Membership</JoinButton>
        <CallBox dark />
      </div>

      <p className="mx-auto mb-0 mt-7 max-w-[760px] font-body text-[13px] leading-relaxed text-blue-light/70">
        Best of State award winner for Heating and Air, three-time and current &middot; Best of SLC
        2025 &middot; Women-owned and operated &middot; Serving the entire Wasatch Front
      </p>
    </div>
  </section>
);

export default MembershipFinalCTA;
