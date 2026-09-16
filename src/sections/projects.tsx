import { ImageCarousel } from "@/components/imageCarousel.tsx";
import { SectionHeader } from "../components/sectionHeader.tsx";
import { GithubIcon, ExternalLinkIcon} from "../components/pixelArt.tsx";
import { PROJECTS } from "../data/projects.tsx";

// ─── Projects Section ─────────────────────────────────────────────────────────

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#0F141C",
        borderTop: "2px solid #475569",
        padding: "80px 0",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 48px" }}>
        <SectionHeader
          label="PROJECTS.EXE"
          subtitle="Selected works — hover to inspect"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            marginTop: "48px",
          }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="proj-card proj-card-row"
              style={{
                background: "#1B2230",
                border: "2px solid #475569",
                boxShadow: "4px 4px 0px #000000",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div className="proj-card-media">
                <ImageCarousel
                  images={p.images}
                  accent={p.accent}
                  height="100%"
                />
              </div>

              <div className="proj-card-body" style={{ padding: "24px 28px" }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-pixel"
                    style={{
                      fontSize: "12px",
                      color: "#F3F4F6",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <div className="flex gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        className="btn-retro"
                        style={{
                          color: "#94A3B8",
                          border: "1px solid #475569",
                          padding: "4px 6px",
                          background: "#242F42",
                          boxShadow: "2px 2px 0px #000000",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#34D399")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#94A3B8")
                        }
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        className="btn-retro"
                        style={{
                          color: "#94A3B8",
                          border: "1px solid #475569",
                          padding: "4px 6px",
                          background: "#242F42",
                          boxShadow: "2px 2px 0px #000000",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#FBBF24")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#94A3B8")
                        }
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className="font-mono"
                  style={{
                    color: "#94A3B8",
                    fontSize: "13px",
                    lineHeight: "1.8",
                    marginBottom: "18px",
                  }}
                >
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-pixel"
                      style={{
                        fontSize: "7px",
                        color: p.accent,
                        background: `${p.accent}18`,
                        border: `1px solid ${p.accent}50`,
                        padding: "4px 8px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
