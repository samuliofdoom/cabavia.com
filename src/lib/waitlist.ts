const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationResult =
  | { ok: true; value: string }
  | { ok: false; message: string };

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function validateEmail(email: string): ValidationResult {
  const normalized = normalizeEmail(email);
  if (!normalized || !EMAIL_RE.test(normalized)) {
    return { ok: false, message: 'Enter a valid email address.' };
  }
  return { ok: true, value: normalized };
}

export function canSubmit({
  lastSubmittedAtMs,
  nowMs,
  cooldownMs,
}: {
  lastSubmittedAtMs: number | null;
  nowMs: number;
  cooldownMs: number;
}): boolean {
  if (lastSubmittedAtMs === null) {
    return true;
  }
  return nowMs - lastSubmittedAtMs >= cooldownMs;
}

export function isWaitlistHash(hashLike: string): boolean {
  return hashLike.trim().toLowerCase().endsWith('#waitlist');
}

export async function submitToFormspree({
  endpoint,
  email,
  source,
  honeypot,
  fetchImpl = fetch,
}: {
  endpoint: string;
  email: string;
  source: string;
  honeypot: string;
  fetchImpl?: typeof fetch;
}): Promise<{ ok: boolean; message: string }> {
  if (honeypot.trim()) {
    return { ok: false, message: 'Submission failed. Please try again.' };
  }

  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return { ok: false, message: 'Could not submit right now. Please try again.' };
    }

    return { ok: true, message: 'Thanks for joining the waitlist! We will be in touch.' };
  } catch {
    return { ok: false, message: 'Could not submit right now. Please try again.' };
  }
}
