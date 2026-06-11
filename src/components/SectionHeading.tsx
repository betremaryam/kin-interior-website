import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-cream" : "text-navy";
  const introColor = tone === "light" ? "text-cream/70" : "text-muted";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow flex items-center gap-3 text-gold">
        {!isCenter && <span className="h-px w-8 bg-gold" />}
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base font-light leading-relaxed ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
