import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Wayfinding({
  youAreHere,
  crumbs,
}: {
  youAreHere: string;
  crumbs: Crumb[];
}) {
  return (
    <nav aria-label="Museum wayfinding" className="mb-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-museum-mist">
        <span className="wayfinding-chip">You are here</span>
        <ol className="flex flex-wrap items-center gap-1">
          {crumbs.map((c, i) => (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1">
              {i > 0 && <span className="text-museum-brass/50" aria-hidden>/</span>}
              {c.href ? (
                <Link href={c.href} className="focus-ring hover:text-museum-brass underline-offset-4 hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span className="text-museum-marble">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-2 font-display text-lg text-museum-brass">{youAreHere}</p>
    </nav>
  );
}
