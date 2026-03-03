import { describe, expect, test } from 'vitest';
import { normalizePathname, resolveStaticPage } from './routes';

describe('normalizePathname', () => {
  test('strips trailing slashes except root', () => {
    expect(normalizePathname('/privacy/')).toBe('/privacy');
    expect(normalizePathname('/terms///')).toBe('/terms');
    expect(normalizePathname('/')).toBe('/');
  });
});

describe('resolveStaticPage', () => {
  test('resolves legal page routes with trailing slashes', () => {
    expect(resolveStaticPage('/privacy/')).toBe('privacy');
    expect(resolveStaticPage('/terms/')).toBe('terms');
  });

  test('returns null for non-legal routes', () => {
    expect(resolveStaticPage('/')).toBeNull();
    expect(resolveStaticPage('/about')).toBeNull();
  });
});
