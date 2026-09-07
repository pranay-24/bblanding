import React from 'react';

interface Props {
  eyebrow?: string;
  /** Rendered in blue-primary-dark. */
  heading: string;
  /** Rendered lighter, appended after the heading. */
  headingThin?: string;
  lead?: string;
  /** Dark section variant: light text on navy. */
  dark?: boolean;
  ornament?: boolean;
  className?: string;
}

const SectionHeading: React.FC<Props> = ({
  eyebrow,
  heading,
  headingThin,
  lead,
  dark = false,
  ornament = true,
  className = '',
}) => (
  <div className={`text-center ${className}`}>
    {eyebrow && (
      <div
        className={`font-heading text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? 'text-orange-primary' : 'text-blue-primary'
        }`}
      >
        {eyebrow}
      </div>
    )}
    <h2
      className={`mx-auto mt-3 max-w-[24ch] font-heading text-3xl font-bold leading-tight sm:max-w-none sm:text-4xl ${
        dark ? 'text-white' : 'text-blue-primary-dark'
      }`}
    >
      {heading}
      {headingThin && (
        <>
          {' '}
          <span
            className={`font-heading font-light ${dark ? 'text-blue-light' : 'text-blue-primary'}`}
          >
            {headingThin}
          </span>
        </>
      )}
    </h2>
    {ornament && (
      <img
        src="/images/membership/ornament.svg"
        alt=""
        width={92}
        height={97}
        loading="lazy"
        className="mx-auto mt-3 h-6 w-auto opacity-70"
      />
    )}
    {lead && (
      <p
        className={`mx-auto mt-4 max-w-[70ch] font-body text-base leading-relaxed ${
          dark ? 'text-blue-light' : 'text-grey-color'
        }`}
      >
        {lead}
      </p>
    )}
  </div>
);

export default SectionHeading;
