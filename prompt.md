# BAJER_WEB_SYSTEM: DRIVING_SCHOOL_OPTIMIZATION_2026
# REF: context.txt, Desktop.png, logo.png, images/

[TASK]: Build a high-performance, conversion-optimized single-page website (landing page) for a Polish driving school "Szkoła Jazdy Kraków Bajer" using `seo-pl` for local optimization. Keywords like "Szkoła jazdy Kraków", "Prawo Jazdy kraków" i tego typu frazy z google search console.

[BUSINESS_LOGIC]:
- Context: Base the copy, structure, and sections strictly on `context.txt`. and `sitemap.txt`
- Service Model: Premium, fast-track driving courses with a focus on practical, extreme skills and a stress-free environment.
- Target Audience: Young adults and students in Kraków wanting to get their driver's license quickly (1-1.5 months) and pass the exam without stress.
- Sales Angle: The "Partner" approach – no yelling, practical skills (skid pads/troleje), and guaranteed 3 drives per week. 
- Value Proposition: Quality over cheapness. Clear differentiation from a "Typical Driving School".
- Primary Call to Action: "Przestań prosić o podwózkę. Czas na Twój ruch." (Stop asking for rides. It's your move.)

[VISUAL_IDENTITY & THEME]:
- Theme: Modern Automotive Dark Mode mixed with Clean Light Sections. Energetic, trustworthy, and dynamic.
- Typography: Montserrat or Poppins for headings (bold, aggressive but clean), Inter or Roboto for body text. Use nongoogle fonts for beter performance.
- Colors: 
  - Primary (Deep Asphalt): `#111111` to `#1A1A1A`
  - Secondary (Racing Red): `#E62020` (used for primary buttons and accents)
  - Accent (Premium Gold): `#D4AF37` or `#E5A910` (used for highlights, stars, and subheadings like "RÓŻNIMY")
  - Background Light (Off-White): `#FAF9F6` (used for the Team section and Features section to create contrast)
- Branding: Utilize `logo.svg` in the top left navigation and footer.
- Prototype & Reference: 
  - Analyze `Desktop.png` to understand the structural prototype, alternating dark/light section flow, and layout intent.
  - use images from `/images` folder and when you lack them in some places then generate. 
  - *Rule:* Use the exact section order: Hero (Dark) -> Features (Light) -> Comparison (Dark) -> Team (Light) -> Testimonial (Dark) -> CTA (Dark with background image overlay) -> Footer.
- Layout: Structured grid for features and comparison table, circular masks for team member photos, wide impactful hero section.
- Motion: Smooth scroll-triggered fade-ins (reveal on scroll). Subtle hover effects on buttons and table rows.

[STRICT_UI_UX_RULES] (Must follow UX standards):
- Icons: NO EMOJIS. Use strict SVG icons (Lucide/Heroicons) with `w-8 h-8` for the features section, matching the red accent color.
- Interaction: All clickable elements (buttons, links in nav) MUST have `cursor-pointer`.
- Hover States: Use background color darkening or opacity transitions (`duration-200`). Buttons should scale very subtly (`scale-105`) without causing layout shifts.
- Layout Nav: Sticky or floating navbar (`backdrop-blur-md bg-black/80`) with clear primary action button.
- Contrast: Ensure high text legibility on dark backgrounds (use white/light gray text, not pure dark gray).
- Tech Stack: Default to `html-tailwind` (Next.js/React environment preferred for component structure).

[SITEMAP & CONTENT]:
- Extract all exact Polish copy, names, roles, and table data from `context.txt`.
- Do not invent new copy; use the provided text perfectly. Placeholder text in the Testimonial section should be replaced with a generic but realistic Polish review if instructed, or left as is if strict adherence is required.

[EXECUTION_STEPS - AI WORKFLOW]:

Vision, Strategy & Asset Analysis
- Read `context.txt` to internalize the text and business logic.
- Analyze `Desktop.png` for the core UI structure, alternating background colors, and table layout.
- Set up CSS variables or Tailwind config for the exact red, gold, and dark colors.
- Build the Navbar with the provided links and a Red CTA button.
- Build the Hero section with a dark background, bold heading (SZKOŁA JAZDY KRAKÓW BAJER), and two buttons (Primary Red, Secondary Outline/Text).
- Build the 3-column Features section on a light background with SVG icons.
- Build the Comparison section (Dark) utilizing a clear, easy-to-read table or grid layout.
- Build the Team section (Light) with 3 profile cards (circular images).
- Build the Testimonial & Final CTA sections (Dark).

Use simple animations, don't leave too much whitespace but ensure breathing room between sections, optimize images to webp, use proper semantic HTML tags (header, section, footer) to make a 100/100 Lighthouse SEO score. 

# EXECUTE: FULL_AUTO_MODE