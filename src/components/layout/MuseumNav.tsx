"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { museumNav } from "@/lib/nav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function MuseumNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mapButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        mapButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="focus-ring group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-wide text-museum-brass group-hover:text-museum-marble">
            Epocharium
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-museum-mist sm:inline">
            Tech Civilization Museum
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            ref={mapButtonRef}
            type="button"
            className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-museum-brass/40 bg-museum-brass/10 px-3 text-xs uppercase tracking-widest text-museum-brass md:hidden"
            aria-expanded={open}
            aria-controls="museum-map"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close map" : "Museum map"}
          </button>
        </div>
      </div>

      <nav
        id="museum-map"
        aria-label="Museum wings and galleries"
        className={cn(
          "border-t border-museum-mist/20 bg-museum-hall/40 backdrop-blur-md",
          open ? "block" : "hidden md:block"
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-1 px-2 py-2 md:px-4">
          {museumNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring block rounded-xl px-3 py-2.5 text-xs md:text-[13px] min-h-11",
                    active
                      ? "bg-museum-brass/15 text-museum-brass shadow-glow"
                      : "text-museum-mist hover:bg-white/5 hover:text-museum-marble"
                  )}
                >
                  <span className="block font-medium">{item.label}</span>
                  <span className="wayfinding-chip opacity-80">{item.wing}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
