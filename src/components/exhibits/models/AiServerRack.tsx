"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/a11y";

/**
 * EPO-019: Lattice sat too high (group y=-0.9, lattice y=2.5, icosa r=0.55 →
 * world top ≈ 2.15) and clipped under default camera [3.2,2.2,4.2] fov 42.
 * Shrink + lower lattice so it floats near the rack top without leaving the
 * frustum; ExhibitScene also pulls camera for this slug.
 * Dex reduced-motion gate on lattice spin preserved.
 */
export function AiServerRack() {
  const lattice = useRef<THREE.Group>(null);
  const reducedMotion = usePrefersReducedMotion();

  useFrame(({ clock }) => {
    if (reducedMotion || !lattice.current) return;
    lattice.current.rotation.y = clock.elapsedTime * 0.25;
    lattice.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.15;
  });

  // Rack top at group-local y = 1.1 + 1.1 = 2.2.
  // Lattice center 2.36, outer r=0.40 → top ≈ 2.76 group / world ≈ 1.86 —
  // fits with pulled-back camera from ExhibitScene.
  return (
    <group position={[0, -0.9, 0]}>
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[1.4, 2.2, 0.7]} />
        <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.4} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, 0.25 + i * 0.24, 0.36]}>
          <boxGeometry args={[1.2, 0.18, 0.05]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive={i % 2 === 0 ? "#a8a29e" : "#5b7c99"}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
      <group ref={lattice} position={[0, 2.36, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial
            color="#a8a29e"
            wireframe
            emissive="#a8a29e"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial
            color="#c9a227"
            emissive="#c9a227"
            emissiveIntensity={0.55}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </group>
  );
}
