"use client";

function Pedestal({ labelColor }: { labelColor: string }) {
  return (
    <group position={[0, -1, 0]}>
      <mesh>
        <cylinderGeometry args={[0.35, 0.4, 0.15, 24]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.04, 24]} />
        <meshStandardMaterial color={labelColor} metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function PhoneGenerations() {
  return (
    <group>
      <group position={[-1.6, -0.2, 0]}>
        <mesh>
          <boxGeometry args={[0.55, 1.1, 0.28]} />
          <meshStandardMaterial color="#9ca3af" metalness={0.4} roughness={0.45} />
        </mesh>
        <mesh position={[0, 0.25, 0.15]}>
          <boxGeometry args={[0.35, 0.25, 0.02]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        <Pedestal labelColor="#d4784a" />
      </group>
      <group position={[0, -0.05, 0]}>
        <mesh>
          <boxGeometry args={[0.48, 1.25, 0.18]} />
          <meshStandardMaterial color="#64748b" metalness={0.35} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.35, 0.1]}>
          <boxGeometry args={[0.38, 0.35, 0.015]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        <Pedestal labelColor="#c9a227" />
      </group>
      <group position={[1.6, 0.05, 0]}>
        <mesh>
          <boxGeometry args={[0.58, 1.35, 0.08]} />
          <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.02, 0.045]}>
          <boxGeometry args={[0.52, 1.2, 0.01]} />
          <meshStandardMaterial color="#64748b" emissive="#475569" emissiveIntensity={0.25} />
        </mesh>
        <Pedestal labelColor="#5b7c99" />
      </group>
    </group>
  );
}
