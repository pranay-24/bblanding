import React from 'react';
import { MEMBERSHIP_PHONE_DISPLAY, MEMBERSHIP_PHONE_HREF } from '../../config/membershipPlans';
import { scrollToJoin } from './scrollToJoin';

type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children?: React.ReactNode;
  size?: Size;
  full?: boolean;
  className?: string;
  onClick?: () => void;
}

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-lg',
};

/** Orange CTA that scrolls to the form card. */
export const JoinButton: React.FC<ButtonProps> = ({
  children = 'Start My Membership',
  size = 'lg',
  full = false,
  className = '',
  onClick,
}) => (
  <button
    type="button"
    onClick={() => {
      onClick?.();
      scrollToJoin();
    }}
    className={`inline-flex items-center justify-center gap-2 rounded-lg bg-orange-primary font-heading font-semibold text-white shadow-md transition hover:bg-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark ${
      SIZES[size]
    } ${full ? 'w-full' : ''} ${className}`}
  >
    {children}
  </button>
);

interface CallBoxProps {
  dark?: boolean;
  className?: string;
}

/** Phone block: big number over a small "CALL US TODAY" line. */
export const CallBox: React.FC<CallBoxProps> = ({ dark = false, className = '' }) => (
  <a
    href={MEMBERSHIP_PHONE_HREF}
    className={`inline-flex flex-col rounded-lg border px-5 py-2.5 font-heading leading-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
      dark
        ? 'border-white/30 text-white hover:border-white/60 focus-visible:outline-white'
        : 'border-blue-primary/30 text-blue-primary-dark hover:border-blue-primary focus-visible:outline-blue-primary'
    } ${className}`}
  >
    <span className="text-lg font-bold">{MEMBERSHIP_PHONE_DISPLAY}</span>
    <span
      className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
        dark ? 'text-blue-light' : 'text-grey-color'
      }`}
    >
      Call Us Today
    </span>
  </a>
);
