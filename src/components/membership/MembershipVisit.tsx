import React from 'react';
import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

const CHECKLIST = [
  'Inspecting and replacing dirty air filters',
  'Checking thermostat operation and accuracy',
  'Inspecting and tightening electrical connections',
  'Lubricating applicable moving components',
  'Cleaning accessible condenser and evaporator components',
  'Evaluating airflow and overall system performance',
  'Checking for visible wear or developing problems',
];

const MembershipVisit: React.FC = () => (
  <section className="overflow-hidden bg-white py-14 sm:py-20">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <SectionHeading
        eyebrow="Inside a Tune-Up"
        heading="What Actually Happens"
        headingThin="on a Visit"
        lead="A tune-up is not a walk-through. Our technicians inspect the system, clean accessible components, evaluate performance, and flag anything that could turn into a larger problem."
      />

      <div className="mt-10 grid items-center gap-8 min-[880px]:mt-12 min-[880px]:grid-cols-[1.05fr_0.95fr] min-[880px]:gap-11">
        <ul className="m-0 list-none p-0">
          {CHECKLIST.map((item, i) => (
            <li
              key={item}
              className={`m-0 flex items-start gap-3 py-3 font-body text-[15px] leading-relaxed text-grey-color ${
                i < CHECKLIST.length - 1 ? 'border-b border-blue-light' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="mt-[3px] inline-flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-orange-primary text-white"
              >
                <Check className="h-[13px] w-[13px]" strokeWidth={3.5} />
              </span>
              <span className="font-body">{item}</span>
            </li>
          ))}
        </ul>

        <div className="overflow-hidden rounded-2xl shadow-[0_18px_42px_rgba(20,45,80,0.24)]">
          <img
            src="/images/membership/Cooling.webp"
            alt="Residential air conditioning condenser unit"
            width={400}
            height={365}
            loading="lazy"
            className="block h-[240px] w-full object-cover sm:h-[320px]"
          />
          <div className="bg-gradient-to-b from-blue-primary-dark to-[#00234C] px-6 py-6 sm:px-7">
            <h3 className="mb-0 font-heading text-[22px] font-bold leading-snug text-white sm:text-2xl">
              You Do Not Have to Remember Any of It
            </h3>
            <p className="mb-0 mt-2.5 font-body text-sm leading-relaxed text-blue-light">
              Blue Best calls you to schedule both visits. Cooling in the spring or summer, heating
              in the fall or winter. You pick the time that works and we handle the rest.
            </p>
            <p className="mb-0 mt-2.5 font-body text-sm leading-relaxed text-blue-light">
              Servicing equipment annually can extend its life and reliability, lower utility bills,
              and improve safety. That is the whole point of putting it on a schedule instead of
              waiting for a breakdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MembershipVisit;
