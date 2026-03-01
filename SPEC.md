# AAROHAN 2026 - SBIT College Fest Website Specification

## 1. Project Overview

**Project Name:** AAROHAN 2026  
**College:** Swarna Bharathi Institute of Science and Technology (SBIT)  
**Type:** Responsive Single Page Application (React + Vite + Tailwind CSS)  
**Core Aesthetic:** Modern, clean, Light Tone with Glassmorphism

---

## 2. Technical Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v3
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

---

## 3. Design System

### Color Palette
- **Primary:** `#6366f1` (Indigo-500)
- **Secondary:** `#8b5cf6` (Violet-500)
- **Accent:** `#f472b6` (Pink-400)
- **Background:** `#f8fafc` (Slate-50)
- **Glass Background:** `rgba(255, 255, 255, 0.1)`
- **Glass Border:** `rgba(255, 255, 255, 0.2)`
- **Text Primary:** `#1e293b` (Slate-800)
- **Text Secondary:** `#64748b` (Slate-500)

### Glassmorphism Utilities
- Background: `rgba(255, 255, 255, 0.15)`
- Backdrop blur: `blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Shadow: `0 8px 32px rgba(31, 38, 135, 0.15)`

### Typography
- **Headings:** "Outfit" (Google Fonts) - Modern geometric sans-serif
- **Body:** "DM Sans" (Google Fonts) - Clean and readable
- **Sizes:**
  - H1: 4rem (64px)
  - H2: 2.5rem (40px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)

---

## 4. Page Structure

### 4.1 Header (Fixed Glassmorphism)
- **Left:** SBIT Logo + College Name
- **Center:** "AAROHAN 2026" Text
- **Right:** Fest Logo (placeholder)
- **Navigation:** About, Events, Gallery (visible as text links)

### 4.2 Home / About Page
- Hero section with college/fest introduction
- Key highlights as glassmorphism cards
- About section with text and images
- Contact/footer section

### 4.3 Events Page
- Grid of event cards (glassmorphism tiles)
- Event details modal/page
- Contests section within events
- Register button linking to external Google Forms

### 4.4 Gallery Page
- "Coming Soon" glassmorphism placeholder
- Modern countdown or elegant message

---

## 5. Data Structure (Static JSON)

### Events Data
```javascript
{
  id: 1,
  name: "Tech Symposium",
  banner: "url-to-banner",
  description: "Event description",
  contests: [
    {
      id: 1,
      name: "Code Debugging",
      poster: "url-to-poster",
      description: "Contest description",
      rules: "Rules text",
      registerLink: "google-form-url"
    }
  ]
}
```

### About Data
- College name
- Fest name and year
- About text content
- Image URLs

---

## 6. Components List

1. **Header** - Fixed navigation with glassmorphism
2. **Footer** - Contact info and social links
3. **GlassCard** - Reusable glassmorphism card component
4. **EventCard** - Event tile with hover effects
5. **ContestCard** - Contest tile with register button
6. **Hero** - Landing hero section
7. **AboutSection** - About content section
8. **GalleryPlaceholder** - Coming soon component
9. **EventDetails** - Full event page with contests

---

## 7. Animations

- Page transitions: Fade in/out
- Cards: Scale on hover with subtle shadow
- Header: Subtle backdrop blur change on scroll
- Staggered entrance animations for lists

---

## 8. Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 9. Deployment Configuration

- Build command: `npm run build`
- Output directory: `dist`
- Deploy to GitHub Pages via `gh-pages`

---

## 10. File Structure

```
/fest
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   └── favicon.ico
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── GlassCard.jsx
    │   ├── EventCard.jsx
    │   └── ContestCard.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Events.jsx
    │   ├── EventDetails.jsx
    │   └── Gallery.jsx
    └── data/
        └── content.js
```

