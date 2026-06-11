import Link from "next/link";
import Image from "next/image";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/kin-logo.png"
                alt="Kin Interior Design logo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-[0.22em]">KIN</span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-cream/70">
              {site.name}. We design sophisticated, minimalist interiors for
              living, working and hospitality spaces.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm font-light">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/75 transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-cream/75 transition-colors hover:text-gold-soft"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Studio</h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-cream/75">
              <li>{site.address}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {site.phone}
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
            <div className="mt-5 flex gap-4 text-sm font-light">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 transition-colors hover:text-gold-soft"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 text-xs font-light text-cream/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.18em] uppercase">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
