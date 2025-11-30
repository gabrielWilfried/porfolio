# Gabriel Wilfried Yagaka Tagne - Professional Portfolio

A modern, production-ready professional portfolio website built with React, TypeScript, and Tailwind CSS. Features responsive design, dark mode, multilingual support (English/French), and smooth animations.

## Features

### Core Functionality
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode / Light Mode**: Theme switching with localStorage persistence
- **Multilingual Support**: English and French translations with i18next
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Downloadable Resume**: Direct PDF download functionality

### Sections
1. **Hero Section**: Name, title, intro, and CTA buttons
2. **About Me**: Comprehensive bio and highlights
3. **Skills**: Categorized skills with animated progress bars
4. **Portfolio**: Project showcase with detailed modals
5. **Experience**: Work history with responsibilities
6. **Education**: Academic background and coursework
7. **Contact**: Contact form and information

### Security & Best Practices
- OWASP secure coding principles
- Input validation and sanitization
- Safe external link handling
- No inline scripts (CSP-ready)
- TypeScript for type safety
- React best practices

## Technology Stack

### Frontend
- **React 18.3.1**: UI library
- **TypeScript 5.5.3**: Type safety
- **Vite 5.4.2**: Build tool
- **Tailwind CSS 3.4.1**: Styling
- **Framer Motion 11.x**: Animations
- **Lucide React 0.344.0**: Icons
- **React i18next**: Internationalization

### Development Tools
- ESLint: Code linting
- PostCSS: CSS processing
- Autoprefixer: CSS vendor prefixes

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
project/
├── public/
│   └── GabrielYagaka_s_Resume (3).pdf  # Resume PDF
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Portfolio.tsx    # Portfolio/Projects section
│   │   ├── Experience.tsx   # Work experience section
│   │   ├── Education.tsx    # Education section
│   │   ├── Contact.tsx      # Contact form & info
│   │   └── Footer.tsx       # Footer
│   ├── context/
│   │   └── ThemeContext.tsx # Theme management
│   ├── data/                # Data files
│   │   ├── projects.ts      # Project information
│   │   ├── experience.ts    # Work experience data
│   │   ├── education.ts     # Education data
│   │   └── skills.ts        # Skills data
│   ├── i18n/                # Internationalization
│   │   ├── config.ts        # i18n configuration
│   │   └── locales/
│   │       ├── en.json      # English translations
│   │       └── fr.json      # French translations
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

## Key Features Explained

### Theme Switching
The portfolio includes a light/dark mode toggle that:
- Persists user preference in localStorage
- Applies theme to entire site using Tailwind's dark mode
- Smooth transitions between themes

### Language Toggle
Bilingual support (English/French):
- Toggle button in navbar
- Persists language preference
- All content translated including projects, experience, and UI elements

### Project Showcase
Interactive portfolio section with:
- Project cards with tech stack badges
- Modal popups with full project details
- External links to live demos and GitHub repos
- Features list and descriptions

### Contact Form
Functional contact form that:
- Validates user input
- Opens default email client with pre-filled content
- Provides user feedback on submission

### Animations
Smooth animations using Framer Motion:
- Scroll-triggered animations
- Page load animations
- Hover effects
- Smooth transitions

## Content Sources

All content is extracted from:
1. Gabriel's Resume PDF
2. LinkedIn Profile: [Gabriel Yagaka](https://www.linkedin.com/in/gabriel-wilfried-yagaka-tagne-masters%C2%A0student-24927522b/)
3. GitHub Profile: [gabrielWilfried](https://github.com/gabrielWilfried)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## Performance

- Optimized bundle size
- Code splitting
- Lazy loading
- Optimized images
- Fast page loads

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

## Contact Information

- **Email**: gabrielwilfried0808@gmail.com
- **Phone**: +237 652-249-235
- **LinkedIn**: [Gabriel Yagaka](https://www.linkedin.com/in/gabriel-wilfried-yagaka-tagne-masters%C2%A0student-24927522b/)
- **GitHub**: [@gabrielWilfried](https://github.com/gabrielWilfried)

## License

© 2025 Gabriel Wilfried Yagaka Tagne. All rights reserved.

---

Built with ❤️ using React, TypeScript, and modern web technologies.