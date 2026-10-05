import Link from "next/link";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { articles } from "@/data/articles";

export default function ArticlesIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Museum Archive"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Archive" }]}
      />
      <HallHeader
        wing="Reading room"
        title="Archive Essays"
        subtitle="Long-form interpretive essays for visitors who want depth beyond placards. Popular-history accuracy with era years in the copy — not fake academic citations."
      />
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/articles/${a.slug}`} className="focus-ring placard block p-5 hover:border-museum-brass/50">
              <div className="flex flex-wrap items-center gap-3">
                <span className="wayfinding-chip">{a.epoch}</span>
                <span className="text-xs text-museum-mist">{a.readingMinutes} min read</span>
              </div>
              <h2 className="mt-2 font-display text-2xl text-museum-marble">{a.title}</h2>
              <p className="mt-2 text-sm text-museum-mist">{a.deck}</p>
              <p className="mt-3 flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span key={t} className="border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-museum-mist">
                    {t}
                  </span>
                ))}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
