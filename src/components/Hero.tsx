import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-[73px] flex min-h-[92vh] items-end overflow-hidden">
      <Image
        src="/projects/nordic-loft-wide.jpg"
        alt="A light-filled, minimalist living room designed by Kin Interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-navy-deep/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-soft">
            Interior Design &amp; Consulting · Addis Ababa
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-cream sm:text-5xl lg:text-7xl">
            Spaces that feel
            <br />
            <span className="font-light italic text-gold-soft">
              quietly extraordinary.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-cream/85 sm:text-lg">
            Kin designs sophisticated, minimalist interiors where light, material
            and proportion do the talking — for homes, workplaces and hospitality
            spaces.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold tracking-wide text-navy-deep transition-colors hover:bg-gold-soft"
            >
              View Portfolio
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-3.5 text-sm font-bold tracking-wide text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
