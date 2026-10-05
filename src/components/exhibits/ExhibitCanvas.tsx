"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

/**
 * EPO-013: Keep clear color + scene.background in sync with Day/Evening.
 * Never null scene.background — that wiped the museum clear (same as Hero ClearColor).
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

/** Day/Evening exhibit hall lights — prop form so R3F updates on theme flip. */
function ExhibitLighting({ evening }: { evening: boolean }) {
  if (evening) {
    return (
      <>
        <ambientLight intensity={0.35} color="#9a8f82" />
        <spotLight
          position={[6, 8, 4]}
          angle={0.4}
          penumbra={0.6}
          intensity={1.05}
          color="#c4b49a"
          castShadow={false}
        />
        <pointLight position={[-4, 2, -2]} intensity={0.4} color="#94a3b8" />
        <pointLight position={[2, 3, -3]} intensity={0.55} color="#f59e0b" />
      </>
    );
  }
  return (
    <>
      <ambientLight intensity={0.85} color="#fffaf5" />
      <spotLight
        position={[6, 8, 4]}
        angle={0.45}
        penumbra={0.55}
        intensity={1.55}
        color="#fff6e8"
        castShadow={false}
      />
      <pointLight position={[-4, 2, -2]} intensity={0.55} color="#f5f0e6" />
      <pointLight position={[2, 3, -3]} intensity={0.35} color="#b45309" />
    </>
  );
}

function WebGLFallback({
  message,
  evening,
}: {
  message: string;
  evening: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={message}
      className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 p-6 text-center"
      style={{ backgroundColor: evening ? "#1c1917" : "#e5dfd4" }}
    >
      <p className="wayfinding-chip">Exhibit temporarily static</p>
      <p className="max-w-sm text-sm text-museum-mist">{message}</p>
      <p className="text-xs text-museum-mist/70">
        WebGL is unavailable in this browser or session. The placard text still describes the piece.
      </p>
    </div>
  );
}

export type ExhibitCameraProps = {
  /** Optional per-exhibit camera position (EPO-019 ai-server-rack framing). */
  cameraPosition?: [number, number, number];
  /** OrbitControls look-at target. */
  cameraTarget?: [number, number, number];
  cameraFov?: number;
};

export function ExhibitCanvas({
  children,
  className,
  cameraPosition = [3.2, 2.2, 4.2],
  cameraTarget = [0, 0.35, 0],
  cameraFov = 42,
}: {
  children: ReactNode;
  className?: string;
} & ExhibitCameraProps) {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  // Dex EPO-014 reduced-motion on wing canvas.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted
    ? resolvedTheme === "dark" || theme === "dark"
    : false;
  const clear = isDark ? "#05060a" : "#e5dfd4";

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok = !!(
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")
      );
      setWebgl(ok);
    } catch {
      setWebgl(false);
    }
  }, []);

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

  if (webgl === false) {
    return (
      <div className={className}>
        <WebGLFallback
          message="Interactive 3D viewer could not start."
          evening={isDark}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="exhibit-frame relative h-[380px] w-full overflow-hidden rounded-sm md:h-[460px]">
        {webgl === null ? (
          <div
            className="flex h-full items-center justify-center text-sm text-museum-mist"
            style={{ backgroundColor: clear }}
          >
            Preparing exhibit lighting…
          </div>
        ) : (
          <Canvas
            camera={{ position: cameraPosition, fov: cameraFov }}
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: false }}
          >
            {/* EPO-013: no Environment — CDN 403 washed Day; lights only. */}
            <ClearColor color={clear} />
            <ExhibitLighting evening={isDark} />
            <Suspense fallback={null}>
              {children}
              <ContactShadows
                position={[0, -1.15, 0]}
                opacity={isDark ? 0.45 : 0.28}
                scale={12}
                blur={2.5}
                far={4}
              />
            </Suspense>
            <OrbitControls
              makeDefault
              enablePan={false}
              autoRotate={autoRotate && !reducedMotion}
              autoRotateSpeed={0.7}
              target={cameraTarget}
              minDistance={2}
              maxDistance={9}
              maxPolarAngle={Math.PI * 0.49}
            />
          </Canvas>
        )}
        {/* EPO-015: solid cream/brass chips — translucent brass/mist fails Day contrast */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2">
          <p className="inline-flex min-h-11 items-center rounded-full border border-[#1c1917]/35 bg-[#f7f3eb] px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-[#1c1917] shadow-sm">
            Drag to orbit · Scroll to zoom
          </p>
          <button
            type="button"
            className="focus-ring pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border-2 border-[#78350f] bg-[#92400e] px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#faf8f4] shadow-sm hover:bg-[#78350f] disabled:opacity-60"
            style={{ backgroundColor: "#92400e", color: "#faf8f4", borderColor: "#78350f" }}
            onClick={() => {
              if (reducedMotion) return;
              setAutoRotate((v) => !v);
            }}
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
                ? "Pause rotate"
                : "Auto-rotate"}
          </button>
        </div>
      </div>
    </div>
  );
}
