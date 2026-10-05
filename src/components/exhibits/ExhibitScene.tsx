"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ExhibitSlug } from "@/data/exhibits";
import type { ExhibitCameraProps } from "./ExhibitCanvas";

const ExhibitCanvas = dynamic(
  () => import("./ExhibitCanvas").then((m) => m.ExhibitCanvas),
  { ssr: false }
);
const EarlyPC = dynamic(() => import("./models/EarlyPC").then((m) => m.EarlyPC), {
  ssr: false,
});
const PhoneGenerations = dynamic(
  () => import("./models/PhoneGenerations").then((m) => m.PhoneGenerations),
  { ssr: false }
);
const NetworkMetaphor = dynamic(
  () => import("./models/NetworkMetaphor").then((m) => m.NetworkMetaphor),
  { ssr: false }
);
const AiServerRack = dynamic(
  () => import("./models/AiServerRack").then((m) => m.AiServerRack),
  { ssr: false }
);

const scenes: Record<ExhibitSlug, ComponentType> = {
  "early-pc": EarlyPC,
  "phone-generations": PhoneGenerations,
  "network-metaphor": NetworkMetaphor,
  "ai-server-rack": AiServerRack,
};

/** EPO-019: pull camera back + raise look-at so rack + lattice fit on first paint. */
const cameraBySlug: Partial<Record<ExhibitSlug, ExhibitCameraProps>> = {
  "ai-server-rack": {
    cameraPosition: [3.6, 1.7, 5.0],
    cameraTarget: [0, 0.5, 0],
    cameraFov: 42,
  },
};

export function ExhibitScene({ slug }: { slug: ExhibitSlug }) {
  const Scene = scenes[slug];
  const cam = cameraBySlug[slug];
  return (
    <ExhibitCanvas
      cameraPosition={cam?.cameraPosition}
      cameraTarget={cam?.cameraTarget}
      cameraFov={cam?.cameraFov}
    >
      <Scene />
    </ExhibitCanvas>
  );
}
