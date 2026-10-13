# Sizer S10 Unisex Salon Website

A responsive, multi-section salon website built with plain HTML, CSS and JavaScript. No framework or build process is required.

## Files
- `index.html` — page structure and content
- `style.css` — luxury black and gold responsive styling
- `script.js` — WhatsApp enquiry form, mobile menu and salon configuration

## Before publishing
Open `script.js` and replace the values in `SALON_CONFIG`:
- `whatsappNumber`: digits only, including country code. Example format for India: `919876543210` (use the salon's real number).
- `phoneNumber`: real public salon contact number.
- `address`: exact public salon address.
- `googleMapsUrl`: the salon's Google Maps directions link.
- `googleReviewsUrl`: the salon's real Google review or Business Profile link.
- `openingHours`: confirmed opening hours.

Do not publish while `REPLACE_WITH_...` placeholders remain.

## Content to verify
- Confirm which services the salon actually offers and add verified prices if desired.
- Replace sample stock photography with salon-owned images where possible.
- Add the correct Google Business Profile/reviews URL. This starter site intentionally contains no fabricated testimonials or ratings.

## Preview locally
Open `index.html` in a browser. Some browsers may restrict certain features when opened directly from a file; a local static server can be used if needed.

## Free hosting option: GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a public repository, for example `sizer-s10-salon`.
3. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root.
4. In the repository, open **Settings → Pages**.
5. Choose deployment from the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the generated website URL.

GitHub Pages can host static HTML/CSS/JS sites for free on eligible public repositories. A custom domain is optional and generally costs money.

## Notes
- Google Fonts and sample images use external URLs, so they need an internet connection.
- The WhatsApp form opens a prefilled message in WhatsApp. It does not store enquiries or confirm an appointment automatically.
- Keep private account credentials out of these files.
