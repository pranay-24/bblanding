import React from 'react';
import { Link } from 'react-router-dom';
import { MEMBERSHIP_PHONE_DISPLAY, MEMBERSHIP_PHONE_HREF } from '../../config/membershipPlans';
import { scrollToAnchor, scrollToJoin } from './scrollToJoin';

const ANCHORS = [
  { label: 'Why a Plan', id: 'why' },
  { label: 'The Plans', id: 'plans' },
  { label: 'Your Savings', id: 'value' },
  { label: 'Compare', id: 'compare' },
  { label: 'Reviews', id: 'reviews' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms and Conditions', to: '/terms-and-conditions' },
  { label: 'Accessibility Statement', to: '/accessibility-statement' },
];

const focusClass =
  'rounded transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
const linkClass = `${focusClass} text-blue-light hover:text-orange-primary`;

const Dot: React.FC = () => (
  <span aria-hidden="true" className="text-white/30">
    &middot;
  </span>
);

const MembershipFooter: React.FC = () => (
  <footer className="bg-blue-primary-dark py-11 text-center text-blue-light">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <img
        src="/images/membership/logo.svg"
        alt="Blue Best Plumbing Heating Air Generators"
        width={360}
        height={99}
        loading="lazy"
        className="mx-auto h-[54px] w-auto opacity-95 [filter:brightness(0)_invert(1)]"
      />

      <nav
        aria-label="Membership sections"
        className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 font-body text-sm font-semibold"
      >
        {ANCHORS.map(({ label, id }, i) => (
          <React.Fragment key={id}>
            {i > 0 && <Dot />}
            <a href={`#${id}`} onClick={(e) => scrollToAnchor(id, e)} className={linkClass}>
              {label}
            </a>
          </React.Fragment>
        ))}
        <Dot />
        <button
          type="button"
          onClick={() => scrollToJoin()}
          className={`${focusClass} font-semibold text-orange-primary hover:text-white`}
        >
          Start My Membership
        </button>
      </nav>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 font-body text-sm">
        <span>600 N 500 W Suite D, Bountiful, UT 84010</span>
        <Dot />
        <a href={MEMBERSHIP_PHONE_HREF} className={linkClass}>
          {MEMBERSHIP_PHONE_DISPLAY}
        </a>
        <Dot />
        <a href="mailto:info@bluebest.com" className={linkClass}>
          info@bluebest.com
        </a>
      </div>

      <p className="mt-5 font-heading text-lg font-semibold tracking-[0.18em] text-white">
        SERVING THE ENTIRE WASATCH FRONT
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 font-body text-xs text-blue-light/70">
        <span>&copy; 2026 Blue Best Plumbing, Heating, Air, Generators. All rights reserved.</span>
        {LEGAL_LINKS.map(({ label, to }) => (
          <React.Fragment key={to}>
            <Dot />
            <Link to={to} className={linkClass}>
              {label}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  </footer>
);

export default MembershipFooter;
