import { HeroTerminal } from "../components/heroTerminal";
import { TypingBadge } from "../components/typingBadge";
import { DownloadIcon } from "../components/downloadIcon";

const PROFILE_IMAGE_URL = "/hatem.jpeg";
const DOWNLOAD_RESUME = "/Hatem_Ayman_Resume.pdf";

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section
      id="work"
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "80px 48px 100px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        minHeight: "88vh",
      }}
    >
      {/* Left: text */}
      <div>
        <div style={{ marginBottom: "40px" }}>
          <TypingBadge />
        </div>

        <h1
          className="font-pixel"
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "#F3F4F6",
            lineHeight: "2",
            letterSpacing: "0.02em",
            marginBottom: "24px",
          }}
        >
          Software Engineer
          <br />
          <span style={{ color: "#34D399", textShadow: "0 0 10px #34D39950" }}>
            & Web developer
          </span>
        </h1>

        <p
          className="font-mono"
          style={{
            color: "#94A3B8",
            fontSize: "14px",
            lineHeight: "1.9",
            maxWidth: "480px",
            marginBottom: "40px",
          }}
        >
          I have a broad interest in building web applications and a strong
          focus on backend development. Enjoys working across the stack and
          picks up new tools quickly. Builds reliable, performant backend
          systems — from distributed services to high-throughput APIs.
        </p>

        {/* Status bar */}
        <div
          className="font-mono"
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "40px",
            fontSize: "11px",
          }}
        >
          {[
            { label: "CF Rating", val: "984", color: "#FBBF24" },
            { label: "Problems", val: "300+", color: "#34D399" },
            { label: "Projects", val: "12+", color: "#818CF8" },
          ].map(({ label, val, color }) => (
            <div key={label}>
              <div style={{ color: "#475569", marginBottom: "2px" }}>
                {label}
              </div>
              <div
                className="font-pixel"
                style={{
                  color,
                  fontSize: "13px",
                  textShadow: `0 0 6px ${color}60`,
                }}
              >
                {val}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            className="btn-retro font-pixel"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontSize: "9px",
              background: "#34D399",
              color: "#0F141C",
              border: "2px solid #000000",
              padding: "12px 20px",
              boxShadow: "4px 4px 0px #000000",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            View Projects
          </button>
          <a
            href={`/${DOWNLOAD_RESUME}`}
            download="Hatem_Ayman_Resume.pdf"
            className="btn-retro font-pixel flex items-center gap-2"
            style={{
              fontSize: "9px",
              background: "transparent",
              color: "#F3F4F6",
              border: "2px solid #475569",
              padding: "12px 20px",
              boxShadow: "4px 4px 0px #000000",
              cursor: "pointer",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>

      {/* Right: code panel + stats */}
      <div className="flex flex-col gap-5">
        {/* Player stats card */}
        <div
          className="font-mono"
          style={{
            background: "#1B2230",
            border: "2px solid #475569",
            boxShadow: "4px 4px 0px #000000",
            padding: "16px 20px",
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            {/* Profile portrait */}
            <div
              style={{
                width: "140px",
                height: "144px",
                flexShrink: 0,
                border: "2px solid #475569",
                boxShadow: "3px 3px 0px #000000",
                background: "#0a0f16",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {PROFILE_IMAGE_URL ? (
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Hatem Ayman"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                className="font-pixel"
                style={{
                  fontSize: "8px",
                  color: "#34D399",
                  marginBottom: "10px",
                }}
              >
                PLAYER_STATS.JSON
              </div>
              {[
                { key: "name", val: '"Hatem Ayman Abd-Elkarim"' },
                { key: "class", val: '"Software Engineer"' },
                {
                  key: "tech",
                  val: '["php", "laravel", "node.js", "java", "python", "cpp"]',
                },
                { key: "lang", val: '["Arabic", "English"]' },
                { key: "status", val: '"Open to work"' },
              ].map(({ key, val }) => (
                <div key={key} style={{ fontSize: "11px", lineHeight: "1.8" }}>
                  <span style={{ color: "#818CF8" }}>{`"${key}"`}</span>
                  <span style={{ color: "#475569" }}>: </span>
                  <span style={{ color: "#FBBF24" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Animated terminal panel */}
        <HeroTerminal />
      </div>
    </section>
  );
}
