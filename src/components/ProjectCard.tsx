import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      aria-label={`${project.title} — ${project.category}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-line">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/15" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-gold">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs font-light text-muted">
          {project.year}
        </span>
      </div>
      <p className="mt-1 text-sm font-light leading-relaxed text-muted">
        {project.summary}
      </p>
    </Link>
  );
}
