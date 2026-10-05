import Link from "next/link";
import { notFound } from "next/navigation";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { Placard } from "@/components/museum/Placard";
import { allEpochSlugs, getEpoch } from "@/data/epochs";
import { articles } from "@/data/articles";
import { exhibits } from "@/data/exhibits";

export function generateStaticParams() {
  return allEpochSlugs().map((slug) => ({ slug }));
}

export default function EpochHallPage({ params }: { params: { slug: string } }) {
  const epoch = getEpoch(params.slug);
  if (!epoch) notFound();

  const relatedArts = articles.filter((a) => epoch.relatedArticles.includes(a.slug));
  const relatedEx = exhibits.filter((e) => epoch.relatedExhibits.includes(e.slug));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere={epoch.wing}
        crumbs={[
          { label: "Entrance", href: "/" },
          { label: "Wings", href: "/epochs" },
          { label: epoch.title },
        ]}
      />
      <HallHeader
        wing={epoch.wing}
        title={epoch.title}
        subtitle={epoch.subtitle}
        span={epoch.span}
        accent={epoch.accent}
        accentEvening={epoch.accentEvening}
      />

      <div className="prose-museum mb-12">
        <p className="text-base leading-relaxed text-museum-mist !mb-6">{epoch.hallIntro}</p>
      </div>

      <Placard code="CURATOR NOTE" title="Why this wing matters" className="mb-12">
        <ul className="list-disc pl-5 space-y-2">
          {epoch.whyItMattered.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </Placard>

      <Placard code="DUAL MARKET" title="US / EU & India" className="mb-12">
        <p>{epoch.dualMarket}</p>
      </Placard>

      <section className="mb-14" aria-labelledby="milestones">
        <h2 id="milestones" className="font-display text-2xl text-museum-brass mb-6">
          Milestone corridor
        </h2>
        <div className="space-y-4">
          {epoch.milestones.map((m) => (
            <div key={m.year + m.title} className="border-l-2 pl-4" style={{ borderColor: epoch.accent }}>
              <p className="wayfinding-chip">{m.year}</p>
              <h3 className="font-display text-xl text-museum-marble">{m.title}</h3>
              <p className="text-sm text-museum-mist mt-1">{m.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14" aria-labelledby="systems">
        <h2 id="systems" className="font-display text-2xl text-museum-brass mb-6">
          Key systems on display
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {epoch.keySystems.map((s) => (
            <div key={s.name} className="placard p-4">
              <p className="font-display text-lg text-museum-marble">{s.name}</p>
              <p className="wayfinding-chip mt-1">{s.era}</p>
              <p className="mt-2 text-sm text-museum-mist">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {(relatedEx.length > 0 || relatedArts.length > 0) && (
        <section className="grid gap-8 md:grid-cols-2">
          {relatedEx.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-museum-brass mb-3">Adjacent 3D exhibits</h2>
              <ul className="space-y-2 text-sm">
                {relatedEx.map((ex) => (
                  <li key={ex.slug}>
                    <Link className="text-museum-marble hover:text-museum-brass focus-ring" href={`/exhibits/${ex.slug}`}>
                      {ex.hallCode} — {ex.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {relatedArts.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-museum-brass mb-3">Archive readings</h2>
              <ul className="space-y-2 text-sm">
                {relatedArts.map((a) => (
                  <li key={a.slug}>
                    <Link className="text-museum-marble hover:text-museum-brass focus-ring" href={`/articles/${a.slug}`}>
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
