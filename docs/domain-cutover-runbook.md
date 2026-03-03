# Domain Cutover Runbook (5 Minutes)

Use this checklist once client domain access is available.

## 1) Cloudflare Pages project mapping

- Open Cloudflare Pages project for this repo.
- Add custom domain: `cabavia.com`.
- (Optional) Add `www.cabavia.com` and choose redirect direction.

## 2) DNS records

- In the domain DNS zone, point records to Cloudflare Pages targets shown in the Pages UI.
- Remove/disable legacy hosting records that still serve the old launch page.

## 3) Wait for active status

- In Cloudflare Pages custom domains, confirm `Active` for `cabavia.com`.

## 4) Smoke verification

Check these URLs in browser and with a hard refresh:

- `https://cabavia.com/`
- `https://cabavia.com/privacy`
- `https://cabavia.com/terms`

Expected:

- Homepage shows current CabAvia landing page.
- Legal pages load directly (no 404).

## 5) CTA + waitlist verification

- Click navbar/footer `Join Waitlist`.
- Confirm scroll lands on highlighted waitlist form.
- Submit test email and confirm arrival in Formspree.

## 6) Final production checks

- Verify metadata on production source includes expected title/description/OG tags.
- Run one final mobile and desktop pass.
