"use client";

import { useState } from "react";
import { budgetOptions, serviceOptions } from "@/lib/site";

const fieldBase =
  "w-full border-b border-line bg-transparent py-3 text-sm font-light text-charcoal outline-none transition-colors placeholder:text-muted/70 focus:border-navy";
const labelBase = "eyebrow text-navy/70";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split("T")[0];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setFeedback("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/booking", {
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
      <div className="rounded-sm border border-gold/40 bg-paper p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-2xl text-gold">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-bold text-navy">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm font-light leading-relaxed text-muted">
          {feedback}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-gold hover:text-navy"
        >
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input name="name" type="text" placeholder="Jane Doe" className={fieldBase} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input name="email" type="email" placeholder="jane@email.com" className={fieldBase} />
        </Field>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Phone (optional)">
          <input name="phone" type="tel" placeholder="+251 ..." className={fieldBase} />
        </Field>
        <Field label="Service" error={errors.service}>
          <select name="service" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Preferred date" error={errors.date}>
          <input name="date" type="date" min={today} className={fieldBase} />
        </Field>
        <Field label="Preferred time" error={errors.time}>
          <select name="time" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              Select a time
            </option>
            {["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Estimated budget (optional)">
        <select name="budget" defaultValue="" className={fieldBase}>
          <option value="">Prefer not to say</option>
          {budgetOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project (optional)">
        <textarea
          name="message"
          rows={4}
          placeholder="A few words about the space, style and timeline…"
          className={`${fieldBase} resize-none`}
        />
      </Field>

      {status === "error" && feedback && (
        <p className="text-sm font-light text-red-700">{feedback}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-navy px-8 py-4 text-sm font-bold tracking-wide text-cream transition-colors hover:bg-navy-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request Consultation"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelBase}>{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs font-light text-red-700">{error}</span>}
    </label>
  );
}
