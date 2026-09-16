// ─── Section Header ────────────────────────────────────────────────────────────

export function SectionHeader({
  label,
  subtitle,
}: {
  label: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <div
          style={{
            width: "14px",
            height: "14px",
            background: "#34D399",
            boxShadow: "0 0 8px #34D39960",
          }}
        />
        <h2
          className="font-pixel"
          style={{
            fontSize: "clamp(10px, 1.2vw, 13px)",
            color: "#34D399",
            letterSpacing: "0.1em",
            textShadow: "0 0 8px #34D39950",
          }}
        >
          {label}
        </h2>
        <div
          style={{
            flex: 1,
            height: "2px",
            background: "#1B2230",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "2px",
              width: "60px",
              background: "#34D399",
              boxShadow: "0 0 6px #34D399",
            }}
          />
        </div>
      </div>
      <p
        className="font-mono"
        style={{ color: "#475569", fontSize: "12px", marginLeft: "30px" }}
      >
        // {subtitle}
      </p>
    </div>
  );
}
