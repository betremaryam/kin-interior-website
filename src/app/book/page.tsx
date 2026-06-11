import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book an interior design consultation with Kin Interior Design & Consulting PLC.",
};

const assurances = [
  "A relaxed, no-obligation conversation about your space",
  "Expert guidance on layout, materials and budget",
  "A clear sense of how we'd approach your project",
];

export default function BookPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-0 px-0 pt-[73px] lg:grid-cols-2">
      {/* Left — context */}
      <aside className="relative hidden lg:block">
        <div className="sticky top-[73px] h-[calc(100vh-73px)]">
          <Image
            src="/projects/harvest-restaurant-wide.jpg"
            alt="A warmly lit interior by Kin"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/70" />
          <div className="absolute inset-0 flex flex-col justify-end p-12">
            <p className="eyebrow text-gold-soft">Book a consultation</p>
            <h1 className="mt-4 text-4xl font-bold text-cream">
              Let&apos;s design something quietly extraordinary.
            </h1>
            <ul className="mt-8 space-y-3">
              {assurances.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 text-sm font-light text-cream/85"
                >
                  <span className="mt-0.5 text-gold-soft">—</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Right — form */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="lg:hidden">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" />
            Book a consultation
          </p>
          <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            Let&apos;s design something quietly extraordinary.
          </h1>
        </div>

        <p className="mb-10 max-w-md text-sm font-light leading-relaxed text-muted lg:mt-0">
          Tell us a little about your project and choose a time that suits you.
          We&apos;ll confirm your consultation by email within one business day.
        </p>

        <BookingForm />
      </section>
    </div>
  );
}
