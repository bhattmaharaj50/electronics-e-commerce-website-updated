# 25FlowElectronics

## Overview
An e-commerce storefront for electronics products targeting the Kenyan market. Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui components. Products are managed via static data in `lib/data.ts`. Orders go through WhatsApp.

## Project Architecture
- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: Tailwind CSS 4, shadcn/ui (Radix primitives), Lucide icons
- **Language**: TypeScript
- **Package Manager**: pnpm

### Key Directories
- `app/` - Next.js App Router pages (home, about, admin, categories, FAQ, product, search)
- `components/` - React components (site header/footer, product cards, hero, etc.)
- `components/ui/` - shadcn/ui base components
- `lib/` - Data layer (`data.ts` with product catalog, `types.ts` with TypeScript interfaces)

### Data Layer
All product and category data lives in `lib/data.ts` as static arrays. Helper functions filter products by featured, flash sale, deal of day, category, slug, and search query.

## Development
- **Dev server**: `npx next dev -H 0.0.0.0 -p 5000`
- **Build**: `npx next build`
- **Start**: `npx next start -H 0.0.0.0 -p 5000`

## Deployment
- Target: autoscale
- Build: `npx next build`
- Run: `npx next start -H 0.0.0.0 -p 5000`
