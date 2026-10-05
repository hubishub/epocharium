import Link from "next/link";
import { epochs } from "@/data/epochs";
import { exhibits } from "@/data/exhibits";
import { tours } from "@/data/tours";
import { Placard } from "@/components/museum/Placard";
import { HeroRobotExhibit } from "@/components/exhibits/HeroRobotExhibit";

export default function EntranceHallPage() {
  return (
    <div>
      {/* Entrance atrium */}
      <section className="relative overflow-hidden border-b border-museum-mist/20">
        <div className="museum-vignette absolute inset-0 opacity-80" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div>
            <p className="wayfinding-chip mb-4">Entrance Hall · Floor 0</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight text-museum-marble max-w-4xl">
              Epocharium
            </h1>
            <p className="mt-2 font-display text-2xl md:text-3xl text-museum-brass">
              Tech Civilization Museum & Encyclopedia
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-museum-mist">
              Five wings. Four interactive sculptures. A chronology desk, an archive, and a study
              compare table. Walk the halls of how networks, machines, pockets, and intelligence
              systems developed — told as a museum, not a product brochure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/guide"
                className="liquid-cta focus-ring px-5 py-2.5 text-sm uppercase tracking-widest text-museum-brass hover:brightness-110"
              >
                Pick a tour path
              </Link>
              <Link
                href="/epochs"
                className="focus-ring rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-widest text-museum-mist backdrop-blur-sm hover:border-museum-brass/40 hover:text-museum-marble"
              >
                Enter the wings
              </Link>
              <Link
                href="/exhibits"
                className="focus-ring rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-widest text-museum-mist backdrop-blur-sm hover:border-museum-brass/40 hover:text-museum-marble"
              >
                3D exhibit floor
              </Link>
            </div>
          </div>
          <HeroRobotExhibit />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        {/* Wayfinding plaque */}
        <Placard code="PLAQUE · EH-01" title="How to walk this museum" className="mb-14 max-w-3xl">
          <p>
            Start at the <strong className="text-museum-marble">Visitor Guide</strong> if you want a
            timed path (recruiters, India hiring managers, or students). Or open a wing from the map
            above. Every hall has placards; every 3D exhibit has an interpretive label. Look for the{" "}
            <em>You are here</em> chip on interior pages.
          </p>
        </Placard>

        {/* Era gateways — wings */}
        <section aria-labelledby="wings-heading" className="mb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="wayfinding-chip">Museum map</p>
              <h2 id="wings-heading" className="font-display text-3xl text-museum-marble">
                Wings & galleries
              </h2>
            </div>
            <Link href="/epochs" className="text-sm text-museum-brass hover:underline focus-ring">
              All wings →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {epochs.map((e) => (
              <Link
                key={e.slug}
                href={`/epochs/${e.slug}`}
                className="focus-ring group placard block p-5 transition hover:border-museum-brass/60"
              >
                <p className="wayfinding-chip" style={{ color: e.accent }}>
                  {e.wing}
                </p>
                <h3 className="mt-2 font-display text-2xl text-museum-marble group-hover:text-museum-brass">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-museum-mist line-clamp-3">{e.hallIntro}</p>
                <p className="mt-4 text-[11px] uppercase tracking-widest text-museum-brass/80">
                  {e.span}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured exhibits */}
        <section aria-labelledby="featured-heading" className="mb-16">
          <p className="wayfinding-chip">Sculpture court</p>
          <h2 id="featured-heading" className="font-display text-3xl text-museum-marble mb-6">
            Featured exhibits
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exhibits.map((ex) => (
              <Link
                key={ex.slug}
                href={`/exhibits/${ex.slug}`}
                className="focus-ring exhibit-frame group relative flex min-h-[180px] flex-col justify-end p-4"
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${
                      epochs.find((e) => e.slug === ex.epoch)?.accent ?? "#b45309"
                    }55, transparent 60%)`,
                  }}
                  aria-hidden
                />
                <p className="relative wayfinding-chip">{ex.hallCode}</p>
                <h3 className="relative font-display text-xl text-museum-marble group-hover:text-museum-brass">
                  {ex.title}
                </h3>
                <p className="relative mt-1 text-xs text-museum-mist">{ex.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Tour teaser */}
        <section aria-labelledby="tours-heading">
          <p className="wayfinding-chip">Visitor desk</p>
          <h2 id="tours-heading" className="font-display text-3xl text-museum-marble mb-6">
            Recommended tour paths
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {tours.map((t) => (
              <Link
                key={t.id}
                href="/guide"
                className="focus-ring placard block p-5 hover:border-museum-brass/50"
              >
                <p className="text-xs text-museum-mist">{t.audience}</p>
                <h3 className="mt-2 font-display text-xl text-museum-marble">{t.title}</h3>
                <p className="mt-2 text-sm text-museum-mist">{t.blurb}</p>
                <p className="mt-4 wayfinding-chip">{t.duration}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
