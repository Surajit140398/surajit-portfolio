import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectDevice from "../components/projects/ProjectDevice";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectNavigation from "../components/projects/ProjectNavigation";
import RevealText from "../components/RevealText";
import Contact from "../components/Contact";
import InteractiveFooter from "../components/InteractiveFooter";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { projectsData } from "../data/projects";

export default function Ostaagaar() {
  const data = projectsData.ostaagaar;
  const ecosystem = data.ecosystem;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <SEO title="Ostaagaar Ecosystem" description={data.description} />
      <main className="case-study">
        {/* 01 — INTRO */}
        <section className="cs-hero">
          <RevealText elementType="div">
            <p className="section-label reveal-target">01 — INTRO</p>
            <h1 className="reveal-target">{data.title}</h1>
            <p className="cs-subtitle reveal-target">{data.subtitle}</p>
            
            <div className="cs-hero-apps reveal-target">
              <span>CUSTOMER APP</span>
              <span className="plus">+</span>
              <span>B2B PLATFORM</span>
              <span className="plus">+</span>
              <span>MANUFACTURER APP</span>
            </div>
          </RevealText>
        </section>

        {/* 02 — THE PRODUCT */}
        <section className="cs-section cs-product">
          <RevealText elementType="div">
            <p className="section-label reveal-target">02 — THE PRODUCT</p>
            <h2 className="reveal-target">B2B Wholesale<br/><span>Platform.</span></h2>
            <p className="section-text reveal-target">
              {data.description}
            </p>
          </RevealText>
        </section>

        {/* 03 — CUSTOMER EXPERIENCE */}
        <section className="cs-section cs-device-section">
          <RevealText elementType="div">
            <p className="section-label reveal-target">03 — CUSTOMER EXPERIENCE</p>
            <h2 className="reveal-target">Customer<br/><span>App.</span></h2>
            <p className="section-text reveal-target">
              {ecosystem.customerApp.description}
            </p>
          </RevealText>
          <div className="cs-device-wrapper mt-20">
            <ProjectDevice type="phone" src={null} />
          </div>
        </section>

        {/* 04 — ECOSYSTEM */}
        <section className="cs-section cs-ecosystem">
          <RevealText elementType="div" className="ecosystem-diagram">
            <p className="section-label reveal-target">04 — ECOSYSTEM</p>
            
            <div className="diagram-node reveal-target">CUSTOMER APP</div>
            <div className="diagram-line reveal-target"></div>
            <div className="diagram-node primary reveal-target">B2B PLATFORM</div>
            <div className="diagram-line reveal-target"></div>
            <div className="diagram-node reveal-target">MANUFACTURER APP</div>
          </RevealText>
        </section>

        {/* 05 — PLATFORM EXPERIENCE */}
        <section className="cs-section cs-device-section">
          <RevealText elementType="div">
            <p className="section-label reveal-target">05 — PLATFORM EXPERIENCE</p>
            <h2 className="reveal-target">B2B<br/><span>Website.</span></h2>
            <p className="section-text reveal-target">
              {ecosystem.website.description}
            </p>
          </RevealText>
          <div className="cs-device-wrapper mt-20">
            <ProjectDevice type="desktop" src={ecosystem.website.gallery[0]} />
          </div>
        </section>

        {/* 06 — MANUFACTURER EXPERIENCE */}
        <section className="cs-section cs-device-section">
          <RevealText elementType="div">
            <p className="section-label reveal-target">06 — MANUFACTURER EXPERIENCE</p>
            <h2 className="reveal-target">Partner<br/><span>App.</span></h2>
            <p className="section-text reveal-target">
              {ecosystem.manufacturerApp.description}
            </p>
          </RevealText>
          <div className="cs-device-wrapper mt-20">
            <ProjectDevice type="phone" src={ecosystem.manufacturerApp.heroImage} />
          </div>
        </section>

        {/* 07 — VISUAL SHOWCASE */}
        <section className="cs-section cs-gallery-section">
          <RevealText elementType="div">
            <p className="section-label reveal-target">07 — VISUAL SHOWCASE</p>
            <h2 className="reveal-target">Screenshot<br/><span>Gallery.</span></h2>
          </RevealText>
          
          <div className="mt-20">
            <h3 className="gallery-title">WEBSITE</h3>
            <ProjectGallery screens={ecosystem.website.gallery} type="desktop" />
          </div>

          <div className="mt-20">
            <h3 className="gallery-title">MANUFACTURER APP</h3>
            <ProjectGallery screens={ecosystem.manufacturerApp.gallery} />
          </div>

          <div className="mt-20">
            <h3 className="gallery-title">CUSTOMER APP</h3>
            <ProjectGallery screens={ecosystem.customerApp.gallery} />
          </div>
        </section>

        {/* 08 — TECHNOLOGY */}
        <section className="cs-section cs-tech">
          <RevealText elementType="div">
            <p className="section-label reveal-target">08 — TECHNOLOGY</p>
            <h2 className="reveal-target">Tech<br/><span>Stack.</span></h2>
            <ul className="tech-list reveal-target">
              {data.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </RevealText>
        </section>

        {/* 09 — NEXT PROJECT */}
        <ProjectNavigation 
          nextProjectLink="/projects/ambition-aqua-biotech"
          nextProjectTitle="AMBITION AQUA BIOTECH"
        />

        <Contact />

        <InteractiveFooter />
      </main>
    </PageTransition>
  );
}
