import { useState, useEffect } from "react";
import { PixelMonogram } from "./pixelArt";

const NAV_LINKS = ["Work", "Projects", "Skills", "Activities"];

// ─── Navigation ───────────────────────────────────────────────────────────────

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(15,20,28,0.97)" : "#0F141C",
        borderBottom: "2px solid #475569",
        boxShadow: scrolled ? "0 4px 0px #000000" : "none",
        transition: "background 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        <PixelMonogram />

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-pixel btn-retro"
              style={{
                fontSize: "9px",
                color: active === link ? "#34D399" : "#94A3B8",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.05em",
                textShadow: active === link ? "0 0 6px #34D39970" : "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (active !== link) e.currentTarget.style.color = "#F3F4F6";
              }}
              onMouseLeave={(e) => {
                if (active !== link) e.currentTarget.style.color = "#94A3B8";
              }}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => scrollTo("footer")}
            className="btn-retro font-pixel"
            style={{
              fontSize: "9px",
              background: "#34D399",
              color: "#0F141C",
              border: "2px solid #000000",
              padding: "8px 14px",
              boxShadow: "3px 3px 0px #000000",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
