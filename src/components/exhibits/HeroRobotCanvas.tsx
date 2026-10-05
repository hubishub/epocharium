"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { HumanoidRobot } from "./models/HumanoidRobot";

function detectWebGL(): boolean {
  if (typeof document === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function WebGLRequiredFallback() {
  return (
    <div
      role="status"
      className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-[#ece6dc] p-6 text-center dark:bg-[#1c1917]"
    >
      <p className="wayfinding-chip">Interactive 3D required</p>
      <p className="max-w-sm text-sm text-museum-mist">
        This entrance sculpture is a live React Three Fiber scene (drag to orbit).
        WebGL is unavailable in this browser or session, so the viewer cannot start.
      </p>
    </div>
  );
}

/**
 * Keep clear color + scene.background in sync when Day/Evening toggles.
 * Never null scene.background — that wiped the museum clear and stuck the scene.
 */
function ClearColor({ color }: { color: string }) {
  const { gl, scene } = useThree();
  useEffect(() => {
    const c = new THREE.Color(color);
    gl.setClearColor(c);
    scene.background = c;
  }, [color, gl, scene]);
  return null;
}

function ReadyPing({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

/** Day/Evening gallery lights — prop form so R3F updates on theme flip (args=mount-only). */
function GalleryLighting({ evening }: { evening: boolean }) {
  if (evening) {
    // Evening gallery: cooler/dimmer fill, cooler key, stronger brass rim — figure reads dusk.
    return (
      <>
        <ambientLight intensity={0.72} color="#9a8f82" />
        <directionalLight
          position={[4, 8, 5]}
          intensity={1.15}
          color="#c4b49a"
        />
        {/* Soft front fill — grey panels catch light */}
        <directionalLight
          position={[0, 2.5, 4]}
          intensity={0.35}
          color="#d4c4b0"
        />
        {/* Brass rim — stronger at evening */}
        <directionalLight
          position={[-4, 3, -2]}
          intensity={1.35}
          color="#f59e0b"
        />
        <directionalLight
          position={[0, 2.8, -4.5]}
          intensity={0.55}
          color="#78716c"
        />
        <hemisphereLight
          color="#44403c"
          groundColor="#1c1917"
          intensity={0.45}
        />
      </>
    );
  }
  // Day: warmer + brighter so panels read sunlit museum grey.
  return (
    <>
      <ambientLight intensity={1.05} color="#fffaf5" />
      <directionalLight
        position={[4, 8, 5]}
        intensity={2.05}
        color="#fff6e8"
      />
      {/* Soft front fill — grey panels catch light */}
      <directionalLight
        position={[0, 2.5, 4]}
        intensity={0.55}
        color="#ffffff"
      />
      {/* Brass rim accent — don't overpower */}
      <directionalLight
        position={[-4, 3, -2]}
        intensity={0.45}
        color="#b45309"
      />
      <directionalLight
        position={[0, 2.8, -4.5]}
        intensity={0.5}
        color="#f5f5f4"
      />
      <hemisphereLight
        color="#f5f0e6"
        groundColor="#d6d3d1"
        intensity={0.6}
      />
    </>
  );
}

// Solid cream placards — ≥4.5:1 Day and Evening (CC0 credit must stay readable).
// min-h-11 / py-2: EPO-016 touch targets; max-sm compact for EPO-021 overlay clearance.
const chipClass =
  "inline-flex min-h-11 items-center rounded-full border border-[#1c1917]/35 bg-[#f7f3eb] px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-[#1c1917] shadow-sm max-sm:min-h-9 max-sm:px-2 max-sm:py-1 max-sm:text-[9px]";
const pauseClass =
  "pointer-events-auto focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border-2 border-[#78350f] bg-[#92400e] px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#faf8f4] shadow-sm hover:bg-[#78350f] disabled:opacity-60 max-sm:min-h-9 max-sm:px-2 max-sm:py-1 max-sm:text-[9px]";
/** Inline locks AA if Tailwind purge/HMR lags (Tess Day fail was rgba brass/15 wash). */
const pauseStyle = { backgroundColor: "#92400e", color: "#faf8f4", borderColor: "#78350f" } as const;
const creditClass =
  "max-w-xl rounded-sm border border-[#1c1917]/30 bg-[#f7f3eb] px-2.5 py-1.5 text-[10px] leading-snug text-[#1c1917] shadow-sm max-sm:max-w-[11rem] max-sm:text-[9px] max-sm:leading-tight max-sm:px-2 max-sm:py-1";

export function HeroRobotCanvas() {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [webgl] = useState<boolean>(detectWebGL);
  const [autoRotate, setAutoRotate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Align with ThemeToggle: treat dark after mount. Prefer resolvedTheme; also theme==="dark".
  const isDark = mounted
    ? resolvedTheme === "dark" || theme === "dark"
    : false;
  const clear = isDark ? "#1c1917" : "#ece6dc";

  const markReady = useCallback(() => setModelReady(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const reduce = mq.matches;
      setReducedMotion(reduce);
      if (reduce) setAutoRotate(false);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!webgl) {
    return (
      <div className="exhibit-frame relative h-[360px] w-full overflow-hidden rounded-sm md:h-[440px]">
        <WebGLRequiredFallback />
      </div>
    );
  }

  return (
    <div className="exhibit-frame relative h-[360px] w-full overflow-hidden rounded-sm md:h-[440px]">
      {!modelReady ? (
        <div
          role="status"
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#ece6dc]/60 text-sm text-[#1c1917] dark:bg-[#1c1917]/60 dark:text-[#faf8f4]"
        >
          Loading humanoid sculpture…
        </div>
      ) : null}
      <Canvas
        className="cursor-grab active:cursor-grabbing touch-none"
        style={{ touchAction: "none" }}
        camera={{ position: [0.35, 1.35, 3.55], fov: 38 }}
        dpr={[1, 1.75]}
        frameloop="always"
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <ClearColor color={clear} />
        <GalleryLighting evening={isDark} />
        <Suspense fallback={null}>
          <HumanoidRobot reducedMotion={reducedMotion} evening={isDark} />
          <ReadyPing onReady={markReady} />
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableRotate
          enableZoom
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.85}
          zoomSpeed={0.9}
          autoRotate={autoRotate && !reducedMotion}
          autoRotateSpeed={0.55}
          target={[0, 1.0, 0]}
          minDistance={2.4}
          maxDistance={7}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.48}
        />
      </Canvas>
      {/* EPO-021: on narrow viewports park chips at top so legs/pedestal stay visible */}
      <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-2 max-sm:bottom-auto max-sm:top-2 max-sm:gap-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2 max-sm:gap-1.5">
          <p className={chipClass}>
            <span className="max-sm:hidden">Interactive 3D · drag to orbit · scroll to zoom</span>
            <span className="sm:hidden">Drag · zoom</span>
          </p>
          <button
            type="button"
            className={pauseClass}
            style={pauseStyle}
            onClick={() => setAutoRotate((v) => !v)}
            aria-pressed={autoRotate && !reducedMotion}
            disabled={reducedMotion}
            title={
              reducedMotion
                ? "Auto-rotate disabled while reduced motion is on; drag still works"
                : undefined
            }
          >
            {reducedMotion
              ? "Reduced motion · drag OK"
              : autoRotate
                ? "Pause auto-rotate"
                : "Auto-rotate"}
          </button>
        </div>
        <p className={creditClass}>
          <span className="max-sm:hidden">
            Figure: Industrial Humanoid (Epocharium original) ·{" "}
            <span className="font-semibold">CC0 1.0</span>
            {" "}· matte industrial aesthetic · no brand IP · pedestal original
          </span>
          <span className="sm:hidden">
            Industrial Humanoid · <span className="font-semibold">CC0</span>
          </span>
        </p>
      </div>
    </div>
  );
}
