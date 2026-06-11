"use client";

import { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section" | "li" | "article";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: RevealTag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const props = {
    className: `reveal ${visible ? "is-visible" : ""} ${className}`,
    style: { animationDelay: `${delay}ms` },
  };

  switch (as) {
    case "section":
      return (
        <section ref={ref as React.RefObject<HTMLElement>} {...props}>
          {children}
        </section>
      );
    case "article":
      return (
        <article ref={ref as React.RefObject<HTMLDivElement>} {...props}>
          {children}
        </article>
      );
    case "li":
      return (
        <li ref={ref as React.RefObject<HTMLLIElement>} {...props}>
          {children}
        </li>
      );
    default:
      return (
        <div ref={ref as React.RefObject<HTMLDivElement>} {...props}>
          {children}
        </div>
      );
  }
}
