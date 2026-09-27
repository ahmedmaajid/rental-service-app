import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    src: "/images/fan/camera.jpg",
    alt: "Camera rental",
    className:
      "left-1/2 top-5 z-10 w-[40%] max-w-[148px] -translate-x-[112%] -rotate-11 sm:top-4 sm:max-w-[168px] sm:-translate-x-[118%] sm:-rotate-12",
  },
  {
    src: "/images/fan/bike.jpg",
    alt: "Bike rental",
    className:
      "left-1/2 top-0 z-20 w-[44%] max-w-[164px] -translate-x-1/2 sm:max-w-[184px]",
  },
  {
    src: "/images/fan/car.jpg",
    alt: "Car rental",
    className:
      "left-1/2 top-5 z-30 w-[40%] max-w-[148px] translate-x-[12%] rotate-11 sm:top-4 sm:max-w-[168px] sm:translate-x-[18%] sm:rotate-12",
  },
];

export default function FanHighlight() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="relative mb-6 h-44 w-full max-w-sm sm:mb-7 sm:h-52 md:h-56">
          {CARDS.map((card) => (
            <div
              key={card.src}
              className={`absolute aspect-square overflow-hidden rounded-xl border-[3px] border-white bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.10)] sm:rounded-2xl sm:border-4 ${card.className}`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 40vw, 184px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        <h2 className="max-w-md text-balance text-base font-medium leading-snug text-foreground/90 sm:text-lg">
          Local rentals at the intersection of convenience, trust, and community.
        </h2>

        <Link
          href="/browse"
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-black/20 hover:bg-neutral-50 sm:mt-6"
        >
          Find your perfect rental
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}