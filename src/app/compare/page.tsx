import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { Placard } from "@/components/museum/Placard";
import { CompareDesk } from "@/components/museum/CompareDesk";

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Compare Desk"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Compare Desk" }]}
      />
      <HallHeader
        wing="Study room"
        title="Side-by-Side Compare Desk"
        subtitle="Place two artifacts on the pedestals. Filter by device, era, network, or AI paradigm — a working study UI for visitors and hiring conversations."
      />
      <Placard code="DESK RULES" className="mb-10 max-w-2xl">
        <p>
          Comparisons are interpretive teaching aids. They compress decades into a few rows so you can
          talk about tradeoffs — not rank winners.
        </p>
      </Placard>
      <CompareDesk />
    </div>
  );
}
