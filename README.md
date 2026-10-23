# Signature Property & Consultant — Complete Luxury Portfolio System

An enterprise-grade, high-end architectural and real estate consultancy portfolio website for **Signature Property & Consultant** (Lahore, Pakistan). 

Built to present the company, its core services, verified track record, executive leadership, and dedicated advisory desk for Overseas Pakistanis, with an ultra-luxurious editorial aesthetic inspired by modern architectural studios.

---

## 🏛️ Company Identity & Verification Facts

- **Formal Business Name**: Signature Property & Consultant
- **Public Brand**: Signature Property
- **Operating Market**: Lahore, Punjab, Pakistan
- **Established**: 2024
- **Official Portals**:
  - Main Portal: [signatureproperty.pk](https://signatureproperty.pk)
  - Portfolio Website: [portfolio.signatureproperty.pk](https://portfolio.signatureproperty.pk)
- **Primary Contact Channels**:
  - **Phone / WhatsApp**: [+92 329 8838068](https://wa.me/923298838068)
  - **Email**: [thesignatureproperty@gmail.com](mailto:thesignatureproperty@gmail.com)
- **Official Social Media**:
  - **TikTok**: [@signatureproperty0](https://www.tiktok.com/@signatureproperty0?_r=1&_t=ZN-9AnCVRSVdt0)
  - **Instagram**: [@signatureproperty0](https://www.instagram.com/signatureproperty0?psln=MXk1ZDU4N255OG90)
  - **Facebook**: [Signature Property](https://www.facebook.com/share/1Dybqzni7P/)

---

## 👥 Executive Leadership Team

- **Zubair Khizer** — Chief Executive Officer (CEO)
- **Usman Sagheer** — Chief Technology Officer (CTO)
- **Salman Fiaz** — Sales Officer

---

## 🎨 Official Brand Color System

- **Signature Green**: `#00AF62` (Accent, interactive highlights, status dots)
- **Deep Teal**: `#005F4B` (Secondary brand depth, italic serifs, container backgrounds)
- **Obsidian / Near-Black**: `#0A0A0A` / `#090b0c` (Headings, primary typography, dark cards)
- **Limestone / Ecru Background**: `#f5f5f2` (Warm architectural paper background)
- **Sand / Accent Neutral**: `#e9e8e4` (Secondary cards, service containers)
- **Pure White**: `#FFFFFF`

---

## 💼 6 Core Service Offerings

1. **Property Buying & Selling Support**: Private transaction coordination, curated shortlisting, and pricing reality checks.
2. **Residential & Commercial Property Consultancy**: Custom property search based on client budget, timeline, and spatial utility.
3. **Property Video Shoots & Visual Storytelling**: Cinematic walkthroughs, architectural framing, and immersive reels.
4. **Meta Ads & Strategic Property Promotion**: Data-driven digital campaigns connecting listings with high-intent buyers.
5. **Developer & Project Marketing**: Turnkey marketing frameworks for apartment developments and commercial complexes.
6. **Dedicated Advisory for Overseas Pakistanis**: Virtual video inspections, document due-diligence checklists, and timezone-aligned WhatsApp handling.

---

## 📈 Proven Case Studies Included

1. **Ichhra Shama Residential Project (Lahore)**: 12 apartment units marketed and completely sold out within ~1 to 2 months.
2. **Cinematic Video Promotion Benchmark**: Early high-impact property shoot resulting in a completed transaction within 7 days of release.

---

## 🛡️ Enterprise Security & Hardening Architecture

1. **Content Security Policy (CSP)**:
   - Restricts resource loading to self and whitelisted CDNs (`cdn.tailwindcss.com`, `code.iconify.design`, Google Fonts).
   - Frame ancestors restricted to prevent clickjacking.
2. **Security Headers Pre-configured**:
   - `X-Frame-Options: SAMEORIGIN`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()`
   - `Strict-Transport-Security (HSTS)`
3. **Client-Side Input Sanitization**:
   - Strict XSS sanitizer stripping `<script>`, HTML tags, pseudo-protocols, and control characters before form dispatching.
   - Anti-spam submit button debouncing.
4. **Server Deployment Configurations Included**:
   - `.htaccess`: Apache / LiteSpeed (cPanel) configuration with security headers, Gzip compression, and browser caching.
   - `_headers`: Cloudflare Pages and Netlify security headers.
   - `nginx.conf`: Production Nginx reverse-proxy & static server configuration snippet.
   - `.well-known/security.txt`: RFC 9116 security disclosure standard file.

---

## 📁 Project Architecture & File Structure

```text
SIGNATURE PROPERTY PORTFOLIO/
├── .htaccess                     # Apache / LiteSpeed security & caching rules
├── _headers                      # Cloudflare Pages / Netlify security headers
├── nginx.conf                    # Nginx production configuration snippet
├── robots.txt                    # Search engine crawling rules
├── sitemap.xml                   # XML sitemap with all subpages
├── site.webmanifest              # PWA manifest for mobile installation
├── package.json                  # Dev server and script commands
├── README.md                     # Comprehensive documentation
├── .gitignore                    # Clean repository ignore patterns
├── .well-known/
│   └── security.txt              # RFC 9116 security contact policy
├── assets/
│   ├── logo/
│   │   ├── Signature Property Website Logo for Light Mode.png
│   │   ├── Signature Property Website Logo for Dark Mode.png
│   │   ├── Icon Logo.jpeg
│   │   └── Black Logo with White Background.png
│   └── images/
│       ├── hero-mansion.jpg
│       ├── luxury-interior.jpg
│       ├── luxury-tower.jpg
│       └── villa-entrance.jpg
├── css/
│   └── style.css                 # Modular luxury tokens, cursor, 3D tilt, and typography
├── js/
│   ├── main.js                   # Application bootstrapper
│   ├── cursor.js                 # Magnetic blend-difference cursor engine
│   ├── particles.js              # Ambient dust canvas particle simulator
│   ├── animations.js             # 3D tilt, scroll reveals, parallax hero, counters
│   └── interactions.js           # Menu, FAQ accordion, modals, secure form handler
├── index.html                    # Main luxury portfolio webpage
├── 404.html                      # Bespoke 404 error page matching dark aesthetic
├── privacy.html                  # Standalone full Privacy Policy page
└── terms.html                    # Standalone full Terms of Reference & Advisory Charter
```

---

## 🚀 Running the Project

### Option 1: Direct File Launch
Double-click `index.html` in your file explorer to open it in any modern browser.

### Option 2: Local Dev Server
```bash
npm run dev
# or
npx serve -l 3000 .
```
Visit `http://localhost:3000`.
