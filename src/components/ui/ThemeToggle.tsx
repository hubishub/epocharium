"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <span className="wayfinding-chip inline-flex min-h-11 min-w-11 items-center justify-center px-3 opacity-50" aria-hidden>
        Lighting
      </span>
    );
  }
  const isDark = theme !== "light";
  return (
    <button
      type="button"
      className="focus-ring wayfinding-chip inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-museum-brass/40 bg-museum-brass/10 px-3 hover:bg-museum-brass/20 backdrop-blur-sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to daylight gallery lighting" : "Switch to evening hall lighting"}
    >
      {isDark ? "Daylight" : "Evening"}
    </button>
  );
}
