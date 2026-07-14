import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, MapPin, Star, CalendarCheck, ClipboardList, Sofa } from 'lucide-react';
import QuiltForm from '../components/quilt/QuiltForm';
import FeaturesSection from '../components/FeaturesSection';

const PHONE = '(385) 200-2604';
const PHONE_TEL = 'tel:+13852002604';

const scrollToForm = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById('assessment-form');
  if (el) {
    const navOffset = document.querySelector('header')?.offsetHeight ?? 90;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const CTAButton: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => (
  <button
    onClick={scrollToForm}
    className={`inline-flex items-center justify-center gap-2 rounded-lg bg-orange-primary px-7 py-3.5 font-heading text-lg font-semibold text-white shadow-md transition hover:bg-orange-dark ${className}`}
  >
    {children}
  </button>
);

const MEET_QUILT = [
  {
    title: 'Indoor Unit',
    text: 'Slim, quiet, and under 8 inches tall',
    img: '/images/quilt/img-02.webp',
    alt: 'Quilt indoor unit mounted on a wood slat wall',
  },
  {
    title: 'Outdoor Unit',
    text: 'Quietly harmonizes with your exterior',
    img: '/images/quilt/img-03.webp',
    alt: 'Quilt outdoor unit beside a home exterior',
  },
  {
    title: 'Quilt Dial',
    text: 'Room-by-room control at a touch',
    img: '/images/quilt/img-04.webp',
    alt: 'Hand turning the Quilt Dial on a wall',
  },
  {
    title: 'Quilt App',
    text: 'Control from anywhere, see usage by room',
    img: '/images/quilt/img-05.webp',
    alt: 'Quilt app showing energy usage on a phone',
  },
];

const WHY_QUILT = [
  {
    title: 'Reliably cozy, no matter the weather',
    text: 'Quilt is cold-climate certified and delivers 100% heating power even when temperatures drop below zero. A bitter January morning or a humid July afternoon, your home stays comfortable.',
    img: '/images/quilt/img-06.webp',
    alt: 'Quilt outdoor unit covered in snow',
  },
  {
    title: 'Designed to disappear',
    text: "Under 8 inches tall, Quilt's indoor unit fits where other systems can't, even above doors and windows. Covers come in oak or paintable white, so it matches your walls instead of fighting them.",
    img: '/images/quilt/img-07.webp',
    alt: 'Quilt indoor unit with a cover that matches the wallpaper',
  },
  {
    title: 'Rediscover every room',
    text: 'Turn chilly corners and hot spaces into your favorite rooms. Quilt quietly warms or cools the rooms you avoid. Upgrade one room or your whole home for comfort you will wonder how you lived without.',
    img: '/images/quilt/img-08.webp',
    alt: 'A mother and son reading on a bed with a Quilt unit above',
  },
  {
    title: 'Lower bills, higher comfort',
    text: 'Quilt is the most efficient heat pump on the market, with a SEER2 rating of 25 and up. Homeowners are seeing lower energy bills and higher comfort from one all-electric system.',
    img: '/images/quilt/img-09.webp',
    alt: 'A person relaxing while using the Quilt app',
  },
  {
    title: 'Smart enough to save on its own',
    text: "Quilt's Auto-Away senses empty rooms and stops heating and cooling them automatically. Control your climate from anywhere and see energy use room by room, right from the Quilt app.",
    img: '/images/quilt/img-10.webp',
    alt: 'A family in a kitchen with a Quilt unit with a white oak cover',
  },
  {
    title: 'Installed by the team Utah trusts',
    text: "Your Quilt system is installed by Blue Best, Utah's Best of State team, and backed by Quilt's manufacturer warranty and remote diagnostics. Most homes are upgraded in days.",
    img: '/images/quilt/img-11.webp',
    alt: 'Two licensed installers mounting a Quilt indoor unit',
  },
];

const GALLERY = [
  { img: '/images/quilt/img-12.webp', alt: 'A family in a kitchen with a Quilt unit with a white oak cover' },
  { img: '/images/quilt/img-13.webp', alt: 'Quilt indoor unit mounted on a wood slat wall' },
  { img: '/images/quilt/img-14.webp', alt: 'Bedroom with a Quilt unit' },
  { img: '/images/quilt/img-15.webp', alt: 'Quilt outdoor unit on a wooden deck' },
];

const ASSESSMENT_POINTS = [
  {
    title: 'A room-by-room home assessment',
    text: 'We pinpoint which rooms run hot or cold, and why.',
  },
  {
    title: 'A custom Quilt comfort plan',
    text: 'Sized to your home with a Manual J load calculation, never a guess.',
  },
  {
    title: 'A clear, upfront quote',
    text: 'Honest pricing and financing options, with zero pressure to buy.',
  },
];

const STATS = [
  { big: '25+', label: 'SEER2', text: 'The most efficient 2 and 3-zone system on the market' },
  { big: '100%', label: 'Heating Power', text: 'Even when it drops below zero' },
  { big: 'Auto-Away', label: 'Smart Sensing', text: 'Stops heating and cooling empty rooms' },
];

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

const STEPS = [
  { icon: CalendarCheck, title: 'Book your free in-home assessment' },
  { icon: ClipboardList, title: 'Get your room-by-room plan and upfront quote' },
  { icon: Sofa, title: 'Enjoy room-by-room comfort' },
];

const Stars: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex text-orange-primary ${className}`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" />
    ))}
  </div>
);

const QuiltLandingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blue Best × Quilt — Room-by-Room Home Comfort | Salt Lake City</title>
        <meta
          name="description"
          content="Fix that one room that's always too hot or too cold. Quilt's smart heat-pump system, installed by Blue Best. Book your free in-home assessment."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-primary-dark to-blue-primary pt-[150px] min-[1150px]:pt-[140px] pb-16">
        <img
          src="/images/quilt/bg-00.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-body text-sm font-medium text-blue-primary-dark">
              <img src="/images/New-Logo_w6yqqg.svg" alt="Blue Best" className="h-6 w-auto" />
              ×
              <svg
                width="62"
                height="22"
                viewBox="0 0 62 22"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-auto text-black"
                fill="currentColor"
                role="img"
                aria-label="Quilt"
              >
                <path
                  d="M22.1791 18.9495V21.7107H10.891C4.37476 21.7107 0 16.7306 0 10.591C0 4.4515 4.76725 0 10.4928 0C16.7646 0 21.1393 4.7249 21.1393 10.9246C21.1393 15.1696 18.867 18.8225 13.5214 18.8225C15.8086 17.4124 17.0779 14.3165 17.0779 10.6421C17.0779 5.60068 14.5715 1.75837 10.557 1.75837C6.54264 1.75837 4.03507 5.60068 4.03507 10.6421C4.03507 16.194 6.56674 19.8162 11.7827 19.8162C15.2417 19.8162 22.1779 18.9495 22.1779 18.9495H22.1791ZM29.1383 21.9989C31.2706 21.9989 33.023 20.2984 34.1041 19.1424V21.7096H37.4345V6.86897H34.1041V17.1912C33.1986 18.5774 31.8249 19.1117 30.2481 19.1117C28.4956 19.1117 27.5018 18.1305 27.5018 16.3687V6.86897H24.1714V17.004C24.1714 20.0363 25.9536 22 29.1372 22L29.1383 21.9989ZM40.7512 4.14407H44.3065V0.629609H40.7512V4.14407ZM44.1941 21.7107V6.86897H40.8636V21.7107H44.1941ZM50.9513 21.7107V0.629609H47.6209V21.7107H50.9513ZM57.7453 19.6529V9.4101H61.2857V7.43959H57.7453V2.73851H54.3862V17.6971C54.3862 20.4118 56.0227 21.7107 58.4178 21.7107H61.2834V19.2762L57.7453 19.6529Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Every Home Has That One Room
            </h1>
            <p className="mt-4 max-w-xl font-body text-lg text-blue-light">
              Too cold in the winter. Too hot in the summer. The room nobody wants to sit in. Now
              you can fix it, room by room, with{' '}
              <span className="font-bold text-orange-primary">Quilt</span> — the smartest home
              comfort system available, installed by Blue Best.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <CTAButton>Book My Free In-Home Assessment</CTAButton>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-white hover:text-blue-light"
              >
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
            </div>
            <p className="mt-5 font-body text-sm font-semibold text-orange-primary">
              Now booking summer installs. Only a few free assessments open each week.
            </p>
          </div>

          <div id="assessment-form" className="flex justify-center lg:justify-end scroll-mt-28">
            <QuiltForm />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-blue-primary-dark py-3 text-center font-body text-sm font-semibold text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
          <span>Women-Owned &amp; Operated</span>
          <span className="text-white/40">|</span>
          <span>Best of State Winner</span>
          <span className="text-white/40">|</span>
          <span className="inline-flex items-center gap-1">
            <Stars /> 5.0 · 2,700+ Reviews
          </span>
        </div>
      </div>

      {/* ASSESSMENT VALUE */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/images/quilt/img-01.svg"
              alt="Room by room temperature control: 68, 72, and 73 degrees in three rooms"
              className="mx-auto w-full max-w-md"
            />
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-orange-primary">
                Your Free In-Home Assessment
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">
                No Guesswork.
                <br />
                A Real Plan to Fix It.
              </h2>
              <p className="mt-4 font-body text-lg text-grey-color">
                Your free consultation is a no-cost, no-obligation visit from a Blue Best comfort
                specialist. Here is exactly what you walk away with:
              </p>
              <ul className="list-none pl-4 mt-6 space-y-3">
                {ASSESSMENT_POINTS.map((p) => (
                  <li key={p.title} className="relative pl-6 font-body text-grey-color">
                    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center" />
                    <span className="font-heading font-semibold text-blue-primary-dark">{p.title}</span>{' '}
                    — {p.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MEET QUILT */}
      <section className="bg-blue-light/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">Meet Quilt</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-color">
            Four parts working as one: the indoor unit, the outdoor unit, the Dial, and the app
            deliver the world's smartest home climate system.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MEET_QUILT.map(({ title, text, img, alt }) => (
              <div key={title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <img src={img} alt={alt} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-blue-primary-dark">{title}</h3>
                  <p className="mt-1 font-body text-sm text-grey-color">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY QUILT */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">
            Why Homeowners Are Choosing Quilt
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_QUILT.map(({ title, text, img, alt }) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md"
              >
                <img src={img} alt={alt} className="h-72 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-blue-primary-dark">{title}</h3>
                  <p className="mt-2 font-body text-sm text-grey-color">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-blue-light/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">
            See Quilt in Real Homes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-color">
            Kitchens, bedrooms, offices, and additions. Quilt fits the room and the look.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY.map((g) => (
              <img
                key={g.img}
                src={g.img}
                alt={g.alt}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-primary-dark py-14">
        <div className="container mx-auto grid gap-8 px-4 text-center text-white md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-4xl font-bold text-orange-primary sm:text-5xl">{s.big}</div>
              <div className="mt-1 font-heading text-lg font-semibold">{s.label}</div>
              <p className="mt-1 font-body text-sm text-blue-light">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID CTA BAND */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">
            Comfort, One Room at a Time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-color">
            Book a free in-home assessment and get a room-by-room comfort plan with an upfront quote.
            No cost, no obligation, and no pressure.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <CTAButton>Book My Free Assessment</CTAButton>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-blue-primary hover:text-blue-primary-dark"
            >
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="bg-[url('/images/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
        <FeaturesSection />
      </div>

      {/* REVIEWS */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">
            What Homeowners Are Saying
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 font-body text-grey-color">
            <Stars /> <span className="font-semibold">5.0</span> (2,700+ reviews)
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="flex flex-col rounded-2xl border border-gray-100 p-6 shadow-sm">
                <Stars className="mb-3" />
                <p className="flex-grow font-body text-sm text-grey-color">{r.text}</p>
                <p className="mt-4 font-heading font-semibold text-blue-primary-dark">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-blue-primary-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Here's How Easy It Is</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title }, i) => (
              <div key={title} className="flex flex-col items-center">
                <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-primary">
                  <Icon className="h-8 w-8 text-white" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white font-heading text-sm font-bold text-blue-primary-dark">
                    {i + 1}
                  </span>
                </div>
                <p className="max-w-xs font-body text-lg text-blue-light">{title}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-sm text-blue-light/80">
            Flexible financing available on approved credit
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-blue-primary-dark sm:text-4xl">
            Rediscover Every Room in Your Home
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-grey-color">
            Book your free in-home assessment with Utah's Best of State team. You get a room-by-room
            plan and an upfront quote, with no obligation to buy.
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton>Book My Free Assessment</CTAButton>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-sm text-grey-color">
            <span className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4 text-blue-primary" /> {PHONE}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4 text-blue-primary" /> 600 N 500 W Suite D, Bountiful, UT 84010
            </span>
            <span>Serving the entire Wasatch Front</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuiltLandingPage;
