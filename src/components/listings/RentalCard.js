import Image from "next/image";
import Link from "next/link";
import { Heart, Phone } from "lucide-react";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-LK")}`;
}

function HeartIcon() {
  return (
    <div className="rounded-full bg-neutral-100 p-2">
      <Heart size={20} className="text-gray-500" />
    </div>
  );
}

export default function RentalCard({ item, className = "" }) {
  return (
    <article className={`flex h-full min-w-0 flex-col ${className}`.trim()}>
      <Link href={item.href} className="group flex flex-1 flex-col">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:p-6"
          />
          <span
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center"
            aria-hidden="true"
          >
            <HeartIcon />
          </span>
        </div>

        <div className="mt-2.5 px-0.5">
          <h3 className="line-clamp-1 text-sm font-medium leading-snug text-foreground">
            {item.title}
          </h3>
          <p className="mt-0.5 text-sm text-foreground">
            <span className="font-medium">From {formatPrice(item.price)}</span>
            <span className="font-normal text-foreground/55">
              {" "}
              / {item.frequency}
            </span>
          </p>
        </div>
      </Link>

      <div className="mt-3 flex items-center gap-4 px-0.5 text-sm text-foreground/80">
        <a
          href={`tel:${item.phone}`}
          className="hidden items-center gap-2 rounded-sm underline min-[484px]:flex"
        >
          <Phone size={16} /> Call Now
        </a>
        <a
          href={`https://wa.me/${item.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1 rounded-full bg-neutral-50 p-1 px-4 font-medium"
        >
          <Image
            src="/icons/whatsapp-glyph-green.png"
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          WhatsApp
        </a>
      </div>
    </article>
  );
}
