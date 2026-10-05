"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wing/track accent color that stays readable in Day and Evening.
 * Day accents can be darker greys; Evening uses accentEvening on dark placards.
 */
export function AccentText({
  accent,
  accentEvening,
  as: Comp = "span",
  className,
  children,
}: {
  accent: string;
  accentEvening?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
  const color = isDark && accentEvening ? accentEvening : accent;
  return (
    <Comp className={cn(className)} style={{ color }}>
      {children}
    </Comp>
  );
}
