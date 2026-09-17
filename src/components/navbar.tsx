import { useState, useEffect } from "react";
import { PixelMonogram } from "./pixelArt";

const NAV_LINKS = ["Work", "Projects", "Skills", "Activities"];

// ─── Navigation ───────────────────────────────────────────────────────────────

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled || menuOpen ? "rgba(15,20,28,0.97)" : "#0F141C",
        borderBottom: "2px solid #475569",
        boxShadow: scrolled ? "0 4px 0px #000000" : "none",
        transition: "background 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        className="section-container"
        style={{
          maxWidth: "1440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
          position: "relative",
        }}
      >
        <PixelMonogram />

        {/* Mobile hamburger toggle */}
        <button
          className="nav-toggle btn-retro"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "#1B2230",
            border: "2px solid #475569",
            color: "#F3F4F6",
            width: "36px",
            height: "36px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "2px 2px 0px #000000",
          }}
        >
          {menuOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div className={`nav-links${menuOpen ? " open" : ""}`}>
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
