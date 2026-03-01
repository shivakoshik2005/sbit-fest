# AAROHAN 2026 - SBIT College Fest Website

A production-ready, responsive college fest website for "Swarna Bharathi Institute of Science and Technology (SBIT)" titled "AAROHAN 2026".

## Features

- 🎨 Modern Glassmorphism Design
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🚀 Fast Performance with React + Vite
- 🎭 Smooth Animations with Framer Motion
- 🎯 Easy Customization through Static Data

## Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v3
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd fest
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment to GitHub Pages

1. Install gh-pages as a dev dependency (already included):

```bash
npm install gh-pages --save-dev
```

2. Update the `package.json` homepage field:

```json
"homepage": "https://yourusername.github.io/repo-name"
```

3. Deploy:

```bash
npm run deploy
```

Or manually:

```bash
npm run build
npx gh-pages -d dist
```

## Customization

### Changing Content

All website content is stored in `src/data/content.js`. You can modify:

- **College Information:** Edit `collegeInfo` object
- **About Content:** Edit `aboutContent` object  
- **Events:** Edit the `events` array with your events
- **Gallery Images:** Edit `galleryImages` array
- **Contact Info:** Edit `contactInfo` object

### Adding/Modifying Events

In `src/data/content.js`, each event has:

```javascript
{
  id: 1,
  name: "Event Name",
  banner: "https://url-to-banner-image",
  description: "Event description",
  image: "https://url-to-image",
  icon: "https://url-to-icon",
  contests: [
    {
      id: 1,
      name: "Contest Name",
      poster: "https://url-to-poster",
      description: "Contest description",
      rules: "Contest rules",
      registerLink: "https://google-form-url"
    }
  ]
}
```

### Changing Images

All images use external URLs. You can replace them with:

1. **Unsplash Images:** Visit [unsplash.com](https://unsplash.com) and copy image URLs
2. **Your Own Images:** Upload to any image hosting service and use the URL
3. **Local Images:** Place images in `public/` folder and reference as `/image-name.jpg`

## Project Structure

```
/fest
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── README.md           # This file
├── public/            # Static assets
│   └── favicon.svg    # Website favicon
└── src/
    ├── main.jsx       # React entry point
    ├── App.jsx        # Main App component with routing
    ├── index.css      # Global styles and Tailwind
    ├── components/    # Reusable components
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── GlassCard.jsx
    │   ├── EventCard.jsx
    │   └── ContestCard.jsx
    ├── pages/         # Page components
    │   ├── Home.jsx
    │   ├── Events.jsx
    │   ├── EventDetails.jsx
    │   └── Gallery.jsx
    └── data/          # Static data
        └── content.js # All website content
```

---

## Components Documentation

This section provides detailed information about all components in the project, including their sizes, responsive behavior, and how to customize them.

### Table of Contents
1. [EventCard](#eventcard)
2. [ContestCard](#contestcard)
3. [GlassCard](#glasscard)
4. [Header](#header)
5. [Footer](#footer)

---

### EventCard

The EventCard component displays individual events in the Events page with a banner, icon, name, description, and contest count.

**File Location:** `src/components/EventCard.jsx`

**Usage:**
```jsx
import EventCard from './components/EventCard';

<EventCard 
  event={eventData} 
  index={0} 
  onClick={() => handleEventClick(eventData)} 
/>
```

#### Component Structure:

| Element | Class | Size (Desktop) | Size (Tablet) | Size (Mobile) |
|---------|-------|----------------|---------------|---------------|
| Card Container | `glass rounded-2xl` | Full width in grid | Full width in grid | Full width |
| Banner Image | `h-48` | 192px fixed | 192px fixed | 192px fixed |
| Event Icon | `w-16 h-16` | 64px × 64px | 64px × 64px | 64px × 64px |
| Icon Border | `border-2 border-white/30` | 2px solid | 2px solid | 2px solid |
| Icon Border Radius | `rounded-xl` | 12px | 12px | 12px |
| Content Padding | `p-6` | 24px | 24px | 24px |
| Title | `text-xl` | 20px | 20px | 20px |
| Description | `text-sm` | 14px | 14px | 14px |
| Contest Count | `text-sm` | 14px | 14px | 14px |

#### Responsive Grid Layout (in Events.jsx):

```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

| Breakpoint | Class | Columns | Gap |
|------------|-------|---------|-----|
| Mobile (default) | - | 1 | - |
| Tablet (≥640px) | `sm:grid-cols-2` | 2 | 24px (gap-6) |
| Desktop (≥1024px) | `lg:grid-cols-3` | 3 | 24px (gap-6) |

#### How to Modify EventCard:

**1. Change Banner Height:**
```jsx
// Current: h-48 (192px)
// Change to different height:
h-32    // 128px
h-40    // 160px  
h-56    // 224px
h-64    // 256px
```

**2. Change Icon Size:**
```jsx
// Current: w-16 h-16 (64px)
// Change to:
w-12 h-12   // 48px
w-20 h-20   // 80px
w-24 h-24   // 96px
```

**3. Change Card Padding:**
```jsx
// Current: p-6 (24px)
// Change to:
p-4     // 16px
p-8     // 32px
p-10    // 40px
```

**4. Change Grid Columns:**
In `src/pages/Events.jsx`, modify the grid classes:
```jsx
// Current: 1 col mobile, 2 cols tablet, 3 cols desktop
// Change to:
grid                   // 1 column everywhere
grid-cols-2            // 2 columns everywhere
grid-cols-4 gap-8      // 4 columns, 32px gap
```

**5. Add Hover Animation:**
The card already has hover effects. To customize:
```jsx
whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(99, 102, 241, 0.25)' }}
// Modify the y offset or boxShadow values
```

---

### ContestCard

The ContestCard component displays individual contests within an event with a poster, name, description, and registration button.

**File Location:** `src/components/ContestCard.jsx`

**Usage:**
```jsx
import ContestCard from './components/ContestCard';

<ContestCard 
  contest={contestData} 
  index={0} 
  onRegister={() => handleRegister(contestData)} 
/>
```

#### Component Structure:

| Element | Class | Size (Desktop) | Size (Tablet) | Size (Mobile) |
|---------|-------|----------------|---------------|---------------|
| Card Container | `glass rounded-xl` | Full width in grid | Full width in grid | Full width |
| Poster Image | `h-32` | 128px fixed | 128px fixed | 128px fixed |
| Trophy Icon | `p-2 rounded-lg` | 8px padding | 8px padding | 8px padding |
| Content Padding | `p-4` | 16px | 16px | 16px |
| Title | `text-lg` | 18px | 18px | 18px |
| Description | `text-xs` | 12px | 12px | 12px |
| Register Button | `py-2.5 px-4` | h:10px p:16px | h:10px p:16px | h:10px p:16px |

#### Responsive Grid Layout (in EventDetails.jsx):

```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

| Breakpoint | Class | Columns | Gap |
|------------|-------|---------|-----|
| Mobile (default) | - | 1 | - |
| Tablet (≥640px) | `sm:grid-cols-2` | 2 | 24px (gap-6) |
| Desktop (≥1024px) | `lg:grid-cols-3` | 3 | 24px (gap-6) |

#### How to Modify ContestCard:

**1. Change Poster Height:**
```jsx
// Current: h-32 (128px)
// Change to:
h-24    // 96px
h-40    // 160px
h-48    // 192px
```

**2. Change Button Size:**
```jsx
// Current: py-2.5 px-4
// Change to:
py-3 px-6    // Larger button
py-2 px-3    // Smaller button
```

**3. Change Card Border Radius:**
```jsx
// Current: rounded-xl (12px)
// Change to:
rounded-lg       // 8px
rounded-2xl      // 16px
rounded-3xl      // 24px
```

**4. Modify Grid Layout:**
In `src/pages/EventDetails.jsx`:
```jsx
// Current: 1/2/3 columns based on breakpoint
// Change to:
grid-cols-1          // Always 1 column
sm:grid-cols-2       // Always 2 columns from tablet
lg:grid-cols-4 gap-8 // 4 columns on desktop
```

---

### GlassCard

A reusable glassmorphism card component with 3D mouse-following effects when hovered.

**File Location:** `src/components/GlassCard.jsx`

**Usage:**
```jsx
import GlassCard from './components/GlassCard';

<GlassCard hover={true} delay={0.5}>
  Your content here
</GlassCard>

// Or as clickable button:
<GlassCard onClick={() => handleClick()} hover={true}>
  Clickable content
</GlassCard>
```

#### Component Properties:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | Required | Card content |
| `className` | string | '' | Additional CSS classes |
| `hover` | boolean | false | Enable hover effects |
| `onClick` | function | undefined | Click handler (makes it a button) |
| `delay` | number | 0 | Animation delay in seconds |

#### Default Styles Applied:

| Style | Class | Value |
|-------|-------|-------|
| Container | `glass rounded-2xl p-6` | Glass effect, 16px radius, 24px padding |
| Hover Scale | `scale: 1.02` | 2% scale on hover |
| Hover Y | `y: -5` | 5px up on hover |
| Hover Shadow | `boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)'` | Purple shadow |
| Animation Duration | `duration: 0.5` | 500ms transitions |

#### How to Modify GlassCard:

**1. Change Default Padding:**
```jsx
// Current: p-6 (24px)
// In the component:
className={`glass rounded-2xl p-8`}  // 32px padding
```

**2. Disable/Modify Hover Effects:**
```jsx
// Current hover in component:
whileHover={hover ? { 
  scale: 1.02,
  y: -5,
  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)'
} : {}}

// Modify to change animation:
whileHover={hover ? { 
  scale: 1.05,          // More scale
  y: -10,               // More lift
  boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)'  // Larger shadow
} : {}}
```

**3. Change Border Radius:**
```jsx
className="glass rounded-lg p-6"    // 8px
className="glass rounded-xl p-6"    // 12px (current)
className="glass rounded-3xl p-6"  // 24px
```

**4. Add Custom Styles via className:**
```jsx
<GlassCard className="h-full w-full">
  Content
</GlassCard>

<GlassCard className="bg-white/20">
  Different background
</GlassCard>
```

---

### Header

The navigation header with college logos, fest name, and responsive navigation menu.

**File Location:** `src/components/Header.jsx`

**Usage:**
```jsx
import Header from './components/Header';

<Header />
```

#### Component Structure:

| Element | Class | Desktop Size | Tablet Size | Mobile Size |
|---------|-------|--------------|-------------|-------------|
| Container | `fixed top-0` | Full width | Full width | Full width |
| SBIT Logo | `w-16 h-16` | 64px × 64px | 64px × 64px | Hidden |
| Spark Logo | `w-18 h-18 sm:w-16 sm:h-16` | 72×72→64×64 | 64px × 64px | 72px × 72px |
| College Name | `hidden sm:block` | Visible | Visible | Hidden |
| Fest Name | `hidden md:block` | Visible | Hidden | Hidden |
| Nav Links | `hidden md:flex` | Visible | Hidden | Hidden |
| Mobile Menu Button | `md:hidden` | Hidden | Hidden | Visible |

#### Responsive Breakpoints:

| Breakpoint | Width | Header Behavior |
|------------|-------|-----------------|
| Mobile (< 640px) | < 640px | Logos hidden, only menu button visible |
| Tablet (640px - 1024px) | 640px - 1024px | College name visible, fest name hidden |
| Desktop (> 1024px) | > 1024px | All elements visible |

#### How to Modify Header:

**1. Change Logo Sizes:**
```jsx
// In Header.jsx:
// SBIT Logo - change w-16 h-16
w-12 h-12   // 48px
w-20 h-20   // 80px
w-24 h-24   // 96px

// Spark Logo - already has responsive: w-18 h-18 sm:w-16 sm:h-16
w-20 h-20 sm:w-18 sm:h-18   // Adjust sizes
```

**2. Change Header Height/Padding:**
```jsx
// Current: 
// isScrolled: py-2 (8px)
// not scrolled: py-3 (12px)

// Modify in:
${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-4'}
```

**3. Add/Remove Nav Links:**
```jsx
// In Header.jsx, modify navItems array:
const navItems = [
  { name: 'About', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'New Page', path: '/new-page' },  // Add new
];

// Remove link by removing from array
```

**4. Change Mobile Menu Trigger Point:**
```jsx
// Current: md:hidden (hidden at ≥768px)
// Change to:
lg:hidden    // Hidden at ≥1024px
xl:hidden    // Hidden at ≥1280px
```

**5. Change Scroll Threshold:**
```jsx
// Current: window.scrollY > 50
// Change to:
window.scrollY > 100   // More scroll before effect
window.scrollY > 20    // Less scroll before effect
```

---

### Footer

The footer section with fest info, quick links, and contact information.

**File Location:** `src/components/Footer.jsx`

**Usage:**
```jsx
import Footer from './components/Footer';

<Footer />
```

#### Component Structure:

| Element | Class | Desktop | Tablet | Mobile |
|---------|-------|---------|--------|--------|
| Container | `grid grid-cols-1 md:grid-cols-3` | 3 columns | 3 columns | 1 column |
| Column Gap | `gap-8` | 32px | 32px | 32px |
| Section Padding | `py-16` | 64px | 64px | 64px |
| Social Icons | `p-2 rounded-lg` | 8px padding | 8px padding | 8px padding |
| Icon Size | `w-5 h-5` | 20px | 20px | 20px |

#### Responsive Grid:

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

| Breakpoint | Columns | Layout |
|------------|---------|--------|
| Mobile | 1 | Stacked vertically |
| Tablet/Desktop | 3 | Side by side |

#### Footer Sections:

1. **About Section** - Fest name, description, social links
2. **Quick Links** - Navigation links (Home, Events, Gallery)
3. **Contact Info** - Email, phone, address

#### How to Modify Footer:

**1. Change Grid Columns:**
```jsx
// Current: 1 col mobile, 3 cols desktop
// Change to:
grid-cols-1 md:grid-cols-2      // 2 columns on desktop
grid-cols-1 md:grid-cols-4      // 4 columns on desktop
```

**2. Change Column Gap:**
```jsx
// Current: gap-8 (32px)
// Change to:
gap-4     // 16px
gap-12    // 48px
gap-16    // 64px
```

**3. Add More Social Links:**
```jsx
// In Footer.jsx, add more social icons:
<a href={contactInfo.social.twitter} ...>
  <Twitter className="w-5 h-5" />
</a>
<a href={contactInfo.social.linkedin} ...>
  <Linkedin className="w-5 h-5" />
</a>
```

**4. Add More Footer Columns:**
```jsx
// Add new column in the grid:
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* About */}
  {/* Quick Links */}
  {/* Contact */}
  {/* New Column */}
  <GlassCard>
    <h3>New Section</h3>
    Content
  </GlassCard>
</div>
```

**5. Change Footer Background:**
```jsx
// Current: bg-pattern
// In Footer.jsx:
className="bg-gradient-to-r from-primary to-secondary py-16"
```

---

## Responsive Design Guide

### Current Breakpoints Used:

| Breakpoint | Min Width | Used For |
|------------|-----------|----------|
| `sm:` | 640px | Card grids (2 columns) |
| `md:` | 768px | Header navigation, Footer grid |
| `lg:` | 1024px | Card grids (3 columns) |

### Common Responsive Patterns:

**Grid System:**
```jsx
// 1 column mobile → 2 tablet → 3 desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// 2 columns mobile → 3 desktop
className="grid grid-cols-2 md:grid-cols-3 gap-4"
```

**Hiding/Showing Elements:**
```jsx
// Hide on mobile, show on tablet+
className="hidden sm:block"

// Hide on tablet+, show on desktop
className="hidden lg:block"

// Always hide
className="hidden"

// Always show (default)
className="block"
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

---

Built with ❤️ by SBIT

