import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

const REVIEWS = [
  {
    name: 'Jeffery Hansen',
    text: 'Just had Roger Pay, our technician, complete summer service on our new Heat Pump System. He was courteous and thorough, but most importantly, professional. You can trust BLUE BEST!',
  },
  {
    name: 'Michael Nelson',
    text: "I've had Blue Best out many times for both HVAC and plumbing. Every time, they've been amazing. From phone calls to completing work, they're professional, friendly, clean, and helpful.",
  },
  {
    name: 'Marian Young',
    text: 'We used Blue Best for many projects in our home, including HVAC. Shawn was knowledgeable and explained everything.',
  },
  {
    name: 'Aaron',
    text: 'I have been using these people for 3 years. Customer service is outstanding, and they were able to give me advice on my issue until they came out.',
  },
];

/** `,1,` in the lrd fragment opens the reviews list on the Google listing. */
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=bluebest&oq=bluebest&sourceid=chrome&ie=UTF-8#lrd=0x8752ff4365496a3f:0x5129267295c0c9fd,1,,,,';

const Stars: React.FC<{ className?: string; size?: string }> = ({
  className = '',
  size = 'h-4 w-4',
}) => (
  <div className={`flex gap-0.5 text-orange-primary ${className}`} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className={`${size} fill-current`} strokeWidth={0} />
    ))}
  </div>
);

const MembershipReviews: React.FC = () => (
  <section id="reviews" className="overflow-hidden border-t border-blue-light bg-white py-14 scroll-mt-24 sm:py-20">
    <div className="mx-auto w-full max-w-[1160px] px-[22px]">
      <SectionHeading
        eyebrow="2,900+ Five-Star Reviews"
        heading="What Homeowners"
        headingThin="Are Saying"
        ornament={false}
      />

      <div className="mt-4 flex items-center justify-center gap-2.5">
        <Stars size="h-[22px] w-[22px]" />
        <span className="font-heading text-xl font-semibold tracking-wide text-blue-primary-dark sm:text-2xl">
          5.0 &middot; 2,900+ Reviews
        </span>
      </div>

      <div className="mt-8 grid gap-4 min-[560px]:grid-cols-2 min-[980px]:grid-cols-4">
        {REVIEWS.map((review) => (
          <figure
            key={review.name}
            className="m-0 flex h-full flex-col rounded-2xl border border-blue-primary/10 bg-white p-5 shadow-[0_4px_16px_rgba(20,45,80,0.07)]"
          >
            <Stars className="mb-2.5" />
            <blockquote className="m-0 flex-grow font-body text-[13.5px] leading-relaxed text-grey-color">
              {review.text}
            </blockquote>
            <figcaption className="mt-3 font-heading text-sm font-bold text-blue-primary-dark">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-orange-primary px-7 py-3.5 font-heading text-lg font-semibold text-white shadow-md transition hover:bg-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <img src="/google-g-logo.svg" alt="" width={16} height={16} className="h-4 w-4" />
          </span>
          See All 2,900+ Google Reviews
        </a>
        <span className="font-body text-[13px] text-grey-color">
          Opens our Google listing in a new tab
        </span>
      </div>
    </div>
  </section>
);

export default MembershipReviews;
