"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/a11y";

export function NetworkMetaphor() {
  const group = useRef<THREE.Group>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { positions, pairs } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const n = 14;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const r = 1.3 + (i % 3) * 0.35;
      nodes.push(
        new THREE.Vector3(Math.cos(a) * r, (i % 5) * 0.25 - 0.5, Math.sin(a) * r * 0.85)
      );
    }
    nodes.push(new THREE.Vector3(0, 0.2, 0));
    const pairs: [number, number][] = [];
    for (let i = 0; i < n; i++) {
      pairs.push([i, n]);
      pairs.push([i, (i + 1) % n]);
      if (i % 3 === 0) pairs.push([i, (i + 4) % n]);
    }
    return { positions: nodes, pairs };
  }, []);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts: number[] = [];
    pairs.forEach(([a, b]) => {
      verts.push(positions[a].x, positions[a].y, positions[a].z);
      verts.push(positions[b].x, positions[b].y, positions[b].z);
    });
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [pairs, positions]);

  useFrame(({ clock }) => {
    if (reducedMotion || !group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.12;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#5b7c99" transparent opacity={0.65} />
      </lineSegments>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i === positions.length - 1 ? 0.12 : 0.07, 16, 16]} />
          <meshStandardMaterial
            color={i === positions.length - 1 ? "#b45309" : "#94a3b8"}
            emissive={i === positions.length - 1 ? "#b45309" : "#475569"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}
