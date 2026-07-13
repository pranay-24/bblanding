import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Clock, ChevronRight, ChevronLeft, Loader2, CheckCircle2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  preferredDate: string;
  preferredTime: string;
  company: string; // honeypot
}

const TIME_SLOTS = [
  '8:00 AM – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[\d\s()+-]{10,}$/;
const zipRe = /^\d{5}(-\d{4})?$/;

const toE164 = (raw: string) => {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return raw.trim().startsWith('+') ? raw.trim() : `+1${digits}`;
};

const inputBase =
  'w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 py-3 font-body text-base text-gray-900 placeholder-gray-400 focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/30 focus:outline-none transition';

const QuiltForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    preferredDate: '',
    preferredTime: '',
    company: '',
  });

  const todayISO = new Date().toISOString().split('T')[0];

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = () => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!data.firstName.trim()) next.firstName = 'First name is required';
    if (!data.lastName.trim()) next.lastName = 'Last name is required';
    if (!emailRe.test(data.email)) next.email = 'Enter a valid email address';
    if (!phoneRe.test(data.phone)) next.phone = 'Enter a valid phone number';
    if (!data.street.trim()) next.street = 'Street address is required';
    if (!data.city.trim()) next.city = 'City is required';
    if (!data.state.trim()) next.state = 'State is required';
    if (!zipRe.test(data.zip.trim())) next.zip = 'Enter a valid ZIP code';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateStep2 = () => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!data.preferredDate) next.preferredDate = 'Pick a preferred date';
    if (!data.preferredTime) next.preferredTime = 'Pick a preferred time';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          phone: toE164(data.phone),
          sourcePageUrl: window.location.href,
          sourcePageTitle: document.title,
        }),
      });
      if (!res.ok) throw new Error('Request failed');

      // No route change on success (stays on /quilt), so fire the same
      // conversion pixels the shared /thank-you page normally fires on load.
      window.fbq?.('track', 'Lead', {
        content_name: 'Quilt Partnership Lead',
        source: 'quilt',
        value: 1.0,
        currency: 'USD',
      });
      window.gtag?.('event', 'conversion', { send_to: 'AW-396446063/7BpGCMTNsd8aEO-Shb0B' });

      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or call us directly.');
      setSubmitting(false);
    }
  };

  const err = (f: keyof FormData) =>
    errors[f] ? <p className="mt-1 font-body text-sm text-red-600">{errors[f]}</p> : null;

  if (submitted) {
    return (
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.12)] sm:p-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-primary/10 text-blue-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-blue-primary-dark">
          You're Booked, {data.firstName}!
        </h3>
        <p className="mt-3 font-body text-grey-color">
          Thanks for booking your free in-home comfort assessment with Blue Best × Quilt. A
          comfort specialist will call you shortly to confirm{' '}
          <span className="font-semibold text-blue-primary-dark">
            {data.preferredDate} ({data.preferredTime})
          </span>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)] sm:p-8">
      <div className="mb-6 text-center">
        <h3 className="font-heading text-2xl font-bold text-blue-primary-dark">
          Book Your Free In-Home Assessment
        </h3>
        <p className="mt-1 font-body text-sm text-grey-color">
          No cost, no obligation. Step {step} of 2.
        </p>
      </div>

      {/* progress bar */}
      <div className="mb-6 flex gap-2">
        <span className="h-1.5 flex-1 rounded-full bg-blue-primary" />
        <span className={`h-1.5 flex-1 rounded-full ${step === 2 ? 'bg-blue-primary' : 'bg-gray-200'}`} />
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* honeypot */}
        <input
          type="text"
          name="company"
          value={data.company}
          onChange={update('company')}
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="First name"
                    value={data.firstName}
                    onChange={update('firstName')}
                    className={inputBase}
                    autoComplete="given-name"
                  />
                </div>
                {err('firstName')}
              </div>
              <div>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={data.lastName}
                    onChange={update('lastName')}
                    className={inputBase}
                    autoComplete="family-name"
                  />
                </div>
                {err('lastName')}
              </div>
            </div>
            <div>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={data.email}
                  onChange={update('email')}
                  className={inputBase}
                  autoComplete="email"
                />
              </div>
              {err('email')}
            </div>
            <div>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={data.phone}
                  onChange={update('phone')}
                  onFocus={() => {
                    if (!data.phone.trim()) setData((d) => ({ ...d, phone: '+1 ' }));
                  }}
                  className={inputBase}
                  autoComplete="tel"
                />
              </div>
              {err('phone')}
            </div>
            <div>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Street address"
                  value={data.street}
                  onChange={update('street')}
                  className={inputBase}
                  autoComplete="address-line1"
                />
              </div>
              {err('street')}
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                value={data.city}
                onChange={update('city')}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-body text-base text-gray-900 placeholder-gray-400 focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/30 focus:outline-none transition"
                autoComplete="address-level2"
              />
              {err('city')}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="State"
                  value={data.state}
                  onChange={update('state')}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-body text-base text-gray-900 placeholder-gray-400 focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/30 focus:outline-none transition"
                  autoComplete="address-level1"
                />
                {err('state')}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ZIP code"
                  value={data.zip}
                  onChange={update('zip')}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-body text-base text-gray-900 placeholder-gray-400 focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/30 focus:outline-none transition"
                  autoComplete="postal-code"
                  inputMode="numeric"
                />
                {err('zip')}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-primary py-3.5 font-heading text-lg font-semibold text-white transition hover:bg-orange-dark"
            >
              Continue <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-gray-700">
                Preferred date
              </label>
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  min={todayISO}
                  value={data.preferredDate}
                  onChange={update('preferredDate')}
                  className={inputBase}
                />
              </div>
              {err('preferredDate')}
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-gray-700">
                Preferred time
              </label>
              <div className="relative">
                <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <select
                  value={data.preferredTime}
                  onChange={update('preferredTime')}
                  className={`${inputBase} appearance-none pr-4`}
                >
                  <option value="">Select a time window</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              {err('preferredTime')}
            </div>

            {submitError && (
              <p className="font-body text-sm text-red-600">{submitError}</p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center justify-center gap-1 rounded-lg border border-gray-300 px-4 py-3.5 font-heading text-base font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <ChevronLeft className="h-5 w-5" /> Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange-primary py-3.5 font-heading text-lg font-semibold text-white transition hover:bg-orange-dark disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Booking…
                  </>
                ) : (
                  'Book My Free Assessment'
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuiltForm;
