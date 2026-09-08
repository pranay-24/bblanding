import React from 'react';

export type ShieldTone = 'blue' | 'red';

const TONES: Record<ShieldTone, { light: string; dark: string }> = {
  blue: { light: '#0A3FA0', dark: '#04205F' },
  red: { light: '#7C1112', dark: '#430A0B' },
};

const SHIELD_PATH =
  'M8 6h20.5l3.5 4 3.5-4H56v30.5c0 12.4-8.3 21.7-24 28.5C16.3 58.2 8 48.9 8 36.5V6z';

interface MembershipYearShieldProps {
  years: number;
  tone: ShieldTone;
  label?: string;
  className?: string;
}

const MembershipYearShield: React.FC<MembershipYearShieldProps> = ({
  years,
  tone,
  label,
  className,
}) => {
  const id = `year-shield-${tone}-${years}`;
  const colors = TONES[tone];
  return (
    <svg
      viewBox="0 0 64 72"
      role="img"
      aria-label={label ?? `${years} year`}
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors.light} />
          <stop offset="100%" stopColor={colors.dark} />
        </linearGradient>
      </defs>

      <path d={SHIELD_PATH} fill="#EDEFF3" transform="translate(32 36) scale(1.09) translate(-32 -36)" />
      <path d={SHIELD_PATH} fill={`url(#${id})`} />
      <path
        d={SHIELD_PATH}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeOpacity="0.85"
        transform="translate(32 36) scale(0.85) translate(-32 -36)"
      />

      <text
        x="32"
        y="37"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Kanit, sans-serif"
        fontSize={years >= 10 ? 24 : 27}
        fontWeight="700"
      >
        {years}
      </text>
      <text
        x="32"
        y="52"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Kanit, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.6"
      >
        YEAR
      </text>
    </svg>
  );
};

export default MembershipYearShield;
