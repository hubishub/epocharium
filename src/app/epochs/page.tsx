import Link from "next/link";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { AccentText } from "@/components/museum/AccentText";
import { epochs } from "@/data/epochs";

export default function EpochsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Wings Directory"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Wings" }]}
      />
      <HallHeader
        wing="Museum directory"
        title="Epoch Wings"
        subtitle="Five permanent halls. Each wing holds milestones, key systems, dual-market notes, and doors into related exhibits and archive essays."
      />
      <div className="grid gap-6">
        {epochs.map((e, idx) => (
          <article
            key={e.slug}
            className="placard grid gap-6 p-6 md:grid-cols-[140px_1fr_auto] md:items-center"
          >
            <div>
              <p className="wayfinding-chip">Wing {String.fromCharCode(65 + idx)}</p>
              <p className="mt-2 font-mono text-xs text-museum-mist">{e.span}</p>
            </div>
            <div>
              <AccentText
                as="h2"
                className="font-display text-3xl text-museum-marble"
                accent={e.accent}
                accentEvening={e.accentEvening}
              >
                {e.title}
              </AccentText>
              <p className="mt-1 text-sm text-museum-mist">{e.wing}</p>
              <p className="mt-3 text-sm leading-relaxed text-museum-mist max-w-3xl">{e.hallIntro}</p>
            </div>
            <Link
              href={`/epochs/${e.slug}`}
              className="focus-ring self-start min-h-11 inline-flex items-center border border-museum-brass/50 px-4 py-2 text-xs uppercase tracking-widest text-museum-brass hover:bg-museum-brass/10"
            >
              Enter hall
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
