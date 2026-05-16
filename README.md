# SEO Audit Portfolio

A bold, editorial-style portfolio website for showcasing SEO audit services and case studies.

## Structure

```
seo-audit-portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── style.css           # All styles (editorial theme)
├── js/
│   └── main.js             # Interactions & animations
├── case-studies/
│   ├── fashion-brand.html  # DTC Fashion Brand case study
│   ├── saas-platform.html  # B2B SaaS case study (template)
│   ├── law-firm.html       # Law Firm case study (template)
│   └── publisher.html      # Publisher case study (template)
└── images/                 # Add your own screenshots/graphics here
```

## Sections

- **Hero** — Headline, value prop, key stats, scrolling ticker
- **Services** — 4 audit packages with pricing
- **Case Studies** — 4 client results with metrics
- **Process** — 4-step audit workflow
- **Contact** — Enquiry form

## Customisation Checklist

### Essential
- [ ] Update your name / brand in `<title>` tags and footer
- [ ] Replace `hello@yoursite.com` with your real email
- [ ] Update LinkedIn / Twitter links in the footer
- [ ] Change location tag in the hero (`Manchester, UK`)
- [ ] Update all pricing to your actual rates
- [ ] Replace placeholder stats (120+ audits, etc.) with real numbers

### Case Studies
- [ ] Fill in real client details (anonymised if needed)
- [ ] Replace placeholder metrics with actual results
- [ ] Add real screenshots to the `/images` folder
- [ ] Create the remaining 3 case study pages using `fashion-brand.html` as a template

### Contact Form
The form currently uses a simulated delay. To wire it up:
- Use [Formspree](https://formspree.io) (free tier available) — just replace the `onsubmit` handler
- Or use [Netlify Forms](https://www.netlify.com/products/forms/) if hosting on Netlify

## Deployment

### GitHub Pages (Free)
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/seo-audit-portfolio`

### Netlify (Recommended — faster, form support)
1. Drag the folder into [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for auto-deploys

### Custom Domain
Point your domain's DNS A record to GitHub Pages IPs or add a CNAME in Netlify — both have one-click HTTPS.

## Tech Stack

- Pure HTML / CSS / Vanilla JS — no build step needed
- Fonts: Bebas Neue (display), DM Serif Display (headings), DM Mono (body)
- No dependencies, no frameworks

## License

MIT — use freely, no attribution required.
