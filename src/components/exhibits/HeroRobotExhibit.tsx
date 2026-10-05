"use client";

import dynamic from "next/dynamic";

const HeroRobotCanvas = dynamic(
  () => import("./HeroRobotCanvas").then((m) => m.HeroRobotCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="exhibit-frame flex h-[360px] w-full items-center justify-center rounded-sm text-sm text-museum-mist md:h-[440px]">
        Staging humanoid sculpture…
      </div>
    ),
  }
);

/** Entrance-hall right-rail sculpture — R3F humanoid with static fallback. */
export function HeroRobotExhibit() {
  return (
    <aside
      className="w-full"
      aria-label="Interactive 3D gallery sculpture: drag to orbit the superintelligent humanoid robot."
    >
      <HeroRobotCanvas />
      <p className="mt-3 text-center text-[11px] uppercase tracking-widest text-[#1c1917] dark:text-[#e7e5e4]">
        Live R3F · drag to orbit · industrial humanoid · CC0 original
      </p>
    </aside>
  );
}
