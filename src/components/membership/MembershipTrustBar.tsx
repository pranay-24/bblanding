import React from 'react';

const TRUST_ITEMS: React.ReactNode[] = [
  <>
    <b className="font-extrabold text-orange-primary">3x</b> Best of State, Heating &amp; Air
  </>,
  <>
    Best of SLC <b className="font-extrabold text-orange-primary">2025</b>
  </>,
  <>
    Utah&apos;s Only <b className="font-extrabold text-orange-primary">Women-Owned</b> HVAC Company
  </>,
  <>
    <b className="font-extrabold text-orange-primary">5.0</b> ★ 2,900+ Reviews
  </>,
];

const Divider: React.FC = () => (
  <span
    aria-hidden="true"
    className="hidden h-[30px] w-px shrink-0 bg-white/20 min-[760px]:block"
  />
);

const MembershipTrustBar: React.FC = () => (
  <div className="border-t-[3px] border-orange-primary bg-blue-primary-dark py-4 text-blue-light">
    <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-center gap-x-4 gap-y-3 px-[22px]">
      <img
        src="/images/membership/2025-Best-Of-State.png"
        alt="2025 Best of State winner"
        width={183}
        height={159}
        loading="lazy"
        className="h-[52px] w-auto shrink-0"
      />
      {TRUST_ITEMS.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Divider />}
          <span className="text-center font-body text-[11px] font-extrabold uppercase tracking-[0.12em] min-[760px]:whitespace-nowrap min-[760px]:tracking-[0.05em]">
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default MembershipTrustBar;
