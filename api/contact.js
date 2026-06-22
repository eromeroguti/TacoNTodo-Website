// Serverless function (Vercel) — receives the contact/quote form and emails it via Resend.
// Requires env vars:
//   RESEND_API_KEY  (required)  — from https://resend.com/api-keys
//   MAIL_TO         (optional)  — where leads go. Default: spicytacomar@gmail.com
//   MAIL_FROM       (optional)  — verified sender. Default: Resend's shared test sender.
//
// NOTE: With the default MAIL_FROM (onboarding@resend.dev), Resend only delivers to the
// email that owns the Resend account. To send to any address from your own domain,
// verify tacontodops.com in Resend and set MAIL_FROM to e.g. "Tacon'Todo <quotes@tacontodops.com>".

const { Resend } = require('resend');

const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vercel parses JSON bodies automatically; fall back to manual parse just in case.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const date = (body.date || '').trim();
  const eventType = (body['event-type'] || body.eventType || '').trim();
  const guests = (body.guests || '').toString().trim();
  const message = (body.message || '').trim();

  // Honeypot (anti-spam): if filled, silently accept.
  if ((body.company || '').trim()) return res.status(200).json({ ok: true });

  if (!name || !email) {
    return res.status(400).json({ error: 'Please provide your name and email.' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service is not configured yet.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.MAIL_TO || 'spicytacomar@gmail.com';
  const from = process.env.MAIL_FROM || "Tacon'Todo Website <onboarding@resend.dev>";

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Event date', date],
    ['Event type', eventType],
    ['Guest count', guests],
    ['Message', message],
  ].filter(([, v]) => v);

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#2C2520">
      <h2 style="color:#B0492E;margin:0 0 4px">New Quote Request</h2>
      <p style="color:#7C6E5C;margin:0 0 16px">From the Tacon'Todo website</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows.map(([k, v]) => `
          <tr>
            <td style="padding:8px 12px;background:#F4ECDB;font-weight:bold;width:130px;vertical-align:top;border:1px solid #DBC9AC">${escapeHtml(k)}</td>
            <td style="padding:8px 12px;border:1px solid #DBC9AC">${escapeHtml(v).replace(/\n/g, '<br>')}</td>
          </tr>`).join('')}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Quote Request — ${name}${guests ? ` (${guests} guests)` : ''}`,
      html,
      text,
    });
    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Could not send your request. Please call us instead.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send failed:', err);
    return res.status(500).json({ error: 'Something went wrong. Please call us at (760) 668-6547.' });
  }
};
