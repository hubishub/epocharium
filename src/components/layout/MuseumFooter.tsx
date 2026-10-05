import Link from "next/link";

export function MuseumFooter() {
  return (
    <footer className="glass-footer mt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-lg text-museum-brass">Epocharium</p>
          <p className="mt-2 text-sm text-museum-mist leading-relaxed">
            A cinematic museum of how major technology stacks developed — Internet, computers,
            mobiles, AI, and open AGI questions. Interpretive exhibits; not a licensed collection of
            branded artifacts.
          </p>
        </div>
        <div>
          <p className="wayfinding-chip mb-3">Visitor desk</p>
          <ul className="space-y-2 text-sm text-museum-mist">
            <li>
              <Link className="hover:text-museum-brass focus-ring" href="/guide">
                Recommended tours
              </Link>
            </li>
            <li>
              <Link className="hover:text-museum-brass focus-ring" href="/glossary">
                Glossary
              </Link>
            </li>
            <li>
              <Link className="hover:text-museum-brass focus-ring" href="/exhibits">
                3D exhibit floor
              </Link>
            </li>
            <li>
              <Link className="hover:text-museum-brass focus-ring" href="/about">
                About the museum
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="wayfinding-chip mb-3">Hours of interpretation</p>
          <p className="text-sm text-museum-mist leading-relaxed">
            Open whenever this site is running locally. No tickets. No gift shop. Just halls, placards,
            and orbits.
          </p>
        </div>
      </div>
      <div className="border-t border-museum-mist/15 py-4 text-center text-[11px] tracking-wide text-museum-mist">
        Epocharium · Tech Civilization Museum & Encyclopedia · Built as a portfolio exhibition piece
      </div>
    </footer>
  );
}
