import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { GlossarySearch } from "@/components/museum/GlossarySearch";

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="Lexicon Desk"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "Glossary" }]}
      />
      <HallHeader
        wing="Lexicon"
        title="Glossary"
        subtitle="Searchable terms spanning networks, machines, mobiles, AI, and AGI debates — a vocabulary desk for tours and interviews."
      />
      <GlossarySearch />
    </div>
  );
}
