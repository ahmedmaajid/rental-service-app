import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    title: "Find what you need",
    description:
      "Search or browse categories to find rentals around your area.",
    image: "/images/how-it-works/block-1-search.png",
    alt: "Searching rentals by category and location",
  },
  {
    title: "Check the listing",
    description:
      "View photos, price, location, and provider details.",
    image: "/images/how-it-works/block-2-results.png",
    alt: "Nearby rental listings on the marketplace",
  },
  {
    title: "Contact the provider",
    description:
      "Call or WhatsApp directly and arrange the rental.",
    image: "/images/how-it-works/block-3-contact.png",
    alt: "Contacting a rental provider about a listing",
    cta: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg font-medium text-foreground sm:text-xl">
          How it works
        </h2>
        <p className="mt-1 text-sm text-foreground/55">
          Search what&apos;s nearby, check the listing, and message the owner
          directly.
        </p>
      </div>

      {/* One horizontal connected section */}
      <div className="rounded-3xl bg-neutral-100 p-2.5 sm:p-3">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white sm:grid-cols-3">
          {CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`flex flex-col p-4 sm:p-5 ${
                index < CARDS.length - 1
                  ? "border-b border-black/[0.06] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <h3 className="text-sm font-medium text-foreground sm:text-base">
                {card.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-foreground/55 sm:text-sm">
                {card.description}
              </p>

              <div className="relative mt-4 aspect-[5/4] w-full overflow-hidden rounded-xl bg-neutral-50">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-1.5"
                />
              </div>

              {card.cta ? (
                <Link
                  href="/browse"
                  className="mt-4 inline-flex w-fit rounded-full bg-black px-4 py-2 text-xs text-white transition-opacity hover:opacity-90 sm:text-sm"
                >
                  Browse listings
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
