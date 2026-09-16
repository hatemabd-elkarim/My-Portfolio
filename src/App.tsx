import { Navbar } from "./components/navbar.tsx";
import { Hero } from "./sections/work.tsx";
import { Projects } from "./sections/projects.tsx";
import { Skills } from "./sections/skills.tsx";
import { Timeline } from "./sections/activities.tsx";
import { Footer } from "./components/footer.tsx";

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: "#0F141C", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Footer />
    </div>
  );
}
