import { SectionHeader } from "../components/sectionHeader";
import { SKILLS } from "../data/skills";

// ─── Skills Section ────────────────────────────────────────────────────────────

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        borderTop: "2px solid #475569",
        padding: "80px 0",
        background: "#0a0f16",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 48px" }}>
        <SectionHeader
          label="INVENTORY.DAT"
          subtitle="Equipped skills and tools"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {Object.entries(SKILLS).map(([category, items], catIdx) => {
            const catColors = ["#34D399", "#FBBF24", "#818CF8"];
            const color = catColors[catIdx % catColors.length];
            return (
              <div
                key={category}
                style={{
                  background: "#1B2230",
                  border: "2px solid #475569",
                  boxShadow: "4px 4px 0px #000000",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: "#242F42",
                    borderBottom: `2px solid ${color}`,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: color,
                      boxShadow: `0 0 6px ${color}`,
                    }}
                  />
                  <span
                    className="font-pixel"
                    style={{ fontSize: "8px", color, letterSpacing: "0.05em" }}
                  >
                    {category}
                  </span>
                </div>

                {/* Inventory slots */}
                <div style={{ padding: "12px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "6px",
                    }}
                  >
                    {items.map((item) => (
                      <div
                        key={item.label}
                        className="inv-slot"
                        style={{
                          background: "#242F42",
                          border: "1px solid #475569",
                          padding: "8px 6px",
                          cursor: "default",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "16px",
                            marginBottom: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </div>
                        <div
                          className="font-mono"
                          style={{
                            fontSize: "9px",
                            color: "#94A3B8",
                            lineHeight: "1.3",
                            wordBreak: "break-word",
                          }}
                        >
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
