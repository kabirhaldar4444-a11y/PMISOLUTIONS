# Project Management Institute (PMI) Services Web Clone

Welcome to the **PMIS** codebase—a fully modular, responsive, high-performance React JS clone of the official website: `https://www.pmiservices.org/`. 

This documentation covers the workspace folder design, dynamic content mappings, typography, visual layouts, and detailed guides for updating content, assets, or launching deployments.

---

## 1. Directory Tree Structure

```text
PMIS/
├── public/                 # Static public files
├── src/
│   ├── assets/             # Core asset imports
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   │   └── PMIS logo.png
│   │   │   ├── pmi_cubes.png
│   │   │   ├── professional_community.png
│   │   │   ├── mission_target.png
│   │   │   ├── vision_eagle.png
│   │   │   └── impact_mountain.png
│   │   ├── icons/          # Custom SVG icons
│   │   └── fonts/          # Local font files
│   ├── components/         # Reusable layouts & blocks
│   │   ├── layout/         # Frame structures
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/       # Section modular components
│   │   │   └── Hero.jsx
│   │   └── shared/         # Abstract components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Form.jsx
│   │       └── SectionWrapper.jsx
│   ├── data/               # Modular content layers
│   │   ├── menuData.js
│   │   ├── servicesData.js
│   │   ├── footerData.js
│   │   ├── testimonialsData.js
│   │   ├── contactData.js
│   │   ├── coursesData.js
│   │   └── partnershipsData.js
│   ├── pages/              # Primary route views
│   │   ├── Home.jsx
│   │   ├── Solutions.jsx
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Partnerships.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── TermsConditions.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ServiceDelivery.jsx
│   │   └── RefundPolicy.jsx
│   ├── styles/             # Stylesheet architecture
│   │   ├── variables.css   # Dynamic custom design tokens
│   │   ├── utility.css     # CSS grid, layouts, button frames
│   │   ├── responsive.css  # Breakpoint overrides
│   │   └── global.css      # Core resets and entry bundle
│   ├── App.jsx             # Route bindings and layout
│   └── main.jsx            # Application mount point
├── index.html              # HTML core shell & SEO metadata
├── package.json            # Dependencies & scripts
└── PROJECT_STRUCTURE.md    # Documentation file
```

---

## 2. Component & Layout Design

*   **`Header.jsx`**: A fixed header that collapses smoothly when scrolled. Reads menu items dynamically from `menuData.js` and provides a hamburger sliding drawer for mobile devices.
*   **`Footer.jsx`**: Brand-rich footer featuring responsive layout columns, interactive newsletter subscription, full office postal addresses, policy mappings, and custom animations.
*   **`SectionWrapper.jsx`**: Handles vertical paddings, responsive width boundaries (`.container`), and dynamic background properties (`white`, `gray`, `dark`).
*   **`Form.jsx`**: A fully functional React-state registration container. Includes first name, last name, email, course, country select lists, address fields, and a success feedback alert.

---

## 3. Policy & Section Mappings

To ensure exact replication of the original Wix ecosystem, we mapped standard URLs precisely:
*   **Refund Policy**: Located at `/accessibility-statement` rather than `/refund-policy`, retaining 100% same-to-same URL routing.
*   **Self-Confidence Course**: Located at `/self-confidencebuildingtraining` utilizing the spelling typo `"Self-Confience Building Training"` in its headers.
*   **Durgesh (CTO)**: Role in the team roster contains the exact spelling typo `"Cheif Technology Officer"` under `src/data/contactData.js`.

---

## 4. Maintenance & Content Update Guide

### How to Update Text content:
All major text descriptions are structured inside separate data sheets under `src/data/`. To alter text:
1. Locate the correct data file (e.g., `coursesData.js` for programs, `contactData.js` for team bios).
2. Modify the target string parameter. The layout will immediately ingest and display the updated copy.

### How to Update Images:
Place the new image into `src/assets/images/` and change the corresponding import reference inside the target page. For the logo, replace the image file directly at `src/assets/images/logo/PMIS logo.png`.

### How to Update Navigation Menus:
Add or remove entries inside the `menuLinks` array located under `src/data/menuData.js`. The `Header.jsx` and `Footer.jsx` navigation renderers will automatically adapt to the change.

---

## 5. CSS Architecture & Responsive Breakpoints

Our layout is built using Vanilla CSS with modular, layered imports inside `src/styles/global.css`:
*   `variables.css`: Houses CSS custom properties for fonts (`Outfit` / `Inter`), color schemes (Deep Navy `#0f2942` and Crimson `#da291c`), sizing scales, and transit durations.
*   `utility.css`: Provides responsive `.grid-2`, `.grid-3`, `.grid-4` frameworks, alignment flex boxes, button states, and card shapes.
*   `responsive.css`: Sets specific breakpoints adapting vertical scaling and paddings for distinct screen layouts:
    *   **Desktop & Laptops**: Widths above `1024px` (full layout, standard margins).
    *   **Tablets**: Widths between `768px` and `1024px` (cards switch to 2 columns, nav triggers slide drawer).
    *   **Mobiles**: Widths below `768px` (all grid columns stack vertically, spacing scales down).

---

## 6. Dependency List & Installation

The application uses standard libraries for seamless execution:
*   `react` & `react-dom` (v18+)
*   `react-router-dom` (v6+) — handles SPA routing
*   `react-icons` — provides vector icons for navigation indicators and brand graphics

### Installation Steps
1. Navigate into the project folder:
   ```powershell
   cd "c:\Users\Iron Man\Downloads\React Js\PMIS"
   ```
2. Install necessary node modules:
   ```powershell
   npm install
   ```

### Development Launch
Launch the local Vite server:
```powershell
npm run dev
```

### Production Build & Deploy
Compile the optimized production package:
```powershell
npm run build
```
This builds highly optimized static files in the `/dist` directory, ready to be hosted on Netlify, Vercel, AWS S3, or standard Linux Apache/Nginx systems.
