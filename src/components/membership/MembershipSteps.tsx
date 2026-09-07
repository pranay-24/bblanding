import React from 'react';
import SectionHeading from './SectionHeading';

const STEPS = [
  {
    title: 'Pick Your Plan',
    text: 'Safety, 360 Home Comfort, or Signature. If you are not sure which fits, call and we will match it to your home.',
  },
  {
    title: 'We Call You to Schedule',
    text: 'No reminders to set. Blue Best reaches out to book both visits around your calendar.',
  },
  {
    title: 'Twice a Year, Handled',
    text: 'Cooling in the spring, heating in the fall, and priority access any time something goes wrong in between.',
  },
];

const MembershipSteps: React.FC = () => (
  <section className="overflow-hidden bg-blue-light py-14 sm:py-20">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <SectionHeading heading="Here's How" headingThin="Easy It Is" />

      <ol className="mx-auto mt-10 grid max-w-[940px] list-none gap-6 p-0 min-[680px]:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="m-0 text-center">
            <div className="mx-auto mb-3.5 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-gradient-to-b from-blue-primary to-blue-primary-dark font-heading text-[32px] font-bold leading-none text-white shadow-[0_6px_16px_rgba(26,59,110,0.34)]">
              {i + 1}
            </div>
            <h3 className="mb-0 font-heading text-xl font-bold leading-snug text-blue-primary-dark">
              {step.title}
            </h3>
            <p className="mx-auto mb-0 mt-2 max-w-[34ch] font-body text-sm leading-relaxed text-grey-color">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      <p className="mb-0 mt-9 text-center font-heading text-xl font-bold tracking-[0.18em] text-orange-dark sm:text-2xl sm:tracking-[0.22em]">
        SIMPLE. SCHEDULED. DONE RIGHT.
      </p>
    </div>
  </section>
);

export default MembershipSteps;
