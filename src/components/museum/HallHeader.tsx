import { AccentText } from "@/components/museum/AccentText";

export function HallHeader({
  wing,
  title,
  subtitle,
  span,
  accent,
  accentEvening,
}: {
  wing: string;
  title: string;
  subtitle: string;
  span?: string;
  accent?: string;
  accentEvening?: string;
}) {
  return (
    <header className="mb-10">
      {accent ? (
        <AccentText
          as="p"
          className="wayfinding-chip mb-3"
          accent={accent}
          accentEvening={accentEvening}
        >
          {wing}
        </AccentText>
      ) : (
        <p className="wayfinding-chip mb-3">{wing}</p>
      )}
      <h1 className="font-display text-4xl md:text-5xl tracking-tight text-museum-marble max-w-3xl">
        {title}
      </h1>
      <p className="mt-3 text-lg text-museum-mist max-w-2xl">{subtitle}</p>
      {span && (
        <p className="mt-4 inline-block rounded-full border border-museum-brass/40 bg-museum-brass/10 px-3 py-1 text-xs tracking-widest uppercase text-museum-brass backdrop-blur-sm">
          Gallery span · {span}
        </p>
      )}
      <div className="hall-floor-line mt-8" />
    </header>
  );
}
