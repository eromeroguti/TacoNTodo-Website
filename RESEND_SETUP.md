# Contact Form → Email Setup (Resend)

The contact form (`contact.html`) submits to a small serverless function at
`/api/contact` (`api/contact.js`), which emails the lead via **Resend**.

This requires a host that runs Node serverless functions. **Vercel** is the easiest
(it auto-detects the `api/` folder). Plain GitHub Pages will NOT run the function.

## One-time setup

1. **Deploy on Vercel**
   - Go to vercel.com → "Add New… → Project" → import the GitHub repo
     `eromeroguti/TacoNTodo-Website`.
   - Framework preset: **Other** (it's a static site). Deploy.
   - Vercel will serve the HTML and turn `api/contact.js` into a function automatically.

2. **Create a Resend account & API key**
   - Sign up at resend.com **using `spicytacomar@gmail.com`** (this matters — see note below).
   - Create an API key at resend.com/api-keys and copy it.

3. **Add environment variables in Vercel**
   - Project → Settings → Environment Variables, add:
     - `RESEND_API_KEY` = the key you copied  *(required)*
     - `MAIL_TO` = `spicytacomar@gmail.com`  *(optional; this is the default)*
     - `MAIL_FROM` = leave unset for now (defaults to Resend's shared sender)
   - Redeploy so the variables take effect.

4. **Test**
   - Open the live site's Contact page, submit the form.
   - The lead should arrive at `spicytacomar@gmail.com` within a few seconds.

## Important note on the "From" address

By default the function sends **from** `onboarding@resend.dev`, and Resend (on the free
tier) will only deliver that to **the email that owns the Resend account**. That's why you
should create the Resend account with `spicytacomar@gmail.com` — then it works immediately.

### To send from your own domain (recommended for production)
1. In Resend → Domains, add and verify `tacontodops.com` (add the DNS records they give you).
2. Set the Vercel env var `MAIL_FROM` = `Tacon'Todo <quotes@tacontodops.com>`.
3. Redeploy. Now leads can be sent to any address with better deliverability.

## Local development (optional)
```
npm install
npx vercel dev      # runs the static site + /api/contact locally
```

## Files involved
- `api/contact.js` — the serverless function (validates input, sends via Resend, has a honeypot)
- `contact.html` — the form posts JSON to `/api/contact` and shows a success/error message
- `package.json` — declares the `resend` dependency
