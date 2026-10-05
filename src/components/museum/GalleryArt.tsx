import { galleryPieces } from "@/data/gallery";

function Art({ id }: { id: string }) {
  switch (id) {
    case "packet-flow":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Packet flow diagram">
          <rect width="400" height="200" fill="#0b0c10" />
          <circle cx="40" cy="100" r="14" fill="#b45309" />
          <circle cx="360" cy="100" r="14" fill="#b45309" />
          <path d="M60 100 C120 40, 280 40, 340 100" stroke="#5b7c99" strokeWidth="2" fill="none" />
          <path d="M60 100 C120 160, 280 160, 340 100" stroke="#57534e" strokeWidth="2" fill="none" />
          <circle cx="140" cy="55" r="5" fill="#5b7c99" />
          <circle cx="260" cy="145" r="5" fill="#57534e" />
          <text x="200" y="190" textAnchor="middle" fill="#9aa3b5" fontSize="11">
            split · route · reassemble
          </text>
        </svg>
      );
    case "osi-stack-lite":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Protocol layers poster">
          <rect width="400" height="200" fill="#12141c" />
          {["App / Web", "Transport", "Internet", "Link"].map((label, i) => (
            <g key={label}>
              <rect x="80" y={20 + i * 42} width="240" height="36" fill="#1a1d29" stroke="#b45309" strokeWidth="1" />
              <text x="200" y={43 + i * 42} textAnchor="middle" fill="#e8e4d9" fontSize="13">
                {label}
              </text>
            </g>
          ))}
        </svg>
      );
    case "mainframe-silhouette":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Mainframe silhouette">
          <rect width="400" height="200" fill="#0b0c10" />
          <rect x="70" y="40" width="70" height="130" fill="#374151" />
          <rect x="160" y="30" width="80" height="140" fill="#4b5563" />
          <rect x="260" y="50" width="70" height="120" fill="#374151" />
          <rect x="40" y="170" width="320" height="8" fill="#b45309" opacity="0.5" />
        </svg>
      );
    case "pc-anatomy":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="PC anatomy blocks">
          <rect width="400" height="200" fill="#12141c" />
          {[
            [40, 40, "CPU"],
            [140, 40, "Memory"],
            [240, 40, "Bus"],
            [40, 110, "Storage"],
            [140, 110, "Display"],
            [240, 110, "I/O"],
          ].map(([x, y, label], i) => (
            <g key={i}>
              <rect x={x as number} y={y as number} width="90" height="50" fill="#1a1d29" stroke="#5b7c99" />
              <text x={(x as number) + 45} y={(y as number) + 30} textAnchor="middle" fill="#e8e4d9" fontSize="12">
                {label as string}
              </text>
            </g>
          ))}
        </svg>
      );
    case "phone-timeline-strip":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Handset proportions">
          <rect width="400" height="200" fill="#0b0c10" />
          <rect x="60" y="50" width="40" height="100" rx="4" fill="#9ca3af" />
          <rect x="180" y="40" width="36" height="120" rx="4" fill="#64748b" />
          <rect x="300" y="30" width="44" height="140" rx="6" fill="#111827" stroke="#5b7c99" />
        </svg>
      );
    case "cell-hex":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Cellular hex idea">
          <rect width="400" height="200" fill="#12141c" />
          {[100, 200, 300].map((cx, i) => (
            <polygon
              key={i}
              points={`${cx},40 ${cx + 40},70 ${cx + 40},130 ${cx},160 ${cx - 40},130 ${cx - 40},70`}
              fill="none"
              stroke="#c2410c"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      );
    case "neural-layers":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Neural layer cake">
          <rect width="400" height="200" fill="#0b0c10" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={60 + i * 20}
              y={40 + i * 18}
              width={280 - i * 40}
              height="28"
              fill="#57534e"
              opacity={0.35 + i * 0.15}
              stroke="#b45309"
            />
          ))}
        </svg>
      );
    case "gpu-grid":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Accelerator grid">
          <rect width="400" height="200" fill="#12141c" />
          {Array.from({ length: 48 }).map((_, i) => {
            const col = i % 12;
            const row = Math.floor(i / 12);
            return (
              <rect
                key={i}
                x={40 + col * 28}
                y={40 + row * 35}
                width="22"
                height="28"
                fill="#1a1d29"
                stroke="#5b7c99"
                strokeWidth="0.8"
              />
            );
          })}
        </svg>
      );
    case "agi-question":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Open questions board">
          <rect width="400" height="200" fill="#0b0c10" />
          <text x="200" y="50" textAnchor="middle" fill="#b45309" fontSize="14">
            OPEN QUESTIONS
          </text>
          {["General at what?", "Who evaluates?", "What breaks first?", "Whose norms?"].map(
            (t, i) => (
              <text key={t} x="200" y={90 + i * 24} textAnchor="middle" fill="#e8e4d9" fontSize="13">
                {t}
              </text>
            )
          )}
        </svg>
      );
    case "winter-summer":
      return (
        <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="AI winter summer bars">
          <rect width="400" height="200" fill="#12141c" />
          {[40, 90, 50, 120, 70, 150].map((h, i) => (
            <rect
              key={i}
              x={50 + i * 55}
              y={180 - h}
              width="35"
              height={h}
              fill={i % 2 === 0 ? "#4b5563" : "#b45309"}
              opacity="0.85"
            />
          ))}
        </svg>
      );
    default:
      return <div className="flex h-full items-center justify-center text-museum-mist">Artwork</div>;
  }
}

export function GalleryArtGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {galleryPieces.map((piece) => (
        <figure key={piece.id} className="placard overflow-hidden p-0">
          <div className="aspect-[2/1] bg-museum-ink">
            <Art id={piece.id} />
          </div>
          <figcaption className="p-4">
            <p className="wayfinding-chip">{piece.wing} · {piece.kind}</p>
            <h2 className="mt-1 font-display text-xl text-museum-marble">{piece.title}</h2>
            <p className="mt-2 text-sm text-museum-mist">{piece.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
