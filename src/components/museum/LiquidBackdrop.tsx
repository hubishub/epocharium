/** Decorative morphing liquid blobs — respects prefers-reduced-motion via CSS. */
export function LiquidBackdrop({ dense = false }: { dense?: boolean }) {
  return (
    <div className="liquid-blobs" aria-hidden>
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
      {dense && <span className="blob blob-d" />}
    </div>
  );
}
