"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/nav";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 items-center gap-6 px-4 sm:h-16 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="shrink-0 text-base font-medium text-foreground sm:text-lg"
            onClick={() => setOpen(false)}
          >
            Rently
          </Link>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/list-item"
              className="rounded-full bg-accent px-4 py-2 text-[15px] font-medium text-accent-foreground transition-opacity hover:opacity-85"
            >
              List an item
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <Link
              href="/list-item"
              className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground"
            >
              List
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center text-foreground"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          id="mobile-nav"
          className={`absolute top-0 right-0 flex h-full w-[80%] max-w-sm flex-col bg-white transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-14 items-center justify-between px-5">
            <span className="text-base font-medium text-foreground">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center text-foreground"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-base font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-5 pb-24">
            <Link
              href="/list-item"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-accent px-4 py-3 text-[15px] font-medium text-accent-foreground"
            >
              List an item
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
