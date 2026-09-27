import Image from "next/image";
import Link from "next/link";

import { CATEGORIES } from "@/constants/categories";

function CategoryCard({ category }) {
  return (
    <Link
      href={category.href}
      className="group w-[30%] max-w-[140px] text-center sm:w-[120px] sm:max-w-none"
    >
      <div className="relative mx-auto aspect-square w-[88px] overflow-hidden rounded-full bg-neutral-50 sm:w-[110px] lg:w-[120px]">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="120px"
          className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-2.5">
        <p className="text-sm font-medium leading-snug text-gray-700">
          {category.label}
        </p>
      </div>
    </Link>
  );
}

export default function CategoryGrid() {
  return (
    <section className="w-full px-4 pb-8 pt-2 sm:px-6 sm:pb-10 lg:px-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-lg font-medium text-foreground sm:text-xl">
          Browse by category
        </h2>

        <Link
          href="/categories"
          className="shrink-0 text-sm font-medium text-foreground underline-offset-2 hover:underline"
        >
          Show all
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 sm:justify-start sm:gap-x-5 sm:gap-y-6">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.href} category={category} />
        ))}
      </div>
    </section>
  );
}
