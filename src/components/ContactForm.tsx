"use client";

import { useState } from "react";

const fieldBase =
  "w-full border-b border-line bg-transparent py-3 text-sm font-light text-charcoal outline-none transition-colors placeholder:text-muted/70 focus:border-navy";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setFeedback("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrors(json.errors ?? {});
        setFeedback(json.error ?? "Please review the highlighted fields.");
        return;
      }
      setStatus("success");
      setFeedback(json.message);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-paper p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl text-gold">
          ✓
        </div>
        <p className="mt-5 text-sm font-light leading-relaxed text-muted">{feedback}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <label className="block">
        <span className="eyebrow text-navy/70">Name</span>
        <input name="name" type="text" placeholder="Your name" className={`mt-2 ${fieldBase}`} />
        {errors.name && <span className="mt-1 block text-xs text-red-700">{errors.name}</span>}
      </label>
      <label className="block">
        <span className="eyebrow text-navy/70">Email</span>
        <input name="email" type="email" placeholder="you@email.com" className={`mt-2 ${fieldBase}`} />
        {errors.email && <span className="mt-1 block text-xs text-red-700">{errors.email}</span>}
      </label>
      <label className="block">
        <span className="eyebrow text-navy/70">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="How can we help?"
          className={`mt-2 ${fieldBase} resize-none`}
        />
        {errors.message && (
          <span className="mt-1 block text-xs text-red-700">{errors.message}</span>
        )}
      </label>

      {status === "error" && feedback && (
        <p className="text-sm font-light text-red-700">{feedback}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-bold tracking-wide text-cream transition-colors hover:bg-navy-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
