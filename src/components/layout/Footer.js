import Link from "next/link";
import { POPULAR_CATEGORIES } from "@/constants/categories";
import { NAV_LINKS } from "@/constants/nav";

const SUPPORT_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/list-item", label: "List an item" },
  { href: "/browse", label: "Browse all" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-[90px] w-full border-t border-black/[0.06] bg-white text-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 py-5 sm:px-6 md:grid-cols-4 lg:px-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-base font-semibold text-foreground">
            Rently
          </Link>
          <p className="mt-1.5 max-w-xs text-sm font-medium leading-snug text-foreground/75">
            Rent cameras, bikes, cars, and gear from people in your town.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Explore</p>
          <ul className="mt-2 space-y-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Categories</p>
          <ul className="mt-2 space-y-1.5">
            {POPULAR_CATEGORIES.map((category) => (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Get started</p>
          <ul className="mt-2 space-y-1.5">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-3 text-sm font-medium text-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>&copy; {year} Rently</p>
          <p>Local rentals, made simple.</p>
        </div>
      </div>
    </footer>
  );
}