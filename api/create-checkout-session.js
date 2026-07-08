// Vercel serverless function: POST /api/create-checkout-session
// Body: { items: [{ slug, name, price, size, color, image, qty }, ...] }
// Creates a Stripe Checkout Session and returns its URL.
//
// Requires the STRIPE_SECRET_KEY environment variable to be set in your
// Vercel project settings (Settings -> Environment Variables). See SETUP.md.

const Stripe = require("stripe");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    res.status(500).json({
      error: "Stripe is not configured yet. Add STRIPE_SECRET_KEY in your Vercel project's environment variables."
    });
    return;
  }

  const stripe = Stripe(secretKey);

  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).json({ error: "Your cart is empty." });
      return;
    }

    const line_items = items.map((item) => ({
      quantity: item.qty,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: `${item.name}${item.size ? " — Size " + item.size : ""}${item.color ? " — " + item.color : ""}`,
          images: item.image ? [item.image] : undefined
        }
      }
    }));

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 400, currency: "usd" },
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 }
            }
          }
        }
      ],
      success_url: `${origin}/success.html`,
      cancel_url: `${origin}/cancel.html`
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong." });
  }
};
