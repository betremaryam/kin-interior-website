import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects";
import {
  processSteps,
  services,
  site,
  testimonials,
} from "@/lib/site";

const stats = [
  { value: "12+", label: "Years of practice" },
  { value: "180", label: "Spaces delivered" },
  { value: "4", label: "Design disciplines" },
  { value: "98%", label: "Client referrals" },
];

export default function Home() {
  const featured = projects.slice(0, 6);

  return (
    <>
      <Hero />

      {/* About / philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" />
              Our philosophy
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              We believe the most beautiful spaces are the ones that feel
              effortless.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted">
              Kin Interior Design &amp; Consulting is a studio built on restraint.
              We work with light, proportion and honest materials to create
              interiors that are calm, timeless and deeply personal — never
              cluttered, never loud.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-muted">
              From a single room to a complete building, every project is guided
              by the same principle: design that puts the people who use the space
              first.
            </p>
            <Link
              href="/portfolio"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:text-gold"
            >
              Explore our work
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/projects/serene-residence-living.jpg"
                alt="A serene, light-filled living room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-navy px-8 py-6 text-cream sm:block">
              <p className="text-3xl font-bold text-gold-soft">Kin</p>
              <p className="mt-1 text-xs font-light tracking-[0.18em] uppercase">
                Interiors, considered.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-line pt-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="text-4xl font-bold text-navy lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-light uppercase tracking-[0.16em] text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="What we do"
            title="Design services, end to end"
            intro="Four focused disciplines, one consistent standard of craft and care."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 80}
                className="group bg-paper p-8 transition-colors hover:bg-cream lg:p-12"
              >
                <span className="text-sm font-bold text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="A portfolio of quiet confidence"
            intro="A diverse range of residential, commercial and hospitality spaces — each designed around how it is truly used."
          />
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              View all projects
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80} as="article">
              <ProjectCard project={project} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-navy py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="How we work"
            title="A calm, considered process"
            intro="A clear path from first conversation to finished space — so you always know what happens next."
            tone="light"
          />
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <p className="text-5xl font-bold text-gold-soft/40">{step.step}</p>
                <h3 className="mt-4 text-xl font-bold text-cream">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-cream/70">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Kind words"
          title="Trusted by people who care about detail"
          align="center"
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              delay={i * 90}
              className="flex flex-col border-t border-line pt-8"
            >
              <p className="text-gold">★★★★★</p>
              <blockquote className="mt-4 flex-1 text-lg font-light italic leading-relaxed text-charcoal">
                “{t.quote}”
              </blockquote>
              <footer className="mt-6">
                <p className="text-sm font-bold text-navy">{t.author}</p>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-muted">
                  {t.role}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <Image
          src="/projects/skyline-penthouse-wide.jpg"
          alt="A refined penthouse interior at dusk"
          width={2000}
          height={1125}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <h2 className="text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
                Ready to reimagine your space?
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-cream/80">
                Book a consultation and let&apos;s talk through your project — no
                obligation, just a thoughtful conversation about what&apos;s
                possible.
              </p>
              <Link
                href="/book"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-bold tracking-wide text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Book a Consultation
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Let's start a conversation"
              intro="Have a question or a project in mind? Send us a note and we'll respond personally."
            />
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="eyebrow text-navy/60">Studio</dt>
                <dd className="mt-1 text-sm font-light text-charcoal">
                  {site.address}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-navy/60">Email</dt>
                <dd className="mt-1 text-sm font-light text-charcoal">
                  <a className="hover:text-gold" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-navy/60">Phone</dt>
                <dd className="mt-1 text-sm font-light text-charcoal">
                  <a
                    className="hover:text-gold"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-navy/60">Hours</dt>
                <dd className="mt-1 text-sm font-light text-charcoal">
                  {site.hours}
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:pt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
