import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Kin Interior Design's portfolio of residential, commercial, hospitality and architectural projects.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
      <header className="max-w-2xl">
        <p className="eyebrow flex items-center gap-3 text-gold">
          <span className="h-px w-8 bg-gold" />
          Portfolio
        </p>
        <h1 className="mt-5 text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
          Selected projects
        </h1>
        <p className="mt-6 text-base font-light leading-relaxed text-muted">
          A diverse body of work across homes, workplaces and hospitality. Filter
          by discipline, or open any project to see how it came together.
        </p>
      </header>

      <div className="mt-14">
        <PortfolioGallery />
      </div>
    </div>
  );
}
