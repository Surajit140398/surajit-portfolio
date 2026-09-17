import { useEffect } from "react";
import ProjectDevice from "../components/projects/ProjectDevice";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectNavigation from "../components/projects/ProjectNavigation";
import RevealText from "../components/RevealText";
import Contact from "../components/Contact";
import InteractiveFooter from "../components/InteractiveFooter";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { projectsData } from "../data/projects";

export default function AmbitionAqua() {
  const data = projectsData.ambitionAqua;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <SEO title="Ambition Aqua Biotech" description={data.description} />
      <main className="case-study">
        {/* 01 — INTRO */}
        <section className="cs-hero">
          <RevealText elementType="div">
            <p className="section-label reveal-target">01 — INTRO</p>
            <h1 className="reveal-target">{data.title}</h1>
            <p className="cs-subtitle reveal-target">{data.subtitle}</p>
          </RevealText>
        </section>

        {/* 02 — THE PRODUCT */}
        <section className="cs-section cs-product">
          <RevealText elementType="div">
            <p className="section-label reveal-target">02 — THE PRODUCT</p>
            <h2 className="reveal-target">Aquaculture<br/><span>Management.</span></h2>
            <p className="section-text reveal-target">
              {data.description}
            </p>
          </RevealText>
        </section>

        {/* 03 — PLATFORM EXPERIENCE */}
        <section className="cs-section cs-device-section">
          <RevealText elementType="div">
            <p className="section-label reveal-target">03 — PLATFORM EXPERIENCE</p>
            <h2 className="reveal-target">Admin<br/><span>Dashboard.</span></h2>
          </RevealText>
          <div className="cs-device-wrapper mt-20">
            <ProjectDevice type="desktop" src="/images/project/ambition-aqua-biotech/Admin dashboard/home.png" />
          </div>
        </section>

        {/* 04 — VISUAL SHOWCASE */}
        <section className="cs-section cs-gallery-section">
          <RevealText elementType="div">
            <p className="section-label reveal-target">04 — VISUAL SHOWCASE</p>
            <h2 className="reveal-target">Screenshot<br/><span>Gallery.</span></h2>
          </RevealText>
          
          <div className="mt-20">
            <h3 className="gallery-title">WEBSITE</h3>
            <ProjectGallery screens={data.gallery} type="desktop" />
          </div>

          <div className="mt-20">
            <h3 className="gallery-title">ADMIN DASHBOARD</h3>
            <ProjectGallery screens={data.adminGallery} type="desktop" />
          </div>
        </section>

        {/* 05 — TECHNOLOGY */}
        <section className="cs-section cs-tech">
          <RevealText elementType="div">
            <p className="section-label reveal-target">05 — TECHNOLOGY</p>
            <h2 className="reveal-target">Tech<br/><span>Stack.</span></h2>
            <ul className="tech-list reveal-target">
              {data.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </RevealText>
        </section>

        {/* 06 — NEXT PROJECT */}
        <ProjectNavigation 
          nextProjectLink="/projects/ostaagaar"
          nextProjectTitle="OSTAAGAAR ECOSYSTEM"
        />

        <Contact />

        <InteractiveFooter />
      </main>
    </PageTransition>
  );
}
