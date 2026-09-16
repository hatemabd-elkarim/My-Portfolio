import { useState, useEffect, useRef } from "react";

// ─── Typing Badge ─────────────────────────────────────────────────────────────

export function TypingBadge() {
  const phrases = ["السلام عليكم", "Al-Salam 3alikum"];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <div
      className="inline-flex items-center gap-3 glow-pulse"
      style={{
        background: "#1B2230",
        border: "2px solid #34D399",
        boxShadow: "4px 4px 0px #000000",
        padding: "10px 16px",
        position: "relative",
      }}
    >
      {/* Speech bubble tail */}
      <div
        style={{
          position: "absolute",
          bottom: "-12px",
          left: "20px",
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "10px solid #34D399",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-9px",
          left: "22px",
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "8px solid #1B2230",
        }}
      />
      <span
        className="font-pixel text-glow-green"
        style={{ color: "#34D399", fontSize: "10px", letterSpacing: "0.05em" }}
      >
        {displayed}
        <span className="blink">▋</span>
      </span>
    </div>
  );
}
