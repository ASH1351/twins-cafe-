# TWINS CAFE & RESTAURANT (টুইন ক্যাফে & রেস্টুরেন্ট) · Durgapur
### Premium Responsive Website & Brand Experience

A modern, editorial, fully responsive web application built for **TWINS CAFE & RESTAURANT**, situated in City Center, Durgapur, West Bengal, India.

---

## 🍽️ Brand Overview & Verified Details

- **Brand Name**: TWINS CAFE & RESTAURANT
- **Bengali Name**: টুইন ক্যাফে & রেস্টুরেন্ট
- **Category**: Café and Restaurant
- **Location**: B 18, Non-Company Housing Estate, City Center, Durgapur, West Bengal 713216, India
- **Phone**: `082502 04770` (Clickable via `tel:08250204770`)
- **Google Rating**: `4.5 / 5.0` based on 544+ customer reviews (owner-supplied benchmark)
- **Average Spend**: ₹200–₹400 per person
- **Reported Timings**: 11:30 AM – 10:30 PM Daily (Closing at 10:30 PM)

---

## 🎨 Design Direction & Palette

- **Deep Charcoal**: `#171717` (Cinematic hero, dark panels, modern contrast)
- **Warm Cream**: `#F6F0E6` (Brand story, why visit, testimonials)
- **Muted Gold**: `#C7A56A` (Accent buttons, badges, dividers, icons)
- **Warm Terracotta**: `#A94F36` (Warm highlights and badge accents)
- **Clean White**: `#FFFFFF` (Content cards and crisp highlights)
- **Soft Neutral Gray**: `#85817A` (Secondary metadata, borders, subtitles)

### Typography
- **Headings**: `Playfair Display` (Sophisticated editorial serif)
- **Body Text**: `Plus Jakarta Sans` (Clean, modern geometric sans-serif)
- **Bengali Text**: `Hind Siliguri` (Authentic Bengali typography for local resonance)

---

## 📸 Authentic Photographic Assets

1. **Real Storefront Photo** (`/images/twins_cafe_storefront.png`):
   - Features the authentic black and gold fascia, TCR circular logo plaque, full-height glass windows with yellow framing, interior music/art mural, outdoor patio umbrella tables, and upper floral balcony.
   - Featured in the **Cinematic Hero**, **Brand Story**, and **Photo Gallery**.

2. **Real Printed Menu Card Photo** (`/images/twins_cafe_menu_original.png`):
   - Features the actual printed menu photographed directly from the restaurant showing verified Chinese Soups and Chinese Main Course items.
   - Interactive high-resolution viewer with zoom toggle and side-by-side text pricing transcription for effortless mobile reading.

---

## 🚀 Key Website Features & Architecture

1. **Sticky Header Navigation (`Navbar.tsx`)**:
   - Bilingual wordmark (English + Bengali)
   - Smooth section links
   - Quick phone call button (`tel:08250204770`)
   - Primary "Get Directions" CTA
   - Mobile slide-over drawer with accessible keyboard handling

2. **Cinematic Hero (`HeroSection.tsx`)**:
   - Editorial headline: *"Good Food. Great Company. Unforgettable Moments."*
   - Real storefront photograph in an overlapping framed composition
   - Direct CTAs: *"Explore Our Menu"*, *"Find Our Café"*, *"View Printed Menu Card"*
   - Trust badge with 4.5/5 rating, closing time, and budget indicator

3. **Brand Story (`BrandStory.tsx`)**:
   - Honest, grounded narrative celebrating honest comfort food and casual hangout culture in Durgapur
   - 3 Experience highlights: Welcoming café atmosphere, veg & non-veg variety, and gathering space

4. **Interactive Signature Menu (`MenuSection.tsx`)**:
   - 9 category filters (All, Chinese Soups, Chinese Veg Mains, Chinese Non-Veg Mains, Starters, Pizzas, Momos, Beverages, Desserts)
   - Dietary filter toggle (All / Veg Only 🟢 / Non-Veg Only 🔴)
   - Live dish search bar
   - Verified pricing directly from the physical menu card (e.g. Sweet Corn Soup ₹149/₹169, Chilly Chicken 8 Pcs ₹229, Paneer Chilly ₹259)
   - Verification badges differentiating verified menu card items from customer-favorite specials

5. **Menu Modal Viewer (`MenuModal.tsx`)**:
   - Interactive zoomable view of the original menu photo
   - High-contrast structured transcription table for easy mobile reading

6. **Featured Food Experience (`FeaturedFood.tsx`)**:
   - Asymmetric editorial grid covering Chinese wok classics, handcrafted fusion pizzas, momos, thick cold coffee, and triple scoop ice cream
   - Transparent disclaimer noting illustrative culinary styling

7. **Why Visit Twins? (`WhyVisitSection.tsx`)**:
   - 5 grounded, truthful reasons (varied menu, veg/non-veg harmony, casual hangout, City Center location, ₹200–₹400 budget)

8. **Photo Gallery & Lightbox (`GallerySection.tsx` & `LightboxModal.tsx`)**:
   - Responsive masonry grid with the real storefront, real menu card, al fresco patio, and interior views
   - Fullscreen lightbox with zoom, arrow navigation, and Escape key listener
   - Transparent placeholder policy for future diner photography

9. **Customer Reviews (`ReviewsSection.tsx`)**:
   - Owner-supplied 4.5/5 rating from 544+ Google reviews
   - 5 synthesized diner themes (pizza fusion, chicken lollipop & crispy babycorn, cold coffee & vibes, cooperative team, value/portions)
   - Link to Google Maps reviews without fabricating fake quotations

10. **Location & Contact (`LocationSection.tsx`)**:
    - Full verified address: B 18, Non-Company Housing Estate, City Center, Durgapur
    - Embedded interactive Google Map
    - Valid `tel:08250204770` link
    - Direct Google Maps directions link

11. **Dark Editorial Footer (`Footer.tsx`)**:
    - Complete branding, links, timings, dynamic copyright year, and final CTA banner: *"Your Next Favorite Meal Is Waiting."*

12. **Mobile Bottom Action Bar (`MobileActionBar.tsx`)**:
    - Quick "Call Cafe", "Menu Card", and "Directions" buttons optimized for mobile touch screens

13. **SEO & Structured Data**:
    - JSON-LD Restaurant Schema in `index.html` with verified coordinates, rating, hours, address, and phone
    - Canonical meta, OpenGraph cards, Twitter cards
    - `robots.txt` and `sitemap.xml` included in `public/`

---

## 🛠️ Tech Stack & Scripts

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display, Plus Jakarta Sans, Hind Siliguri)

### Available Commands

```bash
# Start local development server
npm run dev

# Run production build & typecheck
npm run build

# Preview production build locally
npm run preview
```
