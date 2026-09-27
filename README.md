# Rently

A local rental marketplace where people can find things to rent nearby — cameras, bikes, cars, electronics, event gear, and more — then message providers directly.

## Features

- Browse categories for common rental types
- Featured listings with pricing and direct Call / WhatsApp contact
- Mobile-friendly layout with bottom navigation
- Clean, lightweight UI built for local discovery

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Project structure

```text
src/
  app/                 # App Router pages and global styles
  components/
    layout/            # Navbar, Hero, BottomNav
    listings/          # Category grid and featured rentals
  constants/           # Categories and navigation config
  data/                # Sample featured listings
public/
  images/              # Category, product, and hero assets
```

## Notes

- Listing data is currently sample content in `src/data/featured.js`
- Product images live under `public/images/products/`
- Category images live under `public/images/categories/`

## License

Private project.
