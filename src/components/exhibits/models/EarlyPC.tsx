"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/a11y";

export function EarlyPC() {
  const crt = useRef<THREE.Mesh>(null);
  const reducedMotion = usePrefersReducedMotion();

  useFrame(({ clock }) => {
    if (reducedMotion || !crt.current) return;
    const mat = crt.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.35 + Math.sin(clock.elapsedTime * 2) * 0.08;
  });

  return (
    <group position={[0, -0.6, 0]}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[2.2, 0.7, 1.6]} />
        <meshStandardMaterial color="#6b7280" metalness={0.35} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.35, 0.82]}>
        <boxGeometry args={[2.05, 0.55, 0.05]} />
        <meshStandardMaterial color="#374151" metalness={0.2} roughness={0.7} />
      </mesh>
      {[-0.55, 0, 0.55].map((x, i) => (
        <mesh key={i} position={[x, 0.35, 0.86]}>
          <boxGeometry args={[0.45, 0.12, 0.02]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      ))}
      <mesh position={[0, 1.25, -0.15]}>
        <boxGeometry args={[1.4, 1.1, 0.7]} />
        <meshStandardMaterial color="#4b5563" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh ref={crt} position={[0, 1.28, 0.22]}>
        <boxGeometry args={[1.05, 0.8, 0.08]} />
        <meshStandardMaterial
          color="#64748b"
          emissive="#475569"
          emissiveIntensity={0.4}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, -0.05, 0.9]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 0.35]} />
        <meshStandardMaterial color="#b45309" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}
