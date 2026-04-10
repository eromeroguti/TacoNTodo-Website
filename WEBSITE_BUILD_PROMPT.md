# TACON'TODO — WEBSITE BUILD PROMPT
## For Claude Code | Desert Nomad Media | April 2026

---

**Copy and paste this entire prompt into Claude Code to build the website.**

---

## THE PROMPT

```
Build a complete 5-page website for Tacon'Todo, a taco catering business in Cathedral City, CA. This is a single self-contained HTML file with ALL CSS in a <style> block and minimal vanilla JS (mobile menu toggle, smooth scroll only). No external frameworks or dependencies.

## DESIGN DIRECTION: JAPANDI × MEXICAN CULTURE

The design fuses Japanese minimalism (Japandi) with authentic Mexican cultural warmth. Think: a high-end taqueria designed by a Japanese architect — clean lines, intentional whitespace, natural textures, with bold Mexican color accents, earthy warmth, and cultural patterns. Minimal but soulful. Modern but rooted.

## BRAND IDENTITY

- Business Name: Tacon'Todo
- Tagline: "Running on Salsa"
- Established: 2021
- Type: Taco Catering Service (mobile taco cart, events, parties, weddings)
- Location: Cathedral City, CA (Coachella Valley)
- Phone: (760) 668-6547
- Email: info@tacontodops.com
- Website: tacontodops.com
- Instagram: @tacontodo.est2021
- Hours: Mon — Closed | Tue–Fri 10am–8pm | Sat–Sun 10am–5pm
- GBP Rating: 5.0 stars (7 reviews)
- Service Area: Cathedral City, Palm Springs, Rancho Mirage, Palm Desert, Indio, La Quinta, Coachella, Desert Hot Springs, Thousand Palms

## COLOR PALETTE (Brand Colors + Japandi Adaptation)

Use these exact hex values:

| Role | Color | Hex |
|------|-------|-----|
| Primary Red (brand) | Tacon'Todo signature red | #E02B20 |
| Teal Accent (brand) | From logo sail element | #2FB8A8 |
| Charcoal (Japandi base) | Deep neutral for text/nav | #1A1A1A |
| Warm Off-White (Japandi bg) | Paper-like warmth | #F5F0EB |
| Warm Sand | Earthy accent | #D4A574 |
| Dark Wood Brown | Japandi craft element | #3D2B1F |
| Muted Warm Gray | Secondary text | #7A7067 |
| Soft Cream | Card backgrounds | #FFFAF5 |
| Sage Green | Desert/organic accent | #6B7F5E |
| Light Divider | Subtle borders | #E8E0D8 |

The red (#E02B20) and teal (#2FB8A8) are the hero brand colors — use them for CTAs, accents, hover states, and highlights. The Japandi neutrals (charcoal, off-white, sand, wood brown) form the foundation. The sage green adds organic warmth for badges/icons.

## TYPOGRAPHY

- Headings: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif — clean, well-spaced, light weight for Japandi feel
- Body: Same stack, regular weight
- Accent text (taglines, labels): Use letter-spacing: 0.15em and text-transform: uppercase for a refined Japandi touch
- Load Inter from Google Fonts: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

## JAPANDI DESIGN PRINCIPLES (apply everywhere):

- Generous whitespace — let content breathe
- Subtle shadows (box-shadow: 0 2px 8px rgba(0,0,0,0.06)) — almost flat
- Border-radius: 4-6px — crisp, not bubbly
- Thin borders and dividers (#E8E0D8)
- Clean grid layouts with consistent spacing
- Hover effects: subtle warmth shift — background warms slightly, red accent appears
- Fixed navigation bar: transparent on top, warm off-white with subtle shadow on scroll
- Sections separated by generous padding (80-120px vertical)

## MEXICAN CULTURAL ACCENTS (integrate tastefully):

- Use CSS-only geometric patterns for section dividers — zigzag, diamond, or stepped patterns inspired by Talavera tile and serape textiles (created with CSS gradients or borders, not images)
- Warm terracotta/red tones as highlights against the Japandi neutral base
- Cultural motifs as subtle decorative borders, not overwhelming
- Food-centric language that celebrates Mexican culinary tradition
- Bilingual nods where natural (Cathedral City has significant Spanish-speaking population)

## LOGO

The client will provide their logo file separately. For now, use a text-based logo in the nav:
- "TACON'TODO" in bold charcoal with a small red (#E02B20) accent dot or chili icon
- Below it: "Running on Salsa" in small uppercase letter-spaced text
- Add an HTML comment: <!-- REPLACE: Insert logo image here. Logo file: logo-copy.webp -->

## PAGE STRUCTURE (5 pages, smooth scroll single-page with defined sections):

### 1. HOME / HERO
- Full-viewport hero section with warm gradient overlay (charcoal to transparent) over a CSS-created textured background
- Main heading: "Authentic Taco Catering for Every Occasion" (H1, large, Inter light weight)
- Subheading: "Cathedral City, CA — Serving the Coachella Valley Since 2021"
- Tagline: "Running on Salsa" in small uppercase letter-spaced accent text
- Primary CTA: "Book Your Event" (red #E02B20 button, white text)
- Secondary CTA: "View Our Menu" (outlined button, charcoal border)
- Scroll-down indicator arrow

TRUST BADGES BAR (below hero):
- ★ 5.0 Google Rating
- 🏠 Family-Owned Since 2021
- 📍 Cathedral City Local
- 🎉 Events of All Sizes

FEATURED SERVICES PREVIEW (3 cards):
- Card 1: "Taco Cart Catering" — Our signature mobile taco cart brings the full taqueria experience to your location.
- Card 2: "Event & Party Catering" — Birthdays, corporate events, graduations — any gathering is better with tacos.
- Card 3: "Wedding Packages" — Make your reception unforgettable with a custom taco bar.
Each card has a subtle hover effect warming to the sand/red accent.

### 2. ABOUT
Section heading: "Our Story" (with Mexican-inspired CSS pattern divider above)

Paragraph 1:
"Every meal at Tacon'Todo is more than just dining — it's a personalized fiesta of authentic Mexican flavors. Our family-owned business pours love into every dish, transforming each event we cater into an irresistible celebration of vibrant tastes and aromas."

Paragraph 2:
"When you choose Tacon'Todo to cater your event, you're choosing more than just a catering service. You're choosing to treat your guests to an authentic Mexican culinary experience, presented with as much attention to aesthetics as to flavors. From selecting the freshest ingredients to preparing dishes with utmost care and presenting them beautifully, our commitment to quality is evident in every aspect of our service."

Paragraph 3:
"As we bring our kitchen to your party, we ensure an atmosphere as warm, inviting, and festive as the food we serve. Based in Cathedral City and proudly serving the entire Coachella Valley, Tacon'Todo turns every gathering into a Mexican culinary festival."

VALUES GRID (2x2 or 4-column):
- "Fresh Ingredients" — Sourced daily for maximum flavor
- "Authentic Recipes" — Traditional Mexican flavors passed down through generations
- "Professional Service" — From setup to cleanup, we handle everything
- "Community Roots" — Proudly serving Cathedral City and the Coachella Valley

### 3. MENU & PACKAGES
Section heading: "Our Menu" (with CSS pattern divider)

Subheading: "Personalized Catering for Every Occasion"

PACKAGE CARDS (clean grid layout, each card with Japandi styling):

**CARD 1 — Sabor Essentials** (most popular badge)
- Price: $27 per person | Minimum 20 guests
- Description: "Our signature taco experience with your choice of proteins and all the fixings."
- What's included:
  - Birria Tacos with Consomé
  - Street Tacos (choose 2 proteins: steak, chicken, pastor, chorizo, birria, vegetarian, carnitas)
  - Carnitas Tacos (choose 2: carnitas, buche, costilla)
  - Pastor Trompo (available for 40+ guests)
- Includes: Rice, beans, salsa, garnish bar, disposable dinnerware
- Note: "Double Up — Mix and match any two packages for just +$5/person"
- CTA: "Book This Package"

**CARD 2 — Bachelor / Bachelorette Fiesta**
- Price: $60 per person | Minimum 10 guests | 2-hour service
- Description: "Celebrate the last hurrah in style with our bespoke fiesta package."
- Build your menu:
  - Choose 1 Appetizer: Shrimp Cocktail, Shrimp Ceviche, Queso Fundido, or Shrimp Stuffed Peppers
  - Choose 2 Entrées: Street Tacos, Birria Tacos, Fajitas, Garlic Shrimp, Camarones a la Diabla, Fish Tacos, Shrimp Tacos
  - Choose 1 Dessert: Tres Leches Cake, Churros w/ Ice Cream, Flan, or Pan Dulce Assortment
- Includes: Guacamole, chips, and salsa
- CTA: "Book This Package"

**CARD 3 — After Party Packages**
Two sub-options:
- Midnight Taquiza: Steak & pastor tacos + agua fresca | 2-hour service | 20 guests $600 / 30 guests $750 / +$25 per additional
- Bacon Wrapped Hot Dog Fiesta: Loaded bacon dogs with all toppings | 2-hour service | 20 guests $600 / 30 guests $750 / +$25 per additional
- Add-on: Cooler of Mexican Cokes $3 each
- CTA: "Book This Package"

**CARD 4 — The Morning After**
- Price: $35 per person | 2-hour service
- Description: "Wave goodbye to your hangover with our rejuvenating 'Adios' selections."
- Choose 2 Entrées: Vuelve a la Vida, Shrimp Ceviche, Menudo, Chilaquiles, Birria Quesatacos, Birria en Caldo, Huevos a la Mexicana, Huevos Rancheros, Breakfast Burrito
- Includes: Café de Hoya/OJ, garnish bar, guacamole, chips, salsa
- Add-on: Michelada Mix Prep & Service +$5/person (customer provides beer)
- CTA: "Book This Package"

MENU CATEGORIES (below packages, clean minimal list):
- Appetizers | Vegetarian Options | Entrées | Desserts
- Note: "Full personalized menu available upon request. Contact us to build your custom catering experience."

### 4. GALLERY / EXPERIENCE
Section heading: "The Tacon'Todo Experience"

PHOTO GALLERY GRID:
- Create a 3-column masonry-style grid (desktop), 2-column (tablet), 1-column (mobile)
- Use 6-8 beautiful CSS gradient placeholder boxes with warm tones (sand, terracotta, cream, sage)
- Each placeholder has centered text: "Photo Coming Soon" in muted text
- Add HTML comment for each: <!-- REPLACE: Insert food/event photo here -->

TESTIMONIAL SECTION (3 testimonials):
Testimonial 1 (Food Quality):
"The birria tacos were out of this world. Our guests could not stop talking about the food. Tacon'Todo made our daughter's quinceañera absolutely perfect."
— Maria G., Cathedral City ★★★★★

Testimonial 2 (Professional Service):
"From setup to cleanup, the team was incredibly professional. They handled everything while we enjoyed our own party. Best catering decision we ever made."
— James R., Palm Springs ★★★★★

Testimonial 3 (Event Experience):
"We hired Tacon'Todo for our company team building event and it was a huge hit. The taco cart was the highlight of the day. Already booking them for our holiday party."
— Sarah L., Palm Desert ★★★★★

Add HTML comment: <!-- REPLACE: Replace placeholder testimonials with real Google reviews -->

### 5. CONTACT / BOOK
Section heading: "Book Your Event"
Subheading: "Let's make your next event unforgettable"

CONTACT FORM (visual only, styled beautifully):
Fields: Name, Email, Phone, Event Date (date input), Event Type (dropdown: Party, Wedding, Corporate, Festival, Bachelor/Bachelorette, After Party, Morning After, Other), Estimated Guest Count, Message
Submit button: "Send Request" (red #E02B20)
Add HTML comment: <!-- CONNECT: Add form action/backend handler -->

CONTACT INFO GRID (beside or below form):
- Phone: (760) 668-6547 (click-to-call: <a href="tel:+17606686547">)
- Email: info@tacontodops.com
- Instagram: @tacontodo.est2021
- Hours: Tue–Fri 10am–8pm | Sat–Sun 10am–5pm | Mon — Closed

SERVICE AREA:
"Proudly serving Cathedral City, Palm Springs, Rancho Mirage, Palm Desert, Indio, La Quinta, Coachella, Desert Hot Springs, Thousand Palms, and the entire Coachella Valley."

MAP PLACEHOLDER:
Styled box with text "Google Map" + HTML comment: <!-- REPLACE: Add Google Maps embed iframe -->

SEASONAL NOTE:
"Book early for peak season dates (October through April) and festival weekends."

### FOOTER
- Tacon'Todo text logo + "Running on Salsa"
- Cathedral City, CA
- (760) 668-6547 (click-to-call)
- Instagram icon link
- "© 2026 Tacon'Todo. All rights reserved."
- "Website by Desert Nomad Media" (small, subtle, muted text)
- Mexican-inspired CSS pattern border across the top of footer

## SEO REQUIREMENTS

In the <head>:
- <title>Tacon'Todo | Authentic Taco Catering — Cathedral City, CA</title>
- <meta name="description" content="Tacon'Todo is a family-owned taco catering service in Cathedral City, CA. Taco carts, event catering, wedding packages, and custom menus for the entire Coachella Valley. Call (760) 668-6547.">
- Open Graph tags (og:title, og:description, og:type, og:url)
- Canonical URL
- Proper H1 → H2 → H3 hierarchy (only ONE H1 on the page)
- All images have alt text

LocalBusiness JSON-LD schema in <head>:
```json
{
  "@context": "https://schema.org",
  "@type": "CateringService",
  "name": "Tacon'Todo",
  "image": "https://tacontodops.com/logo.webp",
  "description": "Authentic taco catering service for events, parties, and weddings in Cathedral City and the Coachella Valley.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cathedral City",
    "addressRegion": "CA",
    "postalCode": "92234",
    "addressCountry": "US"
  },
  "telephone": "+17606686547",
  "url": "https://www.tacontodops.com",
  "sameAs": ["https://www.instagram.com/tacontodo.est2021"],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "7"
  },
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "10:00", "closes": "20:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "10:00", "closes": "17:00"}
  ],
  "areaServed": ["Cathedral City","Palm Springs","Rancho Mirage","Palm Desert","Indio","La Quinta","Coachella","Desert Hot Springs","Thousand Palms"],
  "servesCuisine": "Mexican"
}
```

## TECHNICAL REQUIREMENTS

- Single self-contained .html file
- ALL CSS in one <style> block (no external stylesheets except Google Fonts)
- Mobile-first responsive (phone → tablet → desktop breakpoints)
- Smooth scroll behavior: html { scroll-behavior: smooth; }
- Fixed header that changes on scroll (transparent → warm off-white with shadow)
- Mobile hamburger menu (vanilla JS toggle only)
- All phone numbers as click-to-call links
- CSS-only decorative patterns (no image files needed)
- Accessible: proper alt text, ARIA labels on nav, sufficient color contrast
- Performance: no heavy assets, minimal JS, fast first paint
- Add HTML comments throughout marking placeholder content for easy replacement

## FILE OUTPUT
Save as: TacoNTodo_Website.html
```

---

## NOTES FOR EDGAR

**After pasting this prompt into Claude Code:**
1. Claude Code will generate the full HTML file
2. Open it in your browser to preview
3. Replace placeholder photos with real food/event photos from the client
4. Replace placeholder testimonials with real Google reviews
5. Add the actual logo image file (logo-copy.webp)
6. Connect the contact form to a backend (Formspree, Netlify Forms, or custom)
7. Add Google Maps embed iframe
8. Review all copy with the client for accuracy

**What's included in this prompt:**
- All real business info (phone, hours, location, service area)
- All real menu items and pricing from their current site
- All 4 catering packages with exact pricing
- Their actual brand colors from the logo and current CSS
- Japandi + Mexican design system
- Full SEO setup (schema, meta, OG tags)
- Accessibility considerations
- Mobile-first responsive design

**Brand Colors Reference:**
- Red: #E02B20 (their signature — from logo and Divi CSS)
- Teal: #2FB8A8 (from logo sail element)
- Charcoal: #1A1A1A (Japandi base)
- Off-White: #F5F0EB (Japandi warm background)
- Sand: #D4A574 (earthy accent)
- Sage: #6B7F5E (organic desert accent)
