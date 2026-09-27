"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FEATURED_RENTALS } from "@/data/featured";
import RentalCard from "@/components/listings/RentalCard";

function useMobileAutoScroll(
  ref,
  { interval = 3000, resumeDelay = 5000 } = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobile = window.matchMedia("(max-width: 639px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let paused = false;
    let resumeTimer;

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const resumeLater = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, resumeDelay);
    };

    const tick = () => {
      if (paused || !mobile.matches || reduceMotion.matches) return;
      const card = el.firstElementChild;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + step,
        behavior: "smooth",
      });
    };

    const timer = setInterval(tick, interval);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.dataset.visible = String(e.isIntersecting);
        });
      },
      { root: el, threshold: 0.6 },
    );
    Array.from(el.children).forEach((child) => io.observe(child));

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resumeLater);
    el.addEventListener("touchcancel", resumeLater);
    el.addEventListener(
      "wheel",
      () => {
        pause();
        resumeLater();
      },
      { passive: true },
    );
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resumeLater);

    return () => {
      clearInterval(timer);
      clearTimeout(resumeTimer);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeLater);
      el.removeEventListener("touchcancel", resumeLater);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resumeLater);
    };
  }, [ref, interval, resumeDelay]);
}

export default function FeaturedRentals() {
  const scrollerRef = useRef(null);
  useMobileAutoScroll(scrollerRef);

  return (
    <section className="w-full px-4 pb-10 pt-1 sm:px-6 sm:pb-12 lg:px-10">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="text-lg font-medium text-foreground sm:text-xl">
          Featured rentals
        </h2>
        <Link
          href="/browse"
          className="shrink-0 text-sm font-medium text-foreground underline-offset-2 hover:underline"
        >
          Show all
        </Link>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5"
      >
        {FEATURED_RENTALS.map((item) => (
          <RentalCard
            key={item.id}
            item={item}
            className="w-[42%] shrink-0 snap-start transition-opacity duration-500 max-sm:data-[visible=false]:opacity-40 sm:w-auto"
          />
        ))}
      </div>
    </section>
  );
}
