import { useState, useEffect, useRef } from "react";
import { PixelMonogram } from "./pixelArt";

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-GB", { hour12: false }),
  );

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const socials = [
    {
      label: "GH",
      href: "https://github.com/hatemabd-elkarim",
      title: "GitHub",
    },
    {
      label: "LI",
      href: "https://www.linkedin.com/in/hatemabd-elkarim/",
      title: "LinkedIn",
    },
    {
      label: "CF",
      href: "https://codeforces.com/profile/hatemabdel-karim",
      title: "Codeforces",
    },
    { label: "X", href: "https://x.com/Hatemabdelkarim", title: "X" },
    { label: "G", href: "mailto:hatem.ayman.508@gmail.com", title: "Gmail" },
  ];

  return (
    <footer
      id="footer"
      style={{
        borderTop: "2px solid #475569",
        background: "#0a0f16",
      }}
    >
      {/* Status bar */}
      <div
        className="footer-status-bar"
        style={{
          borderBottom: "1px solid #1B2230",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "12px 24px",
        }}
      >
        <div
          className="font-mono"
          style={{
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#34D399",
              animation: "blink 2s step-end infinite",
              boxShadow: "0 0 4px #34D399",
            }}
          />
          <span style={{ color: "#34D399" }}>
            SYSTEM: ALL SERVICES OPERATIONAL
          </span>
        </div>
        <div
          className="font-mono"
          style={{ fontSize: "10px", color: "#475569" }}
        >
          │
        </div>
        <div
          className="font-mono"
          style={{ fontSize: "10px", color: "#475569" }}
        >
          {time} UTC+3
        </div>
      </div>

      {/* Main footer row */}
      <div className="footer-row">
        <div>
          <PixelMonogram />
          <div
            className="font-mono"
            style={{ fontSize: "11px", color: "#475569", marginTop: "6px" }}
          >
            © {new Date().getFullYear()} Hatem Ayman. All rights reserved.
          </div>
        </div>

        {/* Social glyphs */}
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.title}
              className="btn-retro font-pixel"
              style={{
                fontSize: "8px",
                color: "#94A3B8",
                border: "1px solid #475569",
                padding: "6px 10px",
                background: "#1B2230",
                boxShadow: "2px 2px 0px #000000",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#34D399";
                e.currentTarget.style.borderColor = "#34D399";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94A3B8";
                e.currentTarget.style.borderColor = "#475569";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div
          className="font-mono footer-note"
          style={{
            fontSize: "10px",
            color: "#475569",
          }}
        >
          <span style={{ color: "#34D399" }}>{">"}</span> Deployed on the edge
        </div>
      </div>
    </footer>
  );
}
