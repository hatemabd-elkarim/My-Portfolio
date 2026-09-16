import { useState, useEffect, useRef } from "react";

// ─── Hero Terminal Panel ──────────────────────────────────────────────────────

const TERMINAL_LINES = [
  { text: "$ cargo build --release", color: "#34D399", delay: 0 },
  { text: "   Compiling raft_core v2.3.1", color: "#94A3B8", delay: 300 },
  { text: "   Compiling distrosys v0.1.0", color: "#94A3B8", delay: 600 },
  { text: "   ████████████░░░ 78%", color: "#FBBF24", delay: 900 },
  { text: "   Finished release in 4.2s", color: "#34D399", delay: 1200 },
  { text: "$ ./distrosys --nodes 3", color: "#34D399", delay: 1500 },
  { text: "   [INFO]  Node A elected leader", color: "#818CF8", delay: 1800 },
  {
    text: "   [INFO]  Replicating log entries...",
    color: "#94A3B8",
    delay: 2100,
  },
  { text: "   [OK]    All nodes in sync ✓", color: "#34D399", delay: 2400 },
];

export function HeroTerminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const t = setTimeout(
      () => setVisible((v) => v + 1),
      visible === 0
        ? 400
        : TERMINAL_LINES[visible].delay - TERMINAL_LINES[visible - 1]?.delay,
    );
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div
      style={{
        background: "#080d13",
        border: "2px solid #475569",
        boxShadow: "4px 4px 0px #000000",
      }}
    >
      {/* Label bar */}
      <div
        style={{
          background: "#1B2230",
          borderBottom: "2px solid #475569",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            background: "#34D399",
            boxShadow: "0 0 6px #34D399",
          }}
        />
        <span
          className="font-pixel"
          style={{ fontSize: "7px", color: "#475569", letterSpacing: "0.05em" }}
        >
          BUILD_LOG.SH
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: "16px 18px", minHeight: "200px" }}>
        {TERMINAL_LINES.slice(0, visible).map((line, i) => (
          <div
            key={i}
            className="font-mono"
            style={{
              fontSize: "12px",
              color: line.color,
              lineHeight: "1.9",
              whiteSpace: "pre",
            }}
          >
            {line.text}
          </div>
        ))}
        {visible < TERMINAL_LINES.length && (
          <span
            className="font-mono blink"
            style={{ fontSize: "12px", color: "#34D399" }}
          >
            ▋
          </span>
        )}
      </div>
    </div>
  );
}
