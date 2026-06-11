import { NextResponse } from "next/server";
import { EMAIL_RE, isNonEmpty, recordSubmission } from "@/lib/submissions";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  const errors: Record<string, string> = {};
  if (!isNonEmpty(name, 120)) errors.name = "Please enter your name.";
  if (typeof email !== "string" || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";
  if (!isNonEmpty(message, 2000)) errors.message = "Please enter a message.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  await recordSubmission("contact", { name, email, message });

  return NextResponse.json({
    ok: true,
    message: "Thank you for reaching out — we'll be in touch very soon.",
  });
}
