export const JOIN_ID = 'join';

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function scrollToJoin(e?: { preventDefault: () => void }): void {
  e?.preventDefault();
  const el = document.getElementById(JOIN_ID);
  if (!el) return;
  const navOffset =
    (document.getElementById('membership-nav') as HTMLElement | null)?.offsetHeight ?? 72;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset - 12;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}

export function scrollToAnchor(id: string, e?: { preventDefault: () => void }): void {
  e?.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset =
    (document.getElementById('membership-nav') as HTMLElement | null)?.offsetHeight ?? 72;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset - 12;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
