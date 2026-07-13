import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[1-9]\d{7,14}$/;
const ZIP_RE = /^\d{5}(-\d{4})?$/;

function isNonEmptyString(v: unknown, maxLen: number): v is string {
  return typeof v === 'string' && v.trim().length > 0 && v.length <= maxLen;
}

function isAllowedOrigin(req: VercelRequest): boolean {
  const origin = req.headers.origin;
  if (typeof origin !== 'string') return false;
  const host = (req.headers['x-forwarded-host'] as string) || req.headers.host;
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const {
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      state,
      zip,
      preferredDate,
      preferredTime,
      sourcePageUrl,
      sourcePageTitle,
    } = body ?? {};

    // Honeypot: silently accept bots without forwarding
    if (body?.company) {
      return res.status(200).json({ success: true, message: 'Lead submitted successfully' });
    }

    if (
      !isNonEmptyString(firstName, 60) ||
      !isNonEmptyString(lastName, 60) ||
      !isNonEmptyString(email, 254) ||
      !EMAIL_RE.test(email) ||
      !isNonEmptyString(phone, 20) ||
      !PHONE_RE.test(phone) ||
      !isNonEmptyString(street, 200) ||
      !isNonEmptyString(city, 100) ||
      !isNonEmptyString(state, 50) ||
      !isNonEmptyString(zip, 10) ||
      !ZIP_RE.test(zip) ||
      (preferredDate !== undefined && preferredDate !== '' && !isNonEmptyString(preferredDate, 20)) ||
      (preferredTime !== undefined && preferredTime !== '' && !isNonEmptyString(preferredTime, 60)) ||
      (sourcePageUrl !== undefined && typeof sourcePageUrl !== 'string') ||
      (sourcePageTitle !== undefined && typeof sourcePageTitle !== 'string')
    ) {
      return res.status(400).json({ success: false, message: 'Invalid or missing fields' });
    }

    const submissionData = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      street,
      city,
      state,
      zip,
      address: `${street}, ${city}, ${state} ${zip}`.trim(),
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      formType: 'lead',
      sourcePageTitle: String(sourcePageTitle || 'Blue Best x Quilt Landing').slice(0, 200),
      sourcePageUrl: String(sourcePageUrl || req.headers.referer || '').slice(0, 500),
      timestamp: new Date().toISOString(),
      metadata: {
        source: 'bblanding-quilt',
        userAgent: req.headers['user-agent'] || '',
        ip:
          (req.headers['x-forwarded-for'] as string) ||
          (req.headers['x-real-ip'] as string) ||
          '',
      },
    };

    const zapierWebhookUrl = process.env.ZAPIER_LEAD_WEBHOOK_URL;
    if (!zapierWebhookUrl) {
      console.error('ZAPIER_LEAD_WEBHOOK_URL not configured');
      return res.status(500).json({ success: false, message: 'Webhook not configured' });
    }

    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...submissionData,
        webhookTimestamp: new Date().toISOString(),
        source: 'bblanding-quilt-lead-form',
      }),
    });

    if (!zapierResponse.ok) {
      const errText = await zapierResponse.text();
      console.error('Zapier webhook error:', zapierResponse.status, errText);
      return res.status(502).json({ success: false, message: 'Webhook delivery failed' });
    }

    return res.status(200).json({
      success: true,
      message: 'Lead submitted successfully',
      leadId: `LEAD_${Date.now()}`,
    });
  } catch (error) {
    console.error('Error processing lead form:', error);
    return res.status(500).json({ success: false, message: 'Failed to submit lead form' });
  }
}
