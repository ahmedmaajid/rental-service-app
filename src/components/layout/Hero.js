import Image from "next/image";
import Link from "next/link";
import { POPULAR_CATEGORIES } from "@/constants/categories";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="w-full px-4 pb-6 pt-2 sm:px-6 sm:pb-10 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl bg-[#f2f2f0]">
        <div className="absolute inset-y-0 right-0 hidden w-[55%] md:block lg:w-[58%]">
          <Image
            src="/images/hero-new.png"
            alt="3D rental items including camera, bike, speaker, tools, and guitar"
            fill
            priority
            sizes="(max-width: 768px) 0vw, 58vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f2f2f0] to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#f2f2f0] from-[38%] via-[#f2f2f0]/75 to-transparent md:block" />

        <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-10 lg:max-w-[48%] lg:px-12 lg:py-12">
          <h1 className="max-w-xl text-3xl font-medium text-foreground sm:text-4xl">
            Rent what you need from people in your town
          </h1>

          <p className="mt-3 max-w-md text-base font-medium leading-relaxed text-muted">
            Find cameras, tools, speakers, gear, and more from local providers —
            then message them directly.
          </p>

          <form action="/browse" method="get" className="mt-5 w-full max-w-md sm:mt-6">
            <div className="flex items-center gap-2 rounded-full bg-white p-1.5 pl-4 ring-1 ring-inset ring-black/[0.04]">
              <SearchIcon />
              <input
                id="hero-search"
                type="search"
                name="q"
                placeholder="Try “camera”, “speaker”, or “drill”"
                className="min-w-0 flex-1 bg-transparent py-2 text-[15px] font-medium text-foreground outline-none placeholder:text-foreground/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {POPULAR_CATEGORIES.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative h-44 w-full sm:h-48 md:hidden">
          <Image
            src="/images/hero-new.png"
            alt="3D rental items including camera, bike, speaker, tools, and guitar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f2f2f0] to-transparent" />
        </div>
      </div>
    </section>
  );
}
