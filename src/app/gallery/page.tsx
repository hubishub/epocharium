import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { GalleryArtGrid } from "@/components/museum/GalleryArt";
import { Placard } from "@/components/museum/Placard";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Illustration Gallery"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Illustration Gallery" }]}
      />
      <HallHeader
        wing="Prints & diagrams"
        title="Illustration Gallery"
        subtitle="Original SVG and CSS diagrams — no scraped photographs, no licensed product shots. Teaching graphics for the halls."
      />
      <Placard code="COLLECTION NOTE" className="mb-10 max-w-2xl">
        <p>
          Every piece here was drawn for Epocharium. If you need photoreal device photography, that
          belongs in a licensed museum loan program — not this interpretive encyclopedia.
        </p>
      </Placard>
      <GalleryArtGrid />
    </div>
  );
}
