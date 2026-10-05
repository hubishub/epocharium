"use client";

import { useMemo, useState } from "react";
import { compareCategories, compareItems, type CompareItem } from "@/data/compare";
import { cn } from "@/lib/utils";

const fields: { key: keyof CompareItem; label: string }[] = [
  { key: "years", label: "Years" },
  { key: "formFactor", label: "Form factor" },
  { key: "interfaceStyle", label: "Interface" },
  { key: "connectivity", label: "Connectivity" },
  { key: "softwareModel", label: "Software model" },
  { key: "whoUsedIt", label: "Primary users" },
  { key: "limitation", label: "Limitation" },
  { key: "legacy", label: "Legacy" },
];

function clampPair(
  pool: CompareItem[],
  leftId: string,
  rightId: string
): { leftId: string; rightId: string } {
  if (pool.length === 0) return { leftId, rightId };
  const nextLeft = pool.some((i) => i.id === leftId) ? leftId : pool[0].id;
  const nextRight = pool.some((i) => i.id === rightId && i.id !== nextLeft)
    ? rightId
    : (pool.find((i) => i.id !== nextLeft) ?? pool[0]).id;
  return { leftId: nextLeft, rightId: nextRight };
}

export function CompareDesk() {
  const [category, setCategory] = useState<string>("all");
  const [leftId, setLeftId] = useState(compareItems[0].id);
  const [rightId, setRightId] = useState(compareItems[4].id);

  const filtered = useMemo(
    () =>
      category === "all"
        ? compareItems
        : compareItems.filter((i) => i.category === category),
    [category]
  );

  const left = compareItems.find((i) => i.id === leftId) ?? compareItems[0];
  const right = compareItems.find((i) => i.id === rightId) ?? compareItems[1];

  function selectCategory(nextCategory: string) {
    setCategory(nextCategory);
    const pool =
      nextCategory === "all"
        ? compareItems
        : compareItems.filter((i) => i.category === nextCategory);
    const next = clampPair(pool, leftId, rightId);
    setLeftId(next.leftId);
    setRightId(next.rightId);
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter artifacts by category">
        {compareCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => selectCategory(c.id)}
            aria-pressed={category === c.id}
            className={cn(
              "focus-ring border px-3 py-1.5 text-xs uppercase tracking-widest",
              category === c.id
                ? "border-museum-brass bg-museum-brass/15 text-museum-brass"
                : "border-white/15 text-museum-mist hover:border-museum-brass/40"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="wayfinding-chip">Left pedestal</span>
          <select
            className="mt-2 w-full rounded-sm border border-museum-brass/30 bg-museum-panel px-3 py-2 text-museum-marble focus-ring"
            value={leftId}
            onChange={(e) => setLeftId(e.target.value)}
          >
            {filtered.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="wayfinding-chip">Right pedestal</span>
          <select
            className="mt-2 w-full rounded-sm border border-museum-brass/30 bg-museum-panel px-3 py-2 text-museum-marble focus-ring"
            value={rightId}
            onChange={(e) => setRightId(e.target.value)}
          >
            {filtered.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-museum-brass/30">
              <th className="py-3 pr-4 text-left wayfinding-chip font-normal">Dimension</th>
              <th className="py-3 px-4 text-left font-display text-lg text-museum-marble font-normal">
                {left.name}
              </th>
              <th className="py-3 pl-4 text-left font-display text-lg text-museum-marble font-normal">
                {right.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((f) => (
              <tr key={f.key} className="border-b border-white/5 align-top">
                <th className="py-3 pr-4 text-left text-xs uppercase tracking-wider text-museum-brass font-medium">
                  {f.label}
                </th>
                <td className="py-3 px-4 text-museum-mist">{String(left[f.key])}</td>
                <td className="py-3 pl-4 text-museum-mist">{String(right[f.key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
