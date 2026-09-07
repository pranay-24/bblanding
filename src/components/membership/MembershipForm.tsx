import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import {
  HVAC_SYSTEM_OPTIONS,
  MEMBERSHIP_PHONE_DISPLAY,
  MEMBERSHIP_PHONE_HREF,
  MEMBERSHIP_PLANS,
  PLAN_FORM_OPTIONS,
  type PlanFormValue,
} from '../../config/membershipPlans';
import { JOIN_ID } from './scrollToJoin';

interface MembershipFormProps {
  selectedPlan: PlanFormValue;
  onSelectPlan: (plan: PlanFormValue) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
  hvacSystems: string;
  company: string; // honeypot
}

type FieldKey = keyof FormData | 'plan';

const NOT_SURE_VALUE: PlanFormValue = 'Not sure yet';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[\d\s()+-]{10,}$/;
const zipRe = /^\d{5}(-\d{4})?$/;

const toE164 = (raw: string) => {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return raw.trim().startsWith('+') ? raw.trim() : `+1${digits}`;
};

const fieldBase =
  'w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 font-body text-sm text-gray-900 placeholder-gray-400 focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/30 focus:outline-none transition';
const labelBase = 'mb-1 block font-body text-sm font-medium text-gray-700';
const stepLabel =
  'font-heading text-sm font-bold uppercase tracking-[0.1em] text-blue-primary-dark';
const tileBase =
  'flex h-full cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg border-2 px-1.5 py-3 text-center transition peer-focus-visible:ring-2 peer-focus-visible:ring-blue-primary peer-focus-visible:ring-offset-2';

const MembershipForm: React.FC<MembershipFormProps> = ({ selectedPlan, onSelectPlan }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
    hvacSystems: '',
    company: '',
  });

  const update =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setData((d) => ({ ...d, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const pickPlan = (plan: PlanFormValue) => {
    onSelectPlan(plan);
    setErrors((prev) => ({ ...prev, plan: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<FieldKey, string>> = {};
    if (!PLAN_FORM_OPTIONS.includes(selectedPlan)) next.plan = 'Pick a plan to continue';
    if (!data.firstName.trim()) next.firstName = 'First name is required';
    if (!data.lastName.trim()) next.lastName = 'Last name is required';
    if (!emailRe.test(data.email)) next.email = 'Enter a valid email address';
    if (!phoneRe.test(data.phone)) next.phone = 'Enter a valid phone number';
    if (!data.street.trim()) next.street = 'Street address is required';
    if (!data.city.trim()) next.city = 'City is required';
    if (!zipRe.test(data.zip.trim())) next.zip = 'Enter a valid ZIP code';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/membership-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: toE164(data.phone),
          street: data.street,
          city: data.city,
          zip: data.zip,
          plan: selectedPlan,
          hvacSystems: data.hvacSystems,
          company: data.company,
          sourcePageUrl: window.location.href,
          sourcePageTitle: document.title,
        }),
      });
      if (!res.ok) throw new Error('Request failed');

      window.fbq?.('track', 'Lead', {
        content_name: 'Membership Plan Lead',
        source: 'membership',
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

  const err = (f: FieldKey) =>
    errors[f] ? (
      <p id={`mf-${f}-error`} className="mt-1 font-body text-sm text-red-600">
        {errors[f]}
      </p>
    ) : null;

  const aria = (f: keyof FormData) => ({
    'aria-invalid': errors[f] ? true : undefined,
    'aria-describedby': errors[f] ? `mf-${f}-error` : undefined,
  });

  const planLabel = selectedPlan === NOT_SURE_VALUE ? 'membership' : selectedPlan;

  return (
    <div id={JOIN_ID} className="w-full">
      {submitted ? (
        <div className="w-full rounded-2xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.12)] sm:p-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-primary/10 text-blue-primary">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-blue-primary-dark">
            Thanks, {data.firstName}!
          </h3>
          <p className="mt-3 font-body text-grey-color">
            We have your{' '}
            <span className="font-semibold text-blue-primary-dark">{planLabel}</span> request.
            Blue Best will call you shortly to get your membership started and schedule your
            first visit.
          </p>
          <p className="mt-4 font-body text-sm text-grey-color">
            Need us sooner. Call{' '}
            <a
              href={MEMBERSHIP_PHONE_HREF}
              className="font-semibold text-blue-primary underline hover:text-blue-dark"
            >
              {MEMBERSHIP_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      ) : (
        <div className="w-full rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] sm:p-6">
          <div className="mb-3 text-center">
            <h3 className="font-heading text-xl font-bold text-blue-primary-dark sm:text-2xl">
              Start Your Membership
            </h3>
            <p className="mt-1 font-body text-sm text-grey-color">
              Takes about two minutes. We call you to schedule.
            </p>
          </div>

          <div className="mb-5 rounded-lg bg-blue-light px-3 py-2 text-center font-heading text-[11px] font-bold uppercase tracking-[0.1em] text-blue-primary-dark sm:text-xs">
            Now booking fall furnace tune-ups
          </div>

          <form onSubmit={handleSubmit} noValidate>
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

            <fieldset className="mb-5 border-0 p-0">
              <legend className={`${stepLabel} mb-2`}>1. Pick your plan</legend>
              <div className="grid grid-cols-3 gap-2">
                {MEMBERSHIP_PLANS.map((plan) => {
                  const active = selectedPlan === plan.formValue;
                  return (
                    <label key={plan.id} className="relative block">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.formValue}
                        checked={active}
                        onChange={() => pickPlan(plan.formValue)}
                        className="peer sr-only"
                      />
                      <span
                        className={`${tileBase} ${
                          active
                            ? 'border-orange-primary bg-orange-primary text-white'
                            : 'border-gray-300 bg-white hover:border-blue-primary'
                        }`}
                      >
                        <span className="font-heading text-[11px] font-semibold uppercase leading-tight tracking-wide sm:text-xs">
                          {plan.pickerLabel}
                        </span>
                        <span
                          className="font-heading text-lg font-bold leading-none sm:text-xl"
                          style={{ color: active ? '#FFFFFF' : plan.color }}
                        >
                          ${plan.monthly}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <label className="relative mt-2 block">
                <input
                  type="radio"
                  name="plan"
                  value={NOT_SURE_VALUE}
                  checked={selectedPlan === NOT_SURE_VALUE}
                  onChange={() => pickPlan(NOT_SURE_VALUE)}
                  className="peer sr-only"
                />
                <span
                  className={`block cursor-pointer rounded-lg border-2 px-3 py-2.5 text-center font-body text-sm transition peer-focus-visible:ring-2 peer-focus-visible:ring-blue-primary peer-focus-visible:ring-offset-2 ${
                    selectedPlan === NOT_SURE_VALUE
                      ? 'border-orange-primary bg-orange-primary font-semibold text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-primary'
                  }`}
                >
                  Not sure yet, help me pick the right one
                </span>
              </label>
              {err('plan')}
            </fieldset>

            <p className={`${stepLabel} mb-2`}>2. Your home</p>

            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                <div>
                  <label htmlFor="mf-firstName" className={labelBase}>
                    First Name *
                  </label>
                  <input
                    id="mf-firstName"
                    type="text"
                    value={data.firstName}
                    onChange={update('firstName')}
                    className={fieldBase}
                    autoComplete="given-name"
                    {...aria('firstName')}
                  />
                  {err('firstName')}
                </div>
                <div>
                  <label htmlFor="mf-lastName" className={labelBase}>
                    Last Name *
                  </label>
                  <input
                    id="mf-lastName"
                    type="text"
                    value={data.lastName}
                    onChange={update('lastName')}
                    className={fieldBase}
                    autoComplete="family-name"
                    {...aria('lastName')}
                  />
                  {err('lastName')}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                <div>
                  <label htmlFor="mf-email" className={labelBase}>
                    Email *
                  </label>
                  <input
                    id="mf-email"
                    type="email"
                    value={data.email}
                    onChange={update('email')}
                    className={fieldBase}
                    autoComplete="email"
                    {...aria('email')}
                  />
                  {err('email')}
                </div>
                <div>
                  <label htmlFor="mf-phone" className={labelBase}>
                    Phone *
                  </label>
                  <input
                    id="mf-phone"
                    type="tel"
                    value={data.phone}
                    onChange={update('phone')}
                    onFocus={() => {
                      if (!data.phone.trim()) setData((d) => ({ ...d, phone: '+1 ' }));
                    }}
                    className={fieldBase}
                    autoComplete="tel"
                    {...aria('phone')}
                  />
                  {err('phone')}
                </div>
              </div>

              <div>
                <label htmlFor="mf-street" className={labelBase}>
                  Street Address *
                </label>
                <input
                  id="mf-street"
                  type="text"
                  value={data.street}
                  onChange={update('street')}
                  className={fieldBase}
                  autoComplete="street-address"
                  {...aria('street')}
                />
                {err('street')}
              </div>

              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                <div>
                  <label htmlFor="mf-city" className={labelBase}>
                    City *
                  </label>
                  <input
                    id="mf-city"
                    type="text"
                    value={data.city}
                    onChange={update('city')}
                    className={fieldBase}
                    autoComplete="address-level2"
                    {...aria('city')}
                  />
                  {err('city')}
                </div>
                <div>
                  <label htmlFor="mf-zip" className={labelBase}>
                    Zip *
                  </label>
                  <input
                    id="mf-zip"
                    type="text"
                    value={data.zip}
                    onChange={update('zip')}
                    className={fieldBase}
                    autoComplete="postal-code"
                    inputMode="numeric"
                    {...aria('zip')}
                  />
                  {err('zip')}
                </div>
              </div>

              <div>
                <label htmlFor="mf-hvacSystems" className={labelBase}>
                  HVAC systems in your home
                </label>
                <select
                  id="mf-hvacSystems"
                  value={data.hvacSystems}
                  onChange={update('hvacSystems')}
                  className={`${fieldBase} appearance-none`}
                >
                  <option value="">Select one</option>
                  {HVAC_SYSTEM_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {submitError && (
              <p className="mt-3 font-body text-sm text-red-600" role="alert">
                {submitError}
              </p>
            )}

            <p className="mt-5 text-center font-heading text-[10px] font-semibold uppercase leading-relaxed tracking-[0.08em] text-grey-color sm:text-[11px]">
              LOCAL. LICENSED. BONDED. INSURED. SERVING THE ENTIRE WASATCH FRONT.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-primary py-3.5 font-heading text-base font-semibold text-white shadow-md transition hover:bg-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark disabled:opacity-70 sm:text-lg"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending
                </>
              ) : (
                'Start My Membership'
              )}
            </button>

            <p className="mt-3 text-center font-body text-sm text-grey-color">
              Talk it through instead. Call{' '}
              <a
                href={MEMBERSHIP_PHONE_HREF}
                className="font-semibold text-blue-primary underline hover:text-blue-dark"
              >
                {MEMBERSHIP_PHONE_DISPLAY}
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default MembershipForm;
