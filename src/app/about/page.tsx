import Link from "next/link";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { Placard } from "@/components/museum/Placard";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere="About the Museum"
        crumbs={[{ label: "Entrance", href: "/" }, { label: "About" }]}
      />
      <HallHeader
        wing="Information desk"
        title="About Epocharium"
        subtitle="A cinematic tech civilization museum built as a portfolio exhibition — halls first, biography second."
      />
      <div className="prose-museum space-y-4">
        <p>
          Epocharium is an interpretive museum of how major technology stacks developed: the Internet,
          computers and laptops, mobiles, artificial intelligence, and the still-open questions around
          AGI. Visitors move through wings, read placards, orbit 3D exhibits, and study comparisons —
          the same literacy recruiters and hiring managers probe in interviews, presented as galleries
          rather than a SaaS landing page.
        </p>
        <p>
          Content aims for careful popular history: named eras and years, dual-market notes for US/EU
          and India where natural, and an explicitly non-hype tone in the Horizon (AGI) gallery.
        </p>
      </div>

      <Placard code="BUILDER NOTE" title="Exhibition builder" className="mt-10">
        <p>
          This museum site was built by <strong className="text-museum-marble">Harinder Sidhu</strong>{" "}
          as a full-stack portfolio piece — Open to Work from the Mohali / Chandigarh region and
          remote. The builder note lives here so the Entrance Hall can remain a museum atrium, not a
          hire-me funnel.
        </p>
        <p className="mt-3">
          Stack highlights on display in the fabrication: Next.js App Router, TypeScript, Tailwind,
          React Three Fiber exhibits, and a warm marble liquid-glass museum UI with evening charcoal gallery toggle.
        </p>
      </Placard>

      <p className="mt-10 text-sm text-museum-mist">
        Continue to the <Link href="/guide" className="text-museum-brass hover:underline focus-ring">Visitor Guide</Link>{" "}
        or return to the <Link href="/" className="text-museum-brass hover:underline focus-ring">Entrance Hall</Link>.
      </p>
    </div>
  );
}
