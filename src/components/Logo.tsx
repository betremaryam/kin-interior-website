import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const text = variant === "light" ? "text-cream" : "text-navy";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex items-center gap-3 ${className}`}
    >
      <Image
        src="/brand/kin-logo.png"
        alt="Kin Interior Design logo"
        width={40}
        height={40}
        priority
        className="h-9 w-9 object-contain"
      />
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="text-lg font-bold tracking-[0.22em]">KIN</span>
        <span className="eyebrow mt-1 text-[0.58rem] font-light tracking-[0.28em] opacity-70">
          Interior Design
        </span>
      </span>
    </Link>
  );
}
