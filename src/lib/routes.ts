export type StaticPage = 'privacy' | 'terms';

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/';
  }
  return pathname.replace(/\/+$/, '') || '/';
}

export function resolveStaticPage(pathname: string): StaticPage | null {
  const normalized = normalizePathname(pathname);
  if (normalized === '/privacy') {
    return 'privacy';
  }
  if (normalized === '/terms') {
    return 'terms';
  }
  return null;
}
