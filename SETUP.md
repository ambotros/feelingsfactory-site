# The Feelings Factory — Setup & Deployment Guide

Your site is fully built: home page, shop grid, product pages, cart, and a
working Stripe-powered checkout. Here's how to get it live at
thefeelingsfactory.net.

## 1. Create a Stripe account

1. Go to https://dashboard.stripe.com/register and sign up (free).
2. Once in the dashboard, make sure you're in **Test mode** (toggle top
   right) while you're setting things up.
3. Go to **Developers → API keys**. Copy the **Secret key** (starts with
   `sk_test_...`). You'll paste this into Vercel in step 4 — never put it
   directly in your website code or share it publicly.
4. When you're ready to accept real payments, complete Stripe's business
   verification (Settings → Business details) and switch to **Live mode**
   to get your live secret key (`sk_live_...`).

## 2. Push the code to GitHub

From a terminal, inside this `feelingsfactory-site` folder:

```bash
git init
git add .
git commit -m "Initial site"
```

Then create a new empty repository on GitHub (github.com → New repository,
name it e.g. `feelingsfactory-site`, don't initialize with a README), and
push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/feelingsfactory-site.git
git branch -M main
git push -u origin main
```
Cd 
## 3. Deploy on Vercel

1. Go to https://vercel.com and sign up/log in with your GitHub account.
2. Click **Add New → Project**, select the `feelingsfactory-site` repo.
3. Framework preset: leave as **Other** — no build step is needed, it will
   deploy as-is (static files + the `/api` function).
4. Click **Deploy**. You'll get a live URL like
   `feelingsfactory-site.vercel.app` within a minute.

## 4. Add your Stripe key to Vercel

1. In your Vercel project, go to **Settings → Environment Variables**.
2. Add a variable named `STRIPE_SECRET_KEY` with the value of the secret
   key you copied in step 1.
3. Redeploy (Deployments tab → ⋯ menu on the latest deployment → Redeploy)
   so the function picks up the new variable.

## 5. Connect thefeelingsfactory.net

1. In Vercel, go to **Settings → Domains** on your project and add
   `thefeelingsfactory.net`.
2. Vercel will show you DNS records to add (usually an `A` record for the
   root domain and a `CNAME` for `www`).
3. Go to wherever you manage DNS for the domain (your registrar, or
   wherever it's currently pointed to redirect to Instagram) and add those
   records.
4. DNS changes can take anywhere from a few minutes to 24 hours to take
   effect. Once it does, thefeelingsfactory.net will load your new site
   instead of redirecting to Instagram.

## 6. Test a purchase (in Stripe test mode)

Before going live, do a full test run:

1. Make sure you're still using your `sk_test_...` key in Vercel.
2. On your live site, add a shirt to cart and hit checkout.
3. On the Stripe payment page, use test card `4242 4242 4242 4242`, any
   future expiry date, any CVC, and any ZIP.
4. Confirm you land on the "You're all set!" success page, and check your
   Stripe dashboard (Payments) to see the test transaction appear.

## 7. Go live

1. In Stripe, complete business verification and switch to Live mode.
2. Copy your **live** secret key (`sk_live_...`).
3. In Vercel, update the `STRIPE_SECRET_KEY` environment variable to the
   live key, and redeploy.
4. You're now accepting real payments. Stripe takes a standard processing
   fee (2.9% + $0.30 per transaction in the US) — no monthly fee.

## Ongoing edits

- **Add/edit products:** open `js/products.js` — each product is a simple
  object with name, price, description, colors, sizes, and image URLs.
- **Change colors/fonts:** open `css/style.css` — the color palette is
  defined at the very top under `:root`.
- **Product photos:** currently pulled from your existing Etsy listing
  photos. To use your own hosted images instead, add them to an `images/`
  folder in this project and update the URLs in `js/products.js`.
- Any time you push a change to GitHub's `main` branch, Vercel
  automatically redeploys the live site within a minute or two.

## What this site does NOT do (yet)

- **Inventory tracking / sold-out states** — you'll want to manually
  remove a product from `js/products.js` if you sell out, since there's
  no live inventory count.
- **Order fulfillment automation** — Stripe will email you and the
  customer a receipt, and you'll see orders in your Stripe dashboard, but
  you'll still pack and ship manually (same as Etsy).
- **Email marketing / abandoned cart** — not included; can be added later
  if you want it.
