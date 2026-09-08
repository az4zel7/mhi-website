# Milton Hosiery Industries — website

Next.js (App Router) build of the MHI website. Matches the approved
blue/white prototype: Home, About, Products (with brand tabs), Contact.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access on first run so
Next.js can fetch the Poppins and Inter fonts from Google Fonts.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Project structure

```
app/
  layout.js          root layout: fonts, <Header>, <Footer>
  page.js            Home
  about/page.js       About
  products/page.js    Products (brand tabs)
  contact/page.js      Contact + enquiry form
  api/contact/route.js  receives form submissions (see below)
  globals.css          all design tokens & styles
components/
  Header.jsx, Footer.jsx, CtaPanel.jsx, BrandTabs.jsx, ContactForm.jsx
lib/
  brands.js            single source of truth for Milton/ANICY/NICY/Avron
public/logos/           logo image files
```

## Before this goes live — a checklist

**Content (from the project brief):**
- [ ] Replace the placeholder text in `app/about/page.js` → `TIMELINE` array
      with your confirmed company history and milestones.
- [ ] Replace placeholder office address, phone, email and business hours
      in `app/contact/page.js`.
- [ ] Add real product photography. Placeholder swatches live in
      `lib/brands.js` under each brand's `products` array — replace
      `swatchA`/`swatchB` colour blocks with real `<Image>` components once
      you have files (the existing ANICY/NICY catalog PDF is a good source).
- [ ] Add a Milton brand logo — it currently falls back to a text wordmark
      in `lib/brands.js` (`logo: null`).
- [ ] Confirm any public-facing numbers (years in business, cities served,
      retailer counts) before adding them — none are included yet, by design.

**Wholesale enquiry form:**
The form at `/contact` posts to `app/api/contact/route.js`, which currently
just validates the fields and logs the enquiry to the server console. Before
launch, wire this up to one of:
- An email API (Resend, Postmark, SendGrid) to email the team directly, or
- A CRM / spreadsheet (Airtable, Google Sheets, HubSpot) via their API.

Keep any API keys in environment variables (`.env.local`, not committed) —
never hard-code them in `route.js`.

**Domain & deploy:**
- Since the domain is already purchased, this is ready to deploy to Vercel,
  or any host that supports Next.js. Vercel is the simplest path since it's
  built by the same team as the framework.
- Set your production environment variables (email/CRM keys) in your
  hosting provider's dashboard, not in this repo.

## Editing brands, products and copy

`lib/brands.js` is the single source of truth for all four brands — name,
logo, accent color, segment, status, description, and product list. Both
the Home page's brand strip and the Products page's tabs read from this
file, so most day-to-day updates (new products, updated descriptions,
launching Avron fully) only need to happen in one place.
