import type { ReactElement } from "react";
import type { ExhibitSlug } from "@/data/exhibits";

/**
 * EPO-020: Representative SVG poster per exhibit slug over the epoch accent gradient.
 * Decorative only (aria-hidden). Uses currentColor + semi-transparent strokes for Day/Evening.
 */
function EarlyPcSvg() {
  return (
    <svg viewBox="0 0 160 96" className="h-full w-full" aria-hidden>
      {/* CRT + case */}
      <rect
        x="38"
        y="12"
        width="84"
        height="58"
        rx="4"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <rect
        x="48"
        y="20"
        width="64"
        height="38"
        rx="2"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      {/* scan glow */}
      <rect x="52" y="24" width="56" height="30" rx="1" fill="#c9a227" fillOpacity="0.25" />
      {/* stand */}
      <rect x="70" y="70" width="20" height="6" fill="currentColor" fillOpacity="0.35" />
      <rect x="58" y="76" width="44" height="5" rx="1" fill="currentColor" fillOpacity="0.45" />
      {/* case block beside */}
      <rect
        x="10"
        y="28"
        width="22"
        height="40"
        rx="2"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <circle cx="21" cy="48" r="3" fill="#c9a227" fillOpacity="0.7" />
    </svg>
  );
}

function PhoneGenerationsSvg() {
  return (
    <svg viewBox="0 0 160 96" className="h-full w-full" aria-hidden>
      {/* brick */}
      <rect
        x="18"
        y="28"
        width="28"
        height="48"
        rx="3"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <rect x="24" y="34" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.25" />
      {/* candybar */}
      <rect
        x="58"
        y="22"
        width="26"
        height="54"
        rx="4"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <rect x="62" y="28" width="18" height="28" rx="1" fill="currentColor" fillOpacity="0.2" />
      {/* smartphone slab */}
      <rect
        x="98"
        y="14"
        width="34"
        height="66"
        rx="5"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <rect x="103" y="22" width="24" height="48" rx="2" fill="#c9a227" fillOpacity="0.22" />
      <circle cx="115" cy="74" r="2.5" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
}

function NetworkMetaphorSvg() {
  return (
    <svg viewBox="0 0 160 96" className="h-full w-full" aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      >
        <path d="M30 48 C50 20, 70 20, 90 48" />
        <path d="M40 70 C60 40, 100 40, 120 70" />
        <path d="M50 28 C80 50, 100 50, 130 28" />
        <line x1="30" y1="48" x2="50" y2="28" />
        <line x1="90" y1="48" x2="120" y2="70" />
        <line x1="50" y1="28" x2="130" y2="28" />
      </g>
      {[
        [30, 48],
        [50, 28],
        [90, 48],
        [120, 70],
        [130, 28],
        [70, 58],
        [100, 36],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 5 : 3.5}
          fill={i === 2 ? "#c9a227" : "currentColor"}
          fillOpacity={i === 2 ? 0.75 : 0.35}
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function AiServerRackSvg() {
  return (
    <svg viewBox="0 0 160 96" className="h-full w-full" aria-hidden>
      {/* rack */}
      <rect
        x="52"
        y="28"
        width="56"
        height="56"
        rx="2"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="58"
          y={34 + i * 9}
          width="44"
          height="6"
          rx="1"
          fill="currentColor"
          fillOpacity="0.15"
          stroke={i % 2 === 0 ? "#c9a227" : "currentColor"}
          strokeOpacity="0.55"
          strokeWidth="1"
        />
      ))}
      {/* floating lattice */}
      <g
        transform="translate(80 18)"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.65"
        strokeWidth="1.25"
      >
        <polygon points="0,-14 12,-4 8,12 -8,12 -12,-4" />
        <polygon points="0,-8 7,-2 4,7 -4,7 -7,-2" stroke="#c9a227" strokeOpacity="0.8" />
        <line x1="0" y1="-14" x2="0" y2="12" />
        <line x1="-12" y1="-4" x2="12" y2="-4" />
      </g>
    </svg>
  );
}

const thumbs: Record<ExhibitSlug, () => ReactElement> = {
  "early-pc": EarlyPcSvg,
  "phone-generations": PhoneGenerationsSvg,
  "network-metaphor": NetworkMetaphorSvg,
  "ai-server-rack": AiServerRackSvg,
};

export function ExhibitCardThumb({
  slug,
  accent,
}: {
  slug: ExhibitSlug;
  accent: string;
}) {
  const Illustration = thumbs[slug] ?? EarlyPcSvg;
  return (
    <div
      className="relative h-36 overflow-hidden text-museum-marble"
      style={{
        background: `linear-gradient(135deg, ${accent}33, #05060a 70%)`,
      }}
      aria-hidden
    >
      {/* Day: lighten wash so SVG currentColor still reads on cream themes via marble token */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent dark:from-black/40" />
      <div className="relative flex h-full items-center justify-center px-4 py-3">
        <Illustration />
      </div>
    </div>
  );
}
