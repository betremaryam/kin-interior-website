"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { projectCategories, projects, type Project } from "@/lib/projects";

type Filter = "All" | Project["category"];

const filters: Filter[] = ["All", ...projectCategories];

export default function PortfolioGallery() {
  const [active, setActive] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  const close = useCallback(() => setLightbox(null), []);
  const show = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, show]);

  const current = lightbox === null ? null : visible[lightbox];

  return (
    <div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setActive(f);
              setLightbox(null);
            }}
            className={`rounded-full border px-5 py-2 text-sm font-light tracking-wide transition-colors ${
              active === f
                ? "border-navy bg-navy text-cream"
                : "border-line bg-transparent text-charcoal hover:border-navy"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <article key={project.slug} className="group">
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-line"
              aria-label={`Quick view ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-navy-deep/0 opacity-0 transition-all duration-500 group-hover:bg-navy-deep/30 group-hover:opacity-100">
                <span className="rounded-full bg-cream/95 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-navy">
                  Quick view
                </span>
              </span>
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy backdrop-blur">
                {project.category}
              </span>
            </button>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-bold text-navy">{project.title}</h3>
              <span className="shrink-0 text-xs font-light text-muted">
                {project.location}
              </span>
            </div>
            <p className="mt-1 text-sm font-light leading-relaxed text-muted">
              {project.summary}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold transition-colors hover:text-navy"
            >
              View project
              <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} preview`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close preview"
            className="absolute right-5 top-5 text-3xl font-light text-cream/80 transition-colors hover:text-gold-soft"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 px-3 text-4xl font-light text-cream/70 transition-colors hover:text-gold-soft sm:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-3 text-4xl font-light text-cream/70 transition-colors hover:text-gold-soft sm:right-8"
          >
            ›
          </button>

          <figure
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={current.imageWide}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-gold-soft">{current.category}</p>
                <h3 className="mt-1 text-2xl font-bold text-cream">
                  {current.title}
                </h3>
                <p className="text-sm font-light text-cream/70">
                  {current.location} · {current.year}
                </p>
              </div>
              <Link
                href={`/projects/${current.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-bold tracking-wide text-navy-deep transition-colors hover:bg-gold-soft"
              >
                View full project
              </Link>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
