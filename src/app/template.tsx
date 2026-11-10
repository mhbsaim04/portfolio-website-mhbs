/**
 * Re-mounts on every navigation and initial load, so the
 * staggered panel veil replays on refresh + page transitions.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="page-veil" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="page-veil-strip"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>
      {children}
    </>
  );
}
