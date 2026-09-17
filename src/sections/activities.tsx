import { SectionHeader } from "../components/sectionHeader.tsx";
import { TIMELINE } from "../data/timeline.tsx";

// ─── Timeline / Activities ─────────────────────────────────────────────────────

export function Timeline() {
  const typeColors: Record<string, string> = {
    work: "#34D399",
    training: "#FBBF24",
    "extracurricular activity": "#818CF8",
  };
  const typeLabels: Record<string, string> = {
    work: "WORK",
    training: "TRAINING",
    "extracurricular activity": "IEEE",
  };

  return (
    <section
      id="activities"
      className="section-pad"
      style={{
        borderTop: "2px solid #475569",
        background: "#0F141C",
      }}
    >
      <div className="section-container" style={{ maxWidth: "900px" }}>
        <SectionHeader
          label="QUEST_LOG.TXT"
          subtitle="Work, achievements & community"
        />

        <div style={{ marginTop: "56px", position: "relative" }}>
          {/* Vertical line */}
          <div
            className="quest-line tl-line"
            style={{
              position: "absolute",
              top: "8px",
              bottom: "8px",
              width: "2px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {TIMELINE.map((item, i) => {
              const color = typeColors[item.type];
              return (
                <div
                  key={i}
                  className="tl-row"
                  style={{
                    paddingBottom: i < TIMELINE.length - 1 ? "32px" : "0",
                  }}
                >
                  {/* Date */}
                  <div
                    className="font-pixel tl-date"
                    style={{
                      fontSize: "9px",
                      color: "#475569",
                      textAlign: "right",
                      paddingTop: "4px",
                    }}
                  >
                    {item.year}
                  </div>

                  {/* Diamond node */}
                  <div
                    className="tl-node"
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        background: color,
                        transform: "rotate(45deg)",
                        border: "2px solid #000000",
                        boxShadow: `0 0 8px ${color}80`,
                        position: "absolute",
                        top: "2px",
                        left: "50%",
                        marginLeft: "-6px",
                        zIndex: 1,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="tl-content"
                    data-year={item.year}
                    style={{
                      background: "#1B2230",
                      border: "2px solid #475569",
                      boxShadow: "3px 3px 0px #000000",
                      padding: "14px 18px",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="font-pixel"
                        style={{ fontSize: "9px", color: "#F3F4F6" }}
                      >
                        {item.title}
                      </span>
                      <span
                        className="font-pixel"
                        style={{
                          fontSize: "7px",
                          color,
                          background: `${color}20`,
                          border: `1px solid ${color}50`,
                          padding: "2px 6px",
                        }}
                      >
                        {typeLabels[item.type]}
                      </span>
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: "11px",
                        color: "#FBBF24",
                        marginBottom: "6px",
                      }}
                    >
                      {item.org}
                    </div>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: "12px",
                        color: "#94A3B8",
                        lineHeight: "1.7",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
