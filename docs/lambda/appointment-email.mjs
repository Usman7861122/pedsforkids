// AWS Lambda (Node.js 22). Receives the "Book a visit" form and emails it with Amazon SES.
// Environment variables: TO_EMAIL (where requests go; commas for more than one), FROM_EMAIL (a verified SES address, can be the same),
// ALLOWED_ORIGIN (optional, default https://www.peds4kids.com).
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const ses = new SESv2Client({});
const TO = (process.env.TO_EMAIL || '').split(',').map((a) => a.trim()).filter(Boolean); // one or more addresses, separated by commas
const FROM = process.env.FROM_EMAIL || TO[0];
const ORIGIN = process.env.ALLOWED_ORIGIN || 'https://www.peds4kids.com';

const reply = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
const clean = (v, max) => String(v ?? '').replace(/[\r\u0000]/g, '').trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/\n/g, ' ');

export const handler = async (event) => {
  // CORS headers are added by the Function URL settings. This is a second check.
  const origin = event.headers?.origin;
  if (origin && origin !== ORIGIN) return reply(403, { ok: false });

  let data;
  try {
    data = JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body || '{}');
  } catch {
    return reply(400, { ok: false });
  }
  if (data.company) return reply(200, { ok: true }); // hidden spam trap: pretend it worked

  const name = oneLine(data.name, 100);
  const email = oneLine(data.email, 150);
  const phone = oneLine(data.phone, 40);
  const hear = oneLine(data.hear_from, 40);
  const insurance = clean(data.insurance_details, 1500);
  const okHear = ['Insurance', 'Google/Internet', 'Family/Friend', 'Doctor Referral', 'Social Media'];
  if (!name || !phone || !insurance || !okHear.includes(hear) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply(400, { ok: false, error: 'invalid' });
  }

  const text = [
    'New appointment request from peds4kids.com',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `How they heard about us: ${hear}`,
    '',
    'Insurance details:',
    insurance,
  ].join('\n');

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: FROM,
        Destination: { ToAddresses: TO },
        ReplyToAddresses: [email],
        Content: { Simple: { Subject: { Data: `Appointment request: ${name}` }, Body: { Text: { Data: text } } } },
      }),
    );
    return reply(200, { ok: true });
  } catch (err) {
    console.error('SES error', err.name, err.message);
    return reply(500, { ok: false });
  }
};
