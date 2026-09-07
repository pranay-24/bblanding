import React from 'react';
import { MEMBERSHIP_PHONE_DISPLAY, MEMBERSHIP_PHONE_HREF } from '../../config/membershipPlans';
import { JoinButton } from './MembershipCTA';

export const STICKY_CTA_HEIGHT = 66;

const MembershipStickyCTA: React.FC = () => (
  <div
    style={{ height: STICKY_CTA_HEIGHT }}
    className="fixed inset-x-0 bottom-0 z-[70] flex items-stretch gap-2 bg-blue-primary-dark/95 px-3 py-2.5 shadow-[0_-4px_18px_rgba(0,0,0,0.3)] backdrop-blur-sm min-[760px]:hidden"
  >
    <a
      href={MEMBERSHIP_PHONE_HREF}
      className="flex min-w-0 flex-1 items-center justify-center rounded-lg bg-white px-2 font-heading text-sm font-semibold tracking-[0.02em] text-blue-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      Call {MEMBERSHIP_PHONE_DISPLAY}
    </a>
    <JoinButton size="md" className="min-w-0 flex-1">
      Start Membership
    </JoinButton>
  </div>
);

export default MembershipStickyCTA;
