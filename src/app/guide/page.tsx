import Link from "next/link";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { Placard } from "@/components/museum/Placard";
import { tours } from "@/data/tours";

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Visitor Guide Desk"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Visitor Guide" }]}
      />
      <HallHeader
        wing="Visitor services"
        title="How to Tour the Museum"
        subtitle="Pick a path by audience. Each tour is a sequence of halls and exhibits with suggested minutes — wayfinding for busy visitors."
      />
      <Placard code="ORIENTATION" className="mb-12 max-w-2xl">
        <p>
          US/EU tech recruiters often want systems literacy and AI judgment without hype. India hiring
          managers and students may prefer mobile-first leapfrog stories and practical tooling. Choose
          below — or free-walk via the museum map.
        </p>
      </Placard>

      <div className="space-y-10">
        {tours.map((tour) => (
          <section key={tour.id} className="placard p-6 md:p-8" aria-labelledby={tour.id}>
            <p className="text-xs font-medium text-museum-mist">{tour.audience}</p>
            <h2 id={tour.id} className="mt-2 font-display text-3xl text-museum-marble">
              {tour.title}
            </h2>
            <p className="mt-1 wayfinding-chip">{tour.duration}</p>
            <p className="mt-4 text-sm leading-relaxed text-museum-mist">{tour.blurb}</p>
            <ol className="mt-6 space-y-3">
              {tour.stops.map((stop, i) => (
                <li key={stop.href + stop.label} className="flex gap-4 border-l border-museum-brass/30 pl-4">
                  <span className="font-mono text-xs text-museum-brass pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <Link href={stop.href} className="font-display text-lg text-museum-marble hover:text-museum-brass focus-ring">
                      {stop.label}
                    </Link>
                    <p className="text-xs text-museum-mist">
                      ~{stop.minutes} min · {stop.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
