# Exodos Web Frontend

Private repo that contains all assets related to Exodos public facing website built with Next.js and TypeScript.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- **Mobile-responsive design** with touch-friendly interactions
- **Progressive Web App (PWA)** capabilities
- **SEO optimized** with proper meta tags
- **Accessibility compliant** with WCAG guidelines

## Cross-Platform Support

This website is optimized for:
- **Desktop browsers**: Chrome, Firefox, Safari, Edge
- **Mobile devices**: iOS Safari, Chrome Mobile, Samsung Internet
- **Tablets**: iPad, Android tablets
- **Touch devices**: Full touch gesture support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

```bash
# Run development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── MobileNav.tsx   # Mobile navigation
│   └── ResponsiveLayout.tsx
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
└── styles/             # Additional styles
```

## Mobile Optimization

- Responsive breakpoints: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly minimum tap targets (44px)
- Mobile-first CSS approach
- Optimized images with Next.js Image component
- PWA manifest for app-like experience

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers with equivalent versions

## Deployment

The project is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request 
