# BrightPath Home Tuition - Next.js Application

A modern, responsive website for BrightPath Home Tuition built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: 
  - Next.js Image optimization for faster loading
  - Server-side rendering for improved SEO
  - Optimized font loading with next/font
- **Smooth Animations**: 
  - Scroll-triggered animations
  - Counter animations in stats section
  - Smooth scrolling for anchor links
  - Hover effects and transitions
- **Interactive Components**:
  - Mobile-responsive navigation with hamburger menu
  - Animated marquee banner
  - Interactive pricing cards
  - Scroll-reveal animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
brightpath-tuition/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── About.tsx           # About section with animated stats
│   ├── ClientLayout.tsx    # Client-side layout wrapper
│   ├── CTA.tsx             # Call-to-action section
│   ├── Features.tsx        # Features/approach section
│   ├── Footer.tsx          # Footer with contact info
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── MarqueeBanner.tsx   # Animated banner
│   ├── Pricing.tsx         # Pricing plans
│   ├── Programs.tsx        # Classes/programs section
│   ├── Subjects.tsx        # Subjects offered
│   └── WhyChooseUs.tsx     # Why choose us section
├── hooks/                   # Custom React hooks
│   ├── useScrollAnimation.ts  # Scroll animation hook
│   └── useSmoothScroll.ts     # Smooth scroll hook
├── public/                  # Static assets (if needed)
├── .gitignore
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors

Update brand colors in `tailwind.config.ts`:

```typescript
colors: {
  'brand-purple': 'rgb(82, 0, 128)',
  'brand-green': 'rgb(9, 216, 154)',
  'brand-yellow': 'rgb(252, 181, 32)',
  // ... other colors
}
```

### Fonts

Fonts are configured in `app/layout.tsx` using next/font:
- Primary: Plus Jakarta Sans
- Secondary: Nunito Sans

### Content

Update content directly in the component files within the `components/` directory.

### Images

Images are loaded from external sources (Pexels and CDN). To use local images:
1. Place images in the `public/` folder
2. Update image paths in components
3. Update `next.config.js` if using external image domains

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables (if needed):

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your-api-url
```

### Image Optimization

External image domains are configured in `next.config.js`:

```javascript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.pexels.com' },
    { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
  ],
}
```

## 📱 Sections

1. **Header**: Fixed navigation with mobile menu
2. **Hero**: Main landing section with CTA
3. **Marquee Banner**: Animated scrolling benefits
4. **About**: Company overview with animated statistics
5. **Why Choose Us**: Benefits and approach
6. **Subjects**: List of subjects offered
7. **Programs**: Class-wise program details
8. **Features**: Learning approach breakdown
9. **Pricing**: Pricing plans and packages
10. **CTA**: Call-to-action for free assessment
11. **Footer**: Contact information and links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Configure for Next.js SSR
- **Self-hosted**: Use `npm run build` and `npm run start`

## 📄 License

This project is for BrightPath Home Tuition. All rights reserved.

## 🤝 Support

For support or questions, contact:
- Phone: +91 XXXXX XXXXX
- WhatsApp: +91 XXXXX XXXXX

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
