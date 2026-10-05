import Link from "next/link";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { ExhibitCardThumb } from "@/components/exhibits/ExhibitCardThumb";
import { exhibits } from "@/data/exhibits";
import { epochs } from "@/data/epochs";

export default function ExhibitsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="3D Exhibit Floor"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Exhibits" }]}
      />
      <HallHeader
        wing="Sculpture court"
        title="Interactive Exhibits"
        subtitle="Low-poly interpretive models. Orbit, zoom, and read the placard — originality over photorealism, laptop-friendly scenes."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {exhibits.map((ex) => {
          const ep = epochs.find((e) => e.slug === ex.epoch);
          return (
            <Link
              key={ex.slug}
              href={`/exhibits/${ex.slug}`}
              className="focus-ring placard group block overflow-hidden p-0"
            >
              {/* EPO-020: gradient + SVG poster instead of empty h-36 wash */}
              <ExhibitCardThumb
                slug={ex.slug}
                accent={ep?.accent ?? "#c9a227"}
              />
              <div className="p-5">
                <p className="wayfinding-chip">
                  {ex.hallCode} · {ex.years}
                </p>
                <h2 className="mt-2 font-display text-2xl text-museum-marble group-hover:text-museum-brass">
                  {ex.title}
                </h2>
                <p className="mt-2 text-sm text-museum-mist">{ex.subtitle}</p>
                <p className="mt-3 line-clamp-2 text-sm text-museum-mist/80">
                  {ex.placard}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
