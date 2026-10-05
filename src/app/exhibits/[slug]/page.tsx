import Link from "next/link";
import { notFound } from "next/navigation";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { Placard } from "@/components/museum/Placard";
import { exhibits, getExhibit, type ExhibitSlug } from "@/data/exhibits";
import { ExhibitScene } from "@/components/exhibits/ExhibitScene";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return exhibits.map((e) => ({ slug: e.slug }));
}

export default function ExhibitDetailPage({ params }: { params: { slug: string } }) {
  const exhibit = getExhibit(params.slug);
  if (!exhibit) notFound();

  const related = articles.filter((a) => exhibit.relatedArticles.includes(a.slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere={`${exhibit.hallCode} · ${exhibit.title}`}
        crumbs={[
          { label: "Entrance", href: "/" },
          { label: "Exhibits", href: "/exhibits" },
          { label: exhibit.title },
        ]}
      />
      <HallHeader
        wing={`Exhibit ${exhibit.hallCode}`}
        title={exhibit.title}
        subtitle={exhibit.subtitle}
        span={exhibit.years}
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ExhibitScene slug={exhibit.slug as ExhibitSlug} />
        <div className="space-y-6">
          <Placard code={`${exhibit.hallCode} PLACARD`} title="Interpretive label">
            <p>{exhibit.placard}</p>
          </Placard>
          <Placard code="HOW TO VIEW" title="Visitor instructions">
            <p>{exhibit.howToView}</p>
          </Placard>
          <Placard code="TECHNICAL NOTE" title="Fabrication">
            <p>{exhibit.technicalNote}</p>
          </Placard>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl text-museum-brass mb-4">Further reading in the archive</h2>
          <ul className="space-y-2">
            {related.map((a) => (
              <li key={a.slug}>
                <Link href={`/articles/${a.slug}`} className="text-museum-marble hover:text-museum-brass focus-ring">
                  {a.title}
                </Link>
                <span className="text-museum-mist text-sm"> — {a.deck}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
