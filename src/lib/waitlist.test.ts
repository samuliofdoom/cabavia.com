import { describe, expect, test, vi } from 'vitest';
import {
  canSubmit,
  normalizeEmail,
  submitToFormspree,
  validateEmail,
} from './waitlist';

describe('waitlist email validation', () => {
  test('accepts valid email and normalizes casing/spacing', () => {
    expect(normalizeEmail('  Founder@CabAvia.com  ')).toBe('founder@cabavia.com');
    expect(validateEmail(' founder@cabavia.com ').ok).toBe(true);
  });

  test('rejects empty and malformed emails', () => {
    expect(validateEmail('')).toEqual({ ok: false, message: 'Enter a valid email address.' });
    expect(validateEmail('not-an-email')).toEqual({ ok: false, message: 'Enter a valid email address.' });
  });
});

describe('waitlist cooldown', () => {
  test('blocks submissions inside cooldown window', () => {
    expect(canSubmit({ lastSubmittedAtMs: 1000, nowMs: 5000, cooldownMs: 8000 })).toBe(false);
  });

  test('allows submissions after cooldown window', () => {
    expect(canSubmit({ lastSubmittedAtMs: 1000, nowMs: 9001, cooldownMs: 8000 })).toBe(true);
    expect(canSubmit({ lastSubmittedAtMs: null, nowMs: 100, cooldownMs: 8000 })).toBe(true);
  });
});

describe('formspree submit', () => {
  test('returns success on accepted response', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true, status: 200 });

    const result = await submitToFormspree({
      endpoint: 'https://formspree.io/f/testid',
      email: 'founder@cabavia.com',
      source: 'hero',
      honeypot: '',
      fetchImpl,
    });

    expect(result).toEqual({ ok: true, message: 'Thanks for joining the waitlist! We will be in touch.' });
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  test('returns validation-style failure for spam honeypot', async () => {
    const fetchImpl = vi.fn();

    const result = await submitToFormspree({
      endpoint: 'https://formspree.io/f/testid',
      email: 'founder@cabavia.com',
      source: 'hero',
      honeypot: 'bot-filled',
      fetchImpl,
    });

    expect(result).toEqual({ ok: false, message: 'Submission failed. Please try again.' });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  test('returns friendly error on upstream failure', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    const result = await submitToFormspree({
      endpoint: 'https://formspree.io/f/testid',
      email: 'founder@cabavia.com',
      source: 'hero',
      honeypot: '',
      fetchImpl,
    });

    expect(result).toEqual({ ok: false, message: 'Could not submit right now. Please try again.' });
  });

  test('returns friendly error on network exception', async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error('network down'));

    const result = await submitToFormspree({
      endpoint: 'https://formspree.io/f/testid',
      email: 'founder@cabavia.com',
      source: 'hero',
      honeypot: '',
      fetchImpl,
    });

    expect(result).toEqual({ ok: false, message: 'Could not submit right now. Please try again.' });
  });
});
