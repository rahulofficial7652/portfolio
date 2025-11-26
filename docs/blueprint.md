# **App Name**: DevfolioX

## Core Features:

- Navbar: Display a responsive Navbar with logo, navigation links (Home, About, Skills, Projects, Achievements, Contact), and a dark/light mode toggle using shadcn/ui switch and responsive hamburger menu.
- Hero Section: Implement a Hero section with name, role, tagline, call-to-action buttons (Download Resume, Contact Me), and an optional profile photo or developer illustration.
- About Section: Show an About section with a short professional bio highlighting experience and expertise.
- Skills Section: Implement a Skills section displaying skills as badges or cards, grouped by category (Backend, Frontend, Databases, Tools, Learning/Future Skills) with icons.
- Projects Section: Implement a Projects section showcasing project cards with title, description, tech stack tags, and buttons for "Live Demo" and "GitHub", sourcing data from `src/data/projects.js`.
- Achievements Section: Show an Achievements section with a card layout displaying title, issuer, and a "View Certificate" button.
- Contact Section: Include a Contact section with email, LinkedIn, GitHub, and Twitter icons, and a contact form using shadcn/ui and React Hook Form that sends emails via EmailJS on submit.

## Style Guidelines:

- Light Mode: Background: #F8FAFC (slate-50)
- Light Mode: Primary: #2563EB (blue-600)
- Light Mode: Accent: #10B981 (emerald-500)
- Light Mode: Text: #1E293B (slate-800)
- Light Mode: Card Background: #FFFFFF
- Dark Mode: Background: #0F172A (slate-900)
- Dark Mode: Primary: #60A5FA (blue-400)
- Dark Mode: Accent: #34D399 (emerald-400)
- Dark Mode: Text: #F8FAFC (slate-50)
- Dark Mode: Card Background: #1E293B
- Headline font: 'Space Grotesk' (sans-serif) for a modern, tech-forward aesthetic in headings and titles. This combines well with Inter for longer form-text
- Body font: 'Inter' (sans-serif) for clean, readable body text and descriptions.
- Use Lucide icons for a consistent and modern look across the portfolio.
- Implement smooth scrolling and subtle animations with Framer Motion for enhanced UX, creating hover effects on cards and buttons.