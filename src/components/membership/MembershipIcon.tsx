import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  CalendarCheck,
  AirVent,
  Droplets,
  ShowerHead,
  Clock,
  ShieldCheck,
  Wrench,
  ClipboardList,
  Percent,
  Truck,
  Moon,
  DollarSign,
  Gift,
} from 'lucide-react';
import type { BenefitIcon } from '../../config/membershipPlans';

const ICONS: Record<BenefitIcon, LucideIcon> = {
  CalendarCheck,
  AirVent,
  Droplets,
  ShowerHead,
  Clock,
  ShieldCheck,
  Wrench,
  ClipboardList,
  Percent,
  Truck,
  Moon,
  DollarSign,
  Gift,
};

interface Props {
  name: BenefitIcon;
  className?: string;
  strokeWidth?: number;
}

const MembershipIcon: React.FC<Props> = ({ name, className = '', strokeWidth = 2 }) => {
  const Cmp = ICONS[name];
  return <Cmp className={className} strokeWidth={strokeWidth} />;
};

export default MembershipIcon;
