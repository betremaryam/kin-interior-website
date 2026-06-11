import { promises as fs } from "fs";
import path from "path";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isNonEmpty(v: unknown, max = 2000): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

/**
 * Best-effort persistence of a form submission. In read-only/serverless
 * environments the write is skipped silently — the API still succeeds.
 */
export async function recordSubmission(
  kind: "booking" | "contact",
  payload: Record<string, unknown>,
): Promise<void> {
  const entry = { kind, receivedAt: new Date().toISOString(), ...payload };
  console.log(`[${kind}] submission`, entry);
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, `${kind}.jsonl`);
    await fs.appendFile(file, JSON.stringify(entry) + "\n", "utf8");
  } catch {
    // Non-fatal: storage is optional in this demo backend.
  }
}
