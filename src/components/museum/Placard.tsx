import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Placard({
  code,
  title,
  children,
  className,
}: {
  code?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn("placard relative z-[1] p-5 md:p-6", className)}>
      {code && <p className="wayfinding-chip mb-2">{code}</p>}
      {title && (
        <h2 className="font-display text-xl text-museum-marble mb-3">{title}</h2>
      )}
      <div className="relative z-[1] text-sm leading-relaxed text-museum-mist space-y-3">
        {children}
      </div>
    </aside>
  );
}
