import { ReactNode } from "react";
import { MuseumNav } from "./MuseumNav";
import { MuseumFooter } from "./MuseumFooter";
import { LiquidBackdrop } from "@/components/museum/LiquidBackdrop";

export function MuseumShell({ children }: { children: ReactNode }) {
  return (
    <div className="museum-hall flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <LiquidBackdrop dense />
      <div className="relative z-10 flex min-h-screen flex-col">
        <MuseumNav />
        <main id="main" tabIndex={-1} className="relative flex-1">
          {children}
        </main>
        <MuseumFooter />
      </div>
    </div>
  );
}
