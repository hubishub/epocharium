import Link from "next/link";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { AccentText } from "@/components/museum/AccentText";
import { timelineEvents } from "@/data/timeline";

const trackColor: Record<string, { day: string; evening: string }> = {
  internet: { day: "#5b7c99", evening: "#94a3b8" },
  computers: { day: "#a16207", evening: "#eab308" },
  mobiles: { day: "#c2410c", evening: "#fb923c" },
  ai: { day: "#57534e", evening: "#d6d3d1" },
  agi: { day: "#78716c", evening: "#d6d3d1" },
  cross: { day: "#78716c", evening: "#d6d3d1" },
};

export default function TimelinePage() {
  const sorted = [...timelineEvents].sort((a, b) => a.year - b.year);
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Civilization Timeline Desk"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Timeline" }]}
      />
      <HallHeader
        wing="Chronology Gallery"
        title="Civilization Timeline"
        subtitle="Inflection points across Internet, compute, mobile, AI, and AGI debates — one corridor, many tracks."
        span="1950 → present"
      />
      <p className="mb-10 max-w-2xl text-sm text-museum-mist leading-relaxed">
        Read top to bottom as a walk through decades. Colored ticks mark the wing each event belongs
        to. This is interpretive chronology for visitors — not a claim of exhaustive academic history.
      </p>
      <ol className="relative space-y-0 border-l border-museum-brass/30 ml-3 md:ml-6">
        {sorted.map((ev) => {
          const track = trackColor[ev.track] ?? trackColor.cross;
          return (
            <li key={ev.id} className="relative pb-10 pl-8">
              <span
                className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-museum-ink"
                style={{ background: track.day }}
                aria-hidden
              />
              <AccentText
                as="p"
                className="wayfinding-chip"
                accent={track.day}
                accentEvening={track.evening}
              >
                {ev.yearLabel} · {ev.track}
              </AccentText>
              <h2 className="mt-1 font-display text-2xl text-museum-marble">
                {ev.href ? (
                  <Link href={ev.href} className="focus-ring hover:text-museum-brass">
                    {ev.title}
                  </Link>
                ) : (
                  ev.title
                )}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-museum-mist">{ev.summary}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
