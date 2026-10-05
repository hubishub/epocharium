"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/data/glossary";

export function GlossarySearch() {
  const [q, setQ] = useState("");
  const [epoch, setEpoch] = useState("all");

  const epochs = useMemo(
    () => ["all", ...Array.from(new Set(glossary.map((g) => g.epoch)))],
    []
  );

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return glossary
      .filter((g) => (epoch === "all" ? true : g.epoch === epoch))
      .filter(
        (g) =>
          !needle ||
          g.term.toLowerCase().includes(needle) ||
          g.definition.toLowerCase().includes(needle)
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [q, epoch]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <label className="flex-1 text-sm">
          <span className="sr-only">Search glossary</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search terms or definitions…"
            className="w-full rounded-sm border border-museum-brass/30 bg-museum-panel px-4 py-2.5 text-museum-marble placeholder:text-museum-mist/50 focus-ring"
            aria-label="Search glossary terms"
          />
        </label>
        <label className="text-sm sm:w-48">
          <span className="sr-only">Filter by wing</span>
          <select
            value={epoch}
            onChange={(e) => setEpoch(e.target.value)}
            className="w-full rounded-sm border border-museum-brass/30 bg-museum-panel px-3 py-2.5 text-museum-marble focus-ring"
          >
            {epochs.map((e) => (
              <option key={e} value={e}>
                {e === "all" ? "All wings" : e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="mb-4 text-xs uppercase tracking-widest text-museum-mist">
        {results.length} term{results.length === 1 ? "" : "s"}
      </p>
      <ul className="space-y-4">
        {results.map((g) => (
          <li key={g.id} id={g.id} className="placard p-5 scroll-mt-28">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-2xl text-museum-marble">{g.term}</h2>
              <span className="wayfinding-chip">{g.epoch}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-museum-mist">{g.definition}</p>
            {g.seeAlso && g.seeAlso.length > 0 && (
              <p className="mt-3 text-xs text-museum-brassDim">
                See also: {g.seeAlso.join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
