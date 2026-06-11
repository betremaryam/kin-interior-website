import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.imageWide }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Hero image */}
      <div className="relative -mt-[73px] h-[70vh] min-h-[460px] w-full overflow-hidden">
        <Image
          src={project.imageWide}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-navy-deep/40" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
            <p className="eyebrow text-gold-soft">{project.category}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm font-light text-cream/80">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" />
              Overview
            </p>
            <p className="mt-6 text-xl font-light leading-relaxed text-charcoal">
              {project.summary}
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-muted">
              {project.description}
            </p>

            <h2 className="mt-12 text-sm font-bold uppercase tracking-[0.16em] text-navy">
              Scope of work
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {project.scope.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line px-4 py-2 text-sm font-light text-charcoal"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:pt-2">
            <div className="border-t border-line">
              {project.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <dt className="eyebrow text-navy/60">{f.label}</dt>
                  <dd className="text-sm font-light text-charcoal">{f.value}</dd>
                </div>
              ))}
            </div>
            <Link
              href="/book"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-bold tracking-wide text-cream transition-colors hover:bg-navy-deep"
            >
              Start a similar project
            </Link>
          </aside>
        </div>

        {/* Full-bleed feature image */}
        <div className="relative mt-20 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} detail`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Next project */}
      <Link href={`/projects/${next.slug}`} className="group block bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="eyebrow text-gold">Next project</p>
            <p className="mt-3 text-3xl font-bold text-navy transition-colors group-hover:text-gold lg:text-4xl">
              {next.title}
            </p>
            <p className="mt-2 text-sm font-light text-muted">
              {next.category} · {next.location}
            </p>
          </div>
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-navy">
            View →
          </span>
        </div>
      </Link>
    </article>
  );
}
