import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { NEW_LISTINGS } from "@/data/newListings";

function Price({ amount }) {
  const formatted = Math.round(amount).toLocaleString("en-LK");

  return (
    <p className="flex items-baseline gap-0.5 text-foreground">
      <span className="text-[10px] font-medium ">LKR</span>
      <span className="text-base font-semibold leading-none sm:text-lg">
        {formatted}
      </span>
      <span className="text-[10px] font-medium ">.00</span>
    </p>
  );
}

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index + 1 <= Math.round(rating);
        return (
          <Star
            key={index}
            size={14}
            className={
              filled
                ? "fill-amber-600 text-amber-600"
                : "fill-transparent text-foreground/25"
            }
          />
        );
      })}
    </div>
  );
}

function NewListingCard({ item }) {
  return (
    <Link href={item.href} className="group flex min-w-0 flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/[0.08]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:p-4"
        />
      </div>

      <div className="mt-2 flex flex-col gap-1 px-0.5">
        <h3 className="truncate text-sm font-medium text-foreground">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-xs leading-snug text-gray-800 sm:text-sm">
          {item.description}
        </p>

        <div className="flex items-center gap-1.5">
          <Stars rating={item.rating} />
          <span className="text-xs text-foreground/45">
            {item.rating.toFixed(1)}
            <span className="text-foreground/35"> ({item.reviews})</span>
          </span>
        </div>

        <Price amount={item.price} />
      </div>
    </Link>
  );
}

export default function NewListings() {
  return (
    <section className="w-full px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-10">
      <div className="mb-4 flex items-end justify-between gap-3 sm:mb-5">
        <div>
          <h2 className="text-lg font-medium text-foreground sm:text-xl">
            New listings
          </h2>
          <p className="mt-0.5 text-sm text-foreground/55">
            Fresh rentals added near you
          </p>
        </div>
        <Link
          href="/browse?sort=new"
          className="shrink-0 text-sm font-medium text-foreground underline-offset-2 hover:underline"
        >
          Show all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-7 lg:grid-cols-4 xl:grid-cols-5">
        {NEW_LISTINGS.map((item) => (
          <NewListingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
