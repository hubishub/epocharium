"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/industrial-humanoid/model.glb";

/** Pedestal standing plane (top face of crown ring). */
export const HERO_STANDING_PLANE_Y = 0.2125;

/** Target adult height on the plinth (meters). Native GLB is ~1.75m. */
const TARGET_HEIGHT = 1.75;

type Props = { reducedMotion?: boolean; evening?: boolean };

/**
 * CC0 Industrial Humanoid (Epocharium original) on an original pedestal.
 * Figure-inspired industrial aesthetic — no brand IP. Visibility-first loader
 * (single Material assign; no dispose; modest metalness without HDR Environment).
 */
export function HumanoidRobot({ reducedMotion = false, evening = false }: Props) {
  const { scene } = useGLTF(MODEL_URL);
  const figure = useRef<THREE.Group>(null);
  const rootRef = useRef<THREE.Group>(null);
  const invalidate = useThree((s) => s.invalidate);

  const model = useMemo(() => {
    const root = scene.clone(true);

    // Day / Evening albedo floors so grey panels never collapse to silhouette.
    const floorVeryDark = evening ? "#6b6b6b" : "#5a5a5a";
    const floorDark = evening ? "#7a7a7a" : "#6e6e6e";
    const panelMid = evening ? "#8a8a8a" : "#7a7a7a";
    const panelLight = evening ? "#b0b0b0" : "#a3a3a3";
    const panelGrey = evening ? "#949494" : "#858585";

    root.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return;
      const mesh = obj as THREE.Mesh;
      mesh.frustumCulled = false;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      mesh.visible = true;

      const srcMats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];

      const built = srcMats.map((src) => {
        // Fresh standard mat — never mutate/dispose the GLTF cache mats.
        const mat = new THREE.MeshStandardMaterial();
        const s = src as THREE.MeshStandardMaterial;
        const name = (s?.name || "").toLowerCase();
        // emissiveIntensity defaults to 1 even when emissive is black — use color luminance.
        const em = s?.emissive;
        const emLum = em
          ? 0.2126 * em.r + 0.7152 * em.g + 0.0722 * em.b
          : 0;
        const isLed = emLum > 0.45 || name.includes("led");

        if (isLed) {
          mat.color.set("#ffffff");
          mat.emissive = new THREE.Color("#ffffff");
          mat.emissiveIntensity = 1.2;
          mat.metalness = 0;
          mat.roughness = 0.35;
        } else if (name === "panellight" || name === "panel_light") {
          mat.color.set(panelLight);
          mat.metalness = 0.12;
          mat.roughness = 0.68;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "panelgrey" || name === "panel_grey") {
          mat.color.set(panelGrey);
          mat.metalness = 0.12;
          mat.roughness = 0.7;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "charcoalsoft") {
          mat.color.set(panelMid);
          mat.metalness = 0.12;
          mat.roughness = 0.72;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "charcoal") {
          mat.color.set(floorDark);
          mat.metalness = 0.14;
          mat.roughness = 0.7;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "joint") {
          mat.color.set(floorVeryDark);
          mat.metalness = 0.16;
          mat.roughness = 0.62;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "headgloss") {
          mat.color.set(floorVeryDark);
          mat.metalness = 0.18;
          mat.roughness = 0.55;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "lensring") {
          mat.color.set(floorDark);
          mat.metalness = 0.14;
          mat.roughness = 0.65;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else if (name === "lens" || name === "sole") {
          mat.color.set(floorVeryDark);
          mat.metalness = 0.12;
          mat.roughness = 0.75;
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        } else {
          // Fallback: lift dark colors so unknown mats never go pure black.
          const base = s?.color?.clone?.() ?? new THREE.Color(floorDark);
          const lum = 0.2126 * base.r + 0.7152 * base.g + 0.0722 * base.b;
          if (lum < 0.08) {
            mat.color.set(floorVeryDark);
          } else if (lum < 0.25) {
            mat.color.set(floorDark);
          } else {
            // Lift mid tones ~1.2×, cap ~0.6 RGB so panels stay industrial grey.
            const lifted = base.clone().multiplyScalar(1.2);
            lifted.r = Math.min(0.6, lifted.r);
            lifted.g = Math.min(0.6, lifted.g);
            lifted.b = Math.min(0.6, lifted.b);
            const liftedLum =
              0.2126 * lifted.r + 0.7152 * lifted.g + 0.0722 * lifted.b;
            if (liftedLum < 0.25) mat.color.set(floorDark);
            else mat.color.copy(lifted);
          }
          mat.metalness = Math.min(0.18, s?.metalness ?? 0.12);
          mat.roughness = Math.max(0.55, s?.roughness ?? 0.7);
          mat.emissive = new THREE.Color("#000000");
          mat.emissiveIntensity = 0;
        }
        mat.envMapIntensity = 0.25;
        mat.side = THREE.FrontSide;
        mat.transparent = false;
        mat.opacity = 1;
        mat.depthWrite = true;
        return mat;
      });
      // CRITICAL: array materials need geometry.groups — otherwise Three skips draw.
      mesh.material = built.length === 1 ? built[0]! : built;
    });

    // Normalize: soles at y=0, height ≈ TARGET_HEIGHT (adult standing read).
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = new THREE.Vector3();
    box.getSize(size);
    if (size.y > 0.01) {
      const s = TARGET_HEIGHT / size.y;
      root.scale.setScalar(s);
      root.updateMatrixWorld(true);
      const box2 = new THREE.Box3().setFromObject(root);
      root.position.y -= box2.min.y;
      root.position.x -= (box2.min.x + box2.max.x) / 2;
      root.position.z -= (box2.min.z + box2.max.z) / 2;
    }
    // Mesh faces +Z (sensor/LED). Camera sits in front on +Z — no yaw flip.
    root.rotation.y = 0;

    if (typeof window !== "undefined") {
      root.updateMatrixWorld(true);
      const after = new THREE.Box3().setFromObject(root);
      const afterSize = new THREE.Vector3();
      after.getSize(afterSize);
      (
        window as unknown as {
          __EPOCH_HERO_GEOM__?: Record<string, number | boolean | string>;
        }
      ).__EPOCH_HERO_GEOM__ = {
        standingPlaneY: HERO_STANDING_PLANE_Y,
        soleLocalY: after.min.y,
        figureHeight: afterSize.y,
        headsTallTarget: 7.5,
        idleTranslatesY: false,
        modelUrl: MODEL_URL,
        meshCount: root.children.length,
      };
    }

    return root;
  }, [scene, evening]);

  useLayoutEffect(() => {
    // Kick several frames so first paint shows the figure without a drag.
    invalidate();
    const t1 = requestAnimationFrame(() => invalidate());
    const t2 = window.setTimeout(() => invalidate(), 50);
    const t3 = window.setTimeout(() => invalidate(), 200);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      // Do NOT dispose model materials — useGLTF cache + Strict Mode remount.
    };
  }, [model, invalidate]);

  // Base yaw keeps chest/LED toward camera; sway only adds a small offset.
  const baseYaw = 0;

  useFrame(({ clock }) => {
    if (reducedMotion || !figure.current) return;
    const t = clock.elapsedTime;
    figure.current.rotation.y = baseYaw + Math.sin(t * 0.25) * 0.05;
  });

  return (
    <group ref={rootRef}>
      {/* Original museum pedestal */}
      <mesh position={[0, 0.06, 0]} receiveShadow>
        <cylinderGeometry args={[0.55, 0.62, 0.12, 64]} />
        <meshStandardMaterial color="#ddd2c0" metalness={0.05} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.44, 0.5, 0.08, 64]} />
        <meshStandardMaterial
          color="#b45309"
          metalness={0.55}
          roughness={0.35}
          emissive="#d97706"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0, 0.195, 0]}>
        <cylinderGeometry args={[0.4, 0.42, 0.035, 64]} />
        <meshStandardMaterial color="#f0e9dc" metalness={0.08} roughness={0.55} />
      </mesh>

      {/* Soft museum floor disc — replaces grey ContactShadows slab */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.002, 0]}
        receiveShadow
      >
        <circleGeometry args={[2.4, 64]} />
        <meshStandardMaterial
          color={evening ? "#2a2623" : "#cfc6b8"}
          metalness={0.02}
          roughness={0.92}
        />
      </mesh>

      <group ref={figure} position={[0, HERO_STANDING_PLANE_Y, 0]}>
        <primitive object={model} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_URL);
