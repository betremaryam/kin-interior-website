"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-light tracking-wide text-charcoal transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-2.5 text-sm font-bold tracking-wide text-cream transition-colors hover:bg-navy-deep"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-navy transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-navy transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-navy transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-x-0 top-[73px] z-40 origin-top bg-cream px-6 pb-10 pt-4 transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-light text-charcoal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-bold tracking-wide text-cream"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
