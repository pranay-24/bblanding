import React from 'react';
import { Link } from 'react-router-dom';
import { CallBox, JoinButton } from './MembershipCTA';
import { scrollToAnchor } from './scrollToJoin';

const NAV_LINKS = [
  { label: 'Why a Plan', id: 'why' },
  { label: 'The Plans', id: 'plans' },
  { label: 'Your Savings', id: 'value' },
  { label: 'Compare', id: 'compare' },
  { label: 'Reviews', id: 'reviews' },
];

const MembershipNav: React.FC = () => (
  <header
    id="membership-nav"
    className="sticky top-0 z-[60] border-b border-blue-light bg-white shadow-nav"
  >
    <div className="mx-auto flex w-full max-w-[1160px] items-center gap-4 px-[22px] py-2.5">
      <Link
        to="/"
        className="shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-primary"
      >
        <img
          src="/images/membership/logo.svg"
          alt="Blue Best Plumbing Heating Air Generators"
          width={360}
          height={99}
          loading="lazy"
          className="h-9 w-auto min-[700px]:h-12"
        />
      </Link>

      <nav
        aria-label="Membership sections"
        className="hidden shrink-0 items-center gap-[14px] min-[1080px]:flex"
      >
        {NAV_LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToAnchor(id, e)}
            className="whitespace-nowrap rounded font-body text-xs font-bold uppercase tracking-[0.04em] text-blue-primary-dark transition hover:text-orange-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="ml-auto flex shrink-0 items-center gap-3">
        <CallBox compact />
        <div className="hidden min-[700px]:block">
          <JoinButton size="sm">Start My Membership</JoinButton>
        </div>
      </div>
    </div>
  </header>
);

export default MembershipNav;
