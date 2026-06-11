import { NextResponse } from "next/server";
import { EMAIL_RE, isNonEmpty, recordSubmission } from "@/lib/submissions";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, date, time, budget, message } = body;

  const errors: Record<string, string> = {};
  if (!isNonEmpty(name, 120)) errors.name = "Please enter your name.";
  if (typeof email !== "string" || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";
  if (!isNonEmpty(service, 120)) errors.service = "Please select a service.";
  if (!isNonEmpty(date, 40)) errors.date = "Please choose a preferred date.";
  if (!isNonEmpty(time, 40)) errors.time = "Please choose a preferred time.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  await recordSubmission("booking", {
    name,
    email,
    phone,
    service,
    date,
    time,
    budget,
    message,
  });

  return NextResponse.json({
    ok: true,
    message:
      "Thank you — your consultation request has been received. We'll confirm your appointment by email within one business day.",
  });
}
